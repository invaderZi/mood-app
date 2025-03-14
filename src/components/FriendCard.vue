<template>
  <div class="q-pa-sm">
    <br />
    <q-card flat class="q-pt-md">
      <q-expansion-item
        expand-separator
        :default-opened="false"
        dense
        hide-expand-icon
      >
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="person" color="grey" text-color="white" />
          </q-item-section>

          <q-item-section>
            <div class="row items-baseline">
              <div class="col-grow">
                <q-item-label
                  class="text-caption text-bold ellipsis q-mb-sm"
                  style="max-width: 150px"
                >
                  {{ user.name }}
                </q-item-label>
              </div>
              <div class="col-auto q-ml-sm">
                <q-item-label caption>{{
                  formatTime(user.timestamp)
                }}</q-item-label>
              </div>
            </div>
            <q-item-label caption class="observation-text">
              {{ user.recado || "...atualizou o mood" }}
            </q-item-label>
          </q-item-section>
        </template>

        <q-card-section>
          <div class="row q-gutter-sm justify-around">
            <div
              v-for="(value, key) in moodProperties"
              :key="key"
              class="column items-center"
            >
              <q-knob
                readonly
                show-value
                :value="value"
                size="30px"
                :color="changeColor(key, value)"
                class="q-mb-xs"
              />
              <q-icon :name="iconMap[key]" size="14px" />
            </div>
          </div>
        </q-card-section>
      </q-expansion-item>
    </q-card>
  </div>
</template>

<script>
import { computed } from "vue";
import { getRelativeTime } from "../util/timeConverter";

export default {
  name: "FriendCard",
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const iconMap = {
      mood: "mood",
      hunger: "fastfood",
      boredom: "sentiment_neutral",
      physicalDisposition: "directions_walk",
      emotionalDisposition: "favorite",
      willingnessToTalk: "mic",
      willingnessToListen: "headphones",
      beAlone: "people",
    };

    const changeColor = (key, value) => {
      const colorMap =
        key === "hunger" || key === "boredom"
          ? { 25: "green-13", 55: "yellow-7", 100: "pink-6" }
          : { 25: "pink-6", 55: "yellow-7", 100: "green-13" };

      return (
        Object.entries(colorMap).find(
          ([threshold]) => value <= threshold
        )?.[1] || "grey"
      );
    };

    const moodProperties = computed(() => ({
      mood: props.user.humor,
      hunger: props.user.fome,
      boredom: props.user.tedio,
      physicalDisposition: props.user.fisica,
      emotionalDisposition: props.user.emocional,
      willingnessToTalk: props.user.falar,
      willingnessToListen: props.user.ouvir,
      beAlone: props.user.companhia,
    }));

    const formatTime = (timestamp) => {
      return getRelativeTime(timestamp);
    };

    return {
      iconMap,
      changeColor,
      moodProperties,
      formatTime,
    };
  },
};
</script>

<style scoped>
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.observation-text {
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  word-break: break-word;
  color: black;
}
</style>
