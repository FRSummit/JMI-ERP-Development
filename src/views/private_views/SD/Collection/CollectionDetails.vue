<template>
        <div class="layout-container">
          <div class="container-fluid" style="padding: 0;">
            <div class="row collection_area">
                <div class="col-4" style="height: 100%; padding-bottom: 0;">
                    <table class="collection-table-1">
                        <thead>
                            <tr>
                                <th class="type1" colspan="2">
                                <h5>Customers (<span>20</span>)</h5>
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
                            <tr v-for="(item, i) in DS_CUSTOMER_LIST" :key="i">
                                <td><p><span class="fa fa-square mr-2" :class="item.legend_status"></span>{{ item.customer_name }}</p></td>
                                <td><p>{{ item.type }}</p></td>
                                <td><p>{{ item.total_amount }}</p></td>
                            </tr>
                        </tbody>
                    
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <!-- <th>{{ totalAmountDSCustomerList(DS_CUSTOMER_LIST) }}</th> -->
                                <th>{{ DS_CUSTOMER_LIST_TOTAL_AMOUNT }}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="col-8" style="height: 100%;">
                    <table class="collection-table-2">
                        <thead>
                            <tr>
                                <th colspan="5">
                                    <h5>Collections (<span>20</span>)</h5>
                                </th>
                            </tr>
                            <tr>
                                <th>Mode</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Unadjusted</th>
                                <th>Value Date</th>
                                <th></th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            <tr v-for="(item, i) in 20" :key="i" :class="i%3 == 0 ? 'active' : ''">
                                <td><p>Cash</p></td>
                                <td><p>No123 DT21/Sep/2021</p></td>
                                <td><p>10,000</p></td>
                                <td><p>5,000</p></td>
                                <td><p>21/Sep/2021</p></td>
                                <td><a><i class="zmdi zmdi-refresh"></i></a></td>
                            </tr>
                        </tbody>
                    
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th>18000</th>
                                <th>18000</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>

                    <table class="collection-table-3">
                        <thead>
                            <tr>
                                <th colspan="7"><h5>Invoices (<span>20</span>)</h5></th>
                            </tr>
                            <tr>
                                <th>Invoice</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Paid</th>
                                <th>Panding</th>
                                <th>Due</th>
                                <th>Adjustment</th>
                                <th></th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            <tr v-for="(item, i) in 20" :key="i" :class="i%3 == 0 ? 'active' : ''">
                                <td><p><span class="fa fa-circle"></span>INV-010101</p></td>
                                <td><p>1/1/2021</p></td>
                                <td><p>10,000</p></td>
                                <td><p>5,000</p></td>
                                <td><p>2,000</p></td>
                                <td><p>1000</p></td>
                                <td><p>18000</p></td>
                                <td>
                                    <a data-toggle="modal" data-target="#edit-collection-modal" class="" href="" v-if="i%2 === 0"><i class="zmdi zmdi-edit"></i></a>
                                    <a data-toggle="modal" data-target="#add-collection-modal" class="" href="" v-if="i%2 !== 0"><i class="zmdi zmdi-plus"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th>18000</th>
                                <th>18000</th>
                                <th>18000</th>
                                <th>18000</th>
                                <th>18000</th>
                    
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
          </div>
        <!------------ Start Add Collection Modal------------>
        <div class="modal" id="add-collection-modal" tabindex="-1" role="dialog" aria-labelledby="AddCollection"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
        
                            <div class="col-lg-6 form-group">
                                <label for="invoice_no">Invoice No</label>
                                <input type="text" class="form-control" id="invoice_no" value="INV23414545" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="date">Date</label>
                                <input type="text" class="form-control" id="date" value="20-Oct-2021" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="invoice_due">Total Due</label>
                                <input type="number" class="form-control" id="invoice_due" value="100000" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="invoice_adjustment">Adjustment</label>
                                <input type="number" class="form-control" id="invoice_adjustment" placeholder="Enter Adjustment Amount">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-primary btn-global">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!------------ End Add Collection Modal------------>
        
        <!------------ Start Edit Collection Modal------------>
        <div class="modal" id="edit-collection-modal" tabindex="-1" role="dialog" aria-labelledby="EditCollection"
            aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
        
                            <div class="col-lg-6 form-group">
                                <label for="invoice_no">Invoice No</label>
                                <input type="text" class="form-control" id="invoice_no" value="INV23414545" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="date">Date</label>
                                <input type="text" class="form-control" id="date" value="20-Oct-2021" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="invoice_total">Total</label>
                                <input type="number" class="form-control" id="invoice_total" value="100000" readonly>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label for="invoice_due">Due</label>
                                <input type="number" class="form-control" id="invoice_due" value="100000" readonly>
                            </div>

                            <div class="col-lg-6 form-group">
                                <label for="quantity">Adjustment</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" value="100000" aria-describedby="addon1" readonly>
                                    <div class="input-group-append">
                                        <!-- <span class="input-group-text fa fa-trash" id="addon1"></span> -->
                                        <i class="zmdi zmdi-delete"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-primary btn-global">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!------------ End Edit Collection Modal------------>
        </div>
</template>

<script>
export default {
    props: ["DS_CUSTOMER_LIST"],
    data() {
        return {
        }
    },
    computed: {
        DS_CUSTOMER_LIST_TOTAL_AMOUNT() {
            let total_amount = 0.00
            if(this.DS_CUSTOMER_LIST) {
                for(let i=0; i<this.DS_CUSTOMER_LIST.length; i++) {
                    total_amount += this.DS_CUSTOMER_LIST[i].total_amount
                }
            }
            return total_amount
        }
    },
    created() {},
    mounted() {},
    methods: {
    },
    watch: {
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
  .collection-table-2 i,
  .collection-table-3 i {
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
}

</style>