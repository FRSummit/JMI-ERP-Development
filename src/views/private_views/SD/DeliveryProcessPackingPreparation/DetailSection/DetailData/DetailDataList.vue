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
      <span class="print-all-icon"><i class="zmdi zmdi-print" @click="printAllClickHandler"></i><span class="tool-tip">Print</span></span>
      <div class="detail-data-list-section">
        <div class="detail-data-list-section-inner">
          <!-- {{ data }} -->

          <table class="data-table" cellspacing="0" width="100%">
            <thead>
              <tr class="data-table-head-row">
                <th>Sl No</th>
                <th style="text-align: left;">Medicine Name</th>
                <th>Batch No</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <div v-for="(list, i) in PROD_PREPARATION_LIST" :key="i">
                <tr class="data-table-data-row ds-pack-tt-mio-tr">
                  <!-- <td>{{ test(list[i]) }}</td> -->
                  <td colspan="4" v-if="checkPPIsPresent(list)"><p class="td-ds-pack-tt-mio">Territory:<span>{{ getTTNameFromPPList(list[0]) }}</span></p><p class="td-ds-pack-tt-mio">MIO:<span>{{ getMIONameFromPPList(list[0]) }}</span></p><span class="icon"><i class="zmdi zmdi-print" @click="printSingleArea"></i></span></td>
                </tr>
                <tr v-for="(schedule, j) in list" :key="j" class="data-table-data-row">
                  <td>{{ j + 1 }}</td>
                  <!-- <td style="color: #026CD1; font-weight: 500; text-align: left;">{{ schedule.product_info ? (schedule.product_info.prod_code ? (schedule.product_info.prod_code) : '' ) : '' }} - {{ schedule.product_info ? (schedule.product_info.prod_name ? (schedule.product_info.prod_name) : '' ) : '' }}</td> -->
                  <!-- <td style="font-weight: 500; text-align: left;">{{ schedule }}</td> -->
                  <td style="font-weight: 500; text-align: left;">{{ schedule.product_info ? (schedule.product_info.prod_code ? (schedule.product_info.prod_code) : '' ) : '' }} - {{ schedule.product_info ? (schedule.product_info.prod_name ? (schedule.product_info.prod_name) : '' ) : '' }}</td>
                  <td>{{ schedule.batch_no ? (schedule.batch_no) : '' }}</td>
                  <td>{{ schedule.inv_qty ? (schedule.inv_qty) : '' }}</td>
                </tr>
              </div>
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
import PP_PackingSummeryAll_T1 from '../../../../../../functions/Print_Func/PP_PackingSummeryAll_T1'
const pp_PackingSummeryAll_T1 = new PP_PackingSummeryAll_T1()

import ComaSeparatedDigits from '../../../../../../functions/ComaSeparatedDigits'
const comaSeparatedDigits = new ComaSeparatedDigits()

export default {
  props: ["tab", "PROD_PREPARATION_LIST", "PROD_PREPARATION_LIST_HEADER_INFO"],
  components: {},
  data() {
    return {
      // value: null,
      radioSpanDefaultClass: 'active',
      radioSpanCustomClass: null,
      TD_TERRITORY_MIO_ROW_CHECK: [],
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
    printAllInvoiceClickHandler() {
      console.log('print ALl')
      console.log(this.tab)
    },
    async printInvoice(schedule_id, i) {
      console.log('index : ' + i)
      console.log(schedule_id)
      // ppInvoice_Type_2.print_invoice(schedule_id)
      await this.PRING_INVOCIE_DETAILS__FROM_SERVICE(schedule_id)
    },
    checkPPIsPresent(data) {
      // console.log(data)
      if(data ? (data[0]) : false) {
        return true
      } else {
        return false
      }
    },
    printAllClickHandler() {
      console.log('print all')
      console.log(this.PROD_PREPARATION_LIST)
      // if(this.tab === 'INVOICE' || this.tab === 'CHALLAN') {
        console.log()
        let table_header = [
          {th:"Code", style:''},
          {th:"Product Name", style:'text-align: left;'},
          {th:"Pack Size", style:''},
          {th:"Batch No", style:''},
          {th:"Invoice Qty", style:''},
          // {th:"Bonus", style:''},
          // {th:"Total Dispatch", style:''}
        ]
        console.log(table_header.length)
        let table_data = []
        for(let i=0; i<this.PROD_PREPARATION_LIST.length; i++) {
          // console.log(this.PROD_PREPARATION_LIST[i])
          let group_table = {
            sep_moi_name: "Dummy SEP MIO",
            single_table: []
          }
          for(let j=0; j<this.PROD_PREPARATION_LIST[i].length; j++) {
            // console.log(this.PROD_PREPARATION_LIST[i][j].batch_no)
            let table_single_data = {
              prod_code: this.PROD_PREPARATION_LIST[i][j].product_info.prod_code,
              prod_name: this.PROD_PREPARATION_LIST[i][j].product_info.prod_name,
              pack_size: "Dummy",
              batch_no: this.PROD_PREPARATION_LIST[i][j].batch_no,
              inv_qty: this.PROD_PREPARATION_LIST[i][j].inv_qty,
              bonus: "Dummy",
              total_dispatch: "Dummy",
            }
            group_table.single_table.push(table_single_data)
          }
          table_data.push(group_table)
        }
        // pp_PackingSummeryAll_T1.print_invoice(table_header, table_data)
        pp_PackingSummeryAll_T1.print_invoice(table_header, this.PROD_PREPARATION_LIST, this.PROD_PREPARATION_LIST_HEADER_INFO)
        console.log(table_data)
    },
    printSingleArea() {
      alert('Development inprogress')
    },
    getTTNameFromPPList(data) {
      // console.log(data)
      if(data ? (data.id) : false) {
        return data.id ? (data.get_area ? (data.get_area.area_name) : '') : false
      } else {
        return false
      }
    },
    getMIONameFromPPList(data) {
      // console.log(data)
      if(data ? (data.id) : false) {
        return data.id ? (data.user_info ? (data.user_info.get_adm_user ? (data.user_info.get_adm_user.name) : '') : '') : false
      } else {
        return false
      }
    },
    // ---------------------------------------------------------------
    // SERVICE CALL
    async PRING_INVOCIE_DETAILS__FROM_SERVICE(invoice_id) {
      service.getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(invoice_id)
        .then(res => {
          console.log(res.data)
          // ppInvoice_Type_2.print_invoice(res.data)
          // if(this.tab === 'All' || this.tab === 'Chemist') {
          if(this.tab === 'All') {
            pp_Invoice_Type_2_Single.print_invoice(res.data.invoice_details, res.data.due_details)
          } else {
            pp_Invoice_Type_3_Institution.print_invoice(res.data.invoice_details)
          }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./DetailDataList.less");
</style>