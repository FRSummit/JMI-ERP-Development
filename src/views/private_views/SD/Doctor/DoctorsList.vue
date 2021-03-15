<template>
  <div id="doctors-list" class="doctors-list">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="data-table-section">
      <div class="data-table-section-inner">
        <v-data-table
          :headers="headers"
          :items="desserts"
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
              <button class="add-customer">ADD</button>
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
        desserts: [
          {
            name: 'Dr Qumrul Hassan Miron 1',
            type: 'Hardcore 1',
            designation: 'Senior Consultant 1',
            specialization: 'Anatomical Pathology 1',
            territory: 'Savar Bazar 1',
            status: 'Pending 1',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
          {
            name: 'Dr Qumrul Hassan Miron 3',
            type: 'Hardcore 3',
            designation: 'Senior Consultant 3',
            specialization: 'Anatomical Pathology 3',
            territory: 'Savar Bazar 3',
            status: 'Pending 3',
          },
          {
            name: 'Dr Qumrul Hassan Miron 2',
            type: 'Hardcore 2',
            designation: 'Senior Consultant 2',
            specialization: 'Anatomical Pathology 2',
            territory: 'Savar Bazar 2',
            status: 'Pending 2',
          },
        ],
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
  mounted() {
    document.querySelector('#doctors-list.doctors-list .v-input__icon').addEventListener('click', () => {
        if(window.getComputedStyle(document.querySelector('#doctors-list.doctors-list .v-input__slot .v-menu')).display === 'none') {
          document.querySelector('#doctors-list.doctors-list .v-input__slot .v-menu').style.display = 'block'
        }
    })
    // document.querySelector('#doctors-list.doctors-list .v-data-footer .v-data-footer__select').innerHTML = 'Entries'
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
  },
};
</script>

<style lang="less" scoped>
@import url("./DoctorsList.less");
</style>