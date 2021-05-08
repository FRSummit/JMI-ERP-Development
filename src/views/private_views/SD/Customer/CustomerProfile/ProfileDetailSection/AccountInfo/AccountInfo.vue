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
                              <input type="month" v-model="mmyyyy_picker" id="bdaymonth" name="bdaymonth" @change="mmyyyyOnChangeHandler">
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
        mmyyyy_picker: null,
    };
  },
  created() {},
  mounted() {
      let todate = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1))
      document.getElementById("bdaymonth").defaultValue = todate
  },
  methods: {
      mmyyyyOnChangeHandler() {
          console.log(this.mmyyyy_picker)
      }
  },
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