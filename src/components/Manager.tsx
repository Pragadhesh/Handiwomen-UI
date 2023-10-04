import { Card, Divider } from "@mui/material";
import React from "react";
import DatasetIcon from "@mui/icons-material/Dataset";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import Toolbar from "./Toolbar";
import { Link } from "react-router-dom";

const Manager = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Toolbar></Toolbar>

      <div className="flex w-full h-full justify-center items-center">
        <div className="grid grid-cols-2 gap-10">
          <Card className="grid grid-rows-8 w-60 h-72 items-center justify-center">
            <div className="flex justify-center text-xl row-span-2 text-lightgrey font-varelaround">
              Employee Information
            </div>
            <Divider className="flex w-full" />
            <div className="flex justify-center w-full row-span-4">
              <DatasetIcon
                color="secondary"
                sx={{
                  width: "120px",
                  height: "120px",
                }}
              ></DatasetIcon>
            </div>
            <div className="flex items-center justify-center row-span-2">
              <Link to="/manager/empinfo">
                <button className="flex w-32 h-10 bg-pink text-white items-center justify-center font-varelaround text-base font-normal rounded-full border-pink">
                  View details
                </button>
              </Link>
            </div>
          </Card>

          <Card className="grid grid-rows-8 w-60 h-72 items-center justify-center">
            <div className="flex justify-center text-xl row-span-2 text-lightgrey font-varelaround">
              Announcements
            </div>
            <Divider className="flex w-full" />
            <div className="flex justify-center w-full row-span-4">
              <AnnouncementIcon
                color="secondary"
                sx={{
                  width: "120px",
                  height: "120px",
                }}
              ></AnnouncementIcon>
            </div>

            <div className="flex items-center row-span-2">
              <Link to="/announcement">
                <button className="flex w-32 h-10 bg-pink text-white items-center justify-center font-varelaround text-base font-normal rounded-full border-pink">
                  View details
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Manager;
