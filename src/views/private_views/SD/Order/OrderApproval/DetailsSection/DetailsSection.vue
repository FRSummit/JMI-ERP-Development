<template>
    <div id="order-approval-details-section" class="order-approval-details-section">
        <div class="order-approval-details-section-inner">
            <p class="customer-id">Customer ID: <span class="id">JMI-2231225</span><span class="customer-type">Credit Customer</span></p>
            <div class="header-summery-section">
                <div class="header-summery-section-inner">
                    <div class="row">
                        <p class="customer-name">Customer: <span style="text-decoration: underline;">ABI Pharmacy and Diagnostic Center</span></p>
                        <p class="current-outstanding">Current Outstanding: <span style="text-decoration: underline;">200500</span></p>
                        <p class="order-placed">Order Placed: <span>Placed</span></p>
                        <p class="order-placed">Order Status: <span>Status</span></p>
                    </div>
                    <div class="row">
                        <p class="area">Area: <span>DHK0300-Dhanmondi</span></p>
                        <p class="territory">Territory: <span>DHK0301-Dhanmondi 32</span></p>
                        <p class="address" style="width: 40%;">Address: <span>House:100, Road: 11,Block:C,Dhaka 1213</span></p>
                    </div>
                    <div class="row">
                        <p class="am">AM: <span>Atik Faysal Soumitro</span></p>
                        <p class="mio">MIO: <span>Mehedi Hassan</span></p>
                        <div class="sr" style="display: table-cell; width: 20%; padding-right: 20px; padding-bottom: 0; vertical-align: middle;">
                            <span style="display: inline-block; width: 15%; font-size: 14px; float: left; line-height:1; padding-top: 3px;">SR: </span>
                            <div class="select-options" style="display: inline-block; width: 85%; font-size: 14px;">
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
                        <p class="delivery-dt" style="width: 25%;">Expected Delivery Date: <span>09/12/2020</span><i class="zmdi zmdi-calendar"></i></p>
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
                                <tr v-for="(data, i) in order_table_data" :key="i">
                                    <td>
                                        <span>{{ data.name }}</span>
                                        <span>{{ data.stock }}</span>
                                    </td>
                                    <td>{{ data.unit_price }}</td>
                                    <td>
                                        <span class="quantity-setup">
                                            <span class="qty-increase" @click="increaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-minus"></i></span>
                                            <span class="qty">{{ data.quantity }}</span>
                                            <span class="qty-decrease" @click="decreaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span>
                                        </span>
                                    </td>
                                    <td>{{ data.bonus }}</td>
                                    <td>{{ data.total_price }}</td>
                                    <td class="row-action">
                                        <span class="edit-icon" @click="editOrderitemClickHandler(data, i)"><i class="zmdi zmdi-edit"></i></span>
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
                                    <span class="atjustment" style="width: 142px;">(+/-) Rounding Adjustment</span>
                                </td>
                                <td>
                                    <span class="subtotal">13,032.20</span>
                                    <span class="vat">50.00</span>
                                    <span class="discount">250.00</span>
                                    <span class="gross-tatal">13,032.20</span>
                                    <span class="atjustment">-0.20</span>
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
                                    <span class="grand-total">13,032.00</span>
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
                            <div class="input-autofield">
                                <!-- <input type="text" placeholder="Search By Batch Number" /> -->
                                <AdvancedSearch class="advanced-search" v-model="autocomplete_modal" :options="autocomplete_options" type="text" placeholder="Search By Batch Number"></AdvancedSearch>
                            </div>
                            <div class="autofield-show-section">
                                <div class="autofield-show-section-inner">
                                    <div class="header">
                                        <div class="row">
                                            <span class="name">Name</span>
                                            <span class="quantity">Quantity</span>
                                            <span class="total-price">Total Price</span>
                                            <span class="add-action"></span>
                                        </div>
                                    </div>
                                    <div class="response-body">
                                        <tr v-for="(data, i) in auto_field_data" :key="i">
                                            <td>
                                                <span>{{ data.name }}</span>
                                                <span>{{ data.stock }}</span>
                                            </td>
                                            <td>
                                                <span class="quantity-setup">
                                                    <span class="qty-increase" @click="increaseProductInAutofieldProductClickHandler(data, i)"><i class="zmdi zmdi-minus"></i></span>
                                                    <span class="qty">{{ data.quantity }}</span>
                                                    <span class="qty-decrease" @click="decreaseProductInAutofieldProductClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span>
                                                </span>
                                            </td>
                                            <td>{{ data.total_price }}</td>
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
                                <tr v-for="(data, i) in selected_auto_field_data" :key="i">
                                    <td>
                                        <span>{{ data.name }}</span>
                                        <span>{{ data.stock }}</span>
                                    </td>
                                    <td>
                                        <span class="quantity-setup">
                                            <span class="qty">{{ data.quantity }}</span>
                                        </span>
                                    </td>
                                    <td>{{ data.total_price }}</td>
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
                                <span class="submit-btn" @click="uploadFileCLickHandler">Upload</span>
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
import AdvancedSearch from 'vue-advanced-search'

export default {
    components: {
        AdvancedSearch 
    },
    data() {
        return {
            on_change_SR_dropdown: null,
            sr_list: [
                {
                    name: "SR 1"
                },
                {
                    name: "SR 2"
                },
                {
                    name: "SR 3"
                },
                {
                    name: "SR 4"
                },
            ],
            order_table_header: ["Name", "Unit Price", "Quantity", "Bonus", "Total Price"],
            order_table_data: [
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
            ],
            auto_field_data: [
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
            ],
            selected_auto_field_data: [
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "200",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "200",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "200",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
            ],
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
        }
    },
    created() {},
    mounted() {
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
        },
        // Decrease Table Row's Single Product/Order
        decreaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
        },
        // Edit Table Row's Single Product/Order
        editOrderitemClickHandler(data, index) {
            console.log(data + '    ' + index)
        },
        // Delete Table Row's Single Product/Order
        deleteOrderitemClickHandler(data, index) {
            console.log(data + '    ' + index)
        },
        //------------------------------------------------------------------------------------------
        // Add Product/Order , Atachment Row
        addOrderClickHandler() {
            if(this.add_order_modal) {
                this.add_order_modal = false
            } else {
                this.add_order_modal = true
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
        },
        // Decrease Autofield Selected Ordered Product
        decreaseProductInAutofieldProductClickHandler(data, index) {
            console.log('decrease autofield selected product: ' + data + '    ' + index)
        },
        // Add Selected Ordered Product
        addProductFromAutofieldResponseClickHandler(data, index) {
            console.log('added ordered product from auto field: ' + data + '    ' + index)
        },
        // Remove Added Ordered Product
        removeAddedOrderedProductClickHandler(data, index) {
            console.log('remove added ordered product: ' + data + '    ' + index)
        },
        cancelOrderFromModalClickHandler() {
            this.add_order_modal = false
        },
        addItemsFromModalClickHandler() {
            console.log('add items from modal')
        },
        //------------------------------------------------------------------------------------------
        // Attachment Modal
        attachmentModalOutsideClick() {
            this.attachment_modal = false
        },
        uploadFileCLickHandler() {
            console.log('File upload')
        },
        //------------------------------------------------------------------------------------------
        // Autocomplete
        autocomplete(inp, arr) {
            console.log(inp)
            console.log(arr)
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./DetailsSection.less');
</style>