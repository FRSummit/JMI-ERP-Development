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
        <div class="comapny-sec" v-for="(sbu, i) in ASSIGNED_SBU_LIST" :key="i">
          <p class="company-name">{{ sbu.sbu_name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["ASSIGNED_SBU_LIST"],
  data() {
    return {
      progress: true,
    };
  },
  created() {
  },
  async mounted() {
  },
  methods: {
    // SERVICE IMPLEMENTATION
  },
  watch: {
    ASSIGNED_SBU_LIST(newVal, oldVal) {
      console.log(newVal + '    ' + oldVal)
      if(newVal) {
        this.progress = false
      }
    }
  }
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