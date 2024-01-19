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
  Divider,
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
import Heading from "./Heading";
import EmailIcon from '@mui/icons-material/Email';

function createData(accName,EnqDate, LeadName, Email,Phoneno,Location, Status) {
  return { accName,EnqDate, LeadName, Email,Phoneno,Location, Status };
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
    " L00003241 ",
    "04/05/2022",
    "Karbon software",
    "gokul@gmail.com",
    "(91)976543211",
    "Chennai",
    "Qualify Now"
  ),
  createData(
    "L0007814",
    "04/05/2022",
    "Alexa software",
    "roshan@gmail.com",
    "(91)976543211",
    "Hydrabad",
    "Qualified"
  ),
  createData(
    " L00003241",
    "04/05/2022",
    "Karbon software",
    "yuvra@gmail.com",
    "(91)976543211",
    "Bangalore",
    "Qualify Now"
  ),
  createData(
    "L0007814",
    "04/05/2022",
    "Alexa software",
    "kavin@gmail.com",
    "(91)976543211",
    "Pune",
    "Qualify Now"
  ),
  createData(
    "L0007814",
    "04/05/2022",
    "Karbon software",
    "amy@gmail.com",
    "(91)976543211",
    "Gurhan",
    "Qualified"
  ),
  createData(
    " L00003241",
    "04/05/2022",
    "Alexa software",
    "gill@gmail.com",
    "(91)976543211",
    "Bangalore",
    "Qualified"
  ),
  createData(
    "L0007814",
    "04/05/2022",
    "Karbon software",
    "prakash@gmail.com",
    "(91)976543211",
    "Chennai",
    "Qualify Now"
  ),
  createData(
    " L00003241",
    "04/05/2022",
    "Alexa software",
    "samantha@gmail.com",
    "(91)976543211",
    "Gurhan",
    "Qualify Now"
  ),
  createData(
    "L0007814",
    "04/05/2022",
    "Karbon software",
    "kriti@gmail.com",
    "(91)976543211",
    "Bangalore",
    "Qualified"
  ),
  createData(
    " L00003241",
    "04/05/2022",
    "Alexa software",
    "gill@gmail.com",
    "(91)976543211",
    "Chennai",
    "Qualified"
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
const Explore = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAddContact, setOpenAddContact] = useState(false);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openEditContact, setOpenEditContact] = useState(false);

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
      <>
   
      <Div> <Typography
            variant="h3"
            paddingLeft={"12px"}
            paddingTop={"2px"}
            paddingBottom={"2px"}
            fontSize={"14px"}
          >
           Lead generation (Enquiry)
          </Typography></Div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1B416B" }}>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
                <b>Lead Id</b>
                <ArrowUpwardIcon fontSize="small" />
              </TableCell>

              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px"  }} align="center">
              <b>Enq.Date</b>
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" ,fontSize:"15px" }} align="center">
              <b>LeadName</b>
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px"  }} align="center">
               <b> Email</b>
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" ,fontSize:"15px" }} align="center">
              <b>Phone Number</b>  
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px"  }} align="center">
              <b>Location</b>
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px"  }} align="center">
                <b>Status</b>
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
                      <span style={{ color: "#475259", fontSize: "10px" }}>
                        {row.desig}
                      </span>
                      
                    </Typography>
                  </Div>
                </TableCell>
                <TableCell align="center" sx={{fontSize:"12px"}}>
                {row.EnqDate}
                </TableCell>
                <TableCell sx={{ color: "#304995",fontSize:"12px",whiteSpace:"nowrap" }} align="center">
                  {row.LeadName}
                </TableCell>
                

                <TableCell align="left"  sx={{whiteSpace:"nowrap" ,fontSize:"14px"}}><EmailIcon   sx={{ paddingRight: "4px", color: "#007BFF" }}/>{row.Email}</TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap",fontSize:"12px"}}> <WifiCalling3Icon
                    sx={{ paddingRight: "4px", color: "#007BFF" }}
                  />{row.Phoneno}</TableCell>
                <TableCell align="center" sx={{fontSize:"14px",textAlign:"left"}}>{row.Location}</TableCell>
                <TableCell align="left"  >
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{
                      whiteSpace:"nowrap",
                      boxShadow: "none",
                      fontSize: "14px",
                      background: "#79CB53",
                      ":hover": { background: "#007BFF" },
                      maxHeight: "20px",
                      borderRadius: "5px",
                    }}
                  >{row.Status} </Button>
                  
                 </TableCell>
                <br />
              </TableRow>
             
              
          

            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
      </>
    </JumboContentLayoutMain>
  );
};

export default Explore;
