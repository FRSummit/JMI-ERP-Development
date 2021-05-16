<template>
    <div class="transfet-verify-requisition-update-details">
        <div class="layout-container">
            <div class="container-fluid">
                <div class="col-12 requition_area">
                    <div class="row requition_header"> 
                        <div class="col-12 header_top">
                            <h5>Requisition No: <span>{{ REQUISITION_NO_ }}</span></h5>
                            <a class="edit hide" @click="editRequisitionClickHandler"><i class="zmdi zmdi-edit"></i></a>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <p>Requisition From:
                                <span class="text-data jmi-tool-tip-parent">
                                    {{ DATA_DEPOT_NAME_FROM_TR_AR ? DATA_DEPOT_NAME_FROM_TR_AR : '' }}
                                    <span class="text-data jmi-tool-tip">{{ DATA_DEPOT_NAME_FROM_TR_AR_DTL ? DATA_DEPOT_NAME_FROM_TR_AR_DTL : '' }}</span>
                                </span>
                            </p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <p>Requisition To: 
                                <span class="text-data jmi-tool-tip-parent">
                                    {{ DATA_DEPOT_NAME_TO_TR_AR ? DATA_DEPOT_NAME_TO_TR_AR : '' }}
                                    <span class="text-data jmi-tool-tip">{{ DATA_DEPOT_NAME_TO_TR_AR_DTL ? DATA_DEPOT_NAME_TO_TR_AR_DTL : '' }}</span>
                                </span>
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-3 col-12">
                            <p>Requisition Date: <span class="text-data jmi-tool-tip-parent">{{ requisition_date }}</span></p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Status: <span class="approved">{{ REQ_STATUS ? REQ_STATUS : 'DRAFT' }}</span></p>
                        </div>
                    </div>
                    <div class="row requition_content">
                        <table class="col-12">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Unit</th>
                                    <th>{{ DATA_DEPOT_NAME_FROM_TR_AR ? DATA_DEPOT_NAME_FROM_TR_AR : '' }} Stock</th>
                                    <th>{{ DATA_DEPOT_NAME_TO_TR_AR ? DATA_DEPOT_NAME_TO_TR_AR : '' }} Stock</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in SELECTED_REQUISITION_DATA ? SELECTED_REQUISITION_DATA : items" :key="i">
                                <!-- <tr v-for="(item, i) in items" :key="i"> -->
                                    <td>
                                        <div class="product">
                                            <p class="name">{{ item.prod_code }} - {{ item.prod_name }}<span> </span></p>
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
                                        <div class="product">
                                            <p class="type">{{ item.current_stock ? item.current_stock : 0 }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="product">
                                            <p class="type">{{ item.req_current_stock ? item.req_current_stock : 0 }}</p>
                                        </div>
                                    </td>
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
                                        <!-- <a class="edit" @click="singleItemEditClickHandler"><i class="zmdi zmdi-edit"></i></a> -->
                                        <a class="remove" @click="singleItemDeleteClickHandler(item, i)"><i class="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row requition_footer" v-if="SELECTED_REQUISITION_DATA.length ? SELECTED_REQUISITION_DATA.length > 0 : false">
                        <a><button type="button" class="btn btn-primary btn-global mx-2" @click="cancelRequestTVRClickHandler" style="color: #000000; background-color: #FFFFFF; border: 1px solid #000000;">Cancel</button></a>
                        <a><button type="button" class="btn btn-primary btn-global mx-2" @click="updateRequestTVRClickHandler" style="color: #FFFFFF;">Update</button></a>
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
    props: ["DEPOT_NAME", "SELECTED_REQUISITION_DATA"],
    components: {},
    data() {
        return {
            items: [],
            wh_from: null,
            wh_to: null,
            requisition_date: null,
            DEPOT_LIST: [],
            proceed_modal_popup: false,
            proceed_modal_popup_msg: null,
            status_modal: false,
            status_modal_msg: null,
            DATA_DEPOT_NAME_FROM_TR_AR: null,
            DATA_DEPOT_NAME_FROM_TR_AR_DTL: null,
            DATA_DEPOT_NAME_TO_TR_AR: null,
            DATA_DEPOT_NAME_TO_TR_AR_DTL: null,
            REQ_STATUS: null,
            STORED_DATA: null,
            REQUISITION_NO_: null,
            REQUISITION_ID_NO: null,
        }
    },
    computed: {
        REQUISITION_DATA_TO_SAVE_OR_SEND() {
            let prod_info = []
            if(this.SELECTED_REQUISITION_DATA.length ? this.SELECTED_REQUISITION_DATA.length > 0 : false) {
                for(let i=0; i<this.SELECTED_REQUISITION_DATA.length; i++) {
                    let prods = {
                        id: this.REQUISITION_ID_NO,
                        detail_id: this.SELECTED_REQUISITION_DATA[i].detail_id ? this.SELECTED_REQUISITION_DATA[i].detail_id : null,
                        prod_id: this.SELECTED_REQUISITION_DATA[i].prod_id,
                        trans_qty: this.SELECTED_REQUISITION_DATA[i].req_qty
                    }
                    prod_info.push(prods)
                }
            }
            return prod_info
        },
        PREVIOUS_ROUTE_NAME() {
            if(this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE) {
                return this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE
            } else {
                return 'Create Requisition'
            }
        },
    },
    created() {},
    async mounted() {
        // this.items = demoData.demo_data().create_requisition_items_table_data
        let now = new Date();
        let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);
        let today = now.getFullYear()+"-"+(month)+"-"+(day) ;
        this.requisition_date = today

        console.log(this.$store.state.REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE)
        if(this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT !== null ? this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT.id : false) {
            console.log(this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT)
            this.STORED_DATA = this.$store.state.SELECTED_REQUISITION_DATA_TO_EDIT
            this.REQUISITION_ID_NO = this.STORED_DATA.id
            this.DATA_DEPOT_NAME_FROM_TR_AR = this.STORED_DATA.req_from_info.wh_code
            this.DATA_DEPOT_NAME_FROM_TR_AR_DTL = this.STORED_DATA.req_from_info.wh_name
            this.DATA_DEPOT_NAME_TO_TR_AR = this.STORED_DATA.req_to_info.wh_code
            this.DATA_DEPOT_NAME_TO_TR_AR_DTL = this.STORED_DATA.req_to_info.wh_name
            this.REQ_STATUS = this.STORED_DATA.req_status
            this.REQUISITION_NO_ = this.STORED_DATA.requisition_no
            
            let now = new Date(this.STORED_DATA.req_date);
            let day = ("0" + now.getDate()).slice(-2);
            let month = ("0" + (now.getMonth() + 1)).slice(-2);
            let today = now.getFullYear()+"-"+(month)+"-"+(day) ;
            this.requisition_date = today
        } else {
            console.log('no data')
        }

        // await this.ALL_DEPOT_UNDER_SBU__FROM_SERVICE()
    },
    methods: {
        editRequisitionClickHandler() {},
        onChangeWH() {
            console.log(this.wh_from)
            console.log(this.wh_to)
        },
        decreaseRequisitionQtyClickHandler(item, index) {
            // console.log(index)
            if(item.req_qty > 1) {
                item.req_qty--
            }
            let selector = document.querySelector('#transfet-verify-requisition-update #req_qty_' + index)
            selector.value = item.req_qty
        },
        increaseRequisitionQtyClickHandler(item, index) {
            // console.log(index)
            item.req_qty++
            let selector = document.querySelector('#transfet-verify-requisition-update #req_qty_' + index)
            selector.value = item.req_qty
        },
        reqQtyKeyUpEventHandler(item, event, index) {
            console.log(event)
            let selector = document.querySelector('#transfet-verify-requisition-update #req_qty_' + index)
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
        singleItemDeleteClickHandler(item, i) {
            console.log(i)
            console.log(item)
            // this.$emit('SINGLE_ITEM_REMOVE_FROM_TABLE', item, i)
            // for(let i=0; i<this.SELECTED_REQUISITION_DATA.length; i++) {
            //     if(parseInt(this.SELECTED_REQUISITION_DATA.prod_id) === parseInt(item.prod_id)) {
            //         this.SELECTED_REQUISITION_DATA.req_qty = 0
            //     }
            // }
            item.req_qty = 0
            // console.log(item)
            let selector = document.querySelector('#transfet-verify-requisition-update #req_qty_' + i)
            selector.value = 0
        },
        // FOR TRANSFER VERIFY REQUISITION ACTION
        cancelRequestTVRClickHandler() {
            this.$store.state.SELECTED_REQUISITION_DATA_BACK_FROM_EDIT = this.REQUISITION_NO_
            this.$router.push('/features/local_sales/verified-requisition')
        },
        updateRequestTVRClickHandler() {
            if(this.proceed_modal_popup) {
                this.proceed_modal_popup = false
            } else {
                this.proceed_modal_popup_msg = 'You want to update the requisition.'
                this.proceed_modal_popup = true
            }
        },
        // -------------------------------------------------------------------
        cancelOrderModalClickHandler() {
            this.proceed_modal_popup = false
        },
        async proceedOrderModalClickHandler() {
            this.status_modal = true
            this.status_modal_msg = "Updating..."
            this.proceed_modal_popup = false
            if(this.STORED_DATA !== null ? this.STORED_DATA.id : false) {
                let requisition_id = this.STORED_DATA.id
                await this.UPDATE_TRANSFER_VERIFY_REQUISITION__FROM_SERVICE(requisition_id)
            } else {
                alert('Requisition id not found')
            }
        },
        changeThisComponent() {
            this.$router.push('/features/local_sales/verified-requisition')
        },
        // -----------------------------------------------------
        // SERVICE CALL
        async UPDATE_TRANSFER_VERIFY_REQUISITION__FROM_SERVICE(requisition_id) {
            console.log(requisition_id)
            console.log(this.REQUISITION_DATA_TO_SAVE_OR_SEND)
            service.getUpdateNewRequisition_TRANSFER_VERIFY_REQUISITION_UPDATE(requisition_id, this.REQUISITION_DATA_TO_SAVE_OR_SEND)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.status_modal_msg = 'Requisition update successfully'
                        setTimeout( () => {
                            this.status_modal = false
                            this.status_modal_msg = null
                        }, 2000)
                        this.changeThisComponent()
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
    /* width: 45%; */
    margin-right: 4px;
}
.requition_area .requition_header .form-group .form-control-sm {
    width: 54%;
    display: inline-block !important;
    min-width: unset;
}
.requition_area .requition_header input[type=date] {
    width: 50%;
    height: auto;
    border: none;
    font-size: 12px;
    color: var(--blue);
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
    display: flex;
    justify-content: space-around;
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
.requition_area .requition_header .header_top {
    margin-bottom: 10px;
    height: 30px;
}
</style>