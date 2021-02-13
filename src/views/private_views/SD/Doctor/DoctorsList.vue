<template>
  <div id="doctors-list" class="doctors-list">
    <Heading :pathName="pathName" :routeName="routeName" />
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
const breadcrumbFunctions = new BreadcrumbFunctions()

export default {
  components: {
    Heading,
  },
  data() {
    return {
      routeName: "Doctors",
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
@import url("./DoctorsList.less");
</style>