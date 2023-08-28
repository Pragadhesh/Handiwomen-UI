import React, { useState } from "react";
import Toolbar from "./Toolbar";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  createStyles,
  makeStyles,
  styled,
  tableCellClasses,
} from "@mui/material";
import Person4Icon from "@mui/icons-material/Person4";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Activitydetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(true);

  function createData(
    date: string,
    type: string,
    itemscreated: number,
    status: string
  ) {
    return { date, type, itemscreated, status };
  }

  const rows = [
    createData("Frozen yoghurt", "handicraft", 6.0, "Pending"),
    createData("Ice cream sandwich", "handloom", 9.0, "Approved"),
    createData("Eclair", "handicraft", 16.0, "Approved"),
    createData("Cupcake", "handloom", 3.7, "Approved"),
    createData("Gingerbread", "handicraft", 16.0, "Pending"),
  ];
  return (
    <div className="flex w-full h-full flex-col">
      <Toolbar></Toolbar>
      {isLoading && (
        <div className="flex w-full h-full justify-center items-center">
          <CircularProgress color="secondary" />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col w-full h-full">
          <div className="grid grid-cols-3 w-full pl-5 pt-5">
            <Link to="/manager/empinfo">
              <button
                color="secondary"
                className="w-32 h-10 bg-pink text-white font-varelaround font-bold text-sm rounded justify-start"
              >
                Back
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-4 w-full h-full">
            <div className="flex col-span-1 w-full h-full justify-center items-center">
              <div className="grid grid-flow-row gap-5 justify-center w-32">
                <Person4Icon
                  color="secondary"
                  sx={{
                    width: "120px",
                    height: "120px",
                  }}
                ></Person4Icon>
                <div className="grid grid-cols-2">
                  <div className="flex w-full font-montserrat font-bold text-sm">
                    Name:
                  </div>
                  <div className="flex w-full text-pink font-montserrat font-bold text-sm">
                    Sita
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex w-full font-montserrat font-bold text-sm">
                    Email:
                  </div>
                  <div className="flex w-full text-pink font-montserrat font-bold text-sm">
                    Sita14@gmail.com
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex w-full font-montserrat font-bold text-sm">
                    Age:
                  </div>
                  <div className="flex w-full text-pink font-montserrat font-bold text-sm">
                    27
                  </div>
                </div>
              </div>
            </div>
            <div className="flex col-span-3 w-full h-full justify-center items-center">
              {!result && (
                <div className="flex font-varelaround text-xl text-pink">
                  No data found
                </div>
              )}
              {result && (
                <div className="flex w-4/5 justify-center h-full p-5">
                  <TableContainer component={Paper} className="flex w-60">
                    <Table>
                      <TableHead>
                        <StyledTableRow>
                          <StyledTableCell>Date</StyledTableCell>
                          <StyledTableCell align="right">Type</StyledTableCell>
                          <StyledTableCell align="right">
                            Items Created
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Status
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow
                            key={row.date}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.date}
                            </TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">
                              {row.itemscreated}
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activitydetails;
