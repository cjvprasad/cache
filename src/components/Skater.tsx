import React from "react";
import { useNavigate } from "react-router-dom";

const Skater = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Skater</h1>
      <button onClick={() => navigate("/")}> back to APP1</button>
      <button onClick={() => navigate("/plc")}>go to Placeholder</button>
    </div>
  );
};

export default Skater;
