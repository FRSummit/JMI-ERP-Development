<template>
  <div id="transfer-requisition" class="transfer-requisition">
    <Heading :pathName="pathName" :routeName="routeName" />
    <!-- <div class="transfer-requisition-inner"> -->
    <div class="layout-body">
      <TransferRequisitionLeftSection 
        v-on:SINGLE_ITEM_SELECTED="singleItemClicked"/>
      <TransferRequisitionDetailsSection 
        :SELECTED_REQUISITION_DETAILS="SELECTED_REQUISITION_DETAILS"
        :SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS="SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS" />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import TransferRequisitionLeftSection from "./Sidebar/TransferRequisitionLeftSection";
import TransferRequisitionDetailsSection from "./Details/TransferRequisitionDetailsSection";

import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
  props: [],
  components: {
    Heading,
    TransferRequisitionLeftSection,
    TransferRequisitionDetailsSection,
  },
  data() {
    return {
      routeName: "Transfer Requisition",
      parentPath: "Local Sales",
      pathName: [],
      SELECTED_REQUISITION_DETAILS: [],
      SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS: []
    };
  },
    computed: {},
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Transfer Requisition" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    async singleItemClicked(item) {
      console.log(item)
      await this.STOCK_REQUISITION_DETAILS__FROM_SERVICE(item.id)
    },
    // -----------------------------------------------------------------
    // SERVICE CALL
    async STOCK_REQUISITION_DETAILS__FROM_SERVICE(requisition_id) {
      this.SELECTED_REQUISITION_DETAILS = []
      this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS = [] 
      service.getStockRequisitionDetail_TRANSFER_REQUISITION(requisition_id)
        .then(res => {
          console.log(res.data)
          this.SELECTED_REQUISITION_DETAILS = res.data.transfer_info
          this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS = res.data.transfer_info.transfer_details
        })
        .catch(err => {
          if(err) {
            this.SELECTED_REQUISITION_DETAILS = []
            this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS = [] 
            alert('Server Error 500. ' + err)
          }
        })
    },
  },
  watch: {}
};
</script>

<style scoped>
/* #transfer-requisition.transfer-requisition .layout-body {
    height: calc(100vh - (74px + 54px + 32px + 10px));
} */
</style>