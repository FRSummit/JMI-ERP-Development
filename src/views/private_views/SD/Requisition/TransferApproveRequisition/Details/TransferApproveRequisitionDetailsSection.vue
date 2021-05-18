<template>
    <div class="transfer-approve-requisition-details">
        <div class="layout-container">
                <!-- No Data -->
            <div class="container-fluid no_table_data" v-if="initial_stage">
                <div class="col-12">
                    <div class="empty-body">
                        <div class="empty_data">
                            <img src="../../../../../../assets/images/transfer-requisition/no_info.png" alt="Icon">
                            <h5>No information to show</h5>
                            <p>Select from the left bar</p>
                            <p>Or</p>
                            <a>
                                <button type="button" class="btn btn-primary btn-global" @click="createRequisitionClickHandler">
                                    <i class="fa fa-plus mr-2"></i>
                                    Create Requisition
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- With Data -->
            <div class="container-fluid" v-if="!initial_stage">
                <div class="col-12 requition_area">
                    <div class="row requition_header"> 
                        <div class="col-12 header_top">
                            <div class="col-lg-6 col-md-6 col-12">
                                <h5>Requisition No: <span>{{ SELECTED_REQUISITION_DETAILS.requisition_no ? SELECTED_REQUISITION_DETAILS.requisition_no : '' }}</span></h5>
                            </div>
                            
                            <!-- <div class="col-lg-3 col-md-3 col-12">
                                <div class="form-group">
                                    <label for="requisition_to" class="col-form-label">Driver</label>
                                    <select class="form-control-sm" id="driver_select_box" v-model="driver_user_id" @change="onChangeDriver()">
                                        <option v-for="(driver, i) in DRIVER_LIST" :key="i" :value="driver.user_id">{{ driver.get_adm_user ? driver.get_adm_user.name : '' }}</option>
                                    </select>
                                </div>
                            </div> -->
                            <div class="col-lg-3 col-md-3 col-12">
                                <div class="form-group">
                                    <label for="requisition_to" class="col-form-label">Driver</label>
                                    <select class="form-control-sm" id="driver_select_box" v-model="driver_user_id" @change="onChangeDriver()">
                                        <option :value="null" selected>Select an option</option>
                                        <option v-for="(driver, i) in SELECTED_REQUISITION_DETAILS_DRIVER_LIST" :key="i" :value="driver.user_id">{{ driver.get_adm_user ? driver.get_adm_user.name : '' }}</option>
                                    </select>
                                </div>
                            </div>
                            
                            <a class="edit col-lg-3 col-md-3 col-6" @click="editRequisitionClickHandler"><i class="zmdi zmdi-edit fl-right" v-if="SELECTED_REQUISITION_DETAILS.requisition_no ? true : false"></i></a>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <!-- <p>Requisition From: <span class="text-data">{{ SELECTED_REQUISITION_DETAILS_WH_NAME }}</span></p> -->
                            <p>Requisition From:
                                <span class="text-data jmi-tool-tip-parent">
                                    {{ SELECTED_REQUISITION_DETAILS.req_from_info ? (SELECTED_REQUISITION_DETAILS.req_from_info.wh_code ? SELECTED_REQUISITION_DETAILS.req_from_info.wh_code : '') : '' }}
                                    <span class="text-data jmi-tool-tip">{{ SELECTED_REQUISITION_DETAILS.req_from_info ? (SELECTED_REQUISITION_DETAILS.req_from_info.wh_name ? SELECTED_REQUISITION_DETAILS.req_from_info.wh_name : '') : '' }}</span>
                                </span>
                            </p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <p>Requisition To:
                                <span class="text-data jmi-tool-tip-parent">
                                    {{ SELECTED_REQUISITION_DETAILS.req_to_info ? (SELECTED_REQUISITION_DETAILS.req_to_info.wh_code ? SELECTED_REQUISITION_DETAILS.req_to_info.wh_code : '') : '' }}
                                    <span class="text-data jmi-tool-tip">{{ SELECTED_REQUISITION_DETAILS.req_to_info ? (SELECTED_REQUISITION_DETAILS.req_to_info.wh_name ? SELECTED_REQUISITION_DETAILS.req_to_info.wh_name : '') : '' }}</span>
                                </span>
                            </p>
                        </div>
                        <!-- <div class="col-lg-4 col-md-3 col-12">
                            <div class="form-group">
                                <label for="requisition_to" class="col-form-label">Requisition To:</label>
                                <select class="form-control-sm" id="requisition_to" v-model="wh_from" @change="onChangeWH()">
                                    <option >Select Area</option>
                                    <option v-for="(depot, i) in DEPOT_LIST" :key="i" :value="depot.id">{{ depot.wh_name }}</option>
                                </select>
                            </div>
                        </div> -->
                        <div class="col-lg-3 col-md-3 col-12">
                            <p>Requisition Date: <span class="text-data">{{ SELECTED_REQUISITION_DETAILS.req_date ? formatDate(SELECTED_REQUISITION_DETAILS.req_date) : '' }}</span></p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <!-- <p>Status: <span class="draft">{{ SELECTED_REQUISITION_DETAILS.req_status ? SELECTED_REQUISITION_DETAILS.req_status : '' }}</span></p> -->
                            <p>Status: <span :class="SELECTED_REQUISITION_DETAILS.tr_status ? SELECTED_REQUISITION_DETAILS.tr_status.toLowerCase() : 'draft'">{{ SELECTED_REQUISITION_DETAILS.tr_status ? SELECTED_REQUISITION_DETAILS.tr_status : '' }}</span></p>
                        </div>
                    </div>
                    <div class="row requition_content">
                        <table class="col-12">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Unit</th>
                                    <th>Quantity</th>
                                    <th>{{ SELECTED_REQUISITION_DETAILS ? (SELECTED_REQUISITION_DETAILS.req_from_info ? (SELECTED_REQUISITION_DETAILS.req_from_info.wh_code ? SELECTED_REQUISITION_DETAILS.req_from_info.wh_code : '') : '') : '' }} Stock</th>
                                    <th style="text-align: center;">{{ SELECTED_REQUISITION_DETAILS ? (SELECTED_REQUISITION_DETAILS.req_to_info ? (SELECTED_REQUISITION_DETAILS.req_to_info.wh_code ? SELECTED_REQUISITION_DETAILS.req_to_info.wh_code : '') : '') : '' }} Stock</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr v-for="(item, i) in items" :key="i"> -->
                                <tr v-for="(item, i) in SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS" :key="i" :class="checkStockAvailablity(item)">
                                    <td>
                                        <div class="product">
                                            <!-- <p class="name">{{ item..prod_info.prod_name }}<span> {{ item.qty }}</span></p> -->
                                            <p class="name">{{ item.prod_info.prod_name }}</p>
                                            <p class="type">{{ item.type ? item.type : 'Dummy Paricatamole' }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="product">
                                            <p class="type">{{ item.element_info ? item.element_info.element_name : '' }}</p>
                                        </div>
                                    </td>
                                    <!-- <td>
                                        <select class="form-control-sm" id="unit">
                                            <option >Select Unit</option>
                                            <option>Box</option>
                                            <option>Box 2</option>
                                            <option>Box 3</option>
                                        </select>
                                    </td> -->
                                    <td>
                                        <form>
                                            <div class="quantity-input">
                                                <input class='minus hide' type='button' value='-' field='quantity' @click="decreaseRequisitionQtyClickHandler(item, i)" />
                                                <input class='quantity' type='number' name='quantity' placeholder="0" :value="item.trans_qty" :id="'req_qty_' + i" v-on:keyup="reqQtyKeyUpEventHandler(item, $event, i)" v-on:keydown="reqQtyKeyDownEventHandler($event, i)" readonly />
                                                <input class='plus hide' type='button' value='+' field='quantity' @click="increaseRequisitionQtyClickHandler(item, i)" />
                                            </div>
                                        </form>
                                        <!-- <p class="type">{{ item.req_qty }}</p> -->
                                    </td>
                                    <!-- <td>
                                        <div class="product">
                                            <p class="type">{{ item.available_stock }}</p>
                                        </div>
                                    </td> -->
                                    <td>
                                        <div class="product">
                                            <p class="type">{{ item.current_stock ? item.current_stock : 0 }}</p>
                                        </div>
                                    </td>
                                    <td style="text-align: center;">
                                        <div class="product">
                                            <p class="type">{{ item.req_current_stock ? item.req_current_stock : 0 }}</p>
                                        </div>
                                    </td>
                                    <th></th>
                                    <!-- <td>
                                        <a class="edit" @click="singleItemEditClickHandler"><i class="zmdi zmdi-edit"></i></a>
                                        <a class="remove" @click="singleItemDeleteClickHandler"><i class="fas fa-trash-alt"></i></a>
                                    </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row requition_footer" v-if="(SELECTED_REQUISITION_DETAILS.id ? true : false) && TAR_APPROVE_BTNS">
                        <a class="hide"><button type="button" class="btn btn-primary btn-global btn-draft mx-2" @click="saveAsDraftClickHandler">Save As Draft</button></a>
                        <a><button type="button" class="btn btn-primary btn-global mx-2" @click="sendRequestClickHandler">Approve</button></a>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- Proceed Modal -->
        <div class="modal-popup-section order-proceed-modal" v-if="proceed_modal_popup">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">{{ proceed_modal_popup_msg }}</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                    <div class="popup-cancel-btn-section" @click="cancelOrderModalClickHandler">
                        <span>Cancel</span>
                    </div>
                    <div class="popup-confirm-btn-section" @click="proceedOrderModalClickHandler">
                        <span>Proceed</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Status Modal -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="status_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">{{ status_modal_msg ? status_modal_msg : '' }}</p>
            </div>
        </div>
    </div>
</template>

<script>
// import DemoData from '../../DemoData'
// const demoData = new DemoData()
import GlobalDateFormat from '../../../../../../functions/GlobalDateFormat'
const globalDateFormat = new GlobalDateFormat()
import ERPService from '../../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
    props: ["SELECTED_REQUISITION_DETAILS", "SELECTED_REQUISITION_DETAILS_DRIVER_LIST", "SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS", "SELECTED_REQUISITION_DETAILS_WH_NAME"],
    components: {},
    data() {
        return {
            items: [],
            // DRIVER_LIST: [],
            driver_user_id: null,
            initial_stage: false,
            wh_from: null,
            DEPOT_LIST: [],
            popup_modal_for__save_or_send: null,
            proceed_modal_popup: false,
            proceed_modal_popup_msg: null,
            status_modal: false,
            status_modal_msg: null,
            TAR_APPROVE_BTNS: false,
        }
    },
    computed: {
        REQUISITION_DATA_TO_SAVE_OR_SEND() {
            let prod_info = []
            if(this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS.length ? this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS.length > 0 : false) {
                for(let i=0; i<this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS.length; i++) {
                    let prods = {
                        prod_id: this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS[i].prod_id,
                        req_qty: this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS[i].req_qty
                    }
                    prod_info.push(prods)
                }
            }
            return prod_info
        },
        DRIVER_LIST_MUTATION() {
            return this.SELECTED_REQUISITION_DETAILS_DRIVER_LIST
        }
    },
    created() {},
    async mounted() {
        // this.items = demoData.demo_data().create_requisition_items_table_data
        await this.ALL_DEPOT_UNDER_SBU__FROM_SERVICE()
        /* await this.DEPOT_DRIVER_LIST__FROM_SERVICE() */
    },
    methods: {
        createRequisitionClickHandler() {
            this.$router.push('/features/local_sales/create-requisition')
        },
        formatDate(date) {
            return globalDateFormat.dateFormatT4(date)
        },
        editRequisitionClickHandler() {
            console.log(this.SELECTED_REQUISITION_DETAILS)
            if(this.SELECTED_REQUISITION_DETAILS.id) {
                this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT = this.SELECTED_REQUISITION_DETAILS
                this.$router.push('/features/local_sales/transfer-approve-requisition-update')
            } else {
                alert('Please select a requisitor from left.')
            }
        },
        onChangeDriver() {
            console.log(this.wh_from)
        },
        checkStockAvailablity(item) {
            this.TAR_APPROVE_BTNS = parseInt(item.req_qty) > parseInt(item.available_stock) ? false : true
            return parseInt(item.req_qty) > parseInt(item.available_stock) ? 'out-of-stock' : ''
        },
        decreaseRequisitionQtyClickHandler(item, index) {
            console.log(index)
            if(item.req_qty > 1) {
                item.req_qty--
                // this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS[index].req_qty--
            }
        },
        increaseRequisitionQtyClickHandler(item, index) {
            console.log(index)
            item.req_qty++
            // this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS[index].req_qty++
        },
        reqQtyKeyUpEventHandler(item, event, index) {
            console.log(event)
            let selector = document.querySelector('#approve-requisition #req_qty_' + index)
            if(parseInt(selector.value) === 0) {
                selector.value = 1
                // this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS[index].req_qty = selector.value
            } else if((selector.value).toString() === '') {
                selector.value = 1
                // this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS[index].req_qty = selector.value
            }
            item.req_qty = selector.value
            // this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS[index].req_qty = selector.value
        },
        reqQtyKeyDownEventHandler(event, index) {
            console.log(index)
            if(event.keyCode === 190 || event.keyCode === 110) {
                event.preventDefault()
            }
        },
        singleItemEditClickHandler() {},
        singleItemDeleteClickHandler() {},
        saveAsDraftClickHandler() {
            if(this.proceed_modal_popup) {
                this.proceed_modal_popup = false
            } else {
                this.popup_modal_for__save_or_send = 'SAVE'
                this.proceed_modal_popup_msg = 'You want to save the requisition.'
                this.proceed_modal_popup = true
            }
        },
        sendRequestClickHandler() {
            if(this.proceed_modal_popup) {
                this.proceed_modal_popup = false
            } else {
                this.popup_modal_for__save_or_send = 'SEND'
                this.proceed_modal_popup_msg = 'You want to approve the requisition.'
                this.proceed_modal_popup = true
            }
        },
        cancelOrderModalClickHandler() {
            this.proceed_modal_popup = false
        },
        async proceedOrderModalClickHandler() {
            let wh_from = this.wh_from ? this.wh_from : this.SELECTED_REQUISITION_DETAILS.wh_from
            // this.status_modal = true
            this.proceed_modal_popup = false
            if(this.popup_modal_for__save_or_send === 'SAVE') {
                let req_status = null
                await this.SAVE_REQUISITION__FROM_SERVICE(this.SELECTED_REQUISITION_DETAILS.id, wh_from, req_status)
            } else if(this.popup_modal_for__save_or_send === 'SEND') {
                if(this.driver_user_id !== null) {
                    await this.APPROVE_REQUISITION__FROM_SERVICE(this.SELECTED_REQUISITION_DETAILS.id, this.driver_user_id)
                } else {
                    alert('Please select driver')
                    this.status_modal = false
                }
            }
        },
        // -----------------------------------------------------
        // SERVICE CALL
        async ALL_DEPOT_UNDER_SBU__FROM_SERVICE() {
            this.DEPOT_LIST = []
            await service.getAllDepotUnderSBU_CREATE_REQUISITION()
                .then(res => {
                    console.log(res.data)
                    this.DEPOT_LIST = res.data.wh_info
                })
                .catch(err => {
                    if(err) {
                        this.DEPOT_LIST = []
                        console.log(err)
                    }
                })
        },
        /*async DEPOT_DRIVER_LIST__FROM_SERVICE() {
            this.DRIVER_LIST = []
            await service.getDepotDriverList_TRANSFER_APPROVE_REQUISITION()
                .then(res => {
                    console.log(res.data)
                    this.DRIVER_LIST = res.data.driver_list

                    if(this.DRIVER_LIST) {
                        setTimeout( () => {
                            var options = document.getElementById("driver_select_box").options;
                            options[0].selected = true;
                            this.driver_user_id = this.DRIVER_LIST[0].user_id
                        }, 500)
                    }
                })
                .catch(err => {
                    if(err) {
                        this.DRIVER_LIST = []
                        console.log(err)
                    }
                })
        },*/
        async SAVE_REQUISITION__FROM_SERVICE(transfer_id, wh_from, req_status) {
            console.log('SAVE_REQUISITION__FROM_SERVICE')
            this.popup_modal_for__save_or_send = null
            console.log(transfer_id + '  ' + wh_from + '  ' + req_status)
            console.log(this.REQUISITION_DATA_TO_SAVE_OR_SEND)
            await service.getUpdateNewRequisition_CREATE_REQUISITION(transfer_id, wh_from, req_status, this.REQUISITION_DATA_TO_SAVE_OR_SEND)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.status_modal_msg = res.data.message
                        this.SELECTED_REQUISITION_DETAILS = []
                        this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS = []
                        this.$store.state.TRANSFER_APPROVE_REQUISITION__RELOAD_LEFT_SECTION = new Date()
                    }
                    setTimeout( () => {
                        this.status_modal = false
                        this.status_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.status_modal_msg = 'Server problem 500'
                        setTimeout( () => {
                            this.status_modal = false
                            this.status_modal_msg = null
                        }, 2000)
                    }
                })
        },
        async APPROVE_REQUISITION__FROM_SERVICE(transfer_id, driver_usr_id) {
            console.log('APPROVE_REQUISITION__FROM_SERVICE')
            console.log(transfer_id + '    ' + driver_usr_id)
            this.popup_modal_for__save_or_send = null
            this.status_modal = true
            this.status_modal_msg = 'res.data.message'
            await service.getApproveTransferRequisition_TRANSFER_APPROVE_REQUISITION(transfer_id, driver_usr_id)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        console.log(res.data.message)
                        this.status_modal_msg = res.data.message
                        console.log(this.status_modal_msg)
                        this.SELECTED_REQUISITION_DETAILS = []
                        this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS = []
                        this.driver_user_id = null
                        this.$store.state.TRANSFER_APPROVE_REQUISITION__RELOAD_LEFT_SECTION = new Date()
                    }
                    setTimeout( () => {
                        this.status_modal = false
                        this.status_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.status_modal_msg = 'Server problem 500'
                        setTimeout( () => {
                            this.status_modal = false
                            this.status_modal_msg = null
                        }, 2000)
                    }
                })
        },
    },
    watch: {
        DRIVER_LIST_MUTATION(driver_list) {
            console.log(driver_list)
            if(driver_list.length ? driver_list.length > 0 : false && this.driver_user_id === null) {
                setTimeout( () => {
                    var options = document.getElementById("driver_select_box").options;
                    options[0].selected = true;
                    this.driver_user_id = driver_list[0].user_id
                }, 100)
            }
        }
    }
}
</script>

<style scoped>
.transfer-requisition-details {
    height: calc(100vh - (74px + 54px + 32px));
}
.layout-container {
    height: calc(100vh - (74px + 54px + 32px));
}

/* Create Btn Section */
.container-fluid.no_table_data {
    margin-top: calc( ( (100vh - (74px + 54px + 32px)) / 2) - 120px );
}
.btn.btn-primary.btn-global {
    background: #026cd1;
    font-size: 14px;
    text-transform: unset;
}
/* Data Section */
.requition_area .requition_header {
    /* padding: 10px 0; */
    padding: 6px 0;
}
.requition_area .requition_header .header_top {
    padding: 0;
}
.requition_area .requition_header h5 {
    /* margin: 7px 0 3px; */
    margin: 0;
    height: 30px;
}
.requition_area .requition_header .form-group label {
    display: inline-block;
    width: 25%;
}
.requition_area .requition_header .form-group .form-control-sm {
    width: 74%;
    display: inline-block !important;
    min-width: unset;
}
.requition_area .header_top .edit i {
    font-size: 16px;
    cursor: pointer;
}
.requition_area table tbody td a {
    cursor: pointer;
}
.requition_area table tbody td a.edit i {
    font-size: 16px;
}
.requition_area table tbody td a.remove {
    width: 30px;
    height: 30px;
    background-color: #f5bec6;
    border-radius: 50%;
    padding-top: 6px;
}
.requition_area table tbody td a.remove svg {
    color: #df2a43;
    width: 14px;
    height: 14px;
}
.requition_area .quantity-input {
    border: 1px solid #E2EDFA;
}
.requition_area .quantity-input input {
    border: none;
    height: 28px;
}
.requition_area .quantity-input input:focus {
    outline           : 0 !important;
    outline-offset    : 0 !important;
    -moz-box-shadow   : none !important;
    -webkit-box-shadow: none !important;
    box-shadow        : none !important;
    border: none !important;
}
.requition_area .quantity-input .quantity {
    height: 28px;
    margin: 0;
    border-bottom: none;
    font-size: 14px;
    color: #000000;
}
.requition_area .row.requition_content table tbody {
    height: calc(100vh - (74px + 54px + 32px + (296px)));
}
.requition_area .btn.btn-primary.btn-global {
    background: #026cd1;
    font-size: 14px;
    text-transform: unset;
    box-shadow: none
}
.requition_area .row.requition_footer a:first-child .btn.btn-primary.btn-global {
    color: #000000;
}

.requition_content table tr th,
.requition_content table tr td {
    flex-basis: 20%;
}

.requition_content table tr th:first-child,
.requition_content table tr td:first-child {
    flex-basis: 25%;
}

.requition_content table tr th:last-child,
.requition_content table tr td:last-child {
    flex-basis: 15%;
}

.requition_content table tr td:last-child a {
    display: inline-block;
    vertical-align: middle;
}

.requition_content table tr td:last-child a:last-child {
    padding-left: 7px;
}
.out-of-stock {
    background-color: #f5bec6;
}
table tr th,
table tr td {
    flex-basis: 20%;
}
table tr th:first-child,
table tr td:first-child {
    max-width: 203.95px;
    flex-basis: 31%;
}
/* table tr th:nth-child(2),
table tr td:nth-child(2) {
    flex-basis: 20%;
} */
table tr th:nth-child(2),
table tr td:nth-child(2),
table tr th:nth-child(3),
table tr td:nth-child(3),
table tr th:nth-child(4),
table tr td:nth-child(4),
table tr th:nth-child(5),
table tr td:nth-child(5) {
    max-width: 164.33px;
}
table tr th:last-child,
table tr td:last-child {
    flex-basis: 15%;
}
</style>