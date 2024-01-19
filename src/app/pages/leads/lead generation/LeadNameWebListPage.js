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
const SocialMedia = () => {
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
      <Div> <Typography
            variant="h3"
            paddingLeft={"12px"}
            paddingTop={"2px"}
            paddingBottom={"2px"}
            fontSize={"14px"}
          >
           Lead generation: Foyer Softwafe List
          </Typography></Div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1B416B" }}>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
                Lead Id
                <ArrowUpwardIcon fontSize="small" />
              </TableCell>

              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
              Enq.Date
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
              LeadName
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
                Email
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
              Phone Number  
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px" }} align="center">
              Location
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE",fontSize:"15px"}} align="center">
                Status
              </TableCell>
              <TableCell
                        sx={{ color: "#FEFEFE", cursor: "pointer" }}
                        onClick={handleClickOpen}
                        align="center"
                      >
                        <SettingsIcon />
                      </TableCell>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{ mt: 7, maxHeight: "300px" }}
                      >
                        <Typography variant="h4" sx={{ p: 2, mb: -2 }}>
                          Choose Columns
                        </Typography>
                        <FormGroup sx={{ p: 2 }}>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Contact Name"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="City"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Country"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Phone"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Email"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Address"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Label"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Open Deals"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Closed Deals"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Next Activity Date"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Owner"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Done Activities"
                          />
                        </FormGroup>
                        <Div sx={{ display: "flex", justifyContent: "center" }}>
                          <Button className="save-button" onClick={handleClose}>
                            Save
                          </Button>
                        </Div>
                      </Menu>
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
                <TableCell sx={{ color: "#304995",fontSize:"12px",whiteSpace:"nowrap"}} align="center">
                  {row.LeadName}
                </TableCell>

                <TableCell align="center" sx={{whiteSpace:"nowrap",fontSize:"14px"}}><EmailIcon   sx={{ paddingRight: "4px", color: "#007BFF" }}/>{row.Email}</TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap",fontSize:"12px"}}> <WifiCalling3Icon
                    sx={{ paddingRight: "4px", color: "#007BFF", }}
                  />{row.Phoneno}</TableCell>
                <TableCell align="center"sx={{whiteSpace:"nowrap",fontSize:"14px"}}>{row.Location}</TableCell>
                <TableCell align="center" onClick={() => navigate("/leads/Qualify")}
                  sx={{ cursor: "pointer" }}>
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      whiteSpace:"nowrap",
                      whiteSpace:"nowrap",
                      fontSize: "14px",
                      background: "#79CB53",
                      ":hover": { background: "#007BFF" },
                      maxHeight: "20px",
                      borderRadius: "5px",
                    }}
                  >{row.Status} </Button></TableCell>
                    <TableCell
                          align="center"
                          onClick={handleClickAction}
                          sx={{ cursor: "pointer", fontSize:"15px" }}
                        >
                          <MoreVertIcon />
                        </TableCell>
                
              </TableRow>
          

            ))}
            <Menu
                      id="menu-appbar"
                      anchorEl={anchorElAction}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElAction)}
                      onClose={handleCloseAction}
                      sx={{
                        mt: 7,
                        mr: 5,
                        maxHeight: "300px",
                        width: "300px",
                      }}
                    >
                      <MenuItem onClick={handleClickEditContact}>
                        <ModeEdit sx={{ fontSize: 20, mr: 2 }} />
                        Edit
                      </MenuItem>
                      <MenuItem>
                        <DeleteIcon sx={{ fontSize: 20, mr: 2 }} />
                        Delete
                      </MenuItem>
                      {/* <MenuItem>
                        <ArchiveIcon sx={{ fontSize: 20, mr: 2 }} />
                        Archieve
                      </MenuItem> */}
                      <MenuItem>
                        <ChatIcon sx={{ fontSize: 20, mr: 2 }} />
                        Chat
                      </MenuItem>
                    </Menu>
            
          </TableBody>
        </Table>
      </TableContainer>
    </JumboContentLayoutMain>
  );
};

export default SocialMedia;
