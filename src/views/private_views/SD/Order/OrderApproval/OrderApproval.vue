<template>
  <div id="order-approval" class="order-approval">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="order-approval-section">
      <div class="order-approval-section-inner">
        <LeftSidebarSection 
          v-on:filter_modal="filterModalToggle"
          v-on:approve_selected_with_da_popup_modal="approveSelectedWith_DA_PopupModalToggle"
          v-on:select_order_by_order_id="selectOrderByOrderId"
          :rejected_order_id="rejected_order_id"
          :approved_order_id="approved_order_id"
          v-on:approve_selection_modal="approveSelectionModal"
          v-on:multiple_order_selection="multipleOrderSelection" />
        <DetailsSection 
          :style="(filter_modal_toggle === true) || (approve_selected_with_da_popup_modal_toggle === true) || (approve_selection_modal_val === true) ? 'z-index: -1;' : 'z-index: 5;'"
          :pending_order_list_by_id="pending_order_list_by_id"
          :order_id_from_left_side="order_id_from_left_side"
          v-on:remove_rejected_order_id_from_left_list="removeRejectedOrderFromLeft"
          v-on:single_order_approved="singleOrderApprovedHandler"
          v-on:reload_this_order="reloadThisOrder"
          v-on:single_order_approved_failed="singleOrderApprovedFailed" />
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
      approve_selected_with_da_popup_modal_toggle: false,
      pending_order_list_by_id: [],
      details_section_header_info: [],
      rejected_order_id: null,
      approved_order_id: null,
      order_id_from_left_side: null,
      approve_selection_modal_val: null,
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
    approveSelectionModal(value) {
      this.approve_selection_modal_val = value
      console.log(this.approve_selection_modal_val)
    },
    multipleOrderSelection() {
      this.pending_order_list_by_id = []
    },
    approveSelectedWith_DA_PopupModalToggle(value) {
      this.approve_selected_with_da_popup_modal_toggle = value
    },
    // ---------------------------------------------------------------------------------------------------
    // From Left Section Methods
    selectOrderByOrderId(order_id) {
      // console.log(value)
      this.PENDING_ORDER_DETAILS__FROM_SERVICE(order_id)
    },
    // ---------------------------------------------------------------------------------------------------
    // From Details Section Methods
    removeRejectedOrderFromLeft(value) {
      console.log(value)
      // this.$forceUpdate()
      this.rejected_order_id = value
      // setTimeout( () => {
      //   this.rejected_order_id = null
      // })
    },
    reloadThisOrder(value) {
      this.PENDING_ORDER_DETAILS__FROM_SERVICE(value)
    },
    singleOrderApprovedFailed(value) {
      this.PENDING_ORDER_DETAILS__FROM_SERVICE(value)
    },
    singleOrderApprovedHandler(order_id) {
      this.approved_order_id = order_id
    },
    // ---------------------------------------------------------------------------------------------------
    // Service call from left sidebar section
    async PENDING_ORDER_DETAILS__FROM_SERVICE(order_id) {
      this.order_id_from_left_side = order_id
      this.pending_order_list_by_id = []
      this.details_section_header_info = []
      // await service.getSelectedPendingOrderById_OrderApproval(1111)
      await service.getSelectedPendingOrderById_OrderApproval(order_id)
        .then(res => {
          console.log(res.data)
          console.log(res.data.order_info.sbu_customer_info)
          this.pending_order_list_by_id = res.data.order_info
          this.details_section_header_info = res.data.order_info.sbu_customer_info
        })
        .catch(err => {
          if(err) {
            console.log(err)
          }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./OrderApproval.less");
</style>