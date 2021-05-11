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

          <!-- INVOICE / CHALLAN / HANDOVER -->
          <table class="data-table" cellspacing="0" width="100%" v-if="tab !== 'GATE PASS'">
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
                <!-- <td style="color: #026CD1; font-weight: 500;">{{ schedule.invoice_id ? (schedule.invoice_id) : '' }}</td> -->
                <td>{{ schedule.customer_info ? (schedule.customer_info.customer_type ? (checkCustomerType(schedule.customer_info.customer_type)) : '') : '' }}</td>
                <td>{{ schedule.customer_info ? (schedule.customer_info.customer_name ? (schedule.customer_info.customer_name) : '') : '' }}</td>
                <td style="text-align: right;">{{ comaSrparation(Number(schedule.invoice_amt).toFixed(2)) }}</td>
                <td style="width: 10%;"><i class="zmdi zmdi-print" @click="printInvoice(schedule.invoice_id, schedule.customer_info.customer_type, i)"></i></td>
              </tr>
            </tbody>
          </table>

          <!-- GATE PASS -->
          <table class="data-table" cellspacing="0" width="100%" v-if="tab === 'GATE PASS'">
            <thead>
              <tr class="data-table-head-row">
                <th>SL No</th>
                <th style="text-align: left;">Product Name</th>
                <th>Quantity</th>
                <!-- <th style="width: 10%;"></th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(schedule, i) in SCHEDULE_DETAILS_LIST" :key="i" class="data-table-data-row">
                <td>{{ i + 1 }}</td>
                <td style="color: #026CD1; font-weight: 500; text-align: left;">{{ schedule.sbu_product_info ? (schedule.sbu_product_info.display_code ? (schedule.sbu_product_info.display_code) : '') : '' }} - {{ schedule.sbu_product_info ? (schedule.sbu_product_info.display_name ? (schedule.sbu_product_info.display_name) : '') : '' }}</td>
                <td style="">{{ schedule.total_qty }}</td>
                <!-- <td style="width: 10%;"><i class="zmdi zmdi-print" @click="printGatePass(schedule, i)"></i></td> -->
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
import PP_InvoiceChallanSummeryTD_Type1 from '../../../../../../functions/Print_Func/PP_InvoiceChallanSummeryTD_Type1'
const pp_InvoiceChallanSummeryTD_Type1 = new PP_InvoiceChallanSummeryTD_Type1()
import PP_InvoiceChallanSummeryTD_GatePass from '../../../../../../functions/Print_Func/PP_InvoiceChallanSummeryTD_GatePass'
const pp_InvoiceChallanSummeryTD_GatePass = new PP_InvoiceChallanSummeryTD_GatePass()

import ComaSeparatedDigits from '../../../../../../functions/ComaSeparatedDigits'
const comaSeparatedDigits = new ComaSeparatedDigits()

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
      radioSpanCustomClass: null,
    };
  },
  mounted() {
    console.log(this.tab)
  },
  computed: {
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
    printAllInvoiceClickHandler() {
      console.log('print ALl : ' + this.tab)
      console.log(this.tab)
      if(this.tab === 'INVOICE' || this.tab === 'CHALLAN') {
        let title = 'Invoice & Challan Summary'
        let table_header = [
          {th:"INVOICE No", style:''},
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
      } else if(this.tab === 'GATE PASS') {
        let title = 'Gate Pass'
        let table_header = [
          {th:"Code", style:''},
          {th:"Product Name", style:'text-align: left;'},
          {th:"Pack Size", style:''},
          {th:"Invoice Qty", style:'text-align: right;'}
        ]
        console.log(table_header.length)
        let table_data = []
        for(let i=0; i<this.SCHEDULE_DETAILS_LIST.length; i++) {
          let table_single_data = {
            code: this.SCHEDULE_DETAILS_LIST[i].sbu_product_info ? (this.SCHEDULE_DETAILS_LIST[i].sbu_product_info.display_code ? (this.SCHEDULE_DETAILS_LIST[i].sbu_product_info.display_code) : '') : '',
            prod_name: this.SCHEDULE_DETAILS_LIST[i].sbu_product_info ? (this.SCHEDULE_DETAILS_LIST[i].sbu_product_info.display_name ? (this.SCHEDULE_DETAILS_LIST[i].sbu_product_info.display_name) : '') : '',
            pack_size: this.SCHEDULE_DETAILS_LIST[i].adm_products ? (this.SCHEDULE_DETAILS_LIST[i].adm_products.com_pack_size ? (this.SCHEDULE_DETAILS_LIST[i].adm_products.com_pack_size) : '') : '',
            invoice_qty: this.SCHEDULE_DETAILS_LIST[i].total_qty
          }
          table_data.push(table_single_data)
        }
        pp_InvoiceChallanSummeryTD_GatePass.print_invoice(title, table_header, table_data, this.HEADER_DATA)
        console.log(table_data)
      }
    },
    async printInvoice(schedule_id, schedule_customer_type, i) {
      console.log('index : ' + i)
      console.log(schedule_id)
      // ppInvoice_Type_2.print_invoice(schedule_id)
      await this.PRING_INVOCIE_DETAILS__FROM_SERVICE(schedule_id, schedule_customer_type)
    },
    printGatePass() {
      console.log('printGatePass')
    },
    checkCustomerType(customer_type) {
      console.log(customer_type)
      if(customer_type === '422') {
        return 'Chemist'
      } else if(customer_type === '424') {
        return 'Institute'
      }
    },
    // ---------------------------------------------------------------
    // SERVICE CALL
    async PRING_INVOCIE_DETAILS__FROM_SERVICE(invoice_id, schedule_customer_type) {
      service.getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(invoice_id)
        .then(res => {
          console.log(res.data)
          // ppInvoice_Type_2.print_invoice(res.data)
          // if(this.tab === 'All' || this.tab === 'Chemist') {
          if(this.tab === 'INVOICE') {
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
          } else if(this.tab === 'CHALLAN') {
            // pp_Invoice_Type_3_Institution.print_invoice(res.data.invoice_details)
            if(res.data.invoice_details.invoice_details.length > 0) {
              pp_Invoice_Type_3_Institution.print_invoice(res.data.invoice_details)
            } else {
              alert('No GATE PASS data found')
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