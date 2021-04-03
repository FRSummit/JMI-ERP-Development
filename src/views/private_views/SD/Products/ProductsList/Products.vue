<template>
  <div id="products-list" class="products-list">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="layout-body">
        <ProductsSidebar />
        <ProductsDetails />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import ProductsSidebar from "./Products_Sidebar";
import ProductsDetails from "./Products_Details";

export default {
  props: [],
  components: {
    Heading,
    ProductsSidebar,
    ProductsDetails,
  },
  data() {
    return {
      routeName: "Products List",
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
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Products List" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
  watch: {},
};
</script>

<style scoped>
</style>