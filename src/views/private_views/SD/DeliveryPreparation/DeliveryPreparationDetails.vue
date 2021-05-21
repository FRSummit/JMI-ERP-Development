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
                        <div class="print-category" v-for="(item, i) in 10" :key="i">
                          <h5 class="" :class="i % 3 === 0 ? 'complete' : ''">Invoices</h5>
                          <div class="action-status">
                            <span class="material-icons-outlined print"><i class="zmdi zmdi-print"></i></span>
                            <span class="fa fa-check-circle status" :class="i % 3 === 0 ? 'complete' : ''"></span>
                          </div>
                        </div>
                        <!-- Start Item -->
                        <div class="print-category">
                          <h5 class="" :class="i % 3 === 1 ? 'active' : ''">Challan</h5>
                          <div class="action-status">
                            <span class="material-icons-outlined print" :class="i % 3 === 1 ? 'active' : ''"></span>
                            <span class="fa fa-check-circle status"></span>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
              <div class="col-8">
              <!-- Start Invoice Table -->
                <div class="delivery_preparation-block">
                    <div class="heading">
                        <h5>All Printings (<span>500</span>)</h5>
                    </div>
                    <div class="dPlaning_printing-table">
                      <table class="col-12">
                        <thead>
                          <tr>
                            <th>SL NO</th>
                            <th>Invoice Number</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>  
                          <tr>
                            <td>
                              <p>01</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>02</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>03</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>04</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>05</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="done">Done</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p>07</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p  class="printing">Printing...</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>08</p>
                            </td>
                            <td>
                              <p>INV232156336</p>
                            </td>
                            <td>
                              <p class="error">Error <span class="material-icons-outlined print" style="cursor: pointer;"><i class="zmdi zmdi-print"></i></span></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
              <!-- End Invoice Table -->

              <!-- Start Complete State -->
              <!-- <div class="delivery_preparation-block d-flex align-items-center justify-content-center">
                  <div class="printIllustration-body">
                      <img src="./printing-done.png" alt="Icon">
                    <h5>All Prints are Done</h5>
                    <p>You Can Handover Now</p>
                  </div>
              </div> -->
              <!-- End Complete State -->
              </div>
              <div class="col-12 d-flex justify-content-center">
                  <a href="#"><button type="button" class="btn btn-primary btn-global disabled">Handover</button></a>
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
  --table-height: 40px;
}
.delivery_preparation_area{
    /* margin-top: 15px; */
    margin: 0px;
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
    flex-basis: 65%;
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
</style>