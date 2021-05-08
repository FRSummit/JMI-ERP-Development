<template>
  <div id="customer-profile" class="customer-profile">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="doctors-profile-inner">
      <ProfileLeftSection :person="person" :advisor="advisor" />
      <ProfileDetailsSection :person="person" :advisor="advisor" :chamber="chamber" :chamber_location="chamber_location" :family="family" />
    </div>
  </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()
import ProfileLeftSection from './LeftSection/LeftSection'
import ProfileDetailsSection from './ProfileDetailSection/ProfileDetailsSection'

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
      routeName: "Customer Profile",
      parentPath: "Local Sales",
      pathName: [],

      advisor: [],
      chamber: [],
      chamber_location: [],
      family: [],
      person: [],
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
    //   this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname);
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Customer Profile" }];
    },
    async DOCTORS_PROFILE_FROM_SERVICE(route_id) {
      await service.getAdvisorProfile(route_id)
        .then(res => {
          console.log(res.data)
          if(res.data.response_code === "200") {
            this.advisor = res.data.advisor
            this.chamber = res.data.chamber
            this.chamber_location = res.data.chamber_location
            this.family = res.data.family
            this.person = res.data.person
          }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./CustomerProfile.less");
</style>