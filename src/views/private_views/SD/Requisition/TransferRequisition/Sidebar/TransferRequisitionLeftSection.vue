<template>
    <div class="transfer-requisition-sidebar">
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
                    <h5>Pending Requisitions: <span>200</span></h5>
               </div>
            </div>
            <!--End Secondary Sidebar Header Area-->  
            
            <!--Start Secondary Sidebar Content Area--> 
            <div class="content jmi-scroll-section">
                <div class="card_body" v-for="(item, i) in items" :key="i">
                    <div class="row1">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.date }}</p>
                        <p class="search_by_item hide">{{ item.title }} {{ item.date }} {{ item.requisition }} {{ item.area }} {{ item.status }}</p>
                    </div>
                    <div class="row2">
                        <p>{{ item.requisition }}</p>
                    </div>
                    <div class="row3">
                        <p>Requisition To: <span>{{ item.area }}</span></p>
                        <p class="status" :class="item.status.toLowerCase()"> <i class="fa fa-square mr-1"></i>{{ item.status }}</p>
                    </div>
                </div>
            </div>
            <!--End Secondary Sidebar Content Area--> 
        </div>
    </div>
</template>

<script>
import DemoData from '../../DemoData'
const demoData = new DemoData()
import JMIFilter from '.././../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
    props: [],
    components: {},
    data() {
        return {
            items: []
        }
    },
    computed: {},
    created() {},
    mounted() {
        this.items = demoData.demo_data().transfer_requisition_items
    },
    methods: {
        searchKeyUpHandler(value) {
            console.log(value.key)
            let input = document.getElementById("search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.card_body')
            let txt_selector = "search_by_item"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        }
    },
    watch: {}
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