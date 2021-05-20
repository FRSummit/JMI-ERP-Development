<template>
  <div class="sd_collection">
    <Heading :pathName="pathName" :routeName="routeName" />

    <div class="layout-body">
      <DeliveryScheduleSidebar />
      <DeliveryScheduleDetails />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import DeliveryScheduleSidebar from "./DeliveryScheduleSidebar";
import DeliveryScheduleDetails from "./DeliveryScheduleDetails";
export default {
  props: [],
  components: {
    Heading,
    DeliveryScheduleSidebar,
    DeliveryScheduleDetails,
  },
  data() {
    return {
      routeName: "Delivery Schedule",
      parentPath: "Delivery Schedule",
      pathName: [],
      SELECTED_PROD_DETAILS: null,
    };
  },

  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [
        { name: "Features" },
        { name: "Local Sales" },
        { name: "Delivery Schedule" },
      ];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
};
</script>



<style scoped>
@import url("./DeliverySchedule.css");
.layout-body {
  /* display: flex; */
  display: grid;
  grid-template-columns: min-content auto;
}
</style>