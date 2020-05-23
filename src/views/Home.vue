<template>
  <div class="home">
    <WelcomeText v-on:login="login" v-on:sign="sign" />
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
    },

    sign() {
      this.$router.push({ path: "/sign" });
      this.home = !this.home;
    }
  },

  components: {
    WelcomeText
  }
};
</script>
