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
              :SCHEDULE_DETAILS_LIST_INSTITUTION="SCHEDULE_DETAILS_LIST_INSTITUTION"
              :INVOICE_FOR_CURRENT_DS_LIST="INVOICE_FOR_CURRENT_DS_LIST"
              v-on:ADD_INVOICE_TO_CURRENT_SCHEDULE="addInvoiceToCurrentSchedule"
              :HEADER_DATA="HEADER_DATA" />
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
      routeName: "Pending DS Invoice List",
      parentPath: "Local Sales",
      pathName: [],
      // info_modal_schedult_count: false,
      // schedule_count: null,
      SCHEDULE_DETAILS_LIST: [],
      SCHEDULE_DETAILS_LIST_CHEMIST: [],
      SCHEDULE_DETAILS_LIST_INSTITUTION: [],
      INVOICE_FOR_CURRENT_DS_LIST: [],
      DS_ID: null,
      DA_ID: null,
      CURRENT_SCHEDULE_ID: null,
      HEADER_DATA: [],
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
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Pending DS Invoice List" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    // showInvoiceCountInformationMessagePopup() {
    //   this.schedule_count = this.$route.path.split(':')[1]
    //   this.info_modal_schedult_count = true
    //   setTimeout( () => {
    //     this.info_modal_schedult_count = false
    //   }, 2000)
    // },
    async invoiceIdFromLeftHandler(val) {
      console.log(val)
      this.CURRENT_SCHEDULE_ID = null
      this.CURRENT_SCHEDULE_ID = val
      await this.DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(val)
    },
    addInvoiceToCurrentSchedule(value) {
      this.ADD_INVOICE_TO_CURRENT_DS__FROM_SERVICE(value)
    },
    // -------------------------------------------------------------------------------
    // Service Call
    async DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(schedule_id) {
      this.SCHEDULE_DETAILS_LIST = []
      this.SCHEDULE_DETAILS_LIST_CHEMIST = []
      this.SCHEDULE_DETAILS_LIST_INSTITUTION = []
      this.DA_ID = null
      this.DS_ID = null
      this.HEADER_DATA = []
      service.getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(schedule_id)
        .then(res => {
          console.log(res.data)
          this.SCHEDULE_DETAILS_LIST = res.data.schedule_list
          this.HEADER_DATA = res.data.header
          if(res.data.schedule_list) {
            for(let i=0; i<res.data.schedule_list.length; i++) {
              if(res.data.schedule_list[i].customer_info.customer_type === '422') {
                this.SCHEDULE_DETAILS_LIST_CHEMIST.push(res.data.schedule_list[i])
              } else if(res.data.schedule_list[i].customer_info.customer_type === '424') {
                this.SCHEDULE_DETAILS_LIST_INSTITUTION.push(res.data.schedule_list[i])
              }
            }
            // let da_id = res.data.schedule_list[0].ds_info.da_id
            // let ds_id = res.data.schedule_list[0].ds_id
            this.DA_ID = res.data.schedule_list[0].ds_info.da_id
            this.DS_ID = res.data.schedule_list[0].ds_id
            this.GET_INVOICE_FOR_CURRENT_DS__FROM_SERVICE(res.data.schedule_list[0].ds_info.da_id, res.data.schedule_list[0].ds_id)
          }
        })
        .catch(err => {
          if(err) {
            this.SCHEDULE_DETAILS_LIST = []
            this.SCHEDULE_DETAILS_LIST_CHEMIST = []
            this.SCHEDULE_DETAILS_LIST_INSTITUTION = []
            this.DA_ID = null
            this.DS_ID = null
            this.HEADER_DATA = []
            this.loading_message = 'Request failed to load or no data found'
            this.loading_popup_modal = true
            setTimeout( () => {
              this.loading_popup_modal = false
            }, 1500)
          }
        })
    },
    async GET_INVOICE_FOR_CURRENT_DS__FROM_SERVICE(da_id, ds_id) {
      await service.getInvoiceForCurrentDS_PENDING_DS_INVOICE_LIST(da_id, ds_id)
        .then(res => {
          console.log(res.data)
          this.INVOICE_FOR_CURRENT_DS_LIST = res.data.invoice_info
        })
    },
    async ADD_INVOICE_TO_CURRENT_DS__FROM_SERVICE(value) {
      let inv_list = []
      for(let i=0; i<value.length; i++) {
        let invoice_id = {
          invoice_id: value[i]
        }
        inv_list.push(invoice_id)
      }
      console.log(inv_list)
      await service.getAddInvoiceToCurrentDS_PENDING_DS_INVOICE_LIST(this.DS_ID, inv_list)
        .then(res => {
          console.log(res.data)
          this.DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(this.CURRENT_SCHEDULE_ID)
          if(res.data.response_data === 200) {
            // this.router.push('/features/users/dashboard')
            this.GET_INVOICE_FOR_CURRENT_DS__FROM_SERVICE(this.DA_ID, this.DS_ID)
          }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./PendingDS_InvoiceList.less");
</style>