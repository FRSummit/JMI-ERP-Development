<template>
  <div id="order-approval" class="order-approval">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="order-approval-section">
      <div class="order-approval-section-inner">
        <LeftSidebarSection v-on:filter_modal="filterModalToggle" />
        <DetailsSection :style="filter_modal_toggle === true ? 'z-index: -1;' : 'z-index: 9;'"/>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

import LeftSidebarSection from "./LeftSidebarSection/LeftSidebarSection";
import DetailsSection from "./DetailsSection/DetailsSection";

export default {
  components: {
    Heading,
    LeftSidebarSection,
    DetailsSection,
  },
  data() {
    return {
      routeName: "Order Approval",
      parentPath: "Local Sales",
      pathName: [],
      filter_modal_toggle: false,
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
      this.pathName = [
        { name: "Features" },
        { name: "Local Sales" },
        { name: "Order Approval" },
      ];
    },
    filterModalToggle(value) {
      this.filter_modal_toggle = value
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./OrderApproval.less");
</style>