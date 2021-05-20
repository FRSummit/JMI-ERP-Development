<template>
    <div class="transfer-verify-requisition-sidebar">
        <div class="layout-sidebar requisition">
            <!-- Start Secondary Sidebar Header Area-->  
            <div class="header">  
               <div class="row1">
                    <div class="form-group"><i class="fa fa-search"></i>
                        <input type="text" placeholder="Search by Name, ID No" id="search-filter" class="form-control" v-on:keyup="searchKeyUpHandler">
                    </div>
                    <span class="filter_search"><i class="fa fa-filter"> </i> </span>
               </div>
               <div class="row2">
                    <h5>Pending Requisitions: <span>{{ items ? (items.length ? items.length : 0) : 0 }}</span></h5>
               </div>
            </div>
            <!--End Secondary Sidebar Header Area-->  
            
            <!--Start Secondary Sidebar Content Area--> 
            <div class="content jmi-scroll-section">
                <div :id="'card_body-' + i" class="card_body" v-for="(item, i) in items" :key="i" @click="singleItemClickHandler(item, i)">
                    <div class="row1">
                        <h5>{{ item.requisition_no }}</h5>
                        <p>{{ (item.req_date).split(' ')[0] }}</p>
                        <p class="search_by_item hide">{{ item.requisition_no }} {{ item.date }} {{ item.requisition }} {{ item.area }} {{ item.req_status }}</p>
                    </div>
                    <div class="row2">
                        <p>{{ item.req_to_info ? item.req_to_info.area_name : '' }}</p>
                    </div>
                    <div class="row3">
                        <p>Requisition To: <span>{{ item.req_to_info ? item.req_to_info.wh_code : '' }}</span></p>
                        <p class="status" :class="item.req_status.toLowerCase()"> <i class="fa fa-square mr-1"></i>{{ item.req_status }}</p>
                    </div>
                </div>
            </div>
            <!--End Secondary Sidebar Content Area--> 
        </div>
    </div>
</template>

<script>
// import DemoData from '../../DemoData'
// const demoData = new DemoData()
import JMIFilter from '../../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()
import ERPService from '../../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
    props: [],
    components: {},
    data() {
        return {
            items: []
        }
    },
    computed: {
        LOAD_STOCK_REQUISITION_LIST() {
            return this.$store.state.TRANSFER_REQUISITION__VERIFY_REQUISITION
        }
    },
    created() {},
    async mounted() {
        // this.items = demoData.demo_data().requisition_items
        await this.SOTCK_REQUISITION_LIST__FROM_SERVICE()

        if(this.$store.state.SELECTED_REQUISITION_DATA_BACK_FROM_EDIT !== null ? this.$store.state.SELECTED_REQUISITION_DATA_BACK_FROM_EDIT : false) {
            let selected_requisition = this.$store.state.SELECTED_REQUISITION_DATA_BACK_FROM_EDIT
            this.$store.state.SELECTED_REQUISITION_DATA_BACK_FROM_EDIT = null

            console.log(selected_requisition)

            for(let i=0; i<this.items.length; i++) {
                if(this.items[i].requisition_no === selected_requisition) {
                    document.getElementById('card_body-' + i).click()
                }
            }
        }
    },
    methods: {
        searchKeyUpHandler(value) {
            console.log(value.key)
            let input = document.getElementById("search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.card_body')
            let txt_selector = "search_by_item"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        singleItemClickHandler(item, i) {
            console.log('index : ' + i)
            console.log(item)
            this.$emit('SINGLE_ITEM_SELECTED', item)
        },
        // ---------------------------------------------------------------------------
        // SERVICE CALL
        async SOTCK_REQUISITION_LIST__FROM_SERVICE() {
            this.items = []
            await service.getApproveStockRequisitionList_TRANSFER_VERIFY_REQUISITION()
                .then(res => {
                    console.log(res.data)
                    this.items = res.data.transfer_info
                    console.log(this.items)
                })
                .catch(err => {
                    if(err) {
                        this.items = []
                        alert('Server Error 500. ' + err)
                    }
                })
        }
    },
    watch: {
        LOAD_STOCK_REQUISITION_LIST(newVal) {
            if(newVal) {
                console.log(newVal)
                this.SOTCK_REQUISITION_LIST__FROM_SERVICE()
            }
        }
    }
}
</script>

<style scoped>
.transfer-requisition-sidebar {
    height: calc(100vh - (74px + 54px + 32px));
}
.layout-sidebar.requisition .header .row1 {
    height: 38px;
}
.layout-sidebar.requisition .header .row1 .form-group {
    /* overflow: hidden; */
    height: 38px;
}
.layout-sidebar.requisition .header .row1 .form-group svg {
    position: absolute;
    top: 12px;
    left: 10px;
    color: #AAC0D9;
    font-size: var(--font14);
}
.header input {
    width: 80%;
    height: 36px;
    margin: 0;
    font-size: 14px;
}
.layout-sidebar.requisition .header .row2 h5 {
    font-weight: 500;
}
.layout-sidebar.requisition .content .card_body .row1 h5 {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
}
.layout-sidebar.requisition .content .card_body .row1 h5 {
    line-height: 1.5;
}
.jmi-scroll-section {
    height: calc(100vh - (74px + 54px + 32px + 108px)) !important;
}
</style>