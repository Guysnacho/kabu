import Vue from "vue";
import VueRouter from "vue-router";
import Splash from "../views/Splash.vue";
import Login from "../views/Login.vue";
import Sign from "../views/Sign.vue";
import PostSign from "../views/PostSign.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Payment from "../views/Payment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Splash",
    component: Splash
  },

  {
    path: "/login",
    name: "Login",
    component: Login
  },

  {
    path: "/sign",
    name: "Sign",
    component: Sign
  },

  {
    path: "/sign/confirm",
    name: "PostSign",
    component: PostSign
  },

  {
    path: "/Home",
    name: "Home",
    component: Home
  },

  {
    path: "/Home/Profile",
    name: "Profile",
    component: Profile
  },

  {
    path: "/Home/Payment",
    name: "Payment",
    component: Payment
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
