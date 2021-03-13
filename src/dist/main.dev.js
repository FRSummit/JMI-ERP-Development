"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = require("./router");

var _store = require("./store");

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

var _jquery = _interopRequireDefault(require("jquery"));

require("./custom.css");

require("./custom.less");

require("./custom.js");

require("./assets/roboto-font.css");

require("../node_modules/materialize-css/dist/css/materialize.min.css");

require("../node_modules/materialize-css/dist/js/materialize.min.js");

require("@fortawesome/fontawesome-free/css/all.css");

require("@fortawesome/fontawesome-free/js/all.js");

require("./assets/material-design-iconic-font/css/material-design-iconic-font.css");

require("./assets/material-design-iconic-font/css/material-design-iconic-font.min.css");

require("./assets/icofont/icofont.css");

require("./assets/icofont/icofont.min.css");

var _firebase = _interopRequireDefault(require("firebase"));

var _vueHtmlToPaper = _interopRequireDefault(require("vue-html-to-paper"));

require("print-js");

var VueGoogleMaps = _interopRequireWildcard(require("vue2-google-maps"));

var _vueBrowserGeolocation = _interopRequireDefault(require("vue-browser-geolocation"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import VueGoogleMap from 'vuejs-google-maps'
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
_vue["default"].use(_vueHtmlToPaper["default"]);

_vue["default"].use(_bootstrapVue.BootstrapVue);

_vue["default"].use(_bootstrapVue.IconsPlugin);

_vue["default"].use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDl9xch1enBwqVj7OQwuLU6q1AoPkqviyI",
    libraries: "places" // necessary for places input

  }
});

_vue["default"].use(_vueBrowserGeolocation["default"]); // Vue.use(VueGoogleMap, {
//   load: {
//     apiKey: 'AIzaSyDl9xch1enBwqVj7OQwuLU6q1AoPkqviyI',
//     // libraries: ['...']
//   }
// })


_vue["default"].config.silent = true; // var $ = global.$;

window.$ = _jquery["default"];
(0, _router.configureFakeBackend)();
_vue["default"].config.productionTip = false; // var firebaseConfig = {
//   apiKey: "AIzaSyDTE1s7TtOtjje1a9cb7VX5kI_B9KSAEo4",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// };

var firebaseConfig = {
  apiKey: "AIzaSyAdshIIQA3BdlBAljuxpn1DS5aI_L9_lbo",
  authDomain: "jmi-erp-f34ae.firebaseapp.com",
  databaseURL: "https://jmi-erp-f34ae.firebaseio.com",
  projectId: "jmi-erp-f34ae",
  storageBucket: "jmi-erp-f34ae.appspot.com",
  messagingSenderId: "305377898609",
  appId: "1:305377898609:web:09ea96315d5886d5026bd0",
  measurementId: "G-XX6DY0XRDX"
}; // Initialize Firebase

_firebase["default"].initializeApp(firebaseConfig);

window.firebase = _firebase["default"];
new _vue["default"]({
  router: _router.router,
  store: _store.store,
  vuetify: _vuetify["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');