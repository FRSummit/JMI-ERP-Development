<template>
  <div id="stock-report-t1" class="stock-report-t1">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="stock-report-t1-inner">
      <span class="print-all-icon"><i class="zmdi zmdi-print" @click="printAllClickHandler"></i><span class="tool-tip">Print All Invoice</span></span>
      <div class="stock-report-t1-inner-tablse-section">
        <table class="table jmi-table" style="">
          <thead>
            <tr style="">
              <th style="text-align: left;">Sl</th>
              <th>Code</th>
              <th style="text-align: left;">Product Name</th>
              <th>Batch</th>
              <th>MFG Date</th>
              <th>EXP Date</th>
              <th>Pack Size</th>
              <th style="text-align: right;">Unit Price</th>
              <th>Stock</th>
              <th style="text-align: right;">Total Value</th>
            </tr>
          </thead>
          <tbody v-for="(prod_group, i) in stock_list" :key="i">
            <tr><td colspan="8" style="text-align: left; color: #026CD1; font-weight: bold; text-decoration: underline;">{{ i }}</td></tr>
            <tr v-for="(prod, j) in prod_group" :key="j">
              <td style="text-align: left;">{{ (j + 1) }}</td>
              <td>{{ prod.code }}</td>
              <td style="text-align: left;">{{ prod.name }}</td>
              <td>{{ prod.batch }}</td>
              <td>{{ createMFG_EXP_Date((prod.mfg_date).toString().split(' ')[0]) }}</td>
              <td>{{ createMFG_EXP_Date((prod.exp_date).toString().split(' ')[0]) }}</td>
              <td>{{ prod.pack_size }}</td>
              <td style="text-align: right;">{{ prod.unit_price }}</td>
              <td>{{ prod.stock }}</td>
              <td style="text-align: right;">{{ prod.value }}</td>
            </tr>
          </tbody>
        </table>
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
import ERPSidebarService from '../../../../service/ERPSidebarService'
const service = new ERPSidebarService()

export default {
  components: {
    Heading,
  },
  data() {
    return {
      routeName: "Stock Report",
      parentPath: "Local Sales",
      pathName: [],
      stock_list: [],
      loading_popup_modal: false,
      loading_message: null,
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
    await this.PRESENT_POSITION_STOCK_REPORT__FROM_SERVICE()
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "vs" },];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    dateFormat2(d) {
        var t = new Date(d);
        var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString().slice(-2);
    },
    createMFG_EXP_Date(dt) {
        return this.dateFormat2(dt)
    },
    printAllClickHandler() {},
    // ------------------------------------------------------------------------------------------
    // SERVICE CALL
    async PRESENT_POSITION_STOCK_REPORT__FROM_SERVICE() {
      this.stock_list = []
      service.getPresentPositionStockReport__STOCK_REPORT()
        .then(res => {
          console.log(res.data)
          this.stock_list = res.data.stock_info
        })
        .catch(err => {
          if(err) {
            this.stock_list = []
            this.loading_message = 'Request failed to load or no data found'
            this.loading_popup_modal = true
            setTimeout( () => {
              this.loading_popup_modal = false
            }, 1500)
          }
        }) 
    }
  },
  computed: {},
  watch: {},
};
</script>