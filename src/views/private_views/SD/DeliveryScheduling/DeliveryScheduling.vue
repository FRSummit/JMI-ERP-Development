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

export default {
  components: {
    Heading,
    DeliverySchedulingLeftList,
    DetailSection,
  },
  data() {
    return {
      routeName: "Delivery Schedule",
      parentPath: "SD",
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "SD" }, { name: "Delivery Schedule" }];
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryScheduling.less");
</style>