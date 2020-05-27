<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      v-if="
        this.$route.path == '/' ||
          this.$route.path == '/login' ||
          this.$route.path == '/sign' ||
          this.$route.path == '/sign/confirm'
      "
    >
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
      <v-btn color="secondary" @click="goHome" text>
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

<script src="/__/firebase/7.14.5/firebase-app.js"></script>
<script src="/__/firebase/7.14.5/firebase-analytics.js"></script>
<script src="/__/firebase/init.js"></script>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    home: true
  }),

  methods: {
    goHome() {
      this.$router.replace("/");
    },
    change() {
      this.home = true;
    }
  }
};
</script>
