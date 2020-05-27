<template>
  <v-app>
    <v-app-bar
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
      <v-row justify="center">
        <v-toolbar-title>Username</v-toolbar-title>
      </v-row>
    </v-app-bar>

    <div style="height= 500px width=100%">
      <div style="height: 200px overflow: auto;">
        <l-map>
          <l-tile-layer :url="url" />
        </l-map>
      </div>
    </div>
  </v-app>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "Home",

  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [47.31322, -1.319482]
    };
  },

  created() {
    this.$emit("hide");
  },

  components: {
    LMap,
    LTileLayer
    //LMarker
  }
};
</script>
