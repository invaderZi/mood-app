import { api } from "src/boot/axios";

export const getMoods = async () => {
  try {
    const response = await api.get("/mood");
    return response.data;
  } catch (error) {
    console.error("Erro ao obter mood list", error);
    throw error;
  }
};
