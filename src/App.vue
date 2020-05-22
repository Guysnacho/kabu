<template>
  <div id="app">
    <WelcomeText v-on:Login="goLog" v-on:SignUp="goSign" />
  </div>
</template>

<script>
import WelcomeText from "./components/WelcomeText";

export default {
  name: "app",
  methods: {
    goLog() {
      this.router.push("/about");
    },
    goSign() {
      this.router.push("/about");
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
