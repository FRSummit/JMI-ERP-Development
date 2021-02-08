import Vue from 'vue';
import Vuex from 'vuex';
// import { accountModule } from './account_module'
import { account } from './account.module'
import { alert } from './alert.module'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userIsAuthorized: false,
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
