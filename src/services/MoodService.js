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

export const postMood = async (mood) => {
  const moodToApi = parseMoodToApiFormat(mood);
  try {
    return await api.post("/mood", moodToApi);
  } catch (error) {
    console.error("Erro ao postar um mood", error);
    throw error;
  }
};

function parseMoodToApiFormat(mood) {
  const moodApiFotmat = {
    userId: mood.userId,
    humor: mood.mood,
    fome: mood.hunger,
    tedio: mood.boredom,
    fisica: mood.physicalDisposition,
    emocional: mood.emotionalDisposition,
    falar: mood.willingnessToTalk,
    ouvir: mood.willingnessToListen,
    companhia: mood.beAlone,
    recado: mood.observation,
  };
  return moodApiFotmat;
}
