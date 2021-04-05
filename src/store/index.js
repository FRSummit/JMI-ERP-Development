import Vue from 'vue';
import Vuex from 'vuex';
// import { accountModule } from './account_module'
import { account } from './account.module'
import { alert } from './alert.module'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userIsAuthorized: false,
    userData: [],
    
    // INVOICE CHALLAN SUMMERY
    INVOICE_CAHLLAN_SUMMERY__NEW_GATE_PASS_CREATED: null,
    // DELIVERIES - CANCEL ORDER
    DELIVERIES__CANCEL_ORDER_TIME_STAMP: null,
    // REQUISITION
    REQUISITION_PREVIOUS_COMPONENT_NAME_TO_CREATE: null,
    SELECTED_REQUISITION_DATA_TO_EDIT: null,
    SELECTED_REQUISITION_DATA_TO_EDIT_FLAG: false,
    // REQUISITION - CREATE
    DESELECT_ALL_SELECTED_PRODUCT: null,
    // REQUISITION - TRANSFER VERIFY
    TRANSFER_REQUISITION__VERIFY_REQUISITION: null,
    // REQUISITION - TRANSFER APPROVE
    TRANSFER_APPROVE_REQUISITION__RELOAD_LEFT_SECTION: null
  },
  actions: {
    // loginChecker({ commit }, loginData) {
    //   commit('loginRequest');
    //   console.log('data')
    //   console.log(loginData)
    //   accountModule.loginChecker();
    // }
    // logout() {
    //   console.log('loging out ...')
    // },
  },
  mutations: {
    setUserIsAuthenticated(state, replacement) {
      // console.log('method: setUserIsAuthenticated()');
      state.userIsAuthorized = replacement;
    },
    setUserLoginAuthentication(state, value) {
      state.userData = value
    }
    // loginRequest(state, user) {
    //     state.status = { loggingIn: true };
    //     state.user = user;
    // },
    // loginSuccess(state, user) {
    //     state.status = { loggedIn: true };
    //     state.user = user;
    // },
    // loginFailure(state) {
    //     state.status = {};
    //     state.user = null;
    // },
  },
  modules: {
    account,
    alert
  }
});
