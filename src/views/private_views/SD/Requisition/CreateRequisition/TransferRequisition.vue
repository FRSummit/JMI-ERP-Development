<template>
  <div id="transfer-requisition" class="transfer-requisition">
    <Heading :pathName="pathName" :routeName="routeName" />
    <!-- <div class="transfer-requisition-inner"> -->
    <div class="layout-body">
      <TransferRequisitionLeftSection />
      <TransferRequisitionDetailsSection />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import TransferRequisitionLeftSection from "./Sidebar/TransferRequisitionLeftSection";
import TransferRequisitionDetailsSection from "./Details/TransferRequisitionDetailsSection";

export default {
  components: {
    Heading,
    TransferRequisitionLeftSection,
    TransferRequisitionDetailsSection,
  },
  data() {
    return {
      routeName: "Create Requisition",
      parentPath: "Local Sales",
      pathName: [],
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
    await this.PRESENT_POSITION_STOCK_REPORT__FROM_SERVICE();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Create Requisition" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
};
</script>

<style scoped>
/* #transfer-requisition.transfer-requisition .layout-body {
    height: calc(100vh - (74px + 54px + 32px + 10px));
} */
</style>