import React, { useState } from "react";
import Toolbar from "./Toolbar";
import { Link } from "react-router-dom";
import { CircularProgress, TextField } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import axios from "axios";
import { BACKEND_URL } from "../constants/backendurl";

const Announcement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}announcement`, {
        message: message,
      });
      if (response.status === 200) {
        setSuccess(true);
        setIsLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Toolbar></Toolbar>
      {isLoading && (
        <div className="flex w-full h-full justify-center items-center">
          <CircularProgress color="secondary" />
        </div>
      )}
      {!isLoading && !success && (
        <div className="flex w-full h-full flex-col">
          <div className="grid grid-cols-3 w-full pl-5 pt-5">
            <Link to="/manager">
              <button
                color="secondary"
                className="w-32 h-10 bg-pink text-white font-varelaround font-bold text-sm rounded justify-start"
              >
                Back
              </button>
            </Link>
          </div>
          <div className="flex w-full h-full justify-center">
            <div className="flex flex-col w-2/5 pt-20 h-full">
              <div className="flex w-full justify-center font-hind text-2xl font-bold text-pink">
                Create Announcement
              </div>
              <div className="flex pt-8 ">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  className="flex w-full h-5"
                  placeholder="Enter subject of the announcement"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
              <div className="flex pt-28 w-full justify-center h-20 items-center">
                <button
                  color="secondary"
                  className=" flex items-center justify-center w-32 h-10 bg-pink text-white font-varelaround font-bold text-sm rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {success && !isLoading && (
        <div className="flex flex-col w-full h-full items-center justify-center">
          <CampaignIcon
            color="secondary"
            sx={{
              width: "250px",
              height: "250px",
            }}
          ></CampaignIcon>
          <div className="flex w-full justify-center font-hind text-2xl font-bold text-pink">
            Announcement sent successfully
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcement;
