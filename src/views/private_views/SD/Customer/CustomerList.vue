<template>
  <div id="customer-profile" class="customer-profile">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="data-table-section">
      <div class="data-table-section-inner">
        <v-data-table
          :headers="headers"
          :items="customer_list"
          :key="id"
          class="elevation-1"
          :search="search"
          :custom-filter="filterOnlyCapsText"
          @click:row="handleRowClick"
          :items-per-page="15"
          :footer-props="{
            showFirstLastPage: true,
            'items-per-page-options': [5, 10, 15, 30, 50, 100, -1],
            'items-per-page-text': 'Entries',
          }"
          @update:items-per-page="getItemPerPage"
        >
        </v-data-table>
        <div class="add-search-print-section">
          <div class="add-search-print-section-inner">
            <!-- ADD BTN -->
            <div class="add-section">
              <button class="add-customer">
                <i class="zmdi zmdi-plus"></i>ADD
              </button>
            </div>
            <!-- SEARCH INPUT -->
            <div class="search-section">
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  id="search-filter"
                  placeholder="Search by ID No"
                  v-on:keyup="searchKeyUpHandler"
                />
              </div>
            </div>
            <!-- PRINT & PDF -->
            <div class="print-pdf-section">
              <div class="print-pdf-section-inner">
                <span class="print-icon" @click="printIconClickHandler"
                  ><i class="zmdi zmdi-print"></i
                ></span>
                <span class="pdf-icon" @click="pdfIconClickHandler"
                  ><i class="zmdi zmdi-file"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()
import ERPService from "../../../../service/ERPSidebarService";
const service = new ERPService();

import JMIFilter from '../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
  components: {
    Heading,
  },
  data() {
    return {
      routeName: "Customer List",
      parentPath: "Local Sales",
      pathName: [],
      footerProps: { itemsPerPageText: "Entries" },
      customer_list: [],
      CUSTOMER_LIST: [],
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  computed: {
    headers() {
      return [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        {
          text: "Code",
          value: "code",
        },
        { text: "Address", value: "address" },
        { text: "Phone", value: "phone" },
        { text: "Enrolled", value: "enrolled" },
        { text: "Status", value: "status" },
      ];
    },
  },
  async mounted() {
    document.querySelector("#customer-profile.customer-profile .v-input__icon").addEventListener("click", () => {
      if (window.getComputedStyle(document.querySelector("#customer-profile.customer-profile .v-input__slot .v-menu")).display === "none") {
        document.querySelector("#customer-profile.customer-profile .v-input__slot .v-menu").style.display = "block";
      }
    });
    this.GET_ALL_CUSTOMER_LIST__FROM_SERVICE();
  },
  methods: {
    createBreadcrumbData() {
      //   this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname);
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Customer List" }];
    },
    handleRowClick(item) {
      console.log(item);
    },
    getItemPerPage(val) {
      console.log(val);
    },
    printIconClickHandler() {
      console.log("printIconClickHandler");
    },
    pdfIconClickHandler() {
      console.log("pdfIconClickHandler");
    },
    searchKeyUpHandler(value) {
        console.log(value.key)
        let input = document.getElementById("search-filter");
        let filter = input.value.toUpperCase();
        let list = document.querySelectorAll('.v-data-table__wrapper table tbody tr')
        let txt_selector = "text-start"

        jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
    },
    checkCustomerType(customer_type) {
      console.log(customer_type)
      if(customer_type === '422') {
        return 'Chemist'
      } else if(customer_type === '424') {
        return 'Institute'
      }
    },
    // -------------------------------------------------------------------------------------
    // SERVICE CALL
    async GET_ALL_CUSTOMER_LIST__FROM_SERVICE() {
      await service.getSbuVustomerListList_CUSTOMER_LIST()
        .then((res) => {
          console.log(res.data);
          this.CUSTOMER_LIST = res.data.customer_list;
          console.log(this.CUSTOMER_LIST)
        //   console.log(res.data.customer_info.length)
          for(let i=0; i<this.CUSTOMER_LIST.length; i++) {
              let customer = {
                name: this.CUSTOMER_LIST[i].display_name ? this.CUSTOMER_LIST[i].display_name : '',
                code: this.CUSTOMER_LIST[i].display_code ? this.CUSTOMER_LIST[i].display_code : '',
                address: this.CUSTOMER_LIST[i].address ? this.CUSTOMER_LIST[i].address : '',
                phone: this.CUSTOMER_LIST[i].phone ? this.CUSTOMER_LIST[i].phone : '',
                enrolled: this.CUSTOMER_LIST[i].enrollment_date ? this.CUSTOMER_LIST[i].enrollment_date : '',
                status: '',
              }
              this.customer_list.push(customer)
            }
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./CustomerList.less");
</style>