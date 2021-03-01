<template>
  <div id="order-approval-left-sidebar" class="order-approval-left-sidebar">
    <div class="order-approval-left-sidebar-section">
      <div class="order-approval-left-sidebar-section-inner">
          <!-- Search & Filter section -->
        <div class="search-section">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              class="form-control"
              id="search-filter"
              placeholder="Search by ID No"
              v-on:keyup="searchKeyUpHandler"
            />
          </div>
          <span @click="filterClick"><i class="fas fa-filter"></i></span>
        </div>
        <!-- Customer Counter -->
        <div class="title-count">
            <p class="total-customer">Pending Orders (<span class="count">{{ ALL_PENDING_ORDERS_CUSTOMER_LIST.length }}</span>)</p>
            <div class="select-options">
                <span class="right-icon"><i class="fas fa-chevron-right"></i></span>
                    <select title="Pick a customer" class="selectpicker" v-model="on_change_status" @change="onChangeStatusDropdown()">
                        <option v-for="(status, m) in status_list" :key="m">{{ status.status }}</option>
                </select>
            </div>
        </div>
        <!-- Customer List -->
        <div class="customer-list-section">
            <div class="customer-list-section-inner">
                <div id="progressbar" class="progressbar" v-if="!customer_list">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </div>
                <!-- <div :id="'customer-section-list-' + c" class="customer-section-list" v-for="(customer, c) in customer_list" :key="c" @click="customerClickHandlerFromList(customer, c)"> -->
                <div :id="'customer-section-list-' + c" class="customer-section-list" v-for="(customer, c) in ALL_PENDING_ORDERS_CUSTOMER_LIST" :key="c" @click="customerClickHandlerFromList(customer, c)">
                    <div :id="'customer-section-list-inner-' + c" class="customer-section-list-inner">
                        <div class="customer-id-type-section">
                            <div class="customer-id-type-section-inner">
                                <div class="id-section">
                                    <p class="customer-id">{{ customer ? (customer.order_no ? (customer.order_no) : '' ) : "" }}</p>
                                </div>
                                <div class="type-section">
                                    <p class="customer-type"><span class="type">{{ customer ? (customer.order_date).split(' ')[0] : "" }}</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="customer-name-section">
                            <div class="customer-name-section-inner">
                                <div class="name-section">
                                    <!-- <p class="customer-name">{{ customer ? customer.customer_info.customer_address : "" }}</p> -->
                                    <p class="customer-name">{{ customer ? (customer.sbu_customer_info ? customer.sbu_customer_info.display_name : '') : "" }}</p>
                                </div>
                                <div class="status-section">
                                    <!-- <p class="status" :class="customer.order_status"><span class="status-icon" :class="customer.order_status"></span>{{ customer ? (customer.order_status ? customer.order_status : "Pending") : "Pending" }}</p> -->
                                    <p class="status" :class="'Pending'"><span class="status-icon" :class="'Pending'"></span>{{ customer ? (customer.order_status ? customer.order_status : "Pending") : "Pending" }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="customer-address-section">
                            <div class="customer-address-section-inner">
                                <div class="address-section">
                                    <!-- <p class="customer-address"><span>Order No: {{ customer ? customer.id : 'XXXX' }}</span>|<span>Total Bill: {{ customer ? customer.net_total : '00.00' }}</span></p> -->
                                    <p class="customer-address"><span>Total Bill: {{ customer ? customer.net_total : '00.00' }}</span></p>
                                    <!-- <span class="checkbox">
                                        <input type="checkbox" :id="'order-approval-checkbox-' + c" :name="customer ? customer.customer_id : 0" :value="customer ? customer.customer_id : 0">
                                    </span> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Filter Modal -->
        <div class="filter-sort-modal-section" v-if="filter_modal">
            <div class="filter-sort-modal-section-inner" v-click-outside="filterModalOutsideClick">
                <p class="sort-text">Sort by</p>
                <div class="sort-section">
                    <div class="sort-section-inner">
                        <!-- <div class="input-section">
                            <div class="select-options">
                                <span class="right-icon"
                                    ><i class="fas fa-chevron-right"></i
                                ></span>
                                <select title="Pick a customer" class="selectpicker" v-model="on_change_sort_by" @change="onChangeSortBy()">
                                    <option v-for="(customer, m) in customer_sort_list" :key="m">
                                    {{ customer.name }}
                                    </option>
                                </select>
                            </div>
                        </div> -->
                        <div class="assending-desending-sort">
                            <form class="input-btns">
                                <p><input type="radio" checked="checked" name="serialRange" value="a_to_z" @change="onChange('a_to_z')" /> <span :class="radioSpanDefaultClass">A-Z</span></p>
                                <p><input type="radio" name="serialRange" value="z_to_a" @change="onChange('z_to_a')" /> <span :class="radioSpanCustomClass">Z-A</span></p>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- <p class="filter-text">Filter by</p>
                <div class="filter-section">
                    <div class="filter-section-inner">
                        <p class="type">Customer Type</p>
                        <div class="select-options">
                            <span class="right-icon"
                                ><i class="fas fa-chevron-right"></i
                            ></span>
                            <select title="Pick a customer" class="selectpicker" v-model="on_change_filter_by" @change="onChangeFilterBy()">
                                <option v-for="(customer, m) in customer_sort_list" :key="m">
                                {{ customer.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import ERPService from '../../../../../../service/ERPSidebarService'
const service = new ERPService()
import JMIFilter from '.././../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
    data() {
        return {
            ALL_PENDING_ORDERS_CUSTOMER_LIST: [],
            customer_list: [
                {
                    customer_id: "DHK0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Pending",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "MKY0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Approved",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "SGN0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Rejected",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "FKR0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Pending",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "NGO0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Approved",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "LLP0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Rejected",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "MNO0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Pending",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "AAD0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Approved",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "DHK0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Rejected",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "DHK0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Pending",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "DHK0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Approved",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "DHK0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Rejected",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "DHK0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Pending",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "DHK0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Approved",
                    order_id: "102131",
                    order_bill: "4300",
                },
                {
                    customer_id: "DHK0301",
                    order_date: "09/12/2020",
                    order_address: "ABI Pharmacy and Diagnostic Center",
                    order_status: "Rejected",
                    order_id: "102131",
                    order_bill: "4300",
                },
            ],
            status_list: [
                {
                    status: ""
                },
                {
                    status: "Select All"
                },
                {
                    status: "Approved Selected"
                },
                {
                    status: "Reject Selected"
                },
                {
                    status: "Delivery Date Shift"
                },
                {
                    status: "Print Selected"
                },
            ],
            radioSpanDefaultClass: 'active',
            radioSpanCustomClass: null,
            customer_sort_list: [
                {
                    name: "All Customer"
                },
                {
                    name: "Chemist"
                },
                {
                    name: "Institution"
                },
            ],
            filter_modal: false,
            on_change_status: null,
            on_change_sort_by: null,
            on_change_filter_by: null,
        }
    },
    created() {},
    async mounted() {
        await this.ALL_PENDING_ORDERS_CUSTOMER_LIST__FROM_SERVICE()
    },
    methods: {
        filterClick() {
            if(this.filter_modal) {
                this.filter_modal = false
                this.$emit('filter_modal', this.filter_modal)
            } else {
                this.filter_modal = true
                this.$emit('filter_modal', this.filter_modal)
            }
        },
        filterModalOutsideClick() {
            this.filter_modal = false
            this.$emit('filter_modal', this.filter_modal)
        },
        onChangeStatusDropdown() {
            console.log('onChangeStatusDropdown: ' + this.on_change_status)
            switch(this.on_change_status) {
                case 'Select All':
                    console.log('Select All')
                    break
                case 'Approved Selected':
                    console.log('Approved Selected')
                    break
                case 'Reject Selected':
                    console.log('Reject Selected')
                    break
                case 'Delivery Date Shift':
                    console.log('Delivery Date Shift')
                    break
                default:
                    break
            }
        },
        onChangeSortBy() {
            console.log('onChangeSortBy: ' + this.on_change_sort_by)
        },
        onChange(value) {
            switch(value) {
                case 'a_to_z':
                    this.radioSpanDefaultClass = 'active'
                    this.radioSpanCustomClass = ''
                    this.ALL_PENDING_ORDERS_CUSTOMER_LIST.sort()
                    break
                case 'z_to_a':
                    this.radioSpanDefaultClass = ''
                    this.radioSpanCustomClass = 'active'
                    this.ALL_PENDING_ORDERS_CUSTOMER_LIST.sort().reverse()
                    break
                default:
                    break
            }
        },
        onChangeFilterBy() {
            console.log('onChangeFilterBy: ' + this.on_change_filter_by)
        },
        customerClickHandlerFromList(customer, c) {
            // console.log(c + '    ' +customer)
            let length = document.getElementsByClassName('customer-section-list').length
            for(let i=0; i<length; i++) {
                document.querySelector('#customer-section-list-' + i).className = 'customer-section-list'
            }
            if(document.querySelector('#customer-section-list-' + c).className === 'customer-section-list') {
                document.querySelector('#customer-section-list-' + c).className = 'customer-section-list active'
            } else {
                document.querySelector('#customer-section-list-' + c).className = 'customer-section-list'
            }
            this.$emit("select_order_by_order_id", customer.id)
        },
        searchKeyUpHandler(value) {
            console.log(value.key)
            let input = document.getElementById("search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.customer-section-list')
            let txt_selector = "customer-id"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        async ALL_PENDING_ORDERS_CUSTOMER_LIST__FROM_SERVICE() {
            await service.getAllPendingOrdersCustomerList_OrderApprovalLeftSide()
                .then(res => {
                    console.log(res.data)
                    this.ALL_PENDING_ORDERS_CUSTOMER_LIST = res.data.orders_info
                })
        }
    }
}
</script>

<style lang="less" scoped>
@import url("./LeftSidebarSection.less");
</style>