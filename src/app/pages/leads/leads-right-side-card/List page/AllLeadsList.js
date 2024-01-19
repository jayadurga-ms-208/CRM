import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Avatar,
  Card,
  Typography,
  FormControlLabel,Checkbox,
  FormGroup,
  FormControl,
  Menu,
  MenuItem,
  DialogActions,
  DialogContentText,
  DialogContent,
  Dialog,
  DialogTitle,
  IconButton,
  Autocomplete,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Div from "@jumbo/shared/Div";
import { HiOutlineSearch } from "react-icons/hi";
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
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import ChatIcon from "@mui/icons-material/Chat";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import GradeIcon from '@mui/icons-material/Grade';
import Divider from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {
  BarChartOutlined,
  CancelOutlined,
  CheckBox,
  EmailOutlined,
  FactoryOutlined,
  FaxOutlined,
  ModeEdit,
  RingVolume,
  RingVolumeOutlined,
} from "@mui/icons-material";

function createData(
  accName,
  desig,
  phone,
  email,
  dates,
  leadscore,
  leadsource
) {
  return { accName, desig, phone, email, dates, leadscore, leadsource };
}
const dropDownLists = [
  {
    leadid: "ACC0030",
    country: "India",
    state: "Tamilnadu",
    city: "Chennai",
    mobile_code: "+91",
  },
  {
    leadid: "ACC0011",
    state: "Kerala",
    mobile_code: "+92",
    city: "Delhi",
    country: "United Kingdom",
  },
  {
    leadid: "ACC0040",
    state: "Uttar Pradesh",
    mobile_code: "+44",
    city: "",
    country: "USA",
  },
];

const rows = [
  createData(
    "Gokulraj Sugumar",
    "Tech overwatch",
    "(91)976543211",
    "gokul@gmail.com",
    "Cold",
    "180",
    "Website"
  ),
  createData(
    "Roshan Khan",
    "Tech Wire",
    "(91)976543211",
    "roshan@gmail.com",
    "Warm",
    "130",
    "Facebook"
  ),
  createData(
    "Yuvaraj Singh",
    "DynamicTech",
    "(91)976543211",
    "yuvra@gmail.com",
    "Hot",
    "80",
    "Twitter"
  ),
  createData(
    "Kavin Kumar",
    "Electech",
    "(91)976543211",
    "kavin@gmail.com",
    "Cold",
    "80",
    "Linkedin"
  ),
  createData(
    "Amy Janette",
    "Techinfo",
    "(91)976543211",
    "amy@gmail.com",
    "Warm",
    "130",
    "Website"
  ),
  createData(
    "Gill Hamper",
    "Infozoid",
    "(91)976543211",
    "gill@gmail.com",
    "Hot",
    "180",
    "Other"
  ),
  createData(
    "Prakash Raj",
    "Inspire Tech",
    "(91)976543211",
    "prakash@gmail.com",
    "Cold",
    "10",
    "Facebook"
  ),
  createData(
    "Samantha Gokul",
    "infovio",
    "(91)976543211",
    "samantha@gmail.com",
    "Warm",
    "80",
    "Twitter"
  ),
  createData(
    "Kriti Sanon",
    "infovio",
    "(91)976543211",
    "kriti@gmail.com",
    "Hot",
    "180",
    "Linkedin"
  ),
  createData(
    "Gill Hamper",
    "infovio",
    "(91)976543211",
    "gill@gmail.com",
    "Cold",
    "180",
    "Website"
  ),
  createData(
    "Prakash Raj",
    "Infozoid",
    "(91)976543211",
    "prakash@gmail.com",
    "Warm",
    "130",
    "Website "
  ),
  createData(
    "Samantha Gokul",
    "infovio",
    "(91)976543211",
    "samantha@gmail.com",
    "Hot",
    "80",
    "Other"
  ),
  createData(
    "Kriti Sanon",
    "infovio",
    "(91)976543211",
    "kriti@gmail.com",
    "Cold",
    "80",
    "Linkedin"
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
const AllLeadsList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAddLeads, setOpenAddLeads] = useState(false);
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
  
  const handleAddLeads = () => {
    setOpenAddLeads(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseAction = () => {
    setAnchorElAction(null);
  };

  const navigate = useNavigate();

  return (
    <Card sx={{backgroundColor:"white"}}>
      <Grid container>
        <Grid items xs={9} >
          <Grid container spacing={8}>
            <Grid item>
              <Button
                size="small"
                startIcon={<AddIcon />}
                variant="contained"
                sx={{
                  fontSize: "14px",
                  background: "#007BFF",
                  ":hover": { background: "#007BFF" },
                  maxHeight: "23px",
                  borderRadius: "10px",
                }}
              >
                Upload Leads
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="small"
                onClick={handleAddLeads}
                startIcon={<AddIcon />}
                variant="contained"
                sx={{
                  fontSize: "14px",
                  background: "#007BFF",
                  ":hover": { background: "#007BFF" },
                  maxHeight: "23px",
                  borderRadius: "10px",
                }}
              >
                Add Leads
              </Button>
            </Grid>
            

            <Dialog
            scroll="body"
          PaperProps={{
            sx: {
              width: "100%",
                maxWidth: "848px",
                maxHeight : "800px",
                borderRadius: "20px"
            },
          }}
          open={openAddLeads}
          onClose={() => setOpenAddLeads(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* Main GRID */}
          <Card className="border-card">
            <DialogTitle
              id="alert-dialog-title"
              align="center"
              sx={{ fontSize: "18px" }}
            >
              Create a Lead
              <IconButton
                sx={{ float: "right" }}
                onClick={() => setOpenAddLeads(false)}
              >
                <CancelOutlined />
              </IconButton >
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Grid container columnSpacing={1} rowSpacing={.5}>
                  {/* GRID CHILD 1 */}
                  <Grid item xs={6}>
                    <Card className="border-card">
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Lead Owner"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PermIdentityIcon sx={{color: "#6C63FF"}}/>
                            </InputAdornment>
                          ),
                        }}
                      />
                       <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Name"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PermIdentityIcon sx={{color: "#6C63FF"}}/>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Company"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Title"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                      />
                      <FormControl
                        className="col-sm-2 mt-1"
                        sx={{ width: "100%",
                         '& fieldset':{
                            borderRadius:'30px',
                          },}}
                      >
                        <Autocomplete
                          disablePortal
                          className="search-select"
                          getOptionLabel={(option) => option.leadid}
                          options={dropDownLists}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Lead Source"
                              
                            />
                          )}
                        />
                      </FormControl>
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Industry"
                        variant="outlined"
                        sx={{ width: "100%",
                         '& fieldset':{
                            borderRadius:'30px',
                          },}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CorporateFareIcon sx={{color: "#6C63FF"}}/>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Annual Revenue"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <BarChartOutlined sx={{color: "#6C63FF"}}/>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Product Interest"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                      />
                      <Grid container columnSpacing={2}>
                        <Grid item xs={6}>
                          <FormControl
                            className="col-sm-2 mt-1"
                            sx={{ width: "100%",
                         '& fieldset':{
                            borderRadius:'30px',
                          },}}
                          >
                            <Autocomplete
                              disablePortal
                              className="search-select"
                              getOptionLabel={(option) => option.country}
                              options={dropDownLists}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  placeholder="Select Country"
                                />
                              )}
                            />
                          </FormControl>
                        </Grid>
                        <Grid xs={6}>
                          <TextField
                            className="col-sm-12 input-box mt-1"
                            id="outlined-basic"
                            placeholder="Enter Pincode"
                            variant="outlined"
                             sx={{
                              p1:"16px",
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  {/* <LanguageIcon /> */}
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid container columnSpacing={2}>
                        <Grid item xs={6}>
                          <FormControl
                            className="col-sm-2 mt-1"
                            sx={{ width: "100%",
                            '& fieldset':{
                               borderRadius:'30px',
                             },}}
                          >
                            <Autocomplete
                              disablePortal
                              className="search-select"
                              getOptionLabel={(option) => option.state}
                              options={dropDownLists}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  placeholder="Select State"
                                />
                              )}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl
                            className="col-sm-2 mt-1"
                            sx={{ width: "100%",
                            '& fieldset':{
                               borderRadius:'30px',
                             },}}
                          >
                            <Autocomplete
                              disablePortal
                              className="search-select"
                              getOptionLabel={(option) => option.city}
                              options={dropDownLists}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  placeholder="Select City"
                                />
                              )}
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Description"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                      />
                    </Card>
                  </Grid>

                  {/* GRID CHILD 2 */}

                  <Grid item xs={6}>
                    <Card className="border-card">
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Landline"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <RingVolumeOutlined sx={{color: "#6C63FF"}}/>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Grid container columnSpacing={2}>
                        <Grid item xs={4}>
                          <FormControl
                            className="col-sm-2 mt-1"
                            sx={{ width: "100%",
                            '& fieldset':{
                               borderRadius:'30px',
                             },}}
                          >
                            <Autocomplete
                              disablePortal
                              className="search-select"
                              getOptionLabel={(option) => option.mobile_code}
                              options={dropDownLists}
                              renderInput={(params) => (
                                <TextField {...params} placeholder="+91" />
                              )}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            className="col-sm-12 input-box mt-1"
                            id="outlined-basic"
                            placeholder="Enter Phone"
                            variant="outlined"
                            sx={{
                              '& fieldset':{
                                borderRadius:'30px',
                              },
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  {/* <LanguageIcon /> */}
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Grid>
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter email"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailOutlined sx={{color: "#6C63FF"}}/>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Fax"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FaxOutlined sx={{color: "#6C63FF"}}/>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Website"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LanguageIcon sx={{color: "#6C63FF"}}/>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Lead Status"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Rating"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <GradeIcon sx={{color: "#6C63FF"}}/>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="No. of Employees"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                      />
                      <TextField
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Last Modified By"
                        variant="outlined"
                        sx={{
                          '& fieldset':{
                            borderRadius:'30px',
                          },
                        }}
                      />
                      <Grid
                        container
                        direction={"row"}
                        // justifyContent={"space-around"}
                        alignItems={"center"}
                      >
                        <Grid item>
                          <Typography variant="h5" paddingTop={"9px"} paddingRight={"12px"}>
                            Decision Maker
                          </Typography>
                        </Grid>
                        <Grid item>
                          <FormGroup aria-label="position" row>
                            <FormControlLabel
                              control={<Checkbox size="small" defaultChecked />}
                              label="Yes"
                            />
                            <FormControlLabel
                              control={<Checkbox size="small" />}
                              label="No"
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                      <Button sx={{color:"#9ACEEB"}} startIcon={<AddIcon fontSize="small" sx={{color:"#007BFF"}} />}>Add More Contacts</Button>
                    </Card>
                  </Grid>
                  {/* </Card> */}
                </Grid>

                <Grid
                  paddingTop={1}
                  container
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <Grid item>
                    <Button
                      onClick={()=>setOpenAddLeads(false)}
                      sx={{
                        maxHeight: "23px",
                        maxWidth: "62px",
                        borderRadius: "8px",
                        color: "#007BFF",
                        borderColor: "#007BFF",
                        ":hover": { borderColor: "#007BFF"}
                        
                      }}
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        maxHeight: "23px",
                        maxWidth: "55px",
                        borderRadius: "8px",
                        backgroundColor: "#007BFF",
                        ":hover": { background: "#007BFF" },
                      }}
                      variant="contained"
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                {/* <Button>Save</Button> */}
              </DialogContentText>
            </DialogContent>
          </Card>
        </Dialog>

            <Grid item>
              <Button
                size="small"
                startIcon={<AddIcon />}
                variant="contained"
                sx={{
                  fontSize: "14px",
                  background: "#007BFF",
                  ":hover": { background: "#007BFF" },
                  maxHeight: "23px",
                  borderRadius: "10px",
                }}
              >
                Qualify Leads
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className="col-12 input-box"
            id="outlined-search"
            type="search"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiOutlineSearch size={20} />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 130, mt: { xs: 0.5, md: 0 }, mr: 1 }}
          />
        </Grid>
        <Grid item xs>
          <Typography
            variant="h3"
            paddingLeft={"12px"}
            paddingTop={"8px"}
            paddingBottom={"8px"}
          >
            All Leads
          </Typography>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1B416B" }}>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                <b>Contact Name</b>
                <ArrowUpwardIcon fontSize="small" />
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                <b>Phone</b>
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                <b>Email</b>
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
               <b> Date</b>
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                <b>Lead Score</b>
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                <b>Lead Source</b>
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
                  <FormControlLabel control={<Checkbox />} label="Open Deals" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Closed Deals"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Next Activity Date"
                  />
                  <FormControlLabel control={<Checkbox />} label="Owner" />
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
                <TableCell
                  onClick={() => navigate("/app/contacts/overview")}
                  sx={{ cursor: "pointer" }}
                >
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
                    <Typography variant="h4" paddingLeft="12px">
                      {row.accName}
                      <br />
                      <span style={{ color: "#475259", fontSize: "10px" }}>
                        {row.desig}
                      </span>
                    </Typography>
                  </Div>
                </TableCell>
                <TableCell align="center">
                  <WifiCalling3Icon
                    sx={{ paddingRight: "4px", color: "#007BFF" }}
                  />
                  {row.phone}
                </TableCell>
                <TableCell  sx={{ color: "#304995" }} align="center"><EmailIcon  sx={{ paddingRight: "4px", color: "#007BFF" }}
                  />{row.email}
                </TableCell>

                <TableCell align="center">
                  <Button
                    // size="medium"
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      fontSize: "14px",
                      background: "#9ACEEB",
                      ":hover": { background: "#9ACEEB" },
                      maxHeight: "20px",
                      borderRadius: "5px",
                    }}
                  >
                    {row.dates}
                  </Button>
                </TableCell>
                <TableCell align="center">{row.leadscore}</TableCell>
                <TableCell align="center">{row.leadsource}</TableCell>
                <TableCell
                  align="center"
                  onClick={handleClickAction}
                  sx={{ cursor: "pointer" }}
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
              <MenuItem>
                <ArchiveIcon sx={{ fontSize: 20, mr: 2 }} />
                Archieve
              </MenuItem>
              <MenuItem>
                <ChatIcon sx={{ fontSize: 20, mr: 2 }} />
                Chat
              </MenuItem>
            </Menu>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default AllLeadsList;
