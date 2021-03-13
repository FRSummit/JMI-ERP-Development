<template>
    <div id="order-approval-details-section" class="order-approval-details-section">
        <div class="order-approval-details-section-inner">
            <div class="print-section" v-if="SHOW_PRINT_ICON">
                <span class="print-icon" @click="printInvoiceClickHandler"><i class="zmdi zmdi-print"></i></span>
            </div>
            <div class="title-section">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Invoice No:</span><span class="id">{{ PENDING_ORDER_DATA_BY_ID ? PENDING_ORDER_DATA_BY_ID.order_no : "" }}</span></p></div>
                    <div class="col-lg-6 col-md-6 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Customer:</span><span class="jmi-lvl-value id url" @click="customerDetailsClickHandler">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? PENDING_ORDER_DATA_BY_ID.sbu_customer_info.display_name : '') : '' }}</span></p></div>
                    <div class="col-lg-3 col-md-4 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Status:</span> <span class="jmi-lvl-value">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.is_approved === 'N' ? 'Pending' : '') : '' }}</span></p></div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12"><p class="jmi-title">Territory ID: <span class="jmi-lvl-value">{{ PENDING_ORDER_DATA_BY_ID ? PENDING_ORDER_DATA_BY_ID.territory_id : '' }}</span></p></div>
                    <div class="col-lg-9 col-md-8 col-sm-12"><p class="jmi-title"><span class="jmi-lvl">Address:</span><span class="jmi-lvl-value address">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_address ? PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_address : '') : '') : '' }}</span></p></div>
                    
                </div>
            </div>
            
            <div class="header-summery-section">
                <div class="header-summery-section-inner">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="am">AM: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info.name) : '') : '') : '') : '') : '' }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6"><p class="mio">MIO: <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_80">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info ? (PENDING_ORDER_DATA_BY_ID.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info.name) : '') : '') : '') : '') : '') : '') : '' }}</span></p></div>
                        <div class="col-lg-3 col-md-6 col-sm-6" style="line-height: 1;">
                            <div class="sr" style="display: table-cell; width: 33%; padding-right: 20px; padding-bottom: 0; line-height: 1;">
                                <span class="jmi-lvl">SR: </span>
                                <p class="selectpicker-pera"> 
                                    <span class="jmi-lvl-value jmi-txt-nowrap-ellipsis-middle_70">{{ selected_sr }}</span>
                                    <span class="sr-modal" v-if="sr_add_modal">
                                        <span class="sr-modal-inner" v-click-outside="srModalSectionOutsideClick">
                                            <span class="jmi-title">Select SR</span>
                                            <span class="sr-loop" v-for="(sr, m) in SR_LIST__DA" :key="m">
                                                <span  class="sr-name" @click="selectedSRClickHandler(sr.name)">{{ sr.name }}</span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <span class="sr-add-icon" @click="srAddIconClickHandler"><i class="zmdi zmdi-plus"></i></span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 right_side_row"><p class="delivery-dt"><span class="jmi-lvl" style="font-size: 15px;">Delivery:</span> <span class="jmi-lvl-value"><input type="date" v-model="header_date" id="expected-delivery-date" placeholder="09/12/2020" /></span></p></div>
                    </div>
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
                            <div class="table-data-rows"><div id="progressbar" class="jmi-progressbar" v-if="!ORDERED_TABLE_DATA__INIT_LIST || !PENDING_ORDER_DATA_BY_ID">
                                    <!-- <v-progress-circular indeterminate color="primary"></v-progress-circular> -->
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
                                                <span class="single_qty quantity-setup" v-if="STOCK_TRANSIT_VALIDATION === false">
                                                    <span class="qty" v-if="( parseInt(data.net_qty) <= parseInt(data.available_stock) ) || (data.available_stock === null)">{{ data.qty }}</span>
                                                    <span class="qty" v-if="parseInt(data.net_qty) > parseInt(data.available_stock)" :class="parseInt(data.net_qty) > parseInt(data.available_stock) ? 'jmi-stock-out' : ''">{{ data.qty }}
                                                        <span class="tool-tip">
                                                            <p class="txt">Stock:<span>{{ data.available_stock }}</span></p>
                                                            <p class="txt">In Transit: <span>{{ data.transit_stock }}</span></p>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span class="single_qty quantity-setup" v-if="STOCK_TRANSIT_VALIDATION === true">
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
                                            <!-- <span v-if="!data.row_class">{{ data ? (data.offer ? (data.offer.offer ? (data.offer.offer.discount_percentage ? (data.offer.offer.discount_percentage) : 0) : 0) : 0) : 0 }}%</span>
                                            <span v-if="data.row_class"></span> -->
                                            <span v-if="!(data.deal_type === 'F' && data.net_amount === '0')">{{ data ? (data.offer ? (data.offer.offer ? (data.offer.offer.discount_percentage ? Number(data.offer.offer.discount_percentage).toFixed(2) : 0) : 0) : 0) : 0 }}%</span>
                                        </td>
                                        <!-- Bonus Column -->
                                        <td>
                                            <span>{{ data.offer.offer_type === "bonus" ? parseInt(data.qty / (data.offer.offer.bonus_on)) : data.bonus_qty }}</span>
                                        </td>
                                        <!-- Total Price Column -->
                                        <!-- <td>{{ Number(data.tp).toFixed(2) }}</td> -->
                                        <td>
                                            <span v-if="!(data.deal_type === 'F' && data.net_amount === '0')">{{ Number((data.unit_tp) * (data.qty)).toFixed(2) }}</span>
                                        </td>
                                        <!-- Option Column -->
                                        <td class="row-action jmi-tr-td-option" style="min-width: 70px; text-align: right;">
                                            <span v-if="!(data.deal_type === 'F' && data.net_amount === '0')">
                                                <span class="icon edit-icon" @click="editOrderitemClickHandler(data, i)" v-if="productTableEditableIsValid(data.available_stock, data.transit_stock, data.net_qty)"><i class="zmdi zmdi-edit"></i></span>
                                                <span class="icon delete-icon" @click="deleteOrderitemClickHandler(data, i)"><i class="fas fa-trash-alt"></i></span>
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
                                    <td style="width: 50%; text-align: left;"></td>
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
            <div class="submit-section" v-if="ORDERED_TABLE_DATA__INIT_LIST && PENDING_ORDER_DATA_BY_ID">
                <div class="submit-section-inner">
                    <span class="proceed-order" @click="updateOrderClickHandler" style="margin-right: 20px;" v-if="UPDATE_BTN_ENABLE">Update Order</span>
                    <span class="proceed-order" @click="proceedOrderClickHandler" v-if="!UPDATE_BTN_ENABLE">Approve Order</span>
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
                                <img src="../../../../../assets/icons/user.png" alt="logo">
                            </div>
                            <div class="title-section">
                                <p class="name">{{ SHOW_CUSTOMER_PROFILE ? SHOW_CUSTOMER_PROFILE.display_name : '' }}<span class="tik-icon"><i class="zmdi zmdi-check"></i></span></p>
                                <p class="id">{{ PENDING_ORDER_DATA_BY_ID ? (PENDING_ORDER_DATA_BY_ID.order_no) : '' }}</p>
                            </div>
                            <div class="tab-section">
                                <div class="tab-section-inner">
                                    <b-tabs class="mt-3 order-approval-customer-details">
                                        <b-tab title="Basic" active>
                                            <div class="basic-section">
                                                <div class="basic-section-inner">
                                                    <p class="basic-data"><span class="lvl">Customer Name:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? SHOW_CUSTOMER_PROFILE.display_name : '' }}</span></p>
                                                    <p class="basic-data"><span class="lvl">Contact Number:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info.phone ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info.phone) : '') : '') : '') : '' }}</span></p>
                                                    <p class="basic-data"><span class="lvl">Email Address:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info.email ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info.email) : '') : '') : '') : '' }}</span></p>
                                                    <p class="basic-data"><span class="lvl">Address:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info.address ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info.address) : '') : '') : '') : '' }}</span></p>
                                                    <p class="basic-data"><span class="lvl">Customer Type:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.customer_type ? (SHOW_CUSTOMER_PROFILE.customer_info.customer_type.description) : '') : '') : '' }}</span></p>
                                                    <p class="basic-data"><span class="lvl">Sales Area:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_area_info ? (SHOW_CUSTOMER_PROFILE.customer_area_info.sales_area ? (SHOW_CUSTOMER_PROFILE.customer_area_info.sales_area.area_name ? (SHOW_CUSTOMER_PROFILE.customer_area_info.sales_area.area_name) : '') : '') : '') : '' }}</span></p>
                                                    <p class="basic-data"><span class="lvl">Sales Center:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_area_info ? (SHOW_CUSTOMER_PROFILE.customer_area_info.sales_area ? (SHOW_CUSTOMER_PROFILE.customer_area_info.sales_area.area_name ? (SHOW_CUSTOMER_PROFILE.customer_area_info.sales_area.area_name) : '') : '') : '') : '' }}</span></p>
                                                    <!-- <p class="basic-data"><span class="lvl">Credit Limit:</span><span class="lvl-value">2,00,000</span></p> -->
                                                    <p class="basic-data"><span class="lvl">Type of Payment:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.credit_flag === 'Y' ? 'Cash' : 'Credit') : '' }}</span></p>
                                                </div>
                                            </div>
                                        </b-tab>
                                        <b-tab title="Accounts">
                                            <div class="account-section">
                                                <div class="account-section-inner">
                                                    <div class="jmi-row">
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Total Order:</span><span class="jmi-lvl-value">{{ SHOW_CUSTOMER_PROFILE ? SHOW_CUSTOMER_PROFILE.total_order : '' }}</span></p>
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Total Invoice:</span><span class="jmi-lvl-value">{{ SHOW_CUSTOMER_PROFILE ? SHOW_CUSTOMER_PROFILE.total_invoice : '' }}</span></p>
                                                        <p class="jmi-col_33"><span class="jmi-lvl">In Transit:</span><span class="jmi-lvl-value">{{ SHOW_CUSTOMER_PROFILE ? SHOW_CUSTOMER_PROFILE.total_order : '' }}</span></p>
                                                    </div>
                                                    <div class="jmi-row">
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Credit Limit:</span><span class="jmi-lvl-value">{{ SHOW_CUSTOMER_PROFILE ? SHOW_CUSTOMER_PROFILE.total_order : '' }}</span></p>
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Current Outstanding:</span><span class="jmi-lvl-value">{{ SHOW_CUSTOMER_PROFILE ? SHOW_CUSTOMER_PROFILE.total_order : '' }}</span></p>
                                                        <p class="jmi-col_33"><span class="jmi-lvl">Available Limit:</span><span class="jmi-lvl-value">{{ SHOW_CUSTOMER_PROFILE ? SHOW_CUSTOMER_PROFILE.total_order : '' }}</span></p>
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
                                                    <p class="business-data"><span class="lvl">Vat Registration Number:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.vat_reg_no ? SHOW_CUSTOMER_PROFILE.customer_info.vat_reg_no : '') : '') : '' }}</span></p>
                                                    <p class="business-data"><span class="lvl">Trade License:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.trade_licence_no ? SHOW_CUSTOMER_PROFILE.customer_info.trade_licence_no : '') : '') : '' }}</span></p>
                                                    <p class="business-data"><span class="lvl">VIN:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.vin_no ? SHOW_CUSTOMER_PROFILE.customer_info.vin_no : '') : '') : '' }}</span></p>
                                                    <p class="business-data"><span class="lvl">TIN:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.tin_no ? SHOW_CUSTOMER_PROFILE.customer_info.tin_no : '') : '') : '' }}</span></p>
                                                    <p class="business-data"><span class="lvl">BIN:</span><span class="lvl-value">{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.bin_no ? SHOW_CUSTOMER_PROFILE.customer_info.bin_no : '') : '') : '' }}</span></p>
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
                                                    <p class="location-details"><span class="icon"><i class="zmdi zmdi-pin"></i></span>{{ SHOW_CUSTOMER_PROFILE ? (SHOW_CUSTOMER_PROFILE.customer_info ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info.address ? (SHOW_CUSTOMER_PROFILE.customer_info.person_info.address) : '') : '') : '') : '' }}</p>
                                                    <p class="union-type"><span>Dummy: Micro Union</span></p>
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
        <!-- Reject Order Modal -->
        <div class="modal-popup-section order-proceed-modal" v-if="reject_order_modal_popup">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">You want to reject the order.</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                <div class="popup-cancel-btn-section" @click="cancelRejectionOrderModalClickHandler">
                    <span>Cancel</span>
                </div>
                <div class="popup-confirm-btn-section" @click="proceedRejectionOrderModalClickHandler">
                    <span>Proceed</span>
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
        <!-- Approve Product Confirmation -->
        <div class="modal-popup-section order-proceed-modal" v-if="approve_product_confirmation_popup_modal">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">You want to approve the order.</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                <div class="popup-cancel-btn-section">
                    <span @click="cancelApprovingSingleOrderClickHandler">Cancel</span>
                </div>
                <div class="popup-confirm-btn-section">
                    <span @click="confirmApprovingSingleOrderClickHandler">Confirm</span>
                </div>
                </div>
            </div>
        </div>
        <!-- Order Approved Message -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="approved_single_order_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">{{ ORDER_SUCCESS_MESSAGE }}</p>
            </div>
        </div>
        <!-- Order Approved Message -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="removing_last_product_from_cart">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Please reject this order.</p>
            </div>
        </div>
    </div>
</template>

<script>
// import AdvancedSearch from 'vue-advanced-search'
import * as VueGoogleMaps from 'vue2-google-maps'

import JMIFilter from '.././../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

import PP_Invoice_Type_1 from '../../../../../functions/Print_Func/PP_Invoice_Type_1'
const ppInvoice_Type_1 = new PP_Invoice_Type_1()

// import DemoPrintData from './DemoPrintData'
// const demoPrintData = new DemoPrintData()

export default {
    props: ["pending_order_list_by_id", "order_id_from_left_side"],
    components: {
        // AdvancedSearch 
    },
    data() {
        return {
            on_change_SR_dropdown: null,
            SR_LIST__DA: [],
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
            PENDING_ORDER_DATA_BY_ID: null,
            SELECTED_ORDERED_PRODUCTS__INIT_LIST: [],
            SELECTED_ORDERED_PRODUCTS__STORE: [],
            RESPONSE_ORDERED_PRODUCTS__STORE: [],
            DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST: [],
            DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST_2: [],
            ORDERED_TABLE_DATA__INIT_LIST: this.pending_order_list_by_id.order_details,
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
        expectedDateCalendarClick() {
            console.log('expectedDateCalendarClick')
        },
        //------------------------------------------------------------------------------------------
        // Table List Actions
        // Increase Table Row's Single Product/Order
        increaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
            console.log(parseInt(data.qty))
            console.log(parseInt(data.available_stock))
            console.log(parseInt(data.transit_stock))
            if(parseInt(this.ORDER_CREATED_BY) !== parseInt(this.ORDER_AUTH_USER)) {
                // data.qty
                console.log('difference')
                data.qty++
                this.UPDATE_BTN_ENABLE = true
                if(data.qty > this.DIC_OR_MIO_OR_AM_USER_QTY_COUNT) {
                    data.qty--
                    this.UPDATE_BTN_ENABLE = false
                }
            } else {
                data.qty++
                this.UPDATE_BTN_ENABLE = true
            }
            if(parseInt(data.net_qty) > parseInt(data.available_stock) && parseInt(data.available_stock) > 0) {
                this.DISABLE_SUBMISSION_BTN = false
            } else {
                this.DISABLE_SUBMISSION_BTN = true 
            }
            this.createSubtotalCalculation()
            // this.UPDATE_BTN_TRUE = true
            // this.createSubtotalCalculation()
            // Free Product row quantity increase
            if(data.offer.offer_type === "free") {
                let bonus = parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[index + 1].bonus_qty)
                bonus = parseInt(parseInt(data.qty) / parseInt(data.offer.offer.free_req_qty))
                this.ORDERED_TABLE_DATA__INIT_LIST[index + 1].bonus_qty = bonus
            }
            console.log(data.offer.offer.free_req_qty)
            // console.log(this.ORDERED_TABLE_DATA__INIT_LIST[index + 1].bonus_qty)
            console.log(data.qty)
        },
        // Decrease Table Row's Single Product/Order
        decreaseOrderedItemClickHandler(data, index) {
            console.log(data + '    ' + index)
            console.log(data)
            if(data.qty > 1) {
                data.qty--
                this.UPDATE_BTN_ENABLE = true
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
        // Increase Table Row's Single Product/Order
        increaseOrderedItemClickHandler_2(data, index) {
            console.log(data + '    ' + index)
            data.quantity++
            this.UPDATE_BTN_ENABLE = true
            // this.UPDATE_BTN_TRUE = true
            // this.createSubtotalCalculation()
            // Free Product row quantity increase
            // if(data.offer_type === "free") {
            //     this.ORDERED_TABLE_DATA__INIT_LIST[index + 1].quantity++
            // }
        },
        // Decrease Table Row's Single Product/Order
        decreaseOrderedItemClickHandler_2(data, index) {
            console.log(data + '    ' + index)
            if(data.quantity > 1) {
                data.quantity--
                this.UPDATE_BTN_ENABLE = true
                // this.UPDATE_BTN_TRUE = true
                // this.createSubtotalCalculation()
            }
            // Free Product row quantity decrease
            // if(data.offer_type === "free") {
            //     this.ORDERED_TABLE_DATA__INIT_LIST[index + 1].quantity--
            // }
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
        editOrderitemClickHandler_2(data, index) {
            // this.UPDATE_QUANTITY_ENABLE_2 = true
            console.log(data + '    ' + index)
            console.log(data + '    ' + index)
            let selector_qty_1 = document.querySelector('#order-data-table-tr_2-' + index + ' #order-data-table-tr-td_2-' + index + ' .single_qty')
            let selector_qty_2 = document.querySelector('#order-data-table-tr_2-' + index + ' #order-data-table-tr-td_2-' + index + ' .qty_editable')
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
            if(this.ORDERED_TABLE_DATA__INIT_LIST.length > 1) {
                for (let [i, tt] of this.ORDERED_TABLE_DATA__INIT_LIST.entries()) {
                    if (tt.product_id === this.delete_product_from_table_popup_modal_data.product_id) {
                        this.ORDERED_TABLE_DATA__INIT_LIST.splice(i, 1);
                        // for(let [x, y] of this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.entries()) {
                        //     if (y.prod_id === this.delete_product_from_table_popup_modal_data.product_id) {
                        //         this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.splice(x, 1);
                        //     }
                        // }
                        this.DELETED_PRODUCT_LIST__FROM_ORDERED_TABLE_DATA__INIT_LIST.push(this.delete_product_from_table_popup_modal_data)
                        // Free Product row delete
                        // if(data.offer_type === "free") {
                        //     this.ORDERED_TABLE_DATA__INIT_LIST.splice(i, 1);
                        // }
                    }
                }
                await this.DESTROY_ORDER_DETAILS_BY_ID__FROM_SERVICE(this.delete_product_from_table_popup_modal_data.id)
                this.createSubtotalCalculation()
            } else {
                this.delete_product_from_table_popup_modal = false
                this.removing_last_product_from_cart = true
                setTimeout( () => {
                    this.removing_last_product_from_cart = false
                }, 2000)
            }
            // console.log(this.delete_product_from_table_popup_modal_data)
            // this.delete_product_from_table_popup_modal_data = null
            // console.log(this.delete_product_from_table_popup_modal_data)
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
        async addOrderClickHandler() {
            this.SELECTED_ORDERED_PRODUCTS__INIT_LIST = []
            if(this.add_order_modal) {
                this.add_order_modal = false
            } else {
                this.add_order_modal = true
                this.ADD_PRODUCT_MODAL_SUBMITION_SECTION = true
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
        orderForwardClickHandler() {
            if(this.order_forward_modal) {
                this.order_forward_modal = false
            } else {
                this.order_forward_modal = true
            }
        },
        orderRejectClickHandler() {
            console.log(this.ORDERED_TABLE_DATA__INIT_LIST[0].order_id)
            if(this.reject_order_modal_popup) {
                this.reject_order_modal_popup = false
            } else {
                this.reject_order_modal_popup = true
            }
        },
        cancelRejectionOrderModalClickHandler() {
            this.reject_order_modal_popup = false
        },
        async proceedRejectionOrderModalClickHandler() {
            await this.CANCEL_ORDER_BY_ORDER_ID__FROM_SERVICE(this.ORDERED_TABLE_DATA__INIT_LIST[0].order_id)
            this.defaultAllThisComponentData()
        },
        async updateOrderClickHandler() {
            console.log('update order')
            console.log(this.ORDERED_TABLE_DATA__INIT_LIST)
            console.log(this.ORDERED_TABLE_DATA__INIT_LIST_2)
            // this.UPDATE_QUANTITY_ENABLE_1 = false
            // this.UPDATE_QUANTITY_ENABLE_2 = false

            let prod_list = []
            for(let i=0; i<this.ORDERED_TABLE_DATA__INIT_LIST.length; i++) {
                let prod_obj = {
                    prod_id: parseInt(this.ORDERED_TABLE_DATA__INIT_LIST[i].product_id),
                    quantity: this.ORDERED_TABLE_DATA__INIT_LIST[i].qty ? this.ORDERED_TABLE_DATA__INIT_LIST[i].qty : 0
                }
                prod_list.push(prod_obj)
            }
            console.log(prod_list)
            await this.UPDATE_ORDER__FROM_SERVICE(prod_list)
            this.createSubtotalCalculation()
            
            // input qty hide and span qty displaying
            for(let i=0; i<document.querySelectorAll('.single_qty.quantity-setup').length; i++) {
                document.querySelectorAll('.single_qty.quantity-setup')[i].className = 'single_qty quantity-setup'
                document.querySelectorAll('.qty_editable.quantity-setup')[i].className = 'qty_editable quantity-setup hide'
            }
            // this.defaultAllThisComponentData()
        },
        proceedOrderClickHandler() {
            this.approve_product_confirmation_popup_modal = true
        },
        cancelApprovingSingleOrderClickHandler() {
            this.approve_product_confirmation_popup_modal = false
        },
        async confirmApprovingSingleOrderClickHandler() {
            this.approve_product_confirmation_popup_modal = false
            await this.APPROVE_SINGLE_ORDER__FROM_SERVICE()
            this.createSubtotalCalculation()
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
        async addItemsFromModalClickHandler() {
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
            console.log(prod_db_list)
            // CALL SERVICE IMPLEMENTATION FUNCTION
            // await this.FIND_PRODUCT_OFFER__FROM_SERVICE(prod_db_list)
            this.ADD_PRODUCT_FROM_AUTOFILL_SECOND_FULL_PERAM(prod_db_list)
            // Close Modal
            if(prod_db_list.length > 0) {
                this.add_order_modal = false
                this.ADD_PRODUCT_MODAL_SUBMITION_SECTION = false
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
        async sendOrderForwardClickHandler() {
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
        async printInvoiceClickHandler() {
            // ppInvoice_Type_1.print_invoice(demoPrintData.print_sdr_023_data())
            await this.PRINT_THIS_ORDER_DETAILS__INVOICE__FROM_SERVICE()
            
        },
        // ------------------------------------------------------------------------------------------
        // Service Implementation
        async DIC_WISE_USERS__FROM_SERVICE() {
            await service.getDICWiseUsers_MonthlyDeliveryPlan()
                .then(res => {
                    console.log(res.data)
                    this.SR_LIST__DA = res.data.users.da
                })
        },
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
                    this.createSubtotalCalculation()
                })
        },
        async FIND_PRODUCT_OFFER__FROM_SERVICE(prod_db_list) {
            let sbu_id = parseInt(JSON.parse(localStorage.getItem("user")).user_detils.sbu_id)
            let customer_id = parseInt(this.customer_data ? this.customer_data.customer_id : 0)
            
            await service.getFindProductOffer_CreateOrderDetailsSection(prod_db_list, sbu_id, customer_id, this.createYYYYDDMM())
                .then(res => {
                    console.log(res.data)
                    this.ADD_PRODUCT_FROM_AUTOFILL_SECOND_FULL_PERAM(res.data.data)
                })
        },
        async SHOW_CUSTOMER_PROFILE__FROM_SERVICE(customer_id) {
            await service.getShowCustomerProfile_OrderApproval(customer_id)
                .then(res => {
                    // console.log(res.data.customer_info)
                    this.SHOW_CUSTOMER_PROFILE = res.data.customer_info
                })
        },
        async CANCEL_ORDER_BY_ORDER_ID__FROM_SERVICE(order_id) {
            await service.getCancelOrderByOrderId_OrderApproval(order_id)
                .then(res => {
                    console.log(res.data)
                    this.$emit('remove_rejected_order_id_from_left_list', order_id)
                })
        },
        async DESTROY_ORDER_DETAILS_BY_ID__FROM_SERVICE(id){
            console.log(id)
            await service.getDestroyOrderDetailsById_OrderApproval(id)
                .then(res => {
                    console.log(res.data)
                    this.delete_product_from_table_popup_modal_data = null
                    this.delete_product_from_table_popup_modal = false
                    this.$emit('reload_this_order', this.order_id_from_left_side)
                })
        },
        async ADD_PRODUCT_FROM_AUTOFILL_SECOND_FULL_PERAM(prod_db_list){
            console.log(this.order_id_from_left_side)
            console.log(prod_db_list)
            await service.getAddNewProdOnExistOrderByOrderId_OrderApproval(this.order_id_from_left_side, prod_db_list)
                .then(res => {
                    console.log(res.data)
                    /*this.ORDERED_TABLE_DATA__INIT_LIST = []
                    this.ORDERED_TABLE_DATA__INIT_LIST = res.data.order.order_details
                    this.createSubtotalCalculation()*/
                    this.$emit('reload_this_order', this.order_id_from_left_side)
                })
        },
        async UPDATE_ORDER__FROM_SERVICE(prod_list) {
            await service.getUpdateOrderByOrderId_OrderApproval(this.order_id_from_left_side, prod_list)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200) {
                        this.UPDATE_BTN_ENABLE = false
                        this.product_update_successfully_modal = true
                        this.$emit('reload_this_order', this.order_id_from_left_side)
                        setTimeout( () => {
                            this.product_update_successfully_modal = false
                        }, 2000)
                    }
                })
        },
        async APPROVE_SINGLE_ORDER__FROM_SERVICE() {
            console.log('Approve single order')
            await this.check_STOCK_TRANSIT_VALIDATION()
            this.approve_product_confirmation_popup_modal = false
            if(this.STOCK_TRANSIT_VALIDATION === false) {
                await service.getApproveSingleOrderByOrderId_OrderApproval(this.order_id_from_left_side)
                    .then(res => {
                        console.log(res.data)
                        if(res.data.response_code === 200) {
                            this.approve_product_confirmation_popup_modal = false
                            this.approved_single_order_modal = true
                            this.ORDER_SUCCESS_MESSAGE = res.data.message
                            this.$emit('single_order_approved', this.order_id_from_left_side)
                            this.defaultAllThisComponentData()
                            setTimeout( () => {
                                this.approved_single_order_modal = false
                                this.ORDER_SUCCESS_MESSAGE = null
                            }, 2000)
                        } else {
                            this.approve_product_confirmation_popup_modal = false
                            this.approved_single_order_modal = true
                            this.ORDER_SUCCESS_MESSAGE = res.data.message
                            this.$emit('single_order_approved_failed', this.order_id_from_left_side)
                            setTimeout( () => {
                                this.approved_single_order_modal = false
                                this.ORDER_SUCCESS_MESSAGE = null
                            }, 2000) 
                        }
                    }).catch(err => {
                        console.log(err)
                    })
            } else {
                this.approve_product_confirmation_popup_modal = false
            }
            /*await service.getApproveSingleOrderByOrderId_OrderApproval(this.order_id_from_left_side)
                .then(res => {
                    console.log(res.data)
                    this.approve_product_confirmation_popup_modal = false
                    this.approved_single_order_modal = true
                    this.ORDER_SUCCESS_MESSAGE = res.data.message
                    this.$emit('single_order_approved', this.order_id_from_left_side)
                    this.defaultAllThisComponentData()
                    setTimeout( () => {
                        this.approved_single_order_modal = false
                        this.ORDER_SUCCESS_MESSAGE = null
                    }, 2000)
                })*/
        },
        async PRINT_THIS_ORDER_DETAILS__INVOICE__FROM_SERVICE() {
            await service.getPrintOrderDetails_OrderApproval_INVOICE(this.order_id_from_left_side)
                .then(res => {
                    console.log(res.data.order_info.order_details)
                    ppInvoice_Type_1.print_invoice(res.data.order_info)
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
        // -----------------------------------------------------------------------------------------------
        async GENERATE_ORDERED_PRODUCTS_DETAILS_LIST_FROM_PRODUCT_OFFER_RESPONSE() {
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
            this.createSubtotalCalculation()
            console.log(this.ORDERED_TABLE_DATA__INIT_LIST_2)
            this.UPDATE_BTN_TRUE = false
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
        set_Or_Change_SR(da_id) {
            console.log(da_id)
            for(let i=0; i<this.SR_LIST__DA.length; i++) {
                if(this.SR_LIST__DA[i].id === parseInt(da_id)) {
                    this.selected_sr = this.SR_LIST__DA[i].name
                }
            }
        },
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
    },
    watch: { 
        async pending_order_list_by_id(newVal, oldVal){
            console.log('changes' + newVal)
            console.log('changes' + oldVal)
            console.log('SR DA ID ' + this.pending_order_list_by_id.da_id)
            // if()
            // console.log(this.pending_order_list_by_id.order_details)
            // await this.defaultAllThisComponentData()
            setTimeout( () => {
                console.log(this.pending_order_list_by_id.order_date)
                // console.log(this.pending_order_list_by_id)
                this.SHOW_PRINT_ICON = true
                this.PENDING_ORDER_DATA_BY_ID = this.pending_order_list_by_id
                this.ORDERED_TABLE_DATA__INIT_LIST = this.pending_order_list_by_id.order_details
                this.set_Or_Change_SR(this.pending_order_list_by_id.da_id)
                this.set_Or_Change_Date(this.pending_order_list_by_id.order_date)
                // this.ORDER_CREATED_BY = 101
                this.ORDER_CREATED_BY = this.pending_order_list_by_id.created_by
                this.ORDER_AUTH_USER = this.pending_order_list_by_id.auth_user
                console.log(this.PENDING_ORDER_DATA_BY_ID.is_verified)
                console.log(this.order_id_from_left_side)
                this.createSubtotalCalculation()
                console.log(this.ORDERED_TABLE_DATA__INIT_LIST)
            }, 100)
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