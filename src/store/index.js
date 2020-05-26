import Vue from "vue";
import Vuex from "vuex";
import { firestorePlugin } from "vuefire";
import * as firebase from "firebase/app";

Vue.use(Vuex, firestorePlugin);

export default new Vuex.Store({
  state: {
    localuser: "",
    authed: false,
    props: {
      name: "",
      email: "",
      uid: ""
    }
  },

  mutations: {
    LOGIN(email, password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
    },
    SIGN(email, password) {
      this.state.props.email = email;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + errorMessage);
          return error;
        });
    },
    CHANGESTATE(state) {
      firebase.auth().onAuthStateChanged(function(user) {
        state.localuser = firebase.auth().currentUser;
        if (user) {
          // User is signed in.
          state.props.name = state.user.name;
          state.props.email = state.user.email;
          state.props.uid = state.user.uid;
        } else {
          // No user is signed in.
          console.log("User not signed in");
        }
      });
    },
    CHANGEAUTH(state) {
      state.authed = !state.authed;
    }
  },

  actions: {
    loginToApp: context => {
      context.commit("LOGIN, ");
    },
    signUp: context => {
      context.commit("SIGN");
    },
    checkUser: context => {
      context.commit("CHANGESTATE, state");
    },
    setAuth: context => {
      context.commit("CHANGEAUTH, state");
    }
  },

  getters: {
    getAuth: () => {
      return this.store.authed;
    }
  }
});
