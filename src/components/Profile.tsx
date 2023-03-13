import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Profile = (props: any) => {
  const navigate = useNavigate();
  const [first, setfirst] = React.useState("")

  const testurl = "https://jsonplaceholder.typicode.com/photos";

  function handleClick() {
    // Fetch the data from the API
    // Check if the data is available in the cache
    caches.match("img").then(function (response) {
      if (response) {
        // Return the cached data
        console.log("Return the cached data");
        response
          .text()
          .then((data) =>
          // setfirst(data)
            navigate("/dashboard", { state: { data: JSON.parse(data) } })
          );
        // navigate("/dashboard", { state: { data: JSON.parse(data) } });
      } else {
        // Fetch the data from the API
        console.log("Fetch the data from the API");
        fetch(testurl)
          .then((response) => response.json())
          .then((data) => {
            // Store the fetched data in the state
            const headers = { "Content-Type": "application/json" };
            const newResponseplc = new Response(JSON.stringify(data), {
              headers,
            });
            caches.open("my-cachelatest").then(function (cache) {
              cache.put("img", newResponseplc);
            });
            // Use the navigate function to go to the target route
            navigate("/dashboard", { state: { data: data } });
          });
        // return fetch(testurl).then(function (response) {
        //   //log( Cache the data)
        //   caches.open("my-cachelatest").then(function (cache) {
        //     cache.put("img", response.clone());
        //   });
        //   return console.log(response.json(), "responsewithout cahce");
        // });
      }
    });
  }
  console.log(caches.match("img"));
  
  return (
    <>
      <div>
        <Link to="/" state={""}>
          Go to : Profile
        </Link>
      </div>
      <div>
        <button onClick={handleClick}>Dashboard</button>
      </div>
    </>
  );
};
export default Profile;
