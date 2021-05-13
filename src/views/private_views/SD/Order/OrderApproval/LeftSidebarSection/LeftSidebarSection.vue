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
            <p class="total-customer">Pending Orders (<span id="total_order_counter" class="count">{{ ALL_PENDING_ORDERS_CUSTOMER_LIST.length }}</span>)</p>
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
                                    <p class="customer-id">{{ customer ? (customer.sbu_customer_info ? customer.sbu_customer_info.display_name : '') : "" }}</p>
                                    <p class="customer-id-2 hide">{{ customer ? (customer.search_key ? (customer.search_key) : '' ) : "" }}</p>
                                </div>
                                <div class="type-section">
                                    <p class="customer-type"><span class="type">{{ customer ? (customer.order_date).split(' ')[0] : "" }}</span></p>
                                    <p class="customer-type-date-filter hide"><span class="type">{{ customer ? (customer.order_date).split(' ')[0] : "" }}</span></p>
                                    <!-- <p class="customer-type"><span class="type">{{ customer ? (customer.order_date) : "" }}</span></p> -->
                                </div>
                            </div>
                        </div>
                        <div class="customer-name-section">
                            <div class="customer-name-section-inner">
                                <div class="name-section">
                                    <!-- <p class="customer-name">{{ customer ? customer.customer_info.customer_address : "" }}</p> -->
                                    <p class="customer-name">{{ customer ? (customer.order_no ? (customer.order_no) : '' ) : "" }}</p>
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
                                    <span class="checkbox">
                                        <input type="checkbox" :id="'order-approval-checkbox-' + c" :name="customer ? customer.customer_id : 0" :value="customer ? customer.customer_id : 0" @change="checkboxOnChangeHandler(customer, c)">
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
                <!-- <span class="sort-text" style="color: red;">Development in progress</span> -->
                <p class="sort-text" style="margin-bottom: 10px;">Filter <span style="float: right; color: var(--red); cursor: pointer;" @click="filterCLoseClickHandler">X</span></p>
                <div class="sort-section">
                    <div class="sort-section-inner">
                        <b>Date From</b>
                        <input type="date" v-model="date_filter_order" @change="dateFilterOnChangeHandler">
                        <span style="display: block; margin-top: 10px;"></span>
                        <b>Date To</b>
                        <input type="date" v-model="date_filter_order_to" @change="dateFilterToOnChangeHandler">
                        <!-- <date-picker v-model="range" lang="en" range type="date" format="YYYY-MM-DD" width="500" @change="dateRangeOnChangeHandler"></date-picker> -->
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
                        <!-- <div class="assending-desending-sort">
                            <form class="input-btns">
                                <p><input type="radio" checked="checked" name="serialRange" value="a_to_z" @change="onChange('a_to_z')" /> <span :class="radioSpanDefaultClass">A-Z</span></p>
                                <p><input type="radio" name="serialRange" value="z_to_a" @change="onChange('z_to_a')" /> <span :class="radioSpanCustomClass">Z-A</span></p>
                            </form>
                        </div> -->
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
        <!-- Approve Selected With DA Modal -->
        <div class="modal-popup-section_type_2" v-if="approve_selected_with_da_popup_modal">
            <div class="modal-popup-section_type_2-inner" v-click-outside="approveSelectedWithDA_PopupModalOutsideClick">
                <p class="title">Bulk Approve</p>
                <!-- <p class="title blue-title">DA Name: <span>{{ selected_da_for_approve }}</span></p> -->
                <!-- <div class="input-section">
                    <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input
                        type="text"
                        class="form-control"
                        id="search-filter"
                        placeholder="Search by Name, ID No"
                        />
                    </div>
                </div> -->
                <div class="list-section">
                    <div class="list-section-inner">
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="approve_da_modal_select_box_item" @change="onChangeApproveDAModalSelectBoc()">
                            <option selected>ALL SR</option>
                            <option v-for="(da, i) in DA_LIST_FOR_APPROVE" :key="i">{{ da.name }}</option>
                        </select>
                        <!-- <p class="list-item" v-for="(da, i) in DA_LIST_FOR_APPROVE" :key="i" @click="daNameClickHandler(da)">{{ da.name }}</p> -->
                    </div>
                </div>
                <div class="submit-section" v-if="approve_da_modal_select_box_item">
                    <div class="submit-section-inner">
                        <button class="cancel" @click="cancelClickHandlerFromApproveDA_Modal">Cancel</button>
                        <button class="confirm" @click="confirmClickHandlerFromApproveDA_Modal">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Approve Product Confirmation -->
        <div class="modal-popup-section order-proceed-modal" v-if="approve_selection_modal">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">You want to approve the orders.</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                <div class="popup-cancel-btn-section">
                    <span @click="cancelApprovingOrdersClickHandler">Cancel</span>
                </div>
                <div class="popup-confirm-btn-section">
                    <span @click="confirmApprovingOrdersClickHandler">Confirm</span>
                </div>
                </div>
            </div>
        </div>
        <!-- Order Approved Message -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="approved_orders_success_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">{{ ORDER_SUCCESS_MESSAGE }}</p>
                <!-- <p class="popup-text">{{ SELECT_ORDER_APPROVED_COUNT }} Orders Approved out of {{ SELECT_ORDER_COUNT }}</p> -->
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ERPService from '../../../../../../service/ERPSidebarService'
const service = new ERPService()
import JMIFilter from '.././../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()
// import DatePicker from 'vue2-datepicker'

export default {
    props: ["rejected_order_id", "approved_order_id"],
    components: {
        // DatePicker
    },
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
                    status: "Deselect All"
                },
                {
                    status: "Approved Selected"
                },
                {
                    status: "Approved Selected with SR"
                },
                {
                    status: "Reject Selected"
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
            SELECT_OPTION__CUSTOMER_ID_LIST: [],
            SELECT_OPTION__ORDER_ID_LIST: [],
            approve_selected_with_da_popup_modal: false,
            DA_LIST_FOR_APPROVE: [],
            selected_da_for_approve: null,
            approve_da_modal_select_box_item: null,
            approve_selection_modal: false,
            approved_orders_success_modal: false,
            ORDER_SUCCESS_MESSAGE: null,
            SELECTED_ORDER_INDEX: null,
            SELECT_ORDER_COUNT: null,
            SELECT_ORDER_APPROVED_COUNT: null,

            date_filter_order: null,
            date_filter_order_to: null,
            
            date: '',
            time: '',
            timePickerOptions: {
                start: '00:00',
                step: '00:30',
                end: '23:30'
            },
            datetime: '',
            range: ''
        }
    },
    computed: {},
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

                this.date_filter_order = ''
                this.date_filter_order_to = ''
                this.dateFilterOnChangeHandler()
                document.getElementById('total_order_counter').textContent = this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length
            }
        },
        filterCLoseClickHandler() {
            this.filter_modal = false
        },
        dateFilterOnChangeHandler() {
            console.log(this.date_filter_order)
            // document.querySelector('#search-filter').value = this.date_filter_order
            let filter = this.date_filter_order
            let list = document.querySelectorAll('.customer-section-list')
            let txt_selector = "customer-id-2"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        dateFilterToOnChangeHandler() {
            console.log(this.date_filter_order_to)

            let list = document.querySelectorAll('.customer-section-list')
            let txt_selector = "customer-type-date-filter"
            if(this.date_filter_order) {
                let filter = ''
                jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
            }
            let date_from = new Date(this.date_filter_order).getTime()
            let date_to = new Date(this.date_filter_order_to).getTime()
            console.log(date_from)
            console.log(date_to)

            jmiFilter.searchByDateRange(date_from, date_to, list, txt_selector, this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length)
        },
        dateRangeOnChangeHandler() {
            console.log(this.range)
        },
        filterModalOutsideClick() {
            this.filter_modal = false
            this.$emit('filter_modal', this.filter_modal)
        },
        approveSelectedWithDA_PopupModalOutsideClick() {
            this.approve_selected_with_da_popup_modal = false
            this.$emit('approve_selected_with_da_popup_modal', this.approve_selected_with_da_popup_modal)
        },
        checkboxOnChangeHandler(order, selector_id) {
            console.log('change : ' + selector_id)
            let radio_selector = document.querySelector('#order-approval-left-sidebar #order-approval-checkbox-' + selector_id)
            if(radio_selector.checked === true) {
                console.log('checked true')
            } else {
                // radio_selector.checked = false
                console.log('checked false')
                // if(this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length > 0) {
                //     for (let [i, tt] of this.ALL_PENDING_ORDERS_CUSTOMER_LIST.entries()) {
                //         if (tt.id === order.id) {
                //             // this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.splice(i, 1);
                //             console.log('matched : ' + i)
                //         }
                //     }
                // }
            }
        },
        cancelApprovingOrdersClickHandler() {
            this.approve_selection_modal = false
            this.on_change_status = ''
            this.$emit('approve_selection_modal', this.approve_selection_modal)
        },
        confirmApprovingOrdersClickHandler() {
            console.log('confirm')
            if(this.SELECT_OPTION__CUSTOMER_ID_LIST.length > 0 && this.SELECT_OPTION__ORDER_ID_LIST.length > 0) {
                let orders = []
                for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                    let order = {
                        order_id: this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].id
                    }
                    orders.push(order)
                }
                this.APPROVE_ALL_SELECTED_ORDER__FROM_SERVICE(orders)
                // console.log(orders.length)
                this.SELECT_ORDER_COUNT = orders.length
            } else {
                let orders = []
                console.log('specific ids')
                for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                    let radio_selector = document.querySelector('#order-approval-left-sidebar #order-approval-checkbox-' + i)
                    if(radio_selector.checked === true) {
                        console.log(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].customer_id)
                        console.log(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].id)
                        let order = {
                            order_id: this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].id
                        }
                        orders.push(order)
                    }
                }
                this.APPROVE_SPECIFIC_SELECTED_ORDER__FROM_SERVICE(orders)
                // console.log(orders.length)
                this.SELECT_ORDER_COUNT = orders.length
            }
            this.on_change_status = ''
        },
        async onChangeStatusDropdown() {
            console.log('onChangeStatusDropdown: ' + this.on_change_status)
            switch(this.on_change_status) {
                case 'Select All':
                    this.SELECT_OPTION__CUSTOMER_ID_LIST = []
                    this.SELECT_OPTION__ORDER_ID_LIST = []
                    for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                        let radio_selector = document.querySelector('#order-approval-left-sidebar #order-approval-checkbox-' + i)
                        radio_selector.checked = true
                        this.SELECT_OPTION__CUSTOMER_ID_LIST.push(parseInt(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].customer_id))
                        this.SELECT_OPTION__ORDER_ID_LIST.push(parseInt(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].id))
                    }
                    this.$emit("multiple_order_selection")
                    // alert(this.SELECT_OPTION__CUSTOMER_ID_LIST)
                    // alert(this.SELECT_OPTION__ORDER_ID_LIST)
                    break
                case 'Deselect All':
                    this.SELECT_OPTION__CUSTOMER_ID_LIST = []
                    this.SELECT_OPTION__ORDER_ID_LIST = []
                    for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                        let radio_selector = document.querySelector('#order-approval-left-sidebar #order-approval-checkbox-' + i)
                        radio_selector.checked = false
                    }
                    this.on_change_status = ''
                    break
                case 'Approved Selected':
                    // console.log('Approved Selected')
                    if(this.approve_selection_modal) {
                        this.approve_selection_modal = false
                        this.on_change_status = ''
                        this.$emit('approve_selection_modal', this.approve_selection_modal)
                    } else {
                        this.approve_selection_modal =true
                        this.$emit('approve_selection_modal', this.approve_selection_modal)
                    }
                    break
                case 'Approved Selected with SR':
                    console.log('Approved Selected with SR')
                    if(this.approve_selected_with_da_popup_modal) {
                        this.approve_selected_with_da_popup_modal = false
                        this.$emit('approve_selected_with_da_popup_modal', this.approve_selected_with_da_popup_modal)
                    } else {
                        this.approve_selected_with_da_popup_modal = true
                        this.$emit('approve_selected_with_da_popup_modal', this.approve_selected_with_da_popup_modal)
                        await this.DIC_WISE_USERS__FROM_SERVICE()
                        // this.approve_da_modal_select_box_item = this.DA_LIST_FOR_APPROVE[0].name
                        this.approve_da_modal_select_box_item = 'ALL SR'
                        console.log(this.DA_LIST_FOR_APPROVE[0])
                    }
                    this.on_change_status = ''
                    break
                case 'Reject Selected':
                    // console.log('Reject Selected')
                    // for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                    //     let radio_selector = document.querySelector('#order-approval-left-sidebar #order-approval-checkbox-' + i)
                    //     if(radio_selector.checked === true) {
                    //         this.SELECT_OPTION__CUSTOMER_ID_LIST.push(parseInt(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].customer_id))
                    //         this.SELECT_OPTION__ORDER_ID_LIST.push(parseInt(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].id))
                    //     }
                    // }
                    if(this.SELECT_OPTION__CUSTOMER_ID_LIST.length > 0 && this.SELECT_OPTION__ORDER_ID_LIST.length > 0) {
                        this.REJECT_ALL_SELECTED_ORDER__FROM_SERVICE()
                    } else {
                        alert('Please select at least one order')
                        this.on_change_status = ''
                    }
                    break
                default:
                    break
            }
        },
        onChangeApproveDAModalSelectBoc() {
            console.log(this.approve_da_modal_select_box_item)
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
        checkMultipleOrderIsSelect() {
            let count_selected_order = 0
            for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                let radio_selector = document.querySelector('#order-approval-left-sidebar #order-approval-checkbox-' + i)
                if(radio_selector.checked === true) {
                    count_selected_order++
                }
            }
            return count_selected_order
        },
        customerClickHandlerFromList(customer, c) {
            this.SELECTED_ORDER_INDEX = c
            console.log(this.SELECTED_ORDER_INDEX)
            if(this.checkMultipleOrderIsSelect() < 2) {
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
            } else {
                this.$emit("multiple_order_selection")
            }
        },
        searchKeyUpHandler(value) {
            console.log(value.key)
            let input = document.getElementById("search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.customer-section-list')
            let txt_selector = "customer-id-2"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        /*daNameClickHandler(da) {
            console.log(da.name)
            this.selected_da_for_approve = da.name
        },*/
        cancelClickHandlerFromApproveDA_Modal() {
            console.log('cancel clicked from Approve DA modal')
            this.approve_selected_with_da_popup_modal = false
        },
        async confirmClickHandlerFromApproveDA_Modal() {
            console.log('confirm clicked from Approve DA modal')
            console.log(this.approve_da_modal_select_box_item)
            // await APPROVE_BULK_AMOUNT_OF_ORDERS()
            if(this.approve_da_modal_select_box_item === 'ALL SR') {
                await this.APPROVE_ALL_DA__FROM_SERVICE()
            } else {
                for(let i=0; i<this.DA_LIST_FOR_APPROVE.length; i++) {
                    if(this.approve_da_modal_select_box_item === this.DA_LIST_FOR_APPROVE[i].name) {
                        await this.APPROVE_SELECTED_DA__FROM_SERVICE(this.DA_LIST_FOR_APPROVE[i].id)
                    }
                }
            }
            this.approve_da_modal_select_box_item = null
            this.approve_selected_with_da_popup_modal = false
        },
        // ------------------------------------------------------------------------------------------
        // Service Implementation
        async ALL_PENDING_ORDERS_CUSTOMER_LIST__FROM_SERVICE() {
            await service.getAllPendingOrdersCustomerList_OrderApprovalLeftSide()
                .then(res => {
                    console.log(res.data)
                    this.ALL_PENDING_ORDERS_CUSTOMER_LIST = res.data.orders_info
                })
        },
        async APPROVE_ALL_SELECTED_ORDER__FROM_SERVICE(orders) {
            // console.log(this.SELECT_OPTION__CUSTOMER_ID_LIST)
            // console.log(this.SELECT_OPTION__ORDER_ID_LIST)
            // console.log(orders)
            await service.getApproveSelectedOrders_OrderApproval(orders)
                .then(res => {
                    console.log(res.data)
                    // this.ORDER_SUCCESS_MESSAGE = res.data.message
                    this.ORDER_SUCCESS_MESSAGE = res.data.response_code === 409 ? 'Already Approved' : ( res.data.count === 1 ? (res.data.count + ' Order Approved out of ' + this.SELECT_ORDER_COUNT) : (res.data.count + ' Orders Approved out of ' + this.SELECT_ORDER_COUNT) )
                    this.SELECT_ORDER_APPROVED_COUNT = res.data.count
                    this.deselectAllSelectedOrder()
                    this.approve_selection_modal = false
                    this.approved_orders_success_modal = true
                    this.ALL_PENDING_ORDERS_CUSTOMER_LIST__FROM_SERVICE()
                    this.defaultAllThisComponentData()
                    setTimeout( () => {
                        this.approved_orders_success_modal = false
                        this.ORDER_SUCCESS_MESSAGE = null
                    }, 2000)
                })
        },
        async APPROVE_SPECIFIC_SELECTED_ORDER__FROM_SERVICE(orders) {
            // console.log(orders)
            if(orders.length > 0) {
                await service.getApproveSelectedOrders_OrderApproval(orders)
                    .then(res => {
                        console.log(res.data)
                        // this.ORDER_SUCCESS_MESSAGE = res.data.message
                        this.ORDER_SUCCESS_MESSAGE = res.data.response_code === 409 ? 'Already Approved' : ( res.data.count === 1 ? (res.data.count + ' Order Approved out of ' + this.SELECT_ORDER_COUNT) : (res.data.count + ' Orders Approved out of ' + this.SELECT_ORDER_COUNT) )
                        this.SELECT_ORDER_APPROVED_COUNT = res.data.count
                        this.deselectAllSelectedOrder()
                        this.approve_selection_modal = false
                        this.approved_orders_success_modal = true
                        this.ALL_PENDING_ORDERS_CUSTOMER_LIST__FROM_SERVICE()
                        this.defaultAllThisComponentData()
                        setTimeout( () => {
                            this.approved_orders_success_modal = false
                            this.ORDER_SUCCESS_MESSAGE = null
                        }, 2000)
                    })
            } else {
                alert('Select at least one order')
                setTimeout( () => {
                    this.approved_orders_success_modal = false
                }, 2000)
            }
            // this.approve_selection_modal = false
            // this.approved_orders_success_modal = true
        },
        async REJECT_ALL_SELECTED_ORDER__FROM_SERVICE() {
            console.log(this.SELECT_OPTION__CUSTOMER_ID_LIST)
            console.log(this.SELECT_OPTION__ORDER_ID_LIST)
            this.defaultAllThisComponentData()
            this.deselectAllSelectedOrder()
        },
        async DIC_WISE_USERS__FROM_SERVICE() {
            await service.getDICWiseUsers_MonthlyDeliveryPlan()
                .then(res => {
                    console.log(res.data)
                    this.DA_LIST_FOR_APPROVE = res.data.users.da
                })
        },
        async APPROVE_ALL_DA__FROM_SERVICE() {
            this.approved_orders_success_modal = true
            let da_id = 0
            await service.getApproveBulkOrdersByAllDA_OrderApproval(da_id)
                .then(res => {
                    console.log(res.data)
                    this.ORDER_SUCCESS_MESSAGE = res.data.message
                    this.defaultAllThisComponentData()
                    setTimeout( () => {
                        this.approved_orders_success_modal = false
                        this.ORDER_SUCCESS_MESSAGE = null
                    }, 2000)
                })
        },
        async APPROVE_SELECTED_DA__FROM_SERVICE(da_id) {
            this.approved_orders_success_modal = true
            await service.getApproveBulkOrdersByAllDA_OrderApproval(da_id)
                .then(res => {
                    console.log(res.data)
                    this.ORDER_SUCCESS_MESSAGE = res.data.message
                    this.defaultAllThisComponentData()
                    setTimeout( () => {
                        this.approved_orders_success_modal = false
                        this.ORDER_SUCCESS_MESSAGE = null
                    }, 2000)
                })
        },
        // -------------------------------------------------------------------------------------------
        // Default All
        defaultAllThisComponentData() {
            console.log('I am here')
            this.SELECT_OPTION__CUSTOMER_ID_LIST = []
            this.SELECT_OPTION__ORDER_ID_LIST = []
            this.filter_modal = false
            this.approve_selection_modal = false
            this. approve_selected_with_da_popup_modal = false
            setTimeout( () => {
                this.$emit('approve_selected_with_da_popup_modal', this.approve_selected_with_da_popup_modal)
                this.$emit('filter_modal', this.filter_modal)
                this.$emit('approve_selection_modal', this.approve_selection_modal)
            }, 2010)
        },
        // -------------------------------------------------------------------------------------------
        deselectAllSelectedOrder() {
            for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                let radio_selector = document.querySelector('#order-approval-left-sidebar #order-approval-checkbox-' + i)
                radio_selector.checked = false
            }
        }
    },
    watch: {
        async rejected_order_id(newVal, oldVal) {
            if(newVal !== oldVal) {
                await this.ALL_PENDING_ORDERS_CUSTOMER_LIST__FROM_SERVICE()
                let length = document.getElementsByClassName('customer-section-list').length
                for(let i=0; i<length; i++) {
                    document.querySelector('#customer-section-list-' + i).className = 'customer-section-list'
                }
            }
        },
        async approved_order_id(newVal, oldVal) {
            if(newVal !== oldVal) {
                await this.ALL_PENDING_ORDERS_CUSTOMER_LIST__FROM_SERVICE()
                let length = document.getElementsByClassName('customer-section-list').length
                for(let i=0; i<length; i++) {
                    document.querySelector('#customer-section-list-' + i).className = 'customer-section-list'
                }
                console.log(this.SELECTED_ORDER_INDEX + '    ' + length)
                if(this.SELECTED_ORDER_INDEX >= length) {
                    document.querySelector('#customer-section-list-' + length).click()
                    console.log('last one')
                } else {
                    document.querySelector('#customer-section-list-' + this.SELECTED_ORDER_INDEX).click()
                    console.log('there are more')
                }
            }
        },
    }
}
</script>

<style lang="less" scoped>
@import url("./LeftSidebarSection.less");
</style>