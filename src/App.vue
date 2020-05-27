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

    <v-app-bar
      v-else
      app
      dark
      elevation="10"
      color="primary"
      src="https://cdn.pixabay.com/photo/2019/04/18/07/51/dalat-4136346_960_720.jpg"
      fixed
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(44,40,65,.20), rgba(12,1,76,.60)"
          cover
          position="top"
        ></v-img>
      </template>

      <v-app-bar-nav-icon dark></v-app-bar-nav-icon>
      <v-toolbar-title>Kabu</v-toolbar-title>
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
