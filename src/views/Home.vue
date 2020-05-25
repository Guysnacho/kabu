<template>
  <v-app>
    <v-content> </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src

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

  components: {}
};
</script>
