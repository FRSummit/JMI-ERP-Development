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
                <div class="all-btn-section">
                  <span
                    class="all-btn-inner"
                    @click="selectAllDayFromCalendar(territoryData)"
                  >
                    <i class="zmdi zmdi-check-all" :class="ALL_DAY_IS_SELECTED ? 'selected' : ''"></i>
                    <span class="tool-tip">{{ ALL_DAY_IS_SELECTED ? "Deselect All" : "Select All" }}</span>
                  </span>
                </div>
                <div class="copy-btn-section">
                  <span
                    class="copy-btn-inner"
                    @click="copyTerritoryCalendar(territoryData)"
                  >
                    <!-- <i class="fas fa-copy"></i> -->
                    <i class="zmdi zmdi-copy"></i>
                    <span class="tool-tip">Copy Plan</span>
                  </span>
                </div>
                <div class="add-btn-section">
                  <span
                    class="add-btn-inner"
                    @click="removeTerritoryCalendar(territoryData)"
                  >
                    <!-- <i class="fas fa-trash-alt"></i> -->
                    <i class="zmdi zmdi-delete"></i>
                    <span class="tool-tip">Delete Plan</span>
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
              v-on:selected_date_from_calendar="getSelectedDateFromChildComponentCalendar"
              :create_ok="create_ok"
              v-on:selected_date_from_calendar_destroy="getSelectedDateFromChildComponentCalendarToDestroy"
              :destroy_ok="destroy_ok"
              :DELIVERY_PLAN_DATE="DELIVERY_PLAN_DATE"
              :ALL_DAY_SELECTED="ALL_DAY_SELECTED"
              v-on:ALL_DAY_IS_SELECTED="checkAllDayIsSelected"
              v-on:FULL_MONTH_SELECTED="fullMonthSelectedHandler"
              v-on:FULL_MONTH_DESELECTED="fullMonthDeselectedHandler"
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
  props: ["selectedDate", "territoryData", "create_ok", "destroy_ok", "DELIVERY_PLAN_DATE"],
  components: {
    TheCalendar,
  },
  data() {
    return {
      // hideCalendarRightSection: null
      ALL_DAY_SELECTED: false,
      ALL_DAY_IS_SELECTED: null,
    };
  },
  created() {
  },
  mounted() {
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
    selectAllDayFromCalendar(territoryName) {
      console.log(territoryName)
      if(this.ALL_DAY_SELECTED) {
        this.ALL_DAY_SELECTED = false
      } else {
        this.ALL_DAY_SELECTED = true
      }
    },
    copyTerritoryCalendar(territoryName) {
      this.$emit("copy_territory_calendar", territoryName);
    },
    removeTerritoryCalendar(territoryName) {
      this.$emit("remove_territory_calendar", territoryName);
    },
    checkAllDayIsSelected(value) {
      this.ALL_DAY_IS_SELECTED = value
    },
    fullMonthSelectedHandler(date_list) {
      this.$emit('FULL_MONTH_SELECTED', this.territoryData, date_list)
    },
    fullMonthDeselectedHandler() {
      this.$emit('FULL_MONTH_DESELECTED')
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./PlanCalendar.less");
</style>