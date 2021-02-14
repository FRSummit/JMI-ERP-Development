<template>
  <div id="doctors-profile" class="doctors-profile">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="doctors-profile-inner">
      <ProfileLeftSection :profile="chamber_1" />
      <ProfileDetailsSection :profile="profile" />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import ProfileLeftSection from './LeftProfileSection/LeftProfileSection'
import ProfileDetailsSection from './ProfileDetailsSection/DetailsSection'
import BreadcrumbFunctions from '../../../../../functions/BreadcrumbFunctions'
const breadcrumbFunctions = new BreadcrumbFunctions()

import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

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
      profile: [],
      chamber_1: [],
      chamber_2: [],
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
    // console.log()
    let route_id = this.$route.path.split(':')[1]
    await this.DOCTORS_PROFILE_FROM_SERVICE(route_id)
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname);
    },
    async DOCTORS_PROFILE_FROM_SERVICE(route_id) {
      await service.getAdvisorProfile(route_id)
        .then(res => {
          // console.log(res.data)
          this.profile = res.data.profile
          // console.log(this.profile[0])
          this.chamber_1 = res.data.profile[0]
          this.chamber_2 = res.data.profile[1]
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./DoctorsProfile.less");
</style>