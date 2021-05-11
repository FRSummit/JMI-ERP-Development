<template>
    <div>
        <Heading :pathName="pathName" :routeName="routeName" />
        <div class="container-fluid">
            <div class="col-12 cash-register" style="padding-top: 0;">
              <div class="row cash-register-tab">
                    <div class="col-12" style="padding-top: 0;">
                        <ul class="nav nav-tabs nav-justified" id="cash-register-tab-inner" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="register-single-tab" data-toggle="tab" href="#tab-pending">Pending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="register-single-tab" data-toggle="tab" href="#tab-inward">Inward</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="register-single-tab" data-toggle="tab" href="#tab-outward">Outward</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="register-single-tab" data-toggle="tab" href="#tab-day-closing">Day Closing</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <!------------ Start Pending Table Area ------------>
                            <div id="tab-pending" class="tab-pane active">
                                <div class="tab-content-header">
                                    <h5>Pending (<span>{{ PENDING_CASH_REGISTER ? PENDING_CASH_REGISTER.length : 0 }}</span>)</h5>
                                    <div class="row1" style="position: relative;">
                                        <span class="group-action-btn" v-if="SELECTED_PENDING_DATA ? SELECTED_PENDING_DATA.length > 0 : false">
                                            <i class="zmdi zmdi-check verify" @click="multipleVerifyClickHandlerPendingData"></i>
                                            <i class="zmdi zmdi-close cancel" @click="multipleCancelClickHandlerPendingData"></i>
                                        </span>
                                        <div class="form-group"><i class="fa fa-search"></i><input type="text" id="pending-search-filter" v-on:keyup="pendingSearchKeyUpHandler" placeholder="Search by date" class="form-control"></div>
                                        <span class="filter_search"><i class="fa fa-filter"></i></span>
                                        <span class="filter_calendar" :class="date_data !== '' ? 'active-date' : ''">
                                            <date-picker class="jmi-single-date" v-model="date_data" range lang="en" type="date" format="YYYY-MM-DD" width="500" @change="dateChangeHandler"></date-picker>
                                        </span>
                                        <span class="transfer" data-toggle="modal" data-target="#cr-transfer-modal"><i class="material-icons" data-toggle="tooltip" data-placement="bottom" title="Transfer" aria-hidden="true">compare_arrows</i></span>
                                    </div>
                                </div>

                                <div class="row cr-pending-table">
                                    <table class="col-12">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div class="dropdown">
                                                <span id="pendingselection" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</span>
                                                <div class="dropdown-menu" aria-labelledby="pendingselection">
                                                    <button class="dropdown-item" type="button">Select All</button>
                                                    <button class="dropdown-item" type="button">Unselect All</button>
                                                    <hr>
                                                    <button class="dropdown-item" type="button">Verify Selected</button>
                                                    <button class="dropdown-item" type="button">Cancel Selected</button>
                                                </div>
                                            </div>
                                            </th>
                                            <th>Transaction date</th>
                                            <th>Details</th>
                                            <th>Direction</th>
                                            <th>User</th>
                                            <th>Amount</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, i) in PENDING_CASH_REGISTER" :key="i" :id="'pending_data_table_row_' + i" class="pending_data_table_row">
                                            <td><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" @change="pendingDataCheckboxOnChangeHandler(item, i)"></td>
                                            <td><p class="pending-search-option-by">{{ dateFromat(item.transaction_date) }}</p></td>
                                            <td><p>{{ item.details }}</p></td>
                                            <td><p>{{ item.direction }}</p></td>
                                            <td><p>{{ item.user }}</p></td>
                                            <td><p>{{ Number(item.amount).toFixed(2) }}</p></td>
                                            <td>
                                                <a title="Verify" data-toggle="tooltip" data-placement="bottom"><i class="zmdi zmdi-check verify" @click="singleVerifyClickHandlerPendingData(item)"></i></a>
                                                <a title="Cancel" data-toggle="tooltip" data-placement="bottom"><i class="zmdi zmdi-close cancel" @click="singleCancelClickHandlerPendingData(item)"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="5"><p>Total:</p></th>
                                            <th><p>{{ PENDING_TAB_AMOUNT_TOTAL }}</p></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                    </table>
                                </div>

                            </div>
                            <!------------ End Pending Table Area ------------->

                            <!------------ Start Inward Content Area ------------->    
                            <div id="tab-inward" class="tab-pane">
                                <div class="tab-content-header">
                                    <h5>Inward (<span>{{ IN_WARD_CASH_REGISTER ? IN_WARD_CASH_REGISTER.length : 0 }}</span>)</h5>
                                    <div class="row1">
                                        <div class="form-group"><i class="fa fa-search"> </i><input type="text" id="inward-search-filter" v-on:keyup="inwardSearchKeyUpHandler" placeholder="Search by date" class="form-control"></div>
                                        <span class="filter_search"><i class="fa fa-filter"> </i> </span>
                                        <span class="filter_calendar" :class="date_data !== '' ? 'active-date' : ''">
                                            <date-picker class="jmi-single-date" v-model="date_data" range lang="en" type="date" format="YYYY-MM-DD" width="500" @change="dateChangeHandler"></date-picker>
                                        </span>
                                        <span class="transfer" data-toggle="modal" data-target="#cr-transfer-modal"><i class="material-icons" data-toggle="tooltip" data-placement="bottom" title="Transfer" aria-hidden="true">compare_arrows</i></span>
                                    </div>
                                </div>

                                <div class="row cr-inward-table">
                                <table class="col-12">
                                    <thead>
                                        <tr>
                                            <th>Receive Date</th>
                                            <th>Details</th>
                                            <th>Transaction Date</th>
                                            <th>Source</th>
                                            <th>Amount</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, i) in IN_WARD_CASH_REGISTER" :key="i" :id="'in_ward_data_table_row_' + i" class="in_ward_data_table_row">
                                            <td><p class="inward-search-option-by">{{ dateFromat(item.receive_date) }}</p></td>
                                            <td><p>{{ item.details }}</p></td>
                                            <td><p>{{ dateFromat(item.transaction_date) }}</p></td>
                                            <td><p>{{ item.source }}</p></td>
                                            <td><p>{{ Number(item.amount).toFixed(2) }}</p></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="4"><p>Total:</p></th>
                                            <th><p>{{ IN_WARD_TAB_AMOUNT_TOTAL }}</p></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                                </div>

                            </div>
                            <!------------ End Inward Content Area ------------>
                            
                            <!------------ Starts Outward Content Area ------------>
                            <div id="tab-outward" class="tab-pane">
                                <div class="tab-content-header">
                                    <h5>Outward (<span>{{ OUT_WARD_CASH_REGISTER ? OUT_WARD_CASH_REGISTER.length : 0 }}</span>)</h5>
                                    <div class="row1">
                                        <div class="form-group"><i class="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" class="form-control"></div>
                                        <span class="filter_search"><i class="fa fa-filter"> </i> </span>
                                        <!-- <span class="filter_calendar active"><i class="fa fa-calendar-o"> </i> </span> -->
                                        <span class="filter_calendar" :class="date_data !== '' ? 'active-date' : ''">
                                            <date-picker class="jmi-single-date" v-model="date_data" range lang="en" type="date" format="YYYY-MM-DD" width="500" @change="dateChangeHandler"></date-picker>
                                        </span>
                                        <span class="transfer" data-toggle="modal" data-target="#cr-transfer-modal"><i class="material-icons" data-toggle="tooltip" data-placement="bottom" title="Transfer" aria-hidden="true">compare_arrows</i></span>
                                    </div>
                                </div>

                                <div class="row cr-outward-table">
                                <table class="col-12">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Details</th>
                                            <th>Target</th>
                                            <th>Amount</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, i) in 20" :key="i">
                                            <td><p>02-Oct-2021</p></td>
                                            <td><p>Cash withdrawal by CHQ 123654,Gulshan br</p> </td>
                                            <td><p>Bank</p></td>
                                            <td><p>30,561.00</p></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="3"><p>Total:</p></th>
                                            <th><p>13,032.20</p></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                                </div>
                            </div>
                            <!------------ Ends Outward Content Area ------------>

                            <!------------ DAY CLOSING TAB STARTS ------------>
                            <div id="tab-day-closing" class="tab-pane">
                                <div class="tab-content-header">
                                    <h5>Day Closing (<span>{{ DAY_CLOSING_CASH_REGISTER ? DAY_CLOSING_CASH_REGISTER.length : 0 }}</span>)</h5>
                                    <div class="row1">
                                        <div class="form-group"><i class="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" class="form-control"></div>
                                        <span class="filter_search"><i class="fa fa-filter"> </i> </span>
                                        <!-- <span class="filter_calendar active"><i class="fa fa-calendar-o"> </i> </span> -->
                                        <span class="filter_calendar" :class="date_data !== '' ? 'active-date' : ''">
                                            <date-picker class="jmi-single-date" v-model="date_data" range lang="en" type="date" format="YYYY-MM-DD" width="500" @change="dateChangeHandler"></date-picker>
                                        </span>
                                        <span class="transfer" data-toggle="modal" data-target="#cr-transfer-modal" ><i class="material-icons"   data-toggle="tooltip" data-placement="bottom" title="Transfer" aria-hidden="true">compare_arrows</i>  </span>
                                    </div>
                                </div>

                                <div class="row cr-date-closing-table">
                                    <table class="col-12">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Opening</th>
                                                <th>Inward</th>
                                                <th>Outward</th>
                                                <th>Closing</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, i) in 20" :key="i">
                                                <td><p>02-Oct-2021</p></td>
                                                <td><p>30,000</p></td>
                                                <td><p>10,000</p></td>
                                                <td><p>20,000</p></td>
                                                <td><p>30,561</p></td>
                                                <td>
                                                    <!-- <a title="Add Denomination" data-toggle="tooltip" data-placement="bottom"><i class="zmdi zmdi-plus"></i></a> -->
                                                    <a title="Add Denomination" data-toggle="tooltip" data-placement="bottom"><i class="fa fa-plus add" data-toggle="modal"
                                                        data-target="#add-denomination-modal" aria-hidden="true"></i></a>

                                                    <!-- <a title="Show Denomination" data-toggle="tooltip" data-placement="bottom"><i class="fa fa-usd view" data-toggle="modal"
                                                        data-target="#show-denomination" aria-hidden="true"></i></a> -->
                                                </td>
                                            </tr>                            
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th colspan="4"><p>Total:</p></th>
                                                <th><p>13,032.20</p></th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <!------------ Start Add Denomition Modal------------>
                                    <div class="modal" id="add-denomination-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog modal-lg modal-dialog-centered" style="margin: 0; border: none;">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Add Cash Denomination:<span>12/05/2021</span></h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row denomination-modal-table">
                                                        <table class="col-12">
                                                            <thead>
                                                                <tr>
                                                                    <th>Denomination Type</th>
                                                                    <th>Quantity</th>
                                                                    <th>Amount</th>
                                                                    <th></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        <select class="form-control-sm" id="unit" v-model="selected_cash_domination">
                                                                            <option :value="null" selected>Select Unit</option>
                                                                            <option v-for="(item, i) in CASH_DOMINATION_LIST" :key="i" :value="item">{{ item.deno_name }}</option>
                                                                        </select>
                                                                    </th>
                                                                    <th>
                                                                        <input type="number" v-model="domination_qty" class="form-control-sm" id="product_group_qty" placeholder="00">
                                                                    </th>
                                                                    <th>
                                                                        <input type="number" :value="parseFloat(selected_cash_domination ? selected_cash_domination.deno_value : 0) * parseFloat(domination_qty)" class="form-control-sm" id="product_group_amount" placeholder="00" readonly>
                                                                    </th>
                                                                    <th><button class="btn btn-primary btn-add" href="#" role="button" @click="addDominationClickHandler">Add</button></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="(item, i) in MY_CASH_DOMINATION_LIST" :key="i">
                                                                    <td><p>{{ item.domination_type }}</p></td>
                                                                    <td><p>{{ item.qty }}</p></td>
                                                                    <td><p>{{ item.amount }}</p></td>
                                                                    <td><i class="fa fa-trash remove" aria-hidden="true"></i></td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th colspan="2"><p>Total:</p></th>
                                                                    <th><p>{{ MY_CASH_DOMINATION_LIST_TOTAL_AMOUNT }}</p></th>
                                                                    <th></th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            <div class="modal-footer justify-content-center">
                                                    <a><button type="button" class="btn btn-primary btn-global" @click="saveDominationInfoClickHandler">Save</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!------------ End Add Denomition Modal------------>

                                    <!------------ Start Show Denomition Modal------------>
                                    <!-- <div class="modal" id="show-denomination" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog modal-lg modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                            <h5 class="modal-title">Show Cash Denomination:<span>12/05/2021</span></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            </div>
                                            <div class="modal-body">
                                        <div class="row denomination-modal-table">
                                            <table class="col-12">
                                                <thead>
                                                    <tr>
                                                    <th>Denomination Type</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                    <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, i) in 20" :key="i" :class="i === 1 ? 'active' : ''">
                                                        <td>
                                                            <select class="form-control-sm" id="unit">
                                                            <option >Select Unit</option>
                                                            <option>Box</option>
                                                            <option>Box 2</option>
                                                            <option>Box 3</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control-sm" id="product_group" placeholder="00">
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control-sm" id="product_group" placeholder="00">
                                                        </td>
                                                        <td><i class="fa fa-pencil edit" aria-hidden="true"></i></td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                    <th colspan="2">
                                                        <p>Total:</p>
                                                    </th>
                                                    <th>
                                                        <p class="notmatch" >13,032.20</p>
                                                    </th>
                                                    <th></th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                            </div>
                                            <div class="modal-footer justify-content-center">
                                            <a href="#"><button type="button" class="btn btn-primary btn-global">Save</button></a>
                                            </div>
                                        </div>
                                        </div>
                                    </div> -->
                                    <!------------ End Show Denomition Modal------------>
                                </div>

                            </div>
                            <!------------ DAY CLOSING TAB ENDS ------------>

                            <!------------ Start Cash Register Transfer Modal ------------>
                            <div class="modal" id="cr-transfer-modal" tabindex="-1" role="dialog" aria-labelledby="InwardTransfer" aria-hidden="true" style="width: 500px; height: 234px;">
                                <div class="modal-dialog modal-dialog-centered" style="margin: 0;">
                                <div class="modal-content" style="border: 0; padding: 0 20px;">
                                    <div class="modal-header">
                                    <h5 class="modal-title">Transfer</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div class="modal-body">
                                    <div class="row">
                                        <div class="col-lg-6 form-group">
                                        <label for="transfer-type">Transfer Type</label>
                                        <select class="form-control" id="transfer-type" onchange="getOption(this.value)">
                                            <option value="d-Cash">Cash</option>
                                            <option value="d-Bank">Bank</option>
                                        </select>
                                        </div>

                                        <div class="col-lg-6 form-group" id="d-Cash" style="display: none;">
                                        <label for="office">Office</label>
                                        <select class="form-control">
                                            <option value="">Select Office</option>
                                            <option value="">Office 1</option>
                                        </select>
                                        </div>

                                        <div class="col-lg-6 form-group" id="d-Bank" style="display: none;">
                                        <label for="bank">Bank</label>
                                        <select class="form-control">
                                            <option value="">Select Bank</option>
                                            <option value="">Bank 1</option>
                                        </select>
                                        </div>
                            
                                        <div class="col-lg-6 form-group" >
                                        <label for="cash_amount">Amount</label>
                                        <input type="text" class="form-control" id="cash_amount" placeholder="Enter Amount">
                                        </div>
                                    </div>
                            
                                    <div class="modal-footer justify-content-center">
                                        <a href="#"><button type="button" class="btn btn-primary btn-global">Save</button></a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <!------------ End Cash Register Transfer Modal ------------>
                        </div>
                    </div>
              </div>
            </div>
        </div>
        <!-- Success Message -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="msg_popup_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">{{ msg_popup_modal_msg }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb"
import DatePicker from 'vue2-datepicker'


import Service from "../../../../service/ERPSidebarService"
const service = new Service()
import GlobalDateFormat from "../../../../functions/GlobalDateFormat"
const globalDateFormat = new GlobalDateFormat()
import JMIFIlter from "../../../../functions/JMIFIlter"
const jMIFIlter = new JMIFIlter()

export default {
    components:{
        Heading,
        DatePicker
    },
    data() {
        return {
            routeName: "Cash Register",
            parentPath: "Local Sales",
            pathName: [],
            
            date: '',
            time: '',
            timePickerOptions: {
                start: '00:00',
                step: '00:30',
                end: '23:30'
            },
            datetime: '',
            range: '',
            date_data: '',

            SELECTED_PENDING_DATA: [],

            msg_popup_modal: false,
            msg_popup_modal_msg: null,

            PENDING_CASH_REGISTER: null,
            IN_WARD_CASH_REGISTER: null,
            OUT_WARD_CASH_REGISTER: null,
            DAY_CLOSING_CASH_REGISTER: null,

            CASH_DOMINATION_LIST: null,
            MY_CASH_DOMINATION_LIST: [],

            selected_cash_domination: null,
            domination_qty: 0,
        };
    },
    computed: {
        // PENDING_DATA_TABLE_ROW_DATA_CHANGE() {
        //     for(let i=0; i<20; i++) {
        //         let selector = document.querySelector('#pending_data_table_row_' + i + ' input.form-check-input')
        //         if(selector.checked === true) {
        //             document.querySelector('#pending_data_table_row_' + i + ' a').className = 'hide'
        //         } else {
        //             document.querySelector('#pending_data_table_row_' + i + ' a').className = ''
        //         }
        //     }
        //     return new Date()
        // }
        PENDING_TAB_AMOUNT_TOTAL() {
            let total = 0
            if(this.PENDING_CASH_REGISTER) {
                for(let i=0; i<this.PENDING_CASH_REGISTER.length; i++) {
                    total += parseFloat(this.PENDING_CASH_REGISTER[i].amount)
                }
            }
            return Number(total).toFixed(2)
        },
        SELECTED_PENDING_DATA_OBJECT_TO_SEND() {
            let data_list = []
            if(this.SELECTED_PENDING_DATA.length ? this.SELECTED_PENDING_DATA.length > 0 : false) {
                for(let i=0; i<this.SELECTED_PENDING_DATA.length; i++) {
                    let data = {
                        register_id: this.SELECTED_PENDING_DATA[i].id,
                        register_type: 'CASH'
                    }
                    data_list.push(data)
                }
            }
            return data_list
        },
        IN_WARD_TAB_AMOUNT_TOTAL() {
            let total = 0
            if(this.IN_WARD_CASH_REGISTER) {
                for(let i=0; i<this.IN_WARD_CASH_REGISTER.length; i++) {
                    total += parseFloat(this.IN_WARD_CASH_REGISTER[i].amount)
                }
            }
            return Number(total).toFixed(2)
        },
        MY_CASH_DOMINATION_LIST_TOTAL_AMOUNT() {
            let total = 0
            if(this.MY_CASH_DOMINATION_LIST) {
                for(let i=0; i<this.MY_CASH_DOMINATION_LIST.length; i++) {
                    total += parseFloat(this.MY_CASH_DOMINATION_LIST[i].amount)
                }
            }
            return Number(total).toFixed(2)
        }
    },
    created() {
        this.$emit('routeName', this.$route.name);
        this.createBreadcrumbData();
    },
    async mounted() {
        await this.COMMON_CASH_REGISTER__FROM_SERVICE()
        this.CASH_DOMINATION_LIST__FROM_SERVICE()
    },
    methods: {
        createBreadcrumbData() {
            this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Cash Register" }];
        },
        async dateChangeHandler() {
            console.log(this.date_data)
        },
        pendingDataCheckboxOnChangeHandler(item, i) {
            // console.log(item)
            let selector = document.querySelector('#pending_data_table_row_' + i + ' input.form-check-input')
            if(selector.checked === true) {
                this.SELECTED_PENDING_DATA.push(item)
                document.querySelector('#pending_data_table_row_' + i + ' a:first-child').className = 'hide'
                document.querySelector('#pending_data_table_row_' + i + ' a:last-child').className = 'hide'
            } else {
                document.querySelector('#pending_data_table_row_' + i + ' a:first-child').className = ''
                document.querySelector('#pending_data_table_row_' + i + ' a:last-child').className = ''
                
                this.SELECTED_PENDING_DATA.forEach(element => {
                    if(parseInt(element.id) === parseInt(item.id)) {
                        this.SELECTED_PENDING_DATA.splice(element, 1)
                    }
                });
            }
        },
        dateFromat(dt) {
            return globalDateFormat.dateFormatT4(dt)
        },
        // --------------------------------------------------------------------------------------------
        // PENDING TAB
        pendingSearchKeyUpHandler(value) {
            console.log(value.key)
            let input = document.getElementById("pending-search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.pending_data_table_row')
            let txt_selector = "pending-search-option-by"

            jMIFIlter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        multipleVerifyClickHandlerPendingData() {
            console.log(this.SELECTED_PENDING_DATA)
            console.log(this.SELECTED_PENDING_DATA_OBJECT_TO_SEND)

            this.VERIFY_CASH_REGISTER__FROM_SERVICE(this.SELECTED_PENDING_DATA_OBJECT_TO_SEND)
        },
        multipleCancelClickHandlerPendingData() {
            console.log(this.SELECTED_PENDING_DATA)
            console.log(this.SELECTED_PENDING_DATA_OBJECT_TO_SEND)

            this.CANCEL_CASH_REGISTER__FROM_SERVICE(this.SELECTED_PENDING_DATA_OBJECT_TO_SEND)
        },
        singleVerifyClickHandlerPendingData(item) {
            console.log(item)
            let data_list = []
            let data = {
                register_id: item.id,
                register_type: 'CASH'
            }
            data_list.push(data)
            this.VERIFY_CASH_REGISTER__FROM_SERVICE(data_list)
        },
        singleCancelClickHandlerPendingData(item) {
            console.log(item)
            let data_list = []
            let data = {
                register_id: item.id,
                register_type: 'CASH'
            }
            data_list.push(data)
            this.CANCEL_CASH_REGISTER__FROM_SERVICE(data_list)
        },
        unselectAllSelectedPendingDataRow() {
            for(let i=0; i<this.PENDING_CASH_REGISTER.length; i++) {
                let selector = document.querySelector('#pending_data_table_row_' + i + ' input.form-check-input')
                selector.checked = false
                document.querySelector('#pending_data_table_row_' + i + ' a:first-child').className = ''
                document.querySelector('#pending_data_table_row_' + i + ' a:last-child').className = ''
            }
        },
        // --------------------------------------------------------------------------------------------
        // INWARD TAB
        inwardSearchKeyUpHandler(value) {
            console.log(value.key)
            let input = document.getElementById("inward-search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.in_ward_data_table_row')
            let txt_selector = "inward-search-option-by"

            jMIFIlter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        // --------------------------------------------------------------------------------------------
        // OUT WARD TAB
        // --------------------------------------------------------------------------------------------
        // DAY CLOSING TAB
        addDominationClickHandler() {
            let data = {
                domination_type: this.selected_cash_domination.deno_name,
                qty: this.domination_qty,
                amount: parseFloat(this.selected_cash_domination.deno_value) * parseFloat(this.domination_qty)
            }

            this.MY_CASH_DOMINATION_LIST.push(data)
        },
        saveDominationInfoClickHandler() {
            console.log(this.MY_CASH_DOMINATION_LIST)
        },
        // --------------------------------------------------------------------------------------------
        // SERVICE CALL
        async COMMON_CASH_REGISTER__FROM_SERVICE() {
            // this.msg_popup_modal = true
            // this.msg_popup_modal_msg = 'Please wait. We are processing...'
            await service.getCommonCashRegister__CASH_REGISTER()
                .then(res => {
                    console.log(res.data)
                    this.PENDING_CASH_REGISTER = []
                    this.IN_WARD_CASH_REGISTER = []
                    this.OUT_WARD_CASH_REGISTER = []
                    this.DAY_CLOSING_CASH_REGISTER = []
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        // this.msg_popup_modal_msg = res.data.message + ' Data Loaded.'

                        this.PENDING_CASH_REGISTER = res.data.pending_cash_register
                        this.IN_WARD_CASH_REGISTER = res.data.in_ward_cash_register
                        this.OUT_WARD_CASH_REGISTER = res.data.out_ward_cash_register
                        this.DAY_CLOSING_CASH_REGISTER = res.data.day_closing
                    } else {
                        this.msg_popup_modal = true
                        this.msg_popup_modal_msg = res.data.message + ' Response code : ' + res.data.response_code + '.'
                    }
                    setTimeout( () => {
                        this.msg_popup_modal = false
                        this.msg_popup_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        console.log('Server Error 500. ' + err)
                        this.PENDING_CASH_REGISTER = null
                        this.IN_WARD_CASH_REGISTER = null
                        this.OUT_WARD_CASH_REGISTER = null
                        this.DAY_CLOSING_CASH_REGISTER = null
                        
                        this.msg_popup_modal_msg = err
                        setTimeout( () => {
                            this.msg_popup_modal = false
                            this.msg_popup_modal_msg = null
                        }, 2000)
                    }
                })
        },
        async VERIFY_CASH_REGISTER__FROM_SERVICE(data) {
            // this.msg_popup_modal = true
            // this.msg_popup_modal_msg = 'Please wait. We are processing...'
            await service.getCommonVerifyCashRegister__CASH_REGISTER_PENDING(data)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.msg_popup_modal = true
                        this.msg_popup_modal_msg = res.data.message
                        this.SELECTED_PENDING_DATA = []
                        this.unselectAllSelectedPendingDataRow()
                        this.COMMON_CASH_REGISTER__FROM_SERVICE()
                    } else {
                        this.msg_popup_modal = true
                        this.msg_popup_modal_msg = res.data.message + ' Response code : ' + res.data.response_code + '.'
                    }
                    setTimeout( () => {
                        this.msg_popup_modal = false
                        this.msg_popup_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        console.log('Server Error 500. ' + err)
                        
                        this.msg_popup_modal_msg = err
                        setTimeout( () => {
                            this.msg_popup_modal = false
                            this.msg_popup_modal_msg = null
                        }, 2000)
                    }
                })
        },
        async CANCEL_CASH_REGISTER__FROM_SERVICE(data) {
            // this.msg_popup_modal = true
            // this.msg_popup_modal_msg = 'Please wait. We are processing...'
            await service.getCommonCancelCashRegister__CASH_REGISTER_PENDING(data)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.msg_popup_modal = true
                        this.msg_popup_modal_msg = res.data.message
                        this.SELECTED_PENDING_DATA = []
                        this.unselectAllSelectedPendingDataRow()
                        this.COMMON_CASH_REGISTER__FROM_SERVICE()
                    } else {
                        this.msg_popup_modal = true
                        this.msg_popup_modal_msg = res.data.message + ' Response code : ' + res.data.response_code + '.'
                    }
                    setTimeout( () => {
                        this.msg_popup_modal = false
                        this.msg_popup_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        console.log('Server Error 500. ' + err)
                        
                        this.msg_popup_modal_msg = err
                        setTimeout( () => {
                            this.msg_popup_modal = false
                            this.msg_popup_modal_msg = null
                        }, 2000)
                    }
                })
        },
        async CASH_DOMINATION_LIST__FROM_SERVICE() {
            await service.getCashDominationList__CASH_REGISTER()
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.CASH_DOMINATION_LIST = res.data.denomination_list
                    }
                    setTimeout( () => {
                        this.msg_popup_modal = false
                        this.msg_popup_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        console.log('Server Error 500. ' + err)
                    }
                })
        },
    },
    watch: {
        // PENDING_DATA_TABLE_ROW_DATA_CHANGE(newVal) {
        //     console.log(newVal)
        // }
    }
}
</script>

<style>

:root{
    --table-height: 40px;
    --greenish-white: #B1ECB9;
  }
.cash-register {
  margin-top: 15px;
  height: calc(100vh - (var(--used-height) + 20px));
  background-color: var(--white);
  -webkit-box-shadow: 0px 0px 8px #026CD11A;
          box-shadow: 0px 0px 8px #026CD11A;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.cash-register-tab .btn-active {
  color: var(--white) !important;
  background-color: var(--blue) !important;
}
.cash-register-tab #cash-register-tab-inner{
    margin: 0px -15px;
    border-bottom: none;
}
.cash-register-tab #register-single-tab {
    font-size: var(--font14);
    color:var(--text-black);
    font-weight: 500;
    border:0;
    line-height: unset;
    border-bottom: 1px solid var(--border-color);
    border-radius: 0px;
    padding: 15px 0px;
}
.cash-register-tab #register-single-tab.active {
    color:var(--blue);
    position: relative;
    z-index: 9;
}
.cash-register-tab #register-single-tab.active::before {
    content: "";
    background: var(--blue);
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    border:0;
}
.cash-register-tab #register-single-tab, 
.cash-register-tab #register-single-tab.active {
    background-color: transparent;
}
.cash-register-tab .tab-content .tab-content-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 5px 0px;
  border-bottom: 1px solid var(--border-color);
}
.cash-register-tab .tab-content .tab-content-header h5 {
    font-size: var(--font16);
    color: var(--text-label);
    display: flex;
    align-items: center;
}
.cash-register-tab .tab-content .tab-content-header h5 span{
    font-size: var(--font16);
    color:  var(--blue);
}
.tab-content-header .row1{
    display: flex;
    align-items: center;
}
.tab-content-header .row1 .form-group {
    position: relative;
    margin-bottom: 0px!important;
    width: 100%;
}
.tab-content-header .row1 .form-group i{
    position: absolute; 
    top: 12px; 
    left:10px; 
    color: #AAC0D9;
    font-size: var(--font14);
    }
.tab-content-header .row1 .form-group input{
    padding-left: 36px;
    border-radius: 2px;
    border: 1px solid  var(--border-color);
}
.tab-content-header .row1 .form-group input::placeholder{
    font-size: var(--font14);
    color: #AAC0D9;
}
.tab-content-header .row1 .form-group input:focus{
    border-color: var(--blue);
    box-shadow: none;
}
.tab-content-header .row1 .filter_search,
.tab-content-header .row1 .filter_calendar,
.tab-content-header .row1 .transfer{
    color: #AAC0D9;
    font-size: var(--font16);
    text-align: center;
    padding: 8px;
    height: 38px;
    width: 38px;
    border-radius: 2px;
    border: 1px solid var(--border-color);
    margin-left: 10px;
    margin-top: -10px;
}
.tab-content-header .row1 .filter_search:hover,
.tab-content-header .row1 .filter_calendar:hover,
.tab-content-header .row1 .transfer:hover{
    color: var(--white);
    background-color: var(--blue);
}
.tab-content-header .row1 .filter_search.active,
.tab-content-header .row1 .filter_calendar.active,
.tab-content-header .row1 .transfer.active{
    color: var(--white);
    background-color: var(--blue);
}
#cr-transfer-modal .modal-footer {
  padding-bottom: 0rem;
}
/*--------- Start Cash Register Pending Table Area ---------*/
td i {
    cursor: pointer;
}
.cr-pending-table{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    box-sizing: border-box;
  }
  .cr-pending-table tr{
    width: 100%;
    display:flex;
  }
  .cr-pending-table td,
  .cr-pending-table th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .cr-pending-table thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .cr-pending-table thead tr{
    height: var(--table-height);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .cr-pending-table thead tr th{
    height: var(--table-height);
    display:flex;
    align-items: center;
  }
  /* Start Table Body Area */
  .cr-pending-table tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    height: calc( 100vh - (var(--used-height) + 240px));
  }
  .cr-pending-table tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .cr-pending-table tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
  /* Start Table Foot Area */
  .cr-pending-table tfoot{ 
    display: block;
    width:100%;
    font-size: var(--font14);
  }
  .cr-pending-table tfoot tr{
    height: var(--table-height);
    display: flex;
    align-items: center;
    color: var(--blue);
    border-top: 1px solid  var(--bluish-white);
  }
  .cr-pending-table tfoot tr th{
    height: var(--table-height);
    display: flex;
    align-items: center;
  }
  .cr-pending-table thead th:nth-child(1) span{
    text-decoration: underline;
    text-transform: capitalize;
  }
  .cr-pending-table thead th:nth-child(1) .dropdown-item{
      font-size: var(--font14) ;
  }

  .cr-pending-table tbody td:nth-child(1) .form-check-input {
    position: unset;
    margin-top: 0px;
    margin-left: 0px;
  }
  /* Start Table Alignment Area*/
  .cr-pending-table thead th:nth-child(1),
  .cr-pending-table tbody td:nth-child(1){
    flex-basis:5%;
    flex-grow:1;
    display: flex;
    justify-content: left;
  }
  .cr-pending-table thead th:nth-child(2),
  .cr-pending-table tbody td:nth-child(2){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .cr-pending-table thead th:nth-child(3),
  .cr-pending-table tbody td:nth-child(3){
    flex-basis: 30%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .cr-pending-table thead th:nth-child(4),
  .cr-pending-table tbody td:nth-child(4){
    flex-basis: 10%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .cr-pending-table thead th:nth-child(5),
  .cr-pending-table tbody td:nth-child(5){
    flex-basis: 20%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  /* .cr-pending-table thead th:nth-child(5) {
      justify-content: left;
  } */
  
  .cr-pending-table thead th:nth-child(6),
  .cr-pending-table tbody td:nth-child(6),
  .cr-pending-table thead th:nth-child(7),
  .cr-pending-table tbody td:nth-child(7){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .cr-pending-table tfoot th:nth-child(1){
    flex-basis:80%;
  }
  .cr-pending-table tfoot th:nth-child(2),
  .cr-pending-table tfoot th:nth-child(3){
    flex-basis:10%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
    /* justify-content: left; */
  }
  .bulk-action{
    display: flex;
  }
  .cr-pending-table i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: var(--font18);
    border-radius: 100px;
    margin: 0px 5px;
    font-weight: 200;
  }
  .cr-pending-table i.verify{
    color:  var(--white);
    background-color:var(--blue);
  }
  .cr-pending-table i.cancel{
    color:  var(--red);
    background-color:var(--redish-white);
  }
/*--------- End Cash Register Pending Table Area ---------*/

  /*--------- Start Cash Register Inward Table Area ---------*/
.cr-inward-table{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    box-sizing: border-box;
  }
  .cr-inward-table tr{
    width: 100%;
    display:flex;
  }
  .cr-inward-table td,
  .cr-inward-table th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .cr-inward-table thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .cr-inward-table thead tr{
    height: var(--table-height);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .cr-inward-table thead tr th{
    height: var(--table-height);
    display:flex;
    align-items: center;
  }
  /* Start Table Body Area */
  .cr-inward-table tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    height: calc( 100vh - (var(--used-height) + 240px));
  }
  .cr-inward-table tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .cr-inward-table tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
  /* Start Table Foot Area */
  .cr-inward-table tfoot{ 
    display: block;
    width:100%;
    font-size: var(--font14);
  }
  .cr-inward-table tfoot tr{
    height: var(--table-height);
    display: flex;
    align-items: center;
    color: var(--blue);
    border-top: 1px solid  var(--bluish-white);
  }
  .cr-inward-table tfoot tr th{
    height: var(--table-height);
    display: flex;
    align-items: center;
  }
  /* Start Table Alignment Area*/
  .cr-inward-table thead th:nth-child(1),
  .cr-inward-table tbody td:nth-child(1){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: start;
  }
  .cr-inward-table thead th:nth-child(2),
  .cr-inward-table tbody td:nth-child(2){
    flex-basis: 35%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .cr-inward-table thead th:nth-child(3),
  .cr-inward-table tbody td:nth-child(3),
  .cr-inward-table thead th:nth-child(4),
  .cr-inward-table tbody td:nth-child(4){
    flex-basis: 15%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .cr-inward-table thead th:nth-child(5),
  .cr-inward-table tbody td:nth-child(5),
  .cr-inward-table thead th:nth-child(6),
  .cr-inward-table tbody td:nth-child(6){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .cr-inward-table tfoot th:nth-child(1){
    flex-basis:80%;
  }
  .cr-inward-table tfoot th:nth-child(2),
  .cr-inward-table tfoot th:nth-child(3){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .cr-inward-table i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: var(--font18);
    border-radius: 100px;
    margin: 0px 5px;
    font-weight: 600;
    color: var(--blue);
    background-color: var(--bluish-white);
  }
/*--------- End Cash Register Inward Table Area ---------*/

/*--------- Start Cash Register Outward Table Area ---------*/
.cr-outward-table{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    box-sizing: border-box;
  }
  .cr-outward-table tr{
    width: 100%;
    display:flex;
  }
  .cr-outward-table td,
  .cr-outward-table th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .cr-outward-table thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .cr-outward-table thead tr{
    height: var(--table-height);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .cr-outward-table thead tr th{
    height: var(--table-height);
    display:flex;
    align-items: center;
  }
  /* Start Table Body Area */
  .cr-outward-table tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    height: calc( 100vh - (var(--used-height) + 240px));
  }
  .cr-outward-table tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .cr-outward-table tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
  /* Start Table Foot Area */
  .cr-outward-table tfoot{ 
    display: block;
    width:100%;
    font-size: var(--font14);
  }
  .cr-outward-table tfoot tr{
    height: var(--table-height);
    display: flex;
    align-items: center;
    color: var(--blue);
    border-top: 1px solid  var(--bluish-white);
  }
  .cr-outward-table tfoot tr th{
    height: var(--table-height);
    display: flex;
    align-items: center;
  }
  /* Start Table Alignment Area*/
  .cr-outward-table thead th:nth-child(1),
  .cr-outward-table tbody td:nth-child(1){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: start;
  }
  .cr-outward-table thead th:nth-child(2),
  .cr-outward-table tbody td:nth-child(2){
    flex-basis: 35%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .cr-outward-table thead th:nth-child(3),
  .cr-outward-table tbody td:nth-child(3){
    flex-basis: 15%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .cr-outward-table thead th:nth-child(4),
  .cr-outward-table tbody td:nth-child(4),
  .cr-outward-table thead th:nth-child(5),
  .cr-outward-table tbody td:nth-child(5){
    flex-basis:20%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .cr-outward-table tfoot th:nth-child(1){
    flex-basis:65%;
  }
  .cr-outward-table tfoot th:nth-child(2),
  .cr-outward-table tfoot th:nth-child(3){
    flex-basis:20%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
/*--------- End Cash Register Outward Table Area ---------*/

/*--------- Start Cash Register Day Closing Area ---------*/
.cr-date-closing-table{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    box-sizing: border-box;
  }
  .cr-date-closing-table tr{
    width: 100%;
    display:flex;
  }
  .cr-date-closing-table td,
  .cr-date-closing-table th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .cr-date-closing-table thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .cr-date-closing-table thead tr{
    height: var(--table-height);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .cr-date-closing-table thead tr th{
    height: var(--table-height);
    display:flex;
    align-items: center;
  }
  /* Start Table Body Area */
  .cr-date-closing-table tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    height: calc( 100vh - (var(--used-height) + 240px));
  }
  .cr-date-closing-table tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .cr-date-closing-table tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
  /* Start Table Foot Area */
  .cr-date-closing-table tfoot{ 
    display: block;
    width:100%;
    font-size: var(--font14);
  }
  .cr-date-closing-table tfoot tr{
    height: var(--table-height);
    display: flex;
    align-items: center;
    color: var(--blue);
    border-top: 1px solid  var(--bluish-white);
  }
  .cr-date-closing-table tfoot tr th{
    height: var(--table-height);
    display: flex;
    align-items: center;
  }
  /* Start Table Alignment Area*/
  .cr-date-closing-table thead th:nth-child(1),
  .cr-date-closing-table tbody td:nth-child(1){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: start;
  }
  .cr-date-closing-table thead th:nth-child(2),
  .cr-date-closing-table tbody td:nth-child(2){
    flex-basis: 35%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .cr-date-closing-table thead th:nth-child(3),
  .cr-date-closing-table tbody td:nth-child(3),
  .cr-date-closing-table thead th:nth-child(4),
  .cr-date-closing-table tbody td:nth-child(4){
    flex-basis: 15%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .cr-date-closing-table thead th:nth-child(5),
  .cr-date-closing-table tbody td:nth-child(5),
  .cr-date-closing-table thead th:nth-child(6),
  .cr-date-closing-table tbody td:nth-child(6){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .cr-date-closing-table tfoot th:nth-child(1){
    flex-basis:80%;
  }
  .cr-date-closing-table tfoot th:nth-child(2),
  .cr-date-closing-table tfoot th:nth-child(3){
    flex-basis:15%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .cr-date-closing-table i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: var(--font16);
    border-radius: 100px;
    margin: 0px 5px;
    font-weight: 200;
  }
  .cr-date-closing-table i.add{
    color:  var(--white);
    background-color:var(--blue);
  }
    .cr-date-closing-table i.view{
    color: var(--green);
    background-color: var(--greenish-white);
  }
/*--------- End Cash Register Day Closing Area ---------*/



/*--------- Start Show Denomination Modal Table Area ---------*/
.modal-header .modal-title{
  color: var(--black)!important;
  font-size: var(--font16)!important;
}
.modal-header .modal-title span{
  font-size: var(--font16);
  color:  var(--blue);
  margin-left: 5px;
}
#add-denomination-modal .modal-body,
#show-denomination .modal-body{
    padding: 0rem 1rem;
}
.denomination-modal-table{
    display: block;
    empty-cells: show;
    border-spacing: 0;
    box-sizing: border-box;
  }
  .denomination-modal-table tr{
    width: 100%;
    display:flex;
  }
  .denomination-modal-table td,
  .denomination-modal-table th{
    flex-grow:1;
    display: block;
    padding: 0rem 1rem;
  }
  /* Start Table Head Area */
  .denomination-modal-table thead{ 
    position:relative;
    display: block;
    width:100%;
  }
  .denomination-modal-table thead tr{
    height: var(--table-height);
    font-size: var(--font14);
    text-transform: uppercase;
    color: var(--blue);
    border-bottom: 1px solid var(--border-color);
  }
  .denomination-modal-table thead tr th{
    height: var(--table-height);
    display:flex;
    align-items: center;
  }
 .denomination-modal-table thead tr:nth-child(2){
   background-color:var(--bluish-white);
   display: flex;
   align-items: center;
   height: 50px;
 }
  .denomination-modal-table .form-control-sm{
    border-radius: 2px;
    font-size: var(--font14) ;
    border: 1px solid var(--border-color);
    height: 30px !important;
    width: 100px;
  }
   .denomination-modal-table .form-control-sm:placeholder{
    font-size: var(--font14) ;
    color: #AAC0D9;
}
  .denomination-modal-table .form-control-sm:focus{
    outline: none !important;
    border-color: var(--blue)!important;
    box-shadow: none;
}
  .denomination-modal-table .btn-add {
    width: 100px;
    height: 30px;
    padding: 0px 10px;
    font-size: var(--font14);
    color: var(--white);
    background-color: var(--blue);
    border-radius: 100px;
    font-weight: 600;
    border: none;
}
  /* Start Table Body Area */
  .modal .modal-content {
      border: 0;
  }
  .denomination-modal-table tbody{
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    /* height: calc( 100vh - (var(--used-height) + 240px)); */
    height: calc( 100vh - (var(--used-height) + 340px));
  }
  .denomination-modal-table tbody tr{
    width: 100%;
    display:flex;
    align-items: center;
    height: var(--table-height);
    border-bottom: 1px solid var(--border-color);
  }
  .denomination-modal-table tbody tr.active{
    background-color: var(--bluish-white);
  }
  .denomination-modal-table tbody tr.active .edit{
    color: var(--white);  
    background-color: var(--blue);
  }
  .denomination-modal-table tbody tr .remove{
    color: var(--red);  
    background-color: var(--redish-white);
  }
  .denomination-modal-table tbody tr .edit{
    color: var(--blue);  
    background-color: var(--bluish-white);
  }
  .denomination-modal-table tbody tr td{
    display: flex;
    align-items: center;
    height: var(--table-height);
  }
  /* Start Table Foot Area */
  .denomination-modal-table tfoot{ 
    display: block;
    width:100%;
    font-size: var(--font14);
  }
  .denomination-modal-table tfoot tr{
    height: var(--table-height);
    display: flex;
    align-items: center;
    color: var(--blue);
    border-top: 1px solid  var(--bluish-white);
  }
  .denomination-modal-table tfoot tr .notmatch{
    color: var(--red);
  }
  .denomination-modal-table tfoot tr th{
    height: var(--table-height);
    display: flex;
    align-items: center;
  }
  /* Start Table Alignment Area*/
  .denomination-modal-table thead th:nth-child(1),
  .denomination-modal-table tbody td:nth-child(1){
    flex-basis:40%;
    flex-grow:1;
    display: flex;
    justify-content: start;
  }
  .denomination-modal-table thead th:nth-child(2),
  .denomination-modal-table tbody td:nth-child(2){
    flex-basis: 25%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .denomination-modal-table thead th:nth-child(3),
  .denomination-modal-table tbody td:nth-child(3){
    flex-basis:25%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .denomination-modal-table thead th:nth-child(4),
  .denomination-modal-table tbody td:nth-child(4){
    flex-basis:25%;
    flex-grow:1;
    display: flex;
    justify-content: center;
  }
  .denomination-modal-table tfoot th:nth-child(1){
    flex-basis:65%;
  }
  .denomination-modal-table tfoot th:nth-child(2){
    flex-basis:25%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
  .denomination-modal-table tfoot th:nth-child(3){
    flex-basis:25%;
    flex-grow:1;
    display: flex;
    justify-content: flex-end;
  }
/*--------- End Show Denomination Modal Table Area ---------*/


@media screen and (max-width: 1440px) {
  :root {
    --table-height: 35px;
    }
  .cr-pending-table i,
  .cr-inward-table i,
  .cr-date-closing-table i{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-size: var(--font16);
    border-radius: 100px;
    margin: 0px 5px;
  }
}

.fa-search {
    position: absolute;
    top: 12px;
    left: 10px;
    color: #AAC0D9;
    font-size: 14px;
}
.form-group input[type='text'] {
    height: 38px;
    width: 80%;
}
.active-date {
    /* width: 400px !important; */
    width: 92% !important;
}
.jmi-single-date.mx-datepicker.mx-datepicker-range .mx-input-wrapper {
    position: relative;
}
.jmi-single-date.mx-datepicker.mx-datepicker-range .mx-input-wrapper input {
    height: 22px;
    border-bottom: 0;
}
.jmi-single-date.mx-datepicker.mx-datepicker-range .mx-input-wrapper i.mx-icon-clear {
    display: none;
}
.jmi-single-date.mx-datepicker.mx-datepicker-range .mx-input-wrapper i.mx-icon-calendar {
    position: absolute;
    top: 0;
    right: 0;
}
.active-date .jmi-single-date.mx-datepicker.mx-datepicker-range .mx-input-wrapper i.mx-icon-calendar {
    display: none;
}
td i.zmdi-plus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 18px;
    font-size: var(--font16);
    border-radius: 100px;
    margin: 0px 5px;
    font-weight: 500;
    color: #FFFFFF;
    background-color: var(--blue);
}
td svg.fa-plus.add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 4px;
    font-size: var(--font16);
    border-radius: 50%;
    margin: 0px 5px;
    font-weight: 100;
    color: #FFFFFF;
    background-color: var(--blue);  
}
.top-action {
    height: 38px;
    margin-top: -10px;
}
.group-action-btn {
    position: absolute;
    left: -80px;
    display: inline-flex;
}
.group-action-btn i {
    cursor: pointer;
}
.group-action-btn i.verify {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-size: 18px;
    font-size: var(--font16);
    border-radius: 100px;
    margin: 0px 5px;
    font-weight: 500;
    color: #FFFFFF;
    background-color: var(--blue);
}
.group-action-btn i.cancel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-size: 18px;
    font-size: var(--font16);
    border-radius: 100px;
    margin: 0px 5px;
    font-weight: 500;
    color: var(--red);
    background-color: var(--redish-white);
}
</style>