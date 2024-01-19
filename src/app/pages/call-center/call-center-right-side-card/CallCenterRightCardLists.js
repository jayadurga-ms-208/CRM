import Div from "@jumbo/shared/Div";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EventNoteIcon from "@mui/icons-material/EventNote";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineSearch } from "react-icons/hi";
import { deepOrange, deepPurple } from "@mui/material/colors";
import "./CallCenter.css";
import { CloseIcon } from "app/icons/PngIcons";
import CancelIcon from "@mui/icons-material/Cancel";
import DndWrapper from "app/pages/contacts/DndWrapper";
import { useDropzone } from "react-dropzone";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import data from "./data";

const contacts = [
  {
    country: "India",
    state: "Tamilnadu",
    mobile_code: "+91",
    industry_type: "Product Bsaed",
  },
  { state: "Kerala", mobile_code: "+92", industry_type: "Service Bsaed" },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const CallCenterRightCardLists = () => {
  const [value, setValue] = React.useState(0);
  const [openUpload, setOpenUpload] = useState(false);
  const [openAddContact, setOpenAddContact] = useState(false);
  const [openSummary, setOpenSummary] = React.useState(false);
  const [openWeeklyGraph, setOpenWeeklyGraph] = React.useState(false);
  const [openWeeklyReport, setOpenWeeklyReport] = React.useState(false);
  const [openAddTodayCalls, setOpenAddTodayCalls] = useState(false);
  const [openPrioritizeCalls, setOpenPrioritizeCalls] = useState(false);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <ListItem selected key={file.path} sx={{ width: "auto", mr: 1 }}>
      {file.path} - {file.size} bytes
    </ListItem>
  ));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleUpload = () => {
    setOpenUpload(true);
  };

  const handleAddContact = () => {
    setOpenAddContact(true);
  };

  const handleShowSummary = () => {
    setOpenSummary(true);
  };

  const handleShowWeeklyGraph = () => {
    setOpenWeeklyGraph(true);
  };

  const handleShowWeeklyReport = () => {
    setOpenWeeklyReport(true);
  };

  const handleShowTodayCalls = () => {
    setOpenAddTodayCalls(true);
  };

  const handleShowPrioritizeCalls = () => {
    setOpenPrioritizeCalls(true);
  };

  return (
    <>
      <Card sx={{ boxShadow: "none" }}>
        <Div
          sx={{ display: "flex", justifyContent: "space-evenly", pt: 1, pb: 1 }}
        >
          <Div sx={{ textAlign: "center", cursor: "pointer" }}>
            <IconButton
              onClick={handleShowSummary}
              sx={{
                backgroundColor: "green",
                color: "white",
                mb: 1,
                "&: hover": {
                  backgroundColor: "green",
                },
              }}
            >
              <NoteAltIcon fontSize="small" />
            </IconButton>
            <br />
            <Typography variant="h5" textAlign="center">
              Summary
            </Typography>
          </Div>

          {/* popup for summary */}
          <Dialog
            open={openSummary}
            onClose={() => setOpenSummary(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" sx={{ p: 0 }}>
              <Div sx={{ float: "right" }}>
                <IconButton onClick={() => setOpenSummary(false)}>
                  <CancelIcon />
                </IconButton>
              </Div>
            </DialogTitle>
            <DialogContent>
              <Div className="card p-2">
                <Grid container columnSpacing={2}>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ minWidth: "115px", minHeight: "120px" }}
                    >
                      Month
                      <br />
                      Dec
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ minWidth: "115px", minHeight: "120px" }}
                    >
                      Weekly Calling Goal
                      <br />
                      275
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ minWidth: "115px", minHeight: "120px" }}
                    >
                      Weekly Contact Goal
                      <br />
                      30
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ minWidth: "115px", minHeight: "120px" }}
                    >
                      Weekly Meeting Goal
                      <br />
                      15
                    </Button>
                  </Grid>
                </Grid>
              </Div>
            </DialogContent>
          </Dialog>

          <Div sx={{ textAlign: "center", cursor: "pointer" }}>
            <IconButton
              onClick={handleShowWeeklyReport}
              sx={{
                backgroundColor: "red",
                color: "white",
                mb: 1,
                "&: hover": {
                  backgroundColor: "red",
                },
              }}
            >
              <EventNoteIcon fontSize="small" />
            </IconButton>
            <br />
            <Typography variant="h5" textAlign="center">
              Weekly Report
            </Typography>
          </Div>

          {/* popup for weekly report */}
          <Dialog
            open={openWeeklyReport}
            onClose={() => setOpenWeeklyReport(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" sx={{ p: 0.5 }}>
              <Div sx={{ float: "right" }}>
                <IconButton onClick={() => setOpenWeeklyReport(false)}>
                  <CancelIcon />
                </IconButton>
              </Div>
            </DialogTitle>
            <DialogContent>
              <Grid
                container
                columnSpacing={3}
              >
                <Grid item xs={9}>
                  <Table sx={{maxWidth: "300px"}}>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Mon</TableCell>
                        <TableCell>Tue</TableCell>
                        <TableCell>Wed</TableCell>
                        <TableCell>Thu</TableCell>
                        <TableCell>Fri</TableCell>
                        <TableCell>Sat</TableCell>
                        <TableCell>Sun</TableCell>
                        <TableCell>Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Week 1</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>17</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>14</TableCell>
                        <TableCell>83</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Week 2</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>12</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>14</TableCell>
                        <TableCell>78</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained">Total Key</Button>
                  <Button variant="contained">On Track</Button>
                  <Button variant="contained">Under Goal</Button>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>

          <Div sx={{ textAlign: "center", cursor: "pointer" }}>
            <IconButton
              onClick={handleShowWeeklyGraph}
              sx={{
                backgroundColor: "grey",
                color: "white",
                mb: 1,
                "&: hover": {
                  backgroundColor: "grey",
                },
              }}
            >
              <AssessmentIcon fontSize="small" />
            </IconButton>
            <br />
            <Typography variant="h5" textAlign="center">
              Weekly Graph
            </Typography>
          </Div>

          {/* popup for weekly graph */}
          <Dialog
            open={openWeeklyGraph}
            onClose={() => setOpenWeeklyGraph(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" sx={{ p: 0 }}>
              <Div sx={{ float: "right" }}>
                <IconButton onClick={() => setOpenWeeklyGraph(false)}>
                  <CancelIcon />
                </IconButton>
              </Div>
            </DialogTitle>
            <DialogContent>
              <Grid container sx={{ minWidth: "500px" }}>
                <Grid item xs={12}>
                  <JumboDemoCard
                    // title={"Revenue Analytics"}
                    wrapperSx={{ pt: 0, backgroundColor: "background.paper" }}
                  >
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart
                        data={data}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                      >
                        <XAxis dataKey="name" />
                        <YAxis
                          yAxisId="left"
                          orientation="left"
                          stroke="#03275b"
                        />
                        <YAxis
                          yAxisId="right"
                          orientation="right"
                          stroke="#19A6D2"
                        />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip
                          labelStyle={{ color: "black" }}
                          itemStyle={{ color: "black" }}
                          cursor={false}
                        />
                        <Legend />
                        <defs>
                          <linearGradient
                            id="color1"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#6200EE"
                              stopOpacity={1}
                            />
                            <stop
                              offset="95%"
                              stopColor="#B819D2"
                              stopOpacity={1}
                            />
                          </linearGradient>
                        </defs>
                        <defs>
                          <linearGradient
                            id="color2"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#1ABBDE"
                              stopOpacity={1}
                            />
                            <stop
                              offset="95%"
                              stopColor="#09BCA7"
                              stopOpacity={1}
                            />
                          </linearGradient>
                        </defs>
                        <Bar yAxisId="left" dataKey="pv" fill={"#1e88e5"} />
                      </BarChart>
                    </ResponsiveContainer>
                  </JumboDemoCard>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>

          <Div sx={{ textAlign: "center", cursor: "pointer", mr: 1 }}>
            <Button variant="contained" onClick={handleUpload}>
              Upload
            </Button>
          </Div>

          {/* popup for upload files */}
          <Dialog
            open={openUpload}
            onClose={() => setOpenUpload(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "18px", verticalAlign: "middle" }}>
                Upload Contact
              </Typography>
              <IconButton
                onClick={() => setOpenUpload(false)}
                sx={{ float: "right" }}
              >
                <CloseIcon size={24} color="black" />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography variant="h4">
                  Before Import Contacts you must confirm the data in the
                  prescribed template which shall be used to import data to the
                  CRMFarm. <br />
                  <br />
                  If you don't have the template please download the template
                  here.
                </Typography>
                <Div sx={{ display: "flex", justifyContent: "center" }}>
                  <Button className="save-button">Download Template</Button>
                </Div>
                <DndWrapper>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Typography variant={"body1"}>
                      Drag 'n' drop some files here, or click to select files
                    </Typography>
                  </div>
                </DndWrapper>
                {/* <Typography variant={"h4"}>Files</Typography> */}
                <List disablePadding sx={{ display: "flex" }}>
                  {files}
                </List>
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Div sx={{ textAlign: "center", cursor: "pointer" }}>
            <Button
              variant="contained"
              onClick={handleAddContact}
              sx={{ width: "max-content" }}
            >
              + Add Contact
            </Button>
          </Div>

          {/* popup for add contacts */}
          <Dialog
            open={openAddContact}
            onClose={() => setOpenAddContact(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              sx={{ fontSize: "18px", minWidth: "550px" }}
            >
              Add Contact
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Enter your name"
                  variant="outlined"
                />

                <Div className="mt-1s">
                  <FormControl className="col-sm-2 mt-1">
                    <Autocomplete
                      disablePortal
                      className="search-select"
                      getOptionLabel={(option) => option.mobile_code}
                      options={contacts}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="+91" />
                      )}
                    />
                  </FormControl>
                  <TextField
                    className="col-sm-10 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Enter Mobile Number"
                    variant="outlined"
                  />
                </Div>
                <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Enter Mail Id"
                  variant="outlined"
                />
                <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Enter Organization Name"
                  variant="outlined"
                />
                <Div className="mt-1">
                  <FormControl className="col-sm-6">
                    <Autocomplete
                      disablePortal
                      className="search-select"
                      getOptionLabel={(option) => option.country}
                      options={contacts}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select Country" />
                      )}
                    />
                  </FormControl>
                  <FormControl className="col-sm-6">
                    <Autocomplete
                      disablePortal
                      className="search-select"
                      getOptionLabel={(option) => option.state}
                      options={contacts}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select State" />
                      )}
                    />
                  </FormControl>
                </Div>
                <FormControl className="col-sm-12 mt-1">
                  <Autocomplete
                    disablePortal
                    className="search-select"
                    getOptionLabel={(option) => option.industry_type}
                    options={contacts}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select Industry Type"
                      />
                    )}
                  />
                </FormControl>
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button className="save-button">Save</Button>
              <Button
                className="cancel-button"
                onClick={() => setOpenAddContact(false)}
                autoFocus
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Div>
        <Divider sx={{ mb: 2, color: "#000000" }} />
        <Div sx={{ display: "flex", justifyContent: "end" }}>
          <TextField
            className="col-7 input-box"
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
            sx={{ minWidth: 130, mt: { xs: 0, md: 0 }, mr: 1 }}
          />
        </Div>

        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="All Contacts" {...a11yProps(0)} />
            <Tab label="Today's Call List" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0} sx={{ pl: 0, pr: 0 }}>
            <Div sx={{ display: "flex", justifyContent: "end", mt: -1 }}>
              <Button onClick={handleShowTodayCalls} sx={{ p: 0.5 }}>
                Add to today's call
              </Button>
            </Div>

            {/* popup for add today calls */}
            <Dialog
              open={openAddTodayCalls}
              onClose={() => setOpenAddTodayCalls(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title" sx={{ p: 0 }}>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                  }}
                >
                  <Div sx={{ p: 1 }}>
                    <Typography variant="h3">
                      Add Contacts to Today's call
                    </Typography>
                  </Div>
                  <Div>
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
                      sx={{ minWidth: 150, mt: { xs: 0.5, md: 0 } }}
                    />
                  </Div>
                  <Div>
                    <IconButton onClick={() => setOpenAddTodayCalls(false)}>
                      <CancelIcon />
                    </IconButton>
                  </Div>
                </Div>
              </DialogTitle>
              <DialogContent>
                <Div className="p-2">
                  <Grid container columnSpacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h3">All Contacts</Typography>
                      <Div
                        className="card p-3 pt-1"
                        sx={{ minWidth: "250px", minHeight: "200px" }}
                      >
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Ravi Kumar"
                            sx={{ mb: -2 }}
                          />
                          <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Prakash"
                            sx={{ mb: -2 }}
                          />
                        </FormGroup>
                      </Div>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h3">Today's Call</Typography>
                      <Div
                        className="card p-3 pt-1"
                        sx={{ minWidth: "250px", minHeight: "200px" }}
                      >
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox size="small" checked />}
                            label="Tamil"
                            sx={{ mb: -2 }}
                          />
                          <FormControlLabel
                            control={<Checkbox size="small" defaultChecked />}
                            label="Ponkumar"
                            sx={{ mb: -2 }}
                          />
                        </FormGroup>
                      </Div>
                    </Grid>
                  </Grid>
                  <Div
                    sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                  >
                    <Button className="save-button me-3">Save</Button>
                    <Button
                      onClick={() => setOpenAddTodayCalls(false)}
                      className="cancel-button"
                    >
                      Cancel
                    </Button>
                  </Div>
                </Div>
              </DialogContent>
            </Dialog>

            <Table className="modify-table-padding">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <FormControlLabel control={<Checkbox defaultChecked />} />
                  </TableCell>
                  <TableCell>
                    <Div
                      className="row"
                      sx={{
                        pl: 0,
                        pr: 0,
                        cursor: "pointer",
                      }}
                    >
                      <Div className="col-2 me-3">
                        <Avatar
                          sx={{
                            width: 34,
                            height: 34,
                            bgcolor: deepPurple[500],
                          }}
                        >
                          R
                        </Avatar>
                      </Div>
                      <Div className="col">
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Ravi Kumar <br />
                          <span style={{ fontWeight: 500 }}>No Activity</span>
                        </Typography>
                      </Div>
                    </Div>
                  </TableCell>
                  <TableCell>+91 8798849085</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <FormControlLabel control={<Checkbox defaultChecked />} />
                  </TableCell>
                  <TableCell>
                    <Div
                      className="row"
                      sx={{
                        pl: 0,
                        pr: 0,
                        cursor: "pointer",
                      }}
                    >
                      <Div className="col-2 me-3">
                        <Avatar
                          sx={{
                            width: 34,
                            height: 34,
                            bgcolor: deepOrange[500],
                          }}
                        >
                          P
                        </Avatar>
                      </Div>
                      <Div className="col">
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Prakash <br />
                          <span style={{ fontWeight: 500 }}>No Activity</span>
                        </Typography>
                      </Div>
                    </Div>
                  </TableCell>
                  <TableCell>+91 8798849085</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value={value} index={1} sx={{ pl: 0, pr: 0 }}>
            <Div sx={{ display: "flex", justifyContent: "end", mt: -1 }}>
              <Button onClick={handleShowPrioritizeCalls} sx={{ p: 0.5 }}>
                Prioritize calls
              </Button>
            </Div>

            {/* popup for summary */}
            <Dialog
              open={openPrioritizeCalls}
              onClose={() => setOpenPrioritizeCalls(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title" sx={{ p: 0 }}>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                  }}
                >
                  <Div sx={{ p: 1 }}>
                    <Typography variant="h3">Prioritize Calls</Typography>
                  </Div>
                  <Div>
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
                      sx={{ minWidth: 150, mt: { xs: 0.5, md: 0 } }}
                    />
                  </Div>
                  <Div>
                    <IconButton onClick={() => setOpenPrioritizeCalls(false)}>
                      <CancelIcon />
                    </IconButton>
                  </Div>
                </Div>
              </DialogTitle>
              <DialogContent>
                <Div className="p-2">
                  <Grid container columnSpacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h3">Today's Call</Typography>
                      <Div
                        className="card p-3 pt-1"
                        sx={{ minWidth: "225px", minHeight: "200px" }}
                      >
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Ravi Kumar"
                            sx={{ mb: -2 }}
                          />
                          <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Prakash"
                            sx={{ mb: -2 }}
                          />
                        </FormGroup>
                      </Div>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h3">Priority Calls</Typography>
                      <Div
                        className="card p-3 pt-1"
                        sx={{ minWidth: "225px", minHeight: "200px" }}
                      >
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox size="small" defaultChecked />}
                            label="Tamil"
                            sx={{ mb: -2 }}
                          />
                          <FormControlLabel
                            control={<Checkbox size="small" defaultChecked />}
                            label="Ponkumar"
                            sx={{ mb: -2 }}
                          />
                        </FormGroup>
                      </Div>
                    </Grid>
                  </Grid>
                  <Div
                    sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                  >
                    <Button className="save-button">Save</Button>
                  </Div>
                </Div>
              </DialogContent>
            </Dialog>

            <Table className="modify-table-padding">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <FormControlLabel control={<Checkbox defaultChecked />} />
                  </TableCell>
                  <TableCell>
                    <Div
                      className="row"
                      sx={{
                        pl: 0,
                        pr: 0,
                        cursor: "pointer",
                      }}
                    >
                      <Div className="col-2 me-3">
                        <Avatar
                          sx={{
                            width: 34,
                            height: 34,
                            bgcolor: deepPurple[500],
                          }}
                        >
                          R
                        </Avatar>
                      </Div>
                      <Div className="col">
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Ravi Kumar <br />
                          <span style={{ fontWeight: 500 }}>No Activity</span>
                        </Typography>
                      </Div>
                    </Div>
                  </TableCell>
                  <TableCell>+91 8798849085</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabPanel>
        </Box>
      </Card>
    </>
  );
};

export default CallCenterRightCardLists;
