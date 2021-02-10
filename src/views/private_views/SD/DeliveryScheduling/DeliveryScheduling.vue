<template>
  <div id="delivery-scheduling" class="delivery-scheduling">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="delivery-scheduling-section">
      <div class="delivery-scheduling-inner">
        <DeliverySchedulingLeftList
          v-on:selected_month="selectedMonthFromLeft"
          v-on:selected_user_schedule_plan="selectedUserSchedulePlan"
        />
        <div class="delivery-scheduling-detail-section">
          <div class="delivery-scheduling-detail-inner">
            <DetailSection />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import DeliverySchedulingLeftList from "./Sidebar/DeliverySchedulingLeftList";
import DetailSection from "./DetailSection/DetailSection";
import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
const breadcrumbFunctions = new BreadcrumbFunctions()

export default {
  components: {
    Heading,
    DeliverySchedulingLeftList,
    DetailSection,
  },
  data() {
    return {
      routeName: "Delivery schedule",
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
      // this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Delivery Schedule" }];
      this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryScheduling.less");
</style>