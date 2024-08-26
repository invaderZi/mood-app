<template>
  <q-page padding>
    <h5 class="text-center q-mt-none">Configurações de Humor</h5>
    <div class="row q-col-gutter-md justify-center">
      <div
        v-for="(value, key) in sliderFields"
        :key="key"
        class="col-12 col-sm-6 col-md-4"
      >
        <MoodSlider
          :label="labels[key]"
          v-model="userMood[key]"
          :color="userMood.sliderColor"
        />
      </div>
    </div>
    <div class="row justify-center q-mt-md">
      <q-toggle v-model="userMood.isAlone" label="Sozinho ou Acompanhado" />
    </div>
    <div class="row justify-center q-mt-md">
      <q-input
        v-model="userMood.observation"
        label="Observação"
        type="textarea"
        class="col-12 col-sm-8 col-md-6"
      />
    </div>
    <div class="row justify-center q-mt-md">
      <q-btn color="primary" label="Salvar" @click="$router.push('/')" />
    </div>
  </q-page>
</template>

<script>
import { useUserMoodStore } from "src/stores/user-mood";
import MoodSlider from "components/MoodSlider.vue";

export default {
  name: "SettingsPage",
  components: {
    MoodSlider,
  },
  setup() {
    const userMood = useUserMoodStore();

    const sliderFields = {
      mood: "Humor",
      hunger: "Fome",
      boredom: "Tédio",
      physicalDisposition: "Disposição Física",
      emotionalDisposition: "Disposição Emocional",
      willingnessToTalk: "Vontade de Falar",
      willingnessToListen: "Vontade de Ouvir",
    };

    return {
      userMood,
      sliderFields,
      labels: sliderFields,
    };
  },
};
</script>
