<template>
    <div class="transfer-requisition-sidebar">
        <div class="layout-sidebar create-requisition">
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
                <div class="card_body" v-for="(item, i) in items" :key="i" @click="itemClickHandler(item, i)">
                    <input :id="'card_body_input_' + i" type="checkbox" :name="item.title" :value="item.title">
                    <label for="product-1" class="check-item">
                        <div class="row1">
                            <h5>{{ item.mdcn_name }}</h5>
                            <span>{{ item.qty }}</span>
                            <span class="search_by_item hide">{{ item.title }} {{ item.qty }} {{ item.desc }}</span>
                        </div>
                        <div class="row2">
                            <p>{{ item.desc }}</p>
                        </div>
                    </label> 
                </div>
            </div>
            <!--End Secondary Sidebar Content Area--> 
        </div>
    </div>
</template>

<script>
import DemoData from '../../DemoData'
const demoData = new DemoData()
import JMIFilter from '../../../../../../functions/JMIFIlter'
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
        this.items = demoData.demo_data().requisition_items
    },
    methods: {
        itemClickHandler(item, i) {
            console.log(item)
            let checkbox_selector = document.querySelector('#card_body_input_' + i)
            if(checkbox_selector.checked === true) {
                checkbox_selector.checked = false
                this.$emit('SINGLE_REQUISITOR_ITEM_REMOVED', item)
            } else {
                checkbox_selector.checked = true
                this.$emit('SINGLE_REQUISITOR_ITEM_SELECTED', item)
            }
        },
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
.layout-sidebar.create-requisition .header .row1 {
    height: 38px;
}
.layout-sidebar.create-requisition .header .row1 .form-group {
    /* overflow: hidden; */
    height: 38px;
}
.layout-sidebar.create-requisition .header .row1 .form-group svg {
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
.layout-sidebar.create-requisition .header .row2 h5 {
    font-weight: 500;
}
.layout-sidebar.create-requisition .content .card_body .row1 h5 {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
}
.layout-sidebar.create-requisition .content .card_body .row1 h5 {
    line-height: 1.5;
}
.jmi-scroll-section {
    height: calc(100vh - (74px + 54px + 32px + 108px)) !important;
}
</style>