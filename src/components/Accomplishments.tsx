import React from "react";
import "./Accomplishments.css";
import WomanIcon from "@mui/icons-material/Woman";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import GroupsIcon from "@mui/icons-material/Groups";

const Accomplishments = () => {
  return (
    <div className="flex w-full h-full meeting">
      <div className="flex w-full h-full items-center justify-start">
        <div className="flex flex-col pl-5">
          <div className="grid grid-flow-row">
            <div className="flex text-3xl font-opensans text-white font-normal">
              Handmade with
            </div>
            <div className="flex text-5xl font-opensans text-pink font-bold">
              Love
            </div>
          </div>
          <div className="grid grid-flow-row">
            <div className="flex text-3xl font-opensans text-white font-normal">
              Empowered by
            </div>
            <div className="flex text-5xl font-opensans text-pink font-bold">
              Women
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full items-center">
        <div className="grid grid-flow-row gap-10 w-full justify-end items-center">
          <div className="grid grid-flow-col">
            <div className="flex justify-center h-full">
              <WomanIcon
                color="secondary"
                sx={{
                  width: "70px",
                  height: "70px",
                }}
              ></WomanIcon>
            </div>
            <div className="flex flex-col h-full justify-center">
              <div className="flex text-5xl text-white justify-center">
                20,000
              </div>
              <div className="flex justify-center text-base font-varelaround text-white">
                Women Impacted
              </div>
            </div>
          </div>

          <div className="grid grid-flow-col">
            <div className="flex justify-center h-full">
              <EmojiEventsIcon
                color="secondary"
                sx={{
                  width: "70px",
                  height: "70px",
                }}
              ></EmojiEventsIcon>
            </div>
            <div className="flex flex-col h-full justify-center">
              <div className="flex text-5xl text-white justify-center">14</div>
              <div className="flex justify-center text-base font-varelaround text-white">
                Exhibitions Organized
              </div>
            </div>
          </div>

          <div className="grid grid-flow-col">
            <div className="flex justify-center h-full">
              <LocalFloristIcon
                color="secondary"
                sx={{
                  width: "70px",
                  height: "70px",
                }}
              ></LocalFloristIcon>
            </div>
            <div className="flex flex-col h-full justify-center">
              <div className="flex text-5xl text-white justify-center">
                35,000
              </div>
              <div className="flex justify-center text-base font-varelaround text-white">
                Products Created
              </div>
            </div>
          </div>

          <div className="grid grid-flow-col">
            <div className="flex justify-center h-full">
              <GroupsIcon
                color="secondary"
                sx={{
                  width: "70px",
                  height: "70px",
                }}
              ></GroupsIcon>
            </div>
            <div className="flex flex-col h-full justify-center">
              <div className="flex text-5xl text-white justify-center">150</div>
              <div className="flex justify-center text-base font-varelaround text-white">
                Number of Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
