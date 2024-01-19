import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  InputAdornment,
  Grid,
} from "@mui/material";
import { HiOutlineSearch } from "react-icons/hi";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Paper from "@mui/material/Paper";

function createData(ordDate, ordSum, ordVal, delivStats) {
  return { ordDate, ordSum, ordVal, delivStats };
}

const rows = [
  createData("21 Dec 2021", "Lorem", "10000", "Negotiation review"),
  createData("21 Dec 2021", "Ipsum", "40000", "Proposal Price Quote"),
  createData("21 Dec 2021", "consectetur", "30000", "Contract Won"),
  createData("21 Dec 2021", "Lorem", "50000", "Value Proposition"),
  createData("21 Dec 2021", "Aliquam", "60000", "Negotiation review"),
  createData("21 Dec 2021", "Ipsum", "10000", "Value Proposition"),
];

const AccountSales = () => {
  return (
    <>
      <Grid
        columnSpacing={17}
        paddingBottom={1.5}
        container
        direction="row"
        alignItems="center"
      >
        <Grid item xs>
          <Typography
            paddingLeft={2.5}
            variant="h3"
            sx={{ fontSize: "16px", fontWeight: "600" }}
          >
            Sales
          </Typography>
        </Grid>
        <Grid item xs>
          <TextField
            className="col-12 input-box"
            variant="standard"
            type="search"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiOutlineSearch size={20} />
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 150, mt: { xs: 0.5, md: 0 }, mr: 1 }}
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1B416B" }}>
              <TableCell className="accounts-table-heading" align="left">
                Order Date
                <ArrowUpwardIcon fontSize="small" />
              </TableCell>
              <TableCell className="accounts-table-heading" align="left">
                Order Summary
              </TableCell>
              <TableCell className="accounts-table-heading" align="center">
                Order Value
              </TableCell>
              <TableCell className="accounts-table-heading" align="center">
                Delivery Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ordDate}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ fontSize: "14px", color: "#000000" }}
                  align="left"
                >
                  {row.ordDate}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "12px", color: "#000000" }}
                  align="center"
                >
                  {row.ordSum}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "12px", color: "#000000" }}
                  align="center"
                >
                  {row.ordVal}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "12px", color: "#000000" }}
                  align="center"
                >
                  {row.delivStats}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AccountSales;
