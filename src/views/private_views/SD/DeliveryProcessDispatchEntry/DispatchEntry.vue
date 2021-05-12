<template>
  <div
    id="delivery-process-dispatch-entry"
    class="delivery-process-dispatch-entry"
  >
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="delivery-process-dispatch-entry-inner">
      <div class="dispatch-entry-tab-section">
        <b-tabs class="mt-3 dispatch-entry-tabs">
          <b-tab title="Manual Entry" active>
            <div class="manual-entry-tab">
              <div class="manual-entry-tab-inner">
                <div class="input-section">
                  <div class="row input-section-inner">
                    <div class="col-lg-3 col-md-3 col-sm-6 delivery-schedule-no">
                      <div class="delivery-schedule-no-inner">
                        <span class="label">Gate Pass No</span>
                        <input type="text" v-model="gate_pass_no" id="ds_gate_pass_no" v-on:keyup="gatePassNoKeyUpHnadler($event)" @mouseover="mouseOverBearerNameEventandler($event)" @mouseleave="mouseOverBearerNameEventandler($event)"/>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 da-sr-name">
                      <div class="da-sr-name-inner">
                        <span class="label">Bearer Name</span>
                        <input type="text" v-model="SR_NAME" readonly/>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 dispatch-date">
                      <div class="dispatch-date-inner">
                        <span class="label">Dispatch Date</span>
                        <input type="date" id="ds_dispatch_date" v-model="dispatch_date" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 dispatch-time">
                      <div class="dispatch-time-inner">
                        <span class="label">Dispatch Time</span>
                        <input type="text" id="ds_dispatch_time" v-model="dispatch_time" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row submit-section">
                  <div class="col-lg-12 col-md-12 col-sm-12 submit-section-inner" v-if="SR_NAME">
                    <button @click="dispatchNowClickHandler">Dispatch Now</button>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab title="Bar Code Scan">
            <div class="bar-code-scan-tab">
              <div class="bar-code-scan-tab-inner">
                <div class="delivery-details-section">
                  <div class="row delivery-details-section-inner">
                    <div class="col-lg-3 col-md-3 col-sm-6 delivery-schedule-no-section">
                      <p class="schedule-no">
                        GP No: <span>DSID102131</span>
                      </p>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 da-sr-section">
                      <p class="da-sr">SR: <span>Mehedi Hassan</span></p>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 dispatch-time">
                      <p class="time">Out-time: <span>08:30PM</span></p>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 dispatch-date">
                      <p class="date">Date: <span>21/12/2020</span></p>
                    </div>
                  </div>
                </div>
                <div class="row submit-section">
                  <div class="col-lg-12 col-md-12 col-sm-12 submit-section-inner">
                    <button>Dispatch Now</button>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
        <div class="modal-popup-section order-proceed-modal" v-if="success_dispatch">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <div id="progressbar" class="jmi-progressbar">
                    <v-progress-circular indeterminate color="primary" v-if="!success_dispatch_msg"></v-progress-circular>
                    <p>{{ success_dispatch_msg }}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
// import BreadcrumbFunctions from '../../../../functions/BreadcrumbFunctions'
// const breadcrumbFunctions = new BreadcrumbFunctions()

import ERPSidebarService from '../../../../service/ERPSidebarService'
const service = new ERPSidebarService()

export default {
  components: {
    Heading,
  },
  data() {
    return {
      routeName: "Dispatch Entry",
      parentPath: "Local Sales",
      pathName: [],

      gate_pass_no: null,
      GP_ID: null,
      SR_NAME: null,
      dispatch_date: null,
      dispatch_time: null,
      success_dispatch: false,
      success_dispatch_msg: null,
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  mounted() {
    document.getElementById('ds_dispatch_date').value = new Date().toISOString().substring(0, 10)
    document.getElementById('ds_dispatch_time').value = new Date().toString().split(' ')[4]
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Dispatch Entry" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    gatePassNoKeyUpHnadler(value) {
      console.log(value.which)
      console.log(value.key)
      let selector = document.querySelector('#ds_gate_pass_no')
      console.log(selector.value)

      if(value.key === 'Enter' || value.key === 'Tab') {
        this.DISPATCH_ENTRY_GP_NO__FROM_SERVICE(selector.value.toString().toUpperCase())
      }
      // this.DISPATCH_ENTRY_GP_NO__FROM_SERVICE()
    },
    mouseOverBearerNameEventandler(value) {
      console.log('working ' + this.gate_pass_no)
      this.gatePassNoKeyUpHnadler(value)
    },
    dispatchNowClickHandler() {
      this.CREATE_DISPATCH__FROM_SERVICE()
    },
    // -----------------------------------------------------------------------
    // SERVICE IMPLEMENTATION
    async DISPATCH_ENTRY_GP_NO__FROM_SERVICE(gp_no) {
      this.GP_ID = null
      this.SR_NAME = null
      this.gate_pass_no = null
      // this.success_dispatch = true
      // this.success_dispatch_msg = 'Please wait. We are processing...'
      await service.getDispatchEntryByGPNo_DS_DISPATCH_ENTRY(gp_no)
        .then(res => {
          console.log(res.data)
          if(res.data.response_code === 200 || res.data.response_code === 201) {
            // this.success_dispatch_msg = res.data.message
            this.gate_pass_no = res.data.gate_pass_info.gp_no
            this.GP_ID = res.data.gate_pass_info.id
            // this.SR_NAME = res.data.gate_pass_info.ds_info.da_info.name
            this.SR_NAME = res.data.gate_pass_info.gp_for

            // document.getElementById('ds_dispatch_date').value = new Date().toISOString().substring(0, 10)
            // document.getElementById('ds_dispatch_time').value = new Date().toString().split(' ')[4]

            
            this.dispatch_date = new Date().toISOString().substring(0, 10)
            this.dispatch_time = new Date().toString().split(' ')[4]
          } else {
            this.success_dispatch = true
            this.success_dispatch_msg = 'Invalid Gate pass number.'
          }
          setTimeout( () => {
            this.success_dispatch = false
            this.success_dispatch_msg = null
          }, 2000)
        })
        .catch(err => {
            if(err) {
              console.log('Server Error 500. ' + err)
            }
        })
    },
    async CREATE_DISPATCH__FROM_SERVICE() {
      this.success_dispatch = true
      await service.getCreateDIspatch_DS_DISPATCH_ENTRY(this.GP_ID)
        .then(res => {
          console.log(res.data)
          this.success_dispatch_msg = res.data.message
          setTimeout( () => {
            this.success_dispatch = false
            this.$router.push('/features/users/dashboard')
          }, 2000)
        })
        .catch(err => {
            if(err) {
              console.log('Server Error 500. ' + err)
            }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./DispatchEntry.less");
</style>