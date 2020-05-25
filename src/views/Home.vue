<template>
  <v-app>
    <v-content>
      <v-row justify="center">
        <v-img
          alt="Kabu logo"
          src="../assets/logo.png"
          contain="false"
          min-width="10%"
          max-width="50%"
          id="logo"
        />
      </v-row>

      <v-row justify="center">
        <v-btn
          class="ma-10"
          rounded="true"
          color="primary"
          width="20%"
          @click="login"
          >Login</v-btn
        >
      </v-row>

      <v-row justify="center">
        <v-btn rounded="true" color="primary" width="20%" @click="sign"
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
