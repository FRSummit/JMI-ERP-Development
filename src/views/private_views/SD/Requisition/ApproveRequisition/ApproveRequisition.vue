<template>
  <div id="approve-requisition" class="approve-requisition">
    <Heading :pathName="pathName" :routeName="routeName" />
    <!-- <div class="transfer-requisition-inner"> -->
    <div class="layout-body">
      <ApproveRequisitionLeftSection 
        v-on:SINGLE_ITEM_SELECTED="singleItemClicked"/>
      <ApproveRequisitionDetailsSection 
        :SELECTED_REQUISITION_DETAILS="SELECTED_REQUISITION_DETAILS"
        :SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS="SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS"
        :SELECTED_REQUISITION_DETAILS_WH_NAME="SELECTED_REQUISITION_DETAILS_WH_NAME" />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import ApproveRequisitionLeftSection from "./Sidebar/ApproveRequisitionLeftSection";
import ApproveRequisitionDetailsSection from "./Details/ApproveRequisitionDetailsSection";

import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
  props: [],
  components: {
    Heading,
    ApproveRequisitionLeftSection,
    ApproveRequisitionDetailsSection,
  },
  data() {
    return {
      routeName: "Approve Requisition",
      parentPath: "Local Sales",
      pathName: [],
      SELECTED_REQUISITION_DETAILS: [],
      SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS: [],
      SELECTED_REQUISITION_DETAILS_WH_NAME: null,
    };
  },
    computed: {
        LOAD_STOCK_REQUISITION_LIST() {
            return this.$store.state.DESELECT_ALL_SELECTED_PRODUCT
        }
    },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Approve Requisition" }];
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
      this.SELECTED_REQUISITION_DETAILS_WH_NAME = null
      service.getStockRequisitionDetail_TRANSFER_REQUISITION(requisition_id)
        .then(res => {
          console.log(res.data)
          this.SELECTED_REQUISITION_DETAILS = res.data.transfer_info
          this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS = res.data.transfer_info.transfer_details
          this.SELECTED_REQUISITION_DETAILS_WH_NAME = res.data.wh_name
        })
        .catch(err => {
          if(err) {
            this.SELECTED_REQUISITION_DETAILS = []
            this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS = [] 
            this.SELECTED_REQUISITION_DETAILS_WH_NAME = null
            alert('Server Error 500. ' + err)
          }
        })
    },
  },
    watch: {
        LOAD_STOCK_REQUISITION_LIST(newVal) {
            if(newVal) {
              this.SELECTED_REQUISITION_DETAILS = []
              this.SELECTED_REQUISITION_DETAILS_TRANSFER_DETAILS = [] 
              this.SELECTED_REQUISITION_DETAILS_WH_NAME = null
            }
        }
    }
};
</script>

<style scoped>
/* #transfer-requisition.transfer-requisition .layout-body {
    height: calc(100vh - (74px + 54px + 32px + 10px));
} */
@import url("./ApproveRequisition.css");
</style>