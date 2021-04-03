<template>
  <div id="products-sidebar" class="products-sidebar">
    <div class="layout-sidebar product">
      <!-- Start Secondary Sidebar Area-->
      <!-- Start Secondary Sidebar Header Area-->
      <div class="header">
        <div class="row1">
          <div class="form-group">
            <i class="fa fa-search"> </i>
            <input
              type="text"
              placeholder="Search by Name, ID No"
              class="form-control"
            />
          </div>
          <span class="filter_search"><i class="fa fa-filter"> </i> </span>
        </div>
      </div>
      <!--End Secondary Sidebar Header Area-->
      <!--Start Secondary Sidebar Content Area-->
      <div class="content">
        <div class="card_body" v-for="(item, i) in 20" :key="i">
          <div class="row1">
            <h5>{{ i + 1 }} Ace® Power - 500mg Ace®</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-2020</p>
          </div>
        </div>

        <!-- <div class="card_body">
          <div class="row1">
            <h5>Ace® Power - 500mg</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-2020</p>
          </div>
        </div>

        <div class="card_body">
          <div class="row1">
            <h5>Ace® Power - 500mg</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-2020</p>
          </div>
        </div>

        <div class="card_body">
          <div class="row1">
            <h5>Ace® Power - 500mg</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-2020</p>
          </div>
        </div>

        <div class="card_body">
          <div class="row1">
            <h5>Ace® Power - 500mg</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-2020</p>
          </div>
        </div>

        <div class="card_body">
          <div class="row1">
            <h5>Ace® Power - 500mg</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-2020</p>
          </div>
        </div>

        <div class="card_body">
          <div class="row1">
            <h5>Ace® Power - 500mg</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-2020</p>
          </div>
        </div>

        <div class="card_body">
          <div class="row1">
            <h5>Ace® Power - 500mg</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-2020</p>
          </div>
        </div>

        <div class="card_body">
          <div class="row1">
            <h5>Ace® Power - 500mg</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-2020</p>
          </div>
        </div>

        <div class="card_body">
          <div class="row1">
            <h5>Ace® Power - 500mg</h5>
            <p class="new_product">New</p>
          </div>
          <div class="row2">
            <p>Code: NP2125</p>
            <p>TP: 60.00 | MRP: 100.00</p>
          </div>
          <div class="row3">
            <p>Paracetamol</p>
            <p>Last Updated: 20-Sep-20200</p>
          </div>
        </div> -->
      </div>
      <!--End Secondary Sidebar Content Area-->
      <!-- End Secondary Sidebar Area-->
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.products-sidebar {
    height: calc(100vh - (74px + 54px + 32px));
}
.layout-sidebar .header .row1 {
    height: 38px;
}
.layout-sidebar .header .row1 .form-group {
    /* overflow: hidden; */
    height: 38px;
}
.layout-sidebar .header .row1 .form-group svg {
    position: absolute;
    top: 12px;
    left: 10px;
    color: #AAC0D9;
    font-size: var(--font14);
}
.header input {
    width: 80%;
    height: 36px;
    margin: 0;
    font-size: 14px;
}
.layout-sidebar .header .row2 h5 {
    font-weight: 500;
}
.layout-sidebar .content .card_body .row1 h5 {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
}
.layout-sidebar .content .card_body .row1 h5 {
    line-height: 1.5;
}
.jmi-scroll-section {
    height: calc(100vh - (74px + 54px + 32px + 108px)) !important;
}
</style>