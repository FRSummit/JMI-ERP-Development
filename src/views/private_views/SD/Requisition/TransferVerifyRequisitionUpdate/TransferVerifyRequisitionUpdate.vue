<template>
  <div id="transfet-verify-requisition-update" class="transfet-verify-requisition-update">
    <Heading :pathName="pathName" :routeName="routeName" />
    <!-- <div class="transfer-requisition-inner"> -->
    <div class="layout-body">
      <TransferVerifyRequisitionUpdateLeftSection
        v-on:SINGLE_REQUISITOR_ITEM_SELECTED="singleRequisitorItemSelected"
        v-on:SINGLE_REQUISITOR_ITEM_REMOVED="singleRequisitorItemRemoved"
        v-on:DEPOT_NAME="depotNameFromList" />
      <TransferVerifyRequisitionUpdateDetailsSection
        :DEPOT_NAME="DEPOT_NAME"
        :SELECTED_REQUISITION_DATA="SELECTED_REQUISITION_DATA"
        v-on:SINGLE_ITEM_REMOVE_FROM_TABLE="singleItemRemoveFromTable" />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import TransferVerifyRequisitionUpdateLeftSection from "./Sidebar/TransferVerifyRequisitionUpdateLeftSection";
import TransferVerifyRequisitionUpdateDetailsSection from "./Details/TransferVerifyRequisitionUpdateDetailsSection";

export default {
  components: {
    Heading,
    TransferVerifyRequisitionUpdateLeftSection,
    TransferVerifyRequisitionUpdateDetailsSection,
  },
  data() {
    return {
      routeName: "Transfer Requisition Verify",
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
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Transfer Requisition Verify" }];
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