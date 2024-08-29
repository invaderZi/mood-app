import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: 1,
    name: "teste",
    username: "fulano",
    email: "fulano@mail.com",
    sliderColor: "black",
  }),
  actions: {
    updateUser(field, value) {
      this[field] = value;
    },
  },
});
