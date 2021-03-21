<template>
  <div id="stock-report-t1" class="stock-report-t1">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="stock-report-t1-inner">
      <table class="table jmi-table" style="">
        <thead>
          <tr style="">
            <th style="text-align: left;">Sl</th>
            <th>Code</th>
            <th style="text-align: left;">Product Name</th>
            <th>Pack Size</th>
            <th style="text-align: right;">Unit Price</th>
            <th>Stock</th>
            <th style="text-align: right;">Total Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, i) in 40" :key="i">
            <td style="text-align: left;">{{ i + 1 }}</td>
            <td>AXCL</td>
            <td style="text-align: left;">AMX 250 Cap</td>
            <td>100's</td>
            <td style="text-align: right;">317.70</td>
            <td>15</td>
            <td style="text-align: right;">4764.44</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumbT2/HeadingTitleBreadcrumb";

export default {
  components: {
    Heading,
  },
  data() {
    return {
      routeName: "Stock Report",
      parentPath: "Local Sales",
      pathName: [],
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
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "vs" },];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
  computed: {},
  watch: {},
};
</script>