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
              placeholder="Search by Name, ID No"
              v-on:keyup="searchKeyUpHandler"
            />
          </div>
          <span @click="filterClick"><i class="fas fa-filter"></i></span>
        </div>
        <!-- Customer Counter -->
        <div class="title-count">
            <p class="total-customer">Pending Orders (<span class="count">250</span>)</p>
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
                <div :id="'customer-section-list-' + c" class="customer-section-list" v-for="(customer, c) in customer_list" :key="c" @click="customerClickHandlerFromList(customer, c)">
                    <div :id="'customer-section-list-inner-' + c" class="customer-section-list-inner">
                        <div class="customer-id-type-section">
                            <div class="customer-id-type-section-inner">
                                <div class="id-section">
                                    <p class="customer-id">{{ customer.customer_id }}</p>
                                </div>
                                <div class="type-section">
                                    <p class="customer-type"><span class="type">{{ customer.order_date }}</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="customer-name-section">
                            <div class="customer-name-section-inner">
                                <div class="name-section">
                                    <p class="customer-name">{{ customer.order_address }}</p>
                                </div>
                                <div class="status-section">
                                    <p class="status" :class="customer.order_status"><span class="status-icon" :class="customer.order_status"></span>{{ customer.order_status }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="customer-address-section">
                            <div class="customer-address-section-inner">
                                <div class="address-section">
                                    <p class="customer-address"><span>Order ID: {{ customer.order_id }}</span>|<span>Total Bill: {{ customer.order_bill }}</span></p>
                                    <span class="checkbox">
                                        <input type="checkbox" :id="'order-approval-checkbox-' + c" :name="customer.customer_id" :value="customer.customer_id">
                                    </span>
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
                        <div class="input-section">
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
                        </div>
                        <div class="assending-desending-sort">
                            <form class="input-btns">
                                <p><input type="radio" checked="checked" name="serialRange" value="a_to_z" @change="onChange('a_to_z')" /> <span :class="radioSpanDefaultClass">A-Z</span></p>
                                <p><input type="radio" name="serialRange" value="z_to_a" @change="onChange('z_to_a')" /> <span :class="radioSpanCustomClass">Z-A</span></p>
                            </form>
                        </div>
                    </div>
                </div>
                <p class="filter-text">Filter by</p>
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
                </div>
            </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import JMIFilter from '.././../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
    data() {
        return {
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
    mounted() {},
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
        },
        onChangeSortBy() {
            console.log('onChangeSortBy: ' + this.on_change_sort_by)
        },
        onChange(value) {
            switch(value) {
                case 'a_to_z':
                    this.radioSpanDefaultClass = 'active'
                    this.radioSpanCustomClass = ''
                    break
                case 'z_to_a':
                    this.radioSpanDefaultClass = ''
                    this.radioSpanCustomClass = 'active'
                    break
                default:
                    break
            }
        },
        onChangeFilterBy() {
            console.log('onChangeFilterBy: ' + this.on_change_filter_by)
        },
        customerClickHandlerFromList(customer, c) {
            console.log(c + '    ' +customer)
        },
        searchKeyUpHandler(value) {
            console.log(value.key)
            let input = document.getElementById("search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.customer-section-list')
            let txt_selector = "customer-id"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        }
    }
}
</script>

<style lang="less" scoped>
@import url("./LeftSidebarSection.less");
</style>