<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="flex flex-center q-pa-md">
        <div class="login-container q-pa-md">
          <h6 class="text-h6 text-center q-mb-md">Mood App</h6>

          <q-input
            v-model="username"
            label="Username"
            class="q-mb-md"
            outlined
          />

          <q-input
            v-model="password"
            label="Password"
            type="password"
            class="q-mb-md"
            outlined
          />

          <q-btn
            label="Login"
            color="primary"
            @click="login"
            to="/"
            :disable="disableLogin"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  computed: {
    disableLogin() {
      return !(this.username.length > 0 && this.password.length > 0);
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    login() {},
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

@media (max-width: 600px) {
  .login-container {
    max-width: 90%; /* Adjust max-width on smaller screens */
  }
}
</style>
