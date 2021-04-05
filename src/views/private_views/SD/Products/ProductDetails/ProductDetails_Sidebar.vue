<template>
  <div id="product-details-sidebar" class="product-details-sidebar">
    <div class="layout-sidebar product">
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
      <div class="content">
        <div class="card_body" v-for="(item, i) in prods_list" :key="i">
          <div class="row1">
            <h5>{{ item.prod_name }}</h5>
            <p class="new_product">{{ item.prod_class }}</p>
          </div>
          <div class="row2">
            <p>Code: {{ item.prod_code }}</p>
            <p>TP: {{ item.base_tp }} | MRP: {{ item.base_mrp }}</p>
          </div>
          <div class="row3">
            <p><span v-for="(elem, j) in item.element" :key="j">{{ elem.element_name }}</span></p>
            <!-- <p>Last Updated: 20-Sep-2020</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ERPSidebarService from "../../../../../service/ERPSidebarService";
const service = new ERPSidebarService();

export default {
  props: [],
  components: {},
  data() {
    return {
      prods_list: [],
    };
  },
  computed: {},
  created() {},
  async mounted() {
    await this.SEARCH_PRODUCT_DATA_LIST__FROM_SERVICE()
  },
  methods: {
    // ---------------------------------------------------------------------------
    // SERVICE CALL
    async SEARCH_PRODUCT_DATA_LIST__FROM_SERVICE() {
      this.prods_list = [];
      await service.getSearchProductDataList_CreateOrderDetailsSection()
        .then((res) => {
          console.log(res.data);
          this.prods_list = res.data.product_list;
          console.log(this.prods_list);
        })
        .catch((err) => {
          if (err) {
            this.prods_list = [];
            alert("Server Error 500. " + err);
          }
        });
    },
  },
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
  color: #aac0d9;
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
.layout-sidebar.product .content .card_body .row1 .new_product {
  padding: 2px 8px;
}
</style>