<template>
  <div id="delivery-packing-preparation-left-list" class="delivery-packing-preparation-left-list">
    <div class="delivery-packing-preparation-list-section">
      <div class="delivery-packing-preparation-list-section-inner">
        <div class="month-selection-section">
          <div class="month-selection-section-inner">
            <div class="select-option-label">
              <p class="month-selection-label">Status:</p>
            </div>
            <div class="select-options">
              <!-- <span class="right-icon"><i class="fas fa-chevron-right"></i></span> -->
              <span class="down-icon"><i class="fas fa-chevron-down"></i></span>
              <select
                title="Pick a DA"
                class="selectpicker"
                v-model="selectedDA"
                @change="onChange()"
              >
                <option v-for="(da, m) in DSI_list" :key="m">
                  {{ da.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="date-range">
          <div class="date-range-inner">
            <p>
              <span>Date Range</span>
              <date-picker v-model="range" lang="en" range type="date" format="YYYY-MM-DD" width="500"></date-picker>
            </p>
          </div>
        </div>
        <div class="location-title">
          <div class="location-title-inner">
            <p>Delivery Schedule List (<span>60</span>)</p>
          </div>
        </div>
        <div class="location-list-section">
          <div class="location-list-section-inner">
            <div
              class="delivery-packing-preparation-section-list"
              v-for="(location, p) in locations_details_list"
              :key="p"
            >
              <div class="delivery-packing-preparation-section-list-inner">
                <div class="name-status-section">
                  <div class="name-section">
                    <p class="name-text">{{ location.position }}</p>
                  </div>
                  <div class="status-section">
                    <p class="status-text">
                      {{ location.date }}
                    </p>
                  </div>
                </div>
                <div class="contact-number-section">
                  <p class="contact-number">{{ location.location_name }}</p>
                  <p class="status"><span class="status-icon"></span>Initial Phase</p>
                </div>
                <div class="territory-text-section">
                  <p class="territory-text">{{ location.territory }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../../../../service/ERPSidebarService";
const service = new Service();
// import HotelDatePicker from 'vue-hotel-datepicker'
import DatePicker from 'vue2-datepicker'

export default {
  components: {
    // HotelDatePicker,
    DatePicker
  },
  data() {
    return {
      selectedDA: null,
      DSI_list: [
        {

        }
      ],
      locations_details_list: [],
      // minNights: 2,
      // maxNights: 30,
      // disabledDaysOfWeek: ['Sunday'],
      // showCloseButton: true
      date: '',
      time: '',
      timePickerOptions: {
        start: '00:00',
        step: '00:30',
        end: '23:30'
      },
      datetime: '',
      range: ''
    };
  },
  created() {
    service.getDAlistForDeliverySchedule().then((res) => {
      this.DSI_list = res.data;
    });

    service.getInvoiceChallanListForDeliverySchedule().then((res) => {
      this.locations_details_list = res.data;
    });
  },
  mounted() {},
  methods: {
    onChange() {
      console.log(this.selectedDA);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DeliveryPackingPreparationLeftList.less");
</style>