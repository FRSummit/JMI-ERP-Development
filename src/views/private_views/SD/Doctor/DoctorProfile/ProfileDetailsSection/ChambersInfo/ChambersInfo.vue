<template>
  <div id="chambers-info-section" class="chambers-info-section">
      <div class="chambers-info-section-inner">
          <div class="chember-count-create-section">
            <div class="chember-count-create-section-inner">
              <p class="chember-count">Total Chamber (<span class="count">{{chamber.length}}</span>)</p>
              <div class="chember-create">
                <span @click="addChemberClick()"><i class="zmdi zmdi-plus"></i>Add</span>
              </div>
            </div>
            <div class="chember-info-card" v-for="(chember, index) in chamber" :key="index">
              <div class="chember-info-card-inner">
                <div class="chember-info-section">
                  <div class="chember-info-section-inner">
                    <div class="name-address-section">
                      <div class="name-address-section-inner">
                        <div class="name-section">
                          <p class="name">{{ chember.chamber_name }}<span class="activation"><span class="activation-color"></span>{{ checkStatus(chember.status) }}</span></p>
                          <p class="address"><span class="location"><i class="zmdi zmdi-pin"></i></span>{{ chamber.chamber_address ? chamber.chamber_address : "Dummy: 15 Genda, Dhaka-Aricha Hwy, Savar Union, Dhaka" }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="edit-icon-section">
                      <span @click="chemberEdit(chember)"><i class="zmdi zmdi-edit"></i></span>
                    </div>
                  </div>
                </div>
                <div class="chember-details-section">
                  <div class="chember-info-details-section-inner">
                    <div class="chember-info">
                      <div class="chember-info-inner">
                        <div class="chember">
                          <div class="chember-inner">
                            <div class="room">
                              <span>Room No</span>
                              <span>704</span>
                            </div>
                            <div class="assistant">
                              <span>Assistant Name</span>
                              <span>{{chamber.assistant_name ? chamber.assistant_name : "Not Found"}}</span>
                            </div>
                            <div class="phone">
                              <span>Assistant Phone</span>
                              <span>{{chamber.assistant_phone ? chamber.assistant_phone : "Not Found"}}</span>
                            </div>
                          </div>
                        </div>
                        <div class="session">
                          <div class="session-inner">
                            <div class="timing">
                              <span class="day">Day</span>
                              <span class="morning">Morning Session</span>
                              <span class="afternoon">Afternoon Session</span>
                              <span class="evening">Evening Session</span>
                            </div>
                            <div class="the-time-day">
                              <span class="day">Day</span>
                              <span class="morning">Morning Session</span>
                              <span class="afternoon">Afternoon Session</span>
                              <span class="evening">Evening Session</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="chember-map">
                      <div class="chember-map-inner">
                        <!-- <gmap-map :center="{lat: parseFloat(chember.latitude), lng: parseFloat(chember.longitude)}" :zoom="14" -->
                        <gmap-map :center="checkCenter(chember)" :zoom="14"
                          style="width: 100%; height: 300px; border-radius: 2px;"
                        >
                          <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position"
                            @click="centerClick(m, index)"
                          ></gmap-marker>

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
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  props: ["chamber", "chamber_location"],
  components: {},
  data() {
    return {
      center: { lat: 23.74289, lng: 90.39597 },
      markers: [
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
    this.$getLocation({})
      .then( coordinates => {
        console.log(coordinates)
      })
  },
  mounted() {
        // console.log(this.InfoWindow)
        // console.log(this.Map)
  },
  methods: {
    centerClick(marker, index) {
      console.log(marker.position.lat + '    ' + marker.position.lng + '    ' + index)
      // VueGoogleMaps.InfoWindow.open(this.Map, m);
        this.infoWindowPos = marker.position;
        this.infoContent = this.getInfoWindowContent(marker);
        console.log(this.currentMidx + '    ' + index)
        

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == index) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = index;
        }
        console.log(this.currentMidx + '    ' + index)
    },
    getInfoWindowContent(marker) {
      console.log(marker)
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
    checkStatus(status) {
      return status === "1" ? "Active" : "Deactive"
    },
    checkCenter(chamber) {
      if(chamber) {
        /*this.center = { 
          lat: parseFloat(chamber.latitude),
          lng: parseFloat(chamber.longitude)
        }
        this.markers = [
          {
            position: {
              lat: parseFloat(chamber.latitude),
              lng: parseFloat(chamber.longitude),
            },
            title: chamber.chamber_name ? chamber.chamber_name : "Not Found",
            name: chamber.chamber_name ? chamber.chamber_name : "Not Found",
            description: chamber.chamber_address ? chamber.chamber_address : "Not Found",
            date_build: "Test attribute",
          },
        ]*/
      }
      return this.center
    },
    addChemberClick() {
      console.log('add chember clicked')
    },
    chemberEdit(chember) {
      console.log(chember.chamber_name)
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./ChambersInfo.less");
</style>