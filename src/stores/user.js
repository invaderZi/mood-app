import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogged: false,
    id: 1, // TODO SUBSTITUIR ESSE MOCK POR UMA CHAMADA DE API APOS O LOGIN AND IMPLEMENTAR O CADASTRO
    name: "fulano silva sauro noem grandes",
    username: "fulano",
    email: "fulano@mail.com",
    sliderColor: "black",
  }),
  actions: {
    updateUser(field, value) {
      this[field] = value;
    },
    setLoggedIn(status) {
      this.isLogged = status;
    },
  },
});
