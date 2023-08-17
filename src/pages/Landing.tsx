import React from "react";
import Toolbar from "../components/Toolbar";
import Accomplishments from "../components/Accomplishments";
import Login from "../components/Login";

const Landing = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Toolbar></Toolbar>
      <Login></Login>
    </div>
  );
};

export default Landing;
