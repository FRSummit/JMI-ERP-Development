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
      // let window_pathname = window.location.pathname
      // for(let i=1; i<window_pathname.split('/').length; i++) {
      //   let pp_str = window_pathname.split('/')[i].charAt(0).toUpperCase() + window_pathname.split('/')[i].slice(1)
      //   let parts = pp_str.split('_')
      //   let parts_length = parts.length
      //   let pn_str = ""
      //   for(let j=0; j<parts_length; j++) {
      //     pn_str += (parts[j].charAt(0).toUpperCase() + parts[j].slice(1)) + ' '
      //   }
      //   this.pathName.push({name: pn_str.trim()})
      // }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryProcessPackingPreparation.less");
</style>