<template>
  <div id="transfet-approve-requisition-update" class="transfet-approve-requisition-update">
    <Heading :pathName="pathName" :routeName="routeName" />
    <!-- <div class="transfer-requisition-inner"> -->
    <div class="layout-body">
      <TransferApproveRequisitionUpdateLeftSection
        v-on:SINGLE_REQUISITOR_ITEM_SELECTED="singleRequisitorItemSelected"
        v-on:SINGLE_REQUISITOR_ITEM_REMOVED="singleRequisitorItemRemoved"
        v-on:DEPOT_NAME="depotNameFromList" />
      <TransferApproveRequisitionUpdateDetailsSection
        :DEPOT_NAME="DEPOT_NAME"
        :SELECTED_REQUISITION_DATA="SELECTED_REQUISITION_DATA"
        v-on:SINGLE_ITEM_REMOVE_FROM_TABLE="singleItemRemoveFromTable" />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import TransferApproveRequisitionUpdateLeftSection from "./Sidebar/TransferApproveRequisitionUpdateLeftSection";
import TransferApproveRequisitionUpdateDetailsSection from "./Details/TransferApproveRequisitionUpdateDetailsSection";

export default {
  components: {
    Heading,
    TransferApproveRequisitionUpdateLeftSection,
    TransferApproveRequisitionUpdateDetailsSection,
  },
  data() {
    return {
      routeName: "Transfer Approve Requisition Update",
      parentPath: "Local Sales",
      pathName: [],
      DEPOT_NAME: null,
      SELECTED_REQUISITION_DATA: []
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Transfer Approve Requisition Update" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    depotNameFromList(value) {
      this.DEPOT_NAME = value
    },
    singleRequisitorItemSelected(item) {
      console.log('item')
      this.SELECTED_REQUISITION_DATA.push(item)
    },
    singleRequisitorItemRemoved(item) {
      for (let [i, tt] of this.SELECTED_REQUISITION_DATA.entries()) {
        if (tt.id === item.id) {
          console.log('matched : ' + tt.id + '    ' + item.id)
          this.SELECTED_REQUISITION_DATA.splice(i, 1);
        }
      }
    },
    singleItemRemoveFromTable(item, i) {
      this.singleRequisitorItemRemoved(item)
      let checkbox_selector = document.querySelector('#card_body_input_' + i)
      checkbox_selector.checked = false
    }
  },
    computed: {
        DESELECT_ALL_PRODUCT() {
            return this.$store.state.DESELECT_ALL_SELECTED_PRODUCT
        }
    },
    watch: {
        DESELECT_ALL_PRODUCT(newVal, oldVal) {
            if(newVal !== oldVal) {
                this.SELECTED_REQUISITION_DATA = []
            }
        }
    }
};
</script>

<style scoped>
/* #transfer-requisition.transfer-requisition .layout-body {
    height: calc(100vh - (74px + 54px + 32px + 10px));
} */
@import '../../../../../assets/style-transfer_requition.css';
</style>