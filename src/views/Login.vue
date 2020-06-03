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
import { mapState } from "vuex";

export default {
  name: "Home",

  computed: mapState(["authed"]),

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
        this.$store.dispatch("loginToApp", {
          email: this.user.email,
          password: this.user.password
        });
        this.$store.dispatch("setAuth");
        if (this.authed) {
          this.$router.replace("/Home");
        } else {
          console.log(this.authed);
          alert("You haven't been logged.");
        }
      } else {
        console.log("Login Error");
      }
    }
  }
};
</script>
