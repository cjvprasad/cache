import axios from "axios";
import { readFromCache, writeToCache } from "./cache";

const getFreshData = async (url: any, cacheResponse = false) => {
  const { data } = await axios.get(url);
  cacheResponse && writeToCache(url, data);
  return data;
};

const getCachedData = (url: any) => readFromCache(url);

export { getCachedData, getFreshData };
