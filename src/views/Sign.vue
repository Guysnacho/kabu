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

      <v-form lazy-validation ref="form" @submit.prevent="validate">
        <v-col>
          <v-text-field
            v-model="user.name"
            :rules="nameRules"
            label="Full Name"
            type="name"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="Email"
            type="email"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="user.password"
            :rules="passRules"
            label="Password"
            type="password"
            hint="At least 7 characters"
            aria-autocomplete="new-password"
            counter
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="confirm"
            :rules="confirmRules.concat(passCheck)"
            label="Confirm password"
            type="password"
            required
            aria-autocomplete="new-password"
          ></v-text-field>
        </v-col>

        <v-row justify="center">
          <v-btn
            class="ma-10"
            rounded
            color="primary"
            width="20%"
            @click="validate"
            type="submit"
            >Join Kabu!</v-btn
          >
        </v-row>
      </v-form>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",

  data: () => ({
    user: {
      name: "",
      email: "",
      password: ""
    },

    nameRules: [v => !!v || "Name is required"],

    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    confirm: "",
    passRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Password must be at least than 8 characters"
    ],

    confirmRules: [v => !!v || "Password is required"]
  }),

  methods: {
    goNext() {
      this.$router.replace("/sign/confirm");
    },
    validate() {
      if (this.$refs.form.validate()) {
        //submit details to server Must be asynchronius
        this.$store.dispatch("signUp", {
          email: this.user.email,
          password: this.user.password
        });
        //go to the next page
        this.goNext();
      } else {
        console.log("Invalid form");
      }
    },
    passCheck(value) {
      // eslint-disable-next-line
      return this.user.password === value;
    }
  }
};
</script>
