import Vue from 'vue'
import VueGoogleMap from 'vuejs-google-maps'
 
Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'your-api-key',
    // libraries: ['...']
  }
})