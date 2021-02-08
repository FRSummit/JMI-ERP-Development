<template>
  <div
    id="delivery-process-dispatch-entry"
    class="delivery-process-dispatch-entry"
  >
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="delivery-process-dispatch-entry-inner">
      <div class="dispatch-entry-tab-section">
        <b-tabs class="mt-3 dispatch-entry-tabs">
          <b-tab title="Manual Entry" active>
            <div class="manual-entry-tab">
              <div class="manual-entry-tab-inner">
                <div class="input-section">
                  <div class="input-section-inner">
                    <div class="delivery-schedule-no">
                      <div class="delivery-schedule-no-inner">
                        <span class="label">Delivery Schedule No</span>
                        <input type="text" placeholder="Enter Schedule No" />
                      </div>
                    </div>
                    <div class="da-sr-name">
                      <div class="da-sr-name-inner">
                        <span class="label">DA/SR Name</span>
                        <input type="text" placeholder="Enter Name" />
                      </div>
                    </div>
                    <div class="dispatch-date">
                      <div class="dispatch-date-inner">
                        <span class="label">Dispatch Date</span>
                        <input type="text" placeholder="DD/MM/YY" />
                      </div>
                    </div>
                    <div class="dispatch-time">
                      <div class="dispatch-time-inner">
                        <span class="label">Dispatch Time</span>
                        <input type="text" placeholder="MM/HH:PM" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="submit-section">
                  <div class="submit-section-inner">
                    <button>Dispatch Now</button>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab title="Bar Code Scan">
            <div class="bar-code-scan-tab">
              <div class="bar-code-scan-tab-inner">
                <div class="delivery-details-section">
                  <div class="delivery-details-section-inner">
                    <div class="delivery-schedule-no-section">
                      <p class="schedule-no">
                        Delivery Schedule No: <span>DSID102131</span>
                      </p>
                    </div>
                    <div class="da-sr-section">
                      <p class="da-sr">DA: <span>Mehedi Hassan</span></p>
                    </div>
                    <div class="dispatch-time">
                      <p class="time">Out-time: <span>08:30PM</span></p>
                    </div>
                    <div class="dispatch-date">
                      <p class="date">Date: <span>21/12/2020</span></p>
                    </div>
                  </div>
                </div>
                <div class="submit-section">
                  <div class="submit-section-inner">
                    <button>Dispatch Now</button>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";

export default {
  components: {
    Heading,
  },
  data() {
    return {
      routeName: "Dispatch Entry",
      parentPath: "SD",
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "SD" }, { name: "Dispatch Entry" }];
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DispatchEntry.less");
</style>