<template>
        <div id="layout_container_collection_details" class="layout-container">
          <div class="container-fluid" style="padding: 0;">
            <div class="row collection_area">
                <div class="col-4" style="height: 100%; padding-top: 12px; padding-bottom: 0;" v-if="DS_CUSTOMER_LIST ? true : false">
                    <table class="collection-table-1">
                        <thead>
                            <tr>
                                <th class="type1" colspan="2">
                                <h5>Customers (<span>{{ DS_CUSTOMER_LIST ? DS_CUSTOMER_LIST.length : 0 }}</span>)</h5>
                                <div class="about-color">
                                    <p><span class="fa fa-square green"></span>Adjusted</p>
                                    <p><span class="fa fa-square orange"></span>Pending</p>
                                    <p><span class="fa fa-square gray"></span>Unadjusted</p>
                                </div>
                                </th>
                            </tr>
                            <tr>
                                <th>Customer</th>
                                <th>Type</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            <tr :id="'customer_card_body_' + i" class="customer_card_body" v-for="(item, i) in DS_CUSTOMER_LIST" :key="i" @click="singleCustomerClickHandler(item, i)" style="cursor: pointer;">
                                <td><p><span class="fa fa-square mr-2" :class="item.legend_status"></span>{{ item.customer_name ? item.customer_name : '' }}</p></td>
                                <td style="padding: 0;"><p style="min-width: 80px; font-size: 10px;">{{ item.type ? item.type : '' }}</p></td>
                                <td><p>{{ item.total_amount ? Number(item.total_amount).toFixed(2) : '' }}</p></td>
                            </tr>
                        </tbody>
                    
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <!-- <th>{{ totalAmountDSCustomerList(DS_CUSTOMER_LIST) }}</th> -->
                                <th>{{ Number(DS_CUSTOMER_LIST_TOTAL_AMOUNT).toFixed(2) }}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="col-8" style="height: 100%; padding-top: 12px;" v-if="COLLECTION_MASTER_CUSTOMER">
                    <table class="collection-table-2">
                        <thead>
                            <tr>
                                <th colspan="5">
                                    <h5>Collections (<span>{{ COLLECTION_MASTER_CUSTOMER ? COLLECTION_MASTER_CUSTOMER.length : 0 }}</span>)</h5>
                                </th>
                            </tr>
                            <tr>
                                <th style="flex-basis: 10%;">Mode</th>
                                <th style="flex-basis: 35%;">Description</th>
                                <th style="flex-basis: 15%;">Amount</th>
                                <th style="flex-basis: 15%;">Unadjusted</th>
                                <th style="flex-basis: 15%;">Value Date</th>
                                <th style="flex-basis: 10%;"></th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            <tr v-for="(item, i) in COLLECTION_MASTER_CUSTOMER" :key="i" style="height: 50px;">
                                <td style="flex-basis: 10%;"><p  @click="collectionMasterRowClickHandler(item, i)" style="cursor: pointer; color: var(--blue);">{{ item.collection_mode ? item.collection_mode : '' }}</p></td>
                                <td style="flex-basis: 35%;"><p>{{ item.description ? item.description : '' }}</p></td>
                                <td style="flex-basis: 15%;"><p>{{ item.amount ? Number(item.amount).toFixed(2) : '' }}</p></td>
                                <td style="flex-basis: 15%;"><p>{{ item.unadjusted_amt ? Number(item.unadjusted_amt).toFixed(2) : '' }}</p></td>
                                <td style="flex-basis: 15%;"><p>{{ item.value_date ? dateFormat(item.value_date) : '' }}</p></td>
                                <td style="flex-basis: 10%;"><a><i class="zmdi zmdi-refresh" @click="collectionAutoAdjustClickHandler(item, i)"></i></a></td>
                            </tr>
                        </tbody>
                    
                        <tfoot>
                            <tr>
                                <th style="flex-basis: 10%;">Total</th>
                                <th style="flex-basis: 35%;"></th>
                                <th style="flex-basis: 15%;">{{ Number(COLLECTION_MASTER_CUSTOMER_TOTAL_AMOUNT.amount).toFixed(2) }}</th>
                                <th style="flex-basis: 15%;">{{ Number(COLLECTION_MASTER_CUSTOMER_TOTAL_AMOUNT.unadj_amount).toFixed(2) }}</th>
                                <th style="flex-basis: 15%;"></th>
                                <th style="flex-basis: 10%;"></th>
                            </tr>
                        </tfoot>
                    </table>

                    <table class="collection-table-3">
                        <thead>
                            <tr>
                                <th colspan="7"><h5>Invoices (<span>{{ COLLECTION_CUSTOMER_INVOICE_LIST ? COLLECTION_CUSTOMER_INVOICE_LIST.length : 0 }}</span>)</h5></th>
                            </tr>
                            <tr>
                                <th style="min-width: 14%;">Invoice</th>
                                <th style="min-width: 14%; text-align: center;">Date</th>
                                <th style="min-width: 12%;">Amount</th>
                                <th style="min-width: 12%;">Paid</th>
                                <th style="min-width: 13%;">Panding</th>
                                <th style="min-width: 12%;">Due</th>
                                <th style="min-width: 13%;">Adjustment</th>
                                <th style="min-width: 10%;"></th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            <tr v-for="(item, i) in COLLECTION_CUSTOMER_INVOICE_LIST" :key="i">
                                <td style="min-width: 14%;"><p>{{ item.invoice ? item.invoice : '' }}</p></td>
                                <td style="min-width: 14%;"><p>{{ item.date ? dateFormat(item.date) : '' }}</p></td>
                                <td style="min-width: 12%;"><p>{{ item.amount ? Number(item.amount).toFixed(2) : '' }}</p></td>
                                <td style="min-width: 12%;"><p>{{ item.paid ? Number(item.paid).toFixed(2) : '' }}</p></td>
                                <td style="min-width: 13%;"><p>{{ item.pending ? Number(item.pending).toFixed(2) : '' }}</p></td>
                                <td style="min-width: 12%;"><p>{{ item.due ? Number(item.due).toFixed(2) : '' }}</p></td>
                                <td style="min-width: 13%;"><p>{{ item.adjustment ? Number(item.adjustment).toFixed(2) : '' }}</p></td>
                                <td style="min-width: 10%;">
                                    <a data-toggle="modal" data-target="#edit-collection-modal"><i class="zmdi zmdi-edit" @click="editCollectionInvoiceModalClickHandler(item)"></i></a>
                                    <a data-toggle="modal" data-target="#add-collection-modal"><i class="zmdi zmdi-plus" @click="addCollectionInvoiceModalClickHandler(item)"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    
                        <tfoot>
                            <tr>
                                <th style="min-width: 10%;">Total</th>
                                <th style="min-width: 15%;"></th>
                                <th style="min-width: 15%;">{{ Number(COLLECTION_CUSTOMER_INVOICE_LIST_TOTAL.amount).toFixed(2) }}</th>
                                <th style="min-width: 12%;">{{ Number(COLLECTION_CUSTOMER_INVOICE_LIST_TOTAL.paid).toFixed(2) }}</th>
                                <th style="min-width: 13%;">{{ Number(COLLECTION_CUSTOMER_INVOICE_LIST_TOTAL.pending).toFixed(2) }}</th>
                                <th style="min-width: 12%;">{{ Number(COLLECTION_CUSTOMER_INVOICE_LIST_TOTAL.due).toFixed(2) }}</th>
                                <th style="min-width: 13%;">{{ Number(COLLECTION_CUSTOMER_INVOICE_LIST_TOTAL.adjustment).toFixed(2) }}</th>
                    
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
          </div>
        <!------------ Start Add Collection Modal------------>
        <div class="modal" id="add-collection-modal" tabindex="-1" role="dialog" aria-labelledby="AddCollection" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Invoice Amount</h5>
                        <button type="button" id="add-collection-modal-close-btn" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
        
                            <div class="col-lg-6 form-group">
                                <label for="invoice_no">Invoice No</label>
                                <input type="text" v-model="add_inv_number" class="form-control" id="invoice_no" value="INV23414545" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="date">Date</label>
                                <input type="text" v-model="add_inv_date" class="form-control" id="date" value="20-Oct-2021" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="invoice_due">Due</label>
                                <input type="number" v-model="add_inv_total_due" class="form-control" id="invoice_due" value="100000" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="invoice_adjustment">Adjustment</label>
                                <input type="number" v-model="add_inv_adjustment_inp" class="form-control" id="invoice_adjustment" placeholder="Enter Adjustment Amount" style="background-color: #FFFFFF;">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-primary btn-global" @click="addCollectionModalSaveClickHandler">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!------------ End Add Collection Modal------------>
        
        <!------------ Start Edit Collection Modal------------>
        <div class="modal" id="edit-collection-modal" tabindex="-1" role="dialog" aria-labelledby="EditCollection" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update Invoice Amount</h5>
                        <button type="button" id="edit-collection-modal-close-btn" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
        
                            <div class="col-lg-6 form-group">
                                <label for="update_inv_amount_invoice_no">Invoice No</label>
                                <input type="text" v-model="add_inv_number" class="form-control" id="update_inv_amount_invoice_no" value="INV23414545" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="update_inv_amount_date">Date</label>
                                <input type="text" v-model="add_inv_date" class="form-control" id="update_inv_amount_date" value="20-Oct-2021" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="update_inv_amount_invoice_total">Amount</label>
                                <input type="number" v-model="update_inv_amount" class="form-control" id="update_inv_amount_invoice_total" value="100000" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="update_inv_amount_invoice_due">Due</label>
                                <input type="number" v-model="add_inv_total_due" class="form-control" id="update_inv_amount_invoice_due" value="100000" readonly>
                            </div>

                            <div class="col-lg-6 form-group">
                                <label for="update_inv_amount_adjustment">Adjustment</label>
                                <div class="input-group">
                                    <input type="number" v-model="add_inv_adjustment" class="form-control" id="update_inv_amount_adjustment" value="100000" aria-describedby="addon1" readonly>
                                    <div class="input-group-append">
                                        <!-- <span class="input-group-text fa fa-trash" id="addon1"></span> -->
                                        <i class="zmdi zmdi-delete"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="update_inv_amount_amount">Amount</label>
                                <input type="number" v-model="update_inv_amount_inp" class="form-control" id="update_inv_amount_amount" placeholder="Enter Adjustment Amount" style="background-color: #FFFFFF;">
                            </div>
                        </div>
        
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-primary btn-global" @click="editCollectionModalSaveClickHandler">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!------------ End Edit Collection Modal------------>
        <!-- Message Modal -->
        <div class="modal-popup-section order-proceed-modal" v-if="msg_popup_modal">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <div id="progressbar" class="jmi-progressbar">
                    <!-- <v-progress-circular indeterminate color="primary"></v-progress-circular> -->
                    <p>{{ msg_popup_modal_msg ? msg_popup_modal_msg : 'No message' }}</p>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import Service from '../../../../service/ERPSidebarService'
const service = new Service()
import GlobalDateFormat from '../../../../functions/GlobalDateFormat'
const globalDateFormat = new GlobalDateFormat()

export default {
    props: ["DS_CUSTOMER_LIST"],
    data() {
        return {
            SELECTED_CUSTOMER_DA_ID_FROM_CUSTOMER_LIST: null,
            COLLECTION_MASTER_CUSTOMER: null,
            COLLECTION_CUSTOMER_INVOICE_LIST: null,

            SELECTED_DSC_ID: null,

            // Modal
            msg_popup_modal: false,
            msg_popup_modal_msg: null,

            add_inv_number: null,
            add_inv_date: null,
            add_inv_total_due: null,
            add_inv_adjustment: null,
            add_inv_adjustment_inp: null,

            update_inv_amount: null,
            update_inv_amount_inp: null,

            SELECTED_DS_CUS_MODE: null,

        }
    },
    computed: {
        DS_CUSTOMER_LIST_TOTAL_AMOUNT() {
            let total_amount = 0.00
            if(this.DS_CUSTOMER_LIST) {
                for(let i=0; i<this.DS_CUSTOMER_LIST.length; i++) {
                    total_amount += parseFloat(this.DS_CUSTOMER_LIST[i].total_amount)
                }
            }
            return total_amount
        },
        COLLECTION_MASTER_CUSTOMER_TOTAL_AMOUNT() {
            let total = {
                amount: 0.00,
                unadj_amount: 0.00
            }
            if(this.COLLECTION_MASTER_CUSTOMER) {
                for(let i=0; i<this.COLLECTION_MASTER_CUSTOMER.length; i++) {
                    total.amount += parseFloat(this.COLLECTION_MASTER_CUSTOMER[i].amount)
                    total.unadj_amount += parseFloat(this.COLLECTION_MASTER_CUSTOMER[i].unadjusted_amt)
                }
            }
            return total
        },
        COLLECTION_CUSTOMER_INVOICE_LIST_TOTAL() {
            let total = {
                amount: 0.00,
                paid: 0.00,
                pending: 0.00,
                due: 0.00,
                adjustment: 0.00
            }
            if(this.COLLECTION_CUSTOMER_INVOICE_LIST) {
                for(let i=0; i<this.COLLECTION_CUSTOMER_INVOICE_LIST.length; i++) {
                    total.amount += this.COLLECTION_CUSTOMER_INVOICE_LIST[i].amount ? parseFloat(this.COLLECTION_CUSTOMER_INVOICE_LIST[i].amount) : 0
                    total.paid += this.COLLECTION_CUSTOMER_INVOICE_LIST[i].paid ? parseFloat(this.COLLECTION_CUSTOMER_INVOICE_LIST[i].paid) : 0
                    total.pending += this.COLLECTION_CUSTOMER_INVOICE_LIST[i].pending ? parseFloat(this.COLLECTION_CUSTOMER_INVOICE_LIST[i].pending) : 0
                    total.due += this.COLLECTION_CUSTOMER_INVOICE_LIST[i].due ? parseFloat(this.COLLECTION_CUSTOMER_INVOICE_LIST[i].due) : 0
                    total.adjustment += this.COLLECTION_CUSTOMER_INVOICE_LIST[i].adjustment ? parseFloat(this.COLLECTION_CUSTOMER_INVOICE_LIST[i].adjustment) : 0
                }
            }
            return total
        }
    },
    created() {},
    mounted() {},
    methods: {
        // CUSTOMER TABLE - LIST
        async singleCustomerClickHandler(item, index) {
            console.log(item)
            this.SELECTED_CUSTOMER_DA_ID_FROM_CUSTOMER_LIST = null
            this.SELECTED_CUSTOMER_DA_ID_FROM_CUSTOMER_LIST = item
            let length = document.querySelectorAll('#layout_container_collection_details .customer_card_body').length
            for(let i=0; i<length; i++) {
                document.querySelector('#customer_card_body_' + i).className = 'customer_card_body'
            }
            if(document.querySelector('#customer_card_body_' + index).className === 'customer_card_body') {
                document.querySelector('#customer_card_body_' + index).className = 'customer_card_body jmi-active'
            } else {
                document.querySelector('#customer_card_body_' + index).className = 'customer_card_body'
            }

            this.DS_COLLECTION_MASTER_CUSTOMER_BY_DS_ID_CUSTOMER_ID__FROM_SERVICE(item.ds_id, item.customer_id)
            // this.DS_COLLECTION_CUSTOMER_INVOICE_LIST_BY_DS_ID_CUSTOMER_ID__FROM_SERVICE(item.ds_id, item.customer_id)
        },
        // ---------------------------------------------------------------------------------------------------
        // COLLECTION
        dateFormat(dt) {
            return globalDateFormat.dateFormatT4(dt)
        },
        collectionAutoAdjustClickHandler(item, i) {
            console.log(i)
            console.log(item)
            console.log(this.SELECTED_CUSTOMER_DA_ID_FROM_CUSTOMER_LIST)
            this.SELECTED_DSC_ID = null
            this.SELECTED_DSC_ID = item.id

            let dd = {
              ds_id: this.SELECTED_CUSTOMER_DA_ID_FROM_CUSTOMER_LIST.ds_id,
              customer_id: this.SELECTED_CUSTOMER_DA_ID_FROM_CUSTOMER_LIST.customer_id,
              collection_mode: item.collection_mode
            }
            this.SELECTED_DS_CUS_MODE = dd

            this.COLLECTION_AUTO_ADJUST__FROM_SERVICE(item.id)
        },
        collectionMasterRowClickHandler(item, i) {
            console.log(i)
            console.log(item)
            let ds_id = this.SELECTED_CUSTOMER_DA_ID_FROM_CUSTOMER_LIST.ds_id
            let customer_id = this.SELECTED_CUSTOMER_DA_ID_FROM_CUSTOMER_LIST.customer_id
            let collection_mode = item.collection_mode
            
            this.DS_COLLECTION_CUSTOMER_INVOICE_LIST_BY_DS_ID_CUSTOMER_ID_COLLECTION_MODE__FROM_SERVICE(ds_id, customer_id, collection_mode)
        },
        editCollectionInvoiceModalClickHandler(item) {
            this.add_inv_number = item.invoice
            this.add_inv_date = this.dateFormat(item.date)
            this.update_inv_amount = item.amount
            this.add_inv_total_due = item.due
            this.add_inv_adjustment = item.adjustment

            this.update_inv_amount_inp = null

            // this.DS_COLLECTION_INVOICE_ADJUST__FROM_SERVICE(this.SELECTED_DSC_ID, item.invoice, item.this.update_inv_amount_inp)
            // console.log(this.SELECTED_DSC_ID)
        },
        addCollectionInvoiceModalClickHandler(item) {
            this.add_inv_number = item.invoice
            this.add_inv_date = this.dateFormat(item.date)
            this.add_inv_total_due = item.due

            this.add_inv_adjustment_inp = null
        },
        addCollectionModalSaveClickHandler() {
            document.getElementById('add-collection-modal-close-btn').click()
            this.DS_COLLECTION_INVOICE_ADJUST__FROM_SERVICE(this.SELECTED_DSC_ID, this.add_inv_number, this.update_inv_amount_inp)
        },
        editCollectionModalSaveClickHandler() {
            document.getElementById('edit-collection-modal-close-btn').click()
            this.DS_COLLECTION_INVOICE_ADJUST__FROM_SERVICE(this.SELECTED_DSC_ID, this.add_inv_number, this.add_inv_adjustment_inp)
        },
        // ---------------------------------------------------------------------------------------------------
        // SERVICE CALL
        async DS_COLLECTION_MASTER_CUSTOMER_BY_DS_ID_CUSTOMER_ID__FROM_SERVICE(ds_id, customer_id) {
            this.COLLECTION_MASTER_CUSTOMER = null
            await service.getDSCollectionMasterCustomerByDSID_CustomerId_COLLECTION_DETAILS(ds_id, customer_id)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.COLLECTION_MASTER_CUSTOMER = res.data.collection_list
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.COLLECTION_MASTER_CUSTOMER = null
                    }
                })
        },
        /*async DS_COLLECTION_CUSTOMER_INVOICE_LIST_BY_DS_ID_CUSTOMER_ID__FROM_SERVICE(ds_id, customer_id) {
            this.COLLECTION_CUSTOMER_INVOICE_LIST = null
            await service.getDSCollectionCustomerInvoiceListByDSID_CustomerId_COLLECTION_DETAILS(ds_id, customer_id)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.COLLECTION_CUSTOMER_INVOICE_LIST = res.data.all_invoice
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.COLLECTION_CUSTOMER_INVOICE_LIST = null
                    }
                })
        },*/
        async DS_COLLECTION_CUSTOMER_INVOICE_LIST_BY_DS_ID_CUSTOMER_ID_COLLECTION_MODE__FROM_SERVICE(ds_id, customer_id, collection_mode) {
            this.COLLECTION_CUSTOMER_INVOICE_LIST = null
            await service.getDSCollectionCustomerInvoiceListByDSID_CustomerId_COLLECTION_DETAILS(ds_id, customer_id, collection_mode)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.COLLECTION_CUSTOMER_INVOICE_LIST = res.data.all_invoice
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.COLLECTION_CUSTOMER_INVOICE_LIST = null
                    }
                })
        },
        async COLLECTION_AUTO_ADJUST__FROM_SERVICE(id) {
          console.log(this.SELECTED_DS_CUS_MODE)
            this.msg_popup_modal = true
            this.msg_popup_modal_msg = 'Please wait. We are processing...'
            await service.getCollectionAutoAdjust_COLLECTION_DETAILS(id)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.msg_popup_modal_msg = res.data.message
                        this.DS_COLLECTION_MASTER_CUSTOMER_BY_DS_ID_CUSTOMER_ID__FROM_SERVICE(this.SELECTED_DS_CUS_MODE.ds_id, this.SELECTED_DS_CUS_MODE.customer_id)
                        this.DS_COLLECTION_CUSTOMER_INVOICE_LIST_BY_DS_ID_CUSTOMER_ID_COLLECTION_MODE__FROM_SERVICE(this.SELECTED_DS_CUS_MODE.ds_id, this.SELECTED_DS_CUS_MODE.customer_id, this.SELECTED_DS_CUS_MODE.collection_mode)
                    } else {
                        this.msg_popup_modal_msg = res.data.message + ' Response code : ' + res.data.response_code + '.'
                    }
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
        async DS_COLLECTION_INVOICE_ADJUST__FROM_SERVICE(dsc_id, invoice_id, amount) {
            this.msg_popup_modal = true
            this.msg_popup_modal_msg = 'Please wait. We are processing...'
            await service.getCollectionAdjust_COLLECTION_DETAILS(dsc_id, invoice_id, amount)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.msg_popup_modal_msg = res.data.message
                        this.DS_COLLECTION_MASTER_CUSTOMER_BY_DS_ID_CUSTOMER_ID__FROM_SERVICE(this.SELECTED_DS_CUS_MODE.ds_id, this.SELECTED_DS_CUS_MODE.customer_id)
                        this.DS_COLLECTION_CUSTOMER_INVOICE_LIST_BY_DS_ID_CUSTOMER_ID_COLLECTION_MODE__FROM_SERVICE(this.SELECTED_DS_CUS_MODE.ds_id, this.SELECTED_DS_CUS_MODE.customer_id, this.SELECTED_DS_CUS_MODE.collection_mode)
                    } else {
                        this.msg_popup_modal_msg = res.data.message + ' Response code : ' + res.data.response_code + '.'
                    }
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
        }
    },
    watch: {
      DS_CUSTOMER_LIST(newVal) {
        if(newVal) {
          this.COLLECTION_MASTER_CUSTOMER = null
          this.COLLECTION_CUSTOMER_INVOICE_LIST = null
        }
      }
    }
}
</script>
<style scoped>
:root{
  --table-height: 40px;
}
.layout-container {
    height: calc( 100vh - var(--used-height) + -6px );
}
.collection_area{
    /* margin-top: 15px; */
    /* margin-top: 0px;
    min-height: calc(100vh - (var(--used-height) - (-30px))); */
    margin: 0;
    height: calc(100vh - (var(--used-height) + 6px));
}
.collection_area thead tr:nth-child(1) th h5{
    font-size: var(--font14);
    color: var(--text-label);
    font-weight: 700;
  }
.collection_area thead tr:nth-child(1) th h5 span{
    color: var(--blue);
  }
.collection_area tbody tr:hover{
    background-color: var(--bluish-white);
  }  
.collection_area tbody tr.active{
    color: var(--blue);
    background-color: var(--bluish-white);
  }
/*---------Start Collection Table 1 ---------*/
.collection-table-1{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    background-color: var(--white);
    box-shadow: 0px 0px 8px #026CD11A;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
  }
  .collection-table-1 tr{
    width: 100%;
    display:flex;
  }
  .collection-table-1 td,
  .collection-table-1 th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .collection-table-1 thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .collection-table-1 thead tr:nth-child(1){
    height: 40px;
    font-size: var(--font14);
    border-radius: 8px 8px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .collection-table-1 thead tr:nth-child(1) th{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .collection-table-1 thead tr:nth-child(1) th .about-color {
    display: flex;
    align-items: center;
  }
  .collection-table-1 thead tr:nth-child(1) th .about-color p {
    font-size: 12px;
    font-weight: 500;
    margin-left: 5px;
    margin-right: 4px;
  }
  .collection-table-1 thead tr:nth-child(1) th .about-color p svg {
      margin-right: 4px;
  }
  .collection-table-1 thead tr:nth-child(1) th .about-color p span {
    margin-right: 5px;
  }
  .collection-table-1 thead tr:nth-child(2){
    height: var(--table-height);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .collection-table-1 thead tr:nth-child(2) th{
    height: var(--table-height);
    display:flex;
    align-items: center;
  }
  /* Start Table Body Area */
  .collection-table-1 tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    height:  calc( 100vh - (var(--used-height) + 32px + (var(--table-height) * 3)));
  }
  .collection-table-1 tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .collection-table-1 tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
  /* Start Table Foot Area */
  .collection-table-1 tfoot{ 
    display: block;
    width:100%;
    font-size: var(--font14);
  }
  .collection-table-1 tfoot tr{
    height: var(--table-height);
    display: flex;
    align-items: center;
    color: var(--blue);
    border-radius: 0px 0px 8px 8px;
    background-color: var(--bluish-white);
  }
  .collection-table-1 tfoot tr th{
    height: var(--table-height);
    display: flex;
    align-items: center;
  }
   /* Start Table Alignment Area*/
  .collection-table-1 thead tr:nth-child(2) th:nth-child(1),
  .collection-table-1 tbody td:nth-child(1),
  .collection-table-1 tfoot th:nth-child(1){
    flex-basis:60%;
    flex-grow:1;
    display: flex;
    justify-content: start;
  }
  .collection-table-1 thead tr:nth-child(2) th:nth-child(2),
  .collection-table-1 tbody td:nth-child(2),
   .collection-table-1 tfoot th:nth-child(2){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .collection-table-1 thead tr:nth-child(2) th:nth-child(3),
  .collection-table-1 tbody td:nth-child(3){
    flex-basis:20%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .collection-table-1 tfoot th:nth-child(3){
    flex-basis:20%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
/*---------End Collection Table 1 ---------*/

/*---------Start Collection Table 2 ---------*/
.collection-table-2{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    background-color: var(--white);
    box-shadow: 0px 0px 8px #026CD11A;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
  }
  .collection-table-2 tr{
    width: 100%;
    display:flex;
  }
  .collection-table-2 td,
  .collection-table-2 th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .collection-table-2 thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .collection-table-2 thead tr:nth-child(1){
    height: 40px;
    font-size: var(--font14);
    border-radius: 8px 8px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .collection-table-2 thead tr:nth-child(2){
    height: var(--table-height);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .collection-table-2 thead tr:nth-child(2) th{
    height: var(--table-height);
    display:flex;
    align-items: center;
  }
  /* Start Table Body Area */
  .collection-table-2 tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
     height:  calc( (100vh - 50vh) - (var(--used-height) + (var(--table-height) * 2)));
  }
  .collection-table-2 tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .collection-table-2 tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
  /* Start Table Foot Area */
  .collection-table-2 tfoot{ 
    display: block;
    width:100%;
    font-size: var(--font14);
  }
  .collection-table-2 tfoot tr{
    height: var(--table-height);
    display: flex;
    align-items: center;
    color: var(--blue);
    border-radius: 0px 0px 8px 8px;
    background-color: var(--bluish-white);
  }
  .collection-table-2 tfoot tr th{
    height: var(--table-height);
    display: flex;
    align-items: center;
  }
   /* Start Table Alignment Area*/
  .collection-table-2 thead tr:nth-child(2) th:nth-child(1),
  .collection-table-2 tbody td:nth-child(1),
  .collection-table-2 tfoot th:nth-child(1){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: start;
  }
  .collection-table-2 thead tr:nth-child(2) th:nth-child(2),
  .collection-table-2 tbody td:nth-child(2),
   .collection-table-2 tfoot th:nth-child(2){
    flex-basis:20%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .collection-table-2 thead tr:nth-child(2) th:nth-child(3),
  .collection-table-2 tbody td:nth-child(3),
  .collection-table-2 thead tr:nth-child(2) th:nth-child(4),
  .collection-table-2 tbody td:nth-child(4){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .collection-table-2 tfoot th:nth-child(3),
  .collection-table-2 tfoot th:nth-child(4){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .collection-table-2 thead tr:nth-child(2) th:nth-child(5),
  .collection-table-2 tbody td:nth-child(5),
   .collection-table-2 tfoot th:nth-child(5){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .collection-table-2 thead tr:nth-child(2) th:nth-child(6),
  .collection-table-2 tbody td:nth-child(6),
   .collection-table-2 tfoot th:nth-child(6){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
/*---------End Collection Table 2 ---------*/

/*---------Start Collection Table 3 ---------*/
.collection-table-3{
    margin-top: 15px;
    display: block;
    empty-cells: show;
    border-spacing: 0;
    background-color: var(--white);
    box-shadow: 0px 0px 8px #026CD11A;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
  }
  .collection-table-3 tr{
    width: 100%;
    display:flex;
  }
  .collection-table-3 td,
  .collection-table-3 th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .collection-table-3 thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .collection-table-3 thead tr:nth-child(1){
    height: 40px;
    font-size: var(--font14);
    border-radius: 8px 8px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .collection-table-3 thead tr:nth-child(2){
    height: var(--table-height);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .collection-table-3 thead tr:nth-child(2) th{
    height: var(--table-height);
    display:flex;
    align-items: center;
  }
  /* Start Table Body Area */
  .collection-table-3 tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    height:  calc( (100vh - 50vh) - (var(--used-height)  + 23px ));
  }
  .collection-table-3 tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .collection-table-3 tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
    .collection-table-3 tbody td:nth-child(1) {
      display: flex;
      align-items: center;
    }
    .collection-table-3 tbody td:nth-child(1) p {
      display: flex;
      align-items: center;
      position: relative;
    }
    .collection-table-3 tbody td:nth-child(1) p span {
      position: absolute;
      margin: auto;
      left: -5px;
      font-size: 7px;
      margin-left: -5px;
      color: var(--blue);
    }
  /* Start Table Foot Area */
  .collection-table-3 tfoot{ 
    display: block;
    width:100%;
    font-size: var(--font14);
  }
  .collection-table-3 tfoot tr{
    height: var(--table-height);
    display: flex;
    align-items: center;
    color: var(--blue);
    border-radius: 0px 0px 8px 8px;
    background-color: var(--bluish-white);
  }
  .collection-table-3 tfoot tr th{
    height: var(--table-height);
    display: flex;
    align-items: center;
  }
  /* Start Table Alignment Area*/
  .collection-table-3 thead tr:nth-child(2) th:nth-child(1),
  .collection-table-3 tbody td:nth-child(1),
  .collection-table-3 tfoot th:nth-child(1){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: start;
  }
  .collection-table-3 thead tr:nth-child(2) th:nth-child(2),
  .collection-table-3 tbody td:nth-child(2),
   .collection-table-3 tfoot th:nth-child(2){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .collection-table-3 thead tr:nth-child(2) th:nth-child(3),
  .collection-table-3 tbody td:nth-child(3),
  .collection-table-3 thead tr:nth-child(2) th:nth-child(4),
  .collection-table-3 tbody td:nth-child(4){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .collection-table-3 tfoot th:nth-child(3),
  .collection-table-3 tfoot th:nth-child(4){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .collection-table-3 thead tr:nth-child(2) th:nth-last-child(-n+4),
  .collection-table-3 tbody td:nth-last-child(-n+4),
  .collection-table-3 tfoot th:nth-last-child(-n+4){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
/*---------End Collection Table 3 ---------*/

.green{
    color: var(--green)!important;
}
.orange{
    color: #FFB347!important;
}
.gray{
    color: #AEC1D0!important;
}
.collection-table-2 i,
.collection-table-3 i {
    font-size: 14px !important;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: var(--font12);
    color:  var(--white);
    border-radius: 100px;
    background-color:var(--blue);
    margin: 0px 5px;
    cursor: pointer;
  }
.modal .modal-content {
    border: none;
}
#edit-collection-modal.modal,
#add-collection-modal.modal {
    width: 500px;
    height: 475px;
}
#edit-collection-modal.modal input[type=text],
#edit-collection-modal.modal input[type=number],
#add-collection-modal.modal input[type=text],
#add-collection-modal.modal input[type=number] {
    box-sizing: border-box;
    background-color: #e9ecef;
    margin-right: 20px;
    padding: 0 6px;
    height: 38px;
    width: 95%;
}
.modal .modal-dialog {
    margin: 0;
}
#edit-collection-modal.modal .modal-dialog {
    margin: 0;
}
#edit-collection-modal.modal .modal-dialog i.zmdi-delete {
    color: var(--red);
    font-size: 21px;
    padding: 8px 10px 9px;
    top: 0;
    left: unset;
    right: 12px;
    background-color: violet;
    z-index: 999;
}
#add-collection-modal .modal-header .modal-title,
#edit-collection-modal .modal-header .modal-title{
    color: var(--black)!important;
    font-size: var(--font16)!important;
}
#edit-collection-modal .modal-header .modal-title span{
    color: var(--blue)!important;
    font-size: var(--font16)!important;
}
#add-collection-modal .modal-body,
#edit-collection-modal .modal-body {
    min-height: 250px;
}
#edit-collection-modal .input-group-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: var(--font16);
    font-weight: 400;
    line-height: 1.5;
    color: var(--red);
    text-align: center;
    white-space: nowrap;
    background-color: var(--redish-white);
    border: 1px solid var(--border-color);
    border-radius: 0px 2px 2px 0px;
}
@media screen and (max-width: 1440px) {
  :root {
    --table-height: 35px;
    }
  .collection-table-1 thead tr:nth-child(1) th .about-color p{
    font-size: 10px;
    font-weight: 500;
  }
  .collection-table-1 thead tr:nth-child(2),
  .collection-table-2 thead tr:nth-child(2),
  .collection-table-3 thead tr:nth-child(2){
    font-size: 10px;
  }
  .collection-table-1 tbody,
  .collection-table-2 tbody{
    font-size: 11px;
  }
  .collection-table-3 tbody{
    font-size: 11px;
    height:  calc( (100vh - 50vh) - (var(--used-height)  + 40px ));
  }
 .collection-table-3 thead tr:nth-child(2) th:nth-child(1){
    flex-basis:16.5%!important;
  }
  .collection-table-3 thead tr:nth-child(2) th:nth-child(2){
    flex-basis:12.5%;
  }
  .collection-table-1 tfoot,
  .collection-table-2 tfoot,
  .collection-table-3 tfoot{ 
    display: block;
    width:100%;
    font-size: 11px;
  }
  .collection-table-2 i{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-size: var(--font12);
    color:  var(--white);
    border-radius: 100px;
    background-color:var(--blue);
    margin: 0px 5px;
  }
  .collection-table-3 i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    font-size: var(--font10) !important;
    color:  var(--white);
    border-radius: 100px;
    background-color:var(--blue);
    margin: 0px 5px;
  }
}

</style>