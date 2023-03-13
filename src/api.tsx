import axios from "axios";
import { readFromCache, writeToCache } from "./cache";

// let url = "https://jsonplaceholder.typicode.com/todos/1";
let url = "https://thps.now.sh/api/skaters";
const getFreshData = async (url: string, cacheResponse = false) => {
  const { data } = await axios.get(url);
  cacheResponse && writeToCache(url, data);
  return data;
};

const getCachedData = (url: any) => readFromCache(url);

export { getCachedData, getFreshData };
