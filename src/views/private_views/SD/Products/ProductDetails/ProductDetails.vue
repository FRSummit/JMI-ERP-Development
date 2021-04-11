<template>
  <div id="product-details" class="product-details">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="layout-body">
      <ProductDetailsSidebar 
        v-on:select_prod_from_left="selectProdFromLeft" />
      <ProductDetailsDetails
        :SELECTED_PROD_DETAILS="SELECTED_PROD_DETAILS" />
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
    // ---------------------------------------------------------------------------
    // SERVICE CALL
    async SELECT_SBU_PRODUCT_DETAILS_BY_PROD_ID__FROM_SERVICE(prod_id) {
      console.log(prod_id)
      this.SELECTED_PROD_DETAILS = null
      service.getSBUProductDetails_PRODUCTS_DETAILS(prod_id)
        .then(res => {
          console.log(res.data)
          this.SELECTED_PROD_DETAILS = res.data.prod_details
        })
        .catch(err => {
          if(err) {
            console.log('Server error : ' + err)
            this.SELECTED_PROD_DETAILS = null
          }
        })
    }
  },
  watch: {},
};
</script>

<style scoped>
</style>