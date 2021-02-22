<template>
    <div id="order-approval-details-section" class="order-approval-details-section">
        <div class="order-approval-details-section-inner">
            <div class="title-section">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Order ID:</span><span class="id">JMI-2231225</span><span class="customer-type">Credit</span></p></div>
                    <div class="col-lg-8 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer:</span><span class="jmi-lvl-value id url" @click="customerDetailsClickHandler">ABI Pharmacy and Diagnostic Center</span></p></div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><span class="jmi-lvl-value address">House:100, Road: 11,Block:C,Dhaka 1213</span></p></div>
                    
                </div>
            </div>
            
            <div class="header-summery-section">
                <div class="header-summery-section-inner">
                <!-- <div class="container"> -->
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Current Outstanding:</span><span class="jmi-lvl-value url" @click="currentOutstandingClickHandler">200500</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Order Placed:</span> <span class="jmi-lvl-value">Placed</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Status:</span> <span class="jmi-lvl-value">Pending</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title">Area: <span class="jmi-lvl-value">DHK0300-Dhanmondi</span></p></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title">Territory: <span class="jmi-lvl-value">DHK0301-Dhanmondi 32</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="am">AM: <span class="jmi-lvl-value">Atik Faysal Soumitro</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="mio">MIO: <span class="jmi-lvl-value">Mehedi Hassan</span></p></div>
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
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="delivery-dt"><span class="jmi-lvl">Exp D D:</span> <span class="jmi-lvl-value"><input type="date" id="expected-delivery-date" placeholder="09/12/2020"/></span></p></div>
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
                                    <span class="atjustment" style="width: 142px; float: right;">(+/-) Rounding Adjustment</span>
                                </td>
                                <td>
                                    <span class="subtotal">{{ sub_total.toFixed(2) }}</span>
                                    <span class="vat">{{ vat.toFixed(2) }}</span>
                                    <span class="discount">{{ discount.toFixed(2) }}</span>
                                    <span class="gross-tatal">{{ gross_total.toFixed(2) }}</span>
                                    <span class="atjustment">{{ rounding_adjustment.toFixed(2) }}</span>
                                </td>
                                <td></td>
                            </tr>
                            <tr id="grand-total-section" class="grand-total-section" style="border-top   : 1px solid #BFCFE2;">
                                <td>
                                    <span class="order-forward" @click="orderForwardClickHandler"><i class="zmdi zmdi-fast-forward"></i>Order Forward</span>
                                    <span class="order-reject" @click="orderRejectClickHandler">Reject Order</span>
                                </td>
                                <td></td>
                                <td></td>
                                <td style="text-align: right;">
                                    <span class="grand-total">Grand Total</span>
                                </td>
                                <td>
                                    <span class="grand-total">{{ grand_total.toFixed(2) }}</span>
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
                    <span class="proceed-order" @click="proceedOrderClickHandler">Approve Order</span>
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
                            <div class="autofield-show-section">
                                <div class="autofield-show-section-inner">
                                    <div class="header">
                                        <input id="order-approval-add-product" class="jmi-auto-filter-input" type="text" placeholder="Search By Batch Number" v-on:keyup="searchKeyUpAddProductHandler" />
                                    </div>
                                    <div class="response-body">
                                        <tr class="responer-body-filter-output" v-for="(data, i) in auto_field_data" :key="i">
                                            <td>
                                                <span class="responer-body-filter-tag">{{ data.name }}</span>
                                                <span>{{ data.stock }}</span>
                                            </td>
                                            <td>
                                                <span class="quantity-setup">
                                                    <span class="qty">{{ data.quantity }}</span>
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
                                        <span>{{ data.name }}</span>
                                        <span>{{ data.stock }}</span>
                                    </td>
                                    <td>
                                        <span class="quantity-setup">
                                            <span class="qty-increase" @click="decreaseProductInAutofieldProductClickHandler(data, i)"><i class="zmdi zmdi-minus"></i></span>
                                            <input class="qty" type="text" placeholder="00" :value="data.quantity">
                                            <span class="qty-decrease" @click="increaseProductInAutofieldProductClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span>
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
            <!-- Order Forward Modal -->
            <div class="order-forward-modal" v-if="order_forward_modal">
                <div class="order-forward-modal-inner" v-click-outside="orderForwardModalOutsideClick">
                    <p class="title">Order Forward</p>
                    <div class="forward-to">
                        <div class="forward-to-inner">
                            <span class="label">To AM (Area Manager)</span>
                            <div class="select-options">
                                <span class="right-icon"
                                    ><i class="fas fa-chevron-right"></i
                                ></span>
                                <select title="Pick a customer" class="selectpicker" v-model="on_change_order_forward_area_manager" @change="onChangeOrderForwardAreaManager()">
                                    <option v-for="(sr, m) in sr_list" :key="m">
                                    {{ sr.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="rsm-selection">
                        <div class="rsm-selection-inner">
                            <span class="label">Select RSM</span>
                            <div class="select-options">
                                <span class="right-icon"
                                    ><i class="fas fa-chevron-right"></i
                                ></span>
                                <select title="Pick a customer" class="selectpicker" v-model="on_change_order_forward_rsm" @change="onChangeOrderForwardRSM()">
                                    <option v-for="(sr, m) in sr_list" :key="m">
                                    {{ sr.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="statement">
                        <div class="statement-inner">
                            <span class="label">State your Reason</span>
                            <textarea class="reason-statement" placeholder="Write here..." v-model="statement_reason"></textarea>
                        </div>
                    </div>
                    <div class="submit-section">
                        <div class="submit-section-inner">
                            <span class="cancel-order" @click="cancelOrderForwardClickHandler">Cancel</span>
                            <span class="proceed-order" @click="sendOrderForwardClickHandler">Send</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Current Outstanding Modal -->
            <div class="current-outstanding-modal" v-if="outstanding_modal">
                <div class="current-outstanding-modal-inner" v-click-outside="outstandingModalOutsideClick">
                    <p class="title">Present Credit Status</p>
                    <div class="data-details">
                        <div class="data-details-inner">
                            <div class="data-head">
                                <div class="row">
                                    <div class="data-col">
                                        <span>Invoice No</span>
                                    </div>
                                    <div class="data-col">
                                        <span>Invoice Date</span>
                                    </div>
                                    <div class="data-col">
                                        <span>Outstanding</span>
                                    </div>
                                </div>
                            </div>
                            <div class="data-body">
                                <div class="row" v-for="(o, i) in outstanding_list" :key="i">
                                    <div class="data-col">
                                        <span>{{ o.inv_no }}</span>
                                    </div>
                                    <div class="data-col">
                                        <span>{{ o.inv_date }}</span>
                                    </div>
                                    <div class="data-col">
                                        <span>{{ o.inv_outstanding }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="data-total">
                                <div class="row">
                                    <div class="data-col" style="width: 66%; text-align: right;">
                                        <span style="color: #111213;">Total Outstanding:</span>
                                    </div>
                                    <div class="data-col">
                                        <span>200050</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Customer Name click Modal -->
            <div class="customer-details-modal-section" v-if="customer_details_modal">
                <div class="customer-details-modal-section-inner" v-click-outside="customerDetailsModalOutsideClick">
                    <div class="top-section">
                        <div class="top-section-inner">
                            <div class="logo">
                                <img src="../../../../../../assets/icons/user.png" alt="logo">
                            </div>
                            <div class="title-section">
                                <p class="name">ABI Pharmacy and Diagnostic Center<span class="tik-icon"><i class="zmdi zmdi-check"></i></span></p>
                                <p class="id">JMI-2231225</p>
                            </div>
                            <div class="tab-section">
                                <div class="tab-section-inner">
                                    <b-tabs class="mt-3 order-approval-customer-details">
                                        <b-tab title="Basic" active>
                                            <div class="basic-section">
                                                <div class="basic-section-inner">
                                                    <p class="basic-data"><span class="lvl">Customer Name:</span><span class="lvl-value">New Gulshan Pharma</span></p>
                                                    <p class="basic-data"><span class="lvl">Contact Number:</span><span class="lvl-value">+8801847417317</span></p>
                                                    <p class="basic-data"><span class="lvl">Email Address:</span><span class="lvl-value">kollolpharma336@gmail.com</span></p>
                                                    <p class="basic-data"><span class="lvl">Address:</span><span class="lvl-value">15 Genda, Dhaka-Aricha Hwy, Savar Union, Dhaka 1212</span></p>
                                                    <p class="basic-data"><span class="lvl">Customer Type:</span><span class="lvl-value">Chemist</span></p>
                                                    <p class="basic-data"><span class="lvl">Sales Area:</span><span class="lvl-value">Savar Bazar</span></p>
                                                    <p class="basic-data"><span class="lvl">Sales Center:</span><span class="lvl-value">Savar Bazar</span></p>
                                                    <p class="basic-data"><span class="lvl">Credit Limit:</span><span class="lvl-value">2,00,000</span></p>
                                                    <p class="basic-data"><span class="lvl">Type of Payment:</span><span class="lvl-value">Cash</span></p>
                                                </div>
                                            </div>
                                        </b-tab>
                                        <b-tab title="Accounts">
                                            <div class="account-section">
                                                <div class="account-section-inner">
                                                    <div class="jmi-row">
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Total Order:</span><span class="jmi-lvl-value">00</span></p>
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Total Invoice:</span><span class="jmi-lvl-value">00</span></p>
                                                        <p class="jmi-col_33"><span class="jmi-lvl">In Transit:</span><span class="jmi-lvl-value">00</span></p>
                                                    </div>
                                                    <div class="jmi-row">
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Credit Limit:</span><span class="jmi-lvl-value">00</span></p>
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Current Outstanding:</span><span class="jmi-lvl-value">00</span></p>
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Available Limit:</span><span class="jmi-lvl-value">00</span></p>
                                                    </div>
                                                    <div class="jmi-row">
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Transactions History</span></p>
                                                        <p class="jmi-col_50"><span class="prev"><i class="zmdi zmdi-skip-previous"></i></span><span class="account-history-date">December 2020</span><span class="next"><i class="zmdi zmdi-skip-next"></i></span></p>
                                                    </div>
                                                    <div class="accounts-data">
                                                        <div class="accounts-data-inner">
                                                            <div class="data-head">
                                                                <div class="jmi-row">
                                                                    <p class="jmi-col_20"><span class="jmi-data-head-lvl">Date</span></p>
                                                                    <p class="jmi-col_50"><span class="jmi-data-head-lvl">Particular</span></p>
                                                                    <p class="jmi-col_15"><span class="jmi-data-head-lvl">Debit</span></p>
                                                                    <p class="jmi-col_15"><span class="jmi-data-head-lvl">Credit</span></p>
                                                                </div>
                                                            </div>
                                                            <div class="data-body">
                                                                <div class="jmi-row" v-for="(a, i) in account_data_list" :key="i">
                                                                    <p class="jmi-col_20"><span class="jmi-data-head-lvl">{{ a.date }}</span></p>
                                                                    <p class="jmi-col_50"><span class="jmi-data-head-lvl" :class="a.particular">{{ a.particular }}</span> (<span class="account-data-inv">{{ a.inv }}</span>)</p>
                                                                    <p class="jmi-col_15"><span class="jmi-data-head-lvl">{{ a.debit }}</span></p>
                                                                    <p class="jmi-col_15"><span class="jmi-data-head-lvl">{{ a.credit }}</span></p>
                                                                </div>
                                                            </div>
                                                            <div class="jmi-row">
                                                                <p class="jmi-col_70"><span class="ac-ttl-txt">Total:</span></p>
                                                                <p class="jmi-col_15 ac-ttl-debit">20000</p>
                                                                <p class="jmi-col_15 ac-ttl-credit">20000</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-tab>
                                        <b-tab title="Business">
                                            <div class="business-section">
                                                <div class="business-section-inner">
                                                    <p class="business-data"><span class="lvl">Vat Registration Number:</span><span class="lvl-value">223558 663 12158</span></p>
                                                    <p class="business-data"><span class="lvl">Trade License:</span><span class="lvl-value">223558 663 12158</span></p>
                                                    <p class="business-data"><span class="lvl">VIN:</span><span class="lvl-value">223558 663 12158</span></p>
                                                    <p class="business-data"><span class="lvl">TIN:</span><span class="lvl-value">223558 663 12158</span></p>
                                                    <p class="business-data"><span class="lvl">BIN:</span><span class="lvl-value">223558 663 12158</span></p>
                                                </div>
                                            </div>
                                        </b-tab>
                                        <b-tab title="Location">
                                            <div class="location-section">
                                                <div class="location-section-inner">
                                                    <gmap-map :center="center" :zoom="14"
                                                        style="width: 100%; height: 300px; border-radius: 2px;"
                                                        >
                                                        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position"
                                                            @click="centerClick(m, index)"
                                                        ></gmap-marker>

                                                        <gmap-info-window
                                                            :options="infoOptions"
                                                            :position="infoWindowPos"
                                                            :opened="infoWinOpen"
                                                            @closeclick="infoWinOpen=false"
                                                        >
                                                            <div v-html="infoContent"></div>
                                                        </gmap-info-window>
                                                    </gmap-map>
                                                    <p class="location-details"><span class="icon"><i class="zmdi zmdi-pin"></i></span>63/C Lake Circus, West Panthapath, Dhaka 1205</p>
                                                    <p class="union-type"><span>Micro Union</span></p>
                                                </div>
                                            </div>
                                        </b-tab>
                                    </b-tabs>
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
import * as VueGoogleMaps from 'vue2-google-maps'

import JMIFilter from '.././../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
    components: {
        // AdvancedSearch 
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
            order_forward_modal: false,

            autocomplete_modal: null,
            autocomplete_options: [
                { label: 'label1', value: 'value1' },
                { label: 'label2', value: 'value2' }
            ],

            on_change_order_forward_area_manager: null,
            on_change_order_forward_rsm: null,
            statement_reason: null,
            outstanding_list: [
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
                {
                    inv_no: "D133HK0301001",
                    inv_date: "09/12/2020",
                    inv_outstanding: "500000"
                },
            ],
            outstanding_modal: false,
            customer_details_modal: false,
            account_data_list: [
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "INV-2231225",
                    debit: "",
                    credit: "15,330",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "cash",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Return",
                    inv: "INV-2231225",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "INV-2231225",
                    debit: "",
                    credit: "15,330",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "cash",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Return",
                    inv: "INV-2231225",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "INV-2231225",
                    debit: "",
                    credit: "15,330",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "cash",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Return",
                    inv: "INV-2231225",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "INV-2231225",
                    debit: "",
                    credit: "15,330",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "cash",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Return",
                    inv: "INV-2231225",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "INV-2231225",
                    debit: "",
                    credit: "15,330",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "cash",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Return",
                    inv: "INV-2231225",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "INV-2231225",
                    debit: "",
                    credit: "15,330",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "cash",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Return",
                    inv: "INV-2231225",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "INV-2231225",
                    debit: "",
                    credit: "15,330",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "cash",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Return",
                    inv: "INV-2231225",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "INV-2231225",
                    debit: "",
                    credit: "15,330",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "cash",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Return",
                    inv: "INV-2231225",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "INV-2231225",
                    debit: "",
                    credit: "15,330",
                },
                {
                    date: "09/12/2020",
                    particular: "Purchase",
                    inv: "cash",
                    debit: "15,330",
                    credit: "",
                },
                {
                    date: "09/12/2020",
                    particular: "Return",
                    inv: "INV-2231225",
                    debit: "15,330",
                    credit: "",
                },
            ],
            sub_total: 0.00,
            vat: 0.00,
            discount: 0.00,
            gross_total: 0.00,
            rounding_adjustment: 0.00,
            grand_total: 0.00,
            // Map Data
            center: { lat: 23.74289, lng: 90.39597 },
            markers: [
                {
                position: {
                    lat: 23.74289,
                    lng: 90.39597,
                },
                title: "Teting",
                    name: "House of Aleida Greve",
                    description: "Mymensingh, Dhaka",
                    date_build: "2016-1-1",
                },
            ],
            places: [],
            currentPlace: null,
            directionsService: null,
            directionsRenderer: null,
            InfoWindow: VueGoogleMaps.InfoWindow,
            Map: VueGoogleMaps.Map,
        }
    },
    created() {},
    mounted() {
        this.$getLocation({})
        .then( coordinates => {
            console.log(coordinates)
        })
    },
    methods: {
        onChangeSRDropdown() {
            console.log(this.on_change_SR_dropdown)
        },
        expectedDateCalendarClick() {
            console.log('expectedDateCalendarClick')
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
        orderForwardClickHandler() {
            if(this.order_forward_modal) {
                this.order_forward_modal = false
            } else {
                this.order_forward_modal = true
            }
        },
        orderRejectClickHandler() {
            console.log('orderRejectClickHandler')
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
        // Order Forward Modal
        orderForwardModalOutsideClick() {
            this.order_forward_modal = false
        },
        onChangeOrderForwardAreaManager() {
            console.log(this.on_change_order_forward_area_manager)
        },
        onChangeOrderForwardRSM() {
            console.log(this.on_change_order_forward_rsm)
        },
        cancelOrderForwardClickHandler() {
            console.log('cancelOrderForwardClickHandler')
        },
        sendOrderForwardClickHandler() {
            console.log('sendOrderForwardClickHandler')
        },
        //------------------------------------------------------------------------------------------
        // Current Outstanding Modal
        currentOutstandingClickHandler() {
            if(this.outstanding_modal) {
                this.outstanding_modal = false
            } else {
                this.outstanding_modal = true
            }
        },
        outstandingModalOutsideClick() {
            this.outstanding_modal = false
        },
        //------------------------------------------------------------------------------------------
        // Customer Details Modal
        customerDetailsClickHandler() {
            if(this.customer_details_modal) {
                this.customer_details_modal = false
            } else {
                this.customer_details_modal = true
            }
        },
        customerDetailsModalOutsideClick() {
            this.customer_details_modal = false
        },
        //------------------------------------------------------------------------------------------
        // Customer Details Modal - Location
        centerClick(marker, index) {
        console.log(marker.position.lat + '    ' + marker.position.lng + '    ' + index)
        // VueGoogleMaps.InfoWindow.open(this.Map, m);
            this.infoWindowPos = marker.position;
            this.infoContent = this.getInfoWindowContent(marker);
            console.log(this.currentMidx + '    ' + index)
            

            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == index) {
            this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
            this.infoWinOpen = true;
            this.currentMidx = index;
            }
            console.log(this.currentMidx + '    ' + index)
        },
        getInfoWindowContent(marker) {
        console.log(marker)
        return (`<div class="card" style="visibility: visible; margin: 0; border: none; box-shadow: none;">
            <!--<div class="card-image">
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
            </div> -->
            <div class="card-content" style="padding: 10px;">
            <div class="media">
                <div class="media-content">
                <!--<p class="title is-4" style="font-size:14px; color: #026CD1; font-weight: 500;">Location Name: ${marker.name}</p>-->
                <p class="title is-4" style="font-size:14px; color: #026CD1; font-weight: 500; margin-bottom: 4px;">OID102131</p>
                </div>
            </div>
            <div class="content" style="font-size: 12px; color: #111213">
                New Gulshan Pharma
                </br>
                <time datetime="2016-1-1" style="font-size: 12px; color: #707070; margin-top: 4px; display: block;">
                F R Summit (0168788300),
                </br>
                ${marker.description},
                </br>
                ${marker.date_build}
                </time>
            </div>
            </div>
        </div>`);
        },
        geolocate() {
        console.log("here");
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("here 2");
            console.log(this.markers);
            this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            };
            // this.addCurrentLocation(position)
            // this.markers.push(this.center)
        });
        this.markers.push({
            position: {
            lat: this.center.lat,
            lng: this.center.lng
            }
        })
        console.log(this.markers)
        },
        // --------------------------------------------------------------------------------------------
        // Filter - Order Approval add product modal
        searchKeyUpAddProductHandler() {
            let input = document.getElementById("order-approval-add-product");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.responer-body-filter-output')
            let txt_selector = "responer-body-filter-tag"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        }, 
    }
}
</script>

<style lang="less" scoped>
@import url('./DetailsSection.less');
</style>