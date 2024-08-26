<template>
  <q-card class="dashboard-widget">
    <q-card-section>
      <div v-for="(value, key) in displayFields" :key="key" class="q-mb-sm">
        <strong>{{ labels[key] }}:</strong> {{ formatValue(value) }}
      </div>
      <div><strong>Recado:</strong> {{ userMood.observation }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { useUserMoodStore } from "src/stores/user-mood";
import { computed } from "vue";

export default {
  name: "DashboardWidget",
  setup() {
    const userMood = useUserMoodStore();

    const displayFields = computed(() => ({
      mood: userMood.mood,
      hunger: userMood.hunger,
      boredom: userMood.boredom,
      physicalDisposition: userMood.physicalDisposition,
      emotionalDisposition: userMood.emotionalDisposition,
      willingnessToTalk: userMood.willingnessToTalk,
      willingnessToListen: userMood.willingnessToListen,
      beAlone: userMood.beAlone,
    }));

    const labels = {
      mood: "Humor",
      hunger: "Fome",
      boredom: "Tédio",
      physicalDisposition: "Disposição Física",
      emotionalDisposition: "Disposição Emocional",
      willingnessToTalk: "Vontade de Falar",
      willingnessToListen: "Vontade de Ouvir",
      beAlone: "Querendo Companhia",
    };

    const formatValue = (value) => `${value.toFixed(0)}%`;

    return {
      userMood,
      displayFields,
      labels,
      formatValue,
    };
  },
};
</script>

<style scoped>
.dashboard-widget {
  max-width: 300px;
  margin: 0 auto;
}
</style>
