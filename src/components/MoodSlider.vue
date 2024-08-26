<template>
  <div class="mood-slider q-pa-sm">
    <div class="text-subtitle1 text-center q-mb-sm">{{ label }}</div>
    <div class="row justify-center items-center">
      <q-slider
        v-model="localValue"
        :color="color"
        :min="1"
        :max="5"
        :step="1"
        label
        label-always
        snap
        markers
        @change="updateValue"
        class="col-grow"
        style="max-width: 250px"
      />
    </div>
    <div class="text-caption text-center q-mt-xs">
      {{ moodLabels[localValue - 1] }}
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "MoodSlider",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const localValue = ref(Math.round(props.modelValue * 4) + 1);
    const moodLabels = ["Muito Baixo", "Baixo", "Médio", "Alto", "Muito Alto"];

    watch(
      () => props.modelValue,
      (newValue) => {
        localValue.value = Math.round(newValue * 4) + 1;
      }
    );

    const updateValue = (value) => {
      emit("update:modelValue", (value - 1) / 4);
    };

    return {
      localValue,
      updateValue,
      moodLabels,
    };
  },
};
</script>

<style scoped>
.mood-slider {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
</style>
