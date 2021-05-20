<template>
  <div id="invoice-challan-printing" class="invoice-challan-printing">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="invoice-challan-printing-section">
      <div class="invoice-challan-printing-inner">
        <InvoiceChallanPrintingLeftList
          v-on:invoice_id_from_left="invoiceIdFromLeftHandler"/>
        <div class="invoice-challan-printing-detail-section">
          <div class="invoice-challan-printing-detail-inner">
            <DetailSection 
              :PROD_PREPARATION_LIST="PROD_PREPARATION_LIST"
              :PROD_PREPARATION_LIST_HEADER_INFO="PROD_PREPARATION_LIST_HEADER_INFO" />
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
      routeName: "Packing Summary",
      parentPath: "Local Sales",
      pathName: [],
      info_modal_schedult_count: false,
      schedule_count: null,
      PROD_PREPARATION_LIST: [],
      PROD_PREPARATION_LIST_HEADER_INFO: [],
      PROD_PREPARATION_LIST_GROUP_BY: [],
      loading_popup_modal: false,
      loading_message: null,
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  mounted() {
    // this.showInvoiceCountInformationMessagePopup()
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Packing Summary" }];
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
      await this.DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(val)
    },
    // -------------------------------------------------------------------------------
    // Service Call
    async DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(schedule_id) {
      await service.getDeliveryScheduleProdPreparationListByDA_ID_DS_PACKING_PREPARATION(schedule_id)
        .then(res => {
          this.PROD_PREPARATION_LIST = []
          this.PROD_PREPARATION_LIST_HEADER_INFO = []
          console.log(res.data)
          this.PROD_PREPARATION_LIST = res.data.prod_preparation_list
          this.PROD_PREPARATION_LIST_HEADER_INFO = res.data.header
          // if(this.PROD_PREPARATION_LIST) {
          //   for(let i=0; i<this.PROD_PREPARATION_LIST.length; i++) {
          //     for(let j=0; j<this.PROD_PREPARATION_LIST[i]; j++) {
          //       this.
          //     }
          //   }
          // }
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