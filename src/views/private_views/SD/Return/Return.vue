<template>
  <div id="sd_return" class="sd_return">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="sd_return-section">
      <div class="sd_return-section-inner">
        <!-- <LeftSidebar :customer_list="left_side_customer_data_list" v-on:filter_modal="filterModalToggle" /> -->
        <LeftSidebar 
          v-on:filter_modal="filterModalToggle"
          v-on:select_customer_by_customer_code="selectCustomerByCustomerCode" />
        <DetailsSection 
        :style="filter_modal_toggle === true ? 'z-index: -1;' : 'z-index: 5;'"
        :customer_data="customer_data" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

import LeftSidebar from './LeftSidebar/LeftSidebar'
import DetailsSection from './DetailsSection/DetailsSection'

import ERPService from '../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
  components: {
    Heading,
    LeftSidebar,
    DetailsSection,
  },
  data() {
    return {
      routeName: "Return",
      parentPath: "Local Sales",
      pathName: [],
      filter_modal_toggle: false,
      left_side_customer_data_list: [],
      customer_data: null,
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
    // await this.ALL_CUSTOMER_FOR_DEPOT__FROM_SERVICE()
    // await this.CUSTOMER_INFO_FOR_DEPOT__FROM_SERVICE(1003)
  },
  methods: {
    createBreadcrumbData() {
    //   this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname);
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Return" }];
    },
    filterModalToggle(value) {
      this.filter_modal_toggle = value
    },
    /***----------------------------Left Section Emitted Functions ---------------------------------- ***/
    selectCustomerByCustomerCode(value) {
      // console.log(value)()
      this.CUSTOMER_INFO_FOR_DEPOT__FROM_SERVICE(value)
      // this.left_list_customer_selection_id = value
    },
    /***---------------------------- Service implementation ------------------------------------------***/
    // async ALL_CUSTOMER_FOR_DEPOT__FROM_SERVICE() {
    //   await service.getAllCustomerForDepot_CreateOrderLeftList()
    //     .then(res => {
    //       console.log(res.data)
    //       this.left_side_customer_data_list = res.data
    //     })
    // },
    // async CUSTOMER_INFO_FOR_DEPOT__FROM_SERVICE(customer_id) {
    //   await service.getCustomerInfoForDepot_CreateOrderLeftList(customer_id)
    //     .then(res => {
    //       console.log(res.data)
    //     })
    // }

    // Service call from left sidebar section
    async CUSTOMER_INFO_FOR_DEPOT__FROM_SERVICE(customer_id) {
      await service.getCustomerInfoForDepot_CreateOrderLeftList(customer_id)
        .then(res => {
          console.log(res.data)
          this.customer_data = res.data.customer_details
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./Return.less");
</style>