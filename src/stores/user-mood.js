import { defineStore } from "pinia";

export const useUserMoodStore = defineStore("userMood", {
  state: () => ({
    mood: 3,
    hunger: 3,
    boredom: 3,
    physicalDisposition: 3,
    emotionalDisposition: 3,
    willingnessToTalk: 3,
    willingnessToListen: 3,
    isAlone: true,
    observation: "",
    sliderColor: "black",
  }),
  actions: {
    updateMood(field, value) {
      this[field] = value;
    },
    setObservation(text) {
      this.observation = text;
    },
    toggleAlone() {
      this.isAlone = !this.isAlone;
    },
  },
});
