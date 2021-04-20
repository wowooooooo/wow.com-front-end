import axios from "axios";

export const getJueJinRecommended = (data) =>
  axios.post("api/recommend_api/v1/article/recommend_all_feed", data);
