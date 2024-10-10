import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function TableOFus({ data }: { data: any[] }) {
  // Table data

  for (const i in data.length) {
    console.log(i)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Identity</TableCell>
            <TableCell align="right">Parents</TableCell>
            <TableCell align="right">Childs</TableCell>
            <TableCell align="right">Timestamp</TableCell>
            <TableCell align="right">Contacts</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row["Contact"]}>
              <TableCell component="th" scope="row">
                {row["Identity"]}
              </TableCell>
              <TableCell align="right">{row["Parents"]}</TableCell>
              <TableCell align="right">{row["Child"]}</TableCell>
              <TableCell align="right">{row["Class"]}</TableCell>
              <TableCell align="right">{row["Contact"]}</TableCell>
              <TableCell align="right">{row["Address"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableOFus;
