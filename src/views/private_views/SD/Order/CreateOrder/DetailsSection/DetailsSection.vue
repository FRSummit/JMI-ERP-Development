<template>
    <div id="create-order-details-section" class="create-order-details-section">
        <div class="create-order-details-section-inner">
            <div class="title-section">
                <div class="row">
                    <!-- <div class="col-lg-4 col-md-4 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer ID:</span><span class="id">{{ customer_data ? customer_data.customer_id : ""}}</span><span class="customer-type">{{ customer_data ? customer_data.credit_flag === "Y" ? "Credit" : "Cash" : "No Customer" }}</span></p></div> -->
                    <!-- <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer ID:</span><span class="id">{{ customer_data ? customer_data.display_code : ""}}</span><span class="customer-type" v-if="customer_data">{{ customer_data }}</span></p></div> -->
                    <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer ID:</span><span class="id">{{ customer_data ? customer_data.display_code : ""}}</span><span class="customer-type" v-if="customer_data ? (customer_data.credit_flag ? true : false) : false">{{ customer_data ? (customer_data.credit_flag ? (customer_data.credit_flag === "Y" ? "Credit" : "Cash") : '') : "" }}</span></p></div>
                    <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer Name:</span><span class="jmi-lvl-value">{{ customer_data ? customer_data.display_name : "" }}</span></p></div>
                </div>
                <div class="row">
                    <!-- <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><span class="jmi-lvl-value address">{{ customer_data ? customer_data.customer_info.customer_address !== null ? customer_data.customer_info.customer_address : "Null" : "" }}</span></p></div> -->
                    <!-- <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><input class="jmi-lvl-value-input" v-model="customer_address" /></p></div> -->
                    <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><input class="jmi-lvl-value-input" v-model="SELECTED_CUSTOMER_ADDRESS" /></p></div>
                    <!-- <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title">Territory: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_70">{{ customer_data ? customer_data.customer_area_info.sales_force.get_sales_area.area_name : "" }}</span></p></div>                       -->
                    <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title">Order Territory: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_70" style="float: right;">
                        <div class="select-options jmi-select-options-section" style="width: 100%;">
                            <span class="right-icon"><i class="fas fa-chevron-right"></i></span>
                                <select title="Pick a customer" id="region_area_tt_list" class="selectpicker jmi-select-option" v-model="on_change_reg_area_tt" @change="onChangeRegAreaTTDropdown()" style="">
                                    <optgroup label="" v-if="checkReagionAreaTT(REGION_AREA_TERRITORY_LIST).reg.length > 0">
                                        <option v-for="(rat, m) in checkReagionAreaTT(REGION_AREA_TERRITORY_LIST).reg" :key="m" :value="rat.id"><span v-if="rat.lvl === '3'">{{ rat.display_code }} - {{ rat.area_short_name }}</span></option>
                                    </optgroup>
                                    <optgroup label="" v-if="checkReagionAreaTT(REGION_AREA_TERRITORY_LIST).area.length > 0" id="area-lvl-select-option">
                                        <option v-for="(rat, m) in checkReagionAreaTT(REGION_AREA_TERRITORY_LIST).area" :key="m" :value="rat.id"><span v-if="rat.lvl === '4'">{{ rat.display_code }} - {{ rat.area_short_name }}</span></option>
                                    </optgroup>
                                    <optgroup label="" v-if="checkReagionAreaTT(REGION_AREA_TERRITORY_LIST).tt.length > 0">
                                        <option v-for="(rat, m) in checkReagionAreaTT(REGION_AREA_TERRITORY_LIST).tt" :key="m" :value="rat.id"><span v-if="rat.lvl === '5'">{{ rat.display_code }} - {{ rat.area_short_name }}</span></option>
                                    </optgroup>
                            </select>
                        </div>
                    </span></p></div>                      
                </div>
            </div>

            <div class="header-summery-section">
                <div class="header-summery-section-inner">


                    <!-- <div class="row"> -->
                        <!-- <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Current Outstanding:</span><span class="jmi-lvl-value url jmi-no-underline">{{ customer_data ? customer_data.current_due !== null ? customer_data.current_due : "00" : "" }}</span></p></div> -->
                        <!-- <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Order Placed:</span> <span class="jmi-lvl-value"></span></p></div> -->
                        <!-- <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Status:</span> <span class="jmi-lvl-value">Pending</span></p></div> -->
                        <!-- <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title">Area: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80"></span></p></div> -->
                        <!-- <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title">Territory: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_70">{{ customer_data ? customer_data.customer_area_info.sales_force.get_sales_area.area_name : "" }}</span></p></div> -->
                    <!-- </div> -->
                    <div class="row">
                        <!-- <div class="col-lg-3 col-md-6 col-sm-12"><p class="jmi-title">Territory: <span class="jmi-lvl-value">{{ customer_data ? customer_data.customer_area_info.sales_force.get_sales_area.area_name : "" }}</span></p></div> -->
                        <div class="col-lg-3 col-md-6 col-sm-12"><p class="am">AM: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80">{{ customer_data ? customer_data.customer_area_info.sales_force.manager_info.name : "" }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-12"><p class="mio">MIO: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80">{{ customer_data ? customer_data.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info.name : "" }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="sr" style="display: table-cell; width: 33%; padding-right: 20px; padding-bottom: 0px; line-height: 1;">
                                <span class="jmi-lvl">SR: </span>
                                <p class="selectpicker-pera"> 
                                    <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_70">{{ selected_sr }}</span>
                                    <span class="sr-modal" v-if="sr_add_modal">
                                        <span class="sr-modal-inner" v-click-outside="srModalSectionOutsideClick">
                                            <span class="jmi-title">Select SR</span>
                                            <span class="sr-loop" v-for="(sr, m) in sr_list" :key="m">
                                                <span  class="sr-name" @click="selectedSRClickHandler(sr.name)">{{ sr.name }}</span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <span class="sr-add-icon" @click="srAddIconClickHandler"><i class="zmdi zmdi-plus"></i></span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 right_side_row"><p class="delivery-dt"><span class="jmi-lvl" style="font-size: 15px;">Delivery:</span> <span class="jmi-lvl-value"><input type="date" v-model="delivery_dt" id="expected-delivery-date" placeholder="09/12/2020"/></span></p></div>
                    </div>
                    <!-- <div class="row"> -->
                        <!-- <div class="col-lg-3 col-md-6 col-sm-12"><p class="delivery-dt"><span class="jmi-lvl">Exp D D:</span> <span class="jmi-lvl-value"><input type="date" id="expected-delivery-date" placeholder="09/12/2020"/></span></p></div> -->
                    <!-- </div> -->
                </div>
            </div>
            <!-- Order Table -->
            <div class="order-table">
                <div class="order-table-inner">
                    <table class="table jmi-order-table" id="order-data-table" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Trade Price<span class="with-vat">(With VAT)</span></th>
                                <th>Quantity</th>
                                <th>Discount</th>
                                <th>Bonus</th>
                                <th>Total Price</th>
                                <th style="min-width: 70px;"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <div id="progressbar" class="jmi-progressbar" v-if="ORDERED_TABLE_DATA__INIT_LIST.length <= 0">
                                <!-- <v-progress-circular indeterminate color="primary"></v-progress-circular> -->
                                    <p v-if="!customer_data">Please select a customer</p>
                                    <p v-if="customer_data && !ORDERED_TABLE_DATA__INIT_LIST.length">Please add a product</p>
                            </div>
                            <div class="table-data-rows" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">
                                <tr v-for="(data, i) in ORDERED_TABLE_DATA__INIT_LIST" :key="i" :class="data.row_class ? data.row_class : ''">
                                    <!-- Name Column -->
                                    <td>
                                        <span>{{ data ? data.prod_name : "" }}</span>
                                        <span v-if="!data.row_class">Unit Price: {{ data ? data.base_tp : "" }}</span>
                                        <span v-if="data.row_class" :class="data.row_class">Free Product</span>
                                    </td>
                                    <!-- Trade Price Column -->
                                    <td>
                                        <span v-if="!data.row_class">{{ data ? Number(parseFloat(data.base_tp) + parseFloat(data.base_vat)).toFixed(2) : 0 }}</span>
                                        <span v-if="data.row_class"></span>
                                    </td>
                                    <!-- Quantity Column -->
                                    <td>
                                        <span class="quantity-setup" v-if="!data.row_class">
                                            <span class="qty-increase" @click="decreaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-minus" :class="data.quantity <= 1 ? 'jmi-deactive-btn' : ''"></i></span>
                                            <input :id="'ordered-add-modal-qty-' + i" class="qty jmi-tr-td-input-qty" type="number" placeholder="00" :value="data ? (data.quantity ? data.quantity : 0) : 0" v-on:keyup="quantityKeyUp_ordered_table(data, $event, i)" min="1" step="1" v-on:keydown="quantityKeyDown_ordered_table($event, i)" pattern="[0-9]*">
                                            <span class="qty-decrease" @click="increaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span>
                                        </span>
                                    </td>
                                    <!-- Discount Column -->
                                    <td>
                                        <span v-if="!data.row_class">{{ data ? (data.offer_2.discount_percentage ? Number(data.offer_2.discount_percentage).toFixed(2) : 0) : 0 }}%</span>
                                        <span v-if="data.row_class"></span>
                                    </td>
                                    <!-- BOnus Column -->
                                    <td>
                                        <span v-if="!data.row_class">{{ data ? (data.offer_2.bonus_qty ? parseInt(data.quantity / data.offer_2.bonus_on) : 0) : 0 }}</span>
                                        <span v-if="data.row_class">{{ data ? (data.offer_2.free_prod_qty ? parseInt(data.quantity / data.offer_2.free_req_qty) : 0) : 0 }}</span>
                                    </td>
                                    <!-- Total Price Column -->
                                    <td class="total_price">
                                        <span v-if="!data.row_class">{{ data ? (data.base_tp * data.quantity).toFixed(2) : 0 }}</span>
                                        <span v-if="data.row_class"></span>
                                    </td>
                                    <td class="row-action jmi-tr-td-option" style="min-width: 70px;">
                                        <span v-if="!data.row_class" class="icon delete-icon" @click="deleteOrderitemClickHandler(data, i)"><i class="fas fa-trash-alt"></i></span>
                                    </td>
                                </tr>
                            </div>
                            <!-- Bottom Total Section -->
                            <div class="jmi-table-subtotal-btm-section">
                                <tr class="subtotal bottom-total" style="border-top: 1px solid #BFCFE2;">
                                    <td style="width: 50%;"><span class="add-order-attachment-section add-order" @click="addOrderClickHandler" v-if="customer_data"><i class="zmdi zmdi-plus"></i>Add Products</span></td>
                                    <td style="width: 25%;"><span v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">Subtotal</span></td>
                                    <td style="width: 15%;"><span v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">{{ Number(sub_total).toFixed(2) }}</span></td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="subtotal bottom-total" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">
                                    <td style="width: 50%;"><span class="add-order-attachment-section add-order" @click="addCommentClickHandler"><i class="zmdi zmdi-plus"></i>Order Note</span></td>
                                    <td style="width: 25%;">(+) Vat</td>
                                    <td style="width: 15%;">{{ Number(vat_total).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="subtotal bottom-total" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">
                                    <td style="width: 50%;"></td>
                                    <td style="width: 25%;">Gross Total</td>
                                    <td style="width: 15%;">{{ Number(gross_total).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="subtotal bottom-total" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">
                                    <td style="width: 50%;"><span class="add-order-attachment-section add-attachment" @click="addAttachmentClickHandler"><i class="zmdi zmdi-attachment-alt"></i>Attachment</span></td>
                                    <td style="width: 25%;">(-) Discount</td>
                                    <td style="width: 15%;">{{ Number(discount_total).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="subtotal bottom-total" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">
                                    <td style="width: 50%;"></td>
                                    <td style="width: 25%;">(-) SP Discount</td>
                                    <td style="width: 15%;">{{ Number(special_discount).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="grand-total bottom-total" style="border-top: 1px solid #BFCFE2;" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">
                                    <td style="width: 50%;"></td>
                                    <td style="width: 25%;">Grand Total</td>
                                    <td style="width: 15%;">{{ Number(grand_total).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Bottom Subtotal & Attachment Section -->
            <div class="submit-section">
                <div class="submit-section-inner">
                    <span class="cancel-order" @click="cancelOrderClickHandler" v-if="ORDERED_TABLE_DATA__INIT_LIST.length > 0">Cancel Order</span>
                    <span class="update-order" @click="updateOrderClickHandler" v-if="UPDATE_BTN_TRUE">Update Order</span>
                    <span class="proceed-order" @click="proceedOrderClickHandler" v-if="!UPDATE_BTN_TRUE && ORDERED_TABLE_DATA__INIT_LIST.length > 0">Proceed Order</span>
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
                                <p class="name">{{ customer_data ? (customer_data.display_name) : 'Not Found' }}<span class="tik-icon"><i class="zmdi zmdi-check"></i></span></p>
                                <p class="id">{{ customer_data ? (customer_data.display_code) : 'Not Found' }}</p>
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
                                        <tr class="jmi-add-product-autofill-header-row">
                                            <td><span class="td-span-title">Name</span></td>
                                            <td><span class="td-span-title">Price</span></td>
                                            <td></td>
                                            <td><span class="td-span-title">Option</span></td>
                                        </tr>
                                    </div>
                                    <div class="response-body">
                                        <div id="progressbar" class="jmi-progressbar" v-if="!auto_field_data">
                                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                                        </div>
                                        <tr class="responer-body-filter-output" v-for="(data, i) in auto_field_data" :key="i">
                                            <td>
                                                <!-- <span class="responer-body-filter-tag">{{ data ? data.product_info.prod_name : "" }}</span> -->
                                                <span class="responer-body-filter-tag">{{ data ? data.prod_name : "" }}</span>
                                                <span>{{ data ? (data.display_code ? ('Code: ' + data.display_code) : '') : "" }} {{ data ? (data.offer ? ('| ' + data.offer) : '') : "" }}<span class="responer-body-filter-tag-id hide" style="display: inline-block; margin-left: 2px;">{{ data ? (data.prod_id ? (' | ID: ' + data.prod_id) : '') : "" }}</span></span>
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
                                        <span>Code: {{ data ? (data.display_code ? data.display_code : data.prod_id) : "" }}<span class="responer-body-filter-tag-id hide" style="display: inline-block; margin-left: 2px;"> | ID: {{ data ? (data.prod_id ? (data.prod_id) : '') : "" }}</span></span>
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
                    <div class="popup-cancel-btn-section" @click="cancelOrderModalClickHandler">
                        <span>Cancel</span>
                    </div>
                    <div class="popup-confirm-btn-section" @click="proceedOrderModalClickHandler">
                        <span>Proceed</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Order Creating Modal -->
        <div class="modal-popup-section order-proceed-modal" v-if="order_creating_progressbar">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <div id="progressbar" class="jmi-progressbar">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    <p>{{ order_creating_progressbar_msg ? order_creating_progressbar_msg : 'Order creating inprogress' }}</p>
                </div>
            </div>
        </div>
        <!-- Comment Popup -->
        <div class="modal-popup-section order-proceed-modal order-create-comment" v-if="add_comment_popup">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <p class="comment-text">Order Note</p>
                <div class="popup-submit-section">
                    <textarea class="customer_comment" v-model="customer_comment" cols="30" rows="10"></textarea>
                    <div class="popup-cancel-btn-section" @click="cancelCommentModalClickHandler">
                        <span>Cancel</span>
                    </div>
                    <div class="popup-confirm-btn-section" @click="proceedCommentModalClickHandler">
                        <span>Proceed</span>
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
            customer_comment: null,
            delivery_dt: null,
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
            special_discount: 0.00,
            grand_total: 0.00,
            UPDATE_BTN_TRUE: false,
            UPDATE_ORDER_CLICKED: false,
            // Modal-Popup
            proceed_modal_popup: false,
            ALL_PRODUCTS_LIST: [],
            ALL_PRODUCTS_LIST_2: [],
            REGION_AREA_TERRITORY_LIST: [],
            on_change_reg_area_tt: null,
            SALSE_AREA_ID: null,
            order_creating_progressbar: false,
            order_creating_progressbar_msg: null,
            CUSTOMER_ID_FROM_LEFT: null,
            add_comment_popup: false,
            SELECTED_CUSTOMER_ADDRESS: null
        }
    },
    async created() {},
    async mounted() {
        await this.DIC_WISE_USERS__FROM_SERVICE()
        await this.getAllProduct()
        await this.AREA_LIST_BY_USER__FROM_SERVICE()
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
        // Ordered Table Quantity input keyup & keydown
        quantityKeyUp_ordered_table(data, value, i) {
            console.log(value.keyCode)
            let selector = document.querySelector('#order-data-table #ordered-add-modal-qty-' + i)
            if(parseInt(selector.value) === 0) {
                selector.value = 1
            } else if((selector.value).toString() === '') {
                selector.value = 1
            }
            data.quantity = selector.value
            this.UPDATE_BTN_TRUE = true
            this.createSubtotalCalculation()
        },
        quantityKeyDown_ordered_table(value, i) {
            console.log(document.querySelector('#order-data-table #ordered-add-modal-qty-' + i).value)
            if(value.keyCode === 190 || value.keyCode === 110) {
                value.preventDefault()
            }
        },
        // Delete Table Row's Single Product/Order
        deleteOrderitemClickHandler(data, index) {
            console.log(data + '    ' + index)
            console.log(data.prod_id)
            if(this.ORDERED_TABLE_DATA__INIT_LIST.length > 0) {
                for (let [i, tt] of this.ORDERED_TABLE_DATA__INIT_LIST.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.ORDERED_TABLE_DATA__INIT_LIST.splice(i, 1);
                        for(let [x, y] of this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.entries()) {
                            if (y.prod_id === data.prod_id) {
                                this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.splice(x, 1);
                            }
                        }
                        this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.push(data)
                        console.log(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length)
                        // Free Product row delete
                        if(data.offer_type === "free") {
                            this.ORDERED_TABLE_DATA__INIT_LIST.splice(i, 1);
                        }
                    }
                }
            }
            this.createSubtotalCalculation()
            // this.UPDATE_BTN_TRUE = true
        },
        //------------------------------------------------------------------------------------------
        // Add Product/Order , Atachment Row
        async addOrderClickHandler() {
            this.SELECTED_ORDERED_PRODUCTS__INIT_LIST = []
            if(this.add_order_modal) {
                this.add_order_modal = false
            } else {
                this.add_order_modal = true
                await this.ADD_PRODUCTS_DATA_LIST__FROM_SERVICE()
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
        async updateOrderClickHandler() {
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
            await this.FIND_PRODUCT_OFFER__FROM_SERVICE(prod_db_list)
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
            console.log(value.keyCode)
            let selector = document.querySelector('#order-add-modal-qty-' + i)
            if(parseInt(selector.value) === 0) {
                selector.value = 1
            } else if((selector.value).toString() === '') {
                selector.value = 1
            }
            data.quantity = selector.value
        },
        quantityKeyDown_modal(value, i) {
            console.log(document.querySelector('#order-add-modal-qty-' + i).value)
            if(value.keyCode === 190 || value.keyCode === 110) {
                value.preventDefault()
            }
        },
        // Add Selected Ordered Product
        addProductFromAutofieldResponseClickHandler(data, index) {
            console.log('added ordered product from auto field: ' + data + '    ' + index)
            console.log(data)
            let product = {
                            id: data.id,
                            prod_id: data.prod_id,
                            prod_class: data.prod_class,
                            base_tp: data.base_tp,
                            prod_name: data.prod_name,
                            prod_code: data.prod_code,
                            code_id: data.code_id,
                            element: data.element,
                            display_code: data.display_code,
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
            console.log(data)
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
        async addItemsFromModalClickHandler() {
            if(this.SELECTED_ORDERED_PRODUCTS__STORE.length > 0) {
                for(let i=0; i<this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.length; i++) {
                    this.SELECTED_ORDERED_PRODUCTS__STORE.push(this.SELECTED_ORDERED_PRODUCTS__INIT_LIST[i])
                    this.UPDATE_BTN_TRUE = true
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
        addCommentClickHandler() {
            if(this.add_comment_popup) {
                this.add_comment_popup = false
            } else {
                this.add_comment_popup = true
            }
        },
        cancelCommentModalClickHandler() {
            this.add_comment_popup = false
        },
        proceedCommentModalClickHandler() {
            console.log(this.customer_comment)
            this.add_comment_popup = false
        },
        // ------------------------------------------------------------------------------------------
        // SPLICE PRODUCT 
        splice_product() {
                    if(this.SELECTED_ORDERED_PRODUCTS__STORE.length > 0) {
                        for(let i=0; i<this.auto_field_data.length; i++) {
                            for(let j=0; j<this.SELECTED_ORDERED_PRODUCTS__STORE.length; j++) {
                                if((this.auto_field_data[i].prod_id).toString() === (this.SELECTED_ORDERED_PRODUCTS__STORE[j].prod_id).toString()) {
                                    this.auto_field_data.splice(i, 1)
                                    console.log((this.auto_field_data[i].prod_id).toString() + '    ' + (this.SELECTED_ORDERED_PRODUCTS__STORE[j].prod_id).toString())
                                }
                            }
                        }
                    }
                    // Add deleted product
                    if(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length > 0) {
                        console.log('length has')
                        console.log(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[0])
                        for(let i=0; i<this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                            // this.auto_field_data.push(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i])
                            for(let j=0; j<this.ALL_PRODUCTS_LIST_2.length; j++) {
                                if((this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_id).toString() === (this.ALL_PRODUCTS_LIST_2[j].prod_id).toString()) {
                                    console.log('matched')
                                    let product = {
                                        base_tp: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].base_tp,
                                        base_vat: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].base_vat,
                                        code_id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].code_id,
                                        display_code: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].display_code,
                                        element: {
                                            code_id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].element.code_id,
                                            element_name: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].element.element_name,
                                            id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].element.id,
                                        },
                                        id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].id,
                                        offer: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].offer,
                                        prod_class: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_class,
                                        prod_code: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_code,
                                        prod_id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_id,
                                        prod_name: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_name,
                                    }
                                    this.auto_field_data.push(product)
                                }
                            }
                        }
                    }
        },
        // ------------------------------------------------------------------------------------------
        // SPECIAL DISCOUNT
        CHECK_SPECIAL_DISCOUNT(prod_list) {
            let regular_prods_line_total = null
            console.log(prod_list.length)
            console.log(this.ORDERED_TABLE_DATA__INIT_LIST.length)
            for(let i=0; i<prod_list.length; i++) {
                console.log(prod_list[i].is_regular_product)
                if(prod_list[i].is_regular_product === 'Y') {
                    regular_prods_line_total += parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].base_tp * this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity)
                    console.log(regular_prods_line_total)
                }
            }
            console.log(regular_prods_line_total)
            if(regular_prods_line_total) {
                this.CHECK_ORDER_OFFER_SPECIAL_DISCOUNT__FROM_SERVICE(regular_prods_line_total)
            }
        },
        // ------------------------------------------------------------------------------------------
        // Service Implementation
        async ADD_PRODUCTS_DATA_LIST__FROM_SERVICE() {
            await service.getSearchProductDataList_CreateOrderDetailsSection()
                .then(res => {
                    console.log(res.data)
                    this.auto_field_data = res.data.product_list
                    this.ALL_PRODUCTS_LIST = res.data.product_list
                    // this.ALL_PRODUCTS_LIST_2 = this.ALL_PRODUCTS_LIST
                    console.log(this.SELECTED_ORDERED_PRODUCTS__STORE.length)
                    console.log(this.auto_field_data.length)
                    console.log(this.ALL_PRODUCTS_LIST.length)
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
                        console.log('length has')
                        console.log(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[0])
                        // for(let i=0; i<this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                        //     for(let j=(i+1); j<this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length; j++) {
                        //         if(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_id === this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[j].prod_id) {
                        //             this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.splice(i, 1)
                        //         }
                        //     }
                        // }
                        for(let i=0; i<this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                            // this.auto_field_data.push(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i])
                            for(let j=0; j<this.ALL_PRODUCTS_LIST_2.length; j++) {
                                if(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_id === this.ALL_PRODUCTS_LIST_2[j].prod_id) {
                                    console.log('matched')
                                    let product = {
                                        base_tp: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].base_tp,
                                        base_vat: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].base_vat,
                                        code_id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].code_id,
                                        display_code: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].display_code,
                                        element: {
                                            code_id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].element.code_id,
                                            element_name: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].element.element_name,
                                            id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].element.id,
                                        },
                                        id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].id,
                                        offer: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].offer,
                                        prod_class: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_class,
                                        prod_code: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_code,
                                        prod_id: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_id,
                                        prod_name: this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i].prod_name,
                                    }
                                    this.auto_field_data.push(product)
                                }
                            }
                        }
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log('Server Problem 500. Please hit again.')
                    }
                })
        },
        async DIC_WISE_USERS__FROM_SERVICE() {
            await service.getDICWiseUsers_MonthlyDeliveryPlan()
                .then(res => {
                    console.log(res.data)
                    this.sr_list = res.data.users.da
                })
                .catch(err => {
                    if(err) {
                        console.log('Server Problem 500. Please hit again.')
                    }
                })
        },
        async FIND_PRODUCT_OFFER__FROM_SERVICE(prod_db_list) {
            let sbu_id = parseInt(JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.sbu_id)
            let customer_id = parseInt(this.customer_data ? this.customer_data.customer_id : 0)
            let yyyy = new Date().getFullYear()
            let mm = (new Date().getMonth() + 1) < 10 ? ("0" + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)
            // let dd = (new Date().getDate() + 1) < 10 ? ("0" + (new Date().getDate() + 1)) : (new Date().getDate() + 1) 
            let dd = (new Date().getDate()) < 10 ? ( "0" + (new Date().getDate()) ) : new Date().getDate() 
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
                .catch(err => {
                    if(err) {
                        console.log('Server Problem 500. Please hit again.')
                    }
                })
            this.CHECK_SPECIAL_DISCOUNT(this.RESPONSE_ORDERED_PRODUCTS__STORE)
        },
        async CHECK_ORDER_OFFER_SPECIAL_DISCOUNT__FROM_SERVICE(regular_prods_line_total) {
            let date = this.delivery_dt ? this.delivery_dt : new Date()
            this.special_discount = 0.00
            await service.getGetOrderOffer_Special_Discount_OrderApproval(regular_prods_line_total, date)
                .then(res => {
                    console.log(res.data)
                    this.special_discount = res.data.discount_data.discounted_tk
                    this.createSubtotalCalculation()
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.special_discount = 0.00
                    }
                })
        },
        async CREATE_ORDER__FROM_SERVICE(prod_db_list) {
            let sbu_id = parseInt(JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils.sbu_id)
            let customer_id = parseInt(this.customer_data ? this.customer_data.customer_id : 0)
            console.log(prod_db_list)
            console.log(sbu_id + '  ' + customer_id + '  ' + this.on_change_reg_area_tt)

            console.log(this.on_change_reg_area_tt)

            if(this.on_change_reg_area_tt) {
                // await service.getCreateOrder_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, this.createYYYYDDMM(), this.on_change_reg_area_tt, this.customer_address, this.customer_comment)
                await service.getCreateOrder_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, this.createYYYYDDMM(), this.on_change_reg_area_tt, this.SELECTED_CUSTOMER_ADDRESS, this.customer_comment)
                    .then(res => {
                        console.log(res.data)
                        this.proceed_modal_popup = false
                        if(res.data.response_code === 201) {
                            this.order_creating_progressbar_msg = res.data.message

                            setTimeout( () => {
                                this.order_creating_progressbar = false
                                this.order_creating_progressbar_msg = null
                            }, 1000)
                        }
                        // this.$router.push('/features/local_sales/order_approval')
                        this.defaultAllThisComponentData()
                    }).catch(err => {
                        alert('Order creating problem : ' + err)
                        this.order_creating_progressbar = false
                    })
            } else {
                this.order_creating_progressbar_msg = 'You forgot to select territory. Please add one from Order Territory.'

                setTimeout( () => {
                    this.order_creating_progressbar = false
                    this.order_creating_progressbar_msg = null
                }, 2500)
            }
            

        },
        async getAllProduct() {
            await service.getSearchProductDataList_CreateOrderDetailsSection()
                .then(res => {
                    // console.log(res.data.product_list)
                    this.ALL_PRODUCTS_LIST_2 = res.data.product_list
                    return res.data.product_list
                })
                .catch(err => {
                    if(err) {
                        console.log('Server Problem 500. Please hit again.')
                    }
                })
        },
        async AREA_LIST_BY_USER__FROM_SERVICE() {
            console.log(this.CUSTOMER_ID_FROM_LEFT)
            let customer_id = this.CUSTOMER_ID_FROM_LEFT ? this.CUSTOMER_ID_FROM_LEFT : parseInt(this.customer_data ? this.customer_data.customer_id : 0)
            console.log(customer_id)
            await service.getAreaListByUser_CreateOrderDetailsSection(customer_id)
                .then(res => {
                    console.log(res.data.sales_areas)
                    this.REGION_AREA_TERRITORY_LIST = []
                    if(res.data.sales_areas) {
                        this.REGION_AREA_TERRITORY_LIST = res.data.sales_areas
                    }
                    /*setTimeout( () => {
                        var options = document.getElementById("region_area_tt_list").options;
                        for (var i = 0; i < options.length; i++) {
                            if (options[i].text == "DHK1 - DHAKA-A") {
                                options[i].selected = true;
                                break;
                            }
                        }
                    }, 1000)*/
                    if(this.REGION_AREA_TERRITORY_LIST.length === 1) {
                        setTimeout( () => {
                            var options = document.getElementById("region_area_tt_list").options;
                            // for (var i = 0; i < options.length; i++) {
                            //     if (options[i].text == "DHK1 - DHAKA-A") {
                                    options[0].selected = true;
                                    this.on_change_reg_area_tt = this.REGION_AREA_TERRITORY_LIST[0].id
                                //     break;
                                // }
                            // }
                        }, 100)
                    } else {
                        console.log('Else else')
                        setTimeout( () => {
                            document.querySelector('#region_area_tt_list #area-lvl-select-option option:first-child').selected = true
                            console.log(document.querySelector('#region_area_tt_list #area-lvl-select-option option:first-child'))
                        }, 2000)
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log('Server Problem 500. Please hit again.')
                    }
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
                this.sub_total += parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].base_tp) * this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity
                this.vat_total += parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].base_vat) * this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity
                this.discount_total += parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].base_tp * this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity) - (parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].price_now_per_qty) * this.ORDERED_TABLE_DATA__INIT_LIST[i].quantity)
            }
            this.gross_total = this.sub_total + this.vat_total
            this.grand_total = this.sub_total + this.vat_total - this.discount_total - this.special_discount
        },
        // -------------------------------------------------------
        async GENERATE_ORDERED_PRODUCTS_DETAILS_LIST_FROM_PRODUCT_OFFER_RESPONSE() {
            // await this.ADD_PRODUCTS_DATA_LIST__FROM_SERVICE()
            // let prods = []
            // prods = await this.getAllProduct()
            console.log(this.RESPONSE_ORDERED_PRODUCTS__STORE)
            console.log(this.ALL_PRODUCTS_LIST_2.length)
            // console.log(prods)
            if(this.UPDATE_ORDER_CLICKED) {
                this.ORDERED_TABLE_DATA__INIT_LIST = []
                this.UPDATE_ORDER_CLICKED = false
            }
            if(this.SELECTED_ORDERED_PRODUCTS__STORE.length > 0 && this.RESPONSE_ORDERED_PRODUCTS__STORE.length > 0) {
                // for (let i=0; i<this.SELECTED_ORDERED_PRODUCTS__STORE.length; i++) {
                for (let i=0; i<this.ALL_PRODUCTS_LIST_2.length; i++) {
                    for(let j=0; j<this.RESPONSE_ORDERED_PRODUCTS__STORE.length; j++) {
                        if( parseInt(this.ALL_PRODUCTS_LIST_2[i].prod_id) === parseInt(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].prod_id) ) {
                            let product = {
                                    // prod_id             : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].prod_id,
                                    // prod_name           : this.SELECTED_ORDERED_PRODUCTS__STORE[i].prod_name,
                                    // base_tp             : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].base_tp,
                                    // price_now_per_qty   : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].price_now_per_qty,
                                    // base_vat            : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].base_vat,
                                    // line_total          : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].line_total,
                                    // vat_total           : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].vat_total,
                                    // quantity            : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].quantity,
                                    // offer_type          : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type,
                                    // offer               : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer,
                                    // row_class           : ''
                                    base_tp: this.ALL_PRODUCTS_LIST_2[i].base_tp,
                                    base_vat: this.ALL_PRODUCTS_LIST_2[i].base_vat,
                                    code_id: this.ALL_PRODUCTS_LIST_2[i].code_id,
                                    display_code: this.ALL_PRODUCTS_LIST_2[i].display_code,
                                    element: this.ALL_PRODUCTS_LIST_2[i].element ?  {
                                        code_id: this.ALL_PRODUCTS_LIST_2[i].element ? this.ALL_PRODUCTS_LIST_2[i].element.code_id : null,
                                        element_name: this.ALL_PRODUCTS_LIST_2[i].element ? this.ALL_PRODUCTS_LIST_2[i].element.element_name : null,
                                        id: this.ALL_PRODUCTS_LIST_2[i].element ? this.ALL_PRODUCTS_LIST_2[i].element.id : null,
                                    } : null,
                                    id: this.ALL_PRODUCTS_LIST_2[i].id,
                                    offer: this.ALL_PRODUCTS_LIST_2[i].offer,
                                    prod_class: this.ALL_PRODUCTS_LIST_2[i].prod_class,
                                    prod_code: this.ALL_PRODUCTS_LIST_2[i].prod_code,
                                    prod_id: this.ALL_PRODUCTS_LIST_2[i].prod_id,
                                    prod_name: this.ALL_PRODUCTS_LIST_2[i].prod_name,

                                    price_now_per_qty: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].price_now_per_qty,
                                    line_total: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].line_total,
                                    vat_total: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].vat_total,
                                    quantity: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].quantity,
                                    offer_type: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type,
                                    offer_2: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer,
                                    row_class: '',
                            }
                            this.ORDERED_TABLE_DATA__INIT_LIST.push(product)
                            console.log(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type)

                            // FOR FREE PRODUCT ENTRY
                            if(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type === "free") {
                                console.log(j + '    free    ' + this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer.free_prod_id)
                                console.log(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer.free_prod_id)
                                console.log(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer)
                                console.log(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_2)
                                console.log(this.ALL_PRODUCTS_LIST_2.length)
                                for(let i=0; i<this.ALL_PRODUCTS_LIST_2.length; i++) {
                                    if(parseInt(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer.free_prod_id) === parseInt(this.ALL_PRODUCTS_LIST_2[i].prod_id)) {
                                        console.log('offer')
                                        console.log(this.ALL_PRODUCTS_LIST_2[i].prod_id)
                                        console.log(this.ALL_PRODUCTS_LIST_2[i].prod_name)
                                        console.log(this.RESPONSE_ORDERED_PRODUCTS__STORE[j].quantity)
                                        
                                        let ferr_product = {
                                                /*prod_id             : this.ALL_PRODUCTS_LIST[i].prod_id,
                                                prod_name           : this.ALL_PRODUCTS_LIST[i].prod_name,
                                                // base_tp             : this.RESPONSE_ORDERED_PRODUCTS__STORE[i].base_tp,
                                                // price_now_per_qty   : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].price_now_per_qty,
                                                // base_vat            : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].base_vat,
                                                // line_total          : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].line_total,
                                                // vat_total           : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].vat_total,
                                                base_tp             : 0,
                                                price_now_per_qty   : 0,
                                                base_vat            : 0,
                                                line_total          : 0,
                                                vat_total           : 0,
                                                quantity            : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].quantity,
                                                offer_type          : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type,
                                                offer               : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer,
                                                row_class           : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type*/
                                                base_tp: 0,
                                                base_vat: 0,
                                                code_id: this.ALL_PRODUCTS_LIST_2[i].code_id,
                                                display_code: this.ALL_PRODUCTS_LIST_2[i].display_code,
                                                element: {
                                                    code_id: this.ALL_PRODUCTS_LIST_2[i].element.code_id,
                                                    element_name: this.ALL_PRODUCTS_LIST_2[i].element.element_name,
                                                    id: this.ALL_PRODUCTS_LIST_2[i].element.id,
                                                },
                                                id: this.ALL_PRODUCTS_LIST_2[i].id,
                                                offer: this.ALL_PRODUCTS_LIST_2[i].offer,
                                                prod_class: this.ALL_PRODUCTS_LIST_2[i].prod_class,
                                                prod_code: this.ALL_PRODUCTS_LIST_2[i].prod_code,
                                                prod_id: this.ALL_PRODUCTS_LIST_2[i].prod_id,
                                                prod_name: this.ALL_PRODUCTS_LIST_2[i].prod_name,

                                                price_now_per_qty: 0,
                                                line_total: 0,
                                                vat_total: 0,
                                                quantity: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].quantity,
                                                offer_type: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type,
                                                offer_2: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer,
                                                row_class: this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type,
                                        }
                                        console.log(ferr_product)
                                        this.ORDERED_TABLE_DATA__INIT_LIST.push(ferr_product)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            console.log(this.ORDERED_TABLE_DATA__INIT_LIST)
            this.UPDATE_BTN_TRUE = false
            this.createSubtotalCalculation()
            // this.splice_product()
        },
        // -------------------------------------------------------------------------------------------------
        // Modal Popup Click Handler
        cancelOrderModalClickHandler() {
            this.proceed_modal_popup = false
        },
        async proceedOrderModalClickHandler() {
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
            this.proceed_modal_popup = false
            this.order_creating_progressbar = true
            await this.CREATE_ORDER__FROM_SERVICE(prod_db_list)
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
                
                this.customer_address = null
                this.selected_sr = null
                this.sub_total = 0.00
                this.vat_total = 0.00
                this.discount_total = 0.00
                this.gross_total = 0.00
                this.special_discount = 0.00
                this.grand_total = 0.00

        },
        createYYYYDDMM() {
            let yyyy = new Date().getFullYear()
            let mm = (new Date().getMonth() + 1) < 10 ? ("0" + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)
            // let dd = (new Date().getDate() + 1) < 10 ? ("0" + (new Date().getDate() + 1)) : (new Date().getDate() + 1) 
            let dd = (new Date().getDate() ) < 10 ? ("0" + (new Date().getDate()) ) : new Date().getDate() 
            let date = yyyy + '-' + mm + '-' + dd
            return date
        },
        checkReagionAreaTT(list) {
            let reg_area_tt = {
                reg: [],
                area: [],
                tt: []
            }
            for(let i=0; i<list.length; i++) {
                if(list[i].lvl === '3') {
                    reg_area_tt.reg.push(list[i])
                } else if(list[i].lvl === '4') {
                    reg_area_tt.area.push(list[i])
                } else if(list[i].lvl === '5') {
                    reg_area_tt.tt.push(list[i])
                }
            }
            // console.log(reg_area_tt)
            return reg_area_tt
        },
        onChangeRegAreaTTDropdown() {
            // this.on_change_reg_area_tt
            console.log(this.on_change_reg_area_tt)
        },
        selectREG_AREA_TT(id) {
            console.log(id)
            // let selector = document.querySelector('.selectpicker.jmi-select-option')
            if(this.REGION_AREA_TERRITORY_LIST.length > 0) {
                console.log('if')
                for(let i=0; i<this.REGION_AREA_TERRITORY_LIST.length; i++) {
                    if(this.REGION_AREA_TERRITORY_LIST[i].id === id) {
                        console.log(this.REGION_AREA_TERRITORY_LIST[i].id)
                        console.log(this.REGION_AREA_TERRITORY_LIST[i].display_code + ' - ' + this.REGION_AREA_TERRITORY_LIST[i].area_name)
                        this.on_change_reg_area_tt = this.REGION_AREA_TERRITORY_LIST[i].display_code + ' - ' + this.REGION_AREA_TERRITORY_LIST[i].area_name
                        // console.log(selector.option[i])
                        // selector.options[i].selected = true
                    }
                }
            } else {
                // this.selectREG_AREA_TT(id)
            }
        }
    },
    computed: {
        customer_address() {
            // console.log(this.customer_data ? (this.customer_data.credit_flag ? (this.customer_data.credit_flag === "Y" ? "Credit" : "Cash") : '') : "")
            return this.customer_data ? (this.customer_data.customer_address ? (this.customer_data.customer_address) : '') : ''
        }
    },
    watch: {
        // customer_data(newVal, oldVal){
        customer_data(newVal){
            this.CUSTOMER_ID_FROM_LEFT = newVal.customer_id
            this.REGION_AREA_TERRITORY_LIST = []
            this.AREA_LIST_BY_USER__FROM_SERVICE()
            // if( newVal && oldVal) {
            if( newVal) {
                // if(newVal.customer_id !== oldVal.customer_id) {
                if(newVal.customer_id) {
                    this.SALSE_AREA_ID = newVal.customer_area_info ? (newVal.customer_area_info.sales_area_id ? (newVal.customer_area_info.sales_area_id) : null) : null
                    this.SELECTED_CUSTOMER_ADDRESS = newVal.customer_address ? newVal.customer_address : ''
                    this.AREA_LIST_BY_USER__FROM_SERVICE()
                    this.defaultAllThisComponentData()
                }
            }
        },
        // ORDERED_TABLE_DATA__INIT_LIST(newVal) {

        // }
    }
}
</script>

<style lang="less" scoped>
@import url('./DetailsSection.less');
</style>