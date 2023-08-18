import React from "react";
import Toolbar from "../components/Toolbar";
import Accomplishments from "../components/Accomplishments";
import Login from "../components/Login";
import Employee from "../components/Employee";

const Landing = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Toolbar></Toolbar>
      <Accomplishments></Accomplishments>
    </div>
  );
};

export default Landing;
