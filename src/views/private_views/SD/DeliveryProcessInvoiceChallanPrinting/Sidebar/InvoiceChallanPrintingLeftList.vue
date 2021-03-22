<template>
  <div id="invoice-challan-printing-left-list" class="invoice-challan-printing-left-list">
    <div class="invoice-challan-printing-list-section">
      <div class="invoice-challan-printing-list-section-inner">
        <!-- <div class="month-selection-section">
          <div class="month-selection-section-inner">
            <div class="select-option-label">
              <p class="month-selection-label">Status:</p>
            </div>
            <div class="select-options">
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
        </div> -->
          <!-- Search & Filter section -->
        <div id="jmi-search-section" class="jmi-search-section">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              class="form-control"
              id="search-filter"
              placeholder="Search by ID No"
              v-on:keyup="searchKeyUpHandler"
            />
          </div>
        </div>
        <div class="location-title">
          <div class="location-title-inner">
            <p>DS Invoice List (<span>{{ INVOICE_LIST.length }}</span>)</p>
          </div>
        </div>
        <div class="location-list-section">
          <div class="location-list-section-inner">
            <div
              :id="'invoice-challan-printing-section-list-' + p"
              class="invoice-challan-printing-section-list"
              v-for="(invoice, p) in INVOICE_LIST"
              :key="p"
              @click="invoiceClickHandler(invoice, p)"
            >
              <div class="invoice-challan-printing-section-list-inner">
                <div class="name-status-section">
                  <div class="name-section">
                    <p class="name-text">DS{{ invoice.id }}</p>
                  </div>
                  <div class="status-section">
                    <p class="status-text">
                      {{ (invoice.schedule_date).split(' ')[0] }}
                    </p>
                  </div>
                </div>
                <div class="contact-number-section">
                  <p class="contact-number jmi-txt-nowrap-ellipsis-middle_60">{{ invoice.da_info.name }}</p>
                  <p class="status"><span class="status-icon"></span>Initial Phase</p>
                </div>
                <!-- <div class="territory-text-section">
                  <p class="territory-text">{{ invoice }}</p>
                </div> -->
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
// import DatePicker from 'vue2-datepicker'
import JMIFilter from '../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
  components: {
    // HotelDatePicker,
    // DatePicker
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
      // date: '',
      // time: '',
      // timePickerOptions: {
      //   start: '00:00',
      //   step: '00:30',
      //   end: '23:30'
      // },
      // datetime: '',
      // range: ''
      INVOICE_LIST: []
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
  async mounted() {
    await this.DELIVERY_SCHEDULE_LIST__FROM_SERVICE()
  },
  methods: {
    onChange() {
      console.log(this.selectedDA);
    },
    invoiceClickHandler(invoice, index) {
            let length = document.getElementsByClassName('invoice-challan-printing-section-list').length
            for(let i=0; i<length; i++) {
                document.querySelector('#invoice-challan-printing-section-list-' + i).className = 'invoice-challan-printing-section-list'
            }
            if(document.querySelector('#invoice-challan-printing-section-list-' + index).className === 'invoice-challan-printing-section-list') {
                document.querySelector('#invoice-challan-printing-section-list-' + index).className = 'invoice-challan-printing-section-list active'
            } else {
                document.querySelector('#invoice-challan-printing-section-list-' + index).className = 'invoice-challan-printing-section-list'
            }
      this.$emit('invoice_id_from_left', invoice.id)
    },
    searchKeyUpHandler(value) {
      console.log(value.key)
      let input = document.getElementById("search-filter");
      let filter = input.value.toUpperCase();
      let list = document.querySelectorAll('.invoice-challan-printing-section-list')
      let txt_selector = "name-text"

      jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
    },
    // --------------------------------------------------------------------------------------
    // Service CALL
    async DELIVERY_SCHEDULE_LIST__FROM_SERVICE() {
      service.getDeliveryScheduleList_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING()
        .then(res => {
          console.log(res.data)
          this.INVOICE_LIST = res.data.schedule_list
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./InvoiceChallanPrintingLeftList.less");
</style>