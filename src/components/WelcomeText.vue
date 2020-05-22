<template>
  <div class="hello">
    <!--Using passed props   <p>{{msg}}</p> -->
    <img src="../assets/logo.png" alt="Logo image" />
    <div id="buttons">
      <button @click="goLog">Login</button>
      <button @click="goSign">SignUp</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeText",
  methods: {
    goLog() {
      this.$emit("Login");
    },
    goSign() {
      this.$emit("Signup");
    }
  },

  props: {
    // Unused props      msg: String
  }
};
</script>

<style lang="scss" scoped>
@import "./style/Buttons.scss";
</style>
