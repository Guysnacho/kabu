import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingStatus: "notLoading",
    goLogin: false,
    goSign: false
  },

  mutations: {
    /*     GOLOGIN = (state) => { state.goLogin = false ;},
    GOSIGN = (state) => { state.goSign = true; }
 */
  },

  actions: {
    /*     goToLogin = (context) => { context.commit('GOLOGIN'); },
    goToSignUp = (context) => { context.commit('GOLOGIN'); }
 */
  },

  modules: {}
});
