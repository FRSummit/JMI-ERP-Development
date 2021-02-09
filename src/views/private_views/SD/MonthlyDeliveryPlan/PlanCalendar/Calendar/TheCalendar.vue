<template>
  <div id="the-calendar" class="the-calendar">
    <div class="the-calendar-inner">
      <div class="calendar" v-for="(day, d) in selectedDate" :key="d">
        <div class="days-section">
          <div class="days-section-inner">
            <span :class="day.day === 'F' ? 'friday' : null">{{ day.day }}</span>
          </div>
        </div>
        <div
          :id="territoryData.area_id + '-dates-section-' + (d + 1)"
          class="dates-section"
          @click="sendDateFromCalendarToParentComponent(d + 1)"
          :class="check(d + 1) ? 'DA-DATA' : null"
        >
          <div class="dates-section-inner">
            <span>{{ d + 1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedDate", "territoryData", "create_ok", "destroy_ok"],
  components: {},
  data() {
    return {
      days: ["S", "M", "T", "W", "T", "F", "S"],
      d: [],
      my_dates: [],
      count: 0,
      selected: true
    };
  },
  created() {
    for(let i=0; i < this.selectedDate.length; i++) {
      
      this.my_dates.push({date: i+1 < 10 ? ('0' + (i+1)) : (i+1).toString()})
    }
  },
  methods: {
    getDayNameFromYYYYMMDD(myDate) {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      var dayInt = new Date(myDate).getDay();
      return days[dayInt].charAt(0);
    },
    async sendDateFromCalendarToParentComponent(date) {
      if(document.getElementById(this.territoryData.area_id + "-dates-section-" + date).className === "dates-section") {
        await this.$emit("selected_date_from_calendar", date)
          document.getElementById(this.territoryData.area_id + "-dates-section-" + date).className = "dates-section DA-DATA"
      } else {
        await this.$emit("selected_date_from_calendar_destroy", date)
          document.getElementById(this.territoryData.area_id + "-dates-section-" + date).className = "dates-section"
      }
    },
    check(d) {
      let day = d < 10 ? ('0' + (d)) : (d).toString()
      if(this.territoryData.get_days) {
        for(let i=0; i<this.territoryData.get_days.length; i++) {
          if(this.territoryData.get_days[i].delivery_date.split(' ')[0].split('-')[2] === day) {
            return true
          }
        }
      }
      return false
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./TheCalendar.less");
</style>