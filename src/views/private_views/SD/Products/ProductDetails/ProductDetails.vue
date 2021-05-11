<template>
  <div id="product-details" class="product-details">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="layout-body">
      <ProductDetailsSidebar 
        v-on:select_prod_from_left="selectProdFromLeft"
        v-on:all_prods_list="getAllProdsList" />
      <ProductDetailsDetails
        :SELECTED_PROD_DETAILS="SELECTED_PROD_DETAILS"
        :SELECTED_PROD_ATTRIBUTES_DETAILS="SELECTED_PROD_ATTRIBUTES_DETAILS"
        :SELECTED_PROD_PRICE_DETAILS="SELECTED_PROD_PRICE_DETAILS"
        :SELECTED_PROD_OFFER_DETAILS="SELECTED_PROD_OFFER_DETAILS"
        :SELECTED_PROD_SBU_PROD_DETAILS="SELECTED_PROD_SBU_PROD_DETAILS"
        :SELECTED_PROD_DOCS_DETAILS="SELECTED_PROD_DOCS_DETAILS"
        :ALL_PRODS_LIST_IN_DB="ALL_PRODS_LIST_IN_DB"
        v-on:RELOAD_SELECTED_PROD_DETAILS="reloadSelectedProdDetails" />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import ProductDetailsSidebar from "./ProductDetails_Sidebar";
import ProductDetailsDetails from "./ProductDetails_Details";

import ERPSidebarService from "../../../../../service/ERPSidebarService";
const service = new ERPSidebarService();

export default {
  props: [],
  components: {
    Heading,
    ProductDetailsSidebar,
    ProductDetailsDetails,
  },
  data() {
    return {
      routeName: "Product Details",
      parentPath: "Local Sales",
      pathName: [],
      SELECTED_PROD_DETAILS: null,

      SELECTED_PROD_ATTRIBUTES_DETAILS: null,
      SELECTED_PROD_PRICE_DETAILS: null,
      SELECTED_PROD_OFFER_DETAILS: null,
      SELECTED_PROD_SBU_PROD_DETAILS: null,
      SELECTED_PROD_DOCS_DETAILS: null,
      ALL_PRODS_LIST_IN_DB: null,
    };
  },
  computed: {},
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  mounted() {},
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Product Details" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    async selectProdFromLeft(item) {
      console.log(item)
      await this.SELECT_SBU_PRODUCT_DETAILS_BY_PROD_ID__FROM_SERVICE(item.prod_id)
    },
    getAllProdsList(value) {
      this.ALL_PRODS_LIST_IN_DB = value
    },
    reloadSelectedProdDetails(value) {
      console.log(value)
      this.SELECT_SBU_PRODUCT_DETAILS_BY_PROD_ID__FROM_SERVICE(value)
    },
    // ---------------------------------------------------------------------------
    // SERVICE CALL
    async SELECT_SBU_PRODUCT_DETAILS_BY_PROD_ID__FROM_SERVICE(prod_id) {
      console.log(prod_id)
      this.SELECTED_PROD_DETAILS = null
      this.SELECTED_PROD_ATTRIBUTES_DETAILS = null
      this.SELECTED_PROD_PRICE_DETAILS = null
      this.SELECTED_PROD_OFFER_DETAILS = null
      this.SELECTED_PROD_SBU_PROD_DETAILS = null
      this.SELECTED_PROD_DOCS_DETAILS = null
      await service.getSBUProductDetails_PRODUCTS_DETAILS(prod_id)
        .then(res => {
          console.log(res.data)
          this.SELECTED_PROD_DETAILS = res.data.prod_details
          this.SELECTED_PROD_ATTRIBUTES_DETAILS = res.data.attr_details
          this.SELECTED_PROD_PRICE_DETAILS = res.data.price_details
          this.SELECTED_PROD_OFFER_DETAILS = res.data.prod_offer_details
          this.SELECTED_PROD_SBU_PROD_DETAILS = res.data.sbu_prod_detail
          this.SELECTED_PROD_DOCS_DETAILS = res.data.prod_docs
        })
        .catch(err => {
          if(err) {
            console.log('Server error : ' + err)
            this.SELECTED_PROD_DETAILS = null
            this.SELECTED_PROD_ATTRIBUTES_DETAILS = null
            this.SELECTED_PROD_PRICE_DETAILS = null
            this.SELECTED_PROD_OFFER_DETAILS = null
            this.SELECTED_PROD_SBU_PROD_DETAILS = null
            this.SELECTED_PROD_DOCS_DETAILS = null
          }
        })
    }
  },
  watch: {},
};
</script>

<style scoped>
</style>