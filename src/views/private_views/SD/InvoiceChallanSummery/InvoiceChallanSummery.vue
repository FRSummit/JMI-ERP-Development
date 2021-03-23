<template>
  <div id="invoice-challan-summery" class="invoice-challan-summery">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="invoice-challan-summery-section">
      <div class="invoice-challan-summery-inner">
        <InvoiceChallanSummeryLeftList
          v-on:invoice_id_from_left="invoiceIdFromLeftHandler"
          v-on:updated_ds_from_left="updatedDSFromLeftHandler"/>
        <div class="invoice-challan-summery-detail-section">
          <div class="invoice-challan-summery-detail-inner">
            <DetailSection 
              :INVOICE_CHALLAN_SUMMERY="INVOICE_CHALLAN_SUMMERY"
              :DS_INVOICE="DS_INVOICE"
              :DS_CHALLAN="DS_CHALLAN"
              :INVOICE_ID_FROM_LEFT="INVOICE_ID_FROM_LEFT"
              :HEADER_DATA_INVOICE="HEADER_DATA_INVOICE"
              :HEADER_DATA_CHALLAN="HEADER_DATA_CHALLAN"
              :DS_SUMMERY_FROM_LEFT="DS_SUMMERY_FROM_LEFT" />
          </div>
        </div>
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
      routeName: "Invoice Challan Summary",
      parentPath: "Local Sales",
      pathName: [],
      // info_modal_schedult_count: false,
      schedule_count: null,
      INVOICE_CHALLAN_SUMMERY: [],
      DS_INVOICE: [],
      DS_CHALLAN: [],
      // DS_GATEPASS: [],
      DS_SUMMERY_FROM_LEFT: null,
      INVOICE_ID_FROM_LEFT: null,
      loading_popup_modal: false,
      loading_message: null,
      HEADER_DATA_INVOICE: [],
      HEADER_DATA_CHALLAN: [],
      // NEW_GATE_PASS_CREATED: false,
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
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Invoice Challan Summary" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    /*showInvoiceCountInformationMessagePopup() {
      this.schedule_count = this.$route.path.split(':')[1]
      this.info_modal_schedult_count = true
      setTimeout( () => {
        this.info_modal_schedult_count = false
      }, 2000)
    },*/
    async invoiceIdFromLeftHandler(ds) {
      console.log(ds)
      this.DS_SUMMERY_FROM_LEFT = null
      this.INVOICE_ID_FROM_LEFT = null

      this.DS_SUMMERY_FROM_LEFT = ds
      this.INVOICE_ID_FROM_LEFT = ds.id
      // Back to first tab
      document.querySelector('.packing-tab.v-tab').click()

      await this.DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(ds.id)
    },
    updatedDSFromLeftHandler(ds) {
      this.DS_SUMMERY_FROM_LEFT = ds
    },
    // -------------------------------------------------------------------------------
    // Service Call
    async DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(schedule_id) {
      await service.getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(schedule_id)
        .then(res => {
          this.INVOICE_CHALLAN_SUMMERY = []
          this.DS_INVOICE = []
          this.DS_CHALLAN = []
          // this.DS_GATEPASS = []
          this.HEADER_DATA_INVOICE = []
          this.HEADER_DATA_CHALLAN = []
          console.log(res.data)
          this.INVOICE_CHALLAN_SUMMERY = res.data.schedule_list
          this.DS_INVOICE = res.data.schedule_list
          this.HEADER_DATA_INVOICE = res.data.header
          console.log(this.HEADER_DATA_INVOICE)
          if(res.data.schedule_list) {
            for(let i=0; i<res.data.schedule_list.length; i++) {
              if(res.data.schedule_list[i].customer_info.customer_type === '424') {
                this.DS_CHALLAN.push(res.data.schedule_list[i])
                this.HEADER_DATA_CHALLAN = res.data.header
                console.log(this.HEADER_DATA_CHALLAN)
              }
            }
          }
        })
        .catch(err => {
          if(err) {
            this.INVOICE_CHALLAN_SUMMERY = []
            this.DS_INVOICE = []
            this.DS_CHALLAN = []
            this.HEADER_DATA_INVOICE = []
            this.HEADER_DATA_CHALLAN = []
            this.loading_message = 'Request failed to load or no data found'
            this.loading_popup_modal = true
            setTimeout( () => {
              this.loading_popup_modal = false
            }, 1500)
          }
        })
    },
    // async DS_GATE_PASS_DETAILS__FROM_SERVICE(ds_id) {
    //   this.DS_GATEPASS = []
    //   await service.getGatePassDetails_DS_INVOICE_CHALLAN_SUMMERY(ds_id)
    //     .then(res => {
    //       console.log(res.data)
    //       this.DS_GATEPASS = res.data.gate_pass_data ? (res.data.gate_pass_data.gate_pass_details ? (res.data.gate_pass_data.gate_pass_details) : []) : []
    //     })
    // }
  },
};
</script>

<style lang="less" scoped>
@import url("./InvoiceChallanSummery.less");
</style>