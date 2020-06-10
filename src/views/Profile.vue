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

    <v-content>
      <v-row justify="center">
        <v-avatar size="75">
          <img src="https://randomuser.me/api/portraits/men/64.jpg" />
        </v-avatar>
      </v-row>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
    </v-content>
  </v-app>
</template>

<script>
export default {
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
      drawer: false
    };
  }
};
</script>
