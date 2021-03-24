<template>
  <div id="transfer-requisition" class="transfer-requisition">
    <Heading :pathName="pathName" :routeName="routeName" />
    <!-- <div class="transfer-requisition-inner"> -->
    <div class="layout-body">
      <CreateRequisitionLeftSection />
      <CreateRequisitionDetailsSection />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import CreateRequisitionLeftSection from "./Sidebar/CreateRequisitionLeftSection";
import CreateRequisitionDetailsSection from "./Details/CreateRequisitionDetailsSection";

export default {
  components: {
    Heading,
    CreateRequisitionLeftSection,
    CreateRequisitionDetailsSection,
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