<template>
  <div class="delivery-schedule-detail-section">
    <div class="delivery-schedule-detail-section-inner">
      <div class="delivery-scheduling-detail-header-section">
        <div class="delivery-scheduling-detail-header-section-inner">
          <div class="title-date-section">
            <div class="title-date-section-inner">
              <div class="title-section">
                <p>DSID:<span>#</span></p>
              </div>
              <div class="date-section">
                <p>Current Date: <span>{{ dateFormat(new Date) }}</span></p>
              </div>
            </div>
          </div>
          <div class="start-end-point-selection-section">
            <div class="start-end-point-selection-section-inner">
              <div class="start-point-section hide">
                <div class="start-point-section-inner">
                  <div class="start-point-title">
                    <p>Select Starting Point</p>
                  </div>
                  <div class="select-options">
                    <span class="right-icon"
                      ><i class="fas fa-chevron-right"></i
                    ></span>
                    <!-- <span class="down-icon"><i class="fas fa-chevron-down"></i></span> -->
                    <select
                      title="Pick an address"
                      class="selectpicker"
                      v-model="selectStartAddress"
                      @change="onChange()"
                    >
                      <option
                        v-for="(address, m) in start_address_list"
                        :key="m"
                      >
                        {{ address.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="location-separator hide">
                <div class="location-separator-inner">
                  <span class="start"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span><i class="fas fa-map-marker-alt"></i></span>
                </div>
              </div>
              <div class="end-point-section hide">
                <div class="end-point-section-inner">
                  <div class="end-point-title">
                    <p>Select Ending Point</p>
                  </div>
                  <div class="select-options">
                    <span class="right-icon"
                      ><i class="fas fa-chevron-right"></i
                    ></span>
                    <!-- <span class="down-icon"><i class="fas fa-chevron-down"></i></span> -->
                    <select
                      title="Pick an address"
                      class="selectpicker"
                      v-model="selectEndAddress"
                      @change="onChange()"
                    >
                      <option v-for="(address, m) in end_address_list" :key="m">
                        {{ address.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="route-finder-btn-section hide">
                <div class="route-finder-btn-section-inner">
                  <button @click="findRoute"><i class="fas fa-exchange-alt"></i>Find Route</button>
                </div>
              </div>
              <div class="route-finder-btn-section">
                <div class="route-finder-btn-section-inner">
                  <button @click="createDeliveryScheduleClickHandler">Create Delivery Schedule</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="delivery-scheduling-detail-map-section">
        <div class="delivery-scheduling-detail-map-section-inner">
          <!-- <div>
            <h2>Search and add a pin</h2>
            <label>
              <gmap-autocomplete @place_changed="setPlace"> </gmap-autocomplete>
              <button @click="addMarker">Add</button>
            </label>
            <br />
          </div>
          <br /> -->
          <gmap-map
            :center="center"
            :zoom="14"
            style="width: 100%; height: calc(100vh - (74px + 73px + 68px + 20px + 32px)); max-height: 600px"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="centerClick(m, index)"
            ></gmap-marker>
            <!-- <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center = m.position"
            ></gmap-marker> -->

            <gmap-info-window
              :options="infoOptions"
              :position="infoWindowPos"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen=false"
            >
              <div v-html="infoContent"></div>
            </gmap-info-window>
          </gmap-map>
        </div>
      </div>
      <div class="delivery-scheduling-submit-section hide">
        <div class="delivery-scheduling-submit-section-inner">
          <button class="plan-submit-btn" @click="saveRoute">
            Save Route
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
// import { google } from 'google-maps';

import GlobalDateFormat from '../../../../../functions/GlobalDateFormat'
const globalDateFormat = new GlobalDateFormat()

export default {
  data() {
    return {
      start_address_list: [
        {
          name: "Address 1",
        },
        {
          name: "Address 2",
        },
        {
          name: "Address 3",
        },
        {
          name: "Address 4",
        },
      ],
      end_address_list: [
        {
          name: "Address 1",
        },
        {
          name: "Address 2",
        },
        {
          name: "Address 3",
        },
        {
          name: "Address 4",
        },
      ],
      // center: { lat: 45.508, lng: -73.587 },
      center: { lat: 23.74289, lng: 90.39597 },
      // markers: [],
      markers: [
        // {
        //   position: {
        //     lat: this.center.lat,
        //     lng: this.center.lng,
        //   },
        //   title: "Current position",
        // },
        {
          position: {
            lat: 23.74289,
            lng: 90.39597,
          },
          title: "Teting",
            name: "House of Aleida Greve",
            description: "Mymensingh, Dhaka",
            date_build: "2016-1-1",
        },
        {
          position: {
            lat: 23.74519,
            lng: 90.40410,
          },
          title: "Teting",
            name: "House of Aleida Greve",
            description: "Mymensingh, Dhaka",
            date_build: "2016-1-1",
        },
        {
          position: {
            lat: 23.74423,
            lng: 90.40503,
          },
          title: "Teting",
            name: "House of Aleida Greve",
            description: "Mymensingh, Dhaka",
            date_build: "2016-1-1",
        },
        {
          position: {
            lat: 23.74213,
            lng: 90.39848,
          },
          title: "Teting",
            name: "House of Aleida Greve",
            description: "Mymensingh, Dhaka",
            date_build: "2016-1-1",
        },
      ],
      places: [],
      currentPlace: null,
      directionsService: null,
      directionsRenderer: null,
      InfoWindow: VueGoogleMaps.InfoWindow,
      Map: VueGoogleMaps.Map,
      
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
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
    this.$getLocation({})
      .then( coordinates => {
        console.log(coordinates)
      })
  },
  async mounted() {
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

        console.log(this.InfoWindow)
        console.log(this.Map)
  },

  methods: {
    centerClick(marker, index) {
      console.log(marker.position.lat + '    ' + marker.position.lng + '    ' + index)
      // VueGoogleMaps.InfoWindow.open(this.Map, m);
        this.infoWindowPos = marker.position;
        this.infoContent = this.getInfoWindowContent(marker);
        

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == index) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = index;
        }
    },
    dateFormat(dt) {
      return globalDateFormat.dateFormatT4(dt)
    },
    getInfoWindowContent(marker) {
      return (`<div class="card" style="visibility: visible; margin: 0; border: none; box-shadow: none;">
        <!--<div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div> -->
        <div class="card-content" style="padding: 10px;">
          <div class="media">
            <div class="media-content">
              <!--<p class="title is-4" style="font-size:14px; color: #026CD1; font-weight: 500;">Location Name: ${marker.name}</p>-->
              <p class="title is-4" style="font-size:14px; color: #026CD1; font-weight: 500; margin-bottom: 4px;">OID102131</p>
            </div>
          </div>
          <div class="content" style="font-size: 12px; color: #111213">
            New Gulshan Pharma
            </br>
            <time datetime="2016-1-1" style="font-size: 12px; color: #707070; margin-top: 4px; display: block;">
              F R Summit (0168788300),
              </br>
              ${marker.description},
              </br>
              ${marker.date_build}
            </time>
          </div>
        </div>
      </div>`);
    },
    findRoute() {
      console.log('find route')
    },
    createDeliveryScheduleClickHandler() {
      console.log('createDeliveryScheduleClickHandler')
      // this.$router.push('/sd/delivery-process-invoice-printing')
      this.$emit("CREATE_DELIVERY_SCHEDULE")
    },
    saveRoute() {
      console.log('save route')
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
          lng: this.center.lng
        }
      })
      console.log(this.markers)
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