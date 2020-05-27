<template>
  <v-app>
    <v-content>
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
