<template>
    <div class="transfer-requisition-details">
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
                            <h5>Requisition No: <span>{{ SELECTED_REQUISITION_DETAILS.requisition_no ? SELECTED_REQUISITION_DETAILS.requisition_no : '' }}</span></h5>
                            <span>
                                <a class="edit create-new" @click="createRequisitionClickHandler" style="color: #FFFFFF; border: 1px solid #026cd1; background-color: #026cd1; padding: 4px 6px; border-radius: 4px;">Create New</a>
                                <a class="edit" @click="editRequisitionClickHandler" v-if="SELECTED_REQUISITION_DETAILS ? (SELECTED_REQUISITION_DETAILS.req_status === 'DRAFT' ? true : false) : false"><i class="zmdi zmdi-edit"></i></a>
                            </span>
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
                            <select class="form-control-sm" id="requisition_to">
                                <option >Select Area</option>
                                <option>Dhaka</option>
                                <option>Rangpur</option>
                                <option>Rajshahi</option>
                            </select>
                            </div>
                        </div> -->
                        <div class="col-lg-3 col-md-3 col-12">
                            <p>Requisition Date: <span class="text-data">{{ SELECTED_REQUISITION_DETAILS.req_date ? formatDate(SELECTED_REQUISITION_DETAILS.req_date) : '' }}</span></p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Status: <span class="draft" :class="SELECTED_REQUISITION_DETAILS.req_status ? SELECTED_REQUISITION_DETAILS.req_status.toLowerCase() : ''">{{ SELECTED_REQUISITION_DETAILS.req_status ? SELECTED_REQUISITION_DETAILS.req_status : '' }}</span></p>
                        </div>
                    </div>
                    <div class="row requition_content">
                        <table class="col-12">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Unit</th>
                                    <th>Quantity</th>
                                    <!-- <th></th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr v-for="(item, i) in items" :key="i"> -->
                                <tr v-for="(item, i) in SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS" :key="i">
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
                                                <input class='minus hide' type='button' value='-' field='quantity' @click="decreaseRequisitionQtyClickHandler(item)" />
                                                <input class='quantity' type='number' readonly style="color: #000000;" name='quantity' placeholder="0" :value="item.req_qty" :id="'req_qty_' + i" v-on:keyup="reqQtyKeyUpEventHandler(item, $event, i)" v-on:keydown="reqQtyKeyDownEventHandler($event, i)" />
                                                <input class='plus hide' type='button' value='+' field='quantity' @click="increaseRequisitionQtyClickHandler(item)" />
                                            </div>
                                        </form>
                                    </td>
                                    <!-- <td>
                                        <a class="edit hide" @click="singleItemEditClickHandler"><i class="zmdi zmdi-edit"></i></a>
                                        <a class="remove hide" @click="singleItemDeleteClickHandler"><i class="fas fa-trash-alt"></i></a>
                                    </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row requition_foote" v-if="(SELECTED_REQUISITION_DETAILS.id ? true : false) && (SELECTED_REQUISITION_DETAILS.req_status ? (SELECTED_REQUISITION_DETAILS.req_status.toUpperCase() === 'DRAFT' ? true : false) : false)">
                        <a style="margin: 0 auto;"><button type="button" class="btn btn-primary btn-global mx-2" @click="saveAsApproveClickHandler" style="color: #FFFFFF;">Submit</button></a>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- Success Message -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="success_or_not_msg_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">{{ success_or_not_msg }}</p>
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
    </div>
</template>

<script>
// import DemoData from '../../DemoData'
// const demoData = new DemoData()
import GlobalDateFormat from '.././../../../../../functions/GlobalDateFormat'
const globalDateFormat = new GlobalDateFormat()
import ERPService from '../../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
    props: ["SELECTED_REQUISITION_DETAILS", "SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS", "SELECTED_REQUISITION_DETAILS_WH_NAME"],
    components: {},
    data() {
        return {
            items: [],
            initial_stage: false,
            success_or_not_msg_modal: false,
            success_or_not_msg: null,
            proceed_modal_popup: false,
            proceed_modal_popup_msg: null,
        }
    },
    computed: {
        REQUISITION_DATA_TO_SAVE_OR_SEND() {
            let prod_info = []
            if(this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS.length ? this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS.length > 0 : false) {
                for(let i=0; i<this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS.length; i++) {
                    let prods = {
                        prod_id: this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS[i].prod_id,
                        req_qty: this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS[i].req_qty,
                        status: 'OLD'
                    }
                    prod_info.push(prods)
                }
            }
            return prod_info
        },
    },
    created() {},
    mounted() {
        // this.items = demoData.demo_data().create_requisition_items_table_data
    },
    methods: {
        createRequisitionClickHandler() {
            this.$router.push('/features/local_sales/create-requisition')
        },
        formatDate(date) {
            return globalDateFormat.dateFormatT4(date)
        },
        editRequisitionClickHandler() {
            console.log('editRequisitionClickHandler')
            console.log(this.SELECTED_REQUISITION_DETAILS)
            if(this.SELECTED_REQUISITION_DETAILS.id) {
                this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT = null
                this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE = null
                
                this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT = this.SELECTED_REQUISITION_DETAILS
                this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE = this.$route.name
                this.$router.push('/features/local_sales/create-requisition')
            } else {
                alert('Please select a requisitor from left.')
            }
        },
        decreaseRequisitionQtyClickHandler(item) {
            if(item.req_qty > 1) {
                item.req_qty--
            }
        },
        increaseRequisitionQtyClickHandler(item) {
            item.req_qty++
        },
        reqQtyKeyUpEventHandler(item, event, index) {
            console.log(event)
            let selector = document.querySelector('#transfer-requisition #req_qty_' + index)
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
        saveAsApproveClickHandler() {
            // console.log(this.SELECTED_REQUISITION_DETAILS)
            if(this.proceed_modal_popup) {
                this.proceed_modal_popup = false
            } else {
                this.proceed_modal_popup_msg = 'You want to approve the requisition.'
                this.proceed_modal_popup = true
            }
        },
        cancelOrderModalClickHandler() {
            this.proceed_modal_popup = false
        },
        async proceedOrderModalClickHandler() {
            let wh_from = this.wh_from ? this.wh_from : this.SELECTED_REQUISITION_DETAILS.wh_from
            let req_status = 'S'
            let requisition_id = this.SELECTED_REQUISITION_DETAILS.id
            await this.SEND_NEW_REQUISITION__FROM_SERVICE(requisition_id, wh_from, req_status)
        },
        // ----------------------------------------------------------------
        // SERVICE CALL
        /*async SAVE_TRANSFER_VERIFY__FROM_SERVICE(req_no) {
            await service.getSaveTransferVerify_TRANSFER_REQUISITION(req_no)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200) {
                        this.$store.state.TRANSFER_REQUISITION__VERIFY_REQUISITION = new Date()
                        this.success_or_not_msg_modal = true
                        this.success_or_not_msg = res.data.message
                        setTimeout( () => {
                            this.success_or_not_msg_modal = false
                            this.success_or_not_msg = null
                        }, 2000)
                    }
                })
                .catch(err => {
                    if(err) {
                        alert('Server Error 500. ' + err)
                    }
                })
        }*/
        async SEND_NEW_REQUISITION__FROM_SERVICE(requisition_id, wh_from, req_status) {
            console.log('SEND_NEW_REQUISITION__FROM_SERVICE')
            console.log(wh_from + '    ' + req_status)
            console.log(this.REQUISITION_DATA_TO_SAVE_OR_SEND)
            this.proceed_modal_popup = false
            this.success_or_not_msg_modal = true
            this.success_or_not_msg = 'Requisition sending...'
            service.getUpdateNewRequisition_CREATE_REQUISITION(requisition_id, wh_from, req_status, this.REQUISITION_DATA_TO_SAVE_OR_SEND)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.success_or_not_msg = 'Requisition send successfully'
                        this.SELECTED_REQUISITION_DATA = []
                        this.$store.state.DESELECT_ALL_SELECTED_PRODUCT = new Date()
                        setTimeout( () => {
                            this.success_or_not_msg_modal = false
                            this.success_or_not_msg = null
                        }, 2000)
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.success_or_not_msg = 'Server problem 500'
                        setTimeout( () => {
                            this.success_or_not_msg_modal = false
                            this.success_or_not_msg = null
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
    height: calc(100vh - (74px + 54px + 32px + 14px));
}
.layout-container {
    height: calc(100vh - (74px + 54px + 32px + 14px));
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
    padding: 10px;
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
    /* height: calc(100vh - (74px + 54px + 32px + (230px))); */
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
.container-fluid .edit {
    display: inline-block;
}
.container-fluid .edit.create-new {
    cursor: pointer;
    margin-right: 20px;
}
.container-fluid .edit.create-new:hover {
    color: #026cd1;
}
.requition_footer {
    margin-bottom: 0;
}
</style>