<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <WelcomeText msg="Welcome to Kabu Kabu" />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeText from "../components/WelcomeText";
export default {
  name: "Home",
  components: {
    WelcomeText
  }
};
</script>
