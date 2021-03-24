<template>
  <div class="invoice-challan-print-detail-section">
    <div class="invoice-challan-print-detail-section-inner">
      <div class="invoice-challan-printing-detail-header-section">
        <div class="invoice-challan-printing-detail-header-section-inner">
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
                  <v-tabs class="hide" v-model="tab" background-color="transparent" grow>
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
                  <v-tabs-items v-model="tab" class="tab-container" style="">
                    <v-tab-item v-for="(status, i) in status_list" :key="i">
                      <v-card color="basil" flat>
                        <v-card v-if="status.status_name === 'Institution'"><DetailsDataList :tab="status.status_name" :GRN_DATA="GRN_DATA" :SCHEDULE_DETAILS_LIST="SCHEDULE_DETAILS_LIST" :HEADER_DATA="HEADER_DATA" v-on:return_grn_btn_click="returnGrnBtnClick" /></v-card>
                        <!-- <v-card v-if="status.status_name === 'Chemist'"><DetailsDataList :tab="status.status_name" :SCHEDULE_DETAILS_LIST="SCHEDULE_DETAILS_LIST_CHEMIST" :HEADER_DATA="HEADER_DATA" /></v-card> -->
                        <!-- <v-card v-if="status.status_name === 'Add Invoice to DS'"><AddInvoiceToDS :tab="status.status_name" :INVOICE_FOR_CURRENT_DS_LIST="INVOICE_FOR_CURRENT_DS_LIST" v-on:cancel_from_add_invoice_to_ds="cancelFromAddInvoiceToDS" v-on:ADD_INVOICE_TO_CURRENT_SCHEDULE="addInvoiceToCurrentSchedule"/></v-card> -->
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
  </div>
</template>

<script>
import DetailsDataList from './DetailData/DetailsDataList'
// import AddInvoiceToDS from './DetailData/AddInvoiceToDS'

export default {
  props: ["GRN_DATA", "SCHEDULE_DETAILS_LIST", "INVOICE_FOR_CURRENT_DS_LIST", "HEADER_DATA"],
  components: {
    DetailsDataList,
    // AddInvoiceToDS
  },
  data() {
    return {
      tab: null,
      status_list: [
        {
          status_class: "done",
          status_name: "Institution",
        },
        // {
        //   status_class: "done",
        //   status_name: "Chemist",
        // },
        // {
        //   status_class: "done",
        //   status_name: "Add Invoice to DS",
        // },
      ],
    };
  },
  created() {
    /*const API_KEY = 'AIzaSyDl9xch1enBwqVj7OQwuLU6q1AoPkqviyI';
    const url = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    const s = document.createElement("script");
    s.src=url;
    document.head.appendChild(s);
    this.directionsService = new window.google.maps.DirectionsService();
    this.directionsRenderer = new window.google.maps.DirectionsRenderer();*/
    // console.log(directionsService)
    // console.log(directionsRenderer)
    //get user coordinates from browser request
    this.$getLocation({}).then((coordinates) => {
      console.log(coordinates);
    });
  },
  mounted() {
    // this.directionsService = new google.maps.DirectionsService();
    // this.directionsRenderer = new google.maps.DirectionsRenderer();
    // console.log(this.directionsService)
    // console.log(this.directionsRenderer)
    // this.geolocate();
    // VueGoogleMaps.loaded.then( (res) => {
    //   console.log(res)
    //   this.directionsService = new VueGoogleMaps.gmapApi.maps.DirectionsService();
    //   this.directionsRenderer = new VueGoogleMaps.gmapApi.maps.DirectionsRenderer();
    // })
    // if(VueGoogleMaps) {
    // console.log(VueGoogleMaps)
    //   this.directionsService = new VueGoogleMaps.gmapApi.maps.DirectionsService();
    //   this.directionsRenderer = new VueGoogleMaps.gmapApi.maps.DirectionsRenderer();
    // }
    // console.log(new google.maps.DirectionsService())
    // console.log(google)
  },

  methods: {
    centerClick(m) {
      console.log(m);
    },
    findRoute() {
      console.log("find route");
    },
    saveRoute() {
      console.log("save route");
    },
    // checkGatePass(data) {
    //   for(let i=0; i<data.length; i++) {
    //     console.log(data[i].get)
    //   }
    // }
    // receives a place object via the autocomplete component
    // setPlace(place) {
    //   this.currentPlace = place;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng(),
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    geolocate() {
      console.log("here");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("here 2");
        console.log(this.markers);
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        // this.addCurrentLocation(position)
        // this.markers.push(this.center)
      });
      this.markers.push({
        position: {
          lat: this.center.lat,
          lng: this.center.lng,
        },
      });
      console.log(this.markers);
    },

    returnGrnBtnClick() {
      this.$emit('return_grn_btn_click')
    },

    // addCurrentLocation(p) {
    //   let position = {
    //     lat: p.coords.latitude,
    //     lng: p.coords.longitude,
    //   };
    //   this.markers.push({ position, title: "test" });
    // },
    // cancelFromAddInvoiceToDS() {
    //   console.log('cancel btn clicked')
    //   document.querySelector('.packing-tab.v-tab').click()
    // },
    // addInvoiceToCurrentSchedule(value) {
    //   this.$emit('ADD_INVOICE_TO_CURRENT_SCHEDULE', value)
    // }
  },
};
</script>

<style lang="less" scoped>
@import url("./DetailSection.less");
</style>