<template>
  <div id="dp_delivery_schedule" class="sd_collection">
    <Heading :pathName="pathName" :routeName="routeName" />

    <div class="layout-body">
      <DeliveryScheduleSidebar 
        v-on:SINGLE_ITEM_FROM_LEFT="itemClickFromLeftEventHandler"
        :RELOAD_LEFT_SECTION="RELOAD_LEFT_SECTION"/>
      <DeliveryScheduleDetails
        :SELECTED_DP_DS_LIST_ITEM="SELECTED_DP_DS_LIST_ITEM"
        :SELECTED_DP_DS_LIST_DETAILS="SELECTED_DP_DS_LIST_DETAILS"
        v-on:RELOAD_LEFT_SECTION="reloadLeftSection"/>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import DeliveryScheduleSidebar from "./DeliveryScheduleSidebar";
import DeliveryScheduleDetails from "./DeliveryScheduleDetails";

import Service from '../../../../service/ERPSidebarService'
const service = new Service()

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
      SELECTED_DP_DS_LIST_ITEM: null,
      SELECTED_DP_DS_LIST_DETAILS: null,
      RELOAD_LEFT_SECTION: null
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
    async itemClickFromLeftEventHandler(value) {
      this.SELECTED_DP_DS_LIST_ITEM = value
      await this.DPDS_INV_LIST__FROM_SERVICE(value.date, value.dp_force.force_id)
    },
    reloadLeftSection() {
      this.RELOAD_LEFT_SECTION = new Date()
      this.SELECTED_DP_DS_LIST_ITEM = null
      this.SELECTED_DP_DS_LIST_DETAILS = null
    },
    // --------------------------------------------------------------------------------------------
    // SERVICE CALL
    async DPDS_INV_LIST__FROM_SERVICE(date, id) {
      this.SELECTED_DP_DS_LIST_DETAILS = null
        await service.getDPDS_INV_LIST__DP_DS(date, id)
          .then(res => {
            console.log(res.data)
            this.SELECTED_DP_DS_LIST_DETAILS = res.data.delivery_schedule_inv_list
          })
          .catch(err => {
            if(err) {
             console.log(err)
             this.SELECTED_DP_DS_LIST_DETAILS = null
            }
          })
        }
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