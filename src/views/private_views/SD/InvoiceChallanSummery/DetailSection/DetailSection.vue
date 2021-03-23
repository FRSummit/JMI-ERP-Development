<template>
  <div class="invoice-challan-print-detail-section">
    <div class="invoice-challan-print-detail-section-inner">
      <div class="invoice-challan-summery-detail-header-section">
        <div class="invoice-challan-summery-detail-header-section-inner">
          <div class="packing-preparation-status-section">
            <div class="packing-preparation-status-section-inner">
              <!-- <span class="background-fixed-h-row"></span> -->
              <!-- <div class="status-section" v-for="(status, i) in status_list" :key="i">
                <div class="status-section-inner">
                  <div class="icon" :class="status.status_class"><span class="status-icon"><i class="fas fa-check"></i></span></div>
                  <div class="status-btn" :class="status.status_class">
                    <span>{{status.status_name}}</span>
                    <span class="background-fixed-h-row" v-if="(i+1) < status_list.length"></span>
                  </div>
                </div>
              </div> -->

              <div class="packing-preparation-tab-section">
                <v-card color="basil">
                  <v-tabs class="" v-model="tab" background-color="transparent" grow>
                    <v-tab class="packing-tab" v-for="(status, i) in status_list" :key="i" :disabled="status.status_class !== 'done' ? '' : disabled">
                    <!-- <v-tab class="packing-tab" v-for="(status, i) in status_list" :key="i"> -->
                      <div class="tab-icon" :class="status.status_class">
                        <span class="icon"><i class="fas fa-check"></i></span>
                      </div>
                      <div class="tab-name-section" :class="status.status_class">
                        <span class="tab-name">{{ status.status_name }}</span>
                        <span class="background-fixed-h-row" v-if="(i+1) < status_list.length"></span>
                      </div>
                    </v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="tab" class="tab-container" style="padding-top: 30px">
                    <v-tab-item v-for="(status, i) in status_list" :key="i">
                      <v-card color="basil" flat>
                        <v-card v-if="status.status_name === 'INVOICE'"><DetailDataList :tab="status.status_name" :SCHEDULE_DETAILS_LIST="DS_INVOICE" :HEADER_DATA="HEADER_DATA_INVOICE" /></v-card>
                        <v-card v-if="status.status_name === 'CHALLAN'"><DetailDataList :tab="status.status_name" :SCHEDULE_DETAILS_LIST="DS_CHALLAN" :HEADER_DATA="HEADER_DATA_CHALLAN" /></v-card>
                        <v-card v-if="status.status_name === 'GATE PASS'"><DetailDataList :tab="status.status_name" :SCHEDULE_DETAILS_LIST="DS_GATEPASS" :HEADER_DATA="DS_GATEPASS_HEADERS" /></v-card>
                        <v-card v-if="status.status_name === 'HANDOVER'"><DetailDataList :tab="status.status_name" /></v-card>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- GATE PASS CONFIRMATION -->
        <div class="modal-popup-section order-proceed-modal" v-if="gate_pass_proceed_modal_popup">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">You want to create gate pass ?</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                <div class="popup-cancel-btn-section" @click="cancelGatePassModalClickHandler">
                    <span>Cancel</span>
                </div>
                <div class="popup-confirm-btn-section" @click="proceedGatePassModalClickHandler">
                    <span>Proceed</span>
                </div>
                </div>
            </div>
        </div>
    <!-- Loading -->
    <div id="info-modal" class="modal-popup-section info-modal" v-if="loading_popup_modal">
      <div class="modal-popup-section-inner update-successfully-modal-inner">
        <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
        <p class="popup-text info">{{ loading_message ? loading_message : 'Please wait, we are processing ...' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../../../../service/ERPSidebarService";
const service = new Service();

import DetailDataList from './DetailData/DetailDataList'

export default {
  props: ["INVOICE_CHALLAN_SUMMERY", "DS_INVOICE", "DS_CHALLAN", "DS_SUMMERY_FROM_LEFT", "INVOICE_ID_FROM_LEFT", "HEADER_DATA_INVOICE", "HEADER_DATA_CHALLAN"],
  components: {
    DetailDataList
  },
  data() {
    return {
      tab: null,
      status_list: [
        {
          status_class: "done",
          status_name: "INVOICE",
        },
        {
          status_class: "done",
          status_name: "CHALLAN",
        },
        {
          status_class: "done",
          status_name: "GATE PASS",
        },
        {
          status_class: "",
          status_name: "HANDOVER",
        },
      ],
      DS_GATEPASS: [],
      DS_GATEPASS_HEADERS: [],
      gate_pass_proceed_modal_popup: false,
      loading_popup_modal: false,
      loading_message: null,
    };
  },
  created() {
    this.$getLocation({}).then((coordinates) => {
      console.log(coordinates);
    });
  },
  mounted() {
  },

  methods: {
    cancelGatePassModalClickHandler() {
      document.querySelector('.packing-tab.v-tab').click()
      this.gate_pass_proceed_modal_popup = false
    },
    async proceedGatePassModalClickHandler() {
      if(this.INVOICE_ID_FROM_LEFT === null) 
        this.INVOICE_ID_FROM_LEFT = 1001
      this.gate_pass_proceed_modal_popup = false
      await this.DS_GATE_PASS_DETAILS__FROM_SERVICE(this.INVOICE_ID_FROM_LEFT)
    },
    // ----------------------------------------------------------------------
    // SERVICE CALL
    async DS_GATE_PASS_DETAILS__FROM_SERVICE(ds_id) {
      console.log(ds_id)
      this.DS_GATEPASS = []
      this.DS_GATEPASS_HEADERS = []
      if(this.DS_SUMMERY_FROM_LEFT.gate_pass_id === null) {
        this.loading_popup_modal = true
      }
      this.loading_message = null
      await service.getGatePassDetails_DS_INVOICE_CHALLAN_SUMMERY(ds_id)
        .then(res => {
          console.log(res.data)
          if(res.data.response_code === 200) {
            this.loading_message = res.data.message
            setTimeout( () => {
              this.loading_popup_modal = false
            }, 1500)
          } else {
            this.loading_message = res.data.message
            setTimeout( () => {
              this.loading_popup_modal = false
            }, 1500)
          }
          this.DS_GATEPASS = res.data.gate_pass_data ? (res.data.gate_pass_data.gate_pass_details ? (res.data.gate_pass_data.gate_pass_details) : []) : []
          this.DS_GATEPASS_HEADERS = res.data.header
          this.$store.state.INVOICE_CAHLLAN_SUMMERY__NEW_GATE_PASS_CREATED = new Date()
        })
        .catch(err => {
          console.log(err)
          if(err) {
            this.DS_GATEPASS = []
            this.DS_GATEPASS_HEADERS = []
            document.querySelector('.packing-tab.v-tab').click()
            this.loading_message = 'Request failed to load'
            setTimeout( () => {
              this.loading_popup_modal = false
            }, 1500)
          }
        })
    }
  },
  watch: {
    tab(newVal) {
      console.log(newVal)
      // console.log(this.DS_SUMMERY_FROM_LEFT.gate_pass_id)
      if( (this.DS_SUMMERY_FROM_LEFT.gate_pass_id === null) && (newVal === 2) ) {
        this.gate_pass_proceed_modal_popup = true
      } else if(newVal === 2) {
        this.DS_GATE_PASS_DETAILS__FROM_SERVICE(this.INVOICE_ID_FROM_LEFT)
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./DetailSection.less");
</style>