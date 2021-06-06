<template>
      <div class="layout-container">
        <div class="container-fluid">
          <div class="row delivery_preparation_area">
              <div class="col-4">
                  <div class="delivery_preparation-block ">
                      <div class="heading">
                          <h5>All Printings</h5>
                      </div>
                      <div class="all-printings">
                        <!-- Start Item -->
                        <div class="print-category">
                          <h5 @click="printTypeSelectionClickHandler('INVOICE')">Invoices</h5>
                          <div class="action-status">
                            <span class="material-icons-outlined print" @click="printAllInvoiceClickHandler('INVOICE')" style="color: var(--blue)"><i class="zmdi zmdi-print"></i></span>
                            <span class="fa fa-check-circle status complete hide"></span>
                          </div>
                        </div>
                        <div class="print-category">
                          <h5 @click="printTypeSelectionClickHandler('CHALLAN')">Challan</h5>
                          <div class="action-status">
                            <span class="material-icons-outlined print" @click="printAllChallanClickHandler('CHALLAN')" style="color: var(--blue)"><i class="zmdi zmdi-print"></i></span>
                            <span class="fa fa-check-circle status complete hide"></span>
                          </div>
                        </div>
                        <div class="print-category">
                          <h5>Invoice Summery</h5>
                          <div class="action-status">
                            <span class="material-icons-outlined print" style="color: var(--blue)"><i class="zmdi zmdi-print" @click="invoiceSummeryClickHandler"></i></span>
                            <span class="fa fa-check-circle status complete hide"></span>
                          </div>
                        </div>
                        <div class="print-category">
                          <h5>Packing Summery</h5>
                          <div class="action-status">
                            <span class="material-icons-outlined print" style="color: var(--blue)"><i class="zmdi zmdi-print" @click="packingSummeryClickHandler"></i></span>
                            <span class="fa fa-check-circle status complete hide"></span>
                          </div>
                        </div>
                        <div class="print-category">
                          <h5>Gate Pass</h5>
                          <div class="action-status">
                            <span class="material-icons-outlined print" style="color: var(--blue)"><i class="zmdi zmdi-print" @click="gatePassClickHandler"></i></span>
                            <span class="fa fa-check-circle status complete hide"></span>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
              <div class="col-8">
                <div class="delivery_preparation-block">
                    <div class="heading">
                        <!-- <h5>All Printings (<span>{{ SELECTED_DATA_DETAILS ? SELECTED_DATA_DETAILS.length : 0 }}</span>)</h5> -->
                        <h5>All Printings (<span>{{ DS_DETAILS ? DS_DETAILS.length : 0 }}</span>)</h5>
                    </div>
                    <div class="dPlaning_printing-table">
                        <table class="col-12">
                            <thead>
                                <tr>
                                    <th>SL NO</th>
                                    <th>Invoice Number</th>
                                    <th>Amount</th>
                                    <th>Print</th>
                                </tr>
                            </thead>
                            <tbody>  
                                <tr v-for="(item, i) in SELECTED_DATA_DETAILS" :key="i">
                                    <td><p>{{ i + 1 }}</p></td>
                                    <td><p>{{ item.get_invoice.invoice_no }}</p></td>
                                    <td><p class="done">{{ Number(item.invoice_amt).toFixed(2) }}</p></td>
                                    <td><p><i class="zmdi zmdi-print" @click="printSingleData(item)"></i></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-center">
                  <a><button type="button" class="btn btn-primary btn-global" @click="handoverClickHandler">Handover</button></a>
              </div>
          </div>
        </div>
      </div>
</template>

<script>
import Service from '../../../../service/ERPSidebarService'
const service = new Service()

import PP_Invoice_Type_2_Single from '../../../../functions/Print_Func/PP_Invoice_Type_2_Single'
const pp_Invoice_Type_2_Single = new PP_Invoice_Type_2_Single()
import PP_Invoice_Type_3_Institution from '../../../../functions/Print_Func/PP_Invoice_Type_3_Institution'
const pp_Invoice_Type_3_Institution = new PP_Invoice_Type_3_Institution()
import PP_InvoiceChallanSummeryTD_GatePass from '../../../../functions/Print_Func/PP_InvoiceChallanSummeryTD_GatePass'
const pp_InvoiceChallanSummeryTD_GatePass = new PP_InvoiceChallanSummeryTD_GatePass()
import PP_PackingSummeryAll_T1 from '../../../../functions/Print_Func/PP_PackingSummeryAll_T1'
const pp_PackingSummeryAll_T1 = new PP_PackingSummeryAll_T1()
import PP_InvoiceChallanSummeryTD_Type1 from '../../../../functions/Print_Func/PP_InvoiceChallanSummeryTD_Type1'
const pp_InvoiceChallanSummeryTD_Type1 = new PP_InvoiceChallanSummeryTD_Type1()

import PP_Invoice_Type_2_Multiple from '../../../../functions/Print_Func/PP_Invoice_Type_2_Multiple'
const pp_Invoice_Type_2_Multiple = new PP_Invoice_Type_2_Multiple()

import PP_Invoice_Type_3_Institution_Multiple from '../../../../functions/Print_Func/PP_Invoice_Type_3_Institution_Multiple'
const pp_Invoice_Type_3_Institution_Multiple = new PP_Invoice_Type_3_Institution_Multiple()

export default {
    props: ["SELECTED_ITEM_FROM_LEFT", "DS_DETAILS"],
    data() {
        return {
            SELECTED_DATA_DETAILS: null,

            DS_GATEPASS: null,
            DS_GATEPASS_HEADERS: null,
            
            PROD_PREPARATION_LIST: null,
            PROD_PREPARATION_LIST_HEADER_INFO: null,

            INVOICE_CHALLAN_SUMMERY: null,
            HEADER_DATA: null,

            MULTI_INV_DTL: null,
        }
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        printTypeSelectionClickHandler(type) {
            switch(type) {
                case 'INVOICE':
                    this.SELECTED_DATA_DETAILS = []
                    if(this.DS_DETAILS) {
                        for(let i=0; i<this.DS_DETAILS.length; i++) {
                            if(parseInt(this.DS_DETAILS[i].customer_info.customer_type) === 422) {
                                this.SELECTED_DATA_DETAILS.push(this.DS_DETAILS[i])
                            }
                        }
                        console.log(this.SELECTED_DATA_DETAILS)
                    }
                    break
                case 'CHALLAN':
                    this.SELECTED_DATA_DETAILS = []
                    if(this.DS_DETAILS) {
                        for(let i=0; i<this.DS_DETAILS.length; i++) {
                            if(parseInt(this.DS_DETAILS[i].customer_info.customer_type) === 424) {
                                this.SELECTED_DATA_DETAILS.push(this.DS_DETAILS[i])
                            }
                        }
                    }
                    break
                default:
                    break
            }
        },
        async printAllInvoiceClickHandler() {
            this.SELECTED_DATA_DETAILS = []
            let selected_invoice = []
            if(this.DS_DETAILS) {
                for(let i=0; i<this.DS_DETAILS.length; i++) {
                    if(parseInt(this.DS_DETAILS[i].customer_info.customer_type) === 422) {
                        this.SELECTED_DATA_DETAILS.push(this.DS_DETAILS[i])
                        let inv = {
                            invoice_id: this.DS_DETAILS[i].invoice_id
                        }
                        selected_invoice.push(inv)
                    }
                }
                console.log(selected_invoice)
                await this.PRINT_MULTIPLE_INVOICE_DETAILS__FROM_SERVICE(selected_invoice)
            }
        },
        async printAllChallanClickHandler() {
            this.SELECTED_DATA_DETAILS = []
            let selected_invoice = []
            if(this.DS_DETAILS) {
                for(let i=0; i<this.DS_DETAILS.length; i++) {
                    if(parseInt(this.DS_DETAILS[i].customer_info.customer_type) === 424) {
                        this.SELECTED_DATA_DETAILS.push(this.DS_DETAILS[i])
                        let inv = {
                            invoice_id: this.DS_DETAILS[i].invoice_id
                        }
                        selected_invoice.push(inv)
                    }
                }
                console.log(selected_invoice)
                await this.PRINT_MULTIPLE_CHALLAN_DETAILS__FROM_SERVICE(selected_invoice)
            }
        },
        async invoiceSummeryClickHandler() {
            await this.DELIVERY_SCHEDULE_DETAILS_INVOICE_SUMMERY__FROM_SERVICE(this.SELECTED_ITEM_FROM_LEFT.ds_id)

            if(this.INVOICE_CHALLAN_SUMMERY) {
                let title = 'Invoice & Challan Summary'
                let table_header = [
                    {th:"INVOICE No", style:''},
                    {th:"CUSTOMER TYPE", style:''},
                    {th:"CUSTOMER NAME", style:'text-align: left;'},
                    {th:"AMOUNT", style:'text-align: right;'}
                ]
                console.log(table_header.length)
                let table_data = []
                for(let i=0; i<this.INVOICE_CHALLAN_SUMMERY.length; i++) {
                    let table_single_data = {
                        invoice_id: this.INVOICE_CHALLAN_SUMMERY[i].get_invoice.invoice_no,
                        customer_type: this.checkCustomerType(this.INVOICE_CHALLAN_SUMMERY[i].customer_info.customer_type),
                        customer_name: this.INVOICE_CHALLAN_SUMMERY[i].customer_info.customer_name,
                        amount: this.INVOICE_CHALLAN_SUMMERY[i].invoice_amt
                    }
                    table_data.push(table_single_data)
                }
                pp_InvoiceChallanSummeryTD_Type1.print_invoice(title, table_header, table_data, this.HEADER_DATA)
            }
        },
        checkCustomerType(customer_type) {
            console.log(customer_type)
            if(customer_type === '422') {
                return 'Chemist'
            } else if(customer_type === '424') {
                return 'Institute'
            }
        },
        async packingSummeryClickHandler() {
            await this.DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(this.SELECTED_ITEM_FROM_LEFT.ds_id)

            if(this.PROD_PREPARATION_LIST) {
                let table_header = [
                    {th:"Code", style:''},
                    {th:"Product Name", style:'text-align: left;'},
                    {th:"Pack Size", style:''},
                    {th:"Batch No", style:''},
                    {th:"Invoice Qty", style:''}
                ]
                console.log(table_header.length)
                let table_data = []
                for(let i=0; i<this.PROD_PREPARATION_LIST.length; i++) {
                    let group_table = {
                        sep_moi_name: "Dummy SEP MIO",
                        single_table: []
                    }
                    for(let j=0; j<this.PROD_PREPARATION_LIST[i].length; j++) {
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
                pp_PackingSummeryAll_T1.print_invoice(table_header, this.PROD_PREPARATION_LIST, this.PROD_PREPARATION_LIST_HEADER_INFO)
            }
        },
        async gatePassClickHandler() {
            console.log('gatepass click')
            console.log(this.SELECTED_ITEM_FROM_LEFT)
            await this.DS_GATE_PASS_DETAILS__FROM_SERVICE(this.SELECTED_ITEM_FROM_LEFT.ds_id)

            console.log(this.DS_GATEPASS)
            if(this.DS_GATEPASS) {
                let title = 'Gate Pass'
                let table_header = [
                        {th:"Code", style:''},
                        {th:"Product Name", style:'text-align: left;'},
                        {th:"Pack Size", style:''},
                        {th:"Invoice Qty", style:'text-align: right;'}
                    ]
                    console.log(table_header.length)
                    let table_data = []
                    for(let i=0; i<this.DS_GATEPASS.length; i++) {
                        let table_single_data = {
                        code: this.DS_GATEPASS[i].sbu_product_info ? (this.DS_GATEPASS[i].sbu_product_info.display_code ? (this.DS_GATEPASS[i].sbu_product_info.display_code) : '') : '',
                        prod_name: this.DS_GATEPASS[i].sbu_product_info ? (this.DS_GATEPASS[i].sbu_product_info.display_name ? (this.DS_GATEPASS[i].sbu_product_info.display_name) : '') : '',
                        pack_size: this.DS_GATEPASS[i].adm_products ? (this.DS_GATEPASS[i].adm_products.com_pack_size ? (this.DS_GATEPASS[i].adm_products.com_pack_size) : '') : '',
                        invoice_qty: this.DS_GATEPASS[i].total_qty
                    }
                    table_data.push(table_single_data)
                }
                pp_InvoiceChallanSummeryTD_GatePass.print_invoice(title, table_header, table_data, this.DS_GATEPASS_HEADERS)
                console.log(table_data)
            } else {
                alert('Please select a data from left.')
            }
        },
        printSingleData(item) {
            console.log(item)
            if(item.customer_info.customer_type === '422') {
                this.PRING_INVOCIE_DETAILS__FROM_SERVICE(item.invoice_id, 422)
            } else if(item.customer_info.customer_type === '424') {
                this.PRING_INVOCIE_DETAILS__FROM_SERVICE(item.invoice_id, 424)
            }
        },
        async handoverClickHandler() {
            await this.DS_HHANDOVER__FROM_SERVICE()
        },
        // -------------------------------------------------------------------
        // SERVICE CALL
        async PRING_INVOCIE_DETAILS__FROM_SERVICE(invoice_id, schedule_customer_type) {
            await service.getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(invoice_id)
                .then(res => {
                    console.log(res.data)
                    // if(this.tab === 'INVOICE') {
                        if(res.data.invoice_details.invoice_details.length > 0) {
                            if(schedule_customer_type === 422) {
                                pp_Invoice_Type_2_Single.print_invoice(res.data.invoice_details, res.data.due_details)
                            } else if(schedule_customer_type === 424) {
                                pp_Invoice_Type_3_Institution.print_invoice(res.data.invoice_details, res.data.due_details)
                            }
                        } else {
                            alert('No Invoice data found')
                        }
                    // } else if(this.tab === 'CHALLAN') {
                    //     if(res.data.invoice_details.invoice_details.length > 0) {
                    //         pp_Invoice_Type_3_Institution.print_invoice(res.data.invoice_details, res.data.due_details)
                    //     } else {
                    //         alert('No GATE PASS data found')
                    //     }
                    // } else {
                    //     alert('Print not designed')
                    // }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                    }
                })
        },
        async DELIVERY_SCHEDULE_DETAILS_INVOICE_SUMMERY__FROM_SERVICE(schedule_id) {
            this.INVOICE_CHALLAN_SUMMERY = null
            this.HEADER_DATA = null
            await service.getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(schedule_id)
                .then(res => {
                    this.INVOICE_CHALLAN_SUMMERY = res.data.schedule_list
                    this.HEADER_DATA = res.data.header
                })
                .catch(err => {
                    if(err) {
                        this.INVOICE_CHALLAN_SUMMERY = null
                        this.HEADER_DATA = null
                    }
                })
        },
        async DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(schedule_id) {
            this.PROD_PREPARATION_LIST = null
            this.PROD_PREPARATION_LIST_HEADER_INFO = null
            await service.getDeliveryScheduleProdPreparationListByDA_ID_DS_PACKING_PREPARATION(schedule_id)
                .then(res => {
                    console.log(res.data)
                    this.PROD_PREPARATION_LIST = res.data.prod_preparation_list
                    this.PROD_PREPARATION_LIST_HEADER_INFO = res.data.header
                })
                .catch(err => {
                    if(err) {
                        this.PROD_PREPARATION_LIST = null
                        this.PROD_PREPARATION_LIST_HEADER_INFO = null
                    }
                })
        },
        async DS_GATE_PASS_DETAILS__FROM_SERVICE(ds_id) {
            console.log(ds_id)
            this.DS_GATEPASS = []
            this.DS_GATEPASS_HEADERS = []
            await service.getGatePassDetails_DS_INVOICE_CHALLAN_SUMMERY(ds_id)
                .then(res => {
                    console.log(res.data)
                    this.DS_GATEPASS = res.data.gate_pass_data.gate_pass_details
                    this.DS_GATEPASS_HEADERS = res.data.header
                    })
                    .catch(err => {
                        if(err) {
                            console.log(err)
                            this.DS_GATEPASS = null
                            this.DS_GATEPASS_HEADERS = null
                        }
                    })
        },
        async PRINT_MULTIPLE_INVOICE_DETAILS__FROM_SERVICE(inv_list) {
            this.MULTI_INV_DTL = []
            await service.getPRINT_MULTI_INVOICE_DETAILS__DELIVERY_PREPARATION(inv_list)
                .then(res => {
                    console.log(res.data)
                    this.MULTI_INV_DTL = res.data.data
                    pp_Invoice_Type_2_Multiple.print_invoice(res.data.data)
                })
                .catch(err => {
                    if(err) {
                        this.MULTI_INV_DTL = null
                    }
                })
        },
        async PRINT_MULTIPLE_CHALLAN_DETAILS__FROM_SERVICE(inv_list) {
            this.MULTI_INV_DTL = []
            await service.getPRINT_MULTI_INVOICE_DETAILS__DELIVERY_PREPARATION(inv_list)
                .then(res => {
                    console.log(res.data)
                    this.MULTI_INV_DTL = res.data.data
                    pp_Invoice_Type_3_Institution_Multiple.print_invoice(res.data.data)
                })
                .catch(err => {
                    if(err) {
                        this.MULTI_INV_DTL = null
                    }
                })
        },
        async DS_HHANDOVER__FROM_SERVICE() {
            await service.getDS_HANDOVER__DELIVERY_PREPARATION(this.SELECTED_ITEM_FROM_LEFT.ds_id)
                .then(res => {
                    console.log(res.data)
                    this.$emit('RELOAD_LEFT_SECTION')
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                    }
                })
        },
    },
    watch: {
        DS_DETAILS(newVal) {
            if(newVal) {
                this.SELECTED_DATA_DETAILS = null
            }
        }
    },
    
}
</script>

<style>

:root{
  --table-height: 40px;
}
.delivery_preparation_area{
    /* margin-top: 15px; */
    margin: 0px;
    /* padding: 10px 0; */
    min-height: calc(100vh - (var(--used-height) - (-30px)));
}
/*---------Start Preparation Block ---------*/
.delivery_preparation-block{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    background-color: var(--white);
    box-shadow: 0px 0px 8px #026CD11A;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
    /* height:  calc( (100vh - (var(--used-height))) - 100px); */
    height:  calc( (100vh - (var(--used-height))) - 110px);
  }
.delivery_preparation-block .heading{
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--border-color);
  font-size: var(--font14);
  color: var(--text-black);
}
.delivery_preparation-block .heading h5{
  font-size: var(--font16);
  color: var(--text-black);
}
.delivery_preparation-block .heading h5 span{
  font-size: var(--font16);
  color: var(--blue);
}
.delivery_preparation-block .all-printings {
  height: calc( 100vh - (var(--used-height) + 176px));
  overflow-y: scroll;
}
/*---------End Preparation Block ---------*/
.delivery_preparation_area a{
  margin: 0px;
}
.delivery_preparation_area .btn.btn-primary.btn-global {
 margin-top: 15px;

}
.delivery_preparation_area .btn.btn-primary.btn-global.disabled {
  color: var(--text-black);
  font-weight: 500;
  background-color: #AAC0D9;
}
.print-category{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px;
}
.print-category h5 {
  padding: 10px 15px;
  width: 100%;
  border-radius: 4px;
  color: var(--text-black);
  font-weight: 500;
  font-size: var(--font14);
  background-color: var(--bluish-white); 
  border: 1px solid var(--border-color);
  cursor: pointer;
}
.print-category h5.active {
  color: var(--white);
  background-color: var(--blue); 
  border: 1px solid var(--blue);
}
.print-category h5.complete {
  color: var(--green);
  background-color: #D7F2DB; 
  border: 1px solid #D7F2DB;
}
.print-category .action-status{
  display: flex;
  align-items: center;
  justify-content: center;
}
.print-category .action-status .print {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: var(--font22);
  color: #AAC0D9;
  border-radius: 100px;
  background-color:var(--bluish-white);
  margin: 0px 15px ;
}
.print-category .action-status span,
.print-category .action-status svg {
  cursor: pointer;
  width: 30px !important;
  height: 30px !important;
}
.print-category .action-status .print.active {
  font-weight: 400;
  color: var(--bluish-white); 
  background-color: var(--blue);
}
.print-category .action-status .status {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: 26px;
  color: var(--bluish-white);
  border-radius: 100px;
}
.print-category .action-status .status.complete {
  color: var(--green);
}
.dPlaning_printing-table{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    box-sizing: border-box;
  }
  .dPlaning_printing-table tr{
    width: 100%;
    display:flex;
  }
  .dPlaning_printing-table td,
  .dPlaning_printing-table th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .dPlaning_printing-table thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .dPlaning_printing-table thead tr{
    height: var(--table-height);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .dPlaning_printing-table thead tr th{
    height: var(--table-height);
    display:flex;
    align-items: center;
  }
  /* Start Table Body Area */
  .dPlaning_printing-table tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    height: calc( 100vh - (var(--used-height) + 210px));
  }
  .dPlaning_printing-table tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .dPlaning_printing-table tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
  /* Start Table Alignment Area*/
  .dPlaning_printing-table thead th:nth-child(1),
  .dPlaning_printing-table tbody td:nth-child(1){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .dPlaning_printing-table thead th:nth-child(2),
  .dPlaning_printing-table tbody td:nth-child(2){
    flex-basis: 50%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .dPlaning_printing-table thead th:nth-child(3),
  .dPlaning_printing-table tbody td:nth-child(3){
    flex-basis:20%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .dPlaning_printing-table thead th:last-child,
  .dPlaning_printing-table tbody td:last-child {
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .dPlaning_printing-table thead th:last-child {
      color: #FFFFFF;
  }
  .dPlaning_printing-table .done{
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--green);
    font-size: var(--font14);
    font-weight: 600;
  }
  .dPlaning_printing-table .printing{
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue);
    font-size: var(--font14);
    font-weight: 600;
  }
  .dPlaning_printing-table .error{
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--red);
    font-size: var(--font14);
    font-weight: 600;
  }
  .dPlaning_printing-table .error .print {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: var(--font18);
    color: var(--white);
    border-radius: 100px;
    background-color:var(--blue);
    margin: 0px 10px ;
  }
.printIllustration-body{
    text-align: center;
}
.printIllustration-body img{
    height: 120px;
    width: 120px;
    margin-bottom: 20px;
}
.printIllustration-body h5{
    font-size:var(--font18);
    font-weight: 600;
    color: var(--text-black);
}
.printIllustration-body p{
    margin-top: 10px;
    font-size: var(--font16);
    font-weight: 600;
    color: #C4C8CB;
}
@media screen and (max-width: 1440px) {
  :root {
    --table-height: 40px;
    }
  .print-category{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
}
table th:last-child {
    width: 30px;
}
table td i.zmdi-print {
    font-size: 16px;
    width: 30px;
    text-align: center;
    padding: 7px 0;
    background-color: #E2EDFA;
    color: var(--blue);
    border-radius: 50%;
    cursor: pointer;
}
#dp_delivery_preparation .btn-global {
    opacity: 1;
    color: #FFFFFF !important;
}
</style>