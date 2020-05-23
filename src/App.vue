<template>
  <div id="app">
    <WelcomeText v-if="home" v-on:login="login" />
  </div>
</template>

<script>
import WelcomeText from "./components/WelcomeText";

export default {
  name: "app",

  data() {
    return {
      home: true
    };
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
