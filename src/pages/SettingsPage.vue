<template>
  <q-page padding>
    <h6 class="text-center q-mt-none q-mb-md text-subtitle2">
      Como estou me sentindo?
    </h6>
    <div class="row q-col-gutter-md justify-center q-mb-none">
      <div
        v-for="(value, key) in sliderFields"
        :key="key"
        class="col-12 col-sm-6 col-md-4 q-mb-none q-mt-none q-pt-sm"
      >
        <MoodSlider
          :label="labels[key]"
          v-model="userMood[key]"
          :color="userMood.sliderColor"
        />
      </div>
    </div>
    <div class="row justify-center q-mt-sm q-pr-sm q-pl-sm">
      <div class="row col-12 col-sm-8 col-md-6 no-wrap items-start">
        <q-input
          v-model="userMood.observation"
          hint="Use este espaço para dizer alguma coisa"
          outlined
          color="black"
          maxlength="140"
          counter
          class="col"
        />
        <q-btn
          @click="updateMood"
          stack
          size="md"
          label="atualizar"
          icon="refresh"
          class="col-auto q-ml-sm"
          outline
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useUserMoodStore } from "src/stores/user-mood";
import MoodSlider from "components/MoodSlider.vue";
import { useRouter } from "vue-router";

export default {
  name: "SettingsPage",
  components: {
    MoodSlider,
  },
  setup() {
    const userMood = useUserMoodStore();
    const router = useRouter();

    const sliderFields = {
      mood: "Bom Humor",
      hunger: "Fome",
      boredom: "Tédio",
      physicalDisposition: "Disposição Física",
      emotionalDisposition: "Disposição Emocional",
      willingnessToTalk: "Vontade de Falar",
      willingnessToListen: "Disposição para Ouvir",
      beAlone: "Querendo Companhia",
    };

    const updateMood = () => {
      //todo envia pra api
      router.push("/");
    };

    return {
      userMood,
      updateMood,
      sliderFields,
      labels: sliderFields,
    };
  },
};
</script>
