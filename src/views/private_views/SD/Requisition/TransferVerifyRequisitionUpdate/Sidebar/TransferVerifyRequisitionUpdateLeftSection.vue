<template>
    <div class="transfet-verify-requisition-update-sidebar">
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
                    <h5>Available Products: <span>{{ items.length ? items.length : '' }}</span></h5>
               </div>
            </div>
            <!--End Secondary Sidebar Header Area-->  
            
            <!--Start Secondary Sidebar Content Area--> 
            <div class="content jmi-scroll-section">                
                <div class="card_body" v-for="(item, i) in items" :key="i">
                    <input :id="'card_body_input_' + i" type="checkbox" @change="checkboxClickHandler(item, i)">
                    <label for="product-1" class="check-item" @click="itemClickHandler(item, i)">
                        <div class="row1">
                            <h5>{{ item.prod_code }} - {{ item.prod_name }}</h5>
                            <!-- <span>{{ item.prod_class }}</span> -->
                            <span class="search_by_item hide">{{ item.prod_code }} {{ item.prod_name }} {{ item.prod_class }} {{ item.base_tp }} {{ item.prod_id }} {{ item.base_vat }} {{ item.base_uom }}</span>
                        </div>
                        <div class="row2">
                            <p>Unit Price: {{ item.base_tp }} - {{ item.base_uom }}</p>
                        </div>
                    </label> 
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
            items: [],
        }
    },
    computed: {
        DESELECT_ALL_PRODUCT() {
            return this.$store.state.DESELECT_ALL_SELECTED_PRODUCT
        }
    },
    created() {},
    async mounted() {
        // this.items = demoData.demo_data().requisition_items
        await this.SOTCK_REQUISITION_PRODUCT_LIST__FROM_SERVICE()

        /*if(this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE === 'Transfer Requisition') {
            if(this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT !== null ? this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.id : false) {
                console.log(this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT)
                let pre_selected_prods = this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.transfer_details
                
                for(let i=0; i<this.items.length; i++) {
                    for(let j=0; j<pre_selected_prods.length; j++) {
                        if(parseInt(this.items[i].prod_id) === parseInt(pre_selected_prods[j].prod_id)) {
                            Object.assign(this.items[i], {req_qty: pre_selected_prods[j].req_qty})
                            this.$emit('SINGLE_REQUISITOR_ITEM_SELECTED', this.items[i])
                            let checkbox_selector = document.querySelector('#card_body_input_' + i)
                            checkbox_selector.checked = true
                        }
                    }
                }
            }
        } else if(this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE === 'Approve Requisition') {
            
        } else if(this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE === 'Verified Requisition') {
        } else {
            console.log('No data')
        }*/
        console.log(this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE)
        if(this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT !== null ? this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.id : false) {
            console.log(this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT)
            let pre_selected_prods = this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.transfer_details
            
            for(let i=0; i<this.items.length; i++) {
                for(let j=0; j<pre_selected_prods.length; j++) {
                    if(parseInt(this.items[i].prod_id) === parseInt(pre_selected_prods[j].prod_id)) {
                        // Object.assign(this.items[i], {req_qty: pre_selected_prods[j].req_qty})
                        // Object.assign(this.items[i], {trans_qty: pre_selected_prods[j].trans_qty})
                        Object.assign(this.items[i], {req_qty: pre_selected_prods[j].trans_qty})
                        Object.assign(this.items[i], {detail_id: pre_selected_prods[j].id})
                        Object.assign(this.items[i], {current_stock: pre_selected_prods[j].current_stock})
                        Object.assign(this.items[i], {req_current_stock: pre_selected_prods[j].req_current_stock})
                        this.$emit('SINGLE_REQUISITOR_ITEM_SELECTED', this.items[i])
                        let checkbox_selector = document.querySelector('#card_body_input_' + i)
                        checkbox_selector.checked = true
                    }
                }
            }
            this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT = null
            // this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE = null
        } else {
            console.log('no data')
        }
    },
    methods: {
        checkboxClickHandler(item, i) {
            console.log(item)
            console.log(i)
            Object.assign(item, {req_qty: 1})
            let checkbox_selector = document.querySelector('#card_body_input_' + i)
            if(checkbox_selector.checked === true) {
                console.log('true')
                this.$emit('SINGLE_REQUISITOR_ITEM_SELECTED', item)
            } else {
                console.log('false')
                this.$emit('SINGLE_REQUISITOR_ITEM_REMOVED', item)
            }
        },
        itemClickHandler(item, i) {
            console.log(item)
            // item.req_qty = 0
            Object.assign(item, {req_qty: 1})
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
        },
        deselectAllSelectedProduct() {
            for(let i=0; i<this.items.length; i++) {
                let checkbox_selector = document.querySelector('#card_body_input_' + i)
                if(checkbox_selector.checked === true) {
                    checkbox_selector.checked = false
                }
            }
        },
        // ----------------------------------------------------------------------------------
        // SERVICE CALL
        async SOTCK_REQUISITION_PRODUCT_LIST__FROM_SERVICE() {
            this.items = []
            await service.getRequisitionProductList_CREATE_REQUISITION()
                .then(res => {
                    console.log(res.data)
                    this.items = res.data.product_list
                    this.$emit('DEPOT_NAME', res.data.depot_name)
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
        DESELECT_ALL_PRODUCT(newVal, oldVal) {
            if(newVal !== oldVal) {
                this.deselectAllSelectedProduct()
            }
        }
    }
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
    height: calc(100vh - (74px + 54px + 32px + 110px)) !important;
}
.layout-sidebar.create-requisition {
    min-width: var(--sidebar-width);
    width: var(--sidebar-width);
}
</style>