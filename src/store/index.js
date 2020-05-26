import Vue from "vue";
import Vuex from "vuex";
import { firestorePlugin } from "vuefire";

Vue.use(Vuex);
Vue.use(firestorePlugin);

export default new Vuex.Store({
  state: {
    loadingStatus: "notLoading",
    user: {
      id: "testing123",
      address: ""
    }
  },

  mutations: {
    /* LOGIN = (state) => { state.goLogin = false ;},
    GOSIGN = (state) => { state.goSign = true; } */
  },

  actions: {
    goToLogin: context => {
      context.commit("GOLOGIN");
    },
    goToSignUp: context => {
      context.commit("GOLOGIN");
    }
  },

  modules: {}
});
