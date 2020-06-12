<template>
  <v-app>
    <v-app-bar
      app
      dark
      elevation="10"
      color="primary"
      src="https://cdn.pixabay.com/photo/2019/04/18/07/51/dalat-4136346_960_720.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(44,40,65,.20), rgba(12,1,76,.60)"
          cover
          position="top"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer" dark></v-app-bar-nav-icon>
      <v-row justify="center">
        <v-toolbar-title>Username</v-toolbar-title>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary style="z-index: 1">
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/64.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Kabu</v-list-item-title>
            <v-list-item-subtitle>Username</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content
      style="padding-top:0;
      position: sticky;"
      class="overflow-hidden my-auto"
    >
      <div>
        <l-map
          style="height: 500px; width: 100%"
          :maxBounds="maxbounds"
          :bounds="bounds"
          :zoom="zoom"
          :center="center"
          :minZoom="10"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
        >
          <l-tile-layer :url="url" />
          <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
      </div>
      <v-row justify="center">
        <v-form>
          <v-text-field
            label="Destination"
            placeholder="400 Broad St. Seattle, Washington"
            outlined
            class="mt-3"
            id="address"
            v-model="destination"
          ></v-text-field>
          <v-btn rounded block color="primary">Submit</v-btn>
        </v-form>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { latLngBounds } from "leaflet";
export default {
  name: "Home",

  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", path: "/Home" },
        { title: "Profile", icon: "mdi-account", path: "/Profile" },
        {
          title: "Payment",
          icon: "mdi-credit-card-multiple",
          path: "/Payment"
        }
      ],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 11,
      center: [0, 0],
      bounds: latLngBounds([
        [40.609147, -83.73746],
        [39.583879, -82.078524]
      ]),
      maxbounds: latLngBounds([
        [41.67639, -84.825106],
        [38.431421, -80.430575]
      ]),
      markerLatLng: [],
      drawer: false,
      destination: ""
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
    LTileLayer,
    LMarker
  }
};
</script>
