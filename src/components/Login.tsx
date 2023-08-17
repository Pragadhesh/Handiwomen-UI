import { Card, Divider } from "@mui/material";
import React from "react";
import Person4Icon from "@mui/icons-material/Person4";
import GroupsIcon from "@mui/icons-material/Groups";

const Login = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="grid grid-cols-2 gap-10">
        <Card className="grid grid-rows-8 w-60 h-72 items-center justify-center">
          <div className="flex justify-center text-xl row-span-2 text-lightgrey font-varelaround">
            Manager
          </div>
          <Divider className="flex w-full" />
          <div className="flex justify-center w-full row-span-4">
            <Person4Icon
              color="secondary"
              sx={{
                width: "120px",
                height: "120px",
              }}
            ></Person4Icon>
          </div>
          <div className="flex items-center row-span-2">
            <button className="flex w-32 h-10 bg-pink text-white items-center justify-center font-varelaround text-base font-normal rounded-full border-pink">
              Click here
            </button>
          </div>
        </Card>

        <Card className="grid grid-rows-8 w-60 h-72 items-center justify-center">
          <div className="flex justify-center text-xl row-span-2 text-lightgrey font-varelaround">
            Employee
          </div>
          <Divider className="flex w-full" />
          <div className="flex justify-center w-full row-span-4">
            <GroupsIcon
              color="secondary"
              sx={{
                width: "120px",
                height: "120px",
              }}
            ></GroupsIcon>
          </div>
          <div className="flex items-center row-span-2">
            <button className="flex w-32 h-10 bg-pink text-white items-center justify-center font-varelaround text-base font-normal rounded-full border-pink">
              Click here
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
