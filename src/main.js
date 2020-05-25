import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Vuelidate,
  vuetify,
  render: h => h(App)
}).$mount("#app");
