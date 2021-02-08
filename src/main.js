import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';
import $ from 'jquery'
import './custom.css'
import './custom.less'
import './custom.js'
import './assets/roboto-font.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/material-design-iconic-font/css/material-design-iconic-font.css'
import './assets/material-design-iconic-font/css/material-design-iconic-font.min.css'
import './assets/icofont/icofont.css'
import './assets/icofont/icofont.min.css'
import VueHtmlToPaper from 'vue-html-to-paper'
import 'print-js'
import * as VueGoogleMaps from "vue2-google-maps";
// import VueGoogleMap from 'vuejs-google-maps'
import VueGeolocation from 'vue-browser-geolocation'
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

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
