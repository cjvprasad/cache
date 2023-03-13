// src/utils/cache.js

const writeToCache = (url: any, data: any) =>
  localStorage.setItem(url, JSON.stringify(data));

const readFromCache = (url: any) => localStorage.getItem(url) || null;

export { readFromCache, writeToCache };
