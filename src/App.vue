<template>
  <v-app>
    <v-app-bar app color="lightaccent" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Kabu Logo"
          class="shrink mr-2"
          contain
          src="./assets/icon.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="goHome" text>
        <span class="mr-2">Kabu Kabu</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),

  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
