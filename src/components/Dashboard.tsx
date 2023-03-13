import React from "react";
import { Link, useLocation } from "react-router-dom";
const Dashboard = (props: any) => {
  const location = useLocation();
  let data = location.state?.data || null;

  return (
    <>
      <h2 className="mb-4">HI CJ</h2>
      <Link to="/">Go back to Profile</Link>
      {data &&
        data
          .slice(0, 10)
          .map((img: any, i: any) => (
            <img src={img?.url} key={i} alt={img?.title} />
          ))}
      <hr />
    </>
  );
};
export default Dashboard;
