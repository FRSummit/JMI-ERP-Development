<template>
  <div id="competitor-data-management" class="competitor-data-management">
    <!-- <h1 style="text-align: center">Datatable with 3rd Party API</h1>
    <v-data-table
      :page="page"
      :pageCount="numberOfPages"
      :headers="headers"
      :items="passengers"
      :options.sync="options"
      :server-items-length="totalPassengers"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:[`item.logo`]="{ item }">
        <img :src="item.airline.logo" style="width: 10%" />
      </template>
      <template v-slot:[`item.website`]="{ item }">
        <a :href="item.airline.website">{{ item.airline.website }}</a>
      </template>
    </v-data-table> -->
    <div class="top-intro-section">
      <div class="title-breadcrumb-section">
        <p class="page-title">Competitor Data Management</p>
        <p class="breadcrumb">Settings &amp; Management > Competitor List</p>
      </div>
      <div class="pagination-section">
        <div class="total-entries">
          <label class="title">Entries</label>
          <div class="drop-down-arrow">
            <i class="fa fa-angle-down"></i>
          </div>
          <select id="entry-select" class="entry-select">
            <i class="fa fa-angle-down"></i>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>

          <!-- <v-container fluid>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="items" label="Standard" dense></v-select>
              </v-col>
            </v-row>
          </v-container> -->
        </div>
        <div class="pagination">
          <div class="page-infos">
            <span
              >{{ pageDataStart }} - {{ pageDataEnd }} of
              {{ totalPagesData }}</span
            >
          </div>
          <div class="arrow-section">
            <div class="left-arrow">
              <a href="#!"><i class="fa fa-angle-left"></i></a>
            </div>
            <div class="right-arrow">
              <a href="#!"><i class="fa fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table
      id="dtBasicExample"
      class="data-mgt-table"
      cellspacing="0"
      width="100%"
    >
      <thead class="data-mgt-thead">
        <tr>
          <th class="table-th th-name">NAME</th>
          <th class="table-th th-code">CODE</th>
          <th class="table-th th-address">ADDRESS</th>
          <th class="table-th th-market-share">MARKET SHARE</th>
          <th class="table-th th-market-size">MARKET SIZE (BDT)</th>
          <th class="table-th th-major-products">MAJOR PRODUCTS</th>
          <th class="table-th th-add-new">
            <span><i class="fas fa-plus-circle"></i>Add</span>
          </th>
        </tr>
      </thead>
      <tbody class="data-mgt-tbody">
        <!-- <tr>
          <td class="table-td td-name">RX Pharmacy</td>
          <td class="table-td td-code">JMI-2231225</td>
          <td class="table-td td-address">
            15 Genda, Dhaka-Aricha Hwy, Savar Union, Dhaka 1212
          </td>
          <td class="table-td td-market-share">13%</td>
          <td class="table-td td-market-size">100000000</td>
          <td class="table-td td-major-products">20</td>
          <td class="table-td td-add-new"></td>
        </tr> -->
        <tr v-for="(data, i) in competitor_table_data" :key="i">
          <td class="table-td td-name">
            {{ data.name }} <i class="fa fa-check-circle"></i>
          </td>
          <td class="table-td td-code">{{ data.code }}</td>
          <td class="table-td td-address">{{ data.address }}</td>
          <td class="table-td td-market-share">
            <span
              ><i class="fas fa-arrow-up" v-if="i % 2 === 0"></i
              ><i class="fas fa-arrow-down" v-if="i % 2 !== 0"></i></span
            >{{ data.market_share }}
          </td>
          <td class="table-td td-market-size">{{ data.market_size }}</td>
          <td class="table-td td-major-products">{{ data.major_products }}</td>
          <td class="table-td td-add-new">
              <i class="fas fa-pencil-alt"></i>
              <i class="fas fa-trash-alt"></i>
          </td>
        </tr>
      </tbody>
      <!-- <tfoot>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </tfoot> -->
    </table>
  </div>
</template>

<script>
import ERPSidebarService from "../../../service/ERPSidebarService";
const service = new ERPSidebarService();
export default {
  name: "DatatableComponent",
  data() {
    return {
      page: 0,
      totalPassengers: 0,
      numberOfPages: 0,
      passengers: [],
      loading: true,
      options: {},
      headers: [
        { text: "Passenger Name", value: "name" },
        { text: "Number Of Trips", value: "trips" },
        { text: "Airline", value: "airline[0].name" },
        { text: "Logo", value: "logo" },
        { text: "Website", value: "website" },
      ],
      // Customization
      pageDataStart: 1,
      pageDataEnd: 12,
      totalPagesData: 1003,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      competitor_table_data: [],
    };
  },
  created() {
    this.$emit('routeName', this.$route.name);
    service.getCompetitorsDataMgt().then((res) => {
      this.competitor_table_data = res.data;
    });
  },
  //this one will populate new data set when user changes current page.
  watch: {
    options: {
      handler() {
        this.readDataFromAPI();
      },
    },
    deep: true,
  },
  methods: {
    //Reading data from API method.
    readDataFromAPI() {
      this.loading = true;
      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      service.getPassengersList(itemsPerPage, pageNumber).then((response) => {
        //Then injecting the result to datatable parameters.
        this.loading = false;
        this.passengers = response.data[0].data;
        this.totalPassengers = response.data[0].totalPassengers;
        this.numberOfPages = response.data[0].totalPages;
        // console.log(response.data);
        // console.log(response.data[0]);
      });
    },
  },
  //this will trigger in the onReady State
  mounted() {
    this.readDataFromAPI();
  },
};
</script>

<style scoped>
.top-intro-section {
  margin-bottom: 20px;
}
.title-breadcrumb-section {
  display: inline-block;
  width: 70%;
}
.page-title {
  margin: 0 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 10px;
}
.breadcrumb {
  background: snow;
  padding: 0 0;
  display: block;
  margin: 0 0;
  line-height: 1;
  color: #026cd1;
  text-decoration: none;
  font-size: 11px;
}
.breadcrumb::before {
  display: none;
}
.pagination-section {
  display: inline-block;
  width: 30%;
}
.total-entries {
  display: inline-block;
  position: relative;
}
.total-entries .title {
  display: inline-block;
  color: #212529;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
}
.total-entries .drop-down-arrow {
  position: absolute;
  right: 0;
  top: 4px;
}
.total-entries .drop-down-arrow .fa-angle-down {
  font-size: 10px;
  height: 20px;
  width: 20px;
  background: #d3efff;
  border-radius: 20px;
}
.total-entries .entry-select {
  display: inline-block;
  width: 40px;
  height: auto;
  color: #212529;
  border: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  outline: none;
}
.pagination {
  display: flex;
  float: right;
}
.page-infos span {
  font-size: 12px;
  font-weight: 800;
}
.arrow-section {
  line-height: 1;
  margin-left: 20px;
}
.left-arrow {
  display: inline-block;
}
.right-arrow {
  display: inline-block;
  margin-left: 20px;
}
.fa-angle-left {
  font-size: 16px;
  height: 20px;
  width: 20px;
  background: #d3efff;
  border-radius: 20px;
}
.fa-angle-right {
  font-size: 16px;
  height: 20px;
  width: 20px;
  background: #d3efff;
  border-radius: 20px;
}
.data-mgt-table {
  background-color: #49a6ff21;
  padding: 20px;
  border-radius: 26px;
  border-collapse: collapse;
}
.table-th {
  text-align: center;
  padding: 20px 20px;
}
.table-td {
  text-align: center;
  padding: 10px 20px;
}
.data-mgt-thead tr {
  border-bottom: 1px solid #0093da40;
  line-height: 1;
  font-size: 16px;
  font-weight: 500;
  color: #0093da;
}
.data-mgt-tbody tr {
  line-height: 1;
  border-bottom: none;
  font-size: 16px;
  font-weight: 500;
  color: #000000c2;
}
.data-mgt-tbody .fa-check-circle {
  width: 8px;
  margin-left: 6px;
}
.data-mgt-tbody .fa-arrow-up {
  color: #82c91e;
}
.data-mgt-tbody .fa-arrow-down {
  color: red;
}
.table-th:nth-child(1),
.table-td:nth-child(1) {
  text-align: left;
  width: 20%;
}
.table-th:nth-child(2),
.table-td:nth-child(2) {
  width: 10%;
  min-width: 145px;
}
.table-th:nth-child(3),
.table-td:nth-child(3) {
  text-align: left;
  width: 30%;
}
.table-th:nth-child(4),
.table-td:nth-child(4) {
  width: 10%;
}
.table-td:nth-child(4) span {
  margin-right: 10px;
  font-size: 14px;
}
.table-th:nth-child(5),
.table-td:nth-child(5) {
  width: 10%;
}
.table-th:nth-child(6),
.table-td:nth-child(6) {
  width: 10%;
}
.table-th:nth-child(7),
.table-td:nth-child(7) {
  width: 10%;
}
.table-th:nth-child(7) span {
  background-color: #ffffff;
  padding: 4px 10px;
  border-radius: 14px;
}
.table-th:nth-child(7) span .fa-plus-circle {
    padding-right: 6px;
    font-size: 24px;
    vertical-align: middle;
    margin-top: -4px;
}
.table-td:nth-child(7) .fa-pencil-alt {
}
.table-td:nth-child(7) .fa-trash-alt {
}
</style>