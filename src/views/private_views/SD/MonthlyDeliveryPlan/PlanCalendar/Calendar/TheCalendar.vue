<template>
  <div id="the-calendar" class="the-calendar">
    <div class="the-calendar-inner">
      <div class="calendar" v-for="(day, d) in selectedDate" :key="d">
        <div class="days-section">
          <div class="days-section-inner">
            <span :class="day.day === 'F' ? 'friday' : null">{{ day.day }}</span>
          </div>
        </div>
        <div :class="dateIsOld(d + 1)">
          <div
            :id="territoryData.area_id + '-dates-section-' + (d + 1)"
            class="dates-section"
            @click="dateIsOld(d + 1) === 'OLD_DAY' ? false : sendDateFromCalendarToParentComponent(d + 1)"
            :class="check(d + 1) ? 'DA-DATA' : null"
          >
            <div class="dates-section-inner">
              <span>{{ d + 1 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedDate", "territoryData", "create_ok", "destroy_ok", "DELIVERY_PLAN_DATE", "ALL_DAY_SELECTED"],
  components: {},
  data() {
    return {
      days: ["S", "M", "T", "W", "T", "F", "S"],
      d: [],
      my_dates: [],
      count: 0,
      selected: true,

      DATE_LIST: [],
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
    dateIsOld(d) {
      let cls = ''
      let to_day = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString()
      // console.log(new Date(to_day).getTime())
      // console.log(new Date(this.DELIVERY_PLAN_DATE).getTime())
      if( (new Date(to_day).getTime() > new Date(this.DELIVERY_PLAN_DATE).getTime())) {
        cls = 'OLD_DAY'
      } else {
        if(parseInt(d) < new Date().getDate()) {
          cls = 'OLD_DAY'
        } else {
          cls = ''
        }

      }
      return cls
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
  watch: {
    ALL_DAY_SELECTED(newVal) {
      console.log(newVal)
      let to_day = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString()
      if( !(new Date(to_day).getTime() > new Date(this.DELIVERY_PLAN_DATE).getTime())) {
        this.$emit('ALL_DAY_IS_SELECTED', newVal)
        if(newVal === true) {
          for(let i=0; i<this.selectedDate.length; i++) {
            let tt = this.territoryData.area_id + '-dates-section-' + (i + 1)
            let selector = document.getElementById(tt)
            selector.className = 'dates-section DA-DATA'

            let date = {
              date: (i + 1) + ' ' + this.DELIVERY_PLAN_DATE
            }
            this.DATE_LIST.push(date)
          }
          this.$emit('FULL_MONTH_SELECTED', this.DATE_LIST)
        } else {
          for(let i=0; i<this.selectedDate.length; i++) {
            let tt = this.territoryData.area_id + '-dates-section-' + (i + 1)
            let selector = document.getElementById(tt)
            selector.className = 'dates-section'
          }
          this.$emit('FULL_MONTH_DESELECTED')
        }
      }
    },
  }
};
</script>

<style lang="less" scoped>
@import url("./TheCalendar.less");

.OLD_DAY .dates-section {
  background: #dedede !important;
  color: #000000;
}
.OLD_DAY .dates-section.DA-DATA {
  background: #026dd14d !important;
}
.OLD_DAY .dates-section-inner span {
  color: #000000 !important;
}
</style>