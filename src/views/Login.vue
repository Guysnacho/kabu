<template>
  <div class="login">
    <img id="logo" src="@/assets/logo.png" />
    <form class="entries" action>
      <TextInput
        class="boxes"
        :inType="tel"
        :placehold="'Phone Number'"
        :reg="'[0-9]{3}[0-9]{3}[0-9]{4}'"
      />
      <TextInput class="boxes" :inType="password" :placehold="'Password'" />
      <Submit />
    </form>
  </div>
</template>

<script>
import TextInput from "../components/TextInput";
import Submit from "../components/Submit";

export default {
  name: "login",
  data() {
    return {};
  },
  components: {
    TextInput,
    Submit
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: 10;
}

#logo {
  grid-column: 2;
  height: 15em;
}

form {
  margin-top: 20%;
  grid-template-columns: 3;
  gap: 2em;
}

.entries {
  grid-row: 2;
  grid-column: 1/3;
}
</style>
