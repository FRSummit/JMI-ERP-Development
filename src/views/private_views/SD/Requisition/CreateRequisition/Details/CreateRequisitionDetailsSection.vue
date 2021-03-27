<template>
    <div class="create-requisition-details">
        <div class="layout-container">
            <div class="container-fluid">
                <div class="col-12 requition_area">
                    <div class="row requition_header"> 
                        <div class="col-12 header_top">
                            <h5>ID: <span>#</span></h5>
                            <a class="edit hide" @click="editRequisitionClickHandler"><i class="zmdi zmdi-edit"></i></a>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <p>Requisition From: <span class="text-data">Rangpur</span></p>
                        </div>
                        <div class="col-lg-4 col-md-3 col-12">
                            <div class="form-group">
                                <label for="requisition_to" class="col-form-label">Requisition To:</label>
                                <select class="form-control-sm" id="requisition_to" v-model="wh_from" @change="onChangeWH()">
                                    <option >Select Area</option>
                                    <option v-for="(depot, i) in DEPOT_LIST" :key="i" :value="depot.id">{{ depot.wh_name }}</option>
                                    <!-- <option>Rangpur</option>
                                    <option>Rajshahi</option> -->
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <p>Requisition Date: <span class="text-data">10/01/2021</span></p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Status: <span class="draft"></span></p>
                        </div>
                    </div>
                    <div class="row requition_content">
                        <table class="col-12">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Unit</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in SELECTED_REQUISITION_DATA ? SELECTED_REQUISITION_DATA : items" :key="i">
                                <!-- <tr v-for="(item, i) in items" :key="i"> -->
                                    <td>
                                        <div class="product">
                                            <p class="name">{{ item.prod_code }} - {{ item.prod_name }}<span> {{ item.prod_class }}</span></p>
                                            <p class="type">Unit Price: {{ item.base_tp }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="product">
                                            <p class="type">{{ item.base_uom }}</p>
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
                                                <input class='minus' type='button' value='-' field='quantity' @click="decreaseRequisitionQtyClickHandler(item, i)" />
                                                <input class='quantity' type='number' name='quantity' placeholder="0" :value="item.req_qty" :id="'req_qty_' + i" v-on:keyup="reqQtyKeyUpEventHandler(item, $event, i)" v-on:keydown="reqQtyKeyDownEventHandler($event, i)" />
                                                <input class='plus' type='button' value='+' field='quantity' @click="increaseRequisitionQtyClickHandler(item, i)" />
                                            </div>
                                        </form>
                                    </td>
                                    <td>
                                        <a class="edit" @click="singleItemEditClickHandler"><i class="zmdi zmdi-edit"></i></a>
                                        <a class="remove" @click="singleItemDeleteClickHandler"><i class="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row requition_footer" v-if="(SELECTED_REQUISITION_DATA.length ? SELECTED_REQUISITION_DATA.length > 0 : false) && (PREVIOUS_ROUTE_NAME === 'Create Requisition' || PREVIOUS_ROUTE_NAME === 'Transfer Requisition')">
                        <a><button type="button" class="btn btn-primary btn-global btn-draft mx-2" @click="saveAsDraftClickHandler">Save As Draft</button></a>
                        <a><button type="button" class="btn btn-primary btn-global mx-2" @click="sendRequestClickHandler">Send Request</button></a>
                    </div>
                    <div class="row requition_footer" v-if="(SELECTED_REQUISITION_DATA.length ? SELECTED_REQUISITION_DATA.length > 0 : false) && (PREVIOUS_ROUTE_NAME === 'Approve Requisition')">
                        <a><button type="button" class="btn btn-primary btn-global btn-draft mx-2" @click="saveAsSubmitClickHandler">Save As Submit</button></a>
                        <a><button type="button" class="btn btn-primary btn-global mx-2" @click="approveRequestClickHandler">Approve</button></a>
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
import ERPService from '../../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
    props: ["SELECTED_REQUISITION_DATA"],
    components: {},
    data() {
        return {
            items: [],
            wh_from: null,
            DEPOT_LIST: [],
            popup_modal_for__save_or_send: null,
            proceed_modal_popup: false,
            proceed_modal_popup_msg: null,
            status_modal: false,
            status_modal_msg: null,
        }
    },
    computed: {
        REQUISITION_DATA_TO_SAVE_OR_SEND() {
            let prod_info = []
            if(this.SELECTED_REQUISITION_DATA.length ? this.SELECTED_REQUISITION_DATA.length > 0 : false) {
                for(let i=0; i<this.SELECTED_REQUISITION_DATA.length; i++) {
                    let prods = {
                        prod_id: this.SELECTED_REQUISITION_DATA[i].prod_id,
                        req_qty: this.SELECTED_REQUISITION_DATA[i].req_qty
                    }
                    prod_info.push(prods)
                }
            }
            return prod_info
        },
        PREVIOUS_ROUTE_NAME() {
            return this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE
        }
    },
    created() {},
    async mounted() {
        // this.items = demoData.demo_data().create_requisition_items_table_data
        await this.ALL_DEPOT_UNDER_SBU__FROM_SERVICE()
    },
    methods: {
        editRequisitionClickHandler() {},
        onChangeWH() {
            console.log(this.wh_from)
        },
        decreaseRequisitionQtyClickHandler(item, index) {
            // console.log(index)
            if(item.req_qty > 1) {
                item.req_qty--
            }
            let selector = document.querySelector('#create-requisition #req_qty_' + index)
            selector.value = item.req_qty
        },
        increaseRequisitionQtyClickHandler(item, index) {
            // console.log(index)
            item.req_qty++
            let selector = document.querySelector('#create-requisition #req_qty_' + index)
            selector.value = item.req_qty
        },
        reqQtyKeyUpEventHandler(item, event, index) {
            console.log(event)
            let selector = document.querySelector('#create-requisition #req_qty_' + index)
            if(parseInt(selector.value) === 0) {
                selector.value = 1
            } else if((selector.value).toString() === '') {
                selector.value = 1
            }
            item.req_qty = selector.value
        },
        reqQtyKeyDownEventHandler(event, index) {
            console.log(index)
            if(event.keyCode === 190 || event.keyCode === 110) {
                event.preventDefault()
            }
        },
        singleItemEditClickHandler() {},
        singleItemDeleteClickHandler() {},
        // FOR CREATE OR TRANSFER REQUISITION
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
                this.proceed_modal_popup_msg = 'You want to send the requisition.'
                this.proceed_modal_popup = true
            }
        },
        // FOR APPROVE REQUISITION
        saveAsSubmitClickHandler() {
            if(this.proceed_modal_popup) {
                this.proceed_modal_popup = false
            } else {
                this.popup_modal_for__save_or_send = 'SUBMIT'
                this.proceed_modal_popup_msg = 'You want to submit the requisition.'
                this.proceed_modal_popup = true
            }
        },
        approveRequestClickHandler() {
            if(this.proceed_modal_popup) {
                this.proceed_modal_popup = false
            } else {
                this.popup_modal_for__save_or_send = 'APPROVE'
                this.proceed_modal_popup_msg = 'You want to approve the requisition.'
                this.proceed_modal_popup = true
            }
        },
        cancelOrderModalClickHandler() {
            this.proceed_modal_popup = false
        },
        async proceedOrderModalClickHandler() {
            let wh_from = this.wh_from
            this.status_modal = true
            this.proceed_modal_popup = false
            if(this.popup_modal_for__save_or_send === 'SAVE') {
                let req_status = 'D'
                if(this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT !== null ? this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.id : false) {
                    let requisition_id = this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.id
                    await this.UPDATE_SAVE_NEW_REQUISITION__FROM_SERVICE(requisition_id, wh_from, req_status)
                } else {
                    await this.SAVE_NEW_REQUISITION__FROM_SERVICE(wh_from, req_status)
                }
            } else if(this.popup_modal_for__save_or_send === 'SEND') {
                let req_status = 'S'
                if(this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT !== null ? this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.id : false) {
                    let requisition_id = this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.id
                    await this.UPDATE_SEND_NEW_REQUISITION__FROM_SERVICE(requisition_id, wh_from, req_status)
                } else {
                    await this.SEND_NEW_REQUISITION__FROM_SERVICE(wh_from, req_status)
                }
            } else if(this.popup_modal_for__save_or_send === 'SUBMIT') {
                let req_status = 'S'
                let requisition_id = this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.id
                await this.UPDATE_SAVE_NEW_REQUISITION__FROM_SERVICE(requisition_id, wh_from, req_status)
            } else if(this.popup_modal_for__save_or_send === 'APPROVE') {
                let req_status = 'A'
                let requisition_id = this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.id
                await this.UPDATE_SEND_NEW_REQUISITION__FROM_SERVICE(requisition_id, wh_from, req_status)
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
        async SAVE_NEW_REQUISITION__FROM_SERVICE(wh_from, req_status) {
            console.log('SAVE_NEW_REQUISITION__FROM_SERVICE')
            this.popup_modal_for__save_or_send = null
            console.log(this.REQUISITION_DATA_TO_SAVE_OR_SEND)
            service.getSaveNewRequisition_CREATE_REQUISITION(wh_from, req_status, this.REQUISITION_DATA_TO_SAVE_OR_SEND)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.status_modal_msg = 'Requisition saved successfully'
                        this.SELECTED_REQUISITION_DATA = []
                        this.$store.state.DESELECT_ALL_SELECTED_PRODUCT = new Date
                        setTimeout( () => {
                            this.status_modal = false
                            this.status_modal_msg = null
                        }, 2000)
                    }
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
        async SEND_NEW_REQUISITION__FROM_SERVICE(wh_from, req_status) {
            console.log('SEND_NEW_REQUISITION__FROM_SERVICE')
            console.log(wh_from + '    ' + req_status)
            this.popup_modal_for__save_or_send = null
            console.log(this.REQUISITION_DATA_TO_SAVE_OR_SEND)
            service.getSaveNewRequisition_CREATE_REQUISITION(wh_from, req_status, this.REQUISITION_DATA_TO_SAVE_OR_SEND)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.status_modal_msg = 'Requisition send successfully'
                        this.SELECTED_REQUISITION_DATA = []
                        this.$store.state.DESELECT_ALL_SELECTED_PRODUCT = new Date
                        setTimeout( () => {
                            this.status_modal = false
                            this.status_modal_msg = null
                        }, 2000)
                    }
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
        async UPDATE_SAVE_NEW_REQUISITION__FROM_SERVICE(requisition_id, wh_from, req_status) {
            console.log('SAVE_NEW_REQUISITION__FROM_SERVICE')
            this.popup_modal_for__save_or_send = null
            console.log(this.REQUISITION_DATA_TO_SAVE_OR_SEND)
            service.getUpdateNewRequisition_CREATE_REQUISITION(requisition_id, wh_from, req_status, this.REQUISITION_DATA_TO_SAVE_OR_SEND)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.status_modal_msg = 'Requisition saved successfully'
                        this.SELECTED_REQUISITION_DATA = []
                        this.$store.state.DESELECT_ALL_SELECTED_PRODUCT = new Date
                        setTimeout( () => {
                            this.status_modal = false
                            this.status_modal_msg = null
                        }, 2000)
                    }
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
        async UPDATE_SEND_NEW_REQUISITION__FROM_SERVICE(requisition_id, wh_from, req_status) {
            console.log('SEND_NEW_REQUISITION__FROM_SERVICE')
            console.log(wh_from + '    ' + req_status)
            this.popup_modal_for__save_or_send = null
            console.log(this.REQUISITION_DATA_TO_SAVE_OR_SEND)
            service.getUpdateNewRequisition_CREATE_REQUISITION(requisition_id, wh_from, req_status, this.REQUISITION_DATA_TO_SAVE_OR_SEND)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.status_modal_msg = 'Requisition send successfully'
                        this.SELECTED_REQUISITION_DATA = []
                        this.$store.state.DESELECT_ALL_SELECTED_PRODUCT = new Date
                        setTimeout( () => {
                            this.status_modal = false
                            this.status_modal_msg = null
                        }, 2000)
                    }
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
    watch: {}
}
</script>

<style scoped>
.transfer-requisition-details {
    height: calc(100vh - (74px + 54px + 32px));
}
.layout-container {
    height: calc(100vh - (74px + 54px + 32px));
}
.requition_area .requition_header .header_top {
    padding: 0;
}
.requition_area .requition_header h5 {
    margin: 0;
}
.requition_area .requition_header .form-group label {
    display: inline-block;
    width: 45%;
}
.requition_area .requition_header .form-group .form-control-sm {
    width: 54%;
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
</style>