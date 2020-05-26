import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Sign from "../views/Sign.vue";
import PostSign from "../views/PostSign.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
