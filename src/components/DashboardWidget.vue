<template>
  <div class="dashboard-widgets q-mt-none q-ml-md q-mr-md">
    <div class="text-subtitle text-bold q-mb-md">mood de {{ user.name }}</div>
    <q-card class="dashboard-widget q-mb-sm">
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div
            v-for="(value, key) in displayFields"
            :key="key"
            class="col-6 q-mb-sm"
          >
            <div class="column items-center">
              <h6 class="text-caption q-pa-none q-ma-none">
                {{ labels[key] }}
              </h6>

              <q-knob
                readonly
                show-value
                class="text-black-blue q-mt-sm"
                :value="value"
                size="60px"
                :color="changeColor(key, value)"
              />
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="dashboard-widget">
      <q-card-section>
        <div class="recado-wrapper">
          <strong class="text-subtitle2">Recado: </strong>
          <span class="recado-text">{{ userMood.observation }}</span>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useUserMoodStore } from "src/stores/user-mood";
import { useUserStore } from "src/stores/user";

import { computed } from "vue";

export default {
  name: "DashboardWidget",
  setup() {
    const userMood = useUserMoodStore();
    const user = useUserStore();

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
      mood: "Bom Humor",
      hunger: "Fome",
      boredom: "Tédio",
      physicalDisposition: "Disposição Física",
      emotionalDisposition: "Disposição Emocional",
      willingnessToTalk: "Vontade de Falar",
      willingnessToListen: "Disposição para Ouvir",
      beAlone: "Querendo Companhia",
    };

    const changeColor = (key, value) => {
      let colorMap;

      if (key == "hunger" || key == "boredom") {
        colorMap = {
          25: "green-13",
          55: "yellow-7",
          100: "pink-6",
        };
      } else {
        colorMap = {
          25: "pink-6",
          55: "yellow-7",
          100: "green-13",
        };
      }

      for (const threshold in colorMap) {
        if (value <= threshold) {
          return colorMap[threshold];
        }
      }
    };

    return {
      userMood,
      displayFields,
      labels,
      changeColor,
      user,
    };
  },
};
</script>

<style scoped>
.recado-wrapper {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.recado-text {
  word-break: break-all;
}
</style>
