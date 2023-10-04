import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import {
  Box,
  Card,
  CircularProgress,
  InputBase,
  Modal,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as EmailValidator from "email-validator";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Employeedetails } from "../interface/Employeedetails";
import axios from "axios";
import { BACKEND_URL } from "../constants/backendurl";
import { Link } from "react-router-dom";

const addemployeemodalstyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #E10982",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const Employeeinformation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);

  const [employees, setEmployees] = useState<Employeedetails[]>([]);

  const [empid, setEmpid] = useState<number>();

  const [name, setName] = useState("");
  const [age, setAge] = useState<Number>();

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const [formerror, setFormError] = useState(false);

  const [success, setSuccess] = useState(false);
  const [isaddEmpLoading, setIsAddEmpLoading] = useState(false);

  const validateEmail = (inputEmail: any) => {
    return EmailValidator.validate(inputEmail);
  };

  const handleEmailChange = (event: any) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (validateEmail(newEmail)) {
      setError(false);
      setHelperText("");
    } else {
      setError(true);
      setHelperText("Invalid email format");
    }
  };

  const addEmployeeOpen = () => {
    setAddEmployeeModal(true);
  };

  const addEmployeeClose = () => {
    setAddEmployeeModal(false);
  };

  const handleSubmit = async () => {
    if (!name || error || !age) {
      setFormError(true);
    } else {
      setFormError(false);
      setIsAddEmpLoading(true);
      try {
        const response = await axios.post(`${BACKEND_URL}addemployee`, {
          name: name,
          age: age,
          email: email,
        });
        if (response.status === 200) {
          setSuccess(true);
          setIsAddEmpLoading(false);
        }
      } catch (error: any) {
        console.log(error);
        setIsAddEmpLoading(false);
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
      {!isLoading && (
        <div className="flex flex-col w-full h-full">
          {addEmployeeModal && (
            <Modal open={addEmployeeModal} onClose={addEmployeeClose}>
              <Box sx={addemployeemodalstyle}>
                {!isaddEmpLoading && !success && (
                  <div className="flex w-full h-full flex-col">
                    <div className="flex w-full justify-center font-hind text-xl font-bold text-pink">
                      Employee Details
                    </div>
                    <div className="grid grid-flow-row w-full gap-3 p-5">
                      <div className="grid grid-flow-row gap-2 w-full">
                        <div className="flex w-full font-montserrat font-bold text-sm">
                          NAME
                          <span className=" text-xs text-pink pl-1">*</span>
                        </div>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          color="secondary"
                          className="flex w-72"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </div>
                      <div className="grid grid-flow-row gap-2 w-full">
                        <div className="flex w-full font-montserrat font-bold text-sm">
                          Email
                          <span className=" text-xs text-pink pl-1">*</span>
                        </div>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          color="secondary"
                          className="flex w-72"
                          value={email}
                          onChange={handleEmailChange}
                          error={error}
                          helperText={helperText}
                        />
                      </div>
                      <div className="grid grid-flow-row gap-2 w-full">
                        <div className="flex w-full font-montserrat font-bold text-sm">
                          Age
                          <span className=" text-xs text-pink pl-1">*</span>
                        </div>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          color="secondary"
                          className="flex w-72"
                          type="number"
                          value={age}
                          onChange={(event) =>
                            setAge(Number(event.target.value))
                          }
                        />
                      </div>
                      {formerror && (
                        <div className="flex w-full justify-start font-montserrat font-bold text-sm text-pink">
                          Oops! It looks like you missed a few fields.
                        </div>
                      )}
                    </div>
                    <div className="flex w-full justify-center h-20 items-center">
                      <button
                        color="secondary"
                        className=" flex items-center justify-center w-32 h-10 bg-pink text-white font-varelaround font-bold text-sm rounded"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
                {isaddEmpLoading && (
                  <div className="flex w-full h-full items-center justify-center">
                    <CircularProgress color="secondary" />
                  </div>
                )}
                {success && (
                  <div className="flex w-full h-full items-center justify-center">
                    <VerifiedIcon
                      color="secondary"
                      sx={{
                        width: "150px",
                        height: "150px",
                      }}
                    ></VerifiedIcon>
                  </div>
                )}
              </Box>
            </Modal>
          )}
          <div className="grid grid-cols-3 w-full pl-5 pt-5">
            <button
              color="secondary"
              className="w-32 h-10 bg-pink text-white font-varelaround font-bold text-sm rounded justify-start"
              onClick={addEmployeeOpen}
            >
              Add Employee
            </button>
            <div className="flex justify-center w-full">
              <div className="flex pl-3 w-72 h-10 rounded border-2 border-limegreen items-center">
                <SearchIcon color="secondary"></SearchIcon>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Employee"
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row justify-center gap-5 p-10">
            {employees
              .filter((employee) =>
                employee.name
                  .toLocaleLowerCase()
                  .includes(searchString.toLowerCase())
              )
              .map((employee) => (
                <Card className="grid grid-cols-8 gap-5 w-full h-20">
                  <div className="flex justify-start items-center text-xl font-bold col-span-3 text-pink font-varelaround pl-5">
                    {employee.name}
                  </div>
                  <div className="flex justify-start items-center text-base font-bold col-span-3 text-lightgrey font-varelaround">
                    {employee.email}
                  </div>
                  <div className="flex items-center justify-start col-span-2 pr-2">
                    <Link to={`/manager/empinfo/${employee.id}`}>
                      <button className="flex w-28 h-10 bg-pink text-white items-center justify-center font-varelaround text-sm font-normal rounded border-pink">
                        View Details
                      </button>
                    </Link>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Employeeinformation;
