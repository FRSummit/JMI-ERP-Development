<template>
  <div id="group-list-section" class="group-list-section hide">
    <div class="group-list-triangle-sec">
      <span class="company-tri-icon">
        <i class="fas fa-caret-up"></i>
      </span>
    </div>
    <div class="group-list-sec">
      <div id="group-progressbar" class="group-progressbar" v-if="progress">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div class="comapny-list-sec">
        <div class="comapny-sec" v-for="(comapny, i) in company_list" :key="i">
          <p class="company-name">{{ comapny.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ERPSidebarService from "../../service/ERPSidebarService";
const service = new ERPSidebarService();

export default {
  data() {
    return {
      company_list: [],
      progress: true,
    };
  },
  created() {
    service.getAllCompanyList().then((res) => {
      this.company_list = res.data;
      this.progress = false;
    });
  },
};
</script>

<style scoped>
@-moz-document url-prefix() {
  .group-list-sec {
    overflow-y: scroll;
    scrollbar-color: #168fff #c9c9c9;
    scrollbar-width: thin;
  }
}
</style>