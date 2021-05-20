<template>
  <div id="detail-data-list" class="detail-data-list">
    <div class="detail-data-list-inner">
      <span class="print-all-icon"><i class="zmdi zmdi-print" @click="printAllInvoiceClickHandler"></i><span class="tool-tip">Print</span></span>
      <div class="detail-data-list-section">
        <div class="detail-data-list-section-inner">
          <table class="data-table" cellspacing="0" width="100%">
            <thead>
              <tr class="data-table-head-row">
                <th>Sl No</th>
                <th>Product Name</th>
                <th>Batch</th>
                <th>Pack Size</th>
                <th>MFG Date</th>
                <th>EXP Date</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(schedule, i) in SCHEDULE_DETAILS_LIST" :key="i" class="data-table-data-row">
                <td>{{ i + 1 }}</td>
                <td>{{ schedule.prod_info ? (schedule.prod_info.prod_name ? (schedule.prod_info.prod_name) : '') : '' }}</td>
                <td>{{ schedule.batch_lot_no }}</td>
                <td>{{ schedule.prod_info ? (schedule.prod_info.com_pack_size ? (schedule.prod_info.com_pack_size) : '') : '' }}</td>
                <td>{{ schedule.whss_info ? (schedule.whss_info.mfg_date ? jmiDateFormat(schedule.whss_info.mfg_date) : '') : '' }}</td>
                <td>{{ schedule.whss_info ? (schedule.whss_info.exp_date ? jmiDateFormat(schedule.whss_info.exp_date) : '') : '' }}</td>
                <!-- <td>{{ schedule.grn_qty }}</td> -->
                <td>
                  <form>
                    <div class="quantity-input">
                      <input class='minus' type='button' value='-' field='quantity' @click="decreaseRequisitionQtyClickHandler(schedule, i)" />
                      <input class='quantity' type='number' name='quantity' placeholder="0" :value="schedule.grn_qty" :id="'req_qty_' + i" v-on:keyup="reqQtyKeyUpEventHandler(schedule, $event, i)" v-on:keydown="reqQtyKeyDownEventHandler($event, i)" />
                      <input class='plus' type='button' value='+' field='quantity' @click="increaseRequisitionQtyClickHandler(schedule, i)" />
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style="text-align: center; padding-top: 10px; border-top: 1px solid #E9F2FB;" v-if="GRN_DATA.is_completed === 'N'">
        <button class="jmi-confirm-btn" style="width: 200px;" @click="returnGRNClickHandler">Return GRN</button>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalDateFormat from "../../../../../../functions/GlobalDateFormat";
const globalDateFormat = new GlobalDateFormat();

import ComaSeparatedDigits from '../../../../../../functions/ComaSeparatedDigits'
const comaSeparatedDigits = new ComaSeparatedDigits()
import PP_PackingSummeryAll_T2_GRN from '../../../../../../functions/Print_Func/PP_PackingSummeryAll_T2_GRN'
const pp_PackingSummeryAll_T2_GRN = new PP_PackingSummeryAll_T2_GRN()

export default {
  props: ["tab", "GRN_DATA", "SCHEDULE_DETAILS_LIST", "HEADER_DATA"],
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
    printAllInvoiceClickHandler() {
      console.log('print ALl')
      console.log(this.tab)
      let table_header = [
        {th:"Product Name", style:'text-align: left'},
        {th:"Batch", style:''},
        {th:"Pack Size", style:''},
        {th:"MFG Date", style:''},
        {th:"EXP Date", style:''},
        {th:"Quantity", style:''},
      ]
      console.log(table_header.length)
      let table_data = []
      for(let i=0; i<this.SCHEDULE_DETAILS_LIST.length; i++) {
        let table_single_data = {
          prod_name: this.SCHEDULE_DETAILS_LIST[i].prod_info ? (this.SCHEDULE_DETAILS_LIST[i].prod_info.prod_name ? (this.SCHEDULE_DETAILS_LIST[i].prod_info.prod_name) : '') : '',
          batch: this.SCHEDULE_DETAILS_LIST[i].batch_lot_no,
          pack_size: this.SCHEDULE_DETAILS_LIST[i].prod_info ? (this.SCHEDULE_DETAILS_LIST[i].prod_info.com_pack_size ? (this.SCHEDULE_DETAILS_LIST[i].prod_info.com_pack_size) : '') : '',
          mfg_date: this.SCHEDULE_DETAILS_LIST[i].whss_info ? (this.SCHEDULE_DETAILS_LIST[i].whss_info.mfg_date ? this.jmiDateFormat(this.SCHEDULE_DETAILS_LIST[i].whss_info.mfg_date) : '') : '',
          exp_date: this.SCHEDULE_DETAILS_LIST[i].whss_info ? (this.SCHEDULE_DETAILS_LIST[i].whss_info.exp_date ? this.jmiDateFormat(this.SCHEDULE_DETAILS_LIST[i].whss_info.exp_date) : '') : '',
          qty: this.SCHEDULE_DETAILS_LIST[i].grn_qty,
        }
        table_data.push(table_single_data)
      }
      pp_PackingSummeryAll_T2_GRN.print_invoice(table_header, table_data, this.HEADER_DATA)
      console.log(table_data)
    },
    checkCustomerType(customer_type) {
      console.log(customer_type)
      if(customer_type === '422') {
        return 'Chemist'
      } else if(customer_type === '424') {
        return 'Institute'
      }
    },
    jmiDateFormat(dt) {
      return globalDateFormat.dateFormatT3(dt)
    },
    returnGRNClickHandler() {
      this.$emit('return_grn_btn_click')
    },
    decreaseRequisitionQtyClickHandler(item, i) {
      console.log(i)
      if(item.grn_qty > 0) {
        item.grn_qty--
      }
    },
    increaseRequisitionQtyClickHandler(item, i) {
      // console.log(i)
      // console.log(item)
      let original_grn_qty = JSON.parse(localStorage.getItem('jmi_return_grn_data_list'))[i].grn_qty
      // console.log(original_grn_qty)
      // item.grn_qty++
      if(parseInt(item.grn_qty) < parseInt(original_grn_qty)) {
        item.grn_qty++
      }
    },
    reqQtyKeyUpEventHandler(item, event, i) {
      console.log(event)
      let selector = document.querySelector('#detail-data-list #req_qty_' + i)
      if(parseInt(selector.value) === 0) {
        selector.value = 1
      } else if((selector.value).toString() === '') {
        selector.value = 1
      }
      item.grn_qty = selector.value

      let original_grn_qty = JSON.parse(localStorage.getItem('jmi_return_grn_data_list'))[i].grn_qty
      if(parseInt(selector.value) > parseInt(original_grn_qty)) {
        item.grn_qty = original_grn_qty
      }
    },
    reqQtyKeyDownEventHandler(event, i) {
      console.log(i)
      if(event.keyCode === 190 || event.keyCode === 110) {
        event.preventDefault()
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DetailData.less");
</style>

<style scoped>
.quantity-input {
    border: 1px solid #E2EDFA;
}
.quantity-input input:hover {
    background: #FFFFFF;
}
.quantity-input input {
    border: none;
    height: 28px;
}
.quantity-input input:focus {
    outline           : 0 !important;
    outline-offset    : 0 !important;
    -moz-box-shadow   : none !important;
    -webkit-box-shadow: none !important;
    box-shadow        : none !important;
    border: none !important;
}
.quantity-input .quantity {
    height: 28px;
    margin: 0;
    border-bottom: none;
    font-size: 14px;
}

</style>