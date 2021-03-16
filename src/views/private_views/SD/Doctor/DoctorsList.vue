<template>
  <div id="doctors-list" class="doctors-list">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="data-table-section">
      <div class="data-table-section-inner">
        <v-data-table
          :headers="headers"
          :items="customer_list"
          :key="name"
          class="elevation-1"
          :search="search"
          :custom-filter="filterOnlyCapsText"
          @click:row="handleRowClick"
          :items-per-page="5"
          :footer-props="{
            showFirstLastPage: true,
            'items-per-page-options': [5, 10,15, 30, 50, 100],
            'items-per-page-text':'Entries'
          }"
          @update:items-per-page="getItemPerPage"
        >
          <!-- <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search (UPPER CASE ONLY)"
              class="mx-4"
            ></v-text-field>
          </template> -->
          <!-- <template v-slot:body.append>
            <tr> -->
              <!-- <td></td>
              <td>
                <v-text-field
                  v-model="calories"
                  type="number"
                  label="Less than"
                ></v-text-field>
              </td> -->
              <!-- <td colspan="4"></td>
            </tr>
          </template> -->
        </v-data-table>
        <div class="add-search-print-section">
          <div class="add-search-print-section-inner">
            <!-- ADD BTN -->
            <div class="add-section">
              <button class="add-customer"><i class="zmdi zmdi-plus"></i>ADD</button>
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
                <span class="print-icon" @click="printIconClickHandler"><i class="zmdi zmdi-print"></i></span>
                <span class="pdf-icon" @click="pdfIconClickHandler"><i class="zmdi zmdi-file"></i></span>
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
import BreadcrumbFunctions from "../../../../functions/BreadcrumbFunctions";
const breadcrumbFunctions = new BreadcrumbFunctions();
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
      routeName: "Doctors List",
      parentPath: "Local Sales",
      pathName: [],
      // footerProps: {'items-per-page-options': [5, 10,15, 30, 50, 100]},
      footerProps: {itemsPerPageText: 'Entries'},
        // search: '',
        // calories: '',
        customer_list: [],
    };
  },
    computed: {
      headers () {
        return [
          {
            text: 'Name',
            align: 'start',
            // sortable: false,
            value: 'name',
          },
          {
            text: 'Type',
            value: 'type',
            // filter: value => {
            //   if (!this.calories) return true

            //   return value < parseInt(this.calories)
            // },
          },
          { text: 'Designation', value: 'designation' },
          { text: 'Specialization', value: 'specialization' },
          { text: 'Territory', value: 'territory' },
          { text: 'Status', value: 'status' },
        ]
      },
    },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
    document.querySelector('#doctors-list.doctors-list .v-input__icon').addEventListener('click', () => {
      if(window.getComputedStyle(document.querySelector('#doctors-list.doctors-list .v-input__slot .v-menu')).display === 'none') {
        document.querySelector('#doctors-list.doctors-list .v-input__slot .v-menu').style.display = 'block'
      }
    })
    await this.GET_ALL_CUSTOMER_LIST__FROM_SERVICE();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(
        window.location.pathname
      );
    },
      // filterOnlyCapsText (value, search, item) {
      //   console.log(item)
      //   return value != null &&
      //     search != null &&
      //     typeof value === 'string' &&
      //     value.toString().toLocaleUpperCase().indexOf(search) !== -1
      // },
    handleRowClick(item) {
      console.log(item)
    },
    getItemPerPage(val) {
      console.log(val);
    },
    printIconClickHandler() {
      console.log('printIconClickHandler')
    },
    pdfIconClickHandler() {
      console.log('pdfIconClickHandler')
    },
    searchKeyUpHandler(value) {
        console.log(value.key)
        let input = document.getElementById("search-filter");
        let filter = input.value.toUpperCase();
        let list = document.querySelectorAll('.v-data-table__wrapper table tbody tr')
        let txt_selector = "text-start"

        jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
    },
    // -------------------------------------------------------------------------------------
    // SERVICE CALL
    async GET_ALL_CUSTOMER_LIST__FROM_SERVICE() {
      await service.getAllAdvisorList_DOCTOR_LIST().then((res) => {
        console.log(res.data.advisors_info);
        this.CUSTOMER_LIST = res.data.advisors_info;
        console.log(res.data.advisors_info.length)
        for(let i=0; i<this.CUSTOMER_LIST.length; i++) {
            let customer = {
              name: this.CUSTOMER_LIST[i].advisor_name ? this.CUSTOMER_LIST[i].advisor_name : '',
              type: this.CUSTOMER_LIST[i].advisor_type ? this.CUSTOMER_LIST[i].advisor_type : '',
              designation: "DUMMY DATA",
              specialization: this.CUSTOMER_LIST[i].specialization ? this.CUSTOMER_LIST[i].specialization : '',
              territory: "DUMMY DATA",
              status: "DUMMY DATA"
            }
            this.customer_list.push(customer)
          }
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DoctorsList.less");
</style>