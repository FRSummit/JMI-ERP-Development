<template>
  <div id="delivery-packing-preparation" class="delivery-packing-preparation">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="delivery-packing-preparation-section">
      <div class="delivery-packing-preparation-inner">
        <DeliveryPackingPreparationLeftList />
        <div class="delivery-packing-preparation-detail-section">
          <div class="delivery-packing-preparation-detail-inner">
            <DetailSection />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import DeliveryPackingPreparationLeftList from "./Sidebar/DeliveryPackingPreparationLeftList";
import DetailSection from "./DetailSection/DetailSection";
// import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

export default {
  components: {
    Heading,
    DeliveryPackingPreparationLeftList,
    DetailSection,
  },
  data() {
    return {
      routeName: "Delivery Packing Preparation",
      parentPath: "Local Sales",
      pathName: [],
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Delivery Packing Preparation" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryProcessPackingPreparation.less");
</style>