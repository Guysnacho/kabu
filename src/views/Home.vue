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

    <v-content>
      <v-card>
        <l-map
          style="height: 80%; width: 100%"
          :maxBounds="maxbounds"
          :zoom="zoom"
          :center="center"
          :minZoom="5"
          renderer="padding='0'"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
        >
          <l-tile-layer :url="url" />
        </l-map>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "Home",

  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 3,
      center: [39.964528, -82.954266],
      bounds: null,
      maxbounds: [50.22703, -140.74953, 24.758095, -60.593278]
    };
  },

  created() {
    this.$emit("hide");
  },

  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },

  components: {
    LMap,
    LTileLayer
    //LMarker
  }
};
</script>
