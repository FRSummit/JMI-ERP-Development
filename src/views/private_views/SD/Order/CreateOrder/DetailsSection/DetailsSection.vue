<template>
    <div id="create-order-details-section" class="create-order-details-section">
        <div class="create-order-details-section-inner">
            <div class="title-section">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer ID:</span><span class="id">{{ customer_data ? customer_data.customer_id : ""}}</span><span class="customer-type">{{ customer_data ? customer_data.credit_flag === "Y" ? "Credit" : "Debit" : "No Customer" }}</span></p></div>
                    <div class="col-lg-8 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer Name:</span><span class="jmi-lvl-value">{{ customer_data ? customer_data.display_name : "" }}</span></p></div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><span class="jmi-lvl-value address">{{ customer_data ? customer_data.customer_info.customer_address !== null ? customer_data.customer_info.customer_address : "Null" : "" }}</span></p></div>                        
                </div>
            </div>

            <div class="header-summery-section">
                <div class="header-summery-section-inner">


                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Current Outstanding:</span><span class="jmi-lvl-value url">{{ customer_data ? customer_data.current_due !== null ? customer_data.current_due : "00" : "" }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Order Placed:</span> <span class="jmi-lvl-value">-- Dev. No Data ---</span></p></div>
                        <!-- <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Status:</span> <span class="jmi-lvl-value">Pending</span></p></div> -->
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title">Area: <span class="jmi-lvl-value">-- Dev. No Data ---</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title">Territory: <span class="jmi-lvl-value">{{ customer_data ? customer_data.customer_area_info.sales_force.get_sales_area.area_name : "" }}</span></p></div>
                    </div>
                    <div class="row">
                        <!-- <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title">Territory: <span class="jmi-lvl-value">{{ customer_data ? customer_data.customer_area_info.sales_force.get_sales_area.area_name : "" }}</span></p></div> -->
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="am">AM: <span class="jmi-lvl-value">{{ customer_data ? customer_data.customer_area_info.sales_force.manager_info.name : "" }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="mio">MIO: <span class="jmi-lvl-value">{{ customer_data ? customer_data.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info.name : "" }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="sr" style="display: table-cell; width: 33%; padding-right: 20px; padding-bottom: 0; vertical-align: middle;">
                                <span style="display: inline-block; width: 15%; font-size: 14px; float: left; line-height:1; padding-top: 6px;">SR: </span>
                                <div class="select-options" style="display: inline-block; width: 50%; min-width: 120px; font-size: 14px;">
                                    <span class="right-icon"
                                        ><i class="fas fa-chevron-right"></i
                                    ></span>
                                    <select title="Pick a customer" class="selectpicker" v-model="on_change_SR_dropdown" @change="onChangeSRDropdown()">
                                        <option v-for="(sr, m) in sr_list" :key="m">
                                        {{ sr.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="delivery-dt"><span class="jmi-lvl">Exp D D:</span> <span class="jmi-lvl-value"><input type="date" id="expected-delivery-date" placeholder="09/12/2020"/></span></p></div>
                    </div>
                    <div class="row">
                        <!-- <div class="col-lg-3 col-md-6 col-sm-6"><p class="delivery-dt"><span class="jmi-lvl">Exp D D:</span> <span class="jmi-lvl-value"><input type="date" id="expected-delivery-date" placeholder="09/12/2020"/></span></p></div> -->
                    </div>
                </div>
            </div>
            <!-- Order Table -->
            <div class="order-table">
                <div class="order-table-inner">
                    <table class="table" id="order-data-table" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th style="border: none" v-for="(head, i) in order_table_header" :key="i">{{ head }}</th>
                                <th style="border: none"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <div class="table-data-rows">
                                <!-- <tr v-for="(data, i) in (order_table_modified_data.length > 0 ? order_table_modified_data : order_table_data)" :key="i"> -->
                                <!-- <tr v-for="(data, i) in order_table_modified_data" :key="i"> -->
                                <tr v-for="(data, i) in order_table_data" :key="i">
                                    <td>
                                        <!-- <span>{{ data ? data.product_info.prod_name : "" }}</span> -->
                                        <span>{{ data ? data.prod_name : "" }}</span>
                                        <span>Product Code: {{ data ? data.prod_id : "" }}</span>
                                    </td>
                                    <td>{{ data ? data.base_tp : "" }}</td>
                                    <td>
                                        <span class="quantity-setup">
                                            <span class="qty-increase" @click="decreaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-minus"></i></span>
                                            <span class="qty">{{ data ? data.quantity : "" }}</span>
                                            <span class="qty-decrease" @click="increaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span>
                                        </span>
                                    </td>
                                    <td>{{ data ? (data.bonus ? data.bonus : "No Bonus") : "No data" }}</td>
                                    <td class="total_price">{{ data ? (data.base_tp * data.quantity).toFixed(2) : "" }}</td>
                                    <td class="row-action">
                                        <!-- <span class="edit-icon hide" @click="editOrderitemClickHandler(data, i)"><i class="zmdi zmdi-edit"></i></span> -->
                                        <span class="delete-icon" @click="deleteOrderitemClickHandler(data, i)"><i class="fas fa-trash-alt"></i></span>
                                    </td>
                                </tr>
                            </div>
                            <!-- Bottom Total Section -->
                            <tr id="subtotal-section" class="subtotal-section" style="border-top   : 1px solid #BFCFE2;">
                                <td>
                                    <span class="add-order-section" @click="addOrderClickHandler"><i class="zmdi zmdi-plus"></i>Add Products</span>
                                    <span class="attachment-section" @click="addAttachmentClickHandler"><i class="zmdi zmdi-attachment-alt"></i>Attachment</span>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <span class="subtotal">Subtotal</span>
                                    <span class="vat">(+) Vat</span>
                                    <span class="discount">(-) Discount</span>
                                    <span class="gross-tatal">Gross Total</span>
                                    <span class="atjustment" style="width: 142px; float: right;">(+/-) Rounding Adjustment</span>
                                </td>
                                <td>
                                    <!-- <span class="subtotal">13,032.20</span> -->
                                    <span class="subtotal">{{ sub_total }}</span>
                                    <span class="vat">{{ vat }}</span>
                                    <span class="discount">{{ discount }}</span>
                                    <span class="gross-tatal">{{ gross_total }}</span>
                                    <span class="atjustment">{{ rounding_adjustment }}</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr id="grand-total-section" class="grand-total-section" style="border-top   : 1px solid #BFCFE2;">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <span class="grand-total">Grand Total</span>
                                </td>
                                <td>
                                    <span class="grand-total">{{ grand_total }}</span>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Bottom Subtotal & Attachment Section -->
            <div class="submit-section">
                <div class="submit-section-inner">
                    <span class="cancel-order" @click="cancelOrderClickHandler">Cancel Order</span>
                    <span class="proceed-order" @click="proceedOrderClickHandler">Proceed Order</span>
                </div>
            </div>
            <!-- Add Product Modal -->
            <div class="add-order-modal-section" v-if="add_order_modal">
                <div class="add-order-modal-section-inner" v-click-outside="addOrderModalOutsideClick">
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
                                        <input id="create-order-add-product" class="jmi-auto-filter-input" type="text" placeholder="Search By Batch Number" v-on:keyup="searchKeyUpAddProductHandler" />
                                    </div>
                                    <div class="response-body">
                                        <tr class="responer-body-filter-output" v-for="(data, i) in auto_field_data" :key="i">
                                            <td>
                                                <!-- <span class="responer-body-filter-tag">{{ data ? data.product_info.prod_name : "" }}</span> -->
                                                <span class="responer-body-filter-tag">{{ data ? data.prod_name : "" }}</span>
                                                <span>Product Code: {{ data ? data.prod_id : "" }}</span>
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
                                <tr v-for="(data, i) in selected_auto_field_data" :key="i">
                                    <td>
                                        <!-- <span>{{  data ? data.product_info.prod_name : ""  }}</span> -->
                                        <span>{{  data ? data.prod_name : ""  }}</span>
                                        <span>Product Code: {{ data ? data.prod_id : "" }}</span>
                                    </td>
                                    <td>
                                        <span class="quantity-setup">
                                            <span class="qty-increase" @click="decreaseProductInAutofieldProductClickHandler(data, i)"><i class="zmdi zmdi-minus"></i></span>
                                            <input class="qty" type="text" placeholder="00" :value="data.quantity">
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
            order_table_header: ["Name", "Unit Price", "Quantity", "Bonus", "Total Price"],
            order_table_data: [
                {
                    id: 1,
                    prod_id: "1001",
                    prod_class: "550",
                    base_tp: "179.91",
                    prod_name: "Adarbi 40 Tab",
                    quantity: 0,
                    prod_code: "ABT2",
                    code_id: null,
                    element_name: null
                },
                {
                    id: 2,
                    prod_id: "1002",
                    prod_class: "650",
                    base_tp: "189.91",
                    prod_name: "Ladarbi 40 Tab",
                    quantity: 0,
                    prod_code: "ABT3",
                    code_id: null,
                    element_name: null
                },
            ],
            order_table_modified_data: [],
            auto_field_data: [],
            selected_auto_field_data: [],
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
            attachment_modal: false,

            autocomplete_modal: null,
            autocomplete_options: [
                { label: 'label1', value: 'value1' },
                { label: 'label2', value: 'value2' }
            ],
            sub_total: 0,
            vat: 0,
            discount: 0,
            gross_total: 0,
            rounding_adjustment: 0,
            grand_total: 0,
        }
    },
    created() {},
    async mounted() {
        await this.DIC_WISE_USERS_FROM_SERVICE()
    },
    methods: {
        onChangeSRDropdown() {
            console.log(this.on_change_SR_dropdown)
        },
        //------------------------------------------------------------------------------------------
        // Table List Actions
        // Increase Table Row's Single Product/Order
        increaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
            data.quantity++
            this.createSubtotalCalculation()
        },
        // Decrease Table Row's Single Product/Order
        decreaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
            if(data.quantity > 0) {
                data.quantity--
                this.createSubtotalCalculation()
            }
        },
        // Edit Table Row's Single Product/Order
        editOrderitemClickHandler(data, index) {
            console.log(data + '    ' + index)
        },
        // Delete Table Row's Single Product/Order
        deleteOrderitemClickHandler(data, index) {
            console.log(data + '    ' + index)
            if(this.order_table_data.length > 0) {
                for (let [i, tt] of this.order_table_data.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.order_table_data.splice(i, 1);
                    }
                }
            }
            /*if(this.selected_auto_field_data.length > 0) {
                for (let [i, tt] of this.selected_auto_field_data.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.selected_auto_field_data.splice(i, 1);
                    }
                }
            }*/
        },
        //------------------------------------------------------------------------------------------
        // Add Product/Order , Atachment Row
        addOrderClickHandler() {
            this.selected_auto_field_data = []
            if(this.add_order_modal) {
                this.add_order_modal = false
            } else {
                this.add_order_modal = true
                this.ADD_PRODUCTS_DATA_LIST_FROM_SERVICE()
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
            console.log('cancel order')
        },
        proceedOrderClickHandler() {
            console.log('proceed order')
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
            if(data.quantity > 0) {
                data.quantity--
            }
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
                            quantity: 0
                        }
            this.selected_auto_field_data.push(product)
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
            // this.selected_auto_field_data.push(data)
            if(this.selected_auto_field_data.length > 0) {
                for (let [i, tt] of this.selected_auto_field_data.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.selected_auto_field_data.splice(i, 1);
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
            console.log('add items from modal')
            this.order_table_modified_data = this.selected_auto_field_data
            this.createSubtotalCalculation()
            // Create object for post method
            let prod_db_list = []
            for(let i=0; i<this.selected_auto_field_data.length; i++) {
                let prod_obj = {
                    prod_id: this.selected_auto_field_data[i].prod_id,
                    quantity: this.selected_auto_field_data[i].quantity
                }
                prod_db_list.push(prod_obj)
            }
            let prod_db_data = {
                sbu_id: 0,
                customer_id:  this.customer_data ? this.customer_data.customer_id : 0,
                products: prod_db_list
            }
            console.log(prod_db_data)
            // Close Modal
            this.add_order_modal = false
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
        searchKeyUpAddProductHandler() {
            let input = document.getElementById("create-order-add-product");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.responer-body-filter-output')
            let txt_selector = "responer-body-filter-tag"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        // ------------------------------------------------------------------------------------------
        // Service Implementation
        async ADD_PRODUCTS_DATA_LIST_FROM_SERVICE() {
            await service.getSearchProductDataList_CreateOrderDetailsSection()
                .then(res => {
                    console.log(res.data)
                    this.auto_field_data = res.data.product_list
                })
        },
        async DIC_WISE_USERS_FROM_SERVICE() {
            await service.getDICWiseUsers_MonthlyDeliveryPlan()
                .then(res => {
                    console.log(res.data)
                    this.sr_list = res.data.users.da
                })
        },
        // ----------------------------------------------------------------------------------------------
        // Bottom Row Calculation
        // Create/initial Subtotal
        createSubtotalCalculation() {
            this.sub_total = 0
            for(let i=0; i<this.order_table_data.length; i++) {
                this.sub_total += this.order_table_data[i].quantity * parseFloat(this.order_table_data[i].base_tp)
            }
            this.sub_total = this.sub_total.toFixed(2)
            this.gross_total = this.sub_total - this.vat + this.discount
            this.gross_total = this.gross_total.toFixed(2)
            this.grand_total = this.sub_total - this.vat + this.discount - this.rounding_adjustment
            this.grand_total = this.grand_total.toFixed(2)
        },
    },
}
</script>

<style lang="less" scoped>
@import url('./DetailsSection.less');
</style>