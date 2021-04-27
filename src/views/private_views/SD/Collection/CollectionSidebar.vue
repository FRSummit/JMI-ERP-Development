<template>
    <div class="layout-sidebar collection">
        <!-- Start Secondary Sidebar Area-->  
        <!-- Start Secondary Sidebar Header Area-->  
        <div class="header">  
        <div class="row1">
            <div class="form-group"><i class="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" class="form-control"></div>
            <!-- <span class="filter_search" data-toggle="modal" data-target="#CollectionFilter"><i class="fa fa-filter"> </i> </span> -->
            <span class="filter_search" @click="openFilterModal"><i class="fa fa-filter"> </i> </span>

        </div>
        </div>
        <!--End Secondary Sidebar Header Area-->  

        <!--Start Secondary Sidebar Content Area--> 
        <div class="content">
            <div class="card_body" v-for="(item, i) in 20" :key="i">
                <div class="row1">
                    <h5 v-if="i%3 === 0"><i class="fa fa-square mr-1 green" aria-hidden="true"></i>Mehedi Hassan</h5>
                    <h5 v-if="i%3 === 1"><i class="fa fa-square mr-1 orange" aria-hidden="true"></i>Mehedi Hassan</h5>
                    <h5 v-if="i%3 === 2"><i class="fa fa-square mr-1 gray" aria-hidden="true"></i>Mehedi Hassan</h5>
                    <p class="date">10/04/2021</p>
                </div>
                <div class="row2">
                    <p>Total Collection: <span>200</span></p>
                </div>
                <div class="row3">
                    <p>Territory Name 1, Territory Name...</p>
                </div>
            </div>
        </div>
        <!--End Secondary Sidebar Content Area--> 
                    <!-- Start Filter Modal -->
            <!-- <div class="modal" id="CollectionFilter" tabindex="-1" role="dialog" aria-labelledby="CollectionFilterTitle"
                aria-hidden="true" data-backdrop="false">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" id="collection-modalContent">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Filter</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="date_range">Filter by SR</label>
                                <select class="form-control">
                                    <option value="">Select SR</option>
                                    <option value="">Mehedi Hassan</option>
                                    <option value="">Atik Faysal</option>
                                    <option value="">Nahid Ahmed</option>
                                </select>
                            </div>
            
                            <div class="form-group">
                                <label for="date_range">Set Date Range</label>
                                <input type="date" class="form-control" id="date_range">
                            </div>
            
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="Adjust">
                                <label class="form-check-label" for="Adjust">
                                    Adjust
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="Pending">
                                <label class="form-check-label" for="Pending">
                                    Pending
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="Unadjusted" checked>
                                <label class="form-check-label" for="Unadjusted">
                                    Unadjusted
                                </label>
                            </div>
            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary btn-global btn-filterSerach"
                                data-dismiss="modal">Search</button>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- End Filter Modal -->

        <!-- End Secondary Sidebar Area--> 
        
        <!-- Filter Modal -->
        <div id="filter-modal" class="modal-popup-section filter-modal" v-if="filter_modal">
            <div class="modal-popup-section-inner filter-modal-inner">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" id="collection-modalContent">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Filter</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="date_range">Filter by SR</label>
                                <select class="form-control">
                                    <option value="">Select SR</option>
                                    <option value="">Mehedi Hassan</option>
                                    <option value="">Atik Faysal</option>
                                    <option value="">Nahid Ahmed</option>
                                </select>
                            </div>
            
                            <div class="form-group">
                                <label for="date_range">Set Date Range</label>
                                <input type="date" class="form-control" id="date_range">
                            </div>
            
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="Adjust">
                                <label class="form-check-label" for="Adjust">
                                    Adjust
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="Pending">
                                <label class="form-check-label" for="Pending">
                                    Pending
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="Unadjusted" checked>
                                <label class="form-check-label" for="Unadjusted">
                                    Unadjusted
                                </label>
                            </div>
            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary btn-global btn-filterSerach" @click="filterSearchBtnClickHandler">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filter_modal: false,
            
        }
    },
    methods: {
        openFilterModal() {
            if(this.filter_modal) {
                this.filter_modal = false
            } else {
                this.filter_modal = true
            }
        },
        filterSearchBtnClickHandler() {
            this.filter_modal = false
        },
    }
}
</script>

<style scoped>
/*Start Secondary Sidebar Header Area*/
.layout-sidebar.collection{
    position: relative;
    min-width: var(--sidebar-width);
    width: 100%;
    border-right: 1px solid  var(--border-color);
    margin: 0;
    border-top: none;
}
/* Start Collection Filter Modal */
#CollectionFilter{
   width: 280px;
   margin: 0px 10px;
   position: absolute;
   top: 30px;
   left: 235px;
   z-index: 11010;
}
#collection-modalContent{
    box-shadow: 0px 0px 8px #026CD11A;
    border: 1px solid var(--border-color);
}
#collection-modalContent .modal-header,
#collection-modalContent .modal-body,
#collection-modalContent .modal-footer
 {
    padding: .5rem 1rem;
    border-color: var(--border-color);
}
#collection-modalContent .modal-header .modal-title{
    color: var(--black)!important;
    font-size: var(--font16)!important;
}
#CollectionFilter .form-check label {
    display: flex;
    align-items: center;
}
#CollectionFilter .form-check label {
    color: var(--black);
    font-size: var(--font14);
    font-weight: 500;
    margin-top: 5px;
}
#CollectionFilter .btn-filterSerach{
  width: 100%;
}
#CollectionFilter .form-group #date_range{
    padding-left: 10px;
}
/* End Collection Filter Modal */

.layout-sidebar.collection .header{
    background-color: var(--white);
    padding: 15px 10px;
}
.layout-sidebar.collection .header .row1{
    display: flex;
    justify-content:space-between; 
}
.layout-sidebar.collection .header .row1 .form-group {
    position: relative;
    margin-bottom: 0px!important;
    width: 100%;
}
.layout-sidebar.collection .header .row1 .form-group i,
.layout-sidebar.collection .header .row1 .form-group svg{
    position: absolute; 
    top: 12px; 
    left:10px; 
    color: #AAC0D9;
    font-size: var(--font14);
    }
.layout-sidebar.collection .header .row1 .form-group input{
    padding-left: 36px;
    border-radius: 2px;
    border: 1px solid  var(--border-color);
    width: 80%;
    height: 38px;
}
.layout-sidebar.collection .header .row1 .form-group input::placeholder{
    font-size: var(--font14);
    color: #AAC0D9;
}
.layout-sidebar.collection .header .row1 .form-group input:focus{
    border-color: var(--blue);
    box-shadow: none;
}
.layout-sidebar.collection .header .row1 .filter_search{
    color: #AAC0D9;
    font-size: var(--font16);
    text-align: center;
    padding: 8px;
    height: 38px;
    width: 38px;
    border-radius: 2px;
    border: 1px solid var(--border-color);
    margin-left: 10px;
    cursor: pointer;
}

.layout-sidebar.collection .header .row1 .filter_search:hover{
    color: var(--white);
    background-color: var(--blue);
}
/*End Secondary Sidebar Header Area*/

/*Start Secondary Sidebar Content Area*/
.layout-sidebar.collection .content{
    /* height: calc( 100vh - (var(--used-height) + 68px) ); */
    height: calc( 100vh - (var(--used-height) + 84px) );
    overflow-y: scroll;
}
.layout-sidebar.collection .content .card_body {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--white);
    border-bottom: 1px solid var(--border-color);
}
.layout-sidebar.collection .content .card_body:hover,
.layout-sidebar.collection .content .card_body:active {
    background-color: var(--bluish-white);
}
.layout-sidebar.collection .content .card_body .row1,
.layout-sidebar.collection .content .card_body .row2,
.layout-sidebar.collection .content .card_body .row3 {
    margin: 1px 0px;
    display: flex;
    justify-content:space-between; 
}
.layout-sidebar.collection .content .card_body .row1 h5 {
    font-size: var(--font14);
    color:  var(--text-black);
    text-overflow: ellipsis;
    width: inherit;
    white-space: nowrap;
}
.layout-sidebar.collection .content .card_body .row1 .date {
font-size: var(--font14);
color: var(--text-black);
}
.layout-sidebar.collection .content .card_body .row2 p {
    font-size: var(--font14) ;
    color: var(--text-black);
    font-weight: 500;
}
.layout-sidebar.collection .content .card_body .row3 p {
    font-size: var(--font14);
    color: #879097;
}
@media screen and (max-width: 768px) { 
    .layout-sidebar.collection{
        width: 100%;
    }
    .layout-sidebar.collection .content{
        height: calc(230px - 68px);
        overflow-y: scroll;
    }
}
/*End Secondary Sidebar Content Area*/

.filter-modal {
    background: rgb(0 18 35 / 50%);
}
.filter-modal-inner {
    top: 140px;
    left: 330px;
    padding: 0;
    width: 300px;
    text-align: left;
}
.filter-modal .modal-dialog {
    margin: 0;
    border: none;
}
.filter-modal .modal-dialog input[type=date] {
    height: 38px;
    padding-left: 12px;
}
.filter-modal .modal-dialog .form-check {
    padding-left: 0;
}
.filter-modal .modal-dialog input[type=checkbox] {
    margin: 0;
    margin-right: 8px;
    vertical-align: middle;
}
.filter-modal .modal-dialog .modal-footer button {
    width: 100%;
}

</style>