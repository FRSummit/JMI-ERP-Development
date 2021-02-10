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
      // let window_pathname = window.location.pathname
      // for(let i=1; i<window_pathname.split('/').length; i++) {
      //   let pp_str = window_pathname.split('/')[i].charAt(0).toUpperCase() + window_pathname.split('/')[i].slice(1)
      //   let parts = pp_str.split('_')
      //   let parts_length = parts.length
      //   let pn_str = ""
      //   for(let j=0; j<parts_length; j++) {
      //     pn_str += parts[j] + ' '
      //   }
      //   this.pathName.push({name: pn_str.trim()})
      // }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryProcessInvoiceChallanPrinting.less");
</style>