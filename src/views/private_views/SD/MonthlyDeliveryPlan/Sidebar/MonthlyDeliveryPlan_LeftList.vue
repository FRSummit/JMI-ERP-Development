<template>
  <div
    id="monthly-delivery-plan-left-list"
    class="monthly-delivery-plan-left-list"
  >
    <div class="monthly-delivery-plan-list-section">
      <div class="monthly-delivery-plan-list-section-inner">
        <div class="search-section">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              class="form-control"
              placeholder="Search by Name, ID No"
            />
          </div>
          <i class="fas fa-filter"></i>
        </div>
        <div class="month-selection-section">
          <div class="month-selection-section-inner">
            <!-- <div class="select-option-label">
              <p class="month-selection-label">Select Month</p>
            </div> -->
            <div class="select-options">
              <span class="right-icon"
                ><i class="fas fa-chevron-right"></i
              ></span>
              <!-- <span class="down-icon"><i class="fas fa-chevron-down"></i></span> -->
              <select
                title="Pick a date"
                class="selectpicker" v-model="selectedMonth" @change="onChange()"
              >
                <option v-for="(month, m) in months" :key="m">
                  {{ month.month }}
                </option>
              </select>
            </div>
            <div class="copy-delete-btn-section">
              <span class="copy-btn" @click="copyMonthData" v-if="all_available_or_occupied_copy"><img src="../../../../../assets/images/copy.png" alt=""></span>
              <span class="copy-btn" @click="deleteMonthData" v-if="!all_available_or_occupied_copy"><img src="../../../../../assets/images/del.png" alt=""></span>
              <!-- <span class="copy-btn" @click="copyMonthData" v-if="all_available_or_occupied_copy"><i class="fas fa-copy"></i></span> -->
              <!-- <span class="delete-btn" @click="deleteMonthData" v-if="!all_available_or_occupied_copy"><i class="fas fa-trash-alt"></i></span> -->
            </div>
          </div>
        </div>
        <div class="monthly-list-section">
          <div class="monthly-list-section-inner">

            <div id="monthly-plan-list-progressbar" class="monthly-plan-list-progressbar" v-if="!leftside_da_list.length">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <div
              :id="'monthly-delivery-plan-section-list-' + p"
              class="monthly-delivery-plan-section-list"
              v-for="(plan, p) in leftside_da_list"
              :key="p"
              @click="selectLeftUserSchedule(plan, p)"
            >
              <div :id="'monthly-delivery-plan-section-list-inner-' + p" class="monthly-delivery-plan-section-list-inner">
                <div class="name-status-section">
                  <div class="name-section">
                    <p class="name-text">{{ plan.name }}</p>
                  </div>
                </div>
                <div class="contact-number-section">
                  <p class="contact-number">{{ plan.person_info.phone }}</p>
                </div>
                <div class="territory-text-section">
                  <!-- <p class="territory-text">{{ plan.territory_name }}</p> -->
                  <!-- <p class="territory-text">{{ plan.territory_name ? plan.territory_name : "Territory Name 1, Territory Name 2" }}</p> -->
                  <p :id="'territory-text-' + p" class="territory-text">Total Territory: <span class="counter">{{ plan.total_territory ? plan.total_territory : 0 }}</span></p>
                  <!-- <p class="territory-text">{{ "Territory Name 1, Territory Name 2" }}</p> -->
                  
                  <div :id="'status-section-' + p" class="status-section">
                    <span class="status-color" :class="plan.status"></span>
                    <p class="status-text" :class="plan.status">
                      {{ plan.status }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert section -->
    <div class="confirmation-alert-popup" v-if="destroy_popup_month">
      <div class="confirmation-alert-popup-inner">
        <span class="popup-icon"><i class="fas fa-trash-alt"></i></span>
        <p class="alert-text">Are you sure?</p>
        <p class="alert-desc">You wan to delete the plan.</p>
        <span class="divider"></span>
        <div class="confirmation-submit-section">
          <div class="confirm-btn-section">
            <span @click="cancelFromPopup">Cancel</span>
          </div>
          <div class="cancel-btn-section">
            <span @click="confirmFromPopup">Delete</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Copy Modal -->
    <div class="copy-modal" v-if="copy_modal_month">
      <div class="add-territory-modal" v-click-outside="copyModalSectionOutsideClick">
        <div class="add-territory-modal-inner">
          <p class="title">Select Territory</p>
          <!-- <span class="close-icon" @click="closeTerritoryCopyModal">
            <i class="fas fa-times"></i>
            <span class="tool-tip">Close Modal</span>
          </span> -->
          <div class="search-territory">
            <div class="search-territory-inner">
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search by Name, ID No"/>
              </div>
            </div>
          </div>
          <div class="territory-list">
            <div class="territory-list-inner">
              <p class="territory-name" v-for="(t, i) in previous_months_list_to_copy" :key="i" @click="monthClickToCopy(t)">
                <span>{{ t.date }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
  props: ["leftside_da_list", "all_available_or_occupied_copy"],
  data() {
    return {
      months: [],
      selectedMonth: null,
      destroy_popup_month: false,
      copy_modal_month: false,
      previous_months_list_to_copy: []
    };
  },
  created() {
      this.monthSelectionDropdownCreate()
    //   this.selectedMonth = this.months[0].month
  },
  mounted() {
    this.selectedMonth = this.months[0].month
    // document.querySelector('#monthly-delivery-plan-left-list .selectpicker option').attributes('selected', true)
    // let defaultSelectedItem = document.querySelector('#monthly-delivery-plan-left-list .selectpicker')
    // console.log(defaultSelectedItem.options[0])
    // defaultSelectedItem.options[0].setAttribute('selected', true)
  },
  methods: {
    onChange() {
        // console.log(this.selectedMonth)
        this.$emit("selected_month", this.selectedMonth);
    },
    selectLeftUserSchedule(plan, selector_id) {
      // console.log(document.getElementsByClassName('monthly-delivery-plan-section-list').length)
      let length = document.getElementsByClassName('monthly-delivery-plan-section-list').length
      for(let i=0; i<length; i++) {
        document.querySelector('#monthly-delivery-plan-section-list-' + i).className = 'monthly-delivery-plan-section-list'
      }
      if(document.querySelector('#monthly-delivery-plan-section-list-' + selector_id).className === 'monthly-delivery-plan-section-list') {
        // console.log('not active')
        document.querySelector('#monthly-delivery-plan-section-list-' + selector_id).className = 'monthly-delivery-plan-section-list active'
      } else {
        // console.log('active')
        document.querySelector('#monthly-delivery-plan-section-list-' + selector_id).className = 'monthly-delivery-plan-section-list'
      }
      this.$emit("selected_user_schedule_plan", plan, this.selectedMonth, selector_id);
    },
    monthSelectionDropdownCreate() {
        let currentYear = new Date().getFullYear()
        let currentMonth = new Date().getMonth() + 1
        for(let i=0; i<6; i++) {
            let m = {}
            if(this.getMonthName(currentYear + "-" + (currentMonth + i) + "-18") !== undefined) {
                m.month = this.getMonthName(currentYear + "-" + (currentMonth + i) + "-18") + " 2021"
            } else {
                m.month = this.getMonthName((currentYear + 1) + "-" + (currentMonth + i - 12) + "-18") + " 2022"
            }
            this.months.push(m)
        }
        // console.log(this.months)
    },
    getMonthName(month) {
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      var monthInt = new Date(month).getMonth();
      return months[monthInt];
    },
    getMonthsNumberFromMonthName(monthName) {
      let n = null;
      switch (monthName) {
        case "January":
          n = 1;
          break;
        case "February":
          n = 2;
          break;
        case "March":
          n = 3;
          break;
        case "April":
          n = 4;
          break;
        case "May":
          n = 5;
          break;
        case "June":
          n = 6;
          break;
        case "July":
          n = 7;
          break;
        case "August":
          n = 8;
          break;
        case "September":
          n = 9;
          break;
        case "October":
          n = 10;
          break;
        case "November":
          n = 11;
          break;
        case "December":
          n = 12;
          break;
        default:
          break;
      }
      return n;
    },
    copyMonthData() {
      if(this.copy_modal_month) {
        this.copy_modal_month = false
      } else {
        this.copy_modal_month = true
        let selectedMM = (this.getMonthsNumberFromMonthName(this.selectedMonth.split(' ')[0])) < 10 ? ('0' + this.getMonthsNumberFromMonthName(this.selectedMonth.split(' ')[0])) : (this.getMonthsNumberFromMonthName(this.selectedMonth.split(' ')[0])).toString()
        let selectedYYYY = this.selectedMonth.split(' ')[1].toString()
        let selectedMMYYYY = (selectedMM + selectedYYYY).toString()
        this.LOAD_MONTH_FOR_COPY_WHOLE_MONTH_DATA(selectedMMYYYY)
      }
    },
    copyModalSectionOutsideClick() {
      this.copy_modal_month = false
    },
    deleteMonthData() {
      if(this.destroy_popup_month) {
        this.destroy_popup_month = false
      } else {
        this.destroy_popup_month = true
      }
    },
    cancelFromPopup() {
      this.destroy_popup_month = false
    },
    confirmFromPopup() {
      // console.log(this.selectedMonth)
      let selectedMM = (this.getMonthsNumberFromMonthName(this.selectedMonth.split(' ')[0])) < 10 ? ('0' + this.getMonthsNumberFromMonthName(this.selectedMonth.split(' ')[0])) : (this.getMonthsNumberFromMonthName(this.selectedMonth.split(' ')[0])).toString()
      let selectedYYYY = this.selectedMonth.split(' ')[1].toString()
      let selectedMMYYYY = (selectedMM + selectedYYYY).toString()
      // console.log('confirm : ' + selectedMMYYYY)
      this.$emit("delete_this_month_data", selectedMMYYYY);
    },
    async LOAD_MONTH_FOR_COPY_WHOLE_MONTH_DATA(selectedMMYYYY) {
      console.log(selectedMMYYYY)
      service.getSD_DPD_PreviousMonthByDP_Mnyr(selectedMMYYYY)
        .then(res => {
          console.log(res.data)
          this.previous_months_list_to_copy = res.data.data
          if(!this.previous_months_list_to_copy.length) {
            setTimeout(() => {
              this.copy_modal_month = false
            }, 2000)
          }
        })
    },
    monthClickToCopy(t) {
      // console.log(this.getMonthsNumberFromMonthName(t.date))
      let selectedMM = (this.getMonthsNumberFromMonthName(this.selectedMonth.split(' ')[0])) < 10 ? ('0' + this.getMonthsNumberFromMonthName(this.selectedMonth.split(' ')[0])) : (this.getMonthsNumberFromMonthName(this.selectedMonth.split(' ')[0])).toString()
      let selectedYYYY = this.selectedMonth.split(' ')[1].toString()
      let selectedMMYYYY = (selectedMM + selectedYYYY).toString()
      // console.log(t.date)
      // console.log(selectedMMYYYY)
      // console.log(t.dp_mnyr)
      service.getSD_DPD_COPY_EXECUTE_PROCEDURE(t.dp_mnyr, selectedMMYYYY)
        .then(res => {
          console.log(res.data)
          if(res.data.response_code === 200) {
            window.location.reload()
          }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./MonthlyDeliveryPlan_LeftList.less");
</style>