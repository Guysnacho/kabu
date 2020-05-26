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
        <v-form lazy-validation ref="form">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
            full-width
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passRules"
            label="Password"
            type="password"
            required
            full-width
          ></v-text-field>

          <v-btn class="mt-10" rounded color="primary" block @click="validate"
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
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    password: "",
    passRules: [
      v => !!v || "Password is required",
      v => v.length >= 4 || "Password must be longer than 4 characters"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>
