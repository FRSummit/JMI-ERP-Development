<template>
  <div id="invoice-challan-printing" class="invoice-challan-printing">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="invoice-challan-printing-section">
      <div class="invoice-challan-printing-inner">
        <ReceiveGRNLeftList
          v-on:invoice_id_from_left="invoiceIdFromLeftHandler"/>
        <div class="invoice-challan-printing-detail-section">
          <div class="invoice-challan-printing-detail-inner">
            <DetailSection 
              :SCHEDULE_DETAILS_LIST="SCHEDULE_DETAILS_LIST"
              :INVOICE_FOR_CURRENT_DS_LIST="INVOICE_FOR_CURRENT_DS_LIST"
              :HEADER_DATA="HEADER_DATA"
              :GRN_DATA="GRN_DATA"
              v-on:return_grn_btn_click="returnGrnBtnClick" />
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
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumbT2/HeadingTitleBreadcrumb";
import ReceiveGRNLeftList from "./Sidebar/ReceiveGRNLeftList";
import DetailSection from "./DetailSection/DetailSection";
// import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()
import Service from "../../../../service/ERPSidebarService";
const service = new Service();

export default {
  components: {
    Heading,
    ReceiveGRNLeftList,
    DetailSection,
  },
  data() {
    return {
      routeName: "Receive GRN",
      parentPath: "Local Sales",
      pathName: [],
      // info_modal_schedult_count: false,
      // schedule_count: null,
      GRN_DATA: [],
      SCHEDULE_DETAILS_LIST: [],
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
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Receive GRN" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    async invoiceIdFromLeftHandler(val) {
      console.log(val)
      this.CURRENT_SCHEDULE_ID = null
      this.CURRENT_SCHEDULE_ID = val.return_grn_no
      await this.GRN_INFO_BY_GRN_NO__FROM_SERVICE(val.return_grn_no)
    },
    // -------------------------------------------------------------------------------
    // Service Call
    async GRN_INFO_BY_GRN_NO__FROM_SERVICE(grn_no) {
      this.SCHEDULE_DETAILS_LIST = []
      this.DA_ID = null
      this.DS_ID = null
      this.HEADER_DATA = []
      localStorage.removeItem('jmi_return_grn_data_list')
      service.getGRN_InfoByGRN_No__DELIVERY_GRN(grn_no)
        .then(res => {
          console.log(res.data)
          this.GRN_DATA = res.data.grn_info
          this.SCHEDULE_DETAILS_LIST = res.data.grn_info.grn_detail
          localStorage.setItem('jmi_return_grn_data_list', JSON.stringify(res.data.grn_info.grn_detail))
          this.HEADER_DATA = res.data.header
          console.log(this.SCHEDULE_DETAILS_LIST)
          console.log(this.HEADER_DATA)
          if(res.data.schedule_list) {
            this.DA_ID = res.data.schedule_list[0].ds_info.da_id
            this.DS_ID = res.data.schedule_list[0].ds_id
          }
        })
        .catch(err => {
          if(err) {
            this.SCHEDULE_DETAILS_LIST = []
            this.DA_ID = null
            this.DS_ID = null
            this.HEADER_DATA = []
            localStorage.removeItem('jmi_return_grn_data_list')
            this.loading_message = 'Request failed to load or no data found'
            this.loading_popup_modal = true
            setTimeout( () => {
              this.loading_popup_modal = false
            }, 1500)
          }
        })
    },
    async returnGrnBtnClick() {
      await service.getReturnGRN__DELIVERY_GRN(this.CURRENT_SCHEDULE_ID)
        .then(res => {
          console.log(res.data)
          localStorage.removeItem('jmi_return_grn_data_list')
          if(res.data.response_code === 200) {
            this.loading_message = 'Return GRN Success'
            this.loading_popup_modal = true
            setTimeout( () => {
              this.loading_popup_modal = false
              this.loading_message = null
            }, 2000)
          }
        })
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./ReceiveGRN.less");
</style>