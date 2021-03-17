<template>
  <div id="invoice-challan-summery" class="invoice-challan-summery">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="invoice-challan-summery-section">
      <div class="invoice-challan-summery-inner">
        <InvoiceChallanSummeryLeftList
          v-on:invoice_id_from_left="invoiceIdFromLeftHandler"/>
        <div class="invoice-challan-summery-detail-section">
          <div class="invoice-challan-summery-detail-inner">
            <DetailSection 
              :INVOICE_CHALLAN_SUMMERY="INVOICE_CHALLAN_SUMMERY"
              :DS_INVOICE="DS_INVOICE"
              :DS_CHALLAN="DS_CHALLAN"
              :DS_GATEPASS="DS_GATEPASS" />
          </div>
        </div>
      </div>
    </div>
    <!-- Order Approved Message -->
    <!-- <div id="info-modal" class="modal-popup-section info-modal" v-if="info_modal_schedult_count">
      <div class="modal-popup-section-inner update-successfully-modal-inner">
        <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
        <p class="popup-text info">Total Invoice {{ schedule_count }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import InvoiceChallanSummeryLeftList from "./Sidebar/InvoiceChallanSummeryLeftList";
import DetailSection from "./DetailSection/DetailSection";
// import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()
import Service from "../../../../service/ERPSidebarService";
const service = new Service();

export default {
  components: {
    Heading,
    InvoiceChallanSummeryLeftList,
    DetailSection,
  },
  data() {
    return {
      routeName: "Invoice Challan Summery",
      parentPath: "Local Sales",
      pathName: [],
      // info_modal_schedult_count: false,
      schedule_count: null,
      INVOICE_CHALLAN_SUMMERY: [],
      DS_INVOICE: [],
      DS_CHALLAN: [],
      DS_GATEPASS: [],
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
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Invoice Challan Summery" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    /*showInvoiceCountInformationMessagePopup() {
      this.schedule_count = this.$route.path.split(':')[1]
      this.info_modal_schedult_count = true
      setTimeout( () => {
        this.info_modal_schedult_count = false
      }, 2000)
    },*/
    async invoiceIdFromLeftHandler(val) {
      console.log(val)
      await this.DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(val)
    },
    // -------------------------------------------------------------------------------
    // Service Call
    async DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(schedule_id) {
      await service.getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(schedule_id)
        .then(res => {
          this.INVOICE_CHALLAN_SUMMERY = []
          this.DS_INVOICE = []
          this.DS_CHALLAN = []
          this.DS_GATEPASS = []
          console.log(res.data)
          this.INVOICE_CHALLAN_SUMMERY = res.data.schedule_list
          this.DS_INVOICE = res.data.schedule_list
          if(res.data.schedule_list) {
            for(let i=0; i<res.data.schedule_list.length; i++) {
              if(res.data.schedule_list[i].customer_info.customer_type === '424') {
                this.DS_CHALLAN.push(res.data.schedule_list[i])
              }
            }
          }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./InvoiceChallanSummery.less");
</style>