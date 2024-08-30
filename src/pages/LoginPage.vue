<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="flex flex-center q-pa-md">
        <div class="login-container q-pa-md">
          <div class="text-h6 text-center text-subtitle1 text-bold q-mb-md">
            Mood
          </div>
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
          <div class="row">
            <q-btn
              class="col-6 fit q-mt-md"
              label="Login"
              :color="disableLogin ? 'grey' : 'black'"
              @click="login"
              :disable="disableLogin"
              size="16px"
            />
            <q-btn
              class="col-6 fit q-mt-md"
              label="Register"
              text-color="primary"
              color="white"
              @click="cadastro"
              flat
              size="16px"
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();
    const userStore = useUserStore();
    const router = useRouter();
    const username = ref("");
    const password = ref("");

    const disableLogin = computed(() => {
      return !(username.value.length > 0 && password.value.length > 0);
    });

    const login = async () => {
      try {
        // Simulando um login bem-sucedido
        if (username.value == userStore.username) {
          userStore.setLoggedIn(true);

          await new Promise((resolve) => setTimeout(resolve, 1000));

          triggerPositive("Welcome " + userStore.username);
          router.push("/");
        } else {
          throw new Error("invalid credentials");
        }
      } catch (error) {
        console.error("Erro de login:", error);
        triggerNegative("Invalid Credentials");
      }
    };

    const cadastro = () => {
      console.log("Navegar para a página de registro");
    };

    const triggerPositive = (message) => {
      $q.notify({
        type: "positive",
        message: message,
        position: "top",
      });
    };

    const triggerNegative = (message) => {
      $q.notify({
        type: "negative",
        message: message,
        position: "top",
      });
    };

    return {
      username,
      password,
      disableLogin,
      login,
      cadastro,
      $q,
      triggerNegative,
      triggerPositive,
    };
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
    max-width: 90%;
  }
}
</style>
