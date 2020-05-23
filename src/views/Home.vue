<template>
  <div class="home">
    <WelcomeText v-on:login="login" />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeText from "../components/WelcomeText";
export default {
  name: "Home",

  data() {
    return {};
  },

  methods: {
    login() {
      this.$router.push({ path: "/login" });
      this.home = !this.home;
    }
  },

  components: {
    WelcomeText
  }
};
</script>
