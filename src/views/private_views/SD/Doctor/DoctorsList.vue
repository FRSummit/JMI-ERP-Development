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
        >
          <!-- <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search (UPPER CASE ONLY)"
              class="mx-4"
            ></v-text-field>
          </template> -->
          <template v-slot:body.append>
            <tr>
              <!-- <td></td>
              <td>
                <v-text-field
                  v-model="calories"
                  type="number"
                  label="Less than"
                ></v-text-field>
              </td> -->
              <td colspan="4"></td>
            </tr>
          </template>
        </v-data-table>
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
  mounted() {},
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
      }
  },
};
</script>

<style lang="less" scoped>
@import url("./DoctorsList.less");
</style>