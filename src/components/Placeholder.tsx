import React from "react";
import { useNavigate } from "react-router-dom";

const Placeholder = (props: any) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Placeholder</h1>
      <h3>{props?.dataplc?.id}</h3>
      <h3>{props?.dataplc?.title}</h3>
      <button onClick={() => navigate("/")}> back to APP1</button>
      <button onClick={() => navigate("/ska")}>go to skater</button>
    </div>
  );
};

export default Placeholder;
