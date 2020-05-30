<template>
  <v-app>
    <v-content>
      <v-row justify="center">
        <v-img
          alt="Kabu logo"
          src="../assets/logo.png"
          contain
          min-width="10%"
          max-width="45%"
          id="logo"
        />
      </v-row>

      <v-row justify="center">
        <v-form lazy-validation ref="form" @submit.prevent="validate">
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="Email"
            required
            full-width
            type="email"
            id="email"
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            :rules="passRules"
            label="Password"
            type="password"
            required
            full-width
            id="current-password"
          ></v-text-field>

          <v-btn
            class="mt-10"
            rounded
            color="primary"
            block
            @click="validate"
            type="submit"
            >Login</v-btn
          >
        </v-form>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data: () => ({
    user: {
      email: "",
      password: ""
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    passRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Must be at least than 8 characters"
    ]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        //Authenticate and login
        this.$store.dispatch("loginToApp");
        this.$emit("hide");
        this.$router.replace("/Home");
      } else {
        console.log("Login Error");
      }
    }
  }
};
</script>
