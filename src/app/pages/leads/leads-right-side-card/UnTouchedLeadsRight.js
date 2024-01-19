import {
  Autocomplete,
  Avatar,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Menu,
  MenuItem,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Card,
  Select,
} from "@mui/material";
import {
  BarChartOutlined,
  CancelOutlined,
  CheckBox,
  Edit,
  EmailOutlined,
  FactoryOutlined,
  FaxOutlined,
  LocationCityOutlined,
  ModeEdit,
  RingVolume,
  RingVolumeOutlined,
} from "@mui/icons-material";
import { AF, IN, PK } from "country-flag-icons/react/3x2"
import { HiOutlineSearch } from "react-icons/hi";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BusinessIcon from '@mui/icons-material/Business';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useState } from "react";
import React from 'react'
import Div from "@jumbo/shared/Div";
import FaxIcon from '@mui/icons-material/Fax';
import { CloseIcon } from "app/icons/PngIcons";
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import { PermContactCalendar } from "@mui/icons-material";
import ArchiveIcon from '@mui/icons-material/Archive';
import ChatIcon from '@mui/icons-material/Chat';
import LanguageIcon from "@mui/icons-material/Language";
import GradeIcon from '@mui/icons-material/Grade';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

const UnTouchedLeadsRight = () => {

  // Table function and values

  const BarStyle = { width: "10rem", height: "10rem", background: "#F0F0F0", padding: "0.5rem", float: "right" };
  function createData(bcolor, accName, desig, phone, email, country, city, status) {
    return { bcolor, accName, desig, phone, email, country, city, status };
  }

  const addMore = [
    {
      contactName: "Sankar",
    },
    {
      contactName: "Dhanush",
    },
    {
      contactName: "Harish",
    },
  ];

  const rows = [
    createData(
      "black",
      "Anirudh ",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
    createData(
      "blue",
      "Roshan Khan",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
    createData(
      "pink",
      "Kavin Kumar",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
    createData(
      "green",
      "Yuvaraj Singh",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
    createData(
      "purple",
      "Gokulraj Sugumar",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
    createData(
      "black",
      "Anirudh ",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
    createData(
      "blue",
      "Roshan Khan",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
    createData(
      "pink",
      "Kavin Kumar",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
    createData(
      "green",
      "Yuvaraj Singh",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
    createData(
      "purple",
      "Gokulraj Sugumar",
      "Tech overwatch",
      "(91)976543211",
      "gokul@gmail.com",
      "India",
      "Delhi",
      "Active"
    ),
  ];

  // popup dropdown values

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


  const contacts = [
    {
      country: "India",
      state: "Tamilnadu",
      mobile_code: "+91",
      industry_type: "Product Bsaed",
    },
    { state: "Kerala", mobile_code: "+92", industry_type: "Service Bsaed" },
  ];

  const handleCreateAccount = () => {
    // setOpenCreateAccount(true);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAddContact, setOpenAddContact] = useState(false);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openEditContact, setOpenEditContact] = useState(false);
  const [openAddMoreContacts, setOpenAddMoreContacts] = useState(false);


  const handleAddMoreContacts = () => {
    setOpenAddMoreContacts(true);
  };

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };
  const handleClickEditContact = () => {
    setOpenEditContact(true);
  }

  const handleAddContact = () => {
    setOpenAddContact(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAction = () => {
    setAnchorElAction(null);
  };

  const [drop, setDrop] = React.useState("0");

  const handleDropChange = (event) => {
    setDrop(event.target.value);
  };


  const navigate = useNavigate();
  return (
    <Card  sx={{backgroundColor:"white",margin:1,padding:2}}>

      <Grid container>
        <Grid items xs={9}>
          <Grid container spacing={"8"} rowSpacing={2}>
            <Grid item>
              <Button
                size="small"
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
                onClick={handleAddContact}
                size="small"
                variant="contained"
                sx={{
                  fontSize: "14px",
                  background: "#007BFF",
                  ":hover": { background: "#007BFF" },
                  maxHeight: "23px",
                  borderRadius: "10px",
                }}
              >
                +Add Leads
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="small"
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
          <Grid container spacing={"8"}>
            <Grid item>
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
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {/* Create Lead Pop up box */}

          <Dialog
            scroll="body"
            PaperProps={{
              sx: {
                width: "100%",
                maxWidth: "848px",
                maxHeight: "800px",
                borderRadius: "20px"
              },
            }}
            open={openAddContact}
            onClose={() => setOpenAddContact(false)}
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
                  onClick={() => setOpenAddContact(false)}
                >
                  <CancelOutlined />
                </IconButton >
              </DialogTitle>

              <DialogContent sx={{ backgroundColor: "#D4F1F480", borderRadius: "20px" }}>
                <DialogContentText id="alert-dialog-description">
                  <Grid container columnSpacing={1} rowSpacing={.5} paddingTop={1}>
                    {/* GRID CHILD 1 */}
                    <Grid item xs={6}>
                      <Card className="border-card" sx={{ borderRadius: "20px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                        <TextField
                          className="col-sm-12 input-box mt-1"
                          id="outlined-basic"
                          placeholder="Enter Lead Owner"
                          variant="outlined"
                          sx={{
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon sx={{ color: "#6C63FF" }} />
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon sx={{ color: "#6C63FF" }} />
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon sx={{ color: "#fff" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className="col-sm-12 input-box mt-1"
                          id="outlined-basic"
                          placeholder="Enter Title"
                          variant="outlined"
                          sx={{
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                            pt:0.5,pb:0.5
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon sx={{ color: "#fff" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <div className="drop-list">
                          <svg
                            style={{ marginLeft: "14px", marginRight: "6px" }}
                            width="20"
                            height="16"
                            viewBox="0 0 17 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.7404 12.2446L12.9404 9.74458C12.7654 9.58819 12.528 9.50044 12.2805 9.50044H11.4602L10.4059 8.55905C11.6652 7.23009 12.0618 5.41269 11.4535 3.75869C10.8452 2.10469 9.31914 0.85105 7.4227 0.4473C5.52614 0.04355 3.53066 0.547468 2.1519 1.77848C0.773139 3.00949 0.208779 4.79116 0.660979 6.48455C1.11318 8.17791 2.51722 9.54048 4.36974 10.0835C6.22226 10.6265 8.2577 10.2725 9.74614 9.14809L10.8005 10.0895V10.8218C10.8005 11.0427 10.8988 11.2548 11.0739 11.4111L13.8739 13.9111C14.0489 14.0673 14.2863 14.1552 14.5338 14.1552C14.7814 14.1552 15.0188 14.0673 15.1938 13.9111L15.7405 13.4229C15.9155 13.2667 16.0139 13.0546 16.0139 12.8336C16.0139 12.6126 15.9155 12.4007 15.7405 12.2445L15.7404 12.2446ZM1.46718 5.33387C1.45687 3.96012 2.20562 2.67023 3.46858 1.88562C4.7317 1.10115 6.3467 0.922868 7.78578 1.40905C9.22486 1.89537 10.303 2.98369 10.6677 4.31822C11.0325 5.6529 10.637 7.06223 9.61062 8.08573C9.46265 7.89418 9.25765 7.74351 9.01874 7.65087L8.5239 7.46128H8.52374C6.99702 6.8802 5.27078 6.8802 3.74414 7.46128L3.25006 7.65087C3.01084 7.7435 2.80554 7.89417 2.65742 8.08587C1.89506 7.33044 1.47134 6.3508 1.46742 5.3339L1.46718 5.33387ZM3.3753 8.67651C3.40921 8.56253 3.4978 8.4678 3.61718 8.41744L4.11202 8.22785H4.11217C5.40373 7.73621 6.86389 7.73621 8.15537 8.22785L8.65117 8.41744H8.65133C8.77039 8.46795 8.85852 8.56267 8.89242 8.67651C8.09758 9.21126 7.12914 9.50058 6.13382 9.50058C5.1385 9.50058 4.17022 9.21138 3.37522 8.67651H3.3753ZM6.13374 6.1673C6.6289 6.1673 7.10358 5.99165 7.45374 5.67915C7.80374 5.36651 8.00046 4.94255 8.00046 4.50058C8.00046 4.05862 7.80374 3.63465 7.45374 3.32201C7.10358 3.00951 6.6289 2.83387 6.13374 2.83387C5.63874 2.83387 5.1639 3.00951 4.8139 3.32201C4.46374 3.63465 4.26718 4.05862 4.26718 4.50058C4.26781 4.9424 4.46468 5.36594 4.81454 5.67844C5.16454 5.99094 5.6389 6.16673 6.13374 6.1673ZM6.13374 3.6673C6.3814 3.6673 6.61874 3.75505 6.79374 3.9113C6.96874 4.06755 7.06718 4.27958 7.06718 4.50058C7.06718 4.72158 6.96874 4.93362 6.79374 5.08987C6.61874 5.24612 6.38138 5.33387 6.13374 5.33387C5.88624 5.33387 5.6489 5.24612 5.4739 5.08987C5.29874 4.93362 5.20046 4.72158 5.20046 4.50058C5.20062 4.2796 5.29906 4.06769 5.47406 3.91144C5.64906 3.75519 5.88626 3.66744 6.13374 3.6673L6.13374 3.6673Z"
                              fill="#6C63FF"
                            />
                          </svg>
                          <Select
                            sx={{
                              boxShadow: "none",
                              ".MuiOutlinedInput-notchedOutline": { border: 0,p:10 },
                              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                              {
                                border: 0,
                              },
                              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                              {
                                border: 0,
                              },
                              fontSize: "14px",

                              width: "90%",
                              height: "38px",
                              color: "#7D7D7D",
                            }}
                            defaultValue={0}
                            value={drop}

                            onChange={handleDropChange}
                          >
                            <MenuItem value={0}>Lead Source</MenuItem>
                            {dropDownLists.map((drop) => (
                              <MenuItem value={drop.leadid}>{drop.leadid}</MenuItem>
                            ))}
                          </Select>
                        </div>
                        <TextField
                          className="col-sm-12 input-box mt-1"
                          id="outlined-basic"
                          placeholder="Industry"
                          variant="outlined"
                          sx={{
                            width: "100%",
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CorporateFareIcon sx={{ color: "#6C63FF" }} />
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <BarChartOutlined sx={{ color: "#6C63FF" }} />
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon sx={{ color: "#fff" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Grid container columnSpacing={2}>
                          <Grid item xs={6}>
                            <FormControl
                              className="col-sm-2 mt-1"
                              sx={{
                                width: "100%",
                                '& fieldset': {
                                  borderRadius: '30px',
                                },
                              }}
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
                                p1: "16px",
                                '& fieldset': {
                                  borderRadius: '30px',
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
                              sx={{
                                width: "100%",
                                '& fieldset': {
                                  borderRadius: '30px',
                                },
                              }}
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
                              sx={{
                                width: "100%",
                                '& fieldset': {
                                  borderRadius: '30px',
                                },
                              }}
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon sx={{ color: "#fff" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Card>
                    </Grid>

                    {/* GRID CHILD 2 */}

                    <Grid item xs={6}>
                      <Card className="border-card" sx={{ borderRadius: "20px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                        <TextField
                          className="col-sm-12 input-box mt-1"
                          id="outlined-basic"
                          placeholder="Enter Landline"
                          variant="outlined"
                          sx={{
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <RingVolumeOutlined sx={{ color: "#6C63FF" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Grid container columnSpacing={2}>
                          <Grid item xs={4}>
                            <FormControl
                              fullWidth
                              className="col-sm-2 mt-1"
                              sx={{
                                "& fieldset": {
                                  borderRadius: "30px",
                                },
                              }}
                            >
                              <Select
                                sx={{
                                  height: "42px",
                                }}
                                defaultValue={+91}
                                placeholder="Age"
                              >
                                <MenuItem value={+91}>
                                  <IN style={{ height: "16px", marginRight: "6px" }} />
                                  +91
                                </MenuItem>
                                <MenuItem value={+92}>
                                  <PK style={{ height: "16px", marginRight: "6px" }} />
                                  +92
                                </MenuItem>
                                <MenuItem value={+93}>
                                  <AF style={{ height: "16px", marginRight: "6px" }} />
                                  +93
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              className="col-sm-12 input-box mt-1"
                              id="outlined-basic"
                              placeholder="Enter Phone"
                              variant="outlined"
                              sx={{
                                '& fieldset': {
                                  borderRadius: '30px',
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailOutlined sx={{ color: "#6C63FF" }} />
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaxOutlined sx={{ color: "#6C63FF" }} />
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LanguageIcon sx={{ color: "#6C63FF" }} />
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon sx={{ color: "#fff" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className="col-sm-12 input-box mt-1"
                          id="outlined-basic"
                          placeholder="Rating"
                          variant="outlined"
                          sx={{
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <GradeIcon sx={{ color: "#6C63FF" }} />
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
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }} InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon sx={{ color: "#fff" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className="col-sm-12 input-box mt-1"
                          id="outlined-basic"
                          placeholder="Last Modified By"
                          variant="outlined"
                          sx={{
                            '& fieldset': {
                              borderRadius: '30px',
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon sx={{ color: "#fff" }} />
                              </InputAdornment>
                            ),
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
                        <Button onClick={handleAddMoreContacts} sx={{ color: "#007BFF" }} startIcon={<AddIcon fontSize="small" sx={{ color: "#007BFF" }} />}>Add More Contacts</Button>
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
                        onClick={() => setOpenAddContact(false)}
                        sx={{
                          maxHeight: "23px",
                          maxWidth: "62px",
                          borderRadius: "8px",
                          color: "#007BFF",
                          borderColor: "#007BFF",
                          ":hover": { borderColor: "#007BFF" }

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
          <Dialog
            scroll="body"
            PaperProps={{
              sx: {
                width: "100%",
                maxWidth: "429px",
              },
            }}
            open={openAddMoreContacts}
            onClose={() => setOpenAddMoreContacts(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Card className="border-card">
              <DialogTitle
                id="alert-dialog-title"
                align="center"
                sx={{ fontSize: "16px" }}
              >
                Add Contact
                <IconButton
                  sx={{ float: "right" }}
                  onClick={() => setOpenAddMoreContacts(false)}
                >
                  <CancelOutlined />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <TextField
                    sx={{
                      "& fieldset": {
                        borderRadius: "30px",
                      },
                    }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Enter Name"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ color: "#6C63FF" }}
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5744 18.2994C16.5753 18.2994 18.1993 16.7311 18.1993 14.7994V13.3994C18.1993 11.4677 16.5753 9.89941 14.5744 9.89941H6.59944C4.59857 9.89941 2.97461 11.4677 2.97461 13.3994V14.7994C2.97461 16.7311 4.59857 18.2994 6.59944 18.2994H11.6744C12.0746 18.2994 12.3994 17.9858 12.3994 17.5994C12.3994 17.213 12.0746 16.8994 11.6744 16.8994H6.59944C5.39897 16.8994 4.42428 15.9585 4.42428 14.7994V13.3994C4.42428 12.2403 5.39897 11.2994 6.59944 11.2994H14.5744C15.7749 11.2994 16.7496 12.2403 16.7496 13.3994V14.7994C16.7496 15.9585 15.7749 16.8994 14.5744 16.8994C14.1742 16.8994 13.8496 17.213 13.8496 17.5994C13.8496 17.9858 14.1742 18.2994 14.5744 18.2994Z"
                              fill="#6C63FF"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.30313 0.0996094C4.90272 0.0996094 2.95312 1.98197 2.95312 4.29961C2.95312 6.61725 4.90272 8.49961 7.30313 8.49961C9.70355 8.49961 11.6531 6.61725 11.6531 4.29961C11.6531 1.98197 9.70355 0.0996094 7.30313 0.0996094ZM7.30313 1.49961C8.90398 1.49961 10.2031 2.75397 10.2031 4.29961C10.2031 5.84525 8.90398 7.09961 7.30313 7.09961C5.70229 7.09961 4.40313 5.84525 4.40313 4.29961C4.40313 2.75397 5.70229 1.49961 7.30313 1.49961Z"
                              fill="#6C63FF"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.82422 7.73608C3.2873 8.57888 2.2498 10.1728 2.2498 11.9997C2.2498 12.3861 1.92501 12.6997 1.5248 12.6997C1.1246 12.6997 0.799805 12.3861 0.799805 11.9997C0.799805 9.45937 2.36067 7.26768 4.60605 6.27168C4.86854 6.15543 5.17731 6.20106 5.39191 6.38652C5.90525 6.83028 6.58232 7.09981 7.3248 7.09981C8.06729 7.09981 8.7444 6.83027 9.2577 6.38652C9.47228 6.20106 9.78106 6.15543 10.0436 6.27168C11.8082 7.05496 13.1502 8.57604 13.6439 10.4249C13.744 10.7994 13.5104 11.1816 13.1227 11.2775C12.7354 11.3741 12.3396 11.1486 12.2396 10.7749C11.893 9.47505 11.0063 8.38364 9.82543 7.73612C9.11775 8.21704 8.25566 8.49988 7.32485 8.49988C6.39403 8.49988 5.53194 8.21707 4.82426 7.73612L4.82422 7.73608Z"
                              fill="#6C63FF"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.32461 14.7994H13.8496C14.2498 14.7994 14.5746 14.4858 14.5746 14.0994C14.5746 13.713 14.2498 13.3994 13.8496 13.3994H7.32461C6.9244 13.3994 6.59961 13.713 6.59961 14.0994C6.59961 14.4858 6.9244 14.7994 7.32461 14.7994Z"
                              fill="#6C63FF"
                            />
                          </svg>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Grid container columnSpacing={2}>
                    <Grid item xs={4}>
                      <FormControl
                        fullWidth
                        className="col-sm-2 mt-1"
                        sx={{
                          "& fieldset": {
                            borderRadius: "30px",
                          },
                        }}
                      >
                        <Select
                          sx={{
                            height: "42px",
                          }}
                          defaultValue={+91}
                          placeholder="Age"
                        >
                          <MenuItem value={+91}>
                            <IN style={{ height: "16px", marginRight: "6px" }} />
                            +91
                          </MenuItem>
                          <MenuItem value={+92}>
                            <PK style={{ height: "16px", marginRight: "6px" }} />
                            +92
                          </MenuItem>
                          <MenuItem value={+93}>
                            <AF style={{ height: "16px", marginRight: "6px" }} />
                            +93
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        sx={{
                          "& fieldset": {
                            borderRadius: "30px",
                          },
                        }}
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Phone"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    sx={{
                      "& fieldset": {
                        borderRadius: "30px",
                      },
                    }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Enter email"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ color: "#6C63FF" }}
                        >
                          <svg
                            width="22"
                            height="16"
                            viewBox="0 0 22 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.482 0.456055H3.54125C1.79405 0.456055 0.382812 1.81689 0.382812 3.50169V12.0553C0.382812 13.7401 1.79405 15.1009 3.54125 15.1009H18.482C20.2292 15.1009 21.6405 13.7401 21.6405 12.0553V3.50169C21.6405 1.83845 20.2292 0.456055 18.482 0.456055ZM14.562 7.80004L19.8932 2.65925C20.0501 2.9184 20.162 3.19925 20.162 3.52317V12.0768C20.162 12.4007 20.0724 12.6816 19.8932 12.9407L14.562 7.80004ZM18.482 1.90325H18.5716L11.6724 8.55604C11.4932 8.72886 11.2467 8.81519 11.0003 8.81519C10.7539 8.81519 10.5075 8.72886 10.3283 8.55604L3.4291 1.90325H3.51863H18.482ZM2.10765 12.9408C1.95077 12.6817 1.8389 12.4008 1.8389 12.0769V3.52333C1.8389 3.19939 1.92843 2.897 2.10765 2.65941L7.43884 7.8002L2.10765 12.9408ZM3.51889 13.6968H3.40686L8.49165 8.79356L9.27573 9.54964C9.74621 9.9816 10.3509 10.2409 11.0006 10.2409C11.6501 10.2409 12.2549 10.0033 12.7254 9.54964L13.5095 8.79356L18.5943 13.6968H18.4822H3.51889Z"
                              fill="#6C63FF"
                            />
                          </svg>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    sx={{
                      "& fieldset": {
                        borderRadius: "30px",
                      },
                    }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Enter Department"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ color: "#6C63FF", paddingLeft: "5px" }}
                        >
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.875 0.274902H4.125C4.00898 0.274902 3.89765 0.309144 3.81562 0.370081C3.73359 0.431019 3.6875 0.51372 3.6875 0.599903V6.12492H0.624999C0.508985 6.12492 0.397655 6.15916 0.315625 6.2201C0.233595 6.28103 0.1875 6.36374 0.1875 6.44992V16.1999C0.1875 16.2861 0.233594 16.3688 0.315625 16.4298C0.397656 16.4907 0.508985 16.5249 0.624999 16.5249H16.375C16.491 16.5249 16.6023 16.4907 16.6844 16.4298C16.7664 16.3688 16.8125 16.2861 16.8125 16.1999V6.44992C16.8125 6.36374 16.7664 6.28103 16.6844 6.2201C16.6023 6.15916 16.491 6.12492 16.375 6.12492H13.3125V0.599903C13.3125 0.51372 13.2664 0.431018 13.1844 0.370081C13.1023 0.309144 12.991 0.274902 12.875 0.274902ZM3.6875 15.8749H1.0625V6.77492H3.6875V15.8749ZM9.81249 15.8749H7.18729C7.18729 15.2548 7.18749 13.899 7.18749 13.2749H9.81248L9.81249 15.8749ZM12.4375 6.44992V15.8749H10.6875V12.9499C10.6875 12.8638 10.6414 12.7811 10.5594 12.7201C10.4773 12.6592 10.366 12.6249 10.25 12.6249H6.74999C6.63398 12.6249 6.52265 12.6592 6.44062 12.7201C6.35859 12.7811 6.31249 12.8638 6.31249 12.9499V15.6921C6.31249 15.7593 6.31269 15.8176 6.31327 15.8749H4.56248V0.9249H12.4375L12.4375 6.44992ZM15.9375 6.77492V15.8749H13.3125V6.77492H15.9375Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M5.875 4.17509H7.625C7.74101 4.17509 7.85234 4.14085 7.93438 4.07991C8.01641 4.01897 8.0625 3.93627 8.0625 3.85009V2.5501C8.0625 2.46391 8.01641 2.38121 7.93438 2.32028C7.85234 2.25934 7.74101 2.2251 7.625 2.2251H5.875C5.75899 2.2251 5.64765 2.25934 5.56562 2.32028C5.4836 2.38121 5.4375 2.46391 5.4375 2.5501V3.85009C5.4375 3.93627 5.48359 4.01897 5.56562 4.07991C5.64766 4.14085 5.75899 4.17509 5.875 4.17509ZM6.3125 2.87509H7.1875V3.52509H6.3125V2.87509Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M9.37501 4.17509H11.125C11.241 4.17509 11.3524 4.14085 11.4344 4.07991C11.5164 4.01897 11.5625 3.93627 11.5625 3.85009V2.5501C11.5625 2.46391 11.5164 2.38121 11.4344 2.32028C11.3524 2.25934 11.241 2.2251 11.125 2.2251H9.37501C9.25899 2.2251 9.14766 2.25934 9.06563 2.32028C8.9836 2.38121 8.9375 2.46391 8.9375 2.5501V3.85009C8.9375 3.93627 8.98359 4.01897 9.06563 4.07991C9.14766 4.14085 9.25899 4.17509 9.37501 4.17509ZM9.81251 2.87509H10.6875V3.52509H9.81251V2.87509Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M5.875 6.78889H7.625C7.74101 6.78889 7.85234 6.75465 7.93438 6.69371C8.01641 6.63277 8.0625 6.55007 8.0625 6.46388V5.16387C8.0625 5.07769 8.01641 4.99498 7.93438 4.93405C7.85234 4.87311 7.74101 4.83887 7.625 4.83887H5.875C5.75899 4.83887 5.64765 4.87311 5.56562 4.93405C5.4836 4.99498 5.4375 5.07769 5.4375 5.16387V6.46388C5.4375 6.55007 5.48359 6.63277 5.56562 6.69371C5.64765 6.75465 5.75899 6.78889 5.875 6.78889ZM6.3125 5.48887H7.1875V6.13888H6.3125V5.48887Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M9.37501 6.78889H11.125C11.241 6.78889 11.3524 6.75465 11.4344 6.69371C11.5164 6.63277 11.5625 6.55007 11.5625 6.46388V5.16387C11.5625 5.07769 11.5164 4.99498 11.4344 4.93405C11.3524 4.87311 11.241 4.83887 11.125 4.83887H9.37501C9.25899 4.83887 9.14766 4.87311 9.06563 4.93405C8.9836 4.99498 8.9375 5.07769 8.9375 5.16387V6.46388C8.9375 6.55007 8.98359 6.63277 9.06563 6.69371C9.14766 6.75465 9.25899 6.78889 9.37501 6.78889ZM9.81251 5.48887H10.6875V6.13888H9.81251V5.48887Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M5.875 9.40215H7.625C7.74101 9.40215 7.85234 9.36791 7.93438 9.30697C8.01641 9.24603 8.0625 9.16333 8.0625 9.07715V7.77715C8.0625 7.69097 8.01641 7.60826 7.93438 7.54733C7.85234 7.48639 7.74101 7.45215 7.625 7.45215H5.875C5.75899 7.45215 5.64765 7.48639 5.56562 7.54733C5.4836 7.60826 5.4375 7.69097 5.4375 7.77715V9.07715C5.4375 9.16333 5.48359 9.24603 5.56562 9.30697C5.64766 9.36791 5.75899 9.40215 5.875 9.40215ZM6.3125 8.10215H7.1875V8.75215H6.3125V8.10215Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M9.37501 9.40215H11.125C11.241 9.40215 11.3524 9.36791 11.4344 9.30697C11.5164 9.24603 11.5625 9.16333 11.5625 9.07715V7.77715C11.5625 7.69097 11.5164 7.60826 11.4344 7.54733C11.3524 7.48639 11.241 7.45215 11.125 7.45215H9.37501C9.25899 7.45215 9.14766 7.48639 9.06563 7.54733C8.9836 7.60826 8.9375 7.69097 8.9375 7.77715V9.07715C8.9375 9.16333 8.98359 9.24603 9.06563 9.30697C9.14766 9.36791 9.25899 9.40215 9.37501 9.40215ZM9.81251 8.10215H10.6875V8.75215H9.81251V8.10215Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M5.875 12.0159H7.625C7.74101 12.0159 7.85234 11.9817 7.93438 11.9207C8.01641 11.8598 8.0625 11.7771 8.0625 11.6909V10.3909C8.0625 10.3047 8.01641 10.222 7.93438 10.1611C7.85234 10.1002 7.74101 10.0659 7.625 10.0659H5.875C5.75899 10.0659 5.64765 10.1002 5.56562 10.1611C5.4836 10.222 5.4375 10.3047 5.4375 10.3909V11.6909C5.4375 11.7771 5.48359 11.8598 5.56562 11.9207C5.64766 11.9817 5.75899 12.0159 5.875 12.0159ZM6.3125 10.7159H7.1875V11.3659H6.3125V10.7159Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M9.37501 12.0159H11.125C11.241 12.0159 11.3524 11.9817 11.4344 11.9207C11.5164 11.8598 11.5625 11.7771 11.5625 11.6909V10.3909C11.5625 10.3047 11.5164 10.222 11.4344 10.1611C11.3524 10.1002 11.241 10.0659 11.125 10.0659H9.37501C9.25899 10.0659 9.14766 10.1002 9.06563 10.1611C8.9836 10.222 8.9375 10.3047 8.9375 10.3909V11.6909C8.9375 11.7771 8.98359 11.8598 9.06563 11.9207C9.14766 11.9817 9.25899 12.0159 9.37501 12.0159ZM9.81251 10.7159H10.6875V11.3659H9.81251V10.7159Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M2.375 9.37483C2.49102 9.37483 2.60234 9.34058 2.68437 9.27965C2.7664 9.21871 2.8125 9.13601 2.8125 9.04982V7.74981C2.8125 7.57033 2.6166 7.4248 2.375 7.4248C2.1334 7.4248 1.9375 7.57033 1.9375 7.74981V9.04982C1.9375 9.13601 1.98359 9.21871 2.06562 9.27965C2.14766 9.34058 2.25899 9.37483 2.375 9.37483Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M2.375 11.9749C2.49102 11.9749 2.60234 11.9406 2.68437 11.8797C2.7664 11.8187 2.8125 11.736 2.8125 11.6499V10.3499C2.8125 10.1704 2.6166 10.0249 2.375 10.0249C2.1334 10.0249 1.9375 10.1704 1.9375 10.3499V11.6499C1.9375 11.736 1.98359 11.8187 2.06562 11.8797C2.14766 11.9406 2.25899 11.9749 2.375 11.9749Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M2.375 14.575C2.49102 14.575 2.60234 14.5408 2.68437 14.4798C2.7664 14.4189 2.8125 14.3362 2.8125 14.25V12.95C2.8125 12.7705 2.6166 12.625 2.375 12.625C2.1334 12.625 1.9375 12.7705 1.9375 12.95V14.25C1.9375 14.3362 1.98359 14.4189 2.06562 14.4798C2.14766 14.5408 2.25899 14.575 2.375 14.575Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M14.625 9.37483C14.741 9.37483 14.8524 9.34058 14.9344 9.27965C15.0164 9.21871 15.0625 9.13601 15.0625 9.04982V7.74981C15.0625 7.57033 14.8666 7.4248 14.625 7.4248C14.3834 7.4248 14.1875 7.57033 14.1875 7.74981V9.04982C14.1875 9.13601 14.2336 9.21871 14.3156 9.27965C14.3977 9.34058 14.509 9.37483 14.625 9.37483Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M14.625 11.9749C14.741 11.9749 14.8524 11.9406 14.9344 11.8797C15.0164 11.8187 15.0625 11.736 15.0625 11.6499V10.3499C15.0625 10.1704 14.8666 10.0249 14.625 10.0249C14.3834 10.0249 14.1875 10.1704 14.1875 10.3499V11.6499C14.1875 11.736 14.2336 11.8187 14.3156 11.8797C14.3977 11.9406 14.509 11.9749 14.625 11.9749Z"
                              fill="#6C63FF"
                            />
                            <path
                              d="M14.625 14.575C14.741 14.575 14.8524 14.5408 14.9344 14.4798C15.0164 14.4189 15.0625 14.3362 15.0625 14.25V12.95C15.0625 12.7705 14.8666 12.625 14.625 12.625C14.3834 12.625 14.1875 12.7705 14.1875 12.95V14.25C14.1875 14.3362 14.2336 14.4189 14.3156 14.4798C14.3977 14.5408 14.509 14.575 14.625 14.575Z"
                              fill="#6C63FF"
                            />
                          </svg>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    sx={{
                      "& fieldset": {
                        borderRadius: "30px",
                      },
                    }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Enter Role"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ paddingRight: "22px" }}
                        />
                      ),
                    }}
                  />
                  <Grid
                    container
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                  >
                    <Grid item xs={3.5}>
                      <Typography variant="h5" paddingTop={"9px"}>
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

                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    {addMore.map((newContact) => (
                      <Grid container paddingTop={0.5} paddingBottom={0.5}>
                        <Grid
                          container
                          sx={{
                            borderRadius: "10px",
                            background: "#1B416B",
                            alignItems: "center",
                            justifyContent: "space-between",
                            maxWidth: "320px",
                            maxHeight: "40px",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#D6E9FF",
                              paddingLeft: "15px",
                              paddingTop: "10px",
                            }}
                            variant="h4"
                          >
                            {newContact.contactName}
                          </Typography>
                          <IconButton sx={{ color: "#D6E9FF" }}>
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.86774 16.0068C1.74634 16.0066 1.62631 15.9811 1.51529 15.932C1.40427 15.8829 1.30468 15.8112 1.22286 15.7216C1.13956 15.6326 1.07599 15.5271 1.03634 15.4119C0.996676 15.2967 0.981818 15.1744 0.992735 15.0531L1.20711 12.6958L11.1104 2.79607L14.2052 5.89007L4.30461 15.7889L1.94736 16.0033C1.92089 16.0058 1.89432 16.0069 1.86774 16.0068ZM14.823 5.27144L11.729 2.17744L13.5849 0.321567C13.6661 0.240213 13.7626 0.175674 13.8688 0.13164C13.9751 0.0876062 14.0889 0.0649414 14.2039 0.0649414C14.3189 0.0649414 14.4328 0.0876062 14.539 0.13164C14.6452 0.175674 14.7417 0.240213 14.823 0.321567L16.6789 2.17744C16.7602 2.25871 16.8248 2.35521 16.8688 2.46143C16.9128 2.56766 16.9355 2.68152 16.9355 2.7965C16.9355 2.91149 16.9128 3.02535 16.8688 3.13158C16.8248 3.2378 16.7602 3.3343 16.6789 3.41557L14.8239 5.27057L14.823 5.27144Z"
                                fill="#D6E9FF"
                              />
                            </svg>
                          </IconButton>
                        </Grid>
                        <IconButton sx={{ color: "#DF362D" }}>
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.4998 0.3125C9.22024 0.312399 9.9147 0.58162 10.4468 1.0673C10.9789 1.55299 11.3103 2.22004 11.3758 2.9375H15.8498C16.0493 2.93756 16.2414 3.01336 16.3872 3.14957C16.533 3.28579 16.6216 3.47226 16.6352 3.67132C16.6488 3.87038 16.5864 4.06719 16.4604 4.22196C16.3345 4.37674 16.1546 4.47795 15.9569 4.50515L15.8498 4.5125H15.2377L13.9073 16.0415C13.8481 16.5533 13.6028 17.0254 13.2181 17.3681C12.8334 17.7108 12.3361 17.9001 11.821 17.9H5.17865C4.66347 17.9001 4.16623 17.7108 3.78154 17.3681C3.39685 17.0254 3.15155 16.5533 3.0923 16.0415L1.7609 4.5125H1.1498C0.959505 4.51249 0.775646 4.44357 0.632227 4.31849C0.488809 4.19341 0.395535 4.02063 0.369655 3.8321L0.362305 3.725C0.362313 3.5347 0.431229 3.35084 0.55631 3.20742C0.681391 3.064 0.854173 2.97073 1.0427 2.94485L1.1498 2.9375H5.62385C5.68935 2.22004 6.02068 1.55299 6.5528 1.0673C7.08491 0.58162 7.77936 0.312399 8.4998 0.3125ZM6.9248 6.875C6.66755 6.875 6.4523 7.03775 6.40821 7.25195L6.3998 7.3349V13.7661L6.40821 13.848C6.4523 14.0622 6.66755 14.225 6.9248 14.225C7.18205 14.225 7.3973 14.0622 7.4414 13.848L7.4498 13.7651V7.33595L7.4414 7.25195C7.3973 7.0388 7.18205 6.875 6.9248 6.875ZM10.0748 6.875C9.81755 6.875 9.6023 7.03775 9.5582 7.25195L9.5498 7.3349V13.7661L9.5582 13.848C9.6023 14.0622 9.81755 14.225 10.0748 14.225C10.3321 14.225 10.5473 14.0622 10.5914 13.848L10.5998 13.7651V7.33595L10.5914 7.25195C10.5473 7.0388 10.3321 6.87605 10.0748 6.87605V6.875ZM8.4998 1.8875C7.86455 1.8875 7.3343 2.339 7.21355 2.9375H9.78605C9.66426 2.339 9.13505 1.8875 8.4998 1.8875Z"
                              fill="#DF362D"
                            />
                          </svg>
                        </IconButton>
                      </Grid>
                    ))}
                  </Grid>
                  <Button sx={{ color: "#007BFF", float: "right", height: 40 }}>
                    Add More Contacts
                  </Button>
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    direction={"row"}
                  >
                    <Button
                      onClick={() => setOpenAddMoreContacts(false)}
                      sx={{
                        maxHeight: "23px",
                        maxWidth: "52px",
                        borderRadius: "8px",
                        backgroundColor: "#007BFF",
                        ":hover": { background: "#007BFF" },
                      }}
                      variant="contained"
                    >
                      Back
                    </Button>
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
                </DialogContentText>
              </DialogContent>
            </Card>
          </Dialog>
          <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}><b>UnTouched Leads</b></Typography>
          <br />
        </Grid>
        <Grid item xs={3}>

        </Grid>
      </Grid>

      {/*  Table starts from here */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1B416B" }}>
              <TableCell sx={{ color: "#FEFEFE", fontWeight: "700", whiteSpace: "nowrap" }} align="center">
                Contact Name
                <ArrowUpwardIcon fontSize="small" sx={{ cursor: "pointer" }} />
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE", fontWeight: "700" }} align="center">
                Phone
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE", fontWeight: "700" }} align="center">
                Email
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE", fontWeight: "700", whiteSpace: "nowrap" }} align="center">
                Country
                <ArrowUpwardIcon fontSize="small" sx={{ cursor: "pointer" }} />
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE", fontWeight: "700" }} align="center">
                City
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE", fontWeight: "700" }} align="center">
                Status
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE", cursor: "pointer" }} onClick={handleClickOpen} align="center">
                <SettingsIcon size="small" color="white" />
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
                  <FormControlLabel control={<Checkbox />} label="Closed Deals" />
                  <FormControlLabel control={<Checkbox />} label="Next Activity Date" />
                  <FormControlLabel control={<Checkbox />} label="Owner" />
                  <FormControlLabel control={<Checkbox />} label="Done Activities" />
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
              <TableRow key={row.accName} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  // onClick={handleClickOverviewContact}
                  sx={{ cursor: "pointer" }}
                >
                  <Div sx={{ display: "flex", justifyContent: "flex-start", whiteSpace: "nowrap" }}>
                    <Avatar

                      size="small"
                      sx={{
                        fontSize: "12px",

                        bgcolor: row.bcolor,
                        width: "38px",
                        height: "38px",
                      }}
                    >
                      {row.accName.slice(0, 2).toUpperCase()}
                    </Avatar>
                    <Typography variant="h4" paddingLeft="12px" sx={{ color: "#304995" }}>
                      {row.accName}
                      <br />
                      <span style={{ color: "#475259", fontSize: "10px" }}>
                        {row.desig}
                      </span>
                    </Typography>
                  </Div>
                </TableCell>
                <TableCell align="center" sx={{ whiteSpace: "nowrap" }}><WifiCalling3Icon sx={{ color: blue[500] }} />{row.phone}</TableCell>
                <TableCell align="center" sx={{ whiteSpace: "nowrap" }}><MailOutlineIcon sx={{ color: blue[500] }} />{row.email}</TableCell>
                <TableCell align="center">{row.country}</TableCell>
                <TableCell align="center">{row.city}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center" onClick={handleClickAction}
                  sx={{ cursor: "pointer" }}>
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

              {/* Menu items */}

              <MenuItem onClick={handleClickEditContact}><ModeEdit sx={{ fontSize: 20, mr: 2 }} />Edit</MenuItem>
              <MenuItem><DeleteIcon sx={{ fontSize: 20, mr: 2 }} />Delete</MenuItem>
              <MenuItem><ArchiveIcon sx={{ fontSize: 20, mr: 2 }} />Assign Leads</MenuItem>
              <MenuItem><ChatIcon sx={{ fontSize: 20, mr: 2 }} />Chat</MenuItem>
            </Menu>

          </TableBody>
        </Table>
      </TableContainer>

    </Card>
  )
}

export default UnTouchedLeadsRight