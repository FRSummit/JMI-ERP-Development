<template>
  <div id="stock-report-t1" class="stock-report-t1">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="stock-report-t1-inner">
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
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "vs" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
  computed: {
  },
  watch: {
  }
};
</script>