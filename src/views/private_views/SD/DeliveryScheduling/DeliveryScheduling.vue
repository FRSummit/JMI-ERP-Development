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
      let window_pathname = window.location.pathname
      for(let i=1; i<window_pathname.split('/').length; i++) {
        let pp_str = window_pathname.split('/')[i].charAt(0).toUpperCase() + window_pathname.split('/')[i].slice(1)
        let parts = pp_str.split('_')
        let parts_length = parts.length
        let pn_str = ""
        for(let j=0; j<parts_length; j++) {
          pn_str += parts[j] + ' '
        }
        this.pathName.push({name: pn_str.trim()})
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryScheduling.less");
</style>