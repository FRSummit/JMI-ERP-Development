<template>
  <div class="delivery-preparation-detail-section">
    <div class="delivery-preparation-detail-section-inner">
      <div class="delivery-packing-preparation-detail-header-section">
        <div class="delivery-packing-preparation-detail-header-section-inner">
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
                  <v-tabs v-model="tab" background-color="transparent" grow>
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
                  <v-tabs-items v-model="tab" class="tab-container" style="margin-top: 30px">
                    <v-tab-item v-for="(status, i) in status_list" :key="i">
                      <v-card color="basil" flat>
                        <v-card v-if="status.status_name === 'Initial Phase'"><DetailDataList :tab="status.status_name"  :data="delivery_packing_preparation_data" /></v-card>
                        <v-card v-if="status.status_name === 'Prepare Delivery'"><DetailDataList :tab="status.status_name"  :data="delivery_packing_preparation_data" /></v-card>
                        <v-card v-if="status.status_name === 'Gate Pass'"><DetailDataList :tab="status.status_name"  :data="delivery_packing_preparation_data" /></v-card>
                        <v-card v-if="status.status_name === 'Ready'"><DetailDataList :tab="status.status_name"  :data="delivery_packing_preparation_data" /></v-card>
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
// import * as VueGoogleMaps from 'vue2-google-maps'
// import { google } from 'google-maps';
import DetailDataList from './DetailData/DetailDataList'

export default {
  components: {
    DetailDataList
  },
  data() {
    return {
      tab: null,
      status_list: [
        {
          status_class: "done",
          status_name: "Initial Phase",
        },
        {
          status_class: "done",
          status_name: "Prepare Delivery",
        },
        {
          status_class: "done",
          status_name: "Gate Pass",
        },
        {
          status_class: "",
          status_name: "Ready",
        },
      ],
      delivery_packing_preparation_data: [
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01234",
          quantity: "200"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01235",
          quantity: "300"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01236",
          quantity: "400"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01237",
          quantity: "500"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01234",
          quantity: "200"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01235",
          quantity: "300"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01236",
          quantity: "400"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01237",
          quantity: "500"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01234",
          quantity: "200"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01235",
          quantity: "300"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01236",
          quantity: "400"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01237",
          quantity: "500"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01234",
          quantity: "200"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01235",
          quantity: "300"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01236",
          quantity: "400"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01237",
          quantity: "500"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01234",
          quantity: "200"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01235",
          quantity: "300"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01236",
          quantity: "400"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01237",
          quantity: "500"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01234",
          quantity: "200"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01235",
          quantity: "300"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01236",
          quantity: "400"
        },
        {
          medicine_name: "Antiasthmatic & Antiallergic. Doxiva Montiva.",
          batch_no: "BATCHNO01237",
          quantity: "500"
        },
      ]
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

    // addCurrentLocation(p) {
    //   let position = {
    //     lat: p.coords.latitude,
    //     lng: p.coords.longitude,
    //   };
    //   this.markers.push({ position, title: "test" });
    // },
  },
};
</script>

<style lang="less" scoped>
@import url("./DetailSection.less");
</style>