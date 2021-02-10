<template>
  <div id="invoice-challan-printing" class="invoice-challan-printing">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="invoice-challan-printing-section">
      <div class="invoice-challan-printing-inner">
        <InvoiceChallanPrintingLeftList/>
        <div class="invoice-challan-printing-detail-section">
          <div class="invoice-challan-printing-detail-inner">
            <DetailSection />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import InvoiceChallanPrintingLeftList from "./Sidebar/InvoiceChallanPrintingLeftList";
import DetailSection from "./DetailSection/DetailSection";
// import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

export default {
  components: {
    Heading,
    InvoiceChallanPrintingLeftList,
    DetailSection,
  },
  data() {
    return {
      routeName: "Delivery Process Invoice/Challan Printing",
      parentPath: "Local Sales",
      pathName: [],
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Delivery Process Invoice/Challan Printing" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryProcessInvoiceChallanPrinting.less");
</style>