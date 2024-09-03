import { api } from "src/boot/axios";

export const getUsers = async () => {
  try {
    const response = await api.get("/usuarios");
    return response.data;
  } catch (error) {
    console.error("Erro ao obter usuários", error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("/usuarios", userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário", error);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/usuarios/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao editar usuário", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/usuarios/${id}`);
    return response;
  } catch (error) {
    console.error("Erro ao deletar usuário", error);
    throw error;
  }
};
