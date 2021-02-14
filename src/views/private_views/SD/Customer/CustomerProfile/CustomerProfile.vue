<template>
  <div id="customer-profile" class="customer-profile">
    <Heading :pathName="pathName" :routeName="routeName" />
    <ProfileLeftSection />
    <ProfileDetailsSection />
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()
import ProfileLeftSection from './LeftSection/LeftSection'
import ProfileDetailsSection from './ProfileDetailSection/ProfileDetailsSection'

export default {
  components: {
    Heading,
    ProfileLeftSection,
    ProfileDetailsSection
  },
  data() {
    return {
      routeName: "Customer Profile",
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
@import url("./CustomerProfile.less");
</style>