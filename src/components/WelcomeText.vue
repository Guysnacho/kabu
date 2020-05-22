<template>
  <div class="hello">
    <!--Using passed props   <p>{{msg}}</p> -->
    <div id="buttons">
      <button class="button">
        <router-link to="About" id="login">Login</router-link>
      </button>
      <button class="button">
        <router-link to="About" id="signup">SignUp</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeText",
  props: {
    // Unused props      msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$text: #f5f2f5;
$fill: #27aecb;

#buttons {
  display: grid;
  grid-template-rows: 100% 100%;
  gap: 0.29em;
  width: 50%;
  margin-left: 25%;
}

.button {
  height: 2.7em;
  text-shadow: 0px 0px 3px black;
  padding: 0;
  box-shadow: 0.5em 0.5em 6px #00000062;
  background: $fill;
  color: $text;
  border: none;
  border-radius: 25px 25px 25px 0px;
}

.button:hover {
  box-shadow: 0.5em 0.5em 6px #00000062;
  background: #b85c5a;
  color: $text;
  border: none;
  border-radius: 25px 25px 25px 0px;
}

login:visited {
  text-decoration: none;
}
</style>
