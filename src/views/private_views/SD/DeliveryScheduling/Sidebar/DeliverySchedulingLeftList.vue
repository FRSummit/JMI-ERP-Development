<template>
  <div id="delivery-scheduling-left-list" class="delivery-scheduling-left-list">
    <div class="delivery-scheduling-list-section">
      <div class="delivery-scheduling-list-section-inner">
        <div class="month-selection-section">
          <div class="month-selection-section-inner">
            <div class="select-option-label">
              <p class="month-selection-label">SR:</p>
            </div>
            <div class="select-options">
              <span class="right-icon"
                ><i class="fas fa-chevron-right"></i
              ></span>
              <!-- <span class="down-icon"><i class="fas fa-chevron-down"></i></span> -->
              <select
                title="Pick a DA"
                class="selectpicker"
                v-model="selectedDA"
                @change="onChange()"
              >
                <option v-for="(da, m) in DA_list" :key="m">
                  {{ da.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="date-range">
          <div class="date-range-inner">
            <p>
              <span>Date</span>
              <date-picker class="jmi-single-date" v-model="date_data" lang="en" type="date" format="YYYY-MM-DD" width="500" @change="dateChangeHandler"></date-picker>
            </p>
          </div>
        </div>
        <!-- <div class="date-range" v-if="selectedDA">
          <div class="date-range-inner">
            <p>
              <span>Date Range</span>
              <date-picker v-model="range" lang="en" range type="date" format="YYYY-MM-DD" width="500" @change="dateRangeChange"></date-picker>
            </p>
          </div>
        </div>
        <div class="date-range" v-if="!selectedDA">
          <div class="date-range-inner">
            <p style="text-align: center;">
              <span style="font-size: 16px; font-weight: 600;">Select SR</span>
            </p>
          </div>
        </div> -->
        <div class="location-title">
        <!-- <div class="location-title" :style="selectedDA === null ? 'margin-top: 45px;' : 'margin-top: 0px;'"> -->
          <div class="location-title-inner">
            <p>Invoice/Challan List (<span>{{ PENDING_DELIVERY_SCHEDULE_INV_LIST.length }}</span>)</p>
          </div>
        </div>
        <div class="location-list-section">
          <div class="location-list-section-inner">
            <div id="progressbar" class="jmi-progressbar" v-if="!PENDING_DELIVERY_SCHEDULE_INV_LIST.length" style="text-align: center; margin: 40px 0; color: #026cd1;">
              <v-progress-circular indeterminate color="primary" v-if="progressbarTimeOut()"></v-progress-circular>
              <p v-if="!progressbarTimeOut()">No Schedule Found</p>
            </div>
            <!-- <draggable
              class="dragArea unpublished"
              v-model='locations_details_list'
              :options="{ group: { name: 'g1', put: 'g1'}, animation: 120 }" 
              @change="onUnpublishedChange"
              @end="onEnd"
            > -->
            <draggable
              class="dragArea unpublished"
              :options="{ group: { name: 'g1', put: 'g1'}, animation: 120 }"
                v-for="(invoice, p) in PENDING_DELIVERY_SCHEDULE_INV_LIST"
                :key="p"
              @end="onEnd(invoice, p)"
            >
              <div class="delivery-scheduling-section-list" @click="singleInvoiceClickHandler(invoice)">
                <div class="delivery-scheduling-section-list-inner">
                  <div class="name-status-section">
                    <div class="name-section">
                      <p class="name-text">{{ invoice.invoice_no }}</p>
                    </div>
                    <div class="status-section">
                      <p class="status-text">
                        {{ (invoice.invoice_date).split(' ')[0] }}
                      </p>
                    </div>
                  </div>
                  <div class="contact-number-section">
                    <p class="contact-number">{{ invoice.sbu_customer_info ? (invoice.sbu_customer_info.display_name ? (invoice.sbu_customer_info.display_name) : '') : '' }}</p>
                  </div>
                  <div class="territory-text-section">
                    <p class="territory-text">{{ invoice.sbu_customer_info ? (invoice.sbu_customer_info.customer_info ? (invoice.sbu_customer_info.customer_info.customer_address ? (invoice.sbu_customer_info.customer_info.customer_address) : '') : '') : '' }}</p>
                  </div>
                </div>
              </div>
            </draggable>
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
import Draggable from 'vuedraggable';

export default {
  components: {
    // HotelDatePicker,
    DatePicker,
    Draggable
  },
  data() {
    return {
      selectedDA: null,
      DA_list: [],
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
      range: '',
      date_data: '',
      exampleList: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5'
      ],
      PENDING_DELIVERY_SCHEDULE_INV_LIST: [],
      progressbar_time_out: true,
    };
  },
  created() {
    // service.getDAlistForDeliverySchedule().then((res) => {
    //   this.DA_list = res.data;
    // });

    service.getInvoiceChallanListForDeliverySchedule().then((res) => {
      this.locations_details_list = res.data;
    });
  },
  async mounted() {
    await this.DIC_WISE_USERS__FROM_SERVICE()
    await this.PENDING_DELIVERY_SCHEDULE_DELIVERY_LIST__FROM_SERVICE()
  },
  methods: {
    async onChange() {
      let da_id = null
      console.log(this.selectedDA);
      if(this.selectedDA !== null) {
        for(let i=0; i<this.DA_list.length; i++) {
          if(this.selectedDA === this.DA_list[i].name) {
            da_id = this.DA_list[i].id
          }
        }
      }
      await this.PENDING_DELIVERY_SCHEDULE_INVOICE_LIST_BY_DA_ID__FROM_SERVICE(da_id)
      this.$emit('SELECTED_DA_ID', da_id)
    },
    progressbarTimeOut() {
      setTimeout( ()=> {
        console.log('progressbar_time_out')
      }, 2000)
    },
    // onUnpublishedChange({ added }) {
    //   console.log('Working 1')
    //   console.log(added)
    //   if (added) {
    //     added.element.status= false // Not published
    //   }
    // },
    onEnd(location, index) {
      console.log('working 2 : ' + location + '    ' + index)
    },
    async dateChangeHandler() {
      // let da_id = null

      let selected_dt = this.date_data.toString().split(' ')[2] + '-' + this.date_data.toString().split(' ')[1] + '-' + this.date_data.toString().split(' ')[3]
      this.$emit("SELECTED_DATE", selected_dt)
      // if(this.selectedDA !== null) {
      //   for(let i=0; i<this.DA_list.length; i++) {
      //     if(this.selectedDA === this.DA_list[i].name) {
      //       da_id = this.DA_list[i].id
      //     }
      //   }

      //   await this.CREATE_DELIVERY_SCHEDULE_INVOICE_LIST_BY_DA(da_id, selected_dt)
      // } else {
      //   alert('Select a SR')
      //   this.date_data = ''
      // }
    },
    async dateRangeChange() {
      let da_id = null
      let from_date = null
      let to_date = null
      console.log(this.range)
      if(this.range[0] !== null) {
        from_date = (this.range[0]).toString().split(' ')[2] + '-' + (this.range[0]).toString().split(' ')[1] + '-' + (this.range[0]).toString().split(' ')[3]
        to_date = (this.range[1]).toString().split(' ')[2] + '-' + (this.range[1]).toString().split(' ')[1] + '-' + (this.range[1]).toString().split(' ')[3]
      }
      console.log(from_date + '    ' + to_date)

      for(let i=0; i<this.DA_list.length; i++) {
        if(this.selectedDA === this.DA_list[i].name) {
          da_id = this.DA_list[i].id
        }
      }
      await this.PENDING_DELIVERY_SCHEDULE_INVOICE_LIST_BY_DA(da_id, from_date, to_date)
    },
    // SIngle Invoice Click Handler
    singleInvoiceClickHandler(invoice) {
      console.log(invoice)
    },
    // -------------------------------------------------------------------------------------
    // SERVICE CALLING
    async DIC_WISE_USERS__FROM_SERVICE() {
      this.DA_list = []
      await service.getDICWiseUsers_MonthlyDeliveryPlan()
        .then(res => {
          console.log(res.data)
          this.DA_list = res.data.users.da
        })
        .catch(err => {
          if(err) {
            console.log(err)
            this.DA_list = []
          }
        })
    },
    async PENDING_DELIVERY_SCHEDULE_DELIVERY_LIST__FROM_SERVICE() {
      this.PENDING_DELIVERY_SCHEDULE_INV_LIST = []
      await service.getPendingDeliveryAllScheduleInvoiceList_DELIVERY_SCHEDULING()
        .then(res => {
          console.log(res.data)
          this.PENDING_DELIVERY_SCHEDULE_INV_LIST = res.data.invoice_info
          this.$emit('pending_delivery_schedule_inv_list', res.data.invoice_info)
        })
        .catch(err => {
          if(err) {
            console.log(err)
            this.PENDING_DELIVERY_SCHEDULE_INV_LIST = []
          }
        })
    },
    async PENDING_DELIVERY_SCHEDULE_INVOICE_LIST_BY_DA_ID__FROM_SERVICE(da_id) {
      this.PENDING_DELIVERY_SCHEDULE_INV_LIST = []
      await service.getPendingDeliveryScheduleInvoiceLBy_DA_ID_DELIVERY_SCHEDULING(da_id)
        .then(res => {
          console.log(res.data.invoice_info)
          if(res.data ? res.data.invoice_info.length : false) {
            console.log('I am here')
            this.PENDING_DELIVERY_SCHEDULE_INV_LIST = res.data.invoice_info
          } else {
            console.log('else')
          }
          this.$emit('pending_delivery_schedule_inv_list', res.data.invoice_info)
        })
        .catch(err => {
          if(err) {
            console.log(err)
            this.PENDING_DELIVERY_SCHEDULE_INV_LIST = []
          }
        })
    },
    async PENDING_DELIVERY_SCHEDULE_INVOICE_LIST_BY_DA(da_id, from_date, to_date) {
      this.PENDING_DELIVERY_SCHEDULE_INV_LIST = []
      await service.getPendingDeliveryScheduleInvoiceLBy_DA_DELIVERY_SCHEDULING(da_id, from_date, to_date)
        .then(res => {
          console.log(res.data)
          this.PENDING_DELIVERY_SCHEDULE_INV_LIST = res.data.invoice_info
          this.$emit('pending_delivery_schedule_inv_list', res.data.invoice_info)
        })
        .catch(err => {
          if(err) {
            console.log(err)
            this.PENDING_DELIVERY_SCHEDULE_INV_LIST = []
          }
        })
    }
  },
  computed: {
    // locations_details_list: {
    //   get() {
    //     return this.$store.state.locations_details_list
    //   },

    //   set(val) {
    //     this.$store.commit('setExampleList', val)
    //   }
    // }
  }
};
</script>

<style lang="less" scoped>
@import url("./DeliverySchedulingLeftList.less");
</style>