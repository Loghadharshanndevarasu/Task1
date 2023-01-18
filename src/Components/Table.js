import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';

const Table1 = () => {
  function createData(
    Pool,
    Poolowner,
    Poolname,
    Pooldes,
    Poolstart,
    Assests,
    StartDate,
    Action
  ) {
    return {
      Pool,
      Poolowner,
      Poolname,
      Pooldes,
      Poolstart,
      Assests,
      StartDate,
      Action,
    };
  }

  const rows = [
    createData(
      "Q1W2E3R4T5Y6U7",
      "AAAA",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData(
      "Q1W2E3R4T5Y6U8",
      "BBBB",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData(
      "Q1W2E3R4T5Y6U1",
      "CCCC",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData("Q1W2E3R4T5Y6U2", "DDDD", "AAAA", "AAAA", 4, "    ", "....."),
    createData("LOGGY", "YYYY", "AAAA", "AAAA", 4, "11-07-22", "....."),
    createData(
      "Q1W2E3R4T5Y6U5",
      "OOOO",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData(
      "Q1W2E3R4T5Y6U6",
      "PPPP",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData(
      "Q1W2E3R4T5Y6U9",
      "LOLO",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData(
      "Q1W2E3R4T5Y6U0",
      "POPO",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData(
      "Q1W2E3R4T5Y4U7",
      "WEWE",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData(
      "Q1W2E3R4T8Y6U7",
      "YGYG",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData(
      "Q1W2E3R5T5Y6U7",
      "IOIO",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
    createData(
      "Q1W2E3R4T5Y0U7",
      "WERT",
      "AAAA",
      "AAAA",
      4,
      "11-07-22",
      "....."
    ),
  ];

  const [find, setFind] = useState("");

  return (
    <div>
        <div style={{display:"flex "}}><Button variant="disabled">ASSIGN POOL</Button>
      <TextField
        id="Search-Pool"
        label="Search"
        variant="filled"
        onChange={(e) => {
          setFind(e.target.value.toLowerCase());
        }}
        style={{ display: "flex", width: "25%" }}
      /></div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pool</TableCell>
              <TableCell>Poolowner</TableCell>
              <TableCell>Poolname</TableCell>
              <TableCell>Pooldes</TableCell>
              <TableCell>Poolstart</TableCell>
              <TableCell>Assests</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((fil) => fil.Pool.toLowerCase().includes(find))
              .map((row) => (
                <TableRow>
                  <TableCell key={row.Pool}>{row.Pool}</TableCell>
                  <TableCell key={row.Poolowner}>{row.Poolowner}</TableCell>
                  <TableCell key={row.Poolname}>{row.Poolname}</TableCell>
                  <TableCell key={row.Pooldes}>{row.Pooldes}</TableCell>
                  <TableCell key={row.Poolstart}>{row.Poolstart}</TableCell>
                  <TableCell key={row.Assests}>{row.Assests}</TableCell>
                  <TableCell key={row.Action}>{row.Action}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 
      {rows.filter((fil)=>fil.Pool.toLowerCase().includes(find)).map((row)=>(
            <li key={row.Pool*Math.random()}>{row.Pool}</li>
             ))} */}
    </div>
  );
};

export default Table1;
