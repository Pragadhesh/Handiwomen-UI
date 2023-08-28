import {
  CircularProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import VerifiedIcon from "@mui/icons-material/Verified";
import Toolbar from "./Toolbar";
import { BACKEND_URL } from "../constants/backendurl";
import axios from "axios";
import { Employeedetails } from "../interface/Employeedetails";

const Employee = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [name, setName] = useState<number>();
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState(10);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [employees, setEmployees] = useState<Employeedetails[]>([]);

  const handleNameChange = (event: SelectChangeEvent<number>) => {
    setName(event.target.value as number);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSubmit = async () => {
    if (!selectedDate || !name || !type || !quantity) {
      setError(true);
    } else {
      setIsLoading(true);
      setError(false);
      try {
        const response = await axios.post(`${BACKEND_URL}sign`, {
          id: name,
          type: type,
          count: quantity,
          date: dayjs(selectedDate).format("DD-MM-YYYY"),
        });
        if (response.status === 200) {
          setSuccess(true);
          setIsLoading(false);
        }
      } catch (error: any) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BACKEND_URL}employee`);

        const employeeData = response.data;

        setEmployees(employeeData);

        console.log(employees);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <Toolbar></Toolbar>
      {isLoading && (
        <div className="flex w-full h-full justify-center items-center">
          <CircularProgress color="secondary" />
        </div>
      )}
      {!isLoading && !success && (
        <div className="flex w-full h-full justify-center">
          <div className="flex flex-col w-2/5 h-full">
            <div className="grid grid-flow-row gap-2 justify-start pt-5">
              <div className="flex w-full justify-center font-hind text-xl font-bold text-pink">
                Daily Artistry Log
              </div>
              <div className="grid grid-flow-row gap-2 w-full">
                <div className="flex w-full font-montserrat font-bold text-sm">
                  NAME
                  <span className=" text-xs text-pink pl-1">*</span>
                </div>
                <div className="flex w-full">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    displayEmpty
                    color="secondary"
                    onChange={handleNameChange}
                    className="flex w-72"
                  >
                    {employees.map((employee) => (
                      <MenuItem key={employee.id} value={employee.id}>
                        {employee.name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="grid grid-flow-row gap-2 w-full">
                <div className="flex w-full font-montserrat font-bold text-sm">
                  PRODUCT TYPE
                  <span className=" text-xs text-pink pl-1">*</span>
                </div>
                <div className="flex w-full">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    displayEmpty
                    color="secondary"
                    onChange={handleTypeChange}
                    className="flex w-72"
                  >
                    <MenuItem value={"Handicraft"}>Handicraft</MenuItem>
                    <MenuItem value={"Handloom"}>Handloom</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="grid grid-flow-row gap-2 w-full">
                <div className="flex w-full font-montserrat font-bold text-sm">
                  DATE
                  <span className=" text-xs text-pink pl-1">*</span>
                </div>
                <div className="flex w-full">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="flex w-72"
                      value={selectedDate || null}
                      onChange={handleDateChange}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="grid grid-flow-row gap-2 w-full">
                <div className="flex w-full font-montserrat font-bold text-sm">
                  ITEMS CREATED
                  <span className=" text-xs text-pink pl-1">*</span>
                </div>
                <div className="flex w-full">
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    variant="outlined"
                    type="number"
                    className="flex w-72"
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(Number(event.target.value))
                    }
                  />
                </div>
              </div>
              {error && (
                <div className="flex w-full justify-start font-montserrat font-bold text-sm text-pink">
                  Oops! It looks like you missed a few fields.
                </div>
              )}
              <div className="flex h-full w-full justify-center">
                <button
                  className="flex w-28 h-10 bg-pink text-white items-center justify-center font-varelaround text-base font-normal rounded-full border-pink"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {success && (
        <div className="flex w-full h-full justify-center items-center">
          <VerifiedIcon
            color="secondary"
            sx={{
              width: "200px",
              height: "200px",
            }}
          ></VerifiedIcon>
        </div>
      )}
    </div>
  );
};

export default Employee;
