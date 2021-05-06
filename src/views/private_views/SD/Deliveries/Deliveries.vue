<template>
  <div id="deliveries" class="deliveries">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="deliveries-section">
      <div class="deliveries-section-inner">
        <LeftSidebarSection 
          v-on:filter_modal="filterModalToggle"
          v-on:approve_selected_with_da_popup_modal="approveSelectedWith_DA_PopupModalToggle"
          v-on:select_order_by_order_id="selectOrderByOrderId"
          :rejected_order_id="rejected_order_id"
          :SAVED_INVOICE_DELIVERY_INFO_FROM_RIGHT="SAVED_INVOICE_DELIVERY_INFO_FROM_RIGHT" />
        <DetailsSection 
          :style="(filter_modal_toggle === true) || (approve_selected_with_da_popup_modal_toggle === true) ? 'z-index: -1;' : 'z-index: 5;'"
          :pending_order_list_by_id="pending_order_list_by_id"
          :INVOICE_ID_FROM_LEFT="INVOICE_ID_FROM_LEFT"
          v-on:remove_rejected_order_id_from_left_list="removeRejectedOrderFromLeft"
          v-on:invoice_delivery_info_saved="invoiceDeliveryInfoSavedEventHandler" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

import LeftSidebarSection from "./LeftSidebarSection/LeftSidebarSection";
import DetailsSection from "./DetailsSection/DetailsSection";

import ERPService from '../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
  components: {
    Heading,
    LeftSidebarSection,
    DetailsSection,
  },
  data() {
    return {
      routeName: "Deliveries",
      parentPath: "Local Sales",
      pathName: [],
      filter_modal_toggle: false,
      approve_selected_with_da_popup_modal_toggle: false,
      pending_order_list_by_id: [],
      rejected_order_id: null,
      INVOICE_ID_FROM_LEFT: null,
      SAVED_INVOICE_DELIVERY_INFO_FROM_RIGHT: null,
    };
  },
  computed: {
    LOAD_DELIVERIES_INVOICE_LIST() {
      return this.$store.state.CHANGES_DETECTED_IN_DETAILS_SECTION
    }
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
        { name: "Deliveries" },
      ];
    },
    filterModalToggle(value) {
      this.filter_modal_toggle = value
    },
    approveSelectedWith_DA_PopupModalToggle(value) {
      this.approve_selected_with_da_popup_modal_toggle = value
    },
    // ---------------------------------------------------------------------------------------------------
    // From Left Section Methods
    selectOrderByOrderId(order_id) {
      console.log(order_id)
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
    invoiceDeliveryInfoSavedEventHandler(invoice_id) {
      console.log(invoice_id)
      this.SAVED_INVOICE_DELIVERY_INFO_FROM_RIGHT = invoice_id
      this.PENDING_ORDER_DETAILS__FROM_SERVICE(invoice_id)
    },
    // ---------------------------------------------------------------------------------------------------
    // Service call from left sidebar section
    async PENDING_ORDER_DETAILS__FROM_SERVICE(invoice_id) {
      this.INVOICE_ID_FROM_LEFT = invoice_id
      this.pending_order_list_by_id = []
      // await service.getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(order_id)
      await service.getPendingDeliverInvoiceDetailsByInvocieId_DELEVERIES(invoice_id)
        .then(res => {
          console.log(res.data)
          // console.log(res.data.order_info.sbu_customer_info)
          this.pending_order_list_by_id = res.data.invoice_details
          // this.pending_order_list_by_id = res.data.order_info
          // this.details_section_header_info = res.data.order_info.sbu_customer_info
        })
    }
  },
    watch: {
        async LOAD_DELIVERIES_INVOICE_LIST(newVal) {
            if(newVal) {
              this.pending_order_list_by_id = []
            }
        }
    }
};
</script>