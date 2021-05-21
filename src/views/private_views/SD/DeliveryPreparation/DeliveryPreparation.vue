<template>
    <div id="dp_delivery_preparation" class="sd_collection">
      <Heading :pathName="pathName" :routeName="routeName" />

    <div class="layout-body">
      <DeliveryPreparationSidebar/>
      <DeliveryPreparationDetails/>
    </div>
    </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import DeliveryPreparationSidebar from "./DeliveryPreparationSidebar";
import DeliveryPreparationDetails from "./DeliveryPreparationDetails";
export default {
    props: [],
  components: {
    Heading,
    DeliveryPreparationSidebar,
    DeliveryPreparationDetails,
  },
    data() {
    return {
      routeName: "Delivery Preparation",
      parentPath: "Delivery Preparation",
      pathName: [],
      SELECTED_PROD_DETAILS: null,
    };
  },

  created() {
    this.$emit('routeName', this.$route.name);
    this.createBreadcrumbData();
  },
    methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Delivery Preparation" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
}
</script>



<style scoped>
@import url('./DeliveryPreparation.css');
</style>