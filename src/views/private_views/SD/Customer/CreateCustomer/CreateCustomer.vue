<template>
  <div id="customer-profile" class="customer-profile">
    <Heading :pathName="pathName" :routeName="routeName" />
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

export default {
  components: {
    Heading,
  },
  data() {
    return {
      routeName: "Create Customer",
      parentPath: "Local Sales",
      pathName: [],
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  mounted() {},
  methods: {
    createBreadcrumbData() {
    //   this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname);
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Create Customer" }];
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./CreateCustomer.less");
</style>