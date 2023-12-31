import React from "react";
import "./Toolbar.css";
import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <div className="grid grid-cols-4 w-full h-20 bg-white">
      <Link to="/">
        <div className="flex w-60 col-span-1 items-center justify-items-center h-full">
          <div className="flex logo h-full w-full"></div>
        </div>
      </Link>
      <div className="grid grid-flow-col gap-8 col-span-3 justify-center w-full h-full">
        <div className="flex font-varelaround text-base font-normal text-lightgrey self-center">
          <span className="hover-underline-animation">Who we are</span>
        </div>
        <div className="flex font-varelaround text-base font-normal text-lightgrey self-center">
          <span className="hover-underline-animation">What We Do</span>
        </div>
        <div className="flex font-varelaround text-base font-normal text-lightgrey self-center">
          <span className="hover-underline-animation">Announcements</span>
        </div>
        <div className="flex font-varelaround text-base font-normal text-lightgrey self-center">
          <span className="hover-underline-animation">Donate</span>
        </div>
        <div className="flex h-full items-center">
          <Link to="/login">
            <button className="flex w-24 h-10 bg-pink text-white items-center justify-center font-varelaround text-base font-normal rounded-full border-pink">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
