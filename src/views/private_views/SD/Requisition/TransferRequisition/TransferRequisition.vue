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
    props: [],
  components: {
    Heading,
    TransferRequisitionLeftSection,
    TransferRequisitionDetailsSection,
  },
  data() {
    return {
      routeName: "Transfer Requisition",
      parentPath: "Local Sales",
      pathName: [],
    };
  },
    computed: {},
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Transfer Requisition" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
  watch: {}
};
</script>

<style scoped>
/* #transfer-requisition.transfer-requisition .layout-body {
    height: calc(100vh - (74px + 54px + 32px + 10px));
} */
</style>