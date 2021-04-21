import axios from "axios";

const _ = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});

export const getJueJinRecommended = (data) =>
  _.post("juejin/recommend_api/v1/article/recommend_all_feed", data);

export const getZhiHuHotList = () =>
  _.get("zhihu/api/v3/feed/topstory/hot-lists/total?limit=50&desktop=true");

export const getWeiboTop = () => _.get("weibo/top");
