import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Avatar,
  Card,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Menu,
  MenuItem,
  DialogActions,
  DialogContentText,
  DialogContent,
  Autocomplete,
  Dialog,
  DialogTitle,
  Link,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import Div from "@jumbo/shared/Div";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { green, red, deepPurple, deepOrange, blue } from "@mui/material/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import DeleteIcon from "@mui/icons-material/Delete";
import { ModeEdit } from "@mui/icons-material";
import ArchiveIcon from "@mui/icons-material/Archive";
import ChatIcon from "@mui/icons-material/Chat";
import { FormControl } from "react-bootstrap";
import LeadNameWebListPage from "./LeadNameWebListPage";

function createData(accName, desig, leadListName, Nos, Geography, Industry) {
  return { accName, desig, leadListName, Nos, Geography, Industry };
}

const contacts = [
  {
    country: "India",
    state: "Tamilnadu",
    mobile_code: "+91",
    industry_type: "Product Bsaed",
  },
  { state: "Kerala", mobile_code: "+92", industry_type: "Service Bsaed" },
];

const rows = [
  createData(
    "L000012",
    " ",
    "Foyer Software  List",
    "350",
    "Bangalore",
    "IT Industry "
  ),
  createData(
    "L000025",
    " ",
    "Red ant Media",
    "250",
    "Hyderabad",
    "IT Industry "
  ),
  createData(
    "L000012",
    " ",
    "Kartoffel Technologies",
    "547",
    "Bangalore",
    "IT Industry "
  ),
  createData("L000012", " ", "Caddy code", "236", "Hyderabad ", "IT Industry "),
  createData(
    "L000012",
    " ",
    "Phantom tech",
    "450",
    "Bangalore",
    "IT Industry "
  ),
  createData(
    "L000012",
    " ",
    "Twin brothers pvt .ltd",
    "350",
    "Hyderabad ",
    "IT Industry "
  ),
  createData(
    "L000012",
    " ",
    "Tamilselvan .co",
    "154",
    "Bangalore",
    "IT Industry "
  ),
  createData("L000012", " ", "JP and sons", "621", "Hyderabad ", "IT Industry"),
  createData(
    "L000012",
    " ",
    "Foyer Software  List",
    "350",
    "Bangalore",
    "IT Industry"
  ),
  createData(
    "L000012",
    " ",
    "Foyer Software  List",
    "246",
    "Hyderabad ",
    "IT Industry"
  ),
];

const contact = [
  {
    country: "India",
    state: "Tamilnadu",
    mobile_code: "+91",
    industry_type: "Product Bsaed",
  },
  { state: "Kerala", mobile_code: "+92", industry_type: "Service Bsaed" },
];
const WebListPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAddContact, setOpenAddContact] = useState(false);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openEditContact, setOpenEditContact] = useState(false);
  const [showWebListPage, setShowWebListPage] = useState(true);
  const [showLeadNameWebListPage, setShowLeadNameWebListPage] = useState(false);

  const handleClickWebListPage = () => {
    setShowWebListPage(true);
    setShowLeadNameWebListPage(false);
  };
  const handleClickLeadNameWebListPage = () => {
    setShowWebListPage(false);
    setShowLeadNameWebListPage(true);
  };

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };
  const handleClickEditContact = () => {
    setOpenEditContact(true);
  };

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddContact = () => {
    setOpenAddContact(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseAction = () => {
    setAnchorElAction(null);
  };

  const navigate = useNavigate();

  return (
    <JumboContentLayoutMain>
      <Div>
        <Typography
          variant="h3"
          paddingLeft={"12px"}
          paddingTop={"px"}
          paddingBottom={"2px"}
          fontSize={"14px"}
        >
          Lead generation (Web)
        </Typography>
      </Div>
      <Div sx={{ display: showWebListPage === true ? "block" : "none" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ bgcolor: "#1B416B" }}>
                <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center"><b>
                  Lead Id</b>
                  <ArrowUpwardIcon fontSize="small" />
                </TableCell>

                <TableCell sx={{ color: "#FEFEFE" ,fontSize:"15px"}} align="left">
                  <b>Lead List Name</b>
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
                 <b> Nos</b>
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
                 <b> Geography</b>
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
                 <b> Industry</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.accName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ cursor: "pointer" }}>
                    <Div sx={{ display: "flex", justifyContent: "flex-start" }}>
                      <Avatar
                        size="small"
                        sx={{
                          fontSize: "12px",
                          bgcolor: green[500],
                          width: "38px",
                          height: "38px",
                        }}
                      >
                        {row.accName.slice(0, 2).toUpperCase()}
                      </Avatar>

                      <Typography variant="h4" paddingLeft="12px" fontSize={"12px"}>
                        {row.accName}
                        <br />
                      </Typography>
                    </Div>
                  </TableCell>
                  <TableCell
                    align="center" sx={{fontSize:"12px",whiteSpace:"nowrap"}}
                    onClick={handleClickLeadNameWebListPage}
                  >
                    <Link href="#" color={"#2227A8"}  sx={{ float:"left"}}>
                      {row.leadListName}
                    </Link>
                  </TableCell>
                  <TableCell align="center" sx={{fontSize:"14px"}}> {row.Nos}</TableCell>
                  <TableCell align="center" sx={{fontSize:"14px"}}>{row.Geography}</TableCell>
                  <TableCell align="center" sx={{fontSize:"14px"}}>{row.Industry}</TableCell>
                  <br />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Div>
      <Div
        sx={{ display: showLeadNameWebListPage === true ? "block" : "none" }}
      >
        <LeadNameWebListPage />
      </Div>
    </JumboContentLayoutMain>
  );
};

export default WebListPage;
