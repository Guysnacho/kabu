import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import { vuexfireMutations } from "vuexfire";

Vue.use(Vuex);

// Get a Firestore instance
//const db = firebase.initializeApp({ projectId: "kabu-65fa6" }).firestore();

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
    CHANGEAUTH(state) {
      state.authed = !state.authed;
    },
    SIGN(state, email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // ...
        });
    },
    ...vuexfireMutations
  },

  actions: {
    loginToApp(context) {
      context.commit("LOGIN");
    },
    signUp(context, email, password) {
      context.commit("SIGN", context, email, password);
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
