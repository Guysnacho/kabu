import Vue from "vue";
import Vuex from "vuex";
import db from "./";
import { vuexfireMutations } from "vuexfire";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    database: db,
    localuser: "",
    authed: false,
    props: {
      name: "",
      email: "",
      uid: ""
    }
  },

  mutations: {
    CHANGEAUTH(state) {
      state.authed = !state.authed;
    },
    ...vuexfireMutations
  },

  actions: {
    loginToApp(context) {
      context.commit("LOGIN");
    },
    signUp(context) {
      context.commit("SIGN");
    },
    checkUser(context) {
      context.commit("CHANGESTATE", context);
    },
    setAuth(context) {
      context.commit("CHANGEAUTH");
    }
  },

  getters: {
    getAuth: state => {
      return state.state.authed;
    }
  }
});
