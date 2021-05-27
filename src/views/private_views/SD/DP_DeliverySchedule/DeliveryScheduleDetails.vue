<template>
    <div class="layout-container">
      <div class="container-fluid">
        <div class="col-12 delivery_schedule-body">
          <div class="row ds-header" style="margin-bottom: 0;"> 
              <div class="col-lg-6 col-6">
                <p class="sr_name">SR: <span>{{ SELECTED_DP_DS_LIST_ITEM ? SELECTED_DP_DS_LIST_ITEM.dp_force.force_name : '' }}</span></p>
              </div>

              <div class="col-lg-6 col-6 d-flex align-items-center justify-content-end">
                <div class="product-header-info"> 
                    <div class="info">
                        <p>Status: <span class="open">{{ DS_STATUS }}</span></p>
                        <p>Date: <span class="date">{{ SELECTED_DP_DS_LIST_ITEM ? dateFormat(SELECTED_DP_DS_LIST_ITEM.date) : '' }}</span></p>
                    </div>
                </div>
              </div>
          </div>

          <div id="delivery_schedule-tab">       
            <ul class="nav nav-tabs mb-3" id="lineTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="underline_invoice-tab" data-toggle="tab" href="#underline_invoice" role="tab" aria-controls="underline_invoice" aria-selected="false">Invoices</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="underline_map-tab" data-toggle="tab" href="#underline_map" role="tab" aria-controls="underline_map" aria-selected="false">Map View</a>
                </li>
            </ul>
    
            <div class="tab-content" id="delivery_scheduleTabContent">


                <div class="tab-pane fade show active" id="underline_invoice" role="tabpanel" aria-labelledby="underline_invoice-tab">
                  <!-- Start Delivery Schedule Table Area  -->
                    <table class="delivery_schedule-table">
                        <thead>
                          <tr>
                              <th>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" style="opacity: 0 !important;">
                              </th>
                              <th>Customer</th>
                              <th>Invoice No</th>
                              <th style="justify-content: flex-end;">Amount</th>
                              <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, i) in SELECTED_DP_DS_LIST_DETAILS" :key="i">
                              <td>
                                <!-- <input class="form-check-input" type="checkbox" value="" :id="'flexCheckChecked-' + i" @change="inputCheckboxOnChangeHandler(item, i)" v-if="DS_STATUS === 'OPEN'"> -->
                                <input class="form-check-input" type="checkbox" value="" :id="'flexCheckChecked-' + i" @change="inputCheckboxOnChangeHandler(item, i)" v-if="DS_STATUS === 'OPEN'">
                              </td>
                              <td>
                                  <div>
                                      <p class="customer_name">{{ item.customer_name }}</p>
                                      <p class="order">Order: <span>{{ dateFormat(item.order_date) }}</span> <span>({{ dateDifference(item.order_date) }} days Ago)</span> </p>
                                  </div>
                              </td>
                              <td>
                                <p data-toggle="modal" data-target="#invoice-modal" @click="singleInvoiceClickHandler(item)">{{ item.invoice_no }}</p>
                              </td>
                              <td style="justify-content: flex-end;">
                                <p>{{ Number(item.inv_total).toFixed(2) }}</p>
                              </td>
                              <td>
                                <a title="Add bulk-button" @click="singleInvoicePlusClickHandler(item, i)" data-toggle="tooltip" data-placement="bottom" v-if="SELECTED_INVOICE_LIST_FROM_TABLE.length === 0 && DS_STATUS === 'OPEN'"><i class="zmdi zmdi-plus"></i></a>
                                <!-- <a title="Reshedule" data-toggle="tooltip" data-placement="bottom" v-if="SELECTED_INVOICE_LIST_FROM_TABLE.length === 0" @click="singleRescheduleCalenderClickHandler(item, i)"><i class="zmdi zmdi-calendar-alt"></i></a> -->
                                <a title="Reshedule" data-toggle="modal" data-target="#reshedule-modal" data-placement="bottom" v-if="SELECTED_INVOICE_LIST_FROM_TABLE.length === 0 && DS_STATUS === 'OPEN'" @click="singleRescheduleCalenderClickHandler(item, i)"><i class="zmdi zmdi-calendar-alt"></i></a>
                                <a title="Reshedule" v-if="SELECTED_INVOICE_LIST_FROM_TABLE.length === 0 && DS_STATUS === 'OPEN'" @click="singleReschedulePrintClickHandler(item, i)"><i class="zmdi zmdi-print"></i></a>
                              </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                              <th colspan="2">
                                  <span class="bulk-button" @click="bulkAddClickHandler" v-if="DS_STATUS === 'OPEN'"><span class="fa fa-plus" aria-hidden="true" style="margin-right: 6px;"></span>Bulk Add</span>
                                  <span class="bulk-button" data-toggle="modal" data-target="#reshedule-modal" v-if="DS_STATUS === 'OPEN'"><i class="zmdi zmdi-calendar-alt"></i>Bulk Reschedule</span>
                              </th>
                              <th><p>Total Invoice: <span>{{ SELECTED_DP_DS_LIST_DETAILS ? SELECTED_DP_DS_LIST_DETAILS.length : 0 }}</span></p></th>
                              <th style="justify-content: flex-end;"><p>Total: <span>{{ Number(DP_DS_TOTAL_INVOICE_AMOUNT).toFixed(2) }}</span></p></th>
                              <th></th>
                          </tr>
                        </tfoot>
                    </table>





                    <!------------ Start Reshedule Modal ------------>
                    <div class="modal" id="reshedule-modal" tabindex="-1" role="dialog" aria-labelledby="InwardTransfer" aria-hidden="true" style="width: 500px; height: 260px; padding: 0;">
                      <div class="modal-dialog modal-dialog-centered" style="margin: 0; margin-right: -17px;">
                        <div class="modal-content" style="padding: 0; border: none;">
                          <div class="modal-header">
                            <h5 class="modal-title">Bulk Reschedule</h5>
                            <button type="button" id="bulk-reschedule-close-btn" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true" @click="bulkRescheduleCloseClickHandler">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <p class="invoice-list">Invoices: 
                                <span class="inv-nowrap">
                                    <span v-for="(item, i) in SELECTED_INVOICE_LIST_FROM_TABLE" :key="i">{{ item.invoice_no }}{{ checkElementLengthToSetComma(i, SELECTED_INVOICE_LIST_FROM_TABLE) }}</span>
                                </span>
                                <span v-if="SELECTED_INVOICE_LIST_FROM_TABLE ? (SELECTED_INVOICE_LIST_FROM_TABLE.length - 2) > 0 : false">
                                    <span class="moreInvoice">More {{ SELECTED_INVOICE_LIST_FROM_TABLE ? (SELECTED_INVOICE_LIST_FROM_TABLE.length - 2) : 0 }}+</span>
                                </span>
                            </p> 
                            <div class="row">
                              <div class="col-lg-6 form-group">
                                <label for="sr_name">Select SR</label>
                                <select class="form-control" id="sr_name" v-model="selected_da_from_dp_list">
                                  <option :value="null" selected>Select SR</option>
                                  <!-- <option v-for="(item, i) in DP_LIST_WITH_DA" :key="i" :value="item">{{ item.get_adm_user.name }}</option> -->
                                  <option v-for="(item, i) in DP_LIST_WITH_DA" :key="i" :value="item">{{ item.get_adm_user ? ((item.get_adm_user.employee_id) + " - " + item.get_adm_user.name + (item.get_adm_user.get_person_detail.phone ? (" (" + item.get_adm_user.get_person_detail.phone + ")") : '')) : '' }}</option>
                                </select>
                              </div>
                              <div class="col-lg-6 form-group" >
                                <label for="shift_to">Shift to</label>
                                <input type="date" class="form-control" id="shift_to" v-model="bulk_reschedule_date">
                              </div>
                            </div>

                            <div class="modal-footer justify-content-center">
                              <a><button type="button" class="btn btn-primary btn-global" @click="bulkReschedulingSaveBtnClickHandler">Save</button></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>




                    <!------------ Start Invoice Modal------------>
                    <div class="modal" id="invoice-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="width: 60%; min-width: 650px; max-width: 800px; height: 490px, max-height: unset; padding-right: 0;">
                      <div class="modal-dialog modal-lg modal-dialog-centered" style="margin: 0; max-width: unset; margin-right: -17px;">
                        <div class="modal-content" style="padding: 0; width: 100%; border: none;">
                          <div class="modal-header">
                            <h5 class="modal-title">Invoice</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                          <div class="row customer_info">
                            <div class="col-lg-4 col-12">
                            <p>Order/Invoice No: <span>{{ DP_DS_INVOICE_DETAILS ? DP_DS_INVOICE_DETAILS.invoice_no : '' }}</span></p>
                            </div>
                            <div class="col-lg-4 col-12">
                              <p>Date: <span>{{ DP_DS_INVOICE_DETAILS ? dateFormat(DP_DS_INVOICE_DETAILS.invoice_date) : '' }}</span></p>
                            </div>
                            <div class="col-lg-4 col-12">
                              <p>Total: <span>{{ DP_DS_INVOICE_DETAILS ? Number(DP_DS_INVOICE_DETAILS.inv_tp).toFixed(2) : '' }}</span></p>
                            </div>
                            <div class="col-lg-4 col-12">
                              <p>Customer: <span>{{ DP_DS_INVOICE_DETAILS ? DP_DS_INVOICE_DETAILS.sbu_customer_info.display_name : '' }}</span></p>
                              </div>
                              <div class="col-lg-4 col-12">
                                <p>Type: <span>{{ DP_DS_INVOICE_DETAILS ? (DP_DS_INVOICE_DETAILS.sbu_customer_info.credit_flag === "N" ? 'CASH' : 'CREDIT') : '' }}</span></p>
                              </div>
                              <div class="col-lg-4 col-12">
                                <p>Current Due: <span>{{ CURRENT_DUE ? Number(CURRENT_DUE).toFixed(2) : 0.00 }}</span></p>
                              </div>
                              <div class="col-lg-4 col-12">
                                <!-- <p>SR: <span>{{ DP_DS_INVOICE_DETAILS ? DP_DS_INVOICE_DETAILS.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info.name : '' }}</span></p> -->
                                <p>SR: <span>{{ SELECTED_DP_DS_LIST_ITEM ? SELECTED_DP_DS_LIST_ITEM.dp_force.force_name : '' }}</span></p>
                              </div>
                              <div class="col-lg-4 col-12">
                                <p>Scheduled: <span>{{ DP_DS_INVOICE_DETAILS ? dateFormat(DP_DS_INVOICE_DETAILS.invoice_date) : '' }}</span></p>
                              </div>
                          </div>

                          <div class="row invoice-modal-table">
                            <table class="col-12">
                              <thead>
                                <tr>
                                  <th>Items</th>
                                  <th>Type</th>
                                  <th>Amount</th>
                                </tr>
                              </thead>
                              <tbody>  
                                <tr v-for="(item, i) in DP_DS_INVOICE_DETAILS ? DP_DS_INVOICE_DETAILS.invoice_details : 0" :key="i">
                                  <td>
                                    <p>{{ item.product_info.com_pack_size }} - {{ item.product_info.prod_name }}</p>
                                  </td>
                                  <td>
                                    <p>{{ item.sbu_product_info.element_info.element_name }}</p>
                                  </td>
                                  <td>
                                    <p>{{ Number(item.inv_tp).toFixed(2) }}</p>
                                  </td>
                                </tr>
                              </tbody>
                              <tfoot>
                                <tr>
                                  <th colspan="2"><span>Subtotal:</span></th>
                                  <th><p>{{ Number(INVOICE_DETAILS_TOTAL_SECTION.subtotal).toFixed(2) }}</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"><span>(+) VAT:</span></th>
                                  <th><p>{{ Number(INVOICE_DETAILS_TOTAL_SECTION.vat).toFixed(2) }}</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"><span>(-) Discount:</span></th>
                                  <th><p>{{ Number(INVOICE_DETAILS_TOTAL_SECTION.discount).toFixed(2) }}</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"><span>Gross Total:</span></th>
                                  <th><p>{{ Number(INVOICE_DETAILS_TOTAL_SECTION.gross_total).toFixed(2) }}</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"><span>(+/-) Rounding Adjustment:</span></th>
                                  <th><p>{{ Number(INVOICE_DETAILS_TOTAL_SECTION.rounding_adj).toFixed(2) }}</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"> <span>Grand Total:</span></th>
                                  <th><p>{{ Number(INVOICE_DETAILS_TOTAL_SECTION.grand_total).toFixed(2) }}</p></th>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="underline_map" role="tabpanel" aria-labelledby="underline_map-tab">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8332148972645!2d90.37697376498139!3d23.753326284587903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ac20cff015%3A0xff2b5ccc3b603741!2sShukrabad%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1621413506321!5m2!1sen!2sbd" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
          </div>

          </div>
        </div>

        <!-- CONFIRMATION MODAL -->
        <div class="modal-popup-section order-proceed-modal" v-if="inv_confirm_modal">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">{{ inv_confirm_modal_msg ? inv_confirm_modal_msg : '' }}</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                    <div class="popup-cancel-btn-section">
                        <span @click="cancelPaymentConfirmationClickHandler">Cancel</span>
                    </div>
                    <div class="popup-confirm-btn-section">
                        <span @click="confirmPaymentConfirmationClickHandler">Confirm</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Success Message -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="msg_popup_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">{{ msg_popup_modal_msg }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import GlobalDateFormat from '../../../../functions/GlobalDateFormat'
const globalDateFormat = new GlobalDateFormat()
import PP_Invoice_Type_2_Single from '../../../../functions/Print_Func/PP_Invoice_Type_2_Single'
const pp_Invoice_Type_2_Single = new PP_Invoice_Type_2_Single()

import Service from '../../../../service/ERPSidebarService'
const service = new Service()

export default {
    props: ["SELECTED_DP_DS_LIST_ITEM", "SELECTED_DP_DS_LIST_DETAILS"],
    data() {
        return {
            DS_STATUS: null,
            DP_DS_TOTAL_INVOICE_AMOUNT: 0.00,
            DP_DS_INVOICE_DETAILS: null,
            CURRENT_DUE: null,
            INVOICE_DETAILS_TOTAL_SECTION: {
                subtotal: 0.00,
                vat: 0.00,
                discount: 0.00,
                gross_total: 0.00,
                rounding_adj: 0.00,
                grand_total: 0.00,
            },

            SELECTED_INVOICE_LIST_FROM_TABLE: [],
            SELECTED_INVOICE_ID_LIST_FROM_TABLE: [],
            DP_LIST_WITH_DA: null,
            selected_da_from_dp_list: null,
            bulk_reschedule_date: null,

            inv_confirm_modal: false,
            inv_confirm_modal_msg: null,
            CONFIRM_MODAL_FOR: null,

            msg_popup_modal: false,
            msg_popup_modal_msg: null,
        }
    },
    computed: {
        SELECTED_INVOICE_NUMBERS_LIST() {
            let invoice_id_list = []
            if(this.SELECTED_INVOICE_LIST_FROM_TABLE.length > 0) {
                for(let i=0; i<this.SELECTED_INVOICE_LIST_FROM_TABLE.length; i++) {
                    let inv = {
                        invoice_id: this.SELECTED_INVOICE_LIST_FROM_TABLE[i].inv_id
                    }
                    invoice_id_list.push(inv)
                }
            }
            return invoice_id_list
        },
        SELECTED_INVOICE_NUMBERS_LIST_FOR_INV_STAT_N() {
            let invoice_id_list = []
            if(this.SELECTED_INVOICE_LIST_FROM_TABLE.length > 0) {
                for(let i=0; i<this.SELECTED_INVOICE_LIST_FROM_TABLE.length; i++) {
                    if(this.SELECTED_INVOICE_LIST_FROM_TABLE[i].inv_stat === 'N') {
                        let inv = {
                            invoice_id: this.SELECTED_INVOICE_LIST_FROM_TABLE[i].inv_id
                        }
                        invoice_id_list.push(inv)
                    }
                }
            }
            return invoice_id_list
        },
    },
    components: {
    },
    created() {},
    async mounted() {
    },
    methods: {
        dateFormat(dt) {
            return globalDateFormat.dateFormatT4(dt)
        },
        dateDifference(dt) {
            let date1 = new Date(dt)
            let date2 = new Date()
            /*var diff = new Date(date2.getTime() - date1.getTime())
            console.log(date2.getTime() / (24 * 60 * 60 * 1000))
            // console.log(date1.getTime())

            let yr_diff = diff.getUTCFullYear() - 1970
            let mn_diff = diff.getUTCMonth()
            let dd_diff = diff.getUTCDate() - 1

            let str = '0'
            if(yr_diff > 0) {
            str = yr_diff + ' ' + (yr_diff > 1 ? 'years' : 'year') + ' ' + mn_diff + ' ' + (mn_diff > 1 ? 'months' : 'month') + ' ' + dd_diff + ' ' + (dd_diff > 1 ? 'days' : 'day')
            } else if(yr_diff === 0 && mn_diff > 0) {
            str = mn_diff + ' ' + (mn_diff > 1 ? 'months' : 'month') + ' ' + dd_diff + ' ' + (dd_diff > 1 ? 'days' : 'day')
            } else if(yr_diff === 0 && mn_diff === 0 && dd_diff >= 0) {
            str = dd_diff + ' ' + (dd_diff > 1 ? 'days' : 'day')
            }
            return str*/
            let diffInMs   = new Date(date2) - new Date(date1)
            let diffInDays = diffInMs / (1000 * 60 * 60 * 24);

            return parseInt(diffInDays)
        },
        createDSStatus(status) {
            let str = ''
            switch(status) {
                case 'N':
                    str = 'NEW'
                    break
                case 'O':
                    str = 'OPEN'
                    break
                case 'L':
                    str = 'LOCKED'
                    break
                case 'DP':
                    str = 'DELIVERYING'
                    break
                case 'DC':
                    str = 'DELIVERY COMPLETED'
                    break
                case 'C':
                    str = 'CLOSED'
                    break
                default:
                    break
            }
            return str
        },
        async singleInvoiceClickHandler(item) {
            console.log(item)
            await this.DP_DS_INVOICE_DETAILS__FROM_SERVICE(item.inv_id)
        },
        inputCheckboxOnChangeHandler(item, i) {
            console.log(i)
            console.log(item)
            if(document.querySelector('#flexCheckChecked-' + i).checked === true) {
                this.SELECTED_INVOICE_LIST_FROM_TABLE.push(item)
            } else {
                console.log('not checked : ' + item.inv_id)
                if(this.SELECTED_INVOICE_LIST_FROM_TABLE.length) {
                    for( let i=0; i<this.SELECTED_INVOICE_LIST_FROM_TABLE.length; i++ ) {
                        if(parseInt(this.SELECTED_INVOICE_LIST_FROM_TABLE[i].inv_id) === parseInt(item.inv_id)) {
                            console.log(this.SELECTED_INVOICE_LIST_FROM_TABLE[i].inv_id)
                            console.log(item.inv_id)
                            this.SELECTED_INVOICE_LIST_FROM_TABLE.splice(i, 1)
                        }
                    }
                }
            }
            console.log(this.SELECTED_INVOICE_LIST_FROM_TABLE)
        },
        checkElementLengthToSetComma(j, element) {
            return (j < element.length - 1) ? ', ' : ''
        },
        bulkAddClickHandler() {
            console.log(this.SELECTED_INVOICE_NUMBERS_LIST_FOR_INV_STAT_N)
            if(this.inv_confirm_modal) {
                this.inv_confirm_modal = false
            } else {
              if(this.anyCheckboxIsSelected() > 0) {
                this.CONFIRM_MODAL_FOR = 'BULK ADD'
                this.inv_confirm_modal = true
                this.inv_confirm_modal_msg = 'Invoice add to DS'
              } else {
                alert('PLease select at least one invoice')
              }
            }
        },
        anyCheckboxIsSelected() {
          let selector = document.querySelectorAll('table tbody .form-check-input')
          console.log(selector.length)
          let count = 0
          for(let i=0; i<selector.length; i++) {
            if(selector[i].checked === true) {
              count++
            }
          }
          return count
        },
        bulkReschedulingSaveBtnClickHandler() {
            console.log(this.SELECTED_INVOICE_NUMBERS_LIST)
            console.log(this.selected_da_from_dp_list)
            console.log(this.bulk_reschedule_date)
            if(this.selected_da_from_dp_list && this.bulk_reschedule_date && this.SELECTED_INVOICE_NUMBERS_LIST) {
                if(this.inv_confirm_modal) {
                    this.inv_confirm_modal = false
                } else {
                    this.CONFIRM_MODAL_FOR = 'BULK RESCHEDULE'
                    this.inv_confirm_modal = true
                    this.inv_confirm_modal_msg = 'Reschedule invoices to DS'
                }
            } else {
                alert('Invoice, SR, Date should not be empty')
            }
        },
        cancelPaymentConfirmationClickHandler() {
            this.inv_confirm_modal = false
            this.CONFIRM_MODAL_FOR = null
        },
        async confirmPaymentConfirmationClickHandler() {
            this.inv_confirm_modal = false
            if(this.CONFIRM_MODAL_FOR === 'BULK ADD') {
                await this.ADD_INVOICE_TO_CURRENT_DS__FROM_SERVICE()
                this.CONFIRM_MODAL_FOR = null
            } else if(this.CONFIRM_MODAL_FOR === 'BULK RESCHEDULE') {
                await this.RESCHEDULE_INVOICE__FROM_SERVICE()
                this.CONFIRM_MODAL_FOR = null
            }
        },
        bulkRescheduleCloseClickHandler() {
            this.SELECTED_INVOICE_LIST_FROM_TABLE = []
            for(let i=0; i<this.SELECTED_DP_DS_LIST_DETAILS.length; i++) {
                if(document.querySelector('#flexCheckChecked-' + i).checked === true) {
                    document.querySelector('#flexCheckChecked-' + i).checked = false
                }
            }
        },
        singleInvoicePlusClickHandler(item, i) {
            console.log(i)
            // this.SELECTED_INVOICE_LIST_FROM_TABLE = []
            // this.SELECTED_INVOICE_LIST_FROM_TABLE.push(item)
            console.log(item)

            this.SELECTED_INVOICE_LIST_FROM_TABLE.push(item)
            this.ADD_INVOICE_TO_CURRENT_DS__FROM_SERVICE()
        },
        singleRescheduleCalenderClickHandler(item, i) {
            console.log(i)

            this.SELECTED_INVOICE_LIST_FROM_TABLE.push(item)
            // this.RESCHEDULE_INVOICE__FROM_SERVICE()
        },
        singleReschedulePrintClickHandler(item, i) {
          console.log(i)
          console.log(item)
          this.PRING_INVOCIE_DETAILS__FROM_SERVICE(item.inv_id)
        },
        // --------------------------------------------------------------------------------------------
        // SERVICE CALL
        async DP_DS_INVOICE_DETAILS__FROM_SERVICE(invoice_id) {
            this.DP_DS_INVOICE_DETAILS = null
            this.CURRENT_DUE = null
            await service.getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(invoice_id)
                .then(res => {
                    console.log(res.data)
                    this.DP_DS_INVOICE_DETAILS = res.data.invoice_details
                    this.CURRENT_DUE = res.data.current_due
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.DP_DS_INVOICE_DETAILS = null
                        this.CURRENT_DUE = null
                    }
                })
        },
        async DP_LIST_WITH_DA__FROM_SERVICE() {
            this.DP_LIST_WITH_DA = null
            await service.getDPListWithDA__DP_DS()
                .then(res => {
                    console.log(res.data)
                    this.DP_LIST_WITH_DA = res.data.da_list
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.DP_LIST_WITH_DA = null
                    }
                })
        },
        async ADD_INVOICE_TO_CURRENT_DS__FROM_SERVICE() {
            this.msg_popup_modal = true
            this.msg_popup_modal_msg = 'Please wait...'
            await service.getAddInvoiceToCurrentDS__DP_DS(this.SELECTED_DP_DS_LIST_ITEM.dp_force.ds_id, this.SELECTED_INVOICE_NUMBERS_LIST_FOR_INV_STAT_N)
                .then(res => {
                    console.log(res.data)
                    this.msg_popup_modal_msg = res.data.message + '. ' + res.data.invoice_info

                    this.$emit('RELOAD_LEFT_SECTION')
                    setTimeout( () => {
                        this.msg_popup_modal = false
                        this.msg_popup_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.msg_popup_modal_msg = err
                        setTimeout( () => {
                            this.msg_popup_modal = false
                            this.msg_popup_modal_msg = null
                        }, 2000)
                    }
                })
        },
        async RESCHEDULE_INVOICE__FROM_SERVICE() {
            this.msg_popup_modal = true
            this.msg_popup_modal_msg = 'Please wait...'
            await service.getRescheduleInvoice__DP_DS(this.selected_da_from_dp_list.user_id, this.bulk_reschedule_date, this.SELECTED_INVOICE_NUMBERS_LIST)
                .then(res => {
                    console.log(res.data)
                    this.msg_popup_modal_msg = res.data.message
                    this.bulkRescheduleCloseClickHandler()
                    document.getElementById('bulk-reschedule-close-btn').click()
                    this.$emit('RELOAD_LEFT_SECTION')
                    setTimeout( () => {
                        this.msg_popup_modal = false
                        this.msg_popup_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.msg_popup_modal_msg = err
                        this.bulkRescheduleCloseClickHandler()
                        document.getElementById('bulk-reschedule-close-btn').click()
                        setTimeout( () => {
                            this.msg_popup_modal = false
                            this.msg_popup_modal_msg = null
                        }, 2000)
                    }
                })
        },
        async PRING_INVOCIE_DETAILS__FROM_SERVICE(invoice_id) {
          console.log(invoice_id)
          await service.getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(invoice_id)
            .then(res => {
              console.log(res.data)
              if(res.data.invoice_details.invoice_details.length > 0) {
                pp_Invoice_Type_2_Single.print_invoice(res.data.invoice_details, res.data.due_details)           
              } else {
                alert('No Invoice data found')
              }
            })
        }
    },
    watch: {
        SELECTED_DP_DS_LIST_DETAILS(newVal) {
            console.log(newVal)
            this.DP_DS_TOTAL_INVOICE_AMOUNT = 0.00

            this.INVOICE_DETAILS_TOTAL_SECTION.subtotal = 0.00
            this.INVOICE_DETAILS_TOTAL_SECTION.vat = 0.00
            this.INVOICE_DETAILS_TOTAL_SECTION.discount = 0.00
            this.INVOICE_DETAILS_TOTAL_SECTION.gross_total = 0.00
            this.INVOICE_DETAILS_TOTAL_SECTION.rounding_adj = 0.00
            this.INVOICE_DETAILS_TOTAL_SECTION.grand_total = 0.00

            if(newVal) {
                console.log(newVal)
                for(let i=0; i<newVal.length; i++) {
                    this.DP_DS_TOTAL_INVOICE_AMOUNT += parseFloat(newVal[i].inv_total)
                    console.log(this.DP_DS_TOTAL_INVOICE_AMOUNT)

                    // this.DS_STATUS = this.createDSStatus(newVal[i].ds_status)
                }
                this.DP_LIST_WITH_DA__FROM_SERVICE()
            }
        },
        SELECTED_DP_DS_LIST_ITEM(newVal) {
            this.DS_STATUS = null
            if(newVal) {
                console.log(newVal.dp_force.ds_status)
                this.DS_STATUS = this.createDSStatus(newVal.dp_force.ds_status)
            }
        },
        DP_DS_INVOICE_DETAILS(newVal) {
            if(newVal) {
                
                // this.INVOICE_DETAILS_TOTAL_SECTION = {
                //     subtotal: 0.00,
                //     vat: 0.00,
                //     discount: 0.00,
                //     gross_total: 0.00,
                //     rounding_adj: 0.00,
                //     grand_total: 0.00,
                // }
                console.log(newVal.invoice_details)
                // for(let i=0; i<newVal.invoice_details.length; i++) {
                //     this.INVOICE_DETAILS_TOTAL_SECTION.subtotal += parseFloat(newVal.invoice_details[i].net_amount)
                //     this.INVOICE_DETAILS_TOTAL_SECTION.vat += parseFloat(newVal.invoice_details[i].ret_vat)
                //     this.INVOICE_DETAILS_TOTAL_SECTION.discount += parseFloat(newVal.invoice_details[i].ret_discount)
                //     this.INVOICE_DETAILS_TOTAL_SECTION.gross_total += parseFloat(newVal.invoice_details[i].net_amount)
                //     this.INVOICE_DETAILS_TOTAL_SECTION.rounding_adj += parseFloat(newVal.invoice_details[i].net_amount)
                //     this.INVOICE_DETAILS_TOTAL_SECTION.grand_total += parseFloat(newVal.invoice_details[i].net_amount)
                // }

                this.INVOICE_DETAILS_TOTAL_SECTION.subtotal = newVal.inv_tp
                this.INVOICE_DETAILS_TOTAL_SECTION.vat = newVal.inv_vat
                this.INVOICE_DETAILS_TOTAL_SECTION.discount = newVal.inv_discount
                this.INVOICE_DETAILS_TOTAL_SECTION.gross_total = newVal.inv_total - newVal.inv_discount
                
                let total = this.INVOICE_DETAILS_TOTAL_SECTION.gross_total
                let round_total = Math.round(total);
                let ROUNDING_ADJ = (total - round_total).toFixed(2);

                this.INVOICE_DETAILS_TOTAL_SECTION.rounding_adj = ROUNDING_ADJ
                this.INVOICE_DETAILS_TOTAL_SECTION.grand_total = newVal.net_total
            }
        },
        SELECTED_INVOICE_NUMBERS_LIST(newVal) {
            if(newVal) {
                console.log(newVal)
            }
        },
        SELECTED_INVOICE_NUMBERS_LIST_FOR_INV_STAT_N(newVal) {
            if(newVal) {
                console.log(newVal)
            }
        },
    },
}
</script>

<style>
:root{
  --table-height-2: 45px;
  --table-height: 30px;
}

.delivery_schedule-body {
  margin-top: 15px;
  min-height: calc(100vh - (var(--used-height) - (-30px)));
  background-color: var(--white);
  -webkit-box-shadow: 0px 0px 8px #026CD11A;
          box-shadow: 0px 0px 8px #026CD11A;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.delivery_schedule-body .ds-header {
  padding: 10px 0px;
  border-bottom: 1px solid var(--border-color);
  font-size: var(--font14);
}
.delivery_schedule-body .ds-header .sr_name{
  color: var(--text-black);
}
.delivery_schedule-body .ds-header .sr_name span{
  color: var(--blue);
  font-weight: 500;
  /* text-decoration: underline; */
}
.delivery_schedule-body .ds-header p{
  color: var(--text-black);
}
.delivery_schedule-body .ds-header p .open{
  color: var(--green);
  font-weight: 500;
}
.delivery_schedule-body .ds-header p .date{
  color: var(--text-black);
  font-weight: 500;
}
#delivery_schedule-tab .nav-tabs { 
  border-bottom: 1px solid var(--border-color); 
  margin: 0px -15px;
}
#delivery_schedule-tab .nav-tabs li a {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: var(--font14);
  font-weight: 500;
  color: var(--black);
}
#delivery_schedule-tab .tab-content>.tab-pane { 
  padding: 0 0 0 0; 
}
#delivery_schedule-tab .nav-tabs .nav-link.active {
  border-color: transparent;
  border-bottom: 1px solid  var(--blue);
  color: var(--blue);
  background-color: transparent;
}
#delivery_schedule-tab .nav-tabs .nav-link.active:hover, 
#delivery_schedule-tab .nav-tabs .nav-link.active:focus {
  border-bottom: 1px solid  var(--blue);
}
#delivery_schedule-tab .nav-tabs .nav-link:focus,
#delivery_schedule-tab .nav-tabs .nav-link:hover {
  border-color: transparent;
}

/*--------- Start Delivery Schedule Table Area ---------*/
.delivery_schedule-table{
  display: block;
  empty-cells: show;
  border-spacing: 0;
  box-sizing: border-box;
}
.delivery_schedule-table tr{
  width: 100%;
  display:flex;
}
.delivery_schedule-table td,
.delivery_schedule-table th{
  flex-grow:1;
  display: block;
  padding: 0rem 1rem;
}
/* Start Table Head Area */
.delivery_schedule-table thead{ 
  position:relative;
  display: block;
  width:100%;
}
.delivery_schedule-table thead tr{
  height: var(--table-height-2);
  font-size: var(--font14);
  text-transform: uppercase;
  color: var(--blue);
  border-bottom: 1px solid var(--border-color);
}
.delivery_schedule-table thead tr th{
  height: var(--table-height-2);
  display:flex;
  align-items: center;
}
/* Start Table Body Area */
.delivery_schedule-table tbody{
  width:100%; 
  display: block; 
  position:relative;
  overflow-y:scroll;
  font-size: var(--font14);
  color:var(--text-black);
  height: calc( 100vh - (var(--used-height) + 250px));
}
.delivery_schedule-table tbody tr{
  width: 100%;
  display:flex;
  align-items: center;
  height: var(--table-height-2);
  border-bottom: 1px solid var(--border-color);
}
.delivery_schedule-table tbody tr:hover{
  background-color: var(--bluish-white);
}
.delivery_schedule-table tbody tr.active{
  background-color: var(--bluish-white);
}
.delivery_schedule-table tbody tr td{
  display: flex;
  align-items: center;
  font-size:var(--font14);
  height: var(--table-height-2);
}
.delivery_schedule-table tbody tr td i.zmdi-plus {
  /* background-color: tomato; */
  color: var(--blue);
}
.delivery_schedule-table tbody tr td svg {
  /* background-color: tomato; */
  color: var(--blue);
  width: 20px;
  cursor: pointer;
}
i {
  cursor: pointer;
}
svg {
  cursor: pointer;
}
/* Start Table Foot Area */
.delivery_schedule-table tfoot{ 
  display: block;
  width:100%;
  font-size: var(--font14);
}
.delivery_schedule-table tfoot tr{
  height: var(--table-height-2);
  display: flex;
  align-items: center;
  color: var(--blue);
  border-top: 1px solid  var(--bluish-white);
}
.delivery_schedule-table tfoot tr th{
  height: var(--table-height-2);
  display: flex;
  align-items: center;
}
/* Start Table Alignment Area*/
.delivery_schedule-table thead th:nth-child(1),
.delivery_schedule-table tbody td:nth-child(1){
  flex-basis:5%;
  flex-grow:1;
  display: flex;
  justify-content: center;
}
.delivery_schedule-table thead th:nth-child(2),
.delivery_schedule-table tbody td:nth-child(2){
  flex-basis:50%;
  flex-grow:1;
  display: flex;
  justify-content: start;
}
.delivery_schedule-table tbody td:nth-child(2) .order span{
  font-size: var(--font12);
}
.delivery_schedule-table tbody td:nth-child(2) .order span{
  color: var(--blue);
}
.delivery_schedule-table thead th:nth-child(3),
.delivery_schedule-table tbody td:nth-child(3){
  flex-basis: 15%;
  flex-grow:1;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.delivery_schedule-table tbody td:nth-child(3){
  color: var(--blue);
  text-decoration: underline;
}
.delivery_schedule-table thead th:nth-child(4),
.delivery_schedule-table tbody td:nth-child(4),
.delivery_schedule-table thead th:nth-child(5),
.delivery_schedule-table tbody td:nth-child(5){
  flex-basis: 15%;
  flex-grow:1;
  display: flex;
  justify-content: center;
}
.delivery_schedule-table tfoot th:nth-child(1){
  flex-basis:55%;
}
.delivery_schedule-table tfoot th:nth-child(2),
.delivery_schedule-table tfoot th:nth-child(3),
.delivery_schedule-table tfoot th:nth-child(4){
  flex-basis:15%;
  flex-grow:1;
  display: flex;
  justify-content: center;
}
.delivery_schedule-table .bulk-action{
  display: flex;
}
.delivery_schedule-table i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: var(--font18);
  border-radius: 100px;
  margin: 0px 5px;
  font-weight: 200;
  color: var(--blue);
  background-color: var(--white);
}
.delivery_schedule-table .bulk-button {
  display: flex;
  align-items: center;
  margin: 0px 15px;
  cursor: pointer;
  font-size: var(--font14);
}
.delivery_schedule-table .bulk-button span {
  font-size: var(--font18);
  margin-right: 10px;
  font-weight: 200;
  color: var(--blue);
}
/*--------- End Delivery Schedule Table Area ---------*/

/* Start Reshedule Modal */
.modal-header .modal-title{
  color: var(--black)!important;
  font-size: var(--font16)!important;
}
#reshedule-modal .modal-footer {
  padding-bottom: 0rem;
}
#reshedule-modal .form-control {
  font-size: var(--font14);
}
#reshedule-modal .invoice-list {
  display: flex;
  align-items: center;
  color: var(--blue);
  font-size: var(--font14);
  margin-bottom: 15px;
}
#reshedule-modal .invoice-list span{
  color: var(--text-black);
  font-size: var(--font14);
}
#reshedule-modal .invoice-list span .moreInvoice{
  color: var(--blue);
  background-color: var(--bluish-white);
  padding: 5px 10px;
  font-size: var(--font14);
  border-radius: 2px;
}
/* End Reshedule Modal */

/*--------- Start Invoice Modal Area ---------*/
#invoice-modal .modal-content {
    width: 90%;
    margin: auto;
}
#invoice-modal .modal-body{
    padding: 0rem 1rem;
}
#invoice-modal .modal-body .customer_info{
padding: 10px 0px;
}
#invoice-modal .modal-body .customer_info p{
  font-size: var(--font14);
  color: var(--text-black);
}
#invoice-modal .modal-body .customer_info p span{
  font-size: var(--font14);
  color: var(--blue);
  font-weight: 500;
}
.invoice-modal-table{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    box-sizing: border-box;
  }
  .invoice-modal-table tr{
    width: 100%;
    display:flex;
  }
  .invoice-modal-table td,
  .invoice-modal-table th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .invoice-modal-table thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .invoice-modal-table thead tr{
    height: var(--table-height-2);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .invoice-modal-table thead tr th{
    height: var(--table-height-2);
    display:flex;
    align-items: center;
  }
  /* Start Table Body Area */
  .invoice-modal-table tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    height: calc( 50vh - (var(--used-height) + 10px));
  }
  .invoice-modal-table tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .invoice-modal-table tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
  /* Start Table Foot Area */
  .invoice-modal-table tfoot{ 
    display: block;
    width:100%;
    font-size: var(--font14);
  }
  .invoice-modal-table tfoot tr{
    height: var(--table-height-2);
    display: flex;
    align-items: center;
    color: var(--blue);
    border-top: 1px solid  var(--bluish-white);
  }
  .invoice-modal-table tfoot tr .notmatch{
    color: var(--red);
  }
  .invoice-modal-table tfoot tr th{
    height: var(--table-height-2);
    display: flex;
    align-items: center;
  }
  /* Start Table Alignment Area*/
  .invoice-modal-table thead th:nth-child(1),
  .invoice-modal-table tbody td:nth-child(1){
    flex-basis:40%;
    flex-grow:1;
    display: flex;
    justify-content: start;
  }
  .invoice-modal-table thead th:nth-child(2),
  .invoice-modal-table tbody td:nth-child(2){
    flex-basis: 25%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .invoice-modal-table thead th:nth-child(3),
  .invoice-modal-table tbody td:nth-child(3){
    flex-basis:25%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .invoice-modal-table tfoot tr {
    height: 15px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
  }
  .invoice-modal-table tfoot tr span {
    color: var(--text-black);
    font-size: var(--font12);
    font-weight: 400;
  }
  .invoice-modal-table tfoot tr p {
    color: var(--text-black);
    font-size: var(--font12);
    font-weight: 400;
  }
  .invoice-modal-table tfoot tr th:nth-child(1){
    height: 15px;
    flex-basis:85%;
    display: flex;
    justify-content: flex-end;
  }
  .invoice-modal-table tfoot tr th:nth-child(2){
    height: 15px;
    flex-basis:25%;
    display: flex;
    justify-content: flex-end;
  }
  .invoice-modal-table tfoot tr:last-child {
    height: var(--table-height-2);
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
  }
  .invoice-modal-table tfoot tr:last-child span {
    color:  var(--blue);
    font-size: var(--font14);
    font-weight: 700;
  }
  .invoice-modal-table tfoot tr:last-child p {
    color: var(--blue);
    font-size: var(--font14);
    font-weight: 700;
  }
/*--------- End Invoice Modal Area ---------*/
@media screen and (max-width: 1440px) {
  :root {
    --table-height-2: 40px;
    }
}
.row.customer_info {
  margin-bottom: 0;
}
.inv-nowrap {
    width         : 180px;
    white-space   : nowrap;
    overflow      : hidden;
    text-overflow : ellipsis;
    vertical-align: middle;
}
</style>