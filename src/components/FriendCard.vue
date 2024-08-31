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
            <q-item-section side>
              <q-avatar
                icon="person"
                color="grey"
                text-color="white"
                size="40px"
              />
            </q-item-section>
            <q-item-section>
              <div class="row no-wrap items-baseline justify-between">
                <div class="col-grow">
                  <div class="text-subtitle2 ellipsis" style="max-width: 150px">
                    {{ username }}
                  </div>
                  <div class="recado-text">
                    {{ text.length > 0 ? text : "...atualizou o mood" }}
                  </div>
                </div>
                <span class="text-caption text-grey q-ml-sm">{{ time }}</span>
              </div>
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
                  :color="changeColor(key, value)"
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
    time: {
      type: String,
      default: "today",
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

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
