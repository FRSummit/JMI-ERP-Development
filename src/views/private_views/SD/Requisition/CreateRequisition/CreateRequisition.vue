<template>
  <div id="transfer-requisition" class="transfer-requisition">
    <Heading :pathName="pathName" :routeName="routeName" />
    <!-- <div class="transfer-requisition-inner"> -->
    <div class="layout-body">
      <CreateRequisitionLeftSection
        v-on:SINGLE_REQUISITOR_ITEM_SELECTED="singleRequisitorItemSelected"
        v-on:SINGLE_REQUISITOR_ITEM_REMOVED="singleRequisitorItemRemoved" />
      <CreateRequisitionDetailsSection
        :SELECTED_REQUISITION_DATA="SELECTED_REQUISITION_DATA" />
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
      SELECTED_REQUISITION_DATA: []
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
    singleRequisitorItemSelected(item) {
      console.log('item')
      this.SELECTED_REQUISITION_DATA.push(item)
    },
    singleRequisitorItemRemoved(item) {
      for (let [i, tt] of this.SELECTED_REQUISITION_DATA.entries()) {
        if (tt.id === item.id) {
          console.log('matched : ' + tt.id + '    ' + item.id)
          this.SELECTED_REQUISITION_DATA.splice(i, 1);
        }
      }
    },
  },
};
</script>

<style scoped>
/* #transfer-requisition.transfer-requisition .layout-body {
    height: calc(100vh - (74px + 54px + 32px + 10px));
} */
</style>