<template>
    <!-- Start Secondary Sidebar Area-->  
    <div class="layout-sidebar delivery_schedule">
        <!-- Start Secondary Sidebar Header Area-->  
        <div class="header">  
            <div class="row1">
                <div class="form-group"><i class="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" class="form-control"></div>
                <span class="filter_search"><i class="fa fa-filter"> </i> </span>
            </div>
            <div class="row2">
            <h5>Delivery Schedule: <span>{{ DELIVERY_SCHEDULE_LIST ? DELIVERY_SCHEDULE_LIST.length : 0 }}</span></h5>
            </div>
        </div>
        <!--End Secondary Sidebar Header Area-->  
        
        <!--Start Secondary Sidebar Content Area--> 
        <div class="content">
            <div class="ds_accordion" id="accordion-1">
                <div :id="'card-' + i" class="card" v-for="(item, i) in DELIVERY_SCHEDULE_LIST" :key="i">
                    <div class="card-header" :id="'headingOne-' + i">
                        <button class="btn btn-link">
                            <h5>{{ dateFormat(item.date) }}</h5>
                        </button>
                        <span>{{ Number(item.total).toFixed(2) }}</span>
                        <span class="transparent-span" @click="parentCardClickHandler(item, i)"></span>
                    </div>
                
                    <div :id="'collapseOne-' + i" class="collapse" aria-labelledby="headingOne" data-parent="#accordion-1">
                        <div class="card-body" v-for="(card, j) in item.data" :key="j">
                            <!-- Start Item -->
                            <div class="ds_innerItem">
                                <div class="row1" @click="childCardBodyClickHandler(card, j)"> 
                                    <div class="group-1"> 
                                        <!-- <i class="fa fa-square status-active" aria-hidden="true"></i>  -->
                                        <p>{{ card.dp_force.force_name }} <span class="hide">DHK213686</span></p>
                                    </div>
                                    <h5>{{ card.dp_force.force_inv_total ? Number(card.dp_force.force_inv_total).toFixed(2) : 0.00 }}</h5>
                                </div>
                                <div class="row2" @click="childCardBodyClickHandler(card, j)">
                                    <p>{{ card.dp_force.micro_union_name }}</p>
                                </div>
                                <div class="row3"> 
                                    <div class="group-2" @click="childCardBodyClickHandler(card, j)"><p>Scheduled: <span>{{ card.dp_force.planned }}</span></p><p style="margin-left: 10px;">New: <span>{{ card.dp_force.new }}</span></p></div> 
                                    <i class="material-icons" v-if="card.dp_force.ds_status === 'N'" @click="agorBatiIconClickHandler(card, j)">auto_fix_normal</i>
                                    <i class="zmdi zmdi-lock-open" v-if="(card.dp_force.ds_status === 'O') && (parseInt(card.dp_force.planned) > 0) && (parseInt(card.dp_force.new) === 0)" @click="unlockIconClickHandler(card, j)"></i>
                                    <i class="zmdi zmdi-lock-outline" v-if="card.dp_force.ds_status === 'L'"></i>
                                    <!-- <i class="material-icons">auto_fix_normal</i> -->
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
import Service from '../../../../service/ERPSidebarService'
const service = new Service()
import GlobalDateFormat from '../../../../functions/GlobalDateFormat'
const globalDateFormat = new GlobalDateFormat()

export default {
    props: ["RELOAD_LEFT_SECTION"],
    data() {
        return {
            parentCard: 5,
            childCard: 2,
            DELIVERY_SCHEDULE_LIST: null,
        }
    },
    async mounted() {
        await this.DP_DS_LIST__FROM_SERVICE()
    },
    methods: {
        parentCardClickHandler(item, index) {
            console.log(index)
            console.log(item)

            // for(let i=0; i<this.DELIVERY_SCHEDULE_LIST.length; i++) {
            //     document.querySelector('#card-' + i + ' #collapseOne-' + i).className = 'collapse'
            //     document.querySelector('#card-' + i).className = 'card'
            //     document.querySelector('#headingOne-' + i).className = 'card-header'
            // }
            if(document.querySelector('#card-' + index + ' #collapseOne-' + index).className === 'collapse') {
                document.querySelector('#card-' + index + ' #collapseOne-' + index).className = 'collapse show'
                document.querySelector('#card-' + index).className = 'card open'
                document.querySelector('#headingOne-' + index).className = 'card-header active'
            } else {
                document.querySelector('#card-' + index + ' #collapseOne-' + index).className = 'collapse'
                document.querySelector('#card-' + index).className = 'card'
                document.querySelector('#headingOne-' + index).className = 'card-header'
            }
        },
        childCardBodyClickHandler(card, index) {
            console.log(index)
            console.log(card)
            this.$emit('SINGLE_ITEM_FROM_LEFT', card)
        },
        myObject(item) {
            console.log(item.length)
        },
        dateFormat(dt) {
            return globalDateFormat.dateFormatT4(dt)
        },
        agorBatiIconClickHandler(card, i) {
            console.log(i)
            console.log(card)
            console.log(card.date + '    ' + card.dp_force.force_id)
            this.CREATE_DELIVERY_SCHEDULE_INVOICE_LIST_BY_DA(card.dp_force.force_id, card.date)
        },
        async unlockIconClickHandler(card, i) {
            console.log(i)
            console.log(card)
            await this.DS_LOCK_BY_DS_ID__FROM_SERVICE(card.dp_force.ds_id)
        },
        // --------------------------------------------------------------------------------------------
        // SERVICE CALL
        async DP_DS_LIST__FROM_SERVICE() {
            this.DELIVERY_SCHEDULE_LIST = null
            await service.getDPDSList__DP_DS()
                .then(res => {
                    console.log(res.data)
                    this.DELIVERY_SCHEDULE_LIST = res.data.delivery_schedule_list
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.DELIVERY_SCHEDULE_LIST = null
                    }
                })
        },
        async CREATE_DELIVERY_SCHEDULE_INVOICE_LIST_BY_DA(da_id, date) {
            this.PENDING_DELIVERY_SCHEDULE_INV_LIST = []
            await service.getCreateDeliveryScheduleBy_DA_DELIVERY_SCHEDULING(da_id, date)
                .then(res => {
                    console.log(res.data.invoice_count)
                    this.DP_DS_LIST__FROM_SERVICE()
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                    }
                })
        },
        async DS_LOCK_BY_DS_ID__FROM_SERVICE(ds_id) {
            await service.getDS_LOCK__DELIVERY_PREPARATION(ds_id)
                .then(res => {
                    console.log(res.data)
                    this.DP_DS_LIST__FROM_SERVICE()
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                    }
                })
        },
    },
    watch: {
        RELOAD_LEFT_SECTION(newVal) {
            if(newVal) {
                this.DP_DS_LIST__FROM_SERVICE()
            }
        }
    }
}
</script>

<style scoped>
/*Start Secondary Sidebar Header Area*/
.layout-sidebar.delivery_schedule{
    min-width: var(--sidebar-width);
    width: 100%;
    border-right: 1px solid  var(--border-color);
    width: 260px;
}
.layout-sidebar.delivery_schedule .header{
    background-color: var(--white);
    padding: 15px 10px;
}
.layout-sidebar.delivery_schedule .header .row1{
    display: flex;
    justify-content:space-between; 
}
.layout-sidebar.delivery_schedule .header .row2{
    margin-top: 10px;
}
.layout-sidebar.delivery_schedule .header .row2 h5{
    color: var(--text-label);
    font-size: var(--font14);
}
.layout-sidebar.delivery_schedule .header .row2 span{
    color: var(--blue);
}
.layout-sidebar.delivery_schedule .header .row1 .form-group {
    position: relative;
    margin-bottom: 0px!important;
    width: 100%;
}
.layout-sidebar.delivery_schedule .header .row1 .form-group i{
    position: absolute; 
    top: 12px; 
    left:10px; 
    color: #AAC0D9;
    font-size: var(--font14);
}
.layout-sidebar.delivery_schedule .header .row1 .form-group svg {
    position: absolute; 
    top: 16px; 
    left:10px; 
    color: #AAC0D9;
    font-size: var(--font14);
}
.layout-sidebar.delivery_schedule .header .row1 .form-group input{
    padding-left: 36px !important;
    border-radius: 2px !important;
    border: 1px solid var(--border-color) !important;
    /* width: 80%; */
    height: 38px !important;
}
.layout-sidebar.delivery_schedule .header .row1 .form-group input::placeholder{
    font-size: var(--font14) ;
    color: #AAC0D9;
}
.layout-sidebar.delivery_schedule .header .row1 .form-group input:focus{
    border-color: var(--blue);
    box-shadow: none;
}
.layout-sidebar.delivery_schedule .header .row1 .filter_search{
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
.layout-sidebar.delivery_schedule .header .row1 .filter_search:hover{
    color: var(--white);
    background-color: var(--blue);
}
/*End Secondary Sidebar Header Area*/

/*Start Secondary Sidebar Content Area*/
.layout-sidebar.delivery_schedule .content {
    height: calc( 100vh - (var(--used-height) + 68px + 40px) );
    overflow-y: scroll;
}
.layout-sidebar.delivery_schedule .content .ds_accordion {
    height: calc( 100vh - (var(--used-height) + 68px + 46px) );
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card{
    border: none;
    padding: 0px;
    margin-bottom: 0px;
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header{
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
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header button{
 height: 100%;
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    text-align: center;
    height: 25px;
    padding: 5px 10px;
    font-size: var(--font14);
    font-weight: 500;
    color: var(--blue);
    border-radius: 8px;
    background-color: var(--bluish-white);
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header h5{
    color: var(--blue);
    font-size: var(--font14);
}
/* Start For Active */
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header.active{
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
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header.active span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    text-align: center;
    height: 25px;
    padding: 5px 10px;
    font-size: var(--font14);
    font-weight: 500;
    color: var(--white);
    border: 1px solid var(--white);
    border-radius: 8px;
    background-color: var(--blue);
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header.active h5{
    color:var(--white);
    font-size: var(--font14);
}
/* End For Active */

.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header .btn-link{
    text-align: left;
    text-decoration: none;
    /* width: 100%; */
    /* min-width: 160px; */
    width: 100px;
    box-shadow: none;
    position: relative;
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card .transparent-span {
    width: 35px !important;
    height: 30px !important;
    position: absolute !important;
    right: -50px !important;
    top:10px !important;
    text-align: center !important;
    opacity: 0;
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header .btn-link:after{
    color: var(--text-black);
    font-family: FontAwesome;
    content:'\f106';
    width: 35px;
    font-size: 20px;
    text-align: center;
    border: 5px;
    position: absolute;
    /* right: 0px; */
    /* right: -96px; */
    right: -150px;
    top:10px;
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header .btn-link.collapsed:after{
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
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-body{
    border: none!important;
    padding: 0rem;
    cursor: pointer;
}
.ds_accordion .card .card-body .ds_innerItem {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--white);
    border-bottom: 1px solid var(--border-color);
}
.ds_accordion .card .card-body .ds_innerItem:hover,
.ds_accordion .card .card-body .ds_innerItem:active {
    background-color: var(--bluish-white);
}
.ds_accordion .card .card-body .ds_innerItem .row1,
.ds_accordion .card .card-body .ds_innerItem .row2,
.ds_accordion .card .card-body .ds_innerItem .row3{
    margin: 1px 0px;
    display: flex;
    align-items: center;
    justify-content:space-between; 
}
.ds_accordion .card .card-body .ds_innerItem .row1 .group-1{
    display: flex;
    align-items: center;
    font-size: var(--font14);
}
.ds_accordion .card .card-body .ds_innerItem .row1 .group-1 .status-active {
    font-size: var(--font14);
    color: var(--blue);
    margin-right: 5px;
}
.ds_accordion .card .card-body .ds_innerItem .row1 .group-1 p {
  color: var(--blue);
  font-weight: 500;
}
.ds_accordion .card .card-body .ds_innerItem .row1 .group-1 p span {
  color: var(--text-black);
  font-weight: 500;
}
.ds_accordion .card .card-body .ds_innerItem .row1 h5 {
  font-size: var(--font14);
  color: var(--blue);
}
.layout-sidebar.delivery_schedule .content .ds_innerItem .row2 p {
    font-size: var(--font14) ;
    color: var(--text-black);
}
.ds_accordion .card .card-body .ds_innerItem .row3 .group-2{
  display: flex;
  align-items: center;
}
.ds_accordion .card .card-body .ds_innerItem .row3 .group-2 p{
  font-size: var(--font14);
  color: #879097;
  margin-right: 5px;
}
.ds_accordion .card .card-body .ds_innerItem .row3 .group-2 p span{
  font-size: var(--font14);
  color: var(--blue);
  font-weight: 500;
}
.ds_accordion .card .card-body:hover .ds_innerItem .row3 i {
    background-color: #FFFFFF;
}
.ds_accordion .card .card-body .ds_innerItem .row3 i {
  height: 30px;
  width: 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  color: var(--blue);
}
@media screen and (max-width: 768px) { 
    .layout-sidebar.delivery_schedule{
        width: 100%;
    }
    .layout-sidebar.delivery_schedule .content{
        height: calc(230px - (68px + 25px));
        overflow-y: scroll;
    }
}
/*End Secondary Sidebar Content Area*/

.btn.btn-link:hover,
.btn.btn-link:focus {
    background-color: transparent;
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card .card-header .btn-link:after {
    transform: rotate(-180deg);
    color: var(--blue);
}
.layout-sidebar.delivery_schedule .content .ds_accordion .card.open .card-header .btn-link:after {
    transform: rotate(0deg);
    color: #FFFFFF;
}
</style>