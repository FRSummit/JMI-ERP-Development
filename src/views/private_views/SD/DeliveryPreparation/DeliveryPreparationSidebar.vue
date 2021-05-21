<template>
        <!-- Start Secondary Sidebar Area-->  
        <div class="layout-sidebar delivery_preparation">
            <!-- Start Secondary Sidebar Header Area-->  
            <div class="header">  
               <div class="row1">
                    <div class="form-group"><i class="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" class="form-control"></div>
                    <span class="filter_search"><i class="fa fa-filter"> </i> </span>
               </div>
            </div>
            <!--End Secondary Sidebar Header Area-->  
            
            <!--Start Secondary Sidebar Content Area--> 
            <div class="content">
                <div class="deliveryPre_accordion" id="accordion-1">
                  <div class="card">
                      <div class="card-header active" id="headingOne">
                          <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              <h5>12 May 2021</h5> 
                          </button>
                      </div>
                  
                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion-1">
                        <div class="card-body">
                        <!-- Start Item -->
                        <div class="ds_innerItem">
                            <div class="row1"> 
                              <h5>Abu Naser Tuhin</h5>
                              <span>11-May-2021</span>
                            </div>
                            <div class="row2">
                              <p>Total Invoice: <span>08</span></p>
                              <!-- <span class="fa fa-check-circle status"></span> -->
                            </div>
                          </div>
  
                        <!-- Start Item -->
                        <div class="ds_innerItem">
                            <div class="row1"> 
                              <h5>Abu Naser Tuhin</h5>
                              <span>11-May-2021</span>
                            </div>
                            <div class="row2">
                              <p>Total Invoice: <span>08</span></p>
                              <span class="fa fa-check-circle status"></span>
                            </div>
                          </div>
  
                        <!-- Start Item -->
                        <div class="ds_innerItem">
                            <div class="row1"> 
                              <h5>Abu Naser Tuhin</h5>
                              <span>11-May-2021</span>
                            </div>
                            <div class="row2">
                              <p>Total Invoice: <span>08</span></p>
                              <span class="fa fa-check-circle status"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  
                  <div class="card">
                      <div class="card-header" id="headingTwo">
                          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              <h5>12 May 2021</h5> 
                          </button>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion-1">
                      <div class="card-body">
                        <!-- Start Item -->
                        <div class="ds_innerItem">
                          <div class="row1"> 
                            <h5>Abu Naser Tuhin</h5>
                            <span>11-May-2021</span>
                          </div>
                          <div class="row2">
                            <p>Total Invoice: <span>08</span></p>
                            <span class="fa fa-check-circle status"></span>
                          </div>
                        </div>

                        <!-- Start Item -->
                        <div class="ds_innerItem">
                            <div class="row1"> 
                              <h5>Abu Naser Tuhin</h5>
                              <span>11-May-2021</span>
                            </div>
                            <div class="row2">
                              <p>Total Invoice: <span>08</span></p>
                              <span class="fa fa-check-circle status"></span>
                            </div>
                        </div>

                        <!-- Start Item -->
                        <div class="ds_innerItem">
                            <div class="row1"> 
                              <h5>Abu Naser Tuhin</h5>
                              <span>11-May-2021</span>
                            </div>
                            <div class="row2">
                              <p>Total Invoice: <span>08</span></p>
                              <span class="fa fa-check-circle status"></span>
                            </div>
                        </div>

                      </div>
                      </div>
                  </div>
              </div>
            </div>
            <!--End Secondary Sidebar Content Area--> 
        </div>
        <!-- End Secondary Sidebar Area--> 
</template>
<script>


export default {
    
}
</script>

<style scoped>

/*Start Secondary Sidebar Header Area*/
.layout-sidebar.delivery_preparation{
  min-width: var(--sidebar-width);
  width: 100%;
  border-right: 1px solid  var(--border-color);
}
.layout-sidebar.delivery_preparation .header{
  background-color: var(--white);
  padding: 15px 10px;
}
.layout-sidebar.delivery_preparation .header .row1{
  display: flex;
  justify-content:space-between; 
}
.layout-sidebar.delivery_preparation .header .row1 .form-group {
  position: relative;
  margin-bottom: 0px!important;
  width: 100%;
}
.layout-sidebar.delivery_preparation .header .row1 .form-group i{
  position: absolute; 
  top: 12px; 
  left:10px; 
  color: #AAC0D9;
  font-size: var(--font14);
  }
.layout-sidebar.delivery_preparation .header .row1 .form-group input{
  padding-left: 36px;
  border-radius: 2px;
  border: 1px solid var(--border-color);
}
.layout-sidebar.delivery_preparation .header .row1 .form-group input::placeholder{
  font-size: var(--font14) ;
  color: #AAC0D9;
}
.layout-sidebar.delivery_preparation .header .row1 .form-group input:focus{
  border-color: var(--blue);
  box-shadow: none;
}
.layout-sidebar.delivery_preparation .header .row1 .filter_search{
  color: #AAC0D9;
  font-size: var(--font16);
  text-align: center;
  padding: 8px;
  height: 38px;
  width: 38px;
  border-radius: 2px;
  border: 1px solid  var(--border-color);
  margin-left: 10px;
}
.layout-sidebar.delivery_preparation .header .row1 .filter_search:hover{
  color: var(--white);
  background-color: var(--blue);
}
/*End Secondary Sidebar Header Area*/

/*Start Secondary Sidebar Content Area*/
.layout-sidebar.delivery_preparation .content {
  height: calc( 100vh - (var(--used-height) + 68px + 25px) );
  overflow-y: scroll;
}
.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card{
  border: none;
  padding: 0px;
  margin-bottom: 0px;
}
.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card .card-header{
  padding: 0px;
  display: flex;
  align-items: center;
  color: var(--blue);
  font-size: var(--font14);
  height: 50px;
  background-color: var(--white);
  border-radius: unset!important;
  border-bottom: 1px solid var(--border-color);
  justify-content: space-between;
  cursor: pointer;
}
.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card .card-header button{
height: 100%;
}
.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card .card-header h5{
  color: var(--blue);
  font-size: var(--font14);
}
/* Start For Active */
.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card .card-header.active{
  padding: 0px;
  display: flex;
  align-items: center;
  color:var(--white);
  font-size: var(--font14);
  height: 50px;
  background-color: var(--blue);
  border-radius: unset!important;
  border-bottom: 1px solid var(--border-color);
  justify-content: space-between;
}
.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card .card-header.active h5{
  color:var(--white);
  font-size: var(--font14);
}
/* End For Active */

.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card .card-header .btn-link{
  text-align: left;
  text-decoration: none;
  width: 100%;
}
.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card .card-header .btn-link:after{
  color: var(--text-black);
  font-family: FontAwesome;
  content:'\f106';
  width: 35px;
  font-size: 20px;
  text-align: center;
  border: 5px;
  position: absolute;
  right: 0px;
  top:10px;
}
.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card .card-header .btn-link.collapsed:after{
  font-family: FontAwesome;
  content:'\f107';
  width: 35px;
  font-size: 20px;
  text-align: center;
  border: 5px;
  position: absolute;
  right: 0px;
  top:10px;
}
.layout-sidebar.delivery_preparation .content .deliveryPre_accordion .card .card-body{
  border: none!important;
  padding: 0rem;
}
.deliveryPre_accordion .card .card-body .ds_innerItem {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white);
  border-bottom: 1px solid var(--border-color);
}
.deliveryPre_accordion .card .card-body .ds_innerItem:hover,
.deliveryPre_accordion .card .card-body .ds_innerItem:active {
  background-color: var(--bluish-white);
}
.deliveryPre_accordion .card .card-body .ds_innerItem .row1,
.deliveryPre_accordion .card .card-body .ds_innerItem .row2{
  margin: 1px 0px;
  display: flex;
  align-items: center;
  justify-content:space-between; 
}
.deliveryPre_accordion .card .card-body .ds_innerItem .row1 h5{
  font-size: var(--font14) ;
  color: var(--blue);
}
.deliveryPre_accordion .card .card-body .ds_innerItem .row1 span{
  font-size: var(--font14) ;
  color: var(--text-black);
}
.deliveryPre_accordion .card .card-body .ds_innerItem .row2 p{
font-size: var(--font14);
color: #879097;
margin-right: 5px;
}
.deliveryPre_accordion .card .card-body .ds_innerItem .row2 p span{
font-size: var(--font14);
color: var(--blue);
font-weight: 500;
}
.deliveryPre_accordion .card .card-body .ds_innerItem .row2 .status{
  font-size: var(--font14);
  color: var(--green);
  margin-right: 5px;
  }
@media screen and (max-width: 768px) { 
  .layout-sidebar.delivery_preparation{
      width: 100%;
  }
  .layout-sidebar.delivery_preparation .content{
      height: calc(230px - (68px + 25px));
      overflow-y: scroll;
  }
}
/*End Secondary Sidebar Content Area*/
#dp_delivery_preparation button:focus,
#dp_delivery_preparation button:hover {
  background-color: transparent;
}
.layout-sidebar.delivery_preparation .header .row1 .form-group input {
  padding-left: 30px !important;
  height: 38px !important;
}
.layout-sidebar.delivery_preparation .header .row1 .form-group svg {
    position: absolute; 
    top: 14px; 
    left:10px; 
    color: #AAC0D9;
    font-size: var(--font14);
}
</style>