<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {};
  },

  methods: {},

  components: {},

  created() {
    this.$router.push("/");
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

body {
  text-decoration: none;
  background-color: #f5f2f5;
  font-family: "Jost", Helvetica, Arial, sans-serif;
}

#app {
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
