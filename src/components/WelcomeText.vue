<template>
  <div class="hello">
    <!--Using passed props   <p>{{msg}}</p> -->
    <img src="../assets/logo.png" alt="Kabu logo" />

    <div id="buttons">
      <div id="login">
        <button @click="$emit('login')">Login</button>
      </div>

      <div id="signup">
        <button @click="$emit('sign')">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeText",
  methods: {},

  props: {
    // Unused props      msg: String
  }
};
</script>

<style lang="scss" scoped>
@import "./style/Buttons.scss";
</style>
