import React from "react";
import { Avatar, Card, Grid, Typography, Button } from "@mui/material";
import {
  Autocomplete,
  FormControl,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { InputAdornment } from "@mui/material";
import { HiOutlineSearch } from "react-icons/hi";
import TextField from "@mui/material/TextField";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { CancelOutlined } from "@mui/icons-material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import makeStyles from "@mui/styles/makeStyles";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CircleIcon from "@mui/icons-material/Circle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Div from "@jumbo/shared/Div";
import Box from "@mui/material/Box";

const dropDownLists = [
  {
    type: "1",
    con_pers: "ravi",
    filter: "Category",
  },
  {
    type: "2",
    con_pers: "ani",
    filter: "Size",
  },
  {
    type: "3",
    con_pers: "kevin",
    filter: "Recent",
  },
];

const useStyles = makeStyles({
  timeline: {
    transform: "rotate(90deg)",
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(-90deg)",
    textAlign: "center",
    minWidth: 50,
  },
  timelineIcon: {
    transform: "rotate(-90deg)",
  },
});

const TicketsRightSideCardList = () => {
  const [openAddContact, setOpenCreateAccount] = useState(false);

  const handleCreateAccount = () => {
    setOpenCreateAccount(true);
  };
  return (
    <Grid Container className="border-card" sx={{background:"white"}}>
      <Dialog
        open={openAddContact}
        onClose={() => setOpenCreateAccount(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          align="center"
          id="alert-dialog-title"
          sx={{ fontSize: "18px" }}
        >
          Create Ticket
          <IconButton
            sx={{ float: "right" }}
            onClick={() => setOpenCreateAccount(false)}
          >
            <CancelOutlined />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{backgroundColor:"rgba(141, 119, 190, 0.5)"}}>
        <br/>
          <Card sx={{ width: "848px",height: "811px", borderRadius:"10px",background:"white"}} className="border-card">
            <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
              <Grid item xs={6}>
                <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Ticket Name"
                  InputProps={{
                    StartAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthIcon sx={{ color: "#6C63FF" }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Name"
                  InputProps={{}}
                  variant="outlined"
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
              <Grid item xs={6}>
                <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Email"
                  InputProps={{
                    StartAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthIcon sx={{ color: "#6C63FF" }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Order Number"
                        sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
              <Grid item xs={6}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Ticket Status"
                        sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Ticket Type"
                        sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
              <Grid item xs={6}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Project"
                        sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Assigned to"
                        sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
              <Grid item xs={6}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Priority"
                        sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Due Date"
                  InputProps={{}}
                  variant="outlined"
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Ticket Description"
                  InputProps={{
                    sx: { height: "80px" },
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Typography variant="h5" sx={{ pl: 2, pt: 1 }}>
              Link Ticket
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <TextField
                  className="col-sm-12 input-box mt-1"
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                  id="outlined-basic"
                  placeholder="Ticket Number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={5}>
                <Button variant="text" sx={{ color: "#007BFF" }}>
                  <AddIcon sx={{ color: "#007BFF",fontSize:"20px" }} />
                  Add More
                </Button>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <BookmarkBorderIcon />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4" align="left" sx={{ pl: 2, pt: 1 }}>
                  Ticket 02
                </Typography>
              </Grid>
              <Grid item xs={7} align="left">
                <DeleteIcon sx={{ color: "red" }} />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <BookmarkBorderIcon />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4" align="left" sx={{ pl: 2, pt: 1 }}>
                  Ticket 03
                </Typography>
              </Grid>
              <Grid item xs={7} align="left">
                <DeleteIcon sx={{ color: "red" }} />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <BookmarkBorderIcon />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4" align="left" sx={{ pl: 2, pt: 1 }}>
                  Ticket 04
                </Typography>
              </Grid>
              <Grid item xs={7} align="left">
                <DeleteIcon sx={{ color: "red" }} />
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography
                  variant="h6"
                  align="left"
                  sx={{ pl: 2, pt: 1, fontSize: "10px" }}
                >
                  Attach File
                </Typography>
              </Grid>
              <Grid item align="left" xs={10}>
                <Card
                  sx={{
                    bgcolor: "#D4F1F4",
                    height: "114px",
                    width: "490px",
                    pt: 1,
                    border: "1px dashed black",
                    borderRadius: 6,
                  }}
                >
                  <Grid container>
                    <Grid item align="center" xs={12}>
                      <CloudUploadIcon />
                    </Grid>
                  </Grid>
                  <Typography variant="h6" align="center">
                    Drag Your file to start upload
                  </Typography>
                  <Typography variant="h6" align="center">
                    (Or)
                  </Typography>
                  <Grid Container>
                    <Grid item align="center" xs={12}>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          bgcolor: "#1E90FF",
                          "&:hover": { color: "#FFFFFF",fontSize:"14px", bgcolor: "#008000",borderRadius:"8px" },
                        }}
                      >
                        Browse Files
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={2}>

              </Grid>
              
            </Grid>
            <br />

            <Grid container align="center" spacing={2}>
              <Grid item align="right" xs={5.5}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    bgcolor: "#1E90FF",
                    paddingRight: "12px",
                    "&:hover": { color: "#FFFFFF", bgcolor: "#008000",fontSize:"14px",borderRadius:"8px" },
                  }}
                >
                  Save
                </Button>
              </Grid>
              <Grid item align="left" xs={6.5}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "#1E90FF",
                    borderColor:"#1E90FF",
                    paddingRight: "12px",
                    "&:hover": { color: "#1E90FF", bgcolor: "white",fontSize:"14px",borderRadius:"8px" },
                  }}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Card>
        </DialogContent>
      </Dialog>

      <Grid container sx={{backgroundColor:"white"}}>
      <Grid item xs={0.5}>

      </Grid>
        <Grid item xs={5.5} onClick={handleCreateAccount}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1E90FF",
              paddingRight: "8px",
              borderRadius:"8px",
              
            }}
          >
            Create Ticket
          </Button>
          <br />
          <br />
        </Grid>
      </Grid>
      <Grid container className="border-card" sx={{background: "#FFFFFF",border: "1px solid #000000",borderRadius: "10px"}}>
        <Grid container>
          <Grid item xs={4}>
            <Card className="border-card" sx={{borderRadius: "10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            <Card sx={{ border: 1, pb: 1, borderRadius: "30px",mb:1 }}>
                <TextField
                  className="col-10 input-box"
                  variant="standard"
                  id="outlined-search"
                  type="search"
                  placeholder="Search Tickets"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HiOutlineSearch size={20} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderRadius: "30px", mr: 1 },
                    mr: 1,
                    ml: 2,
                  }}
                />
              </Card>
              <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontWeight: 600,fontSize:"13px" }}>Ticket Name</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography sx={{ fontWeight: 600,fontSize:"13px" }}> Created</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }}}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c1.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c2.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c3.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c4.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c5.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c6.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c7.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c1.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c2.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c3.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c4.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>
                    Proin ac augue lacus.
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography sx={{ fontSize: "13px" }}>10 min</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography
                  sx={{ pl: 3, size: "1px", fontWeight: 400,fontSize:"15px" }}
                >
                  <BookmarkBorderIcon /> Ticket 1
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: "#1E90FF",
                    paddingRight: "10px",
                    borderRadius: 8,
                  }}
                >
                  Start Chat
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography
                  variant="h5"
                  sx={{ pl: 3, color: "#747C70",fontSize:"12px", fontWeight: 600 }}
                >
                  Ticket Name
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="h5"
                  sx={{ pl: 1, pt: 1, color: "#746C70", fontWeight: 600 }}
                >
                  Ticket Status
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography sx={{ pl: 3, color: "black",fontSize:"15px" }}>
                  Proin ac augue lacus.{" "}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "50%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      // sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                      <TextField
                        sx={{
                          "& fieldset": { borderRadius: "30px" },
                          height: "3px",
                          bgcolor: "#F69C9E",
                          borderRadius: "30px",
                        }}
                        {...params}
                        placeholder="To-do"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography
                  sx={{
                    pl: 3,
                    size: "10px",
                    fontWeight: 600,
                    color: "#747C70",
                    fontSize:"12px"
                  }}
                >
                  Ticket Description
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{
                    pl: 1,
                    size: "10px",
                    fontWeight: 600,
                    color: "#747C70",
                    fontSize:"12px"
                  }}
                >
                  Ticket Type
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography  sx={{ pl: 3, color: "black" ,fontSize:"15px"}}>
                  Phasellus ullamcorper, est id pellentesque faucibus, erat
                  neque sagittis purus, nec consequat est neque vel quam.
                  Suspendisse potenti.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "50%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        sx={{
                          "& fieldset": { borderRadius: "30px" },
                          color: "#DB161B",
                          height: "3px",
                          bgcolor: "#586FCB",
                          borderRadius: "30px",
                        }}
                        {...params}
                        placeholder="Task"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography
                  sx={{
                    pl: 3,
                    color: "#747C70",
                    fontSize:"12px",
                    fontWeight: 600,
                  }}
                >
                  Name
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                 
                  sx={{
                    pl: 1,
                    color: "#747C70",fontSize:"12px",
                    fontWeight: 600,
                  }}
                >
                  Project
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography  sx={{ pl: 3, color: "black",fontSize:"15px" }}>
                  Gokulraj Kumar
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        sx={{
                          "& fieldset": { borderRadius: "30px" },
                          height: "3px",
                          color: "white",
                          bgcolor: "#586FCB",
                          borderRadius: "30px",
                        }}
                        {...params}
                        placeholder="HR"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography
                 
                  sx={{
                    pl: 3,
                    color: "#747C70",
                    fontSize:"12px",
                    fontWeight: 600,
                  }}
                >
                  Email
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{
                    pl: 1,
                    color: "#747C70",
                    fontSize:"12px",
                    fontWeight: 600,
                  }}
                >
                  Assigned to
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h5" sx={{ pl: 3, color: "black",fontSize:"15px" }}>
                  gokul@gmail.com
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    sx={{}}
                    ListboxProps={{ style: { maxHeight: "15" } }}
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        sx={{
                          "& fieldset": { borderRadius: "30px" },
                          height: "3px",
                          color: "white",
                          bgcolor: "#586FCB",
                          borderRadius: "30px",
                          fontColor: "white",
                        }}
                        {...params}
                        placeholder="Roshan"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography
                  sx={{
                    pl: 3,
                    color: "#747C70",
                    fontSize:"12px",
                    fontWeight: 600,
                  }}
                >
                  Order Number
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{
                    pl: 1,
                    color: "#747C70",
                    fontSize:"12px",
                    fontWeight: 600,
                  }}
                >
                  Priority
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h3" sx={{ pl: 3 }}>
                  -
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        align="center"
                        sx={{
                          "& fieldset": { borderRadius: "30px" },
                          height: "3px",
                          bgcolor: "white",
                          borderRadius: "30px",
                          fontColor: "white",
                        }}
                        {...params}
                        placeholder="Medium"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <br />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography
                  
                  sx={{
                    pl: 3,
                    color: "#747C70",
                    fontSize:"12px",
                    fontWeight: 600,
                  }}
                >
                  Linked Tickets
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{
                    pl: 1,
                    color: "#747C70",
                    fontSize:"12px",
                    fontWeight: 600,
                  }}
                >
                  Due Date
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <Card sx={{ border: 1, p: 1, borderRadius: "30px",mx:2,my:1 }}>
                <TextField
                  className="col-10 input-box"
                  variant="standard"
                  id="outlined-search"
                  type="search"
                  placeholder="Search Linked Tickets"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HiOutlineSearch size={20} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderRadius: "30px", mr: 1 },
                    mr: 1,
                    ml: 2,
                  }}
                />
              </Card>
              </Grid>

              <Grid item xs={4}>
                <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.type}
                    options={dropDownLists}
                    renderInput={(params) => (
                      <TextField
                        align="center"
                        sx={{
                          "& fieldset": { borderRadius: "30px" },
                          height: "3px",
                          bgcolor: "white",
                          borderRadius: "30px",
                          fontColor: "white",
                        }}
                        {...params}
                        placeholder="dd/mm/yy"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography
                  variant="h5"
                  sx={{ pl: 3, color: "#746C70", size: "10px" }}
                ></Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                 
                  sx={{ color: "#746C70", fontSize: "12px" }}
                >
                  <ArrowForwardIosIcon
                    sx={{ width: "12px", color: "#586FCB", fontSize: "12px" }}
                  />
                  Chat History
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {/* <Grid item xs={1}>
            <BookmarkBorderIcon/>
            </Grid> */}
              <Grid item xs={5}>
                <Typography align="left" sx={{ pl: 3,fontSize:"15px" }}>
                  {" "}
                  <BookmarkBorderIcon /> Ticket 02
                </Typography>
              </Grid>
              <Grid item xs={7} align="left">
                <Typography
                  variant="h5"
                  sx={{ color: "#746C70", size: "10px", fontWeight: 600 }}
                >
                  Attachments
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Typography  align="left" sx={{ pl: 3, pt: 1,fontSize:"15px" }}>
                  <BookmarkBorderIcon /> Ticket 03
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{}}>
                <Button
                  variant="text"
                  sx={{ color: "#007BFF", size: "10px", pl: 0 }}
                >
                  <AttachFileIcon sx={{ width: "12px" }} /> Add file
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Typography align="left" sx={{ pl: 3, pt: 1,fontSize:"15px"}}>
                  <BookmarkBorderIcon /> Ticket 04
                </Typography>
              </Grid>
              <Grid item xs={7} align="left"></Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={5}></Grid>
              <Grid item xs={7} align="left"></Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#746C70",
                    size: "10px",
                    pl: 3,
                    fontWeight: 600,
                  }}
                >
                  Ticket History
                </Typography>
              </Grid>
              {/* <Grid item xs={9} align="left"></Grid> */}
            </Grid>

            <Grid container >
            <Grid item xs={9} sx={{pl:3}}>
              <Grid container>
              <Grid item xs={0.5}>
                <CircleIcon sx={{fontSize:"15px", mt:"2px",ml:"5px",color:"#304995"}}/>
              </Grid>
              <Grid item xs={3}>
              <Grid container>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
              </Grid>
              </Grid>
              <Grid item xs={0.5}>
                <CircleIcon sx={{fontSize:"15px", mt:"2px",ml:"5px",color:"#304995"}}/>
              </Grid>
              <Grid item xs={3}>
              <Grid container>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
              </Grid>
              </Grid>
              <Grid item xs={0.5}>
                <CircleIcon sx={{fontSize:"15px", mt:"2px",ml:"5px",color:"#304995"}}/>
              </Grid>
            <Grid item xs={3}>
              <Grid container>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
                <Grid item xs={2}>
                <HorizontalRuleIcon sx={{color:"#304995"}}/>
                </Grid>
              </Grid>
            </Grid>
              <Grid item xs={0.5}>
                <CircleIcon sx={{fontSize:"15px", mt:"2px",ml:"5px",color:"#304995"}}/>
              </Grid> 
              </Grid>
              </Grid>
          </Grid>
            <Grid container spacing={4}>
              <Grid item>
                <Typography sx={{color:"black",fontSize:"12px",fontWeight:500}}>
                  Created Jan 23
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{color:"black",fontSize:"12px",fontWeight:500}}>
                  Assigned to Project
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{color:"black",fontSize:"12px",fontWeight:500}}>
                  Assigned to Roshan
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TicketsRightSideCardList;
