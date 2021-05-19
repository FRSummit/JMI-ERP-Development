import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import vuetify from './plugins/vuetify';
import $ from 'jquery'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/material-design-iconic-font/css/material-design-iconic-font.css'
import './assets/material-design-iconic-font/css/material-design-iconic-font.min.css'
import './assets/icofont/icofont.css'
import './assets/icofont/icofont.min.css'
import firebase from 'firebase'
import VueHtmlToPaper from 'vue-html-to-paper'
import 'print-js'
import * as VueGoogleMaps from "vue2-google-maps";
// import VueGoogleMap from 'vuejs-google-maps'
import VueGeolocation from 'vue-browser-geolocation'

// =========================================================================
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/roboto-font.css'

import './custom.less'
import './custom.js'

// ------------------------------------------------------------------------
import './custom.css'

// import './assets/t2-style.css'
// import './assets/style-transfer_requition.css'

import './assets/css/styles.css'
import './assets/css/styles_page_included.css'
// =========================================================================
// const options = {
//   name: '_blank',
//   specs: [
//     'fullscreen=yes',
//     'titlebar=yes',
//     'scrollbars=yes'
//   ],
//   styles: [
//     'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
//     'https://unpkg.com/kidlat-css/css/kidlat.css',
//     './print.css'
//   ]
// }

// Vue.use(VueHtmlToPaper, options);
Vue.use(VueHtmlToPaper);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDl9xch1enBwqVj7OQwuLU6q1AoPkqviyI",
    libraries: "places" // necessary for places input
  }
});
Vue.use(VueGeolocation)
// Vue.use(VueGoogleMap, {
//   load: {
//     apiKey: 'AIzaSyDl9xch1enBwqVj7OQwuLU6q1AoPkqviyI',
//     // libraries: ['...']
//   }
// })
Vue.config.silent = true
// var $ = global.$;
window.$ = $;

import { configureFakeBackend } from './router';
configureFakeBackend();

Vue.config.productionTip = false

// var firebaseConfig = {
//   apiKey: "AIzaSyDTE1s7TtOtjje1a9cb7VX5kI_B9KSAEo4",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// };
const firebaseConfig = {
  apiKey: "AIzaSyAdshIIQA3BdlBAljuxpn1DS5aI_L9_lbo",
  authDomain: "jmi-erp-f34ae.firebaseapp.com",
  databaseURL: "https://jmi-erp-f34ae.firebaseio.com",
  projectId: "jmi-erp-f34ae",
  storageBucket: "jmi-erp-f34ae.appspot.com",
  messagingSenderId: "305377898609",
  appId: "1:305377898609:web:09ea96315d5886d5026bd0",
  measurementId: "G-XX6DY0XRDX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.firebase = firebase;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')





/*
*
* All popup modal should have cross icon to close
* Screen which has left and right section - before click left item right section has a message
* Every page should have Navigation id, feature id - common feature.
* 
*/