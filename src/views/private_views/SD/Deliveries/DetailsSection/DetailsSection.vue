<template>
    <div id="deliveries-details-section" class="deliveries-details-section">
        <div class="deliveries-details-section-inner">
            <div class="title-section">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Invoice No:</span><span class="id">{{ PENDING_ORDER_DATA_BY_ID ? PENDING_ORDER_DATA_BY_ID.invoice_no : "" }}</span></p></div>
                    <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer:</span><span class="jmi-lvl-value id">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? PENDING_ORDER_DATA_BY_ID.sbu_customer_info.display_name : '') : '' }}</span></p></div>
                    <div class="col-lg-3 col-md-4 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Phone:</span> <span class="jmi-lvl-value">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_info.person_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_info.person_info.phone ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_info.person_info.phone) : '') : '') : '') : '') : '' }}</span></p></div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-12"><p class="jmi-title">Total Due: <span class="jmi-lvl-value">{{ PENDING_ORDER_DATA_BY_ID ? Number(PENDING_ORDER_DATA_BY_ID.net_total).toFixed(2) : '' }}</span></p></div>
                    <!-- <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><span class="jmi-lvl-value address">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_info.customer_address ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_info.customer_address) : '') : '') : '') : '' }}</span></p></div> -->
                    <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><span class="jmi-lvl-value address">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.delivery_address ? (PENDING_ORDER_DATA_BY_ID.delivery_address) : '') : '' }}</span></p></div>
                    <div class="col-lg-3 col-md-3 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Order Placed:</span><span class="jmi-lvl-value address">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.created_at ? (PENDING_ORDER_DATA_BY_ID.created_at).split('T')[0] : '') : '' }}</span></p></div>
                    
                </div>
            </div>
            
            <div class="header-summery-section">
                <div class="header-summery-section-inner">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="am">AM: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info.name) : '') : '') : '') : '') : '' }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="mio">MIO: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info.name) : '') : '') : '') : '') : '') : '') : '' }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="mio">SR: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.get_sales_area ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.get_sales_area ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.get_sales_area.area_name ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.get_sales_area.area_name) : '') : '') : '') : '') : '') : '') : '' }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="mio">Delivery Date: <span class="jmi-lvl-value">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.delivery_date ? (PENDING_ORDER_DATA_BY_ID.delivery_date).split(' ')[0] : '') : '' }}</span></p></div>
                    </div>
                </div>
            </div>
            <!-- Order Table -->
            <div class="order-table">
                <div class="order-table-inner">
                    <table class="table jmi-order-table" id="order-data-table" cellspacing="0" width="100%" v-if="!PAYMENT_MODAL_IS_TRUE">
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
                            <div class="table-data-rows"><div id="progressbar" class="jmi-progressbar" v-if="!ORDERED_TABLE_DATA__INIT_LIST || !PENDING_ORDER_DATA_BY_ID">
                                    <p>Please select an order</p>
                                </div>
                                <div v-if="PENDING_ORDER_DATA_BY_ID && ORDERED_TABLE_DATA__INIT_LIST">
                                    <tr :id="'order-data-table-tr-' + i" v-for="(data, i) in ORDERED_TABLE_DATA__INIT_LIST" :key="i" :class="(data.deal_type === 'F' && data.net_amount === '0') ? 'free' : ''">
                                        <!-- Name Column -->
                                        <td>
                                            <span>{{ data.product_info ? data.product_info.prod_name : '' }}</span>
                                            <span>Unit Price: {{ data.unit_tp }}</span>
                                        </td>
                                        <!-- Trade Price Column -->
                                        <td>
                                            <span v-if="!(data.deal_type === 'F' && data.net_amount === '0')">{{ Number(parseFloat(data.unit_tp) + parseFloat(data.unit_vat)).toFixed(2) }}</span>
                                        </td>
                                        <!-- Quantity Column -->
                                        <td :id="'order-data-table-tr-td-' + i">
                                            <span v-if="!(data.deal_type === 'F' && data.net_amount === '0')">
                                                <span class="single_qty quantity-setup">
                                                    <span class="qty">{{ data.qty }}</span>
                                                </span>
                                                <span class="qty_editable quantity-setup hide" style="border: 1px solid #026CD1;">
                                                    <span class="qty-increase" @click="decreaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-minus" :class="data.qty < 2 ? 'jmi-deactive-btn' : ''"></i></span>
                                                    <input :id="'ordered-add-modal-qty-' + i" class="qty jmi-tr-td-input-qty" type="number" placeholder="00" :value="data ? (data.qty ? data.qty : 0) : 0" v-on:keyup="quantityKeyUp_ordered_table(data, $event, i)" min="1" step="1" v-on:keydown="quantityKeyDown_ordered_table($event, i)" pattern="[0-9]*">
                                                    <span class="qty-decrease" @click="increaseOrderedItemClickHandler(data, i)"><i class="zmdi zmdi-plus"></i></span>
                                                </span>
                                            </span>
                                        </td>
                                        <!-- Discount Column -->
                                        <td>
                                            <span v-if="!(data.deal_type === 'F' && data.net_amount === '0')">{{ data ? (data.offer ? (data.offer.offer ? (data.offer.offer.discount_percentage ? Number(data.offer.offer.discount_percentage).toFixed(2) : 0) : 0) : 0) : 0 }}%</span>
                                        </td>
                                        <!-- Bonus Column -->
                                        <td>
                                            <span>{{ data.offer.offer_type === "bonus" ? parseInt(data.qty / (data.offer.offer.bonus_on)) : data.bonus_qty }}</span>
                                        </td>
                                        <!-- Total Price Column -->
                                        <td>
                                            <span v-if="!(data.deal_type === 'F' && data.net_amount === '0')">{{ Number((data.unit_tp) * (data.qty)).toFixed(2) }}</span>
                                        </td>
                                        <!-- Option Column -->
                                        <td class="row-action jmi-tr-td-option" style="min-width: 70px; text-align: right;">
                                            <span v-if="!CURRENT_INVOICE_COLLECTION_LIST || !CURRENT_INVOICE_COLLECTION_LIST.length">
                                                <span v-if="!(data.deal_type === 'F' && data.net_amount === '0')">
                                                    <!-- <span class="icon edit-icon" @click="editOrderitemClickHandler(data, i)" v-if="productTableEditableIsValid(data.available_stock, data.transit_stock, data.net_qty)"><i class="zmdi zmdi-edit"></i></span> -->
                                                    <span class="" @click="editOrderitemClickHandler(data, i)" v-if="productTableEditableIsValid(data.available_stock, data.transit_stock, data.net_qty)"><i class="zmdi zmdi-edit"></i></span>
                                                    <span class="icon delete-icon" @click="deleteOrderitemClickHandler(data, i)"><i class="fas fa-trash-alt"></i></span>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                </div>
                            </div>
                            <!-- Bottom Total Section -->
                            <div class="jmi-table-subtotal-btm-section" v-if="PENDING_ORDER_DATA_BY_ID && ORDERED_TABLE_DATA__INIT_LIST">
                                <tr class="subtotal bottom-total" style="border-top: 1px solid #BFCFE2;">
                                    <td style="width: 50%;"></td>
                                    <td style="width: 25%;"><span>Subtotal</span></td>
                                    <td style="width: 15%;"><span>{{ Number(sub_total).toFixed(2) }}</span></td>
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
                                    <td style="width: 25%;">Gross Total</td>
                                    <td style="width: 15%;">{{ Number(gross_total).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="subtotal bottom-total">
                                    <td style="width: 50%;"></td>
                                    <td style="width: 25%;">(-) Discount</td>
                                    <td style="width: 15%;">{{ Number(discount_total).toFixed(2) }}</td>
                                    <td style="width: 10%; min-width: 70px;"></td>
                                </tr>
                                <tr class="grand-total bottom-total" style="border-top: 1px solid #BFCFE2;">
                                    <td style="width: 50%; text-align: left;"><span v-if="!CURRENT_INVOICE_COLLECTION_LIST || !CURRENT_INVOICE_COLLECTION_LIST.length"><input type="checkbox" id="set_payment_all_due" v-model="set_payment_all_due" @change="dueAllCheckboxOnChangeHandler"><span class="payent-due">Full Payment DUE</span></span></td>
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
            <div class="submit-section" v-if="ORDERED_TABLE_DATA__INIT_LIST && PENDING_ORDER_DATA_BY_ID && !PAYMENT_MODAL_IS_TRUE">
                <div class="submit-section-inner">
                    <span class="cancel-order" @click="cancelDeliveryOrderClickHandler" v-if="NO_PRODUCT_IN_CART_TO_DELIVER">Cancel Order</span>
                    <span class="proceed-order" @click="deliveryOrderClickHandler" v-if="!NO_PRODUCT_IN_CART_TO_DELIVER">{{ CURRENT_INVOICE_COLLECTION_LIST ? 'View Payment' : 'Delivered Order' }}</span>
                </div>
            </div>
            <!-- PAYMENT MODAL -->
            <PaymentModal 
                v-if="PENDING_ORDER_DATA_BY_ID && ORDERED_TABLE_DATA__INIT_LIST && PAYMENT_MODAL_IS_TRUE"
                :INVOICE_DATA_TO_SEND="INVOICE_DATA_TO_SEND"
                :ORDER_TABLE_PROD_DATA_LIST_TO_SEND="ORDER_TABLE_PROD_DATA_LIST_TO_SEND"
                :ORDER_TABLE_DATA_IS_CHANGE="ORDER_TABLE_DATA_IS_CHANGE"
                v-on:close_payment_modal="closePaymentModalClickHandler_Child" />
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
        </div>
        <!-- Delete Product From Main Table Modal -->
        <div class="modal-popup-section order-proceed-modal" v-if="delete_product_from_table_popup_modal">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">You want to remove the product.</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                <div class="popup-cancel-btn-section">
                    <span @click="cancelRemovingProductFromTableClickHandler">Cancel</span>
                </div>
                <div class="popup-confirm-btn-section">
                    <span @click="confirmRemovingProductFromTableClickHandler">Confirm</span>
                </div>
                </div>
            </div>
        </div>
        <!-- Update Message -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="product_update_successfully_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Product Update Successfully</p>
            </div>
        </div>
        <!-- Proceed Delevery Modal -->
        <div class="modal-popup-section deliveries-proceed-modal" v-if="approve_product_confirmation_popup_modal">
            <div class="modal-popup-section-inner deliveries-proceed-modal-inner">
                <div class="tab-section">
                    <div class="tab-section-inner">
                        <b-tabs class="mt-3 deliveries-customer-details">
                            <b-tab title="Cash" active>
                                <div class="tab-inner cash">
                                    <div class="row">
                                        <div class="imvoice-amount">
                                            <p class="jmi-lvl">Invoice Amount:</p>
                                            <p class="jmi-lvl-value">{{ Number(grand_total).toFixed(2) }}</p>
                                        </div>
                                        <div class="imvoice-amount">
                                            <p class="jmi-lvl">Due Amount:</p>
                                            <p id="cash-due-amount-selector" class="jmi-lvl-value">{{ Number(parseFloat(grand_total.toFixed(2)) - parseFloat(cash_receive_amount) ).toFixed(2) }}</p>
                                        </div>
                                    </div>
                                    <div class="row receiver-amount">
                                        <p class="jmi-lvl">Type Receiver Amount</p>
                                        <input type="number" id="deliveries_cash_receiver_amount" class="jmi-lvl-value" v-model="cash_receive_amount"  step="any" v-on:keydown="deliveries_cash_receiver_amount_KeyDown_ordered_table($event)" v-on:keyup="deliveries_cash_receiver_amount_KeyUp_ordered_table($event)" />
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="Cheque">
                                <div class="tab-inner cheque">
                                    <div class="row">
                                        <div class="imvoice-amount" style="width: 33%;">
                                            <p class="jmi-lvl">Invoice Amount:</p>
                                            <p class="jmi-lvl-value">{{ Number(grand_total).toFixed(2) }}</p>
                                        </div>
                                        <div class="imvoice-amount" style="width: 33%;">
                                            <p class="jmi-lvl">Cash Amount:</p>
                                            <p class="jmi-lvl-value">{{ Number(cash_receive_amount).toFixed(2) }}</p>
                                        </div>
                                        <div class="imvoice-amount" style="width: 33%;">
                                            <p class="jmi-lvl">Due Amount:</p>
                                            <p type="number" id="cheque-due-amount-selector" class="jmi-lvl-value">{{ Number(parseFloat(grand_total.toFixed(2)) - (parseFloat(cash_receive_amount) + parseFloat(cheque_receive_amount)) ).toFixed(2) }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!-- <div class="jmi-inline-block hide"> -->
                                        <div class="jmi-inline-block">
                                            <p class="jmi-lvl">Select date</p>
                                            <input type="date" class="jmi-lvl-value" v-model="cheque_tab_date">
                                        </div>
                                        <!-- <div class="jmi-inline-block right-alg"> -->
                                        <div class="jmi-inline-block">
                                            <p class="jmi-lvl">Type Receiver Amount</p>
                                            <input type="number" id="deliveries_cheque_receiver_amount" class="jmi-lvl-value" v-model="cheque_receive_amount" v-on:keydown="deliveries_cheque_receiver_amount_KeyDown_ordered_table($event)" v-on:keyup="deliveries_cheque_receiver_amount_KeyUp_ordered_table($event)" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!-- <div class="jmi-inline-block hide"> -->
                                        <div class="jmi-inline-block">
                                            <p class="jmi-lvl">Enter cheque Number</p>
                                            <input type="text" v-model="cheque_cheque_number">
                                        </div>
                                        <div class="jmi-inline-block">
                                            <p class="jmi-lvl">Attach File (File Should be jpg, png)</p>
                                            <p class="jmi-lvl" style="color: #C11616; font-size: 10px;" v-if="UPLOADED_IMAGE_DATA_BASE_64_IS_PRESENT">* Please insert cheque image</p>
                                            <input type="file" class="jmi-lvl-value" @change="imageChooseEventHandler($event)" accept="image/x-png,image/gif,image/jpeg">
                                        </div>
                                        <div class="select-options jmi-inline-block right-alg hide">
                                            <p class="jmi-lvl" style="float: unset;">Select file type</p>
                                            <span class="right-icon"><i class="fas fa-chevron-right"></i></span>
                                            <select title="Pick a customer" class="selectpicker" v-model="file_type_on_change" @change="onChangeFileTypeDropdown()">
                                                <option v-for="(file, m) in file_types_list" :key="m" :value="file.id">{{ file.element_name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="img-section">
                                            <img id="cheque_image">
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <!-- <b-tab title="Deposit Slip" v-if="DEPOSIT_TAB_VISIBLE"> -->
                            <!-- <b-tab title="Deposit Slip"> -->
                            <b-tab title="EFTN">
                                <div class="tab-inner cheque">
                                    <div class="row">
                                        <div class="imvoice-amount">
                                            <p class="jmi-lvl">Invoice Amount:</p>
                                            <p class="jmi-lvl-value">{{ Number(grand_total).toFixed(2) }}</p>
                                        </div>
                                        <div class="imvoice-amount">
                                            <p class="jmi-lvl">Due Amount:</p>
                                            <!-- <p class="jmi-lvl-value">10000</p> -->
                                            <p type="number" id="eftn-due-amount-selector" class="jmi-lvl-value">{{ Number(parseFloat(grand_total.toFixed(2)) - (parseFloat(cash_receive_amount) + parseFloat(cheque_receive_amount) + parseFloat(eftn_receive_amount)) ).toFixed(2) }}</p>
                                        </div>
                                    </div>
                                    <div class="row receiver-amount">
                                        <!-- <div class="jmi-inline-block">
                                            <p class="jmi-lvl">Select date</p>
                                            <input type="text" v-model="receiver_amount">
                                        </div> -->
                                        <!-- <div class="jmi-inline-block right-alg"> -->
                                            <p class="jmi-lvl">EFTN Amount</p>
                                            <input type="number" id="deliveries_eftn_receiver_amount" class="jmi-lvl-value" v-model="eftn_receive_amount"  step="any" v-on:keydown="deliveries_eftn_receiver_amount_KeyDown_ordered_table($event)" v-on:keyup="deliveries_eftn_receiver_amount_KeyUp_ordered_table($event)" />
                                            <!-- <input type="number" id="deliveries_cash_receiver_amount" class="jmi-lvl-value" v-model="cash_receive_amount"  step="any" v-on:keydown="deliveries_cash_receiver_amount_KeyDown_ordered_table($event)" v-on:keyup="deliveries_cash_receiver_amount_KeyUp_ordered_table($event)" /> -->
                                        <!-- </div> -->
                                    </div>
                                    <div class="row">
                                        <div class="jmi-inline-block">
                                            <p class="jmi-lvl">EFTN Bank</p>
                                            <input type="number" v-model="eftn_bank_name">
                                        </div>
                                        <div class="jmi-inline-block">
                                            <p class="jmi-lvl">EFTN A/C Number</p>
                                            <input type="number" v-model="eftn_bank_ac_no">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="jmi-inline-block">
                                            <p class="jmi-lvl">EFTN Ref. number</p>
                                            <input type="text" v-model="eftn_reference_no">
                                        </div>
                                    </div>
                                    <!-- <div class="row">
                                        <img src="https://static6.depositphotos.com/1005979/577/i/600/depositphotos_5777799-stock-photo-blank-check-with-open-space.jpg" alt="">
                                    </div> -->
                                </div>
                            </b-tab>
                            <!-- <b-tab title="Adjustment" v-if="ADJUSTMENT_TAB_VISIBLE"> -->
                            <b-tab title="Challan">
                                <div class="tab-inner cheque"> 
                                    <div class="row">
                                        <!-- <div class="jmi-inline-block">
                                            <p class="jmi-lvl">Attach File (File Should be jpg, png, pdf)</p>
                                            <input type="text" v-model="receiver_amount">
                                        </div>
                                        <div class="jmi-inline-block right-alg">
                                            <p class="jmi-lvl">VAT Chalan.pdf</p>
                                            <input type="text" v-model="receiver_amount">
                                        </div> -->
                                        <div class="imvoice-amount" style="width: 100%;">
                                            <p class="jmi-lvl">Invoice VAT:</p>
                                            <p class="jmi-lvl-value">10000</p>
                                        </div>
                                    </div>
                                    <!-- <div class="row">
                                        <div class="jmi-inline-block">
                                            <p class="jmi-lvl">Attach File (File Should be jpg, png, pdf)</p>
                                            <input type="text" v-model="receiver_amount">
                                        </div>
                                        <div class="jmi-inline-block right-alg">
                                            <p class="jmi-lvl">ABC Chalan.pdf</p>
                                            <input type="text" v-model="receiver_amount">
                                        </div>
                                    </div> -->
                                    <div class="row">
                                        <div class="jmi-inline-block">
                                            <p class="jmi-lvl">Attach File (File Should be jpg, png)</p>
                                            <p class="jmi-lvl" style="color: #C11616; font-size: 10px;" v-if="UPLOADED_IMAGE_DATA_BASE_64_IS_PRESENT">* Please insert cheque image</p>
                                            <input type="file" class="jmi-lvl-value" @change="imageChooseEventHandler($event)" accept="image/x-png,image/gif,image/jpeg">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="img-section">
                                            <img id="challan_image">
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                        <div class="submit-section">
                            <button class="cancel" @click="deliveryOrderModalCancelClickHandler">Cancel</button>
                            <button class="confirm" @click="deliveryOrderModalConfirmClickHandler" v-if="cash_receive_amount > 0 || cheque_receive_amount > 0 || eftn_receive_amount > 0">Proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Delivery Success Message -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="delivery_success_or_not_msg_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">{{ delivery_success_or_not_msg }}</p>
            </div>
        </div>
        <!-- ALL DUE PAYMENT POPUP Modal -->
        <div class="modal-popup-section order-proceed-modal" v-if="all_due_payment_confirmation_popup_modal">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">You want proceed full due delivery.</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                <div class="popup-cancel-btn-section">
                    <span @click="cancelDuePaymentConfirmationClickHandler">Cancel</span>
                </div>
                <div class="popup-confirm-btn-section">
                    <span @click="confirmDuePaymentConfirmationClickHandler">Confirm</span>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import * as VueGoogleMaps from 'vue2-google-maps'
import JMIFilter from '.././../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()
import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

import PaymentModal from './PaymentModal'

export default {
    props: ["pending_order_list_by_id", "INVOICE_ID_FROM_LEFT"],
    components: {
        PaymentModal,
    },
    data() {
        return {
            on_change_SR_dropdown: null,
            // SR_LIST__DA: [],
            header_date: null,
            order_table_header: ["Name", "Unit Price", "Quantity", "Bonus", "Total Price"],
            PRODUCT_MODAL_DATA_LIST: [],
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
            ],
            sub_total: 0.00,
            vat_total: 0.00,
            discount_total: 0.00,
            gross_total: 0.00,
            rounding_adjustment: 0.00,
            grand_total: 0.00,
            // Map Data
            // center: { lat: 23.74289, lng: 90.39597 },
            // markers: [
            //     {
            //     position: {
            //         lat: 23.74289,
            //         lng: 90.39597,
            //     },
            //     title: "Teting",
            //         name: "House of Aleida Greve",
            //         description: "Mymensingh, Dhaka",
            //         date_build: "2016-1-1",
            //     },
            // ],
            // places: [],
            // currentPlace: null,
            // directionsService: null,
            // directionsRenderer: null,
            // InfoWindow: VueGoogleMaps.InfoWindow,
            // Map: VueGoogleMaps.Map,
            // This Component Dynamic Data Starts here
            sr_add_modal: false,
            selected_sr: null,
            PENDING_ORDER_DATA_BY_ID: null,
            SELECTED_ORDERED_PRODUCTS__INIT_LIST: [],
            SELECTED_ORDERED_PRODUCTS__STORE: [],
            RESPONSE_ORDERED_PRODUCTS__STORE: [],
            DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST: [],
            DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST_2: [],
            ORDERED_TABLE_DATA__INIT_LIST: this.pending_order_list_by_id,
            ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE: [],
            ORDERED_TABLE_DATA__INIT_LIST_2: [],
            SHOW_CUSTOMER_PROFILE: [],
            ORDERED_PRODUCT_TABLE_ROW_IS_EDITABLE: false,
            ORDERED_PRODUCT_TABLE_2_ROW_IS_EDITABLE: false,
            UPDATE_BTN_ENABLE: false,
            UPDATE_QUANTITY_ENABLE_1: false,
            UPDATE_QUANTITY_ENABLE_2: false,
            ORDER_CREATED_BY: null,
            ORDER_AUTH_USER: null,
            reject_order_modal_popup: false,
            DIC_OR_MIO_OR_AM_USER_QTY_COUNT: null,
            delete_product_from_table_popup_modal: false,
            delete_product_from_table_popup_modal_data: null,
            product_update_successfully_modal: false,
            approve_product_confirmation_popup_modal: false,
            approved_single_order_modal: false,
            SHOW_PRINT_ICON: false,
            ADD_PRODUCT_MODAL_SUBMITION_SECTION: true,
            ORDER_SUCCESS_MESSAGE: null,
            DISABLE_SUBMISSION_BTN: false,
            STOCK_TRANSIT_VALIDATION: false,
            removing_last_product_from_cart: false,
            // DELIVERIES ORDER TAB
            cash_due_amount: 0.0,
            cash_receive_amount: 0.0,

            CHEQUE_TAB_VISIBLE: false,
            cheque_due_amount: 0.0,
            cheque_cheque_number: null,
            cheque_receive_amount: 0.0,
            cheque_tab_date: null,

            eftn_due_amount: 0.0,
            eftn_receive_amount: 0.0,
            eftn_bank_name: null,
            eftn_bank_ac_no: null,
            eftn_reference_no: null,

            DEPOSIT_TAB_VISIBLE: false,
            ADJUSTMENT_TAB_VISIBLE: false,
            delivery_success_or_not_msg_modal: false,
            UPLOADED_IMAGE_NAME: null,
            UPLOADED_IMAGE_DATA_BASE_64: null,
            UPLOADED_IMAGE_DATA_BASE_64_IS_PRESENT: false,
            file_types_list: [],
            file_type_on_change: null,
            NO_PRODUCT_IN_CART_TO_DELIVER: false,
            set_payment_all_due: false,
            all_due_payment_confirmation_popup_modal: false,

            // PAYMENT MODAL
            PAYMENT_MODAL_IS_TRUE: false,

            ORDER_TABLE_DATA_IS_CHANGE: false,

            CURRENT_INVOICE_COLLECTION_LIST: null,
        }
    },
    computed: {
        INVOICE_DATA_TO_SEND() {
            let data = {
                invoice_id: this.INVOICE_ID_FROM_LEFT,
                collection_date: this.pending_order_list_by_id ? (this.pending_order_list_by_id.delivery_date ? (this.pending_order_list_by_id.delivery_date) : '') : '',
                ds_id: this.pending_order_list_by_id ? (this.pending_order_list_by_id.ds_id ? (this.pending_order_list_by_id.ds_id) : '') : '',
                customer_id: this.pending_order_list_by_id ? (this.pending_order_list_by_id.customer_id ? (this.pending_order_list_by_id.customer_id) : '') : ''
            }
            return data
        },
        ORDER_TABLE_PROD_DATA_LIST_TO_SEND() {
            let invoice_dtl = []
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE.length; i++) {
                let invoice_details = {
                    prod_id: this.ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE[i].product_info.id,
                    dlv_qty: parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].qty),
                    current_bonus_qty: this.ORDERED_TABLE_DATA__INIT_LIST[i].offer.offer.bonus_on ? ( parseInt( parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].qty) / parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].offer.offer.bonus_on) ) ) : 0
                }
                invoice_dtl.push(invoice_details)
            }
            return invoice_dtl
        }
    },
    async created() {
        // console.log(this.pending_order_list_by_id)
    },
    async mounted() {
        this.$getLocation({})
        .then( coordinates => {
            console.log(coordinates)
        })
        await this.LOAD_FILE_TYPE__FROM_SERVICE()
    },
    methods: {
        //------------------------------------------------------------------------------------------
        // Increase Table Row's Single Product/Order
        increaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
        },
        // Decrease Table Row's Single Product/Order
        decreaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
            console.log(data)
            if(data.qty > 1) {
                data.qty--
                this.UPDATE_BTN_ENABLE = true
                this.ORDER_TABLE_DATA_IS_CHANGE = true
                // this.UPDATE_BTN_TRUE = true
                this.createSubtotalCalculation()
            }
            // Free Product row quantity decrease
            if(data.offer.offer_type === "free") {
                this.ORDERED_TABLE_DATA__INIT_LIST[index + 1].bonus_qty--
            }
            if(parseInt(data.net_qty) > parseInt(data.available_stock) && parseInt(data.available_stock) > 0) {
                this.DISABLE_SUBMISSION_BTN = false
            } else {
                this.DISABLE_SUBMISSION_BTN = true 
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
            data.qty = selector.value
            this.UPDATE_BTN_ENABLE = true
            this.ORDER_TABLE_DATA_IS_CHANGE = true
            // this.UPDATE_BTN_TRUE = true
            console.log(data.net_qty)
            console.log(data.available_stock)
            if(parseInt(data.net_qty) > parseInt(data.available_stock) && parseInt(data.available_stock) > 0) {
                this.DISABLE_SUBMISSION_BTN = false
            } else {
                this.DISABLE_SUBMISSION_BTN = true 
            }
            this.createSubtotalCalculation()
        },
        quantityKeyDown_ordered_table(value, i) {
            console.log(document.querySelector('#order-data-table #ordered-add-modal-qty-' + i).value)
            if(value.keyCode === 190 || value.keyCode === 110) {
                value.preventDefault()
            }
        },
        // Edit Table Row's Single Product/Order
        editOrderitemClickHandler(data, index) {
            this.DIC_OR_MIO_OR_AM_USER_QTY_COUNT = data.qty
            // this.UPDATE_QUANTITY_ENABLE_1 = true
            console.log(this.DIC_OR_MIO_OR_AM_USER_QTY_COUNT)
            console.log(data + '    ' + index + '    auth-created: ' + this.ORDER_CREATED_BY + '  ' + this.ORDER_AUTH_USER)
            // console.log(data.qty)
            let selector_qty_1 = document.querySelector('#order-data-table-tr-' + index + ' #order-data-table-tr-td-' + index + ' .single_qty')
            let selector_qty_2 = document.querySelector('#order-data-table-tr-' + index + ' #order-data-table-tr-td-' + index + ' .qty_editable')
            selector_qty_1.className = 'single_qty quantity-setup hide '
            selector_qty_2.className = 'qty_editable quantity-setup'
        },
        // Delete Table Row's Single Product/Order
        async deleteOrderitemClickHandler(data, index) {
            console.log(data + '    ' + index)
            if(this.delete_product_from_table_popup_modal) {
                this.delete_product_from_table_popup_modal = false
            } else {
                this.delete_product_from_table_popup_modal = true
                this.delete_product_from_table_popup_modal_data = data
            }
        },
        cancelRemovingProductFromTableClickHandler() {
            this.delete_product_from_table_popup_modal = false
        },
        async confirmRemovingProductFromTableClickHandler() {
            for (let [i, tt] of this.ORDERED_TABLE_DATA__INIT_LIST.entries()) {
                if (tt.product_id === this.delete_product_from_table_popup_modal_data.product_id) {
                    this.ORDERED_TABLE_DATA__INIT_LIST[i].qty = 0
                    this.delete_product_from_table_popup_modal = false
                }
            }
            this.checkOrderTableDataList()
            this.createSubtotalCalculation()
        },
        //------------------------------------------------------------------------------------------
        // Order Table is Empty
        checkOrderTableDataList() {
            console.log('I am here')
            let count = null
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                console.log(this.ORDERED_TABLE_DATA__INIT_LIST[i].qty)
                count += parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].qty)
            }
            console.log(count)
            if(count === 0) {
                console.log('count is 0')
                this.NO_PRODUCT_IN_CART_TO_DELIVER = true
            }
        },
        //------------------------------------------------------------------------------------------
        // Order Submition Actions
        deliveryOrderClickHandler() {
            /*if(this.set_payment_all_due) {
                console.log(this.set_payment_all_due)
                this.createAllDUePamentAndProds()
            } else {
                console.log(this.set_payment_all_due)
                this.approve_product_confirmation_popup_modal = true
            }*/
            if(this.PAYMENT_MODAL_IS_TRUE) {
                console.log(this.set_payment_all_due)
                this.createAllDUePamentAndProds()
            } else {
                console.log(this.set_payment_all_due)
                this.PAYMENT_MODAL_IS_TRUE = true
            }
        },
        createAllDUePamentAndProds() {
            console.log('createAllDUePamentAndProds')
            let invoice_id = this.INVOICE_ID_FROM_LEFT
            let invoice_dtl = []
            let get_init_data_from_localstorage = localStorage.getItem('jerp_delivery_details_not_chandable_ordered_data') ? JSON.parse(localStorage.getItem('jerp_delivery_details_not_chandable_ordered_data')) : this.ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE
            console.log(get_init_data_from_localstorage)
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE.length; i++) {
                let invoice_details = {
                    prod_id: this.ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE[i].product_info.id,
                    dlv_qty: this.ORDERED_TABLE_DATA__INIT_LIST[i].qty,
                    current_bonus_qty: this.ORDERED_TABLE_DATA__INIT_LIST[i].offer.offer.bonus_on ? ( parseInt( parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].qty) / parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].offer.offer.bonus_on) ) ) : 0
                }
                invoice_dtl.push(invoice_details)
            }
            // let cash = 0
            // let cheque = 0
            // let net_payable_amount = Number(this.grand_total).toFixed(2)

            // this.SAVE_INVOICE_DELIVERY_INFO_AS_DUE__FROM_SERVICE(invoice_id, invoice_dtl, cash, cheque, net_payable_amount)
            this.SAVE_INVOICE_DELIVERY_INFO_WITH_FULL_DUE__FROM_SERVICE(invoice_id, invoice_dtl)
        },
        // ----------------------------------------------------------------------------------------
        // Delivery Order Popup
        deliveryOrderModalCancelClickHandler() {
            this.approve_product_confirmation_popup_modal = false
        },
        deliveryOrderModalConfirmClickHandler() {
            console.log('deliveryOrderModalConfirmClickHandler')
            let invoice_id = this.INVOICE_ID_FROM_LEFT
            let invoice_dtl = []
            let get_init_data_from_localstorage = localStorage.getItem('jerp_delivery_details_not_chandable_ordered_data') ? JSON.parse(localStorage.getItem('jerp_delivery_details_not_chandable_ordered_data')) : this.ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE
            console.log(get_init_data_from_localstorage)
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE.length; i++) {
                let invoice_details = {
                    prod_id: this.ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE[i].product_info.id,
                    dlv_qty: this.ORDERED_TABLE_DATA__INIT_LIST[i].qty,
                    current_bonus_qty: this.ORDERED_TABLE_DATA__INIT_LIST[i].offer.offer.bonus_on ? ( parseInt( parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].qty) / parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].offer.offer.bonus_on) ) ) : 0
                }
                invoice_dtl.push(invoice_details)
            }
            let cash = Number(this.cash_receive_amount).toFixed(2)
            let cheque = Number(this.cheque_receive_amount).toFixed(2)
            let net_payable_amount = Number(this.grand_total).toFixed(2)

            

            if(parseFloat(this.eftn_receive_amount) > 0) {
                if(this.eftn_bank_name && this.eftn_bank_ac_no && this.eftn_reference_no) {
                    this.SAVE_INVOICE_DELIVERY_INFO__FROM_SERVICE(invoice_id, invoice_dtl, cash, cheque, net_payable_amount)
                } else {
                    alert('EFTN Bank name, EFTN A/C No & EFTN reference no should not be null')
                }
            } else {
                this.SAVE_INVOICE_DELIVERY_INFO__FROM_SERVICE(invoice_id, invoice_dtl, cash, cheque, net_payable_amount)
            }

            // this.SAVE_INVOICE_DELIVERY_INFO__FROM_SERVICE(invoice_id, invoice_dtl, cash, cheque, net_payable_amount)
        },
        //------------------------------------------------------------------------------------------
        // Cancel This Delivery
        cancelDeliveryOrderClickHandler() {
            let invoice_details = []
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                let single_invoice_details = {
                    prod_id: this.ORDERED_TABLE_DATA__INIT_LIST[i].product_info.id
                }
                invoice_details.push(single_invoice_details)
            }
            console.log(invoice_details)
            this.CANCEL_THIS_DELIVERY__FROM_SERVICE(invoice_details)
        },
        //------------------------------------------------------------------------------------------
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
        async customerDetailsClickHandler() {
            if(this.customer_details_modal) {
                this.customer_details_modal = false
            } else {
                this.customer_details_modal = true
                await this.SHOW_CUSTOMER_PROFILE__FROM_SERVICE(this.PENDING_ORDER_DATA_BY_ID.customer_id)
            }
        },
        customerDetailsModalOutsideClick() {
            this.customer_details_modal = false
        },
        //------------------------------------------------------------------------------------------
        // Customer Details Modal - Location
        /*centerClick(marker, index) {
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
        },*/
        // --------------------------------------------------------------------------------------------
        // Filter - Order Approval add product modal
        searchKeyUpAddProductHandler() {
            let input = document.getElementById("deliveries-add-product");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.responer-body-filter-output')
            let txt_selector = "responer-body-filter-tag"
            let id_selector = "responer-body-filter-tag-id"
            // console.log(value.key)
            let v = document.querySelector('#deliveries-add-product').value
            if(isNaN(v)) {
                jmiFilter.searchByID_Name_Details_Section(filter, list, txt_selector)
            } else {
                jmiFilter.searchByID_Name_Details_Section(filter, list, id_selector)
            }
        }, 
        async printInvoiceClickHandler() {
            console.log('printInvoiceClickHandler')
        },
        // ------------------------------------------------------------------------------------------
        // Service Implementation
        async LOAD_FILE_TYPE__FROM_SERVICE() {
            await service.getElementListByCode_Deliveries()
                .then(res => {
                    console.log(res.data)
                    this.file_types_list = res.data.element_list
                    this.file_type_on_change = this.file_types_list[0].id
                })
        },
        async SHOW_CUSTOMER_PROFILE__FROM_SERVICE(customer_id) {
            await service.getShowCustomerProfile_OrderApproval(customer_id)
                .then(res => {
                    // console.log(res.data.customer_info)
                    this.SHOW_CUSTOMER_PROFILE = res.data.customer_info
                })
        },
        async SAVE_INVOICE_DELIVERY_INFO__FROM_SERVICE(invoice_id, invoice_dtl, cash, cheque, net_payable_amount) {
            console.log(invoice_id)
            console.log(invoice_dtl)
            console.log(cash)
            console.log(cheque)
            console.log(net_payable_amount)
            // if(this.UPLOADED_IMAGE_DATA_BASE_64 === null) {
            //     this.UPLOADED_IMAGE_DATA_BASE_64_IS_PRESENT = true
            //     if(document.querySelector('.tabs.mt-3.deliveries-customer-details ul li:nth-child(2) a').className !== 'nav-link active') {
            //         document.querySelector('.tabs.mt-3.deliveries-customer-details ul li:nth-child(2) a').click()
            //     }
            //     if(parseFloat(this.grand_total) - parseFloat(this.cash_receive_amount) - parseFloat(this.cheque_receive_amount) > 0) {
            //         console.log('Due present')
            //     }
            // } else {
                console.log(this.UPLOADED_IMAGE_DATA_BASE_64)
                console.log(this.UPLOADED_IMAGE_NAME)
                console.log(this.file_type_on_change)
                let file_path = '/customers/cheque/'

                let eftn_amt = this.eftn_receive_amount
                let eftn_bank = this.eftn_bank_name
                let eftn_ac_no = this.eftn_bank_ac_no
                let eftn_ref_no = this.eftn_reference_no
                console.log(eftn_amt + '    ' + eftn_bank + '    ' + eftn_ac_no + '    ' + eftn_ref_no)
                await service.getSaveInvoiceDeliveryInfo_DELIVERIES(invoice_id, invoice_dtl, cash, cheque, net_payable_amount, this.UPLOADED_IMAGE_DATA_BASE_64, this.UPLOADED_IMAGE_NAME, file_path, this.file_type_on_change, eftn_amt, eftn_bank, eftn_ac_no, eftn_ref_no)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200) {
                        localStorage.removeItem("jerp_delivery_details_not_chandable_ordered_data")
                    //     this.$emit('invoice_delivery_info_saved', this.INVOICE_ID_FROM_LEFT)
                    }
                    this.approve_product_confirmation_popup_modal = false
                    this.delivery_success_or_not_msg_modal = true
                    this.delivery_success_or_not_msg = res.data.message
                    setTimeout( ()=> {
                        this.$router.push('/features/users/dashboard')
                        this.delivery_success_or_not_msg_modal = false
                    }, 2000)
                })
            // }
        },
        async SAVE_INVOICE_DELIVERY_INFO_AS_DUE__FROM_SERVICE(invoice_id, invoice_dtl, cash, cheque, net_payable_amount) {
            console.log(invoice_id)
            console.log(invoice_dtl)
            console.log(cash)
            console.log(cheque)
            console.log(net_payable_amount)
            await service.getSaveInvoiceDeliveryInfo_DELIVERIES(invoice_id, invoice_dtl, cash, cheque, net_payable_amount, null, null, null, null)
            .then(res => {
                console.log(res.data)
                if(res.data.response_code === 200) {
                    localStorage.removeItem("jerp_delivery_details_not_chandable_ordered_data")
                //     this.$emit('invoice_delivery_info_saved', this.INVOICE_ID_FROM_LEFT)
                }
                this.approve_product_confirmation_popup_modal = false
                this.delivery_success_or_not_msg_modal = true
                this.delivery_success_or_not_msg = res.data.message
                setTimeout( ()=> {
                    this.$router.push('/features/users/dashboard')
                    this.delivery_success_or_not_msg_modal = false
                }, 2000)
            })
        },
        async SAVE_INVOICE_DELIVERY_INFO_WITH_FULL_DUE__FROM_SERVICE(invoice_id, invoice_dtl) {
            console.log(invoice_id)
            console.log(invoice_dtl)
            await service.getSaveInvoiceDeliveryInfoFullDue_DELIVERIES(invoice_id, invoice_dtl)
            .then(res => {
                console.log(res.data)
                if(res.data.response_code === 200) {
                    localStorage.removeItem("jerp_delivery_details_not_chandable_ordered_data")
                //     this.$emit('invoice_delivery_info_saved', this.INVOICE_ID_FROM_LEFT)
                }
                this.approve_product_confirmation_popup_modal = false
                this.delivery_success_or_not_msg_modal = true
                this.delivery_success_or_not_msg = res.data.message
                setTimeout( ()=> {
                    // this.$router.push('/features/users/dashboard')
                    this.$store.state.CHANGES_DETECTED_IN_DETAILS_SECTION = new Date()
                    this.delivery_success_or_not_msg_modal = false
                }, 2000)
            })
        },
        async CANCEL_THIS_DELIVERY__FROM_SERVICE(invoice_details) {
            await service.geSaveCancelDeliveryInfo_Deliveries(this.INVOICE_ID_FROM_LEFT, invoice_details)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200) {
                        this.delivery_success_or_not_msg_modal = true
                        this.delivery_success_or_not_msg = 'Successfully removed this order'
                        this.$store.state.DELIVERIES__CANCEL_ORDER_TIME_STAMP = new Date()
                        this.defaultAllThisComponentData()
                        setTimeout( () => {
                            this.delivery_success_or_not_msg_modal = false
                            this.delivery_success_or_not_msg = null
                        }, 2000)
                    }
                })
                .catch(err => {
                    alert('Server Error 500. ' + err)
                })
        },
        async CHECK_COLLECTION_LIST__FROM_SERVICE() {
            await service.getCollectionList_DELIVERIES_DETAILS(this.INVOICE_DATA_TO_SEND.customer_id, this.INVOICE_DATA_TO_SEND.ds_id)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.CURRENT_INVOICE_COLLECTION_LIST = res.data.collection_list
                    } else {
                        this.CURRENT_INVOICE_COLLECTION_LIST = null
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log('Collection load problem ' + err)
                        this.CURRENT_INVOICE_COLLECTION_LIST = null
                    }
                })
        },
        // ----------------------------------------------------------------------------------------------
        // Bottom Row Calculation
        // Create Secondary Subtotal
        createSubtotalCalculation() {
            this.sub_total = 0
            this.vat_total = 0
            this.discount_total = 0
            this.gross_total = 0
            this.grand_total = 0
            // console.log(this.ORDERED_TABLE_DATA__INIT_LIST[0])
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                this.sub_total += parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].unit_tp) * this.ORDERED_TABLE_DATA__INIT_LIST[i].qty
                this.vat_total += parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].unit_vat) * this.ORDERED_TABLE_DATA__INIT_LIST[i].qty
                this.discount_total += (parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].unit_tp) * this.ORDERED_TABLE_DATA__INIT_LIST[i].qty) - (parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].offer.price_now_per_qty) * this.ORDERED_TABLE_DATA__INIT_LIST[i].qty)
                // console.log(parseFloat(this.ORDERED_TABLE_DATA__INIT_LIST[i].offer.price_now_per_qty) * this.ORDERED_TABLE_DATA__INIT_LIST[i].qty)
            }
            // this.discount_total = 0
            this.gross_total = this.sub_total + this.vat_total
            this.grand_total = this.sub_total + this.vat_total - this.discount_total
        },
        // -------------------------------------------------------------------------------------------------
        // Default Functionality
        defaultAllThisComponentData() {
                this.PENDING_ORDER_DATA_BY_ID = null
                this.ORDERED_TABLE_DATA__INIT_LIST = []
                this.ORDERED_TABLE_DATA__INIT_LIST_2 = []
                // this.ORDERED_TABLE_DATA__MODIFIED_LIST = []
                // this.ORDERED_TABLE_DATA__CONFIRM_LIST = []
                this.PRODUCT_MODAL_DATA_LIST = []
                this.SELECTED_ORDERED_PRODUCTS__INIT_LIST = []
                this.SELECTED_ORDERED_PRODUCTS__STORE = []
                this.RESPONSE_ORDERED_PRODUCTS__STORE = []
                this.UPDATE_BTN_ENABLE = false
                this.UPDATE_QUANTITY_ENABLE_1 = false
                this.UPDATE_QUANTITY_ENABLE_2 = false
                this.ORDER_CREATED_BY = null
                this.ORDER_AUTH_USER = null
                this.selected_sr = null
                this.header_date = null
                this.reject_order_modal_popup = false
                this.SHOW_PRINT_ICON = false
                this.UPLOADED_IMAGE_NAME = null
                this.UPLOADED_IMAGE_DATA_BASE_64 = null
                this.UPLOADED_IMAGE_DATA_BASE_64_IS_PRESENT = false
                this.NO_PRODUCT_IN_CART_TO_DELIVER = false
                console.log('default component')
                console.log(this.ORDERED_TABLE_DATA__INIT_LIST.length)

                /*let qty_edit_static_lists = document.querySelectorAll('.single_qty.quantity-setup')
                let qty_edit_dynamic_lists = document.querySelectorAll('.qty_editable.quantity-setup')
                for(let i=0; i<qty_edit_static_lists.length; i++) {
                    qty_edit_static_lists[i].className = 'single_qty quantity-setup'
                    qty_edit_dynamic_lists[i].className = 'qty_editable quantity-setup hide'
                }*/
        },
        createYYYYDDMM() {
            let yyyy = new Date().getFullYear()
            let mm = (new Date().getMonth() + 1) < 10 ? ("0" + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)
            let dd = (new Date().getDate() + 1) < 10 ? ("0" + (new Date().getDate() + 1)) : (new Date().getDate() + 1) 
            let date = yyyy + '-' + mm + '-' + dd
            return date
        },
        // set_Or_Change_SR(da_id) {
        //     console.log(da_id)
        //     for(let i=0; i<this.SR_LIST__DA.length; i++) {
        //         if(this.SR_LIST__DA[i].id === parseInt(da_id)) {
        //             this.selected_sr = this.SR_LIST__DA[i].name
        //         }
        //     }
        // },
        set_Or_Change_Date(da_date) {
            console.log(da_date)
            this.header_date = da_date ? da_date.toString().split(' ')[0] : null
        },
        productTableEditableIsValid(available_stock, transit_stock, data_qty) {
            if(available_stock === '0' && transit_stock === '0') {
                return false
            } else if(parseInt(data_qty) > parseInt(available_stock) && parseInt(available_stock) !== 0 && parseInt(transit_stock) !== 0) {
                return true
            }
             else {
                return true
            }
        },
        check_STOCK_TRANSIT_VALIDATION() {
            this.STOCK_TRANSIT_VALIDATION = false
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                if(parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].net_qty) > (parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].available_stock) + parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].transit_stock)) ) {
                    this.STOCK_TRANSIT_VALIDATION = true
                } else {
                    this.STOCK_TRANSIT_VALIDATION = false
                }
            }
        },
        onChangeFileTypeDropdown() {
            console.log(this.file_type_on_change)
        },
        // ----------------------------------------------------------------------------------------
        // DELIVERY ORDER MODAL EVENT HANDLER
        // CHEQUE
        deliveries_cash_receiver_amount_KeyUp_ordered_table(value) {
            console.log(value.key)
            // // this.cash_due_amount
            console.log(this.grand_total.toFixed(2))
            let selector = document.querySelector('#deliveries_cash_receiver_amount')
            console.log(selector.value)
            if(selector.value.charAt(0) === '0') {
                selector.value = selector.value.substring(1)
            }
            if(parseFloat(selector.value) > parseFloat(this.grand_total.toFixed(2))) {
                console.log('more')
                selector.value = (parseFloat(selector.value)/10).toFixed()
                this.cash_receive_amount = selector.value
            } else {
                console.log('less')
            }
            // if(parseInt(selector.value) === 0) {
            //     selector.value = 0
            // } 
            if((selector.value).toString() === '') {
                selector.value = 0
                this.cash_receive_amount = selector.value
            }
            // console.log(selector.value)
            // this.cash_receive_amount = parseFloat(selector.value)
            // this.cash_due_amount = parseFloat(this.grand_total) - parseFloat(selector.value)

            // if(this.cash_due_amount.toString().charAt(0) === '-') {
            //     document.querySelector('#cash-due-amount-selector').className = 'jmi-lvl-value jmi-warning'
            //     document.querySelector('#cheque-due-amount-selector').className = 'jmi-lvl-value jmi-warning'
            // } else {
            //     document.querySelector('#cash-due-amount-selector').className = 'jmi-lvl-value'
            //     document.querySelector('#cheque-due-amount-selector').className = 'jmi-lvl-value'
            // }
        },
        deliveries_cash_receiver_amount_KeyDown_ordered_table(value) {
            console.log(value.key)
            // let selector = document.querySelector('#deliveries_cash_receiver_amount')
            // console.log(selector.value)
            // if(parseFloat(selector.value) > this.grand_total) {
            //     // value.preventDefault()
            //     selector.value.slice(1)
            //     console.log('more')
            // }
            // if(selector.value.charAt(0) === '-') {

            // }
            // this.cash_due_amount
            // if(value.keyCode === 190 || value.keyCode === 110) {
            //     value.preventDefault()
            // }
            if(value.keyCode === 109 || value.keyCode === 189) {
                value.preventDefault()
            }
        },
        // CHEQUE
        deliveries_cheque_receiver_amount_KeyUp_ordered_table(value) {
            console.log(value.key)
            // this.cash_due_amount
            let selector = document.querySelector('#deliveries_cheque_receiver_amount')
            if(selector.value.charAt(0) === '0') {
                selector.value = selector.value.substring(1)
            }
            if((parseFloat(selector.value) + parseFloat(this.cash_receive_amount)) > parseFloat(this.grand_total.toFixed(2))) {
                console.log('more')
                selector.value = (parseFloat(selector.value)/10).toFixed()
                this.cheque_receive_amount = selector.value
            } else {
                console.log('less')
            }


            if(parseInt(selector.value) === 0) {
                selector.value = 0
            } else if((selector.value).toString() === '') {
                selector.value = 0
            }
            this.cheque_receive_amount = parseFloat(selector.value)
            this.cheque_due_amount = parseFloat(this.grand_total.toFixed(2)) - (parseFloat(this.cash_receive_amount) + parseFloat(this.cheque_receive_amount))


            console.log('.......................')
            console.log(parseFloat(this.grand_total.toFixed(2)))
            console.log(parseFloat(this.cash_receive_amount) + this.cheque_receive_amount)
            console.log(parseFloat(this.grand_total.toFixed(2)) - (parseFloat(this.cash_receive_amount) + parseFloat(this.cheque_receive_amount)))
            console.log(this.cheque_due_amount)
            console.log('.......................')


            if(this.cheque_due_amount.toString().charAt(0) === '-') {
                document.querySelector('#cash-due-amount-selector').className = 'jmi-lvl-value jmi-warning'
                document.querySelector('#cheque-due-amount-selector').className = 'jmi-lvl-value jmi-warning'
            } else {
                document.querySelector('#cash-due-amount-selector').className = 'jmi-lvl-value'
                document.querySelector('#cheque-due-amount-selector').className = 'jmi-lvl-value'
            }
        },
        deliveries_cheque_receiver_amount_KeyDown_ordered_table(value) {
            console.log(value.key)
            // this.cash_due_amount
            // if(value.keyCode === 190 || value.keyCode === 110) {
            //     value.preventDefault()
            // }
        },
        // EFTN
        deliveries_eftn_receiver_amount_KeyUp_ordered_table(value) {
            console.log(value.key)
            // this.cash_due_amount
            let selector = document.querySelector('#deliveries_eftn_receiver_amount')
            if(selector.value.charAt(0) === '0') {
                selector.value = selector.value.substring(1)
            }
            if((parseFloat(selector.value) + parseFloat(this.cash_receive_amount) + parseFloat(this.cheque_receive_amount)) > parseFloat(this.grand_total.toFixed(2))) {
                console.log('more')
                selector.value = (parseFloat(selector.value)/10).toFixed()
                this.eftn_receive_amount = selector.value
            } else {
                console.log('less')
            }


            if(parseInt(selector.value) === 0) {
                selector.value = 0
            } else if((selector.value).toString() === '') {
                selector.value = 0
            }
            this.eftn_receive_amount = parseFloat(selector.value)
            this.eftn_due_amount = parseFloat(this.grand_total.toFixed(2)) - (parseFloat(this.cash_receive_amount) + parseFloat(this.cheque_receive_amount) + parseFloat(this.eftn_receive_amount))


            // console.log('.......................')
            // console.log(parseFloat(this.grand_total.toFixed(2)))
            // console.log(parseFloat(this.cash_receive_amount) + this.cheque_receive_amount)
            // console.log(parseFloat(this.grand_total.toFixed(2)) - (parseFloat(this.cash_receive_amount) + parseFloat(this.cheque_receive_amount)))
            // console.log(this.cheque_due_amount)
            // console.log('.......................')


            if(this.eftn_due_amount.toString().charAt(0) === '-') {
                document.querySelector('#cash-due-amount-selector').className = 'jmi-lvl-value jmi-warning'
                document.querySelector('#cheque-due-amount-selector').className = 'jmi-lvl-value jmi-warning'
                document.querySelector('#eftn-due-amount-selector').className = 'jmi-lvl-value jmi-warning'
            } else {
                document.querySelector('#cash-due-amount-selector').className = 'jmi-lvl-value'
                document.querySelector('#cheque-due-amount-selector').className = 'jmi-lvl-value'
                document.querySelector('#eftn-due-amount-selector').className = 'jmi-lvl-value'
            }
        },
        deliveries_eftn_receiver_amount_KeyDown_ordered_table(value) {
            console.log(value.key)
            // this.cash_due_amount
            // if(value.keyCode === 190 || value.keyCode === 110) {
            //     value.preventDefault()
            // }
        },
        imageChooseEventHandler(event) {
            this.imageChooseEventHandler_2(event)
            this.UPLOADED_IMAGE_NAME = null
            this.UPLOADED_IMAGE_DATA_BASE_64 = null
            let file = event.target.files[0]
            this.UPLOADED_IMAGE_NAME = event.target.files[0].name
            let reader = new FileReader();
            reader.onloadend = () => {
                this.UPLOADED_IMAGE_DATA_BASE_64 = reader.result
            }
            reader.readAsDataURL(file)
        },
        imageChooseEventHandler_2(event) {
            // this.UPLOADED_IMAGE_NAME = null
            // this.UPLOADED_IMAGE_DATA_BASE_64 = null
            let output = document.querySelector('#cheque_image')
            output.src = URL.createObjectURL(event.target.files[0])
            output.onload = () => {
                URL.revokeObjectURL(output.src)
            }

            let output2 = document.querySelector('#challan_image')
            output2.src = URL.createObjectURL(event.target.files[0])
            output2.onload = () => {
                URL.revokeObjectURL(output.src)
            }
            // this.UPLOADED_IMAGE_NAME = event.target.files[0].name

            // output.addEventListener('load', (event) => {
            //     const dataUrl = this.createImageToBase64(event.currentTarget)
            //     this.UPLOADED_IMAGE_DATA_BASE_64 = dataUrl
            //     this.UPLOADED_IMAGE_DATA_BASE_64_IS_PRESENT = false
            //     console.log(dataUrl)
            // })
        },
        createImageToBase64(img) {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d');
            // Set width and height
            canvas.width = img.width;
            canvas.height = img.height;
            // Draw the image
            ctx.drawImage(img, 0, 0);
            return canvas.toDataURL('image/jpeg');
        },
        dueAllCheckboxOnChangeHandler() {
            console.log(this.set_payment_all_due)
            if(this.set_payment_all_due) {
                this.all_due_payment_confirmation_popup_modal = true
            }
        },
        cancelDuePaymentConfirmationClickHandler() {
            this.all_due_payment_confirmation_popup_modal = false
            this.set_payment_all_due = false
            document.querySelector('#deliveries-details-section #set_payment_all_due').checked = false
        },
        confirmDuePaymentConfirmationClickHandler() {
            this.createAllDUePamentAndProds()
            this.all_due_payment_confirmation_popup_modal = false
        },
        // -----------------------------------------------------------------------------
        // Payment Modal
        closePaymentModalClickHandler_Child() {
            this.PAYMENT_MODAL_IS_TRUE = false
        }
    },
    watch: { 
        async pending_order_list_by_id(newVal, oldVal){
            console.log('changes' + newVal)
            console.log('changes' + oldVal)
            this.PAYMENT_MODAL_IS_TRUE = false
            this.NO_PRODUCT_IN_CART_TO_DELIVER = false
            localStorage.removeItem("jerp_delivery_details_not_chandable_ordered_data");
            await this.CHECK_COLLECTION_LIST__FROM_SERVICE()
            setTimeout( () => {
                console.log(this.pending_order_list_by_id.invoice_details)
                this.SHOW_PRINT_ICON = true
                this.PENDING_ORDER_DATA_BY_ID = this.pending_order_list_by_id
                this.ORDERED_TABLE_DATA__INIT_LIST = this.pending_order_list_by_id.invoice_details
                this.ORDERED_TABLE_DATA__INIT_LIST_NOT_CHANGEABLE = this.pending_order_list_by_id.invoice_details
                localStorage.setItem('jerp_delivery_details_not_chandable_ordered_data', JSON.stringify(this.pending_order_list_by_id.invoice_details))
                this.ORDER_CREATED_BY = this.pending_order_list_by_id.created_by
                this.ORDER_AUTH_USER = this.pending_order_list_by_id.auth_user
                // console.log(this.PENDING_ORDER_DATA_BY_ID.is_verified)
                // console.log(this.INVOICE_ID_FROM_LEFT)

                /*let qty_edit_static_lists = document.querySelectorAll('.single_qty.quantity-setup')
                let qty_edit_dynamic_lists = document.querySelectorAll('.qty_editable.quantity-setup')
                for(let i=0; i<qty_edit_static_lists.length; i++) {
                    qty_edit_static_lists[i].className = 'single_qty quantity-setup'
                    qty_edit_dynamic_lists[i].className = 'qty_editable quantity-setup hide'
                }
                console.log(qty_edit_static_lists.length)*/
            }, 100)
            setTimeout( () => {
                this.createSubtotalCalculation()
                if(document.querySelector('#deliveries-details-section #set_payment_all_due').checked === true) {
                    document.querySelector('#deliveries-details-section #set_payment_all_due').checked = false
                }
            }, 500)
        },
    }
}
</script>

<style lang="less" scoped>
@import url('./DetailsSection.less');
</style>