<template>
  <div id="plan-calendar" class="plan-calendar">
    <div class="plan-calendar-section">
      <div class="plan-calendar-inner-section">
        <div class="plan-calendar-top-row">
          <div class="plan-calendar-top-row-inner">
            <div class="left-section">
              <div class="left-section-inner">
                <div class="default-text">
                  <span>Territory:</span>
                </div>
                <div class="territory-name">
                  <span>{{ territoryData.area_info.area_name }}</span>
                </div>
              </div>
            </div>
            <div class="right-section">
              <div class="right-section-inner">
                <div class="copy-btn-section">
                  <span
                    class="copy-btn-inner"
                    @click="copyTerritoryCalendar(territoryData)"
                  >
                    <i class="fas fa-copy"></i>
                    <span class="tool-tip">Copy Plan</span>
                  </span>
                </div>
                <div class="add-btn-section">
                  <span
                    class="add-btn-inner"
                    @click="removeTerritoryCalendar(territoryData)"
                  >
                    <i class="fas fa-trash-alt"></i>
                    <!-- <span class="tool-tip">Delete Plan</span> -->
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="plan-calendar-row">
          <div class="plan-calendar-row-inner">
            <TheCalendar
              :selectedDate="selectedDate"
              :territoryData="territoryData"
              v-on:selected_date_from_calendar="
                getSelectedDateFromChildComponentCalendar
              "
              :create_ok="create_ok"
              v-on:selected_date_from_calendar_destroy="
                getSelectedDateFromChildComponentCalendarToDestroy
              "
              :destroy_ok="destroy_ok"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheCalendar from "./Calendar/TheCalendar";

export default {
  props: ["selectedDate", "territoryData", "create_ok", "destroy_ok"],
  components: {
    TheCalendar,
  },
  data() {
    return {
      // hideCalendarRightSection: null
    };
  },
  created() {
  },
  methods: {
    getSelectedDateFromChildComponentCalendar(date) {
      this.$emit("selected_date_from_calendar", this.territoryData, date);
    },
    getSelectedDateFromChildComponentCalendarToDestroy(date) {
      this.$emit(
        "selected_date_from_calendar_destroy",
        this.territoryData,
        date
      );
    },
    copyTerritoryCalendar(territoryName) {
      this.$emit("copy_territory_calendar", territoryName);
    },
    removeTerritoryCalendar(territoryName) {
      this.$emit("remove_territory_calendar", territoryName);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./PlanCalendar.less");
</style>