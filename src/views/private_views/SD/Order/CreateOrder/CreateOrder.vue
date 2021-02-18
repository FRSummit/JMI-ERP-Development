<template>
  <div id="create-order" class="create-order">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="create-order-section">
      <div class="create-order-section-inner">
        <LeftSidebar v-on:filter_modal="filterModalToggle" />
        <DetailsSection :style="filter_modal_toggle === true ? 'z-index: -1;' : 'z-index: 9;'" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

import LeftSidebar from './LeftSidebar/LeftSidebar'
import DetailsSection from './DetailsSection/DetailsSection'

export default {
  components: {
    Heading,
    LeftSidebar,
    DetailsSection,
  },
  data() {
    return {
      routeName: "Create Order",
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
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Create Order" }];
    },
    filterModalToggle(value) {
      this.filter_modal_toggle = value
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./CreateOrder.less");
</style>