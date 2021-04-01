<template>
  <div id="delivery-scheduling" class="delivery-scheduling">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="delivery-scheduling-section">
      <div class="delivery-scheduling-inner">
        <DeliverySchedulingLeftList
          v-on:selected_month="selectedMonthFromLeft"
          v-on:selected_user_schedule_plan="selectedUserSchedulePlan"
          v-on:SELECTED_DA_ID="selectedSRIdFromLeft"
          v-on:SELECTED_DATE="selectedDateIdFromLeft"
          v-on:pending_delivery_schedule_inv_list="pendingDeliveryScheduleInvListFromLeft"
        />
        <div class="delivery-scheduling-detail-section">
          <div class="delivery-scheduling-detail-inner">
            <DetailSection 
            v-on:CREATE_DELIVERY_SCHEDULE="createDeliveryScheduleClickHandler"/>
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
import Service from "../../../../service/ERPSidebarService";
const service = new Service();

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
      SR_ID_FROM_LEFT_LIST: null,
      SELECTED_DATE_LEFT_LIST: null,
      PENDING_DELIVERY_SCHEDULE_INV_LIST_FROM_LEFT: [],
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
    selectedSRIdFromLeft(value) {
      this.SR_ID_FROM_LEFT_LIST = value
    },
    selectedDateIdFromLeft(value) {
      this.SELECTED_DATE_LEFT_LIST = value
    },
    pendingDeliveryScheduleInvListFromLeft(value) {
      this.PENDING_DELIVERY_SCHEDULE_INV_LIST_FROM_LEFT = []
      this.PENDING_DELIVERY_SCHEDULE_INV_LIST_FROM_LEFT = value
    },
    async createDeliveryScheduleClickHandler() {
      // console.log(this.PENDING_DELIVERY_SCHEDULE_INV_LIST_FROM_LEFT)
      if(this.SR_ID_FROM_LEFT_LIST !== null && this.SELECTED_DATE_LEFT_LIST !== null) {
        if(this.PENDING_DELIVERY_SCHEDULE_INV_LIST_FROM_LEFT.length > 0) {
          await this.CREATE_DELIVERY_SCHEDULE_INVOICE_LIST_BY_DA(this.SR_ID_FROM_LEFT_LIST, this.SELECTED_DATE_LEFT_LIST)
        } else {
          alert('No schedule found to create.')
        }
        
      } else {
        alert('Please select SR and Date')
      }
    },
    // ------------------------------------------------------------------------------------------------
    // SERVICE CALL
    async CREATE_DELIVERY_SCHEDULE_INVOICE_LIST_BY_DA(da_id, date) {
      this.PENDING_DELIVERY_SCHEDULE_INV_LIST = []
      await service.getCreateDeliveryScheduleBy_DA_DELIVERY_SCHEDULING(da_id, date)
        .then(res => {
          console.log(res.data.invoice_count)
          this.$router.push('/sd/delivery-process-invoice-printing:' + res.data.invoice_count)
        })
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryScheduling.less");
</style>