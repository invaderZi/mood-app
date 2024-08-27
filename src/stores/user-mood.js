import { defineStore } from "pinia";

export const useUserMoodStore = defineStore("userMood", {
  state: () => ({
    mood: 50,
    hunger: 50,
    boredom: 50,
    physicalDisposition: 50,
    emotionalDisposition: 50,
    willingnessToTalk: 50,
    willingnessToListen: 50,
    beAlone: 50,
    observation: "",
    sliderColor: "black",
    name: "Fulano",
  }),
  actions: {
    updateMood(field, value) {
      this[field] = value;
    },
    setObservation(text) {
      this.observation = text;
    },
  },
});
