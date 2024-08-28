<template>
  <div class="mood-slider q-pa-sm">
    <div class="row justify-center">
      <div class="col-12 col-sm-8 col-md-6">
        <div class="row items-center no-wrap">
          <div class="col-4 text-subtitle2 q-pr-md">{{ label }}</div>
          <div class="col-8 row items-center no-wrap q-pa-none q-mt-md">
            <q-slider
              v-model="localValue"
              :color="color"
              :min="1"
              :max="100"
              :step="1"
              label
              snap
              dense
              class="q-mr-sm"
              @change="updateValue"
            />
            <div class="text-caption" style="margin-right: 8px">
              {{ "%" }}
            </div>
          </div>
        </div>
      </div>
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
    const localValue = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newValue) => {
        localValue.value = newValue;
      }
    );

    const updateValue = (value) => {
      emit("update:modelValue", value);
    };

    return {
      localValue,
      updateValue,
    };
  },
};
</script>
