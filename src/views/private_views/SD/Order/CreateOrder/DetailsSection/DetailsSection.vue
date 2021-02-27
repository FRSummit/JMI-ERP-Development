<template>
    <div id="create-order-details-section" class="create-order-details-section">
        <div id="progressbar" class="jmi-progressbar" v-if="!customer_data">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div class="create-order-details-section-inner" v-if="customer_data">
            <div class="title-section">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer ID:</span><span class="id">{{ customer_data ? customer_data.customer_id : ""}}</span><span class="customer-type">{{ customer_data ? customer_data.credit_flag === "Y" ? "Credit" : "Cash" : "No Customer" }}</span></p></div>
                    <div class="col-lg-8 col-md-8 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer Name:</span><span class="jmi-lvl-value">{{ customer_data ? customer_data.display_name : "" }}</span></p></div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><span class="jmi-lvl-value address">{{ customer_data ? customer_data.customer_info.customer_address !== null ? customer_data.customer_info.customer_address : "Null" : "" }}</span></p></div>                        
                </div>
            </div>

            <div class="header-summery-section">
                <div class="header-summery-section-inner">


                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Current Outstanding:</span><span class="jmi-lvl-value url jmi-no-underline">{{ customer_data ? customer_data.current_due !== null ? customer_data.current_due : "00" : "" }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Order Placed:</span> <span class="jmi-lvl-value">-- Dev. No Data ---</span></p></div>
                        <!-- <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Status:</span> <span class="jmi-lvl-value">Pending</span></p></div> -->
                        <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title">Area: <span class="jmi-lvl-value">-- Dev. No Data ---</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title">Territory: <span class="jmi-lvl-value">{{ customer_data ? customer_data.customer_area_info.sales_force.get_sales_area.area_name : "" }}</span></p></div>
                    </div>
                    <div class="row">
                        <!-- <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title">Territory: <span class="jmi-lvl-value">{{ customer_data ? customer_data.customer_area_info.sales_force.get_sales_area.area_name : "" }}</span></p></div> -->
                        <div class="col-lg-3 col-md-6 col-sm-12"><p class="am">AM: <span class="jmi-lvl-value">{{ customer_data ? customer_data.customer_area_info.sales_force.manager_info.name : "" }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-12"><p class="mio">MIO: <span class="jmi-lvl-value">{{ customer_data ? customer_data.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info.name : "" }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="sr" style="display: table-cell; width: 33%; padding-right: 20px; padding-bottom: 0; vertical-align: middle;">
                                <span class="jmi-lvl">SR: </span>
                                <!-- <div class="select-options" style="display: inline-block; width: 50%; min-width: 120px; font-size: 14px;">
                                    <span class="right-icon"><i class="fas fa-chevron-right"></i></span>
                                    <select title="Pick a customer" class="selectpicker" v-model="on_change_SR_dropdown" @change="onChangeSRDropdown()">
                                        <option v-for="(sr, m) in sr_list" :key="m"><span>{{ sr.name }}</span></option>
                                    </select>
                                </div> -->
                                <p class="selectpicker-pera"> 
                                    <span class="jmi-lvl-value">{{ selected_sr }}</span>
                                    <span class="sr-add-icon" @click="srAddIconClickHandler"><i class="zmdi zmdi-plus"></i></span>
                                    <span class="sr-modal" v-if="sr_add_modal">
                                        <span class="sr-modal-inner" v-click-outside="srModalSectionOutsideClick">
                                            <span class="jmi-title">Select SR</span>
                                            <span class="sr-loop" v-for="(sr, m) in sr_list" :key="m">
                                                <span  class="sr-name" @click="selectedSRClickHandler(sr.name)">{{ sr.name }}</span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12"><p class="delivery-dt"><span class="jmi-lvl">Exp D D:</span> <span class="jmi-lvl-value"><input type="date" id="expected-delivery-date" placeholder="09/12/2020"/></span></p></div>
                    </div>
                    <div class="row">
                        <!-- <div class="col-lg-3 col-md-6 col-sm-12"><p class="delivery-dt"><span class="jmi-lvl">Exp D D:</span> <span class="jmi-lvl-value"><input type="date" id="expected-delivery-date" placeholder="09/12/2020"/></span></p></div> -->
                    </div>
                </div>
            </div>
            <!-- Order Table -->
            <div class="order-table">
                <div class="order-table-inner">
                    <!-- <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Bonus</th>
                                <th>Total Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aston Martin</td>
                                <td>150</td>
                                <td>10</td>
                                <td>50.00</td>
                                <td>1254.00</td>
                                <td>Del</td>
                            </tr>
                        </tbody>
                    </table> -->
                    <table class="table jmi-order-table" id="order-data-table" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <!-- <th style="border: none" v-for="(head, i) in order_table_header" :key="i">{{ head }}</th>
                                <th style="border: none"></th> -->
                                <th>Name</th>
                                <th>Unit Price<span class="with-vat">(With VAT)</span></th>
                                <th>Quantity</th>
                                <th>Discount</th>
                                <th>Bonus</th>
                                <th>Total Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <div id="progressbar" class="jmi-progressbar" v-if="ORDERED_TABLE_DATA__INIT_LIST.length <= 0">
                                <v-progress-circular indeterminate color="primary"></v-progress-circular>
                            </div>
                            <div class="table-data-rows" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">
                                <!-- <tr v-for="(data, i) in (order_table_modified_data.length > 0 ? order_table_modified_data : ORDERED_TABLE_DATA__INIT_LIST)" :key="i"> -->
                                <!-- <tr v-for="(data, i) in order_table_modified_data" :key="i"> -->
                                <tr v-for="(data, i) in ORDERED_TABLE_DATA__INIT_LIST" :key="i" :class="data.row_class ? data.row_class : ''">
                                    <td>
                                        <!-- <span>{{ data ? data.product_info.prod_name : "" }}</span> -->
                                        <span>{{ data ? data.prod_name : "" }}</span>
                                        <span v-if="!data.row_class">Base Price: {{ data ? data.base_tp : "" }}</span>
                                        <span v-if="data.row_class" :class="data.row_class">Free Product</span>
                                    </td>
                                    <!-- <td>{{ data ? data.price_now_per_qty.toFixed(2) : "" }}</td> -->
                                    <td>
                                        <span v-if="!data.row_class">{{ data ? Number(data.price_now_per_qty).toFixed(2) : 0 }}</span>
                                        <span v-if="data.row_class"></span>
                                    </td>
                                    <td>
                                        <span class="quantity-setup" v-if="!data.row_class">
                                            <span class="qty-increase" @click="decreaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-minus" :class="data.quantity <= 1 ? 'jmi-deactive-btn' : ''"></i></span>
                                            <span class="qty">{{ data ? (data.quantity ? data.quantity : 0) : 0 }}</span>
                                            <span class="qty-decrease" @click="increaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span>
                                        </span>
                                    </td>
                                    <td>
                                        <span v-if="!data.row_class">{{ data ? (data.offer.discount_percentage ? data.offer.discount_percentage : 0) : 0 }}%</span>
                                        <span v-if="data.row_class"></span>
                                    </td>
                                    <td>
                                        <span v-if="!data.row_class">{{ data ? (data.offer.bonus_qty ? parseInt(data.quantity / data.offer.bonus_on) : 0) : 0 }}</span>
                                        <span v-if="data.row_class">{{ data ? (data.offer.free_prod_qty ? parseInt(data.quantity / data.offer.free_req_qty) : 0) : 0 }}</span>
                                    </td>
                                    <td class="total_price">
                                        <span v-if="!data.row_class">{{ data ? (data.price_now_per_qty * data.quantity).toFixed(2) : 0 }}</span>
                                        <!-- <span v-if="!data.row_class">{{ data ? Number(data.line_total).toFixed(2) : 0 }}</span> -->
                                        <span v-if="data.row_class"></span>
                                    </td>
                                    <td class="row-action" style="min-width: 70px;">
                                        <span v-if="!data.row_class" class="delete-icon" @click="deleteOrderitemClickHandler(data, i)"><i class="fas fa-trash-alt"></i></span>
                                    </td>
                                </tr>
                            </div>
                            <!-- Bottom Total Section -->
                            <tr class="subtotal bottom-total" style="border-top: 1px solid #BFCFE2;">
                                <td style="width: 50%;"><span class="add-order-attachment-section add-order" @click="addOrderClickHandler"><i class="zmdi zmdi-plus"></i>Add Products</span></td>
                                <td style="width: 25%;">Subtotal</td>
                                <td style="width: 15%;">{{ Number(sub_total).toFixed(2) }}</td>
                                <td style="width: 10%; min-width: 70px;"></td>
                            </tr>
                            <tr class="subtotal bottom-total">
                                <td style="width: 50%;"></td>
                                <td style="width: 25%;">(+) Vat</td>
                                <td style="width: 15%;">{{ Number(vat_total).toFixed(2) }}</td>
                                <td style="width: 10%; min-width: 70px;"></td>
                            </tr>
                            <tr class="subtotal bottom-total">
                                <td style="width: 50%;"></td>
                                <td style="width: 25%;">(-) Discount</td>
                                <td style="width: 15%;">{{ Number(discount_total).toFixed(2) }}</td>
                                <td style="width: 10%; min-width: 70px;"></td>
                            </tr>
                            <tr class="subtotal bottom-total">
                                <td style="width: 50%;"><span class="add-order-attachment-section add-attachment" @click="addAttachmentClickHandler"><i class="zmdi zmdi-attachment-alt"></i>Attachment</span></td>
                                <td style="width: 25%;">Gross Total</td>
                                <td style="width: 15%;">{{ Number(gross_total).toFixed(2) }}</td>
                                <td style="width: 10%; min-width: 70px;"></td>
                            </tr>
                            <!-- <tr class="subtotal bottom-total">
                                <td style="width: 50%;"></td>
                                <td style="width: 25%;">(+/-) Rounding Adjustment</td>
                                <td style="width: 15%;">{{ Number(rounding_adjustment).toFixed(2) }}</td>
                                <td style="width: 10%; min-width: 70px;"></td>
                            </tr> -->
                            <tr class="grand-total bottom-total" style="border-top: 1px solid #BFCFE2;">
                                <td style="width: 50%;"></td>
                                <td style="width: 25%;">Grand Total</td>
                                <td style="width: 15%;">{{ Number(grand_total).toFixed(2) }}</td>
                                <td style="width: 10%; min-width: 70px;"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Bottom Subtotal & Attachment Section -->
            <div class="submit-section">
                <div class="submit-section-inner">
                    <span class="cancel-order" @click="cancelOrderClickHandler" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">Cancel Order</span>
                    <span class="update-order" @click="updateOrderClickHandler" v-if="UPDATE_BTN_TRUE">Update Order</span>
                    <span class="proceed-order" @click="proceedOrderClickHandler" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">Proceed Order</span>
                </div>
            </div>
            <!-- Add Product Modal -->
            <div class="add-order-modal-section" v-if="add_order_modal">
                <!-- <div class="add-order-modal-section-inner" v-click-outside="addOrderModalOutsideClick"> -->
                <div class="add-order-modal-section-inner">
                    <div class="close-icon">
                        <span class="icon" @click="addOrderModalOutsideClick"><i class="zmdi zmdi-close"></i></span>
                    </div>
                    <div class="top-section">
                        <div class="top-section-inner">
                            <div class="logo">
                                <img src="../../../../../../assets/icons/user.png" alt="logo">
                            </div>
                            <div class="title-section">
                                <p class="name">ABI Pharmacy and Diagnostic Center<span class="tik-icon"><i class="zmdi zmdi-check"></i></span></p>
                                <p class="id">JMI-2231225</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="input-autofield-show-section">
                        <div class="input-autofield-show-section-inner">
                            <!-- <div class="input-autofield">
                                <AdvancedSearch class="advanced-search" v-model="autocomplete_modal" :options="autocomplete_options" type="text" placeholder="Search By Batch Number"></AdvancedSearch>
                            </div> -->
                            <div class="autofield-show-section">
                                <div class="autofield-show-section-inner">
                                    <div class="header">
                                        <input id="create-order-add-product" class="jmi-auto-filter-input" type="text" placeholder="Search By Name or Product ID" v-on:keyup="searchKeyUpAddProductHandler" />
                                    </div>
                                    <div class="response-body">
                                        <div id="progressbar" class="jmi-progressbar" v-if="!auto_field_data">
                                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                                        </div>
                                        <tr class="responer-body-filter-output" v-for="(data, i) in auto_field_data" :key="i">
                                            <td>
                                                <!-- <span class="responer-body-filter-tag">{{ data ? data.product_info.prod_name : "" }}</span> -->
                                                <span class="responer-body-filter-tag">{{ data ? data.prod_name : "" }}</span>
                                                <span class="responer-body-filter-tag-id">Product ID: {{ data ? data.prod_id : "" }}</span>
                                            </td>
                                            <td>
                                                <span class="quantity-setup">
                                                    <span class="qty">{{ data ? data.base_tp : "" }}</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td class="row-action">
                                                <span class="delete-icon" @click="addProductFromAutofieldResponseClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span>
                                            </td>
                                        </tr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ordered-product-list">
                        <div class="ordered-product-list-inner">
                            <div class="selected-ordered-product">
                                <tr class="header-row">
                                    <td>
                                        <span class="jmi-title">Name</span>
                                    </td>
                                    <td>
                                        <span class="jmi-title">Quantity</span>
                                    </td>
                                    <td><span class="jmi-title">Total Price</span></td>
                                    <td class="row-action"></td>
                                </tr>
                                <div id="progressbar" class="jmi-progressbar" v-if="!SELECTED_ORDERED_PRODUCTS__INIT_LIST">
                                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                                </div>
                                <tr v-for="(data, i) in SELECTED_ORDERED_PRODUCTS__INIT_LIST" :key="i">
                                    <td>
                                        <!-- <span>{{  data ? data.product_info.prod_name : ""  }}</span> -->
                                        <span>{{  data ? data.prod_name : ""  }}</span>
                                        <span>Product Code: {{ data ? data.prod_id : "" }}</span>
                                    </td>
                                    <td>
                                        <span class="quantity-setup">
                                            <span class="qty-increase" @click="decreaseProductInAutofieldProductClickHandler(data, i)"><i class="zmdi zmdi-minus" :class="data.quantity <= 1 ? 'jmi-deactive-btn' : ''"></i></span>
                                            <input :id="'order-add-modal-qty-' + i" class="qty" type="number" placeholder="00" :value="data.quantity ? data.quantity : 1" v-on:keyup="quantityKeyUp_modal(data, $event, i)" min="1" step="1" v-on:keydown="quantityKeyDown_modal($event, i)" pattern="[0-9]*">
                                            <!-- <input class="qty" type="number" placeholder="00" v-model="add_order_modal_data_quantity" v-on:keyup="quantityKeyUp_modal(data.quantity)"> -->
                                            <span class="qty-decrease" @click="increaseProductInAutofieldProductClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span>
                                        </span>
                                    </td>
                                    <td>{{ data ? (data.quantity * data.base_tp).toFixed(2) : "" }}</td>
                                    <td class="row-action">
                                        <span class="delete-icon" @click="removeAddedOrderedProductClickHandler(data, i)"><i class="fas fa-trash-alt"></i></span>
                                    </td>
                                </tr>
                            </div>
                        </div>
                    </div>
                    <div class="submit-section">
                        <div class="submit-section-inner">
                            <span class="cancel-order" @click="cancelOrderFromModalClickHandler">Cancel</span>
                            <span class="proceed-order" @click="addItemsFromModalClickHandler">Add Items</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Attachment Modal -->
            <div class="attachment-modal" v-if="attachment_modal">
                <div class="attachment-modal-inner" v-click-outside="attachmentModalOutsideClick">
                    <p class="title">Attachments</p>
                    <div class="file-input-section">
                        <div class="file-input-section-inner">
                            <div class="input-section">
                                <input type="file" placeholder="Choose file...">
                                <span class="submit-btn" @click="uploadFileClickHandler">Upload</span>
                            </div>
                            <p class="input-type-informations">File Type Should be pdf, jpg, xl, csv. Size of file should not b more than 10MB</p>
                        </div>
                    </div>
                    <div class="uploadeded-file-list">
                        <div class="uploaded-file-list-inner">
                            <div class="file" v-for="(a, i) in attachment_list" :key="i">
                                <div class="file-inner">
                                    <p class="file-name">{{ a.name }}</p>
                                    <div class="file-action">
                                        <span class="download-icon"><i class="zmdi zmdi-download"></i></span>
                                        <span class="delete-icon"><i class="fas fa-trash-alt"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Proceed Modal -->
        <div class="modal-popup-section order-proceed-modal" v-if="proceed_modal_popup">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">You want to proceed the order.</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                <div class="popup-cancel-btn-section">
                    <span @click="cancelOrderModalClickHandler">Cancel</span>
                </div>
                <div class="popup-confirm-btn-section">
                    <span @click="proceedOrderModalClickHandler">Proceed</span>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import AdvancedSearch from 'vue-advanced-search'
import JMIFilter from '.././../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()
import ERPService from '../../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
    props: ["customer_data"],
    components: {
        // AdvancedSearch 
    },
    data() {
        return {
            on_change_SR_dropdown: null,
            sr_list: [],
            sr_add_modal: false,
            selected_sr: null,
            order_table_header: ["Name", "Unit Price", "Quantity", "Discount", "Total Price"],
            ORDERED_TABLE_DATA__INIT_LIST: [],
            ORDERED_TABLE_DATA__MODIFIED_LIST: [],
            ORDERED_TABLE_DATA__CONFIRM_LIST: [],
            order_table_modified_data: [],
            auto_field_data: [],
            SELECTED_ORDERED_PRODUCTS__INIT_LIST: [],
            SELECTED_ORDERED_PRODUCTS__STORE: [],
            RESPONSE_ORDERED_PRODUCTS__STORE: [],
            DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST: [],
            attachment_list: [
                {
                    name: "File Name Line Here.pdf"
                },
                {
                    name: "File Name Line Here.pdf"
                },
                {
                    name: "File Name Line Here.pdf"
                },
                {
                    name: "File Name Line Here.pdf"
                },
                {
                    name: "File Name Line Here.pdf"
                },
            ],
            add_order_modal: false,
            add_order_modal_data_quantity: 0,
            attachment_modal: false,

            autocomplete_modal: null,
            autocomplete_options: [
                { label: 'label1', value: 'value1' },
                { label: 'label2', value: 'value2' }
            ],
            sub_total: 0.00,
            vat_total: 0.00,
            discount_total: 0.00,
            gross_total: 0.00,
            rounding_adjustment: 0.00,
            grand_total: 0.00,
            UPDATE_BTN_TRUE: false,
            UPDATE_ORDER_CLICKED: false,
            // Modal-Popup
            proceed_modal_popup: false,
        }
    },
    created() {},
    async mounted() {
        await this.DIC_WISE_USERS__FROM_SERVICE()
    },
    methods: {
        onChangeSRDropdown() {
            console.log(this.on_change_SR_dropdown)
        },
        srAddIconClickHandler() {
            if(this.sr_add_modal) {
                this.sr_add_modal = false
            } else {
                this.sr_add_modal = true
            }
        },
        srModalSectionOutsideClick() {
            this.sr_add_modal = false
        },
        selectedSRClickHandler(value) {
            this.selected_sr = value
            this.sr_add_modal = false
        },
        //------------------------------------------------------------------------------------------
        // Table List Actions
        // Increase Table Row's Single Product/Order
        increaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
            data.quantity++
            this.UPDATE_BTN_TRUE = true
            this.createSubtotalCalculation()
            // Free Product row quantity increase
            if(data.offer_type === "free") {
                this.ORDERED_TABLE_DATA__INIT_LIST[index + 1].quantity++
            }
        },
        // Decrease Table Row's Single Product/Order
        decreaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
            if(data.quantity > 1) {
                data.quantity--
                this.UPDATE_BTN_TRUE = true
                this.createSubtotalCalculation()
            }
            // Free Product row quantity decrease
            if(data.offer_type === "free") {
                this.ORDERED_TABLE_DATA__INIT_LIST[index + 1].quantity--
            }
        },
        // Delete Table Row's Single Product/Order
        deleteOrderitemClickHandler(data, index) {
            console.log(data + '    ' + index)
            if(this.ORDERED_TABLE_DATA__INIT_LIST.length > 0) {
                for (let [i, tt] of this.ORDERED_TABLE_DATA__INIT_LIST.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.ORDERED_TABLE_DATA__INIT_LIST.splice(i, 1);
                        this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.push(data)
                        // Free Product row delete
                        if(data.offer_type === "free") {
                            this.ORDERED_TABLE_DATA__INIT_LIST.splice(i, 1);
                        }
                    }
                }
            }
            this.createSubtotalCalculation()
        },
        //------------------------------------------------------------------------------------------
        // Add Product/Order , Atachment Row
        addOrderClickHandler() {
            this.SELECTED_ORDERED_PRODUCTS__INIT_LIST = []
            if(this.add_order_modal) {
                this.add_order_modal = false
            } else {
                this.add_order_modal = true
                this.ADD_PRODUCTS_DATA_LIST__FROM_SERVICE()
            }
        },
        addAttachmentClickHandler() {
            if(this.attachment_modal) {
                this.attachment_modal = false
            } else {
                this.attachment_modal = true
            }
        },
        //------------------------------------------------------------------------------------------
        // Order Submition Actions
        cancelOrderClickHandler() {
            this.defaultAllThisComponentData()
        },
        updateOrderClickHandler() {
            this.UPDATE_ORDER_CLICKED = true
            let prod_db_list = []
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                let prod_obj = {
                    prod_id: parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].prod_id),
                    quantity: this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity ? this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity : 0
                }
                if(this.ORDERED_TABLE_DATA__INIT_LIST[i].row_class !== "free") {
                    prod_db_list.push(prod_obj)
                }
            }
            // CALL SERVICE IMPLEMENTATION FUNCTION
            this.FIND_PRODUCT_OFFER__FROM_SERVICE(prod_db_list)
        },
        proceedOrderClickHandler() {
            if(this.proceed_modal_popup) {
                this.proceed_modal_popup = false
            } else {
                this.proceed_modal_popup = true
            }
        },
        //------------------------------------------------------------------------------------------
        // Order Modal Functions
        addOrderModalOutsideClick() {
            this.add_order_modal = false
        },
        // Increase Autofield Selected Ordered Product
        increaseProductInAutofieldProductClickHandler(data, index) {
            console.log('increase autofield selected product: ' + data + '    ' + index)
            // if(data.quantity > 0) {
                data.quantity++
            // }
        },
        // Decrease Autofield Selected Ordered Product
        decreaseProductInAutofieldProductClickHandler(data, index) {
            console.log('decrease autofield selected product: ' + data + '    ' + index)
            if(data.quantity > 1) {
                data.quantity--
            }
        },
        // 
        // Increase or decrease quantity
        quantityKeyUp_modal(data, value, i) {
            console.log(value.key)
            let selector = document.querySelector('#order-add-modal-qty-' + i)
            // if(value.keyCode === 110) {
            //     console.log('point')
            //     // console.log(document.querySelector('#order-add-modal-qty-' + i).innerHTML)
            //     document.querySelector('#order-add-modal-qty-' + i).value = document.querySelector('#order-add-modal-qty-' + i).value.replace(/[^0-9]*/g,"")

            // }
            console.log(selector.value)
            data.quantity = selector.value
        },
        quantityKeyDown_modal(value, i) {
            // let prev_value = document.querySelector('#order-add-modal-qty-' + i).value
            console.log(value.key)
            console.log(value.keyCode)
            console.log(document.querySelector('#order-add-modal-qty-' + i).value)
            // if(value.keyCode >= 96 && value.keyCode <= 105) {
            //     return true
            // }
        },
        // Add Selected Ordered Product
        addProductFromAutofieldResponseClickHandler(data, index) {
            console.log('added ordered product from auto field: ' + data + '    ' + index)
            let product = {
                            id: data.id,
                            prod_id: data.prod_id,
                            prod_class: data.prod_class,
                            base_tp: data.base_tp,
                            prod_name: data.prod_name,
                            prod_code: data.prod_code,
                            code_id: data.code_id,
                            element_name: data.element_name,
                            quantity: 1
                        }
            this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.push(product)
            // Remove this product from all product list
            if(this.auto_field_data.length > 0) {
                for (let [i, tt] of this.auto_field_data.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.auto_field_data.splice(i, 1);
                    }
                }
            }
             
        },
        // Remove Added Ordered Product
        removeAddedOrderedProductClickHandler(data, index) {
            console.log('remove added ordered product: ' + data + '    ' + index)
            // this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.push(data)
            if(this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.length > 0) {
                for (let [i, tt] of this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.splice(i, 1);
                    }
                }
            }
            // Adding removed product to all product list
            this.auto_field_data.push(data)
        },
        cancelOrderFromModalClickHandler() {
            this.add_order_modal = false
        },
        addItemsFromModalClickHandler() {
            // console.log(this.SELECTED_ORDERED_PRODUCTS__STORE)
            // this.order_table_modified_data = this.SELECTED_ORDERED_PRODUCTS__INIT_LIST
            if(this.SELECTED_ORDERED_PRODUCTS__STORE.length > 0) {
                for(let i=0; i<this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.length; i++) {
                    this.SELECTED_ORDERED_PRODUCTS__STORE.push(this.SELECTED_ORDERED_PRODUCTS__INIT_LIST[i])
                    // console.log(this.SELECTED_ORDERED_PRODUCTS__INIT_LIST[i])
                    // console.log(this.SELECTED_ORDERED_PRODUCTS__STORE)
                }
            } else {
                this.SELECTED_ORDERED_PRODUCTS__STORE = this.SELECTED_ORDERED_PRODUCTS__INIT_LIST
            }
            this.createSubtotalCalculation()
            // Create object for post method
            let prod_db_list = []
            for(let i=0; i<this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.length; i++) {
                let prod_obj = {
                    prod_id: parseInt(this.SELECTED_ORDERED_PRODUCTS__INIT_LIST[i].prod_id),
                    quantity: this.SELECTED_ORDERED_PRODUCTS__INIT_LIST[i].quantity ? this.SELECTED_ORDERED_PRODUCTS__INIT_LIST[i].quantity : 0
                }
                prod_db_list.push(prod_obj)
            }
            // CALL SERVICE IMPLEMENTATION FUNCTION
            this.FIND_PRODUCT_OFFER__FROM_SERVICE(prod_db_list)
            // Close Modal
            if(prod_db_list.length > 0) {
                this.add_order_modal = false
            }
        },
        //------------------------------------------------------------------------------------------
        // Attachment Modal
        attachmentModalOutsideClick() {
            this.attachment_modal = false
        },
        uploadFileClickHandler() {
            console.log('File upload')
        },
        //------------------------------------------------------------------------------------------
        // Autocomplete
        autocomplete(inp, arr) {
            console.log(inp)
            console.log(arr)
        },
        // Filter
        searchKeyUpAddProductHandler(value) {
            let input = document.getElementById("create-order-add-product");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.responer-body-filter-output')
            let txt_selector = "responer-body-filter-tag"
            let id_selector = "responer-body-filter-tag-id"

            console.log(value.key)
            let v = document.querySelector('#create-order-add-product').value
            if(isNaN(v)) {
                jmiFilter.searchByID_Name_Details_Section(filter, list, txt_selector)
            } else {
                jmiFilter.searchByID_Name_Details_Section(filter, list, id_selector)
            }
        },
        // ------------------------------------------------------------------------------------------
        // Service Implementation
        async ADD_PRODUCTS_DATA_LIST__FROM_SERVICE() {
            await service.getSearchProductDataList_CreateOrderDetailsSection()
                .then(res => {
                    console.log(res.data)
                    this.auto_field_data = res.data.product_list
                    console.log(this.SELECTED_ORDERED_PRODUCTS__STORE.length)
                    console.log(this.auto_field_data.length)
                    console.log(this.SELECTED_ORDERED_PRODUCTS__STORE)
                    if(this.SELECTED_ORDERED_PRODUCTS__STORE.length > 0) {
                        for(let i=0; i<this.auto_field_data.length; i++) {
                            for(let j=0; j<this.SELECTED_ORDERED_PRODUCTS__STORE.length; j++) {
                                if(this.auto_field_data[i].prod_id === this.SELECTED_ORDERED_PRODUCTS__STORE[j].prod_id) {
                                    this.auto_field_data.splice(i, 1)
                                    console.log(this.auto_field_data[i].prod_id + '    ' + this.SELECTED_ORDERED_PRODUCTS__STORE[j].prod_id)
                                }
                            }
                        }
                    }
                    // Add deleted product
                    if(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length > 0) {
                        for(let i=0; i<this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                            this.auto_field_data.push(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i])
                        }
                    }
                })
        },
        async DIC_WISE_USERS__FROM_SERVICE() {
            await service.getDICWiseUsers_MonthlyDeliveryPlan()
                .then(res => {
                    console.log(res.data)
                    this.sr_list = res.data.users.da
                })
        },
        async FIND_PRODUCT_OFFER__FROM_SERVICE(prod_db_list) {
            let sbu_id = parseInt(JSON.parse(localStorage.getItem("user")).user_detils.sbu_id)
            let customer_id = parseInt(this.customer_data ? this.customer_data.customer_id : 0)
            let yyyy = new Date().getFullYear()
            let mm = (new Date().getMonth() + 1) < 10 ? ("0" + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)
            let dd = (new Date().getDate() + 1) < 10 ? ("0" + (new Date().getDate() + 1)) : (new Date().getDate() + 1) 
            let date = yyyy + '-' + mm + '-' + dd
            
            await service.getFindProductOffer_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, date)
                .then(res => {
                    console.log(res.data)
                    this.RESPONSE_ORDERED_PRODUCTS__STORE = []
                    // this.ORDERED_TABLE_DATA__INIT_LIST = res.data.data
                    this.RESPONSE_ORDERED_PRODUCTS__STORE = res.data.data
                    // console.log(this.SELECTED_ORDERED_PRODUCTS__STORE)
                    this.GENERATE_ORDERED_PRODUCTS_DETAILS_LIST_FROM_PRODUCT_OFFER_RESPONSE()
                })
        },
        async CREATE_OFFER__FROM_SERVICE(prod_db_list) {
            let sbu_id = parseInt(JSON.parse(localStorage.getItem("user")).user_detils.sbu_id)
            let customer_id = parseInt(this.customer_data ? this.customer_data.customer_id : 0)

            await service.getCreateOrder_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, this.createYYYYDDMM())
                .then(res => {
                    console.log(res.data)
                    this.$router.push('/features/local_sales/order_approval')
                })
        },
        // ----------------------------------------------------------------------------------------------
        // Bottom Row Calculation
        // Create/initial Subtotal
        createSubtotalCalculation() {
            this.sub_total = 0
            this.vat_total = 0
            this.discount_total = 0
            this.gross_total = 0
            this.grand_total = 0
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                this.sub_total += parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].price_now_per_qty) * this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity
                this.vat_total += parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].vat_total)
                this.discount_total += parseFloat((this.ORDERED_TABLE_DATA__INIT_LIST[i].base_tp * this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity) - this.ORDERED_TABLE_DATA__INIT_LIST[i].line_total)
            }
            console.log(this.sub_total)
            // this.sub_total = this.sub_total
            // this.vat = this.vat
            // this.vat = this.discount
            this.gross_total = this.sub_total + this.vat_total - this.discount_total
            // this.gross_total = this.gross_total
            // this.rounding_adjustment = this.rounding_adjustment
            this.grand_total = this.sub_total + this.vat_total - this.discount_total
            // this.grand_total = this.grand_total
        },
        // -------------------------------------------------------
        GENERATE_ORDERED_PRODUCTS_DETAILS_LIST_FROM_PRODUCT_OFFER_RESPONSE() {
            if(this.UPDATE_ORDER_CLICKED) {
                this.ORDERED_TABLE_DATA__INIT_LIST = []
                this.UPDATE_ORDER_CLICKED = false
            }
            if(this.SELECTED_ORDERED_PRODUCTS__STORE.length > 0 && this.RESPONSE_ORDERED_PRODUCTS__STORE.length > 0) {
                for (let i=0; i<this.SELECTED_ORDERED_PRODUCTS__STORE.length; i++) {
                    for(let j=0; j<this.RESPONSE_ORDERED_PRODUCTS__STORE.length; j++) {
                        if( parseInt(this.SELECTED_ORDERED_PRODUCTS__STORE[i].prod_id) === parseInt(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].prod_id) ) {
                            let product = {
                                    prod_id             : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].prod_id,
                                    prod_name           : this.SELECTED_ORDERED_PRODUCTS__STORE[i].prod_name,
                                    base_tp             : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].base_tp,
                                    price_now_per_qty   : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].price_now_per_qty,
                                    base_vat            : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].base_vat,
                                    line_total          : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].line_total,
                                    vat_total           : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].vat_total,
                                    quantity            : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].quantity,
                                    offer_type          : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type,
                                    offer               : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer,
                                    row_class           : ''
                            }
                            this.ORDERED_TABLE_DATA__INIT_LIST.push(product)

                            // FOR FREE PRODUCT ENTRY
                            if(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type === "free") {
                                let ferr_product = {
                                        prod_id             : this.RESPONSE_ORDERED_PRODUCTS__STORE[i].prod_id,
                                        prod_name           : this.SELECTED_ORDERED_PRODUCTS__STORE[i].prod_name,
                                        base_tp             : this.RESPONSE_ORDERED_PRODUCTS__STORE[i].base_tp,
                                        price_now_per_qty   : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].price_now_per_qty,
                                        base_vat            : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].base_vat,
                                        line_total          : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].line_total,
                                        vat_total           : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].vat_total,
                                        quantity            : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].quantity,
                                        offer_type          : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type,
                                        offer               : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer,
                                        row_class           : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type
                                }
                                this.ORDERED_TABLE_DATA__INIT_LIST.push(ferr_product)
                            }
                        }
                    }
                }
            }
            console.log(this.ORDERED_TABLE_DATA__INIT_LIST)
            this.UPDATE_BTN_TRUE = false
            this.createSubtotalCalculation()
        },
        // -------------------------------------------------------------------------------------------------
        // Modal Popup Click Handler
        cancelOrderModalClickHandler() {
            this.proceed_modal_popup = false
        },
        proceedOrderModalClickHandler() {
            // console.log('confirm order')
            // console.log(this.ORDERED_TABLE_DATA__INIT_LIST)

            // this.createSubtotalCalculation()
            // Create object for post method
            let prod_db_list = []
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                let prod_obj = {
                    prod_id: parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].prod_id),
                    quantity: this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity
                }
                prod_db_list.push(prod_obj)
            }
            console.log(prod_db_list)
            // CALL SERVICE IMPLEMENTATION FUNCTION
            this.CREATE_OFFER__FROM_SERVICE(prod_db_list)
        },
        // -------------------------------------------------------------------------------------------------
        // Default Functionality
        defaultAllThisComponentData() {
                this.ORDERED_TABLE_DATA__INIT_LIST = []
                this.ORDERED_TABLE_DATA__MODIFIED_LIST = []
                this.ORDERED_TABLE_DATA__CONFIRM_LIST = []
                this.auto_field_data = []
                this.SELECTED_ORDERED_PRODUCTS__INIT_LIST = []
                this.SELECTED_ORDERED_PRODUCTS__STORE = []
                this.RESPONSE_ORDERED_PRODUCTS__STORE = []
                
                this.sub_total = 0.00
                this.vat_total = 0.00
                this.discount_total = 0.00
                this.gross_total = 0.00
                this.rounding_adjustment = 0.00
                this.grand_total = 0.00

        },
        createYYYYDDMM() {
            let yyyy = new Date().getFullYear()
            let mm = (new Date().getMonth() + 1) < 10 ? ("0" + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)
            let dd = (new Date().getDate() + 1) < 10 ? ("0" + (new Date().getDate() + 1)) : (new Date().getDate() + 1) 
            let date = yyyy + '-' + mm + '-' + dd
            return date
        },
    },
    watch: { 
        // Garbase
        // customer_data: (newVal, oldVal) => {
        //      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        //      if( newVal && oldVal) {
        //         if(newVal.customer_id !== oldVal.customer_id) {
        //             console.log('Prop changed: ', newVal.customer_id, ' | was: ', oldVal.customer_id)
        //             // this.ORDERED_TABLE_DATA__INIT_LIST = []
        //             // this.ORDERED_TABLE_DATA__MODIFIED_LIST = []
        //             // this.ORDERED_TABLE_DATA__CONFIRM_LIST = []
        //             // this.auto_field_data = []
        //             // this.SELECTED_ORDERED_PRODUCTS__INIT_LIST = []
        //             // this.SELECTED_ORDERED_PRODUCTS__STORE = []
        //             // this.RESPONSE_ORDERED_PRODUCTS__STORE = []
        //             this.test()
        //         }
        //     }
        // },
        // deep: true
        
        // customer_data: {
        //     handler: (newVal, oldVal) => {
        //         if( newVal && oldVal) {
        //             if(newVal.customer_id !== oldVal.customer_id) {
        //                 // this.test(newVal, oldVal)
        //             }
        //         }
        //     },
        //     deep: true,
        //     immediate: true,
        // }

        customer_data(newVal, oldVal){
            if( newVal && oldVal) {
                if(newVal.customer_id !== oldVal.customer_id) {
                    this.defaultAllThisComponentData()
                }
            }
        },
        // ORDERED_TABLE_DATA__INIT_LIST(newVal, oldVal) {
        //     // console.log(newVal)
        //     // console.log(oldVal)
        //     if( newVal && oldVal) {
        //         // if(newVal.customer_id !== oldVal.customer_id) {
        //         //     this.defaultAllThisComponentData()
        //         // }
        //         console.log('changes')
        //     }
        // }
    }
}
</script>

<style lang="less" scoped>
@import url('./DetailsSection.less');
</style>