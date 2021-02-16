<template>
    <div id="create-order-details-section" class="create-order-details-section">
        <div class="create-order-details-section-inner">
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
                            <span style="display: inline-block; width: 15%; font-size: 14px; float: left; line-height:1; padding-top: 6px;">SR: </span>
                            <div class="select-options" style="display: inline-block; width: 85%; font-size: 14px;">
                                <span class="right-icon"
                                    ><i class="fas fa-chevron-right"></i
                                ></span>
                                <select title="Pick a customer" class="selectpicker" @change="onChangeSRDropdown()">
                                    <option v-for="(sr, m) in sr_list" :key="m">
                                    {{ sr.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <p class="delivery-dt" style="width: 25%;">Expected Delivery Date: <span>09/12/2020</span></p>
                    </div>
                </div>
            </div>
            <!-- Order Table -->
            <div class="order-table">
                <div class="order-table-inner">
                    <table class="table" id="order-data-table">
                        <thead>
                            <tr>
                                <th style="border: none" v-for="(head, i) in order_table_header" :key="i">{{ head }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, i) in order_table_data" :key="i">
                                <td>
                                    <span>{{ data.name }}</span>
                                    <span>{{ data.stock }}</span>
                                </td>
                                <td>{{ data.unit_price }}</td>
                                <td>{{ data.quantity }}</td>
                                <td>{{ data.bonus }}</td>
                                <td>{{ data.total_price }}</td>
                                <td>Actions</td>
                            </tr>
                            <!-- Bottom Total Section -->
                            <tr id="subtotal-section" class="subtotal-section" style="border-top   : 1px solid #BFCFE2;">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style="width: 20%">
                                    <span class="subtotal">Subtotal</span>
                                    <span class="vat">(+) Vat</span>
                                    <span class="discount">(-) Discount</span>
                                    <span class="gross-tatal">Gross Total</span>
                                    <span class="atjustment">(+/-) Rounding Adjustment</span>
                                </td>
                                <td>
                                    <span class="subtotal">13,032.20</span>
                                    <span class="vat">50.00</span>
                                    <span class="discount">250.00</span>
                                    <span class="gross-tatal">13,032.20</span>
                                    <span class="atjustment">-0.20</span>
                                </td>
                                <td>Actions</td>
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
                                <td>Actions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Bottom Subtotal & Attachment Section -->
            <div class="submit-section">
                <div class="submit-section-inner">
                    <span class="cancel-order">Cancel Order</span>
                    <span class="proceed-order">Proceed Order</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./DetailsSection.less');
</style>