<template>
  <div id="order-approval" class="order-approval">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="order-approval-section">
      <div class="order-approval-section-inner">
        <LeftSidebarSection 
          v-on:filter_modal="filterModalToggle"
          v-on:select_order_by_order_id="selectOrderByOrderId" />
        <DetailsSection 
          :style="filter_modal_toggle === true ? 'z-index: -1;' : 'z-index: 5;'"
          :pending_order_list_by_id="pending_order_list_by_id" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

import LeftSidebarSection from "./LeftSidebarSection/LeftSidebarSection";
import DetailsSection from "./DetailsSection/DetailsSection";

import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
  components: {
    Heading,
    LeftSidebarSection,
    DetailsSection,
  },
  data() {
    return {
      routeName: "Order Approval",
      parentPath: "Local Sales",
      pathName: [],
      filter_modal_toggle: false,
      pending_order_list_by_id: [],
      details_section_header_info: []
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  mounted() {},
  methods: {
    createBreadcrumbData() {
      //   this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname);
      this.pathName = [
        { name: "Features" },
        { name: "Local Sales" },
        { name: "Order Approval" },
      ];
    },
    filterModalToggle(value) {
      this.filter_modal_toggle = value
    },
    selectOrderByOrderId(order_id) {
      // console.log(value)
      this.PENDING_ORDER_DETAILS__FROM_SERVICE(order_id)
    },
    // ---------------------------------------------------------------------------------------------------
    // Service call from left sidebar section
    async PENDING_ORDER_DETAILS__FROM_SERVICE(order_id) {
      console.log(order_id)
      await service.getSelectedPendingOrderById_OrderApproval(1111)
        .then(res => {
          console.log(res.data)
          console.log(res.data.order_info.sbu_customer_info)
          this.pending_order_list_by_id = res.data.order_info
          this.details_section_header_info = res.data.order_info.sbu_customer_info
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./OrderApproval.less");
</style>