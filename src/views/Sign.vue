<template>
  <v-app>
    <v-content>
      <v-row justify="center">
        <v-img
          alt="Kabu logo"
          src="../assets/logo.png"
          contain="false"
          min-width="10%"
          max-width="45%"
          id="logo"
        />
      </v-row>

      <v-form lazy-validation="true" ref="form">
        <v-col>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Full Name"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="Phone Number"
            required
          ></v-text-field>
        </v-col>

        <v-btn
          class="ma-10"
          rounded="true"
          color="primary"
          width="20%"
          @click="validate"
          v-on="validate"
          >Join Kabu!</v-btn
        >
      </v-form>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",

  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "Name is required"],

    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    phone: "",
    phoneRules: [v => !!v || "Phone number is required"]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        //submit details to server
        //go to the next page
      }
    }
  }
};
</script>
