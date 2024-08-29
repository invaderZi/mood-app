<template>
  <q-layout view="hHh lpR fFf">
    <q-footer class="bg-white text-black" bordered>
      <q-toolbar class="justify-around">
        <q-btn to="/" flat icon="home" size="lg" class="q-ma-none" />
        <q-btn
          @click="openSearch"
          flat
          size="lg"
          icon="search"
          class="q-ma-none"
        />
        <q-toolbar-title
          shrink
          @click="goLogin"
          class="text-center text-subtitle2 text-bold"
        >
          Mood
        </q-toolbar-title>
        <q-btn
          @click="goFriends"
          flat
          size="lg"
          icon="people"
          class="q-ma-none"
        />
        <q-btn
          @click="goSettings"
          flat
          size="lg"
          icon="person"
          class="q-ma-none"
        />
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const router = useRouter();

    const goSettings = () => {
      router.push("/profile");
    };

    const goLogin = () => {
      router.push("/login");
    };

    return {
      goSettings,
      goLogin,
    };
  },
});
</script>
