<template>
  <div id="landing-page" class="landing-page">
    <!-- Dashboard
    <router-link to="/about">About</router-link>
    <br />
    <router-link to="/competitors-data-mgt"
      >Competotprs Data Management</router-link
    >
    <br />
    <router-link to="/adm/sbu">ADM -> SBU</router-link>
    <br />
    <router-link to="/sd/sales-center">SD ---- Sales Center</router-link>
    <br />
    <router-link to="/sd/geo-location">SD ---- Geo Location</router-link>
    <br /> -->
    <!-- <router-link to="/sd/monthly-delivery-plan">SD ---- Monthly Delivery Plan</router-link> -->
    <div class="row" style="display: grid; justify-content: center; margin: 0;" v-if="BASE_URL === 'http://203.188.245.58:8889'">
      <div class="col-lg-12 col-md-12 col-sm-12 url-sec">
        <a style="width: auto; padding: 8px 20px; color: var(--red); background-color: #df35454d;">Development Server : Base URL -> {{ BASE_URL }}</a>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/delivery_plan">Monthly Delivery Plan</router-link>
      </div>
      <!-- <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/delivery_schedule">Delivery Scheduling</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/sd/delivery-process--packing-preparation">DS Packing Preparation</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/sd/invoice-challan-summery">Invoice Challan Summary</router-link>
      </div> -->
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/sd/dispatch-entry">Dispatch Entry</router-link>
      </div>
      <!-- <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/sd/pending-ds-invoice-list">Pending DS Invoice List</router-link>
      </div> -->
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/ds-transfer-packing-preparation">DS Transfer Packing Preparation</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/sales_order">Create Order</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/order_approval">Order Approval</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/customer_list">Customer List</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/create_customer">Create Customer</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/customer_profile:1">Customer Profile</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/doctors_list">Doctors List</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/create_doctor">Create Doctor</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/doctors_profile:1">Doctors Profile</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/deliveries">Deliveries</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/balance-sheet">Balance Sheet</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/reports/stock-report">Stock Report</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/delivery_grn">Delivery GRN SR</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/receive_grn">Receive GRN</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/transfer-requisition">Transfer Requisition</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/create-requisition">Create Requisition</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/approve-requisition">Approve Requisition</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/verified-requisition">Transfer Verify</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <!-- <router-link to="/features/local_sales/verified-requisition-update">Transfer Verify Update</router-link> -->
        <a @click="transferVerifyUpdateClickHandler" style="cursor: pointer;">Transfer Verify Update</a>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/transfer-approve-requisition">Transfer Approve</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/all-products">All Products</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/prod-details">Product Details</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/sd-collection">Collection</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/customer-payment">Customer Payment</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/cash-register">Cash Register</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/dp-ds">Delivery Schedule</router-link>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 url-sec">
        <router-link to="/features/local_sales/delivery-preparation">Delivery Preparation</router-link>
      </div>
    </div>
    
    <br />
    <!-- <router-link to="/sd/delivery-scheduling">SD ---- Delivery Scheduling</router-link> -->
    
    <!-- <br />
    <br />
    <br />
    <router-link to="/401">401</router-link>
    <br />
    <router-link to="/404">404</router-link>
    <br />
    <router-link to="/408">408</router-link>
    <br />
    <router-link to="/503">503</router-link>
    <br />
    <router-link to="/under-construction">Under Construction</router-link>
    <br />
    <router-link to="/under-maintenance">Under Maintenance</router-link> -->
    <!-- <br />
    <br />
    <h1 id="printMe">Print me!</h1>
    <br />
    <br />
    <button @click="print">Print</button> -->
  </div>
</template>

<script>
import env from '../../environment'

export default {
  components: {
  },
  data() {
    return {
      output: null,
      BASE_URL: null
    };
  },
  created() {
    this.$emit('routeName', this.$route.name);
  },
  mounted() {
    this.$emit('new_dashboard_occured')
    this.BASE_URL = env.apiBaseUrl
    // window.location.hash = "no-back-button";

    // // Again because Google Chrome doesn't insert
    // // the first hash into the history
    // window.location.hash = "Again-No-back-button"; 

    // window.onhashchange = function(){
    //     window.location.hash = "no-back-button";
    // }
    // window.history.forward();
    // this.noBack()
  },
  methods: {
    noBack() {
      window.history.forward();
    },
    transferVerifyUpdateClickHandler() {
      alert('Go to Transfer Verify Requisition page and edit data.')
    },
    print() {
      console.log("working");
      this.$htmlToPaper("printMe", null, () => {
        console.log("Printing completed or was cancelled!");
      });
    },
  },
};
</script>

<style scoped>
@import '../../custom.css';


button {
  background: #026cd1;
  color: #fff;
  padding: 7px 20px;
  border-radius: 4px;
  cursor: pointer;
}
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-8,
.col-lg-10,
.col-lg-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-8,
.col-md-10,
.col-md-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-8,
.col-sm-10,
.col-sm-12 {
    padding: 0;
}
#landing-page.landing-page .url-sec a {
  width: auto;
  margin: 4px;
}
</style>