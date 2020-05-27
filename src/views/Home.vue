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
      <v-container></v-container>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, libero
        dolore. Ullam fugit vitae totam dolores, voluptates impedit suscipit
        error provident corporis, fugiat molestias quos expedita dicta
        asperiores deleniti culpa.
      </p>
    </v-content>
  </v-app>
</template>

<script>
export default {
  created() {
    this.$emit("hide");
  }
};
</script>
