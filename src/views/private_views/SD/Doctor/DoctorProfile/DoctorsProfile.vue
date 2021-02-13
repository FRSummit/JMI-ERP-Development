<template>
  <div id="doctors-profile" class="doctors-profile">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="doctors-profile-inner">
      <ProfileLeftSection />
      <ProfileDetailsSection />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import ProfileLeftSection from './LeftProfileSection/LeftProfileSection'
import ProfileDetailsSection from './ProfileDetailsSection/DetailsSection'
import BreadcrumbFunctions from '../../../../../functions/BreadcrumbFunctions'
const breadcrumbFunctions = new BreadcrumbFunctions()

export default {
  components: {
    Heading,
    ProfileLeftSection,
    ProfileDetailsSection
  },
  data() {
    return {
      routeName: "Doctors Profile",
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
      this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DoctorsProfile.less");
</style>