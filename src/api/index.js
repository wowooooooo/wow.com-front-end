import axios from "axios";

const _ = axios.create({
  baseURL: import.meta.env.VITE_JUEJIN_BASEURL,
});

export const getJueJinRecommended = (data) =>
  _.post("juejin/recommend_api/v1/article/recommend_all_feed", data);
