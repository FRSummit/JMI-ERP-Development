<template>
  <div id="deliveries-left-sidebar" class="deliveries-left-sidebar">
    <div class="deliveries-left-sidebar-section">
      <div class="deliveries-left-sidebar-section-inner">
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
            <p class="total-customer">Select Month</p>
            <div class="select-options">
                <span class="right-icon"><i class="fas fa-chevron-right"></i></span>
                <select title="Pick a customer" class="selectpicker" v-model="on_change_status" @change="onChangeStatusDropdown()">
                    <option v-for="(month, m) in months" :key="m">{{ month.name }}</option>
                </select>
            </div>
        </div>
        <!-- Customer Counter -->
        <div class="title-count">
            <p class="total-customer">Total Invoice (<span class="count">{{ ALL_PENDING_ORDERS_CUSTOMER_LIST.length }}</span>)</p>
        </div>
        <!-- Customer List -->
        <div class="customer-list-section">
            <div class="customer-list-section-inner">
                <!-- <div id="progressbar" class="progressbar" v-if="!customer_list">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </div> -->
                <!-- <div :id="'customer-section-list-' + c" class="customer-section-list" v-for="(customer, c) in customer_list" :key="c" @click="customerClickHandlerFromList(customer, c)"> -->
                <div :id="'customer-section-list-' + c" class="customer-section-list" v-for="(customer, c) in ALL_PENDING_ORDERS_CUSTOMER_LIST" :key="c" @click="customerClickHandlerFromList(customer, c)">
                    <div :id="'customer-section-list-inner-' + c" class="customer-section-list-inner">
                        <div class="customer-id-type-section">
                            <div class="customer-id-type-section-inner">
                                <div class="id-section">
                                    <p class="customer-id">{{ customer ? (customer.invoice_no ? (customer.invoice_no) : '' ) : "" }}</p>
                                    <!-- <p class="customer-id">INV{{ customer ? (customer.id ? (customer.id) : '' ) : "" }}</p> -->
                                </div>
                                <div class="jmi-status-section_t_1">
                                    <!-- <p class="customer-type"><span class="type">{{ customer ? (customer.order_date).split(' ')[0] : "" }}</span></p> -->
                                    <p class="jmi-status_t_1" :class="'Pending'"><span class="status-icon"></span>On Progress</p>
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
                                    <!-- <p class="status" :class="'Pending'"><span class="status-icon" :class="'Pending'"></span>{{ customer ? (customer.order_status ? customer.order_status : "Pending") : "Pending" }}</p> -->
                                </div>
                            </div>
                        </div>
                        <div class="customer-address-section">
                            <div class="customer-address-section-inner">
                                <div class="address-section">
                                    <!-- <p class="customer-address"><span>Order No: {{ customer ? customer.id : 'XXXX' }}</span>|<span>Total Bill: {{ customer ? customer.net_total : '00.00' }}</span></p> -->
                                    <p class="customer-address"><span>Total Bill: {{ customer ? customer.net_total : '00.00' }}</span> | <span>Payment Type: Cash</span></p>
                                    <!-- <span class="checkbox">
                                        <input type="checkbox" :id="'deliveries-checkbox-' + c" :name="customer ? customer.customer_id : 0" :value="customer ? customer.customer_id : 0" @change="checkboxOnChangeHandler(customer, c)">
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
        <!-- Approve Selected With SR Modal -->
        <div class="modal-popup-section_type_2" v-if="approve_selected_with_da_popup_modal">
            <div class="modal-popup-section_type_2-inner" v-click-outside="approveSelectedWithDA_PopupModalOutsideClick">
                <p class="title">Approve Selected With SR</p>
                <p class="title blue-title">SR Name: <span>{{ selected_da_for_approve }}</span></p>
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
                        <p class="list-item" v-for="(da, i) in DA_LIST_FOR_APPROVE" :key="i" @click="daNameClickHandler(da)">{{ da.name }}</p>
                    </div>
                </div>
                <div class="submit-section" v-if="selected_da_for_approve">
                    <div class="submit-section-inner">
                        <button class="cancel" @click="cancelClickHandlerFromApproveDA_Modal">Cancel</button>
                        <button class="confirm" @click="confirmClickHandlerFromApproveDA_Modal">Done</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()
import JMIFilter from '.././../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
    props: ["rejected_order_id", "SAVED_INVOICE_DELIVERY_INFO_FROM_RIGHT"],
    data() {
        return {
            ALL_PENDING_ORDERS_CUSTOMER_LIST: [],
            months: [
                {name: "January"},
                {name: "February"},
                {name: "March"},
                {name: "April"},
                {name: "May"},
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
            DA_LIST_FOR_APPROVE: [
                {name: "SR 1"},
                {name: "SR 2"},
                {name: "SR 3"},
                {name: "SR 4"},
                {name: "SR 5"},
                {name: "SR 6"},
                {name: "SR 7"},
                {name: "SR 8"},
            ],
            selected_da_for_approve: null,
        }
    },
    created() {},
    async mounted() {
        await this.ALL_DELIVERIES_INVOICE_LIST__FROM_SERVICE()
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
        approveSelectedWithDA_PopupModalOutsideClick() {
            this.approve_selected_with_da_popup_modal = false
            this.$emit('approve_selected_with_da_popup_modal', this.approve_selected_with_da_popup_modal)
        },
        checkboxOnChangeHandler(order, selector_id) {
            console.log('change : ' + selector_id)
            let radio_selector = document.querySelector('#deliveries-left-sidebar #deliveries-checkbox-' + selector_id)
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
        onChangeStatusDropdown() {
            console.log('onChangeStatusDropdown: ' + this.on_change_status)
            /*switch(this.on_change_status) {
                case 'Select All':
                    this.SELECT_OPTION__CUSTOMER_ID_LIST = []
                    this.SELECT_OPTION__ORDER_ID_LIST = []
                    for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                        let radio_selector = document.querySelector('#deliveries-left-sidebar #deliveries-checkbox-' + i)
                        radio_selector.checked = true
                        this.SELECT_OPTION__CUSTOMER_ID_LIST.push(parseInt(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].customer_id))
                        this.SELECT_OPTION__ORDER_ID_LIST.push(parseInt(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].id))
                    }
                    alert(this.SELECT_OPTION__CUSTOMER_ID_LIST)
                    alert(this.SELECT_OPTION__ORDER_ID_LIST)
                    break
                case 'Approved Selected':
                    // console.log('Approved Selected')
                    if(this.SELECT_OPTION__CUSTOMER_ID_LIST.length > 0 && this.SELECT_OPTION__ORDER_ID_LIST.length > 0) {
                        console.log('array list')
                        this.APPROVE_ALL_SELECTED_ORDER__FROM_SERVICE()
                    } else {
                        console.log('specific ids')
                        for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                            let radio_selector = document.querySelector('#deliveries-left-sidebar #deliveries-checkbox-' + i)
                            if(radio_selector.checked === true) {
                                console.log(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].customer_id)
                                console.log(this.ALL_PENDING_ORDERS_CUSTOMER_LIST[i].id)
                            }
                        }
                    }
                    this.on_change_status = ''
                    break
                case 'Approved Selected with SR':
                    console.log('Approved Selected with SR')
                    if(this.approve_selected_with_da_popup_modal) {
                        this.approve_selected_with_da_popup_modal = false
                        this.$emit('approve_selected_with_da_popup_modal', this.approve_selected_with_da_popup_modal)
                    } else {
                        this.approve_selected_with_da_popup_modal = true
                        this.$emit('approve_selected_with_da_popup_modal', this.approve_selected_with_da_popup_modal)
                    }
                    this.on_change_status = ''
                    break
                case 'Reject Selected':
                    // console.log('Reject Selected')
                    // for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                    //     let radio_selector = document.querySelector('#deliveries-left-sidebar #deliveries-checkbox-' + i)
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
            }*/
        },
        onChangeSortBy() {
            console.log('onChangeSortBy: ' + this.on_change_sort_by)
        },
        onChange(value) {
            console.log(value)
            // switch(value) {
            //     case 'a_to_z':
            //         this.radioSpanDefaultClass = 'active'
            //         this.radioSpanCustomClass = ''
            //         this.ALL_PENDING_ORDERS_CUSTOMER_LIST.sort()
            //         break
            //     case 'z_to_a':
            //         this.radioSpanDefaultClass = ''
            //         this.radioSpanCustomClass = 'active'
            //         this.ALL_PENDING_ORDERS_CUSTOMER_LIST.sort().reverse()
            //         break
            //     default:
            //         break
            // }
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
        daNameClickHandler(da) {
            console.log(da.name)
            this.selected_da_for_approve = da.name
        },
        cancelClickHandlerFromApproveDA_Modal() {
            console.log('cancel clicked from Approve DA modal')
            this.approve_selected_with_da_popup_modal = false
        },
        confirmClickHandlerFromApproveDA_Modal() {
            console.log('confirm clicked from Approve DA modal')
            console.log(this.selected_da_for_approve)
            this.selected_da_for_approve = null
            this.approve_selected_with_da_popup_modal = false
        },
        // ------------------------------------------------------------------------------------------
        // Service Implementation
        async ALL_DELIVERIES_INVOICE_LIST__FROM_SERVICE() {
            this.ALL_PENDING_ORDERS_CUSTOMER_LIST = []
            await service.getPendingDeliveredInvoiceList_DELEVERIES()
                .then(res => {
                    console.log(res.data)
                    this.ALL_PENDING_ORDERS_CUSTOMER_LIST = res.data.invoice_list
                })
                .catch(err => {
                    if(err) {
                        this.ALL_PENDING_ORDERS_CUSTOMER_LIST = []
                        alert('Server error 500. ' + err)
                    }
                })
        },
        async APPROVE_ALL_SELECTED_ORDER__FROM_SERVICE() {
            console.log(this.SELECT_OPTION__CUSTOMER_ID_LIST)
            console.log(this.SELECT_OPTION__ORDER_ID_LIST)
            this.defaultAllThisComponentData()
            this.deselectAllSelectedOrder()
        },
        async REJECT_ALL_SELECTED_ORDER__FROM_SERVICE() {
            console.log(this.SELECT_OPTION__CUSTOMER_ID_LIST)
            console.log(this.SELECT_OPTION__ORDER_ID_LIST)
            this.defaultAllThisComponentData()
            this.deselectAllSelectedOrder()
        },
        // -------------------------------------------------------------------------------------------
        // Default All
        defaultAllThisComponentData() {
            this.SELECT_OPTION__CUSTOMER_ID_LIST = []
            this.SELECT_OPTION__ORDER_ID_LIST = []
        },
        // -------------------------------------------------------------------------------------------
        deselectAllSelectedOrder() {
            for(let i=0; i<this.ALL_PENDING_ORDERS_CUSTOMER_LIST.length; i++) {
                let radio_selector = document.querySelector('#deliveries-left-sidebar #deliveries-checkbox-' + i)
                radio_selector.checked = false
            }
        }
    },
    computed: {
        DELIVERIES__CANCEL_ORDER_FLAG() {
        return this.$store.state.DELIVERIES__CANCEL_ORDER_TIME_STAMP
        },
        LOAD_DELIVERIES_INVOICE_LIST() {
            return this.$store.state.CHANGES_DETECTED_IN_DETAILS_SECTION
        }
    },
    watch: {
        SAVED_INVOICE_DELIVERY_INFO_FROM_RIGHT(newVal, oldVal) {
            console.log('saved invoice delivery info')
            if(newVal !== oldVal) {
                document.querySelector('#search-filter').value = null
            }
        },
        async DELIVERIES__CANCEL_ORDER_FLAG(newVal, oldVal) {
            if(newVal !== oldVal) {
                await this.ALL_DELIVERIES_INVOICE_LIST__FROM_SERVICE()
            }
        },
        async LOAD_DELIVERIES_INVOICE_LIST(newVal) {
            if(newVal) {
              await this.ALL_DELIVERIES_INVOICE_LIST__FROM_SERVICE()
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import url("./LeftSidebarSection.less");
</style>