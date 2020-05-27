<template>
  <v-app>
    <v-content>
      <v-row justify="center">
        <v-img
          alt="Kabu logo"
          src="../assets/logo.png"
          contain
          min-width="10%"
          max-width="50%"
          id="logo"
        />
      </v-row>

      <v-row justify="center">
        <v-btn class="ma-10" rounded color="primary" width="35%" @click="login"
          >Login</v-btn
        >
      </v-row>

      <v-row justify="center">
        <v-btn class="mt-5" rounded color="primary" width="35%" @click="sign"
          >Sign Up</v-btn
        >
      </v-row>
    </v-content>
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
      this.$router.replace({ path: "/login" });
      this.home = !this.home;
    },

    sign() {
      this.$router.replace({ path: "/sign" });
      this.home = !this.home;
    }
  },

  components: {}
};
</script>
