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
              :SCHEDULE_DETAILS_LIST="SCHEDULE_DETAILS_LIST"
              :SCHEDULE_DETAILS_LIST_CHEMIST="SCHEDULE_DETAILS_LIST_CHEMIST"
              :SCHEDULE_DETAILS_LIST_INSTITUTION="SCHEDULE_DETAILS_LIST_INSTITUTION" />
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
      routeName: "Delivery Process Invoice/Challan Printing",
      parentPath: "Local Sales",
      pathName: [],
      info_modal_schedult_count: false,
      schedule_count: null,
      SCHEDULE_DETAILS_LIST: [],
      SCHEDULE_DETAILS_LIST_CHEMIST: [],
      SCHEDULE_DETAILS_LIST_INSTITUTION: [],
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  mounted() {
    this.showInvoiceCountInformationMessagePopup()
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Delivery Process Invoice/Challan Printing" }];
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
      await service.getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(schedule_id)
        .then(res => {
          this.SCHEDULE_DETAILS_LIST = []
          this.SCHEDULE_DETAILS_LIST_CHEMIST = []
          this.SCHEDULE_DETAILS_LIST_INSTITUTION = []
          console.log(res.data)
          this.SCHEDULE_DETAILS_LIST = res.data.schedule_list
          if(res.data.schedule_list) {
            for(let i=0; i<res.data.schedule_list.length; i++) {
              if(res.data.schedule_list[i].customer_info.customer_type === '422') {
                this.SCHEDULE_DETAILS_LIST_CHEMIST.push(res.data.schedule_list[i])
              } else if(res.data.schedule_list[i].customer_info.customer_type === '424') {
                this.SCHEDULE_DETAILS_LIST_INSTITUTION.push(res.data.schedule_list[i])
              }
            }
          }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryProcessPackingPreparation.less");
</style>