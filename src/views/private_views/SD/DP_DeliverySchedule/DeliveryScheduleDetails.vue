<template>
    <div class="layout-container">
      <div class="container-fluid">
        <div class="col-12 delivery_schedule-body">
          <div class="row ds-header" style="margin-bottom: 0;"> 
              <div class="col-lg-6 col-6">
                <p class="sr_name">SR: <span>Mehedi Hassan</span></p>
              </div>

              <div class="col-lg-6 col-6 d-flex align-items-center justify-content-end">
                <div class="product-header-info"> 
                    <div class="info">
                        <p>Status: <span class="open">Open</span></p>
                        <p>Date: <span class="date">11-May-2021</span></p>
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
                                <!-- <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> -->
                              </th>
                              <th>Customer</th>
                              <th>Invoice No</th>
                              <th style="justify-content: flex-end;">Amount</th>
                              <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, i) in 20" :key="i">
                              <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                              </td>
                              <td>
                                  <div>
                                      <p class="customer_name">Mehedi Hassan</p>
                                      <p class="order">Order: <span>87256798678</span> <span>(2 days Ago)</span> </p>
                                  </div>
                              </td>
                              <td>
                                <p data-toggle="modal" data-target="#invoice-modal">DHK002151</p>
                              </td>
                              <td style="justify-content: flex-end;">
                                <p>30,561.00</p>
                              </td>
                              <td>
                                <a title="Add bulk-button" data-toggle="tooltip" data-placement="bottom"><i class="zmdi zmdi-plus"></i></a>
                                <a title="Reshedule" data-toggle="tooltip" data-placement="bottom"><i class="zmdi zmdi-calendar-alt"></i></a>
                              </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                              <th colspan="2">
                                  <span class="bulk-button"><span class="fa fa-plus" aria-hidden="true" style="margin-right: 6px;"></span>Bulk Add</span>
                                  <span class="bulk-button" data-toggle="modal" data-target="#reshedule-modal"><i class="zmdi zmdi-calendar-alt"></i>Bulk Reshedule</span>
                              </th>
                              <th><p>Total: <span>3323</span></p></th>
                              <th style="justify-content: flex-end;"><p>Total: <span>13,032.20</span></p></th>
                              <th></th>
                          </tr>
                        </tfoot>
                    </table>

                    <!------------ Start Reshedule Modal ------------>
                    <div class="modal" id="reshedule-modal" tabindex="-1" role="dialog" aria-labelledby="InwardTransfer"
                      aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Bulk Reshedule</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <p class="invoice-list">Invoices: <span>INV32152612, INV31866556, INV32152612 <span class="moreInvoice">More 20+</span></span></p> 
                            <div class="row">
                              <div class="col-lg-6 form-group">
                                <label for="sr_name">Select SR</label>
                                <select class="form-control" id="sr_name">
                                  <option>Mehedi Hassan</option>
                                  <option>Sahid Nawaz</option>
                                </select>
                              </div>
                              <div class="col-lg-6 form-group" >
                                <label for="shift_to">Shift to</label>
                                <input type="date" class="form-control" id="shift_to">
                              </div>
                            </div>

                            <div class="modal-footer justify-content-center">
                              <a href="#"><button type="button" class="btn btn-primary btn-global">Save</button></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!------------ Start Invoice Modal------------>
                    <div class="modal" id="invoice-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="width: 60%; height: 490px, max-height: unset;">
                      <div class="modal-dialog modal-lg modal-dialog-centered" style="margin: 0;">
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
                            <p>Order/Invoice No: <span>INV32646668</span></p>
                            </div>
                            <div class="col-lg-4 col-12">
                              <p>Date: <span>11-May-2021</span></p>
                            </div>
                            <div class="col-lg-4 col-12">
                              <p>Total: <span>3,550.00</span></p>
                            </div>
                            <div class="col-lg-4 col-12">
                              <p>Customer: <span>Lazz Pharma</span></p>
                              </div>
                              <div class="col-lg-4 col-12">
                                <p>Type: <span>Cash</span></p>
                              </div>
                              <div class="col-lg-4 col-12">
                                <p>Current Due: <span>5,500.00</span></p>
                              </div>
                              <div class="col-lg-4 col-12">
                                <p>SR: <span>Abu Naser Tuhin</span></p>
                              </div>
                              <div class="col-lg-4 col-12">
                                <p>Scheduled: <span>11-May-2021</span></p>
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
                                <tr v-for="(item, i) in 10" :key="i">
                                  <td>
                                    <p>5 X Altrip. Almotriptan.</p>
                                  </td>
                                  <td>
                                    <p>Regular (R)</p>
                                  </td>
                                  <td>
                                    <p>30,561.00</p>
                                  </td>
                                </tr>
                              </tbody>
                              <tfoot>
                                <tr>
                                  <th colspan="2"><span>Subtotal:</span></th>
                                  <th><p>13,032.20</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"><span>(+) Vat:</span></th>
                                  <th><p>50.00</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"><span>(-) Discount:</span></th>
                                  <th><p>250.00</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"><span>Gross Total:</span></th>
                                  <th><p>13,032.20</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"><span>(+/-) Rounding Adjustment:</span></th>
                                  <th><p>-0.20</p></th>
                                </tr>
                                <tr>
                                  <th colspan="2"> <span>Grand Total:</span></th>
                                  <th><p>13,032.00</p></th>
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
    </div>
</template>

<script>
export default {
    
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
  text-decoration: underline;
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
</style>