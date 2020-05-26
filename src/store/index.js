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
    LOGIN(state, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
    },
    SIGN(state, payload) {
      this.state.props.email = payload.email;
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
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
          state.authed = true;
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
