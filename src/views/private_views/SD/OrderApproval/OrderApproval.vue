<template>
    <div class="order-approval">
        <Heading :pathName="pathName" :routeName="routeName" />
        <div class="order-approval-section">
          <div class="order-approval-section-inner">
            <LeftSidebarSection />
            <DetailsSection />
          </div>
        </div>
    </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

import LeftSidebarSection from './LeftSidebarSection/LeftSidebarSection'
import DetailsSection from './DetailsSection/DetailsSection'

export default {
  components: {
    Heading,
    LeftSidebarSection,
    DetailsSection
  },
  data() {
    return {
      routeName: "Create Order",
      parentPath: "Local Sales",
      pathName: [],
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  mounted() {},
  methods: {
    createBreadcrumbData() {
    //   this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname);
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Customer Profile" }];
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./OrderApproval.less");
</style>