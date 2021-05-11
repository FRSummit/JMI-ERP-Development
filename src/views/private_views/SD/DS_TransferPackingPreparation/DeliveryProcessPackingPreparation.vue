<template>
  <div id="invoice-challan-printing" class="invoice-challan-printing">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="invoice-challan-printing-section">
      <div class="invoice-challan-printing-inner">
        <!-- <InvoiceChallanPrintingLeftList
          v-on:invoice_id_from_left="invoiceIdFromLeftHandler"/> -->
          <InvoiceChallanPrintingLeftList 
            :STOCK_TRANSFER_PACKING_PREPARATION="STOCK_TRANSFER_PACKING_PREPARATION"
            v-on:invoice_id_from_left="invoiceIdFromLeftHandler" />
        <div class="invoice-challan-printing-detail-section">
          <div class="invoice-challan-printing-detail-inner">
            <DetailSection 
              :STOCK_TRANSFER_PACKING_PREPARATION="STOCK_TRANSFER_PACKING_PREPARATION"
              :INVOICE_ID_FROM_LEFT="INVOICE_ID_FROM_LEFT" />
              <!-- :PROD_PREPARATION_LIST="PROD_PREPARATION_LIST"
              :PROD_PREPARATION_LIST_HEADER_INFO="PROD_PREPARATION_LIST_HEADER_INFO" /> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Order Approved Message -->
    <div id="info-modal" class="modal-popup-section info-modal" v-if="info_modal_schedult_count">
      <div class="modal-popup-section-inner update-successfully-modal-inner">
        <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
        <p class="popup-text info">Total Invoice {{ schedule_count }}</p>
      </div>
    </div>
    <!-- Loading Message -->
    <div id="info-modal" class="modal-popup-section info-modal" v-if="loading_popup_modal">
      <div class="modal-popup-section-inner update-successfully-modal-inner">
        <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
        <p class="popup-text info">{{ loading_message ? loading_message : 'Please wait, we are processing ...' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import InvoiceChallanPrintingLeftList from "./Sidebar/InvoiceChallanPrintingLeftList";
import DetailSection from "./DetailSection/DetailSection";
// import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()
import Service from "../../../../service/ERPSidebarService";
const service = new Service();

export default {
  components: {
    Heading,
    InvoiceChallanPrintingLeftList,
    DetailSection,
  },
  data() {
    return {
      routeName: "Stock Transfer Packing Preparation",
      parentPath: "Local Sales",
      pathName: [],
      info_modal_schedult_count: false,
      schedule_count: null,
      PROD_PREPARATION_LIST: [],
      PROD_PREPARATION_LIST_HEADER_INFO: [],
      PROD_PREPARATION_LIST_GROUP_BY: [],
      loading_popup_modal: false,
      loading_message: null,

      STOCK_TRANSFER_PACKING_PREPARATION: null,
      INVOICE_ID_FROM_LEFT: null,
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
    // this.showInvoiceCountInformationMessagePopup()
    await this.STOCK_TRANSFER_PACKING_PREPARATION__FROM_SERVICE()
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Stock Transfer Packing Preparation" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    showInvoiceCountInformationMessagePopup() {
      this.schedule_count = this.$route.path.split(':')[1]
      this.info_modal_schedult_count = true
      setTimeout( () => {
        this.info_modal_schedult_count = false
      }, 2000)
    },
    async invoiceIdFromLeftHandler(val) {
      console.log(val)
      this.INVOICE_ID_FROM_LEFT = val
    },
    // -------------------------------------------------------------------------------
    // Service Call
    async STOCK_TRANSFER_PACKING_PREPARATION__FROM_SERVICE() {
      await service.getTransferProdPreparationList__STOCK_TRANSFER_PACKING_PREPARATION()
        .then(res => {
          this.STOCK_TRANSFER_PACKING_PREPARATION = []
          console.log(res.data)
          if(res.data.response_code === 200 || res.data.response_code === 201) {
            this.STOCK_TRANSFER_PACKING_PREPARATION = res.data.transfer_prod_list_n_details
          }
        })
        .catch(err => {
          if(err) {
            this.PROD_PREPARATION_LIST = []
            this.PROD_PREPARATION_LIST_HEADER_INFO = []
            this.loading_message = 'Request failed to load or no data found'
            this.loading_popup_modal = true
            setTimeout( () => {
              this.loading_popup_modal = false
            }, 1500)
          }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryProcessPackingPreparation.less");
</style>