<template>
  <div id="monthly-delivery-plan" class="monthly-delivery-plan">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="monthly-delivery-plan-section">
      <div class="monthly-delivery-plan-inner">
        <MonthlyDeliveryPlanLeftList
          :leftside_da_list="DICWiseUsers_DA_List"
          :total_tt_count="territory_area_data_list.length"
          v-on:selected_month="selectedMonthFromLeft"
          v-on:selected_user_schedule_plan="selectedUserSchedulePlan"
          :all_available_or_occupied_copy="allAvailableOrOccupied_Copy"
          v-on:delete_this_month_data="deleteThisMonthData"
          v-on:RELOAD_AFTER_FULL_SET_COPY="reloadAfterFullSetCopy"
          :DELETE_THIS_MONTH_DATA_POPUP="delete_this_month_data_popup"
        />
        <div class="monthly-delivery-plan-detail-section">
          <div class="monthly-delivery-plan-detail-inner">
            <div class="monthly-delivery-plan-detail-header-section">
              <div class="monthly-delivery-plan-detail-header-section-inner">
                <div class="delivery-plan-date-section">
                  <div class="date-section">
                    <p class="date-text">
                      <span class="default-text">Delivery Plan:</span>
                      <span
                        class="date-text"
                        v-if="monthlyPlanDetailsSection"
                        >{{ selectedDateMonth }}</span
                      >
                    </p>
                  </div>
                  
                  <div class="delete-force-btn-section" v-if="!importPlanMonthsData.length && territory_area_data_list.length">
                    <span class="delete-btn" @click="deleteAllAreaOfThisForce"><i class="fas fa-trash-alt"></i></span>
                  </div>
                  <div class="select-option-box" v-if="importPlanMonthsData.length && !territory_area_data_list.length">
                    <div class="default-text">
                      <span>Import Plan From:</span>
                    </div>
                    <div class="select-options">
                      <span class="right-icon"
                        ><i class="fas fa-chevron-right"></i
                      ></span>
                      <select class="selectpicker" v-model="selectPreviousMonthToImport" @change="onSelectionImportMonthChange()">
                        <option v-for="(m, i) in importPlanMonthsData" :key="i" :value="m"><span>{{m.date}}</span></option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="da-name-contact-number-territory-details-section">
                  <div class="da-name-section">
                    <p class="da-name-text">
                      <span class="default-text">SR Name:</span>
                      <span class="da-name" v-if="monthlyPlanDetailsSection && selectedSchedule">{{ selectedSchedule.name }} ({{ selectedSchedule.id }})</span>
                    </p>
                  </div>
                  <div class="territory-details-section" v-if="selectedSchedule">
                    <p class="territory-details-text" v-if="monthlyPlanDetailsSection">
                      <span class="default-text">Territory:</span>
                      <span class="territory-details" v-if="territory_area_data_list.length">{{ territory_area_data_list[0].area_info.area_name }} <span v-if="territory_area_data_list.length > 1"><span class="more-option"><span>&amp;</span> {{ territory_area_data_list.length - 1}} more</span><span class="tool-tip" v-if="territory_area_data_list.length"><span v-for="(t, i) in territory_area_data_list" :key="i"><span v-if="i !== 0">{{t.area_info.area_name }}</span></span></span></span></span>
                      <span v-if="!territory_area_data_list.length">{{ total_territory_count }}</span>
                    </p>
                    <div class="add-btn-section" v-if="monthlyPlanDetailsSection">
                      <span class="add-btn-inner" @click="createNewTerritory">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span class="tool-tip">Add more</span>
                      <div class="add-territory-modal-section" v-if="territory_modal">
                        <div class="add-territory-modal" v-click-outside="addTerritoryModalSectionOutsideClick">
                          <div class="add-territory-modal-inner">
                            <p class="title">Select Territory</p>
                            <span class="close-icon" @click="closeTerritoryModal">
                              <i class="fas fa-times"></i>
                              <!-- <span class="tool-tip">Close Modal</span> -->
                            </span>
                            <div class="search-territory">
                              <div class="search-territory-inner">
                                <div class="form-group has-search">
                                  <span class="fa fa-search form-control-feedback"></span>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="territory-search-filter"
                                    placeholder="Search by Territory Name"
                                    v-on:keyup="searchKeyUpHandler"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="territory-list">
                              <div class="territory-list-inner">
                                <p class="territory-name" :class="checkIfTerritoryAreaDataListHasThisArea(t) ? 'hide': ''" v-for="(t, i) in all_territory_list_for_this_DA" :key="i" @click="territoryNameAddClick(t)">
                                  <span class="territory_nm">{{ t.display_code }} - {{ t.area_name }}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="monthly-delivery-plan-detail-calender-section">
              <div class="monthly-delivery-plan-detail-calender-section-inner">
                <div v-if="monthlyPlanDetailsSection">
                  <PlanCalendar
                    v-for="(territory, i) in territory_area_data_list" :key="i"
                    :selectedDate="selectedDate"
                    :territoryData="territory"
                    v-on:selected_date_from_calendar="getSelectedDateFromChildComponentCalendar"
                    :create_ok="createOK"
                    v-on:selected_date_from_calendar_destroy="getSelectedDateFromChildComponentCalendarToDestroy"
                    :destroy_ok="destroyOK"
                    v-on:remove_territory_calendar="removeTerritoryCalendar"
                    v-on:copy_territory_calendar="copyTerritoryCalendar"
                  />
                </div>
              </div>
            </div>
            <div class="monthly-delivery-plan-submit-section hide">
              <div class="monthly-delivery-plan-submit-section-inner">
                <button class="plan-submit-btn" @click="submitPlan">
                  Set Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Alert section -->
    <div class="confirmation-alert-popup" v-if="destroy_popup">
      <div class="confirmation-alert-popup-inner">
        <span class="popup-icon"><i class="fas fa-trash-alt"></i></span>
        <p class="alert-text">Are you sure?</p>
        <p class="alert-desc">You want to delete the plan.</p>
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

    <AllForceRemove v-if="all_force_remove_popup"
      v-on:remove_all_area_cancel_click="removeAllAreaCancelClick"
      v-on:remove_all_area_confirm_click="removeAllAreaConfirmClick" />

    <!-- Copy Modal -->
    <div class="copy-modal" v-if="copy_modal">
      <div class="add-territory-modal" v-click-outside="copyModalSectionOutsideClick">
        <div class="add-territory-modal-inner">
          <p class="title">Select Territory</p>
          <span class="close-icon" @click="closeTerritoryCopyModal">
            <i class="fas fa-times"></i>
            <!-- <span class="tool-tip">Close Modal</span> -->
          </span>
          <div class="search-territory">
            <div class="search-territory-inner">
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" id="territory-search-filter-copy-modal" placeholder="Search by Name, ID No" v-on:keyup="searchKeyUpHandler_2"/>
              </div>
            </div>
          </div>
          <div class="territory-list">
            <div class="territory-list-inner">
              <p class="territory-name" :class="checkIfTerritoryAreaDataListHasThisArea(t) ? 'hide': ''" v-for="(t, i) in all_territory_list_for_this_DA" :key="i" @click="territoryNameAddClickForCopy(t)">
                <span class="territory_nm">{{ t.display_code }} - {{ t.area_name }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div id="update-successfully-modal" class="modal-popup-section" v-if="adding_or_copy_tt">
      <div class="modal-popup-section-inner">
        <div id="progressbar" class="jmi-progressbar">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
          <p>Please wait...</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import MonthlyDeliveryPlanLeftList from "./Sidebar/MonthlyDeliveryPlan_LeftList";
import PlanCalendar from "./PlanCalendar/PlanCalendar";
import AllForceRemove from "./DeleteFragments/AllForceDelete";
import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
const breadcrumbFunctions = new BreadcrumbFunctions()

import ERPService from '../../../../service/ERPSidebarService'
const service = new ERPService()
import JMIFilter from '../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
  components: {
    Heading,
    MonthlyDeliveryPlanLeftList,
    PlanCalendar,
    AllForceRemove,
  },
  data() {
    return {
      routeName: "Monthly Delivery Plan",
      parentPath: "Local Sales",
      pathName: [],
      selectedDate: null,
      selectedDateMonth: null,
      selectedSchedule: null,
      monthlyPlanDetailsSection: false,
      days: null,
      window_height: null,
      header_height: 74,
      title_height: 73,
      footer_height: 32,
      // newCalendar: false,
      total_territory_names_list: [],
      total_territory_count: null,
      total_territory: null,
      territory_modal: false,
      territory_search_list: [
        {
          territory_name: "Territory Name Hello World 1"
        },
        {
          territory_name: "Territory Name Hello World 2"
        },
        {
          territory_name: "Territory Name Hello World 3"
        },
        {
          territory_name: "Territory Name Hello World 4"
        },
        {
          territory_name: "Territory Name Hello World 5"
        },
        {
          territory_name: "Territory Name Hello World 6"
        },
      ],
      DICWiseUsers_DA_List: [],
      territory_area_data_list: [],
      all_territory_list_for_this_DA: [],
      new_territory_list_by_adding: [],
      YYYY_MM_DD_forNewDayAddingSavedFromLeftSide: null,
      createOK: false,
      destroyOK: false,
      changed_or_selected_MMYYYY:null,
      DIC_DP_ID: null,
      destroy_popup: false,
      previous_force_is_present: null,
      previous_force_daf_id: null,
      CREATE_SERVICE_STATUS: null,
      copy_modal: false,
      copy_selected_territory_area_id: null,

      // Left List Section Status & Territory Count
      selector_id_from_left_da_list: null,
      left_tt_counter: null,

      // remove territory data object
      remove_territory_data: [],
      dialog: false,

      // Import Plan from previous month
      importPlanMonthsData: [],
      selectPreviousMonthToImport: '',

      // Monthly AVG status
      allAvailableOrOccupied_Copy: true,

      // Destroy Popup
      all_force_remove_popup: false,

      // Delete Month data popup - LeftSide
      DELETE_THIS_MONTH_DATA_POPUP: false,
      adding_or_copy_tt: false,
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {
    // service.getDICWiseUsers_MonthlyDeliveryPlan()
    //   .then(res => {
    //     console.log(res.data)
    //   })

    // service.getDICDeliveryLocations_MonthlyDeliveryPlan()
    //   .then(res => {
    //     console.log(res.data)
    //   })

    // service.getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan('022021')
    //   .then(res => {
    //     console.log(res.data)
    //   })

    let curretnYYYY = new Date().getFullYear()
    let currentMM = ((new Date().getMonth() + 1) < 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1) )
    let currentMMYYYY = (currentMM.toString() + curretnYYYY.toString())

    this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(currentMMYYYY)
    this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(currentMMYYYY)
  },
  methods: {
    createBreadcrumbData() {
      // this.pathName = [
      //   { name: "Local Sales" },
      //   { name: "Monthly Delivery Plan" },
      // ];
      this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    selectedMonthFromLeft(date) {
      this.disableActivateAllLeftSideDaList()
      this.territory_area_data_list = []
      this.importPlanMonthsData = []
      this.selectedDateMonth = null
      this.selectedSchedule = null
      this.territory_modal = false
      this.DIC_DP_ID = null
      if (date) {
        this.createDateForCalender(date);
        let selectedMM = (this.getMonthsNumberFromMonthName(date.split(' ')[0])) < 10 ? ('0' + this.getMonthsNumberFromMonthName(date.split(' ')[0])) : (this.getMonthsNumberFromMonthName(date.split(' ')[0])).toString()
        let selectedYYYY = date.split(' ')[1].toString()
        let selectedMMYYYY = (selectedMM + selectedYYYY).toString()
        this.changed_or_selected_MMYYYY = selectedMMYYYY

        this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(selectedMMYYYY)
        this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(selectedMMYYYY)
      }
    },
    async ALL_DA_INFO_MMYYYY_FROM_SERVICE(MMYYYY) {
      await service.getAllDAInfo_MMYYYY_MonthlyDeliveryPlan(MMYYYY)
        .then(res => {
          console.log(res.data)
          this.DICWiseUsers_DA_List = res.data.da_info
          this.all_territory_list_for_this_DA = res.data.all_territory_list
          // this.leftSectionListTerritoryCount()
        })
    },
    async CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(MMYYYY) {
      await service.getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan(MMYYYY)
        .then(res => {
          if(res.data.response_code === 404) {
            this.allAvailableOrOccupied_Copy = true
          } else {
            this.allAvailableOrOccupied_Copy = false
          }
        })
    },
    selectedUserSchedulePlan(schedule, selectedMonth, selector_id) {
      console.log(schedule)
      this.territory_area_data_list = []
      this.importPlanMonthsData = []
      this.selectedDateMonth = null
      this.selectedSchedule = null
      this.selector_id_from_left_da_list = selector_id
      this.territory_modal = false
      if (schedule) {
        this.createDateForCalender(selectedMonth)
        this.selectedDate = this.days;
        this.selectedSchedule = schedule;
        this.selectedDateMonth = selectedMonth;
        this.monthlyPlanDetailsSection = true;
        this.total_territory_count = schedule.total_territory ? schedule.total_territory : 0

        let selectedMM = (this.getMonthsNumberFromMonthName(selectedMonth.split(' ')[0])) < 10 ? ('0' + this.getMonthsNumberFromMonthName(selectedMonth.split(' ')[0])) : (this.getMonthsNumberFromMonthName(selectedMonth.split(' ')[0])).toString()
        let selectedYYYY = selectedMonth.split(' ')[1].toString()
        let selectedMMYYYY = (selectedMM + selectedYYYY).toString()
        this.changed_or_selected_MMYYYY = selectedMMYYYY
        
        this.YYYY_MM_DD_forNewDayAddingSavedFromLeftSide = selectedYYYY + '-' + selectedMM

        this.RELOAD_ALL_TERRITORY_LIST_FOR_DA(selectedMMYYYY)
        this.MONTHLY_DELIVERY_PLAN_BY_MMYYYY_AND_FORCE_ID_FROM_SERVICE(selectedMMYYYY, schedule.id)
        this.IMPORT_PLAN_FROM_PREVIOUS_MONTH_DATA_FROM_SERVICE(schedule.id, schedule.status)
      }
    },
    async MONTHLY_DELIVERY_PLAN_BY_MMYYYY_AND_FORCE_ID_FROM_SERVICE(MMYYYY, FORCE_ID) {
      await service.getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan(MMYYYY, FORCE_ID)
          .then(res => {
            console.log(res.data)
            if(res.data.response_code === 200) {
              this.DIC_DP_ID = res.data.delivery_plan_info.id
              if(res.data.delivery_plan_info.get_dpd_forces.length > 0) {
                this.territory_area_data_list = res.data.delivery_plan_info.get_dpd_forces[0].get_areas
                this.previous_force_is_present = res.data.delivery_plan_info.get_dpd_forces.length
                this.previous_force_daf_id = res.data.delivery_plan_info.get_dpd_forces[0].id
              }
            } else {
              this.territory_area_data_list = []
            }
          })
    },
    async IMPORT_PLAN_FROM_PREVIOUS_MONTH_DATA_FROM_SERVICE(FORCE_ID, STATUS) {
      await service.getSD_DPD_PreviousMonthBySource_MonthlyDeliveryPlan(FORCE_ID)
          .then(res => {
            if(res.data.response_code === 200 && STATUS === "Available") {
              this.importPlanMonthsData = res.data.data
            } else {
              this.importPlanMonthsData = []
            }
          })
    },
    onSelectionImportMonthChange() {
      let soruce_date = this.selectPreviousMonthToImport.dp_mnyr
      let target_date = this.changed_or_selected_MMYYYY
      let force_id = this.selectPreviousMonthToImport.force_id
      
      this.DA_COPY_FOR_FUTURE_MONTH_FROM_SERVICE(soruce_date, target_date, force_id)
    },
    async DA_COPY_FOR_FUTURE_MONTH_FROM_SERVICE(SRC_DATE, TARGET_DATE, FORCE_ID) {
      service.getExecuteProcedureCopyDeliveryPlanByForce(SRC_DATE, TARGET_DATE, FORCE_ID)
        .then( () => {
          window.location.reload()
        
          // this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(this.changed_or_selected_MMYYYY)
          // this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
          // this.MONTHLY_DELIVERY_PLAN_BY_MMYYYY_AND_FORCE_ID_FROM_SERVICE(this.changed_or_selected_MMYYYY, this.selectedSchedule.id)
        })
    },
    async RELOAD_ALL_TERRITORY_LIST_FOR_DA(MMYYYY) {
      await service.getAllDAInfo_MMYYYY_MonthlyDeliveryPlan(MMYYYY)
        .then(res => {
          this.all_territory_list_for_this_DA = res.data.all_territory_list
        })
    },
    checkIfTerritoryAreaDataListHasThisArea(territory) {
      for(let i=0; i<this.territory_area_data_list.length; i++) {
        if(territory.id.toString() === this.territory_area_data_list[i].area_id.toString()) {
          return true
        }
      }
    },
    createDateForCalender(date) {
      let days = [];
      for (
        let i = 0;
        i <
        new Date(
          this.yearSlice(date),
          this.getMonthsNumberFromMonthName(date.split(" ")[0]),
          0
        ).getDate();
        i++
      ) {
        let day = {};
        day.day = this.getDayNameFromYYYYMMDD(
          this.yearSlice(date) +
            "-" +
            this.getMonthsNumberFromMonthName(date.split(" ")[0]) +
            "-" +
            (i + 1)
        );
        days.push(day);
      }
      this.days = days;
    },
    yearSlice(date) {
      let year = date.split(" ")[1];
      return year;
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
    getSelectedDateFromChildComponentCalendar(territoryDetails, date) {
      let ID = territoryDetails.id  //not area_id
      let selectedDAY = (date < 10) ? ('0' + date) : date
      let selectedDATE = this.YYYY_MM_DD_forNewDayAddingSavedFromLeftSide + '-' + selectedDAY
      
      this.CREATE_SD_DPD_DAY_FROM_SERVICE(ID, selectedDATE)
    },
    async CREATE_SD_DPD_DAY_FROM_SERVICE(id, date) {
      await service.getCreateSDDpdDay_MonthlyDeliveryPlan(id, date)
        .then(res => {
          if(res.data.message === "Success!") {
            this.createOK = true
          }
        }).catch( () => {
          this.createOK = false
        })
    },
    getSelectedDateFromChildComponentCalendarToDestroy(territoryDetails, date) {
      let ID = territoryDetails.id  //not area_id
      let selectedDAY = (date < 10) ? ('0' + date) : date
      let selectedDATE = this.YYYY_MM_DD_forNewDayAddingSavedFromLeftSide + '-' + selectedDAY

      this.DESTROY_SD_DPD_DAY_FROM_SERVICE(ID, selectedDATE)
    },
    async DESTROY_SD_DPD_DAY_FROM_SERVICE(id, date) {
      await service.getDestroySDDpdDay_MonthlyDeliveryPlan(id, date)
        .then(res => {
          if(res.data.message === "Success!") {
            this.destroyOK = true
          }
        }).catch( () => {
          this.destroyOK = false
        })
    },
    removeTerritoryCalendar(t) {
      let DPF_ID = t.dpf_id
      let AREA_ID = t.area_id
      let AREA_NAME = t.area_info.area_name
      let AREA_LVL = t.area_info.lvl
      
      this.remove_territory_data = {
        re_sel_dpf_id: DPF_ID,
        re_sel_area_id: AREA_ID,
        re_sel_area_name: AREA_NAME,
        re_sel_area_lvl: AREA_LVL
      }
      if(this.destroy_popup) {
        this.destroy_popup = false
      } else {
        this.destroy_popup = true
      }
    },
    cancelFromPopup() {
      this.destroy_popup = false
      this.remove_territory_data = []
    },
    confirmFromPopup() {
      this.DESTROY_SD_DPD_AREA_FROM_SERVICE(this.remove_territory_data.re_sel_dpf_id, this.remove_territory_data.re_sel_area_id, this.remove_territory_data.re_sel_area_name, this.remove_territory_data.re_sel_area_lvl)
      this.remove_territory_data = []
      this.destroy_popup = false
    },
    async DESTROY_SD_DPD_AREA_FROM_SERVICE(dpf_id, area_id, area_name, area_lvl) {
      await service.getDestroySD_DPD_AREA(dpf_id, area_id)
        .then( () => {
          if(this.territory_area_data_list.length > 0) {
            for (let [i, tt] of this.territory_area_data_list.entries()) {
              if (tt.area_id === area_id) {
                this.territory_area_data_list.splice(i, 1);
              }
            }
            this.all_territory_list_for_this_DA.push({
                    "id": area_id,
                    "lvl": area_lvl,
                    "area_name": area_name
                })
          }
        }).catch(err => {
          console.log("Destroy Error : " + err)
        })
        
        this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(this.changed_or_selected_MMYYYY)
        this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
    },
    submitPlan() {
    },
    createNewTerritory() {
      if(this.territory_modal) {
        this.territory_modal = false
      } else {
        this.territory_modal = true
      }
    },
    addTerritoryModalSectionOutsideClick() {
      this.territory_modal = false
    },
    async MONTHLY_DELIVERY_PLAN_BY_MMYYYY_AND_FORCE_ID_FROM_SERVICE_2(MMYYYY, FORCE_ID) {
      await service.getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan(MMYYYY, FORCE_ID)
          .then(res => {
            if(res.data.response_code === 200) {
              if(res.data.delivery_plan_info.get_dpd_forces.length) {
                this.CREATE_SERVICE_STATUS = 'force found'
                this.previous_force_daf_id = res.data.delivery_plan_info.get_dpd_forces[0].id
              } else {
                this.CREATE_SERVICE_STATUS = 'force not found'
              }
            } else {
                this.CREATE_SERVICE_STATUS = 'not found'
            }
          })
    },
    async territoryNameAddClick(t) {
      this.adding_or_copy_tt = true
      await this.MONTHLY_DELIVERY_PLAN_BY_MMYYYY_AND_FORCE_ID_FROM_SERVICE_2(this.changed_or_selected_MMYYYY, this.selectedSchedule.id)
      let FORCE_ID = this.selectedSchedule.id
      let AREA_ID = t.id
      let AREA_NAME = t.area_name
      let DPF_ID = this.previous_force_daf_id
      let DP_ID = this.DIC_DP_ID
      if(this.CREATE_SERVICE_STATUS === 'not found') {
        this.CREATE_NEW_SD_DPD_AREA_OR_NEW_TERRITORY_FOR_AVAILABLE_DA_FOR_FUTURE_MONTH_FROM_SERVICE(this.changed_or_selected_MMYYYY, FORCE_ID, AREA_ID, AREA_NAME)
      } else {
        if(this.CREATE_SERVICE_STATUS === 'force found') {
          this.CREATE_NEW_SD_DPD_AREA_OR_NEW_TERRITORY_FOR_OCCUPAID_DA_FROM_SERVICE(DPF_ID, AREA_ID, AREA_NAME)
        } else if(this.CREATE_SERVICE_STATUS === 'force not found') {
          this.CREATE_NEW_SD_DPD_AREA_OR_NEW_TERRITORY_FOR_AVAILABLE_DA_FROM_SERVICE(DP_ID, FORCE_ID, AREA_ID, AREA_NAME)
        }
      }
    },
    async CREATE_NEW_SD_DPD_AREA_OR_NEW_TERRITORY_FOR_OCCUPAID_DA_FROM_SERVICE(dpf_id, area_id, area_name) {
      await service.getCreateSD_DPD_AREA_ForOccupiedDA(dpf_id, area_id)
        .then(res => {
          this.territory_area_data_list.push(res.data.new_area)
          if(this.all_territory_list_for_this_DA.length > 1) {
            for (let [i, tt] of this.all_territory_list_for_this_DA.entries()) {
              if (tt.area_name === area_name) {
                this.all_territory_list_for_this_DA.splice(i, 1);
              }
            }
          }
          this.territory_modal = false
          this.adding_or_copy_tt = false
          this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
        }).catch(err => {
          console.log("Create Error : " + err)
        })
        
        this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(this.changed_or_selected_MMYYYY)
        this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
    },
    async CREATE_NEW_SD_DPD_AREA_OR_NEW_TERRITORY_FOR_AVAILABLE_DA_FROM_SERVICE(dp_id, force_id, area_id, area_name) {
      await service.getCreateSD_DPD_AREA_ForAvailableDA(dp_id, force_id, area_id)
        .then(res => {
          this.territory_area_data_list.push(res.data.new_area)
          if(this.all_territory_list_for_this_DA.length > 1) {
            for (let [i, tt] of this.all_territory_list_for_this_DA.entries()) {
              if (tt.area_name === area_name) {
                this.all_territory_list_for_this_DA.splice(i, 1);
              }
            }
          }
          this.territory_modal = false
          this.adding_or_copy_tt = false
          this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
        }).catch(err => {
          console.log("Create Error : " + err)
        })
        
        this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(this.changed_or_selected_MMYYYY)
        this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
    },
    async CREATE_NEW_SD_DPD_AREA_OR_NEW_TERRITORY_FOR_AVAILABLE_DA_FOR_FUTURE_MONTH_FROM_SERVICE(mmyyyy, force_id, area_id, area_name) {
      await service.getCreateSD_DPD_AREA_ForAvailableDA_ForFuture(mmyyyy, force_id, area_id)
        .then(res => {
          this.territory_area_data_list.push(res.data.new_area)
          if(this.all_territory_list_for_this_DA.length > 1) {
            for (let [i, tt] of this.all_territory_list_for_this_DA.entries()) {
              if (tt.area_name === area_name) {
                this.all_territory_list_for_this_DA.splice(i, 1);
              }
            }
          }
          this.territory_modal = false
          this.adding_or_copy_tt = false
          this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
        }).catch(err => {
          console.log("Create Error : " + err)
        })
        
        this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(this.changed_or_selected_MMYYYY)
        this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
    },
    closeTerritoryModal() {
      this.territory_modal = false
    },
    copyTerritoryCalendar(t) {
      this.copy_selected_territory_area_id = t.id
      if(this.copy_modal) {
        this.copy_modal = false
      } else {
        this.copy_modal = true
      }
    },
    closeTerritoryCopyModal() {
      this.copy_modal = false
    },
    copyModalSectionOutsideClick() {
      this.copy_modal = false
    },
    territoryNameAddClickForCopy(t) {
      this.adding_or_copy_tt = true
      this.COPY_TERRITORY_FROM_SERVICE(this.copy_selected_territory_area_id, t.id, t.area_name)
    },
    async COPY_TERRITORY_FROM_SERVICE(selected_territory, selected_modal_area_id, area_name) {
      await service.getCopySD_DPD_Area(selected_territory, selected_modal_area_id)
        .then(res => {
          if(res.data.response_code !== 404) {
            this.territory_area_data_list.push(res.data.new_area)
            if(this.all_territory_list_for_this_DA.length > 1) {
              for (let [i, tt] of this.all_territory_list_for_this_DA.entries()) {
                if (tt.area_name === area_name) {
                  this.all_territory_list_for_this_DA.splice(i, 1);
                }
              }
            }
            this.copy_modal = false
            this.adding_or_copy_tt = false
          }
        }).catch(err => {
          console.log("Create Error : " + err)
        })
        
        this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(this.changed_or_selected_MMYYYY)
        this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
        // this.MONTHLY_DELIVERY_PLAN_BY_MMYYYY_AND_FORCE_ID_FROM_SERVICE(this.changed_or_selected_MMYYYY, this.selectedSchedule.id)
    },
    disableActivateAllLeftSideDaList() {
      let length = document.getElementsByClassName('monthly-delivery-plan-section-list').length
      for(let i=0; i<length; i++) {
        document.querySelector('#monthly-delivery-plan-section-list-' + i).className = 'monthly-delivery-plan-section-list'
      }
    },
    deleteThisMonthData(mmyyyy) {
      this.DELETE_WHOLE_MONTH_DATA_FROM_SERVICE(mmyyyy)
    },
    async DELETE_WHOLE_MONTH_DATA_FROM_SERVICE(mmyyyy) {
      await service.getSD_DPD_DELETE_EXECUTE_PROCEDURE(mmyyyy)
        .then( () => {

          window.location.reload()
        
          // this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(this.changed_or_selected_MMYYYY)
          // this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
          // this.MONTHLY_DELIVERY_PLAN_BY_MMYYYY_AND_FORCE_ID_FROM_SERVICE(this.changed_or_selected_MMYYYY, this.selectedSchedule.id)
          // this.DELETE_THIS_MONTH_DATA_POPUP = false
        })
    },

    // Delete All force btn Click
    deleteAllAreaOfThisForce() {
      if(this.all_force_remove_popup) {
        this.all_force_remove_popup = false
      } else {
        this.all_force_remove_popup = true
      }
    },

    // Destroy Popup - All force remove
    removeAllAreaCancelClick() {
      this.all_force_remove_popup = false
    },
    removeAllAreaConfirmClick() {
      let MMYYYY = this.changed_or_selected_MMYYYY
      let FORCE_ID = this.selectedSchedule.id
      this.REMOVE_ALL_AREA_FOR_FORCE_OR_DA(MMYYYY, FORCE_ID)
    },
    async REMOVE_ALL_AREA_FOR_FORCE_OR_DA(mmyyyy, force_id) {
      await service.getExecuteDeleteForceProcedure_All_Force_delete_for_DA(mmyyyy, force_id)
        .then( () => {
          window.location.reload()
        
          // this.territory_area_data_list = []
          // this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(this.changed_or_selected_MMYYYY)
          // this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
          // this.all_force_remove_popup = false
        })
    },
    // Reload data after full set copy
    reloadAfterFullSetCopy() {
      this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(this.changed_or_selected_MMYYYY)
      this.CURRENT_MONTH_STATUS_CHECK_FOR_ALL_A_O(this.changed_or_selected_MMYYYY)
    },
    searchKeyUpHandler(value) {
        console.log(value.key)
        let input = document.getElementById("territory-search-filter");
        let filter = input.value.toUpperCase();
        let list = document.querySelectorAll('.territory-details-section .territory-name')
        let txt_selector = "territory_nm"

        jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
    },
    searchKeyUpHandler_2(value) {
        console.log(value.key)
        let input = document.getElementById("territory-search-filter-copy-modal");
        let filter = input.value.toUpperCase();
        let list = document.querySelectorAll('.copy-modal .territory-name')
        let txt_selector = "territory_nm"

        jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./MonthlyDeliveryPlan.less");
</style>