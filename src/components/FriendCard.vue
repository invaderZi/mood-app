<template>
  <div class="dashboard-widgets q-mt-md q-ml-md q-mr-md">
    <q-card class="dashboard-widget q-mb-sm" flat bordered>
      <q-card-section>
        <q-expansion-item
          expand-separator
          :default-opened="false"
          dense
          flat
          hide-expand-icon
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar icon="bluetooth" color="primary" text-color="white" />
              <span class="text-caption text-bold">
                {{ username }}
              </span>
            </q-item-section>
            <q-item-section>
              <span class="recado-text">{{ text }}</span>
            </q-item-section>
          </template>

          <div class="row no-wrap q-col-gutter-md justify-around q-mt-md">
            <div
              v-for="(value, key) in moodPropreties"
              :key="key"
              class="col-shrink q-mb-sm"
            >
              <div class="column items-center">
                <q-knob
                  readonly
                  show-value
                  class="text-black-blue q-mb-sm"
                  :value="value"
                  size="30px"
                  :color="changeColor(value)"
                />
                <i class="material-icons icon-xsmall">{{ iconMap[key] }}</i>
              </div>
            </div>
          </div>
        </q-expansion-item>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "FriendCard",
  props: {
    username: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    moodPropreties: {
      type: Object,
      default: () => ({
        mood: 50,
        hunger: 50,
        boredom: 50,
        physicalDisposition: 50,
        emotionalDisposition: 50,
        willingnessToTalk: 50,
        willingnessToListen: 50,
        beAlone: 50,
      }),
    },
  },
  setup() {
    const iconMap = {
      mood: "mood", // Bom Humor
      hunger: "fastfood", // Fome
      boredom: "sentiment_neutral", // Tédio
      physicalDisposition: "directions_walk", // Disposição Física
      emotionalDisposition: "favorite", // Disposição Emocional
      willingnessToTalk: "mic", // Vontade de Falar
      willingnessToListen: "headphones", // Disposição para Ouvir
      beAlone: "people", // Querendo Companhia
    };

    const changeColor = (value) => {
      const colorMap = {
        25: "pink-6",
        55: "yellow-7",
        100: "green-13",
      };

      for (const threshold in colorMap) {
        if (value <= threshold) {
          return colorMap[threshold];
        }
      }
    };

    return {
      iconMap,
      changeColor,
    };
  },
};
</script>

<style scoped>
.recado-text {
  word-break: break-all;
}

.icon-xsmall {
  font-size: 14px; /* Tamanho pequeno dos ícones */
}
</style>
