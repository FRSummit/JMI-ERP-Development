<template>
  <div id="product-details" class="product-details">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="layout-body">
      <ProductDetailsSidebar />
      <ProductDetailsDetails />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import ProductDetailsSidebar from "./ProductDetails_Sidebar";
import ProductDetailsDetails from "./ProductDetails_Details";

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
  },
  watch: {},
};
</script>

<style scoped>
</style>