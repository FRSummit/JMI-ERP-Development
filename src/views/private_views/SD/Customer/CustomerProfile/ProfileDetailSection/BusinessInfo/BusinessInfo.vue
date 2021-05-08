<template>
  <div id="basic-info-section" class="basic-info-section">
      <div class="basic-info-section-inner">
          <!-- PERSONAL INFO -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Business Info</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Via Registration No:</span>
                              <span class="data">{{ person.dob ? person.dob : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Trade Licence No:</span>
                              <span class="data">{{ person.sex ? person.sex : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">VIA:</span>
                              <span class="data">{{ person.blood_group ? person.blood_group : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">TIN:</span>
                              <span class="data">{{ person.religion ? person.religion : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">BIN:</span>
                              <span class="data">{{ person.nid ? person.nid : "Not Found" }}</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["person", "advisor", "family"],
  components: {},
  data() {
    return {
    };
  },
  created() {},
  mounted() {
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import url("./BusinessInfo.less");
</style>