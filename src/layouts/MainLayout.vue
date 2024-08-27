<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-black" bordered>
      <q-toolbar>
        <q-btn to="/" flat icon="home" class="q-mr-xs" />
        <q-toolbar-title class="text-center text-subtitle2">
          Mood
        </q-toolbar-title>
        <q-btn @click="goSettings" flat icon="person" />
      </q-toolbar>
    </q-header>
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
      router.push("/settings");
    };

    return {
      goSettings,
    };
  },
});
</script>
