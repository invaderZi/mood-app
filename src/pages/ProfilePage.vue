<template>
  <q-page class="flex flex-center">
    <DashboardWidget />
  </q-page>
</template>

<script>
import DashboardWidget from "components/DashboardWidget.vue";

export default {
  name: "ProfilePage",
  components: {
    DashboardWidget,
  },
};
</script>
