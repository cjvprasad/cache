

import axios from "axios";
import React from "react";
import { BrowserRouter, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const l = console.log;
  const urlplc = "https://jsonplaceholder.typicode.com/todos/1";
  let dataplc: any = "";

  let bigData: any = "";
  const cacheName = "Placeholdercache";
  // const cacheNamePromise = caches.open(cacheName);
  const PlcRequest = "/api/plc";

  const handleapi = (url: any) => {
    axios.get(url).then((res) => {
      getData();
      dataplc = res.data;
      const headers = { "Content-Type": "application/json" };
      const newResponseplc = new Response(JSON.stringify(dataplc), {
        headers,
      });
      caches.open(cacheName).then((cache) => {
        cache.put(PlcRequest, newResponseplc);
      });
    });
  };
  const handleplc = () => {
    navigate("/plc");
    // caches.keys().then((res) => l(res));
    caches.open(cacheName).then((cache) => {
      cache.keys().then((arrayofRequest) => l(arrayofRequest));
    });
    caches.open(cacheName).then((cache) => {
      cache.match(PlcRequest).then((response) => {
        if (response) {
          response.text().then((data) => {
            bigData = data;
            // Display the cached data in the UI
            l(data);
          });
        }
      });
    });
    bigData !== " " && handleapi(urlplc);
    l(bigData, "bigdata");
  };
  async function getData() {
    const cacheVersion = 1;
    const cacheName = `myapp-${cacheVersion}`;
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    let cachedData = await getCachedData(cacheName, url);

    if (cachedData) {
      console.log("Retrieved cached data");
      return cachedData;
    }

    console.log("Fetching fresh data");

    const cacheStorage = await caches.open(cacheName);
    await cacheStorage.add(url);
    cachedData = await getCachedData(cacheName, url);

    return cachedData;
  }

  async function getCachedData(cacheName: any, url: any) {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);
    l(cachedResponse, cacheStorage, "hi");
    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    return await cachedResponse.json();
  }
  return (
    <div>
      <h1>App</h1>
      <h3>{bigData?.id}</h3>
      <h3>{bigData?.title}</h3>

      <button onClick={handleplc}>Placeholder</button>
      <button onClick={() => navigate("/ska")}>skater</button>
    </div>
  );
};

export default App;
