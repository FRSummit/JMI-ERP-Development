<template>
  <div id="detail-data-list" class="detail-data-list">
    <div class="detail-data-list-inner">
      <div class="detail-data-submit-section hide">
        <div class="detail-data-submit-section-inner">
          <div
            class="serial-range-custom-section"
            v-if="tab === 'Invoice Print' || tab === 'Chalan Print'"
          >
            <div class="serial-range-custom-section-inner">
              <div class="range-customization-section">
                <div class="range-customization-section-inner">
                  <span>Serial Range:</span>
                  <form class="input-btns">
                    <p><input type="radio" checked="checked" name="serialRange" value="Default" @change="onChange('Default')" /> <span :class="radioSpanDefaultClass">Default</span></p>
                    <p><input type="radio" name="serialRange" value="Custom" @change="onChange('Custom')" /> <span :class="radioSpanCustomClass">Custom</span></p>
                    <!-- <form>
                      <input type="radio" checked="checked" value="radio" />
                    </label>-->
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="submit-btn-section">
            <div class="submit-btn-section-inner">
              <button>Print &amp; Next</button>
            </div>
          </div>
        </div>
      </div>
      <span class="print-all-icon"><i class="zmdi zmdi-print" @click="printAllInvoiceClickHandler"></i><span class="tool-tip">Print</span></span>
      <div class="detail-data-list-section">
        <div class="detail-data-list-section-inner">
          <!-- {{ data }} -->

          <table class="data-table" cellspacing="0" width="100%">
            <thead>
              <tr class="data-table-head-row">
                <th>SL No</th>
                <th>Invoice No</th>
                <th>Customer Type</th>
                <th>Customer Name</th>
                <th style="text-align: right;">Amount</th>
                <th style="width: 10%;"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(schedule, i) in SCHEDULE_DETAILS_LIST" :key="i" class="data-table-data-row">
                <td>{{ i + 1 }}</td>
                <td style="color: #026CD1; font-weight: 500;">{{ schedule.get_invoice ? (schedule.get_invoice.invoice_no ? (schedule.get_invoice.invoice_no) : '') : '' }}</td>
                <td>{{ schedule.customer_info ? (schedule.customer_info.customer_type ? (checkCustomerType(schedule.customer_info.customer_type)) : '') : '' }}</td>
                <td>{{ schedule.customer_info ? (schedule.customer_info.customer_name ? (schedule.customer_info.customer_name) : '') : '' }}</td>
                <td style="text-align: right;">{{ comaSrparation(Number(schedule.invoice_amt).toFixed(2)) }}</td>
                <td style="width: 10%;"><i class="zmdi zmdi-print" @click="printInvoice(schedule.invoice_id, schedule.customer_info.customer_type, i)"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../../../../../service/ERPSidebarService";
const service = new Service();

// import PP_Invoice_Type_2 from '../../../../../../functions/Print_Func/PP_Invoice_Type_2'
// const ppInvoice_Type_2 = new PP_Invoice_Type_2()

import PP_Invoice_Type_2_Single from '../../../../../../functions/Print_Func/PP_Invoice_Type_2_Single'
const pp_Invoice_Type_2_Single = new PP_Invoice_Type_2_Single()
import PP_Invoice_Type_3_Institution from '../../../../../../functions/Print_Func/PP_Invoice_Type_3_Institution'
const pp_Invoice_Type_3_Institution = new PP_Invoice_Type_3_Institution()

import ComaSeparatedDigits from '../../../../../../functions/ComaSeparatedDigits'
const comaSeparatedDigits = new ComaSeparatedDigits()
import PP_InvoiceChallanSummeryTD_Type1 from '../../../../../../functions/Print_Func/PP_InvoiceChallanSummeryTD_Type1'
const pp_InvoiceChallanSummeryTD_Type1 = new PP_InvoiceChallanSummeryTD_Type1()

export default {
  props: ["tab", "SCHEDULE_DETAILS_LIST", "HEADER_DATA"],
  components: {},
  data() {
    return {
      table_header: [
        "SL No",
        "Invoice ID",
        "Customer Type",
        "Customer Name",
        "Amount",
        ""
      ],
      // value: null,
      radioSpanDefaultClass: 'active',
      radioSpanCustomClass: null
    };
  },
  methods: {
    onChange(value) {
      switch(value) {
        case 'Default':
          console.log('D : ' + value)
          this.radioSpanDefaultClass = 'active'
          this.radioSpanCustomClass = ''
          break
        case 'Custom':
          console.log('C : ' + value)
          this.radioSpanDefaultClass = ''
          this.radioSpanCustomClass = 'active'
          break
          default:
            break
      }
    },
    comaSrparation(data) {
      return comaSeparatedDigits.comaSeparate(data)
    },
    checkCustomerType(customer_type) {
      console.log(customer_type)
      if(customer_type === '422') {
        return 'Chemist'
      } else if(customer_type === '424') {
        return 'Institute'
      }
    },
    printAllInvoiceClickHandler() {
      console.log('print ALl')
      console.log(this.tab)
      let title = 'Invoice & Challan Summary'
      let table_header = [
        {th:"INVOICE NO", style:''},
        {th:"CUSTOMER TYPE", style:''},
        {th:"CUSTOMER NAME", style:'text-align: left;'},
        {th:"AMOUNT", style:'text-align: right;'}
      ]
      console.log(table_header.length)
      let table_data = []
      for(let i=0; i<this.SCHEDULE_DETAILS_LIST.length; i++) {
        let table_single_data = {
          invoice_id: this.SCHEDULE_DETAILS_LIST[i].get_invoice.invoice_no,
          customer_type: this.checkCustomerType(this.SCHEDULE_DETAILS_LIST[i].customer_info.customer_type),
          customer_name: this.SCHEDULE_DETAILS_LIST[i].customer_info.customer_name,
          amount: this.SCHEDULE_DETAILS_LIST[i].invoice_amt
        }
        table_data.push(table_single_data)
      }
      pp_InvoiceChallanSummeryTD_Type1.print_invoice(title, table_header, table_data, this.HEADER_DATA)
      console.log(table_data)
    },
    async printInvoice(schedule_id, schedule_customer_type, i) {
      console.log('index : ' + i)
      console.log(schedule_id)
      // ppInvoice_Type_2.print_invoice(schedule_id)
      await this.PRING_INVOCIE_DETAILS__FROM_SERVICE(schedule_id, schedule_customer_type)
    },
    // ---------------------------------------------------------------
    // SERVICE CALL
    async PRING_INVOCIE_DETAILS__FROM_SERVICE(invoice_id, schedule_customer_type) {
      service.getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(invoice_id)
        .then(res => {
          console.log(res.data)
          // ppInvoice_Type_2.print_invoice(res.data)
          // if(this.tab === 'All' || this.tab === 'Chemist') {
          /*if(this.tab === 'All') {
            pp_Invoice_Type_2_Single.print_invoice(res.data.invoice_details, res.data.due_details)
          } else {
            pp_Invoice_Type_3_Institution.print_invoice(res.data.invoice_details)
          }*/
          if(this.tab === 'All') {
            if(res.data.invoice_details.invoice_details.length > 0) {
              // pp_Invoice_Type_2_Single.print_invoice(res.data.invoice_details, res.data.due_details)
              if(schedule_customer_type === '422') {
                pp_Invoice_Type_2_Single.print_invoice(res.data.invoice_details, res.data.due_details)
              } else if(schedule_customer_type === '424') {
                pp_Invoice_Type_3_Institution.print_invoice(res.data.invoice_details)
              }
            } else {
              alert('No Invoice data found')
            }
          } else if(this.tab === 'Chemist') {
            if(res.data.invoice_details.invoice_details.length > 0) {
              pp_Invoice_Type_2_Single.print_invoice(res.data.invoice_details, res.data.due_details)
            } else {
              alert('No data found')
            }
          } else if(this.tab === 'Institution') {
            if(res.data.invoice_details.invoice_details.length > 0) {
              pp_Invoice_Type_3_Institution.print_invoice(res.data.invoice_details)
            } else {
              alert('No data found')
            }
          } else {
            alert('Print not designed')
          }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./DetailDataList.less");
</style>