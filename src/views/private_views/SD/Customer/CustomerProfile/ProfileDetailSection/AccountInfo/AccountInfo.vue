<template>
  <div id="basic-info-section" class="basic-info-section">
      <div class="basic-info-section-inner">
          <!-- PERSONAL INFO -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Account Info</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Total Order</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Total Invoice:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">In Transit:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Credit Limit:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Current Outstanding:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Available Limit:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="transection-history-txt"><b>Transection History</b></p>
                          <div class="date-selection-section">
                              date
                          </div>
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
@import url("./AccountInfo.less");
</style>

<style scoped>
.row p.transaction-history-txt {
    display: inline-block;
}
.row .date-selection-section {
    display: inline-block;
}
</style>