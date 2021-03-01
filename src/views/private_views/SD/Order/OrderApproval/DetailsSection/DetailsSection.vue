<template>
    <div id="order-approval-details-section" class="order-approval-details-section">
        <div class="order-approval-details-section-inner">
            <div class="title-section">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Order ID:</span><span class="id">{{ pending_order_list_by_id ? pending_order_list_by_id.order_no : "000" }}</span><span class="customer-type">Dummy: Cash</span></p></div>
                    <div class="col-lg-8 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer:</span><span class="jmi-lvl-value id url" @click="customerDetailsClickHandler">{{ pending_order_list_by_id ? (pending_order_list_by_id.sbu_customer_info ? pending_order_list_by_id.sbu_customer_info.display_name : 0) : 'Not Found' }}</span></p></div>
                </div>
                <div class="row">
                    <!-- <div class="col-lg-12 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><span class="jmi-lvl-value address">{{ pending_order_list_by_id ? (pending_order_list_by_id.sbu_customer_info.customer_info.customer_address ? pending_order_list_by_id.sbu_customer_info.customer_info.customer_address : 'Null') : 'Dummy: Address' }}</span></p></div> -->
                    <div class="col-lg-12 col-md-12 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><span class="jmi-lvl-value address">{{ pending_order_list_by_id ? (pending_order_list_by_id.sbu_customer_info ? (pending_order_list_by_id.sbu_customer_info.customer_address ? pending_order_list_by_id.sbu_customer_info.customer_address : 'Address Not Found') : 'sbu not found') : 'Dummy: Address' }}</span></p></div>
                    
                </div>
            </div>
            
            <div class="header-summery-section">
                <div class="header-summery-section-inner">
                <!-- <div class="container"> -->
                    <div class="row">
                        <!-- <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Current Outstanding:</span><span class="jmi-lvl-value url" @click="currentOutstandingClickHandler">Dummy: 200500</span></p></div> -->
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Order Placed:</span> <span class="jmi-lvl-value">Placed</span></p></div>
                        <!-- <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Status:</span> <span class="jmi-lvl-value">Pending</span></p></div> -->
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title"><span class="jmi-lvl">Status:</span> <span class="jmi-lvl-value">{{ pending_order_list_by_id ? (pending_order_list_by_id.is_approved === 'N' ? 'Pending' : '') : 'Not Found' }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title">Area: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80" >{{ pending_order_list_by_id ? (pending_order_list_by_id.sbu_customer_info ? (pending_order_list_by_id.sbu_customer_info.customer_area_info ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force.get_sales_area ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force.get_sales_area.area_name) : 'Sales Force Not Found') : 'Force Not Found') : 'Area Not Found') : 'SBU Not Found') : 'Not Found' }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title">Territory ID: <span class="jmi-lvl-value">{{ pending_order_list_by_id ? pending_order_list_by_id.territory_id : 'Not Found' }}</span></p></div>
                    </div>
                    <div class="row">
                        <!-- <div class="col-lg-3 col-md-6 col-sm-6"><p class="jmi-title">Territory: <span class="jmi-lvl-value">DHK0301-Dhanmondi 32</span></p></div> -->
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="am">AM: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80">{{ pending_order_list_by_id ? (pending_order_list_by_id.sbu_customer_info ? (pending_order_list_by_id.sbu_customer_info.customer_area_info ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force.manager_info ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force.manager_info.name) : 'Manager Not Found') : 'Force Not Found') : 'Customer Not Found') : 'SBU Not Found') : 'Not Found' }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="mio">MIO: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80">{{ pending_order_list_by_id ? (pending_order_list_by_id.sbu_customer_info ? (pending_order_list_by_id.sbu_customer_info.customer_area_info ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force.manager_info ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info ? (pending_order_list_by_id.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info.name) : 'Manager Info Not Found') : 'RSM Not Found') : 'Manager Not Found') : 'Force Not Found') : 'Customer Not Found') : 'SBU Not Found') : 'Not Found' }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <!-- <div class="sr" style="display: table-cell; width: 33%; padding-right: 20px; padding-bottom: 0; vertical-align: middle;">
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
                            </div> -->
                            <div class="sr" style="display: table-cell; width: 33%; padding-right: 20px; padding-bottom: 0; vertical-align: middle;">
                                <span class="jmi-lvl">SR: </span>
                                <p class="selectpicker-pera"> 
                                    <span class="jmi-lvl-value">{{ selected_sr }}</span>
                                    <!-- <span class="jmi-lvl-value">{{ selected_sr }}</span>
                                    <span class="sr-add-icon" @click="srAddIconClickHandler"><i class="zmdi zmdi-plus"></i></span>
                                    <span class="sr-modal" v-if="sr_add_modal">
                                        <span class="sr-modal-inner" v-click-outside="srModalSectionOutsideClick">
                                            <span class="jmi-title">Select SR</span>
                                            <span class="sr-loop" v-for="(sr, m) in sr_list" :key="m">
                                                <span  class="sr-name" @click="selectedSRClickHandler(sr.name)">{{ sr.name }}</span>
                                            </span>
                                        </span>
                                    </span> -->
                                </p>
                            </div>
                        </div>
                        <!-- <div class="col-lg-3 col-md-6 col-sm-6"><p class="delivery-dt"><span class="jmi-lvl">Exp D D:</span> <span class="jmi-lvl-value"><input type="date" id="expected-delivery-date" placeholder="09/12/2020"/></span></p></div> -->
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="delivery-dt"><span class="jmi-lvl">Exp D D:</span> <span class="jmi-lvl-value">{{ pending_order_list_by_id ? (pending_order_list_by_id.order_date ? (pending_order_list_by_id.order_date).split(' ')[0] : 'Date Not Found') : 'Not Found' }}</span></p></div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="delivery-dt"><span class="jmi-lvl">Exp D D:</span> <span class="jmi-lvl-value"><input type="date" id="expected-delivery-date" placeholder="09/12/2020"/></span></p></div>
                    </div> -->
                </div>
            </div>
            <!-- Order Table -->
            <div class="order-table">
                <div class="order-table-inner">
                    <table class="table jmi-order-table" id="order-data-table" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <!-- <th style="border: none" v-for="(head, i) in order_table_header" :key="i">{{ head }}</th>
                                <th style="border: none"></th> -->
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
                            <div class="table-data-rows">
                                <!-- <tr v-for="(data, i) in order_table_data" :key="i"> -->
                                <!-- <tr v-for="(data, i) in pending_order_list_by_id ? pending_order_list_by_id.order_details : null" :key="i"> -->
                                <div id="progressbar" class="jmi-progressbar" v-if="!ORDERED_TABLE_DATA__INIT_LIST">
                                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                                    <p>Please select an order from left</p>
                                </div>
                                <div v-if="ORDERED_TABLE_DATA__INIT_LIST">
                                    <tr v-for="(data, i) in ORDERED_TABLE_DATA__INIT_LIST" :key="i">
                                        <td>
                                            <span>{{ data.product_info ? data.product_info.prod_name : '' }}</span>
                                            <span>Unit Price: {{ data.unit_tp }}</span>
                                        </td>
                                        <td>{{ Number(parseFloat(data.unit_tp) + parseFloat(data.unit_vat)).toFixed(2) }}</td>
                                        <td>
                                            <span class="quantity-setup">
                                                <!-- <span class="qty-increase" @click="increaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-minus"></i></span> -->
                                                <span class="qty">{{ data.qty }}</span>
                                                <!-- <span class="qty-decrease" @click="decreaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span> -->
                                            </span>
                                        </td>
                                        <td>
                                            <span v-if="!data.row_class">{{ data ? (data.discount ? Number(data.discount).toFixed(2) : 0) : 0 }}</span>
                                            <span v-if="data.row_class"></span>
                                        </td>
                                        <td>{{ data.bonus_qty }}</td>
                                        <td>{{ Number(data.tp).toFixed(2) }}</td>
                                        <td class="row-action" style="min-width: 70px;">
                                            <!-- <span class="edit-icon" @click="editOrderitemClickHandler(data, i)"><i class="zmdi zmdi-edit"></i></span> -->
                                            <span class="delete-icon" @click="deleteOrderitemClickHandler(data, i)"><i class="fas fa-trash-alt"></i></span>
                                        </td>
                                    </tr>
                                </div>
                                <!-- -------- IF ANY PRODUCT ADDED -------- -->
                                <tr v-for="(data, i) in ORDERED_TABLE_DATA__INIT_LIST_2" :key="i">
                                    <td>
                                        <span>{{ data ? data.prod_name : '' }}</span>
                                        <span>Unit Price: {{ data.base_tp }}</span>
                                        <span v-if="data.row_class" :class="data.row_class">Free Product</span>
                                    </td>
                                    <td>
                                        <span v-if="!data.row_class">{{ data ? Number(parseFloat(data.base_tp) + parseFloat(data.base_vat)).toFixed(2) : 0 }}</span>
                                        <span v-if="data.row_class"></span>
                                    </td>
                                    <td>
                                        <span class="quantity-setup">
                                            <!-- <span class="qty-increase" @click="increaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-minus"></i></span> -->
                                            <span class="qty">{{ data ? (data.quantity ? data.quantity : 0) : 0 }}</span>
                                            <!-- <span class="qty-decrease" @click="decreaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span> -->
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
                                    <td>
                                        <span v-if="!data.row_class">{{ data ? (data.price_now_per_qty * data.quantity).toFixed(2) : 0 }}</span>
                                        <!-- <span v-if="!data.row_class">{{ data ? Number(data.line_total).toFixed(2) : 0 }}</span> -->
                                        <span v-if="data.row_class"></span>
                                    </td>
                                    <td class="row-action" style="min-width: 70px;">
                                        <!-- <span class="edit-icon" @click="editOrderitemClickHandler(data, i)"><i class="zmdi zmdi-edit"></i></span> -->
                                        <span class="delete-icon" @click="deleteOrderitemClickHandler_2(data, i)"><i class="fas fa-trash-alt"></i></span>
                                    </td>
                                </tr>
                                <!-- -------- IF ANY PRODUCT ADDED -------- -->
                            </div>
                            <!-- Bottom Total Section -->
                            <div v-if="ORDERED_TABLE_DATA__INIT_LIST">
                                <tr class="subtotal bottom-total" style="border-top: 1px solid #BFCFE2;">
                                    <td style="width: 50%;"><span class="add-order-attachment-section add-order" @click="addOrderClickHandler"><i class="zmdi zmdi-plus"></i>Add Products</span></td>
                                    <td style="width: 25%;"><span>Subtotal</span></td>
                                    <td style="width: 15%;"><span>{{ ( Number(pending_order_list_by_id ? pending_order_list_by_id.gross_tp : 0).toFixed(2) ) }}</span></td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="subtotal bottom-total">
                                    <td style="width: 50%;"></td>
                                    <td style="width: 25%;">(+) Vat</td>
                                    <td style="width: 15%;">{{ Number(pending_order_list_by_id ? pending_order_list_by_id.total_vat : 0).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="subtotal bottom-total">
                                    <td style="width: 50%;"></td>
                                    <td style="width: 25%;">Gross Total</td>
                                    <td style="width: 15%;">{{ Number(pending_order_list_by_id ? pending_order_list_by_id.gross_total : 0).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="subtotal bottom-total">
                                    <td style="width: 50%;"><span class="add-order-attachment-section add-attachment" @click="addAttachmentClickHandler"><i class="zmdi zmdi-attachment-alt"></i>Attachment</span></td>
                                    <td style="width: 25%;">(-) Discount</td>
                                    <td style="width: 15%;">{{ Number(pending_order_list_by_id ? pending_order_list_by_id.total_discount : 0).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <!-- <tr class="subtotal bottom-total">
                                    <td style="width: 50%;"></td>
                                    <td style="width: 25%;">(+/-) Rounding Adjustment</td>
                                    <td style="width: 15%;">{{ Number(rounding_adjustment).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr> -->
                                <tr class="grand-total bottom-total" style="border-top: 1px solid #BFCFE2;">
                                    <td style="width: 50%; text-align: left;">
                                        <span class="order-forward" @click="orderForwardClickHandler"><i class="zmdi zmdi-fast-forward"></i>Order Forward</span>
                                        <span class="order-reject" @click="orderRejectClickHandler">Reject Order</span>
                                    </td>
                                    <td style="width: 25%;">Grand Total</td>
                                    <td style="width: 15%;">{{ Number(pending_order_list_by_id ? pending_order_list_by_id.net_total : 0).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Bottom Subtotal & Attachment Section -->
            <div class="submit-section" v-if="ORDERED_TABLE_DATA__INIT_LIST">
                <div class="submit-section-inner">
                    <span class="proceed-order" @click="updateOrderClickHandler" style="margin-right: 20px;" v-if="ORDERED_TABLE_DATA__INIT_LIST_2.length > 0">Update Order</span>
                    <span class="proceed-order" @click="proceedOrderClickHandler">Approve Order</span>
                </div>
            </div>
            <!-- Add Product Modal -->
            <div class="add-order-modal-section" v-if="add_order_modal">
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
                                <p class="name">{{ pending_order_list_by_id ? (pending_order_list_by_id.sbu_customer_info ? pending_order_list_by_id.sbu_customer_info.display_name : 0) : 'Not Found' }}<span class="tik-icon"><i class="zmdi zmdi-check"></i></span></p>
                                <p class="id">{{ pending_order_list_by_id ? (pending_order_list_by_id.order_no) : 'Not Found' }}</p>
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
                                        <div id="progressbar" class="jmi-progressbar" v-if="!PRODUCT_MODAL_DATA_LIST">
                                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                                        </div>
                                        <tr class="jmi-add-product-autofill-header-row">
                                            <td><span class="td-span-title">Name</span></td>
                                            <td><span class="td-span-title">Quantity</span></td>
                                            <td></td>
                                            <td><span class="td-span-title">Option</span></td>
                                        </tr>
                                        <tr class="responer-body-filter-output" v-for="(data, i) in PRODUCT_MODAL_DATA_LIST" :key="i">
                                            <td>
                                                <span class="responer-body-filter-tag">{{  data ? data.prod_name : "" }}</span>
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
                                        <span>{{  data ? data.prod_name : ""  }}</span>
                                        <span>Code: {{ data ? (data.display_code ? data.display_code : data.prod_id) : "" }}<span class="responer-body-filter-tag-id hide" style="display: inline-block; margin-left: 2px;"> | ID: {{ data ? (data.prod_id ? (data.prod_id) : '') : "" }}</span></span>
                                    </td>
                                    <td>
                                        <span class="quantity-setup">
                                            <span class="qty-increase" @click="decreaseProductInAutofieldProductClickHandler(data, i)"><i class="zmdi zmdi-minus" :class="data.quantity <= 1 ? 'jmi-deactive-btn' : ''"></i></span>
                                            <input :id="'order-add-modal-qty-' + i" class="qty" type="number" placeholder="00" :value="data.quantity ? data.quantity : 1" v-on:keyup="quantityKeyUp_modal(data, $event, i)" min="1" step="1" v-on:keydown="quantityKeyDown_modal($event, i)" pattern="[0-9]*">
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

import ERPService from '../../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
    props: ["pending_order_list_by_id"],
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
            PRODUCT_MODAL_DATA_LIST: [
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
                    name: "FRS",
                    stock: "Stock: 1000 I UoM: Box",
                    unit_price: "300.00",
                    quantity: "5",
                    bonus: "0",
                    total_price: "300.00"
                },
                {
                    name: "Altrip. Almotriptan",
                    stock: "1050",
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
                    stock: "Stock: 1050 I UoM: Box",
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
            vat_total: 0.00,
            discount_total: 0.00,
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

            // This Component Dynamic Data Starts here
            sr_add_modal: false,
            selected_sr: null,
            SELECTED_ORDERED_PRODUCTS__INIT_LIST: [],
            SELECTED_ORDERED_PRODUCTS__STORE: [],
            RESPONSE_ORDERED_PRODUCTS__STORE: [],
            DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST: [],
            DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST_2: [],
            ORDERED_TABLE_DATA__INIT_LIST: this.pending_order_list_by_id.order_details,
            ORDERED_TABLE_DATA__INIT_LIST_2: [],
        }
    },
    created() {
        // console.log(this.pending_order_list_by_id)
    },
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
        expectedDateCalendarClick() {
            console.log('expectedDateCalendarClick')
        },
        //------------------------------------------------------------------------------------------
        // Table List Actions
        // Increase Table Row's Single Product/Order
        /*increaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
        },
        // Decrease Table Row's Single Product/Order
        decreaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
        },*/
        // Edit Table Row's Single Product/Order
        /*editOrderitemClickHandler(data, index) {
            console.log(data + '    ' + index)
        },*/
        // Delete Table Row's Single Product/Order
        deleteOrderitemClickHandler(data, index) {
            console.log(data + '    ' + index)
            if(this.ORDERED_TABLE_DATA__INIT_LIST.length > 0) {
                for (let [i, tt] of this.ORDERED_TABLE_DATA__INIT_LIST.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.ORDERED_TABLE_DATA__INIT_LIST.splice(i, 1);
                        this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.push(data)
                        // Free Product row delete
                        // if(data.offer_type === "free") {
                        //     this.ORDERED_TABLE_DATA__INIT_LIST.splice(i, 1);
                        // }
                    }
                }
            }
        },
        deleteOrderitemClickHandler_2(data, index) {
            console.log(data + '    ' + index)
            if(this.ORDERED_TABLE_DATA__INIT_LIST_2.length > 0) {
                for (let [i, tt] of this.ORDERED_TABLE_DATA__INIT_LIST_2.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.ORDERED_TABLE_DATA__INIT_LIST_2.splice(i, 1);
                        this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST_2.push(data)
                        // Free Product row delete
                        if(data.offer_type === "free") {
                            this.ORDERED_TABLE_DATA__INIT_LIST_2.splice(i, 1);
                        }
                    }
                }
            }
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
        updateOrderClickHandler() {
            console.log('update order')
            console.log(this.ORDERED_TABLE_DATA__INIT_LIST_2)
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
            data.quantity++
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
                            display_code: data.display_code,
                            quantity: 1
                        }
            this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.push(product)
            // Remove this product from all product list
            if(this.PRODUCT_MODAL_DATA_LIST.length > 0) {
                for (let [i, tt] of this.PRODUCT_MODAL_DATA_LIST.entries()) {
                    if (tt.prod_id === data.prod_id) {
                        this.PRODUCT_MODAL_DATA_LIST.splice(i, 1);
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
            this.PRODUCT_MODAL_DATA_LIST.push(data)
        },
        cancelOrderFromModalClickHandler() {
            this.add_order_modal = false
        },
        addItemsFromModalClickHandler() {
            // console.log('add items from modal')
            // console.log(this.SELECTED_ORDERED_PRODUCTS__INIT_LIST)
            // this.SELECTED_ORDERED_PRODUCTS__STORE = this.SELECTED_ORDERED_PRODUCTS__INIT_LIST
            if(this.SELECTED_ORDERED_PRODUCTS__STORE.length > 0) {
                for(let i=0; i<this.SELECTED_ORDERED_PRODUCTS__INIT_LIST.length; i++) {
                    this.SELECTED_ORDERED_PRODUCTS__STORE.push(this.SELECTED_ORDERED_PRODUCTS__INIT_LIST[i])
                }
            } else {
                this.SELECTED_ORDERED_PRODUCTS__STORE = this.SELECTED_ORDERED_PRODUCTS__INIT_LIST
            }
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
            let id_selector = "responer-body-filter-tag-id"

            // console.log(value.key)
            let v = document.querySelector('#order-approval-add-product').value
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
                    this.PRODUCT_MODAL_DATA_LIST = res.data.product_list
                    // console.log(this.SELECTED_ORDERED_PRODUCTS__STORE.length)
                    // console.log(this.PRODUCT_MODAL_DATA_LIST.length)
                    // console.log(this.SELECTED_ORDERED_PRODUCTS__STORE)
                    if(this.SELECTED_ORDERED_PRODUCTS__STORE.length > 0) {
                        for(let i=0; i<this.PRODUCT_MODAL_DATA_LIST.length; i++) {
                            for(let j=0; j<this.SELECTED_ORDERED_PRODUCTS__STORE.length; j++) {
                                if(this.PRODUCT_MODAL_DATA_LIST[i].prod_id === this.SELECTED_ORDERED_PRODUCTS__STORE[j].prod_id) {
                                    this.PRODUCT_MODAL_DATA_LIST.splice(i, 1)
                                }
                            }
                        }
                    }
                    // Add deleted product
                    if(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length > 0) {
                        for(let i=0; i<this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                            this.PRODUCT_MODAL_DATA_LIST.push(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST[i])
                        }
                    }
                    if(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST_2.length > 0) {
                        for(let i=0; i<this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST_2.length; i++) {
                            this.PRODUCT_MODAL_DATA_LIST.push(this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST_2[i])
                        }
                    }
                    // Remove Product Which are already in ORDERED
                    if(this.ORDERED_TABLE_DATA__INIT_LIST.length > 0) {
                        for(let i=0; i<this.PRODUCT_MODAL_DATA_LIST.length; i++) {
                            for(let j=0; j<this.ORDERED_TABLE_DATA__INIT_LIST.length; j++) {
                                if(this.PRODUCT_MODAL_DATA_LIST[i].prod_id === this.ORDERED_TABLE_DATA__INIT_LIST[j].product_id) {
                                    console.log('matched : ' + this.ORDERED_TABLE_DATA__INIT_LIST[j].product_id)
                                    this.PRODUCT_MODAL_DATA_LIST.splice(i, 1)
                                }
                            }
                        }
                    }
                })
        },
        async FIND_PRODUCT_OFFER__FROM_SERVICE(prod_db_list) {
            let sbu_id = parseInt(JSON.parse(localStorage.getItem("user")).user_detils.sbu_id)
            let customer_id = parseInt(this.customer_data ? this.customer_data.customer_id : 0)
            
            await service.getFindProductOffer_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, this.createYYYYDDMM())
                .then(res => {
                    console.log(res.data)
                    this.RESPONSE_ORDERED_PRODUCTS__STORE = []
                    this.RESPONSE_ORDERED_PRODUCTS__STORE = res.data.data
                    this.GENERATE_ORDERED_PRODUCTS_DETAILS_LIST_FROM_PRODUCT_OFFER_RESPONSE()
                })
        },
        // -----------------------------------------------------------------------------------------------
        GENERATE_ORDERED_PRODUCTS_DETAILS_LIST_FROM_PRODUCT_OFFER_RESPONSE() {
            // if(this.UPDATE_ORDER_CLICKED) {
            //     this.ORDERED_TABLE_DATA__INIT_LIST = []
            //     this.UPDATE_ORDER_CLICKED = false
            // }
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
                            this.ORDERED_TABLE_DATA__INIT_LIST_2.push(product)

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
                                        // price_now_per_qty   : 0,
                                        // base_vat            : 0,
                                        // line_total          : 0,
                                        // vat_total           : 0,
                                        quantity            : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].quantity,
                                        offer_type          : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type,
                                        offer               : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer,
                                        row_class           : this.RESPONSE_ORDERED_PRODUCTS__STORE[j].offer_type
                                }
                                this.ORDERED_TABLE_DATA__INIT_LIST_2.push(ferr_product)
                            }
                        }
                    }
                }
            }
            console.log(this.ORDERED_TABLE_DATA__INIT_LIST_2)
            this.UPDATE_BTN_TRUE = false
        },
        // -------------------------------------------------------------------------------------------------
        // Default Functionality
        defaultAllThisComponentData() {
                this.ORDERED_TABLE_DATA__INIT_LIST = []
                this.ORDERED_TABLE_DATA__INIT_LIST_2 = []
                // this.ORDERED_TABLE_DATA__MODIFIED_LIST = []
                // this.ORDERED_TABLE_DATA__CONFIRM_LIST = []
                this.PRODUCT_MODAL_DATA_LIST = []
                this.SELECTED_ORDERED_PRODUCTS__INIT_LIST = []
                this.SELECTED_ORDERED_PRODUCTS__STORE = []
                this.RESPONSE_ORDERED_PRODUCTS__STORE = []
                console.log('default component')
                console.log(this.ORDERED_TABLE_DATA__INIT_LIST.length)

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
        async pending_order_list_by_id(newVal, oldVal){
            console.log('changes' + newVal)
            console.log('changes' + oldVal)
            // console.log(this.pending_order_list_by_id.order_details)
            await this.defaultAllThisComponentData()
            setTimeout( () => {
                this.ORDERED_TABLE_DATA__INIT_LIST = this.pending_order_list_by_id.order_details
            }, 1000)
            // if( newVal && oldVal) {
            //     if(newVal.customer_id !== oldVal.customer_id) {
            //         this.defaultAllThisComponentData()
            //         console.log(this.pending_order_list_by_id.order_details)
            //     }
            // }
        },
    }
}
</script>

<style lang="less" scoped>
@import url('./DetailsSection.less');
</style>