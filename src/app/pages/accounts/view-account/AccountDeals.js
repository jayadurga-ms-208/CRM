import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Div from "@jumbo/shared/Div";
import { HiOutlineSearch } from "react-icons/hi";
import { CancelOutlined } from "@mui/icons-material";
import "../accounts.css";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function createData1(
  dealName,
  desig,
  dealValue,
  dealStage,
  age,
  dealProb,
  col
) {
  return { dealName, desig, dealValue, dealStage, age, dealProb, col };
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const dropDownLists = [
  {
    dealtype: "type1",
    accname: "name1",
    conperson: "p1",
    leadsrc: "ls1",
    dstage: "ds1",
    dprob: "50%",
  },
  {
    dealtype: "type2",
    accname: "name2",
    leadsrc: "ls2",
    dprob: "100%",
    dstage: "ds2",
    conperson: "p2",
  },
  {
    dealtype: "type3",
    accname: "name3",
    leadsrc: "ls3",
    dprob: "30%",
    dstage: "ds3",
    conperson: "p3",
  },
];

const rows1 = [
  createData1(
    "Gokulraj Sugumar",
    "Tech overwatch",
    "10000",
    "Won/Lost",
    "24 Days",
    "75%",
    "#050A30"
  ),
  createData1(
    "Roshan Khan",
    "Tech Wire",
    "20000",
    "Decision Maker",
    "6 Months",
    "85%",
    "#FF3939"
  ),
  createData1(
    "Yuvaraj Singh",
    "DynamicTech",
    "30000",
    "Won/Lost",
    "2 Years",
    "55%"
  ),
  createData1(
    "Kavin Kumar",
    "Electech",
    "40000",
    "Proposal Submitted",
    "1 year",
    "70%",
    "#424651"
  ),
  createData1(
    "Amy Janette",
    "Techinfo",
    "50000",
    "Decision Maker",
    "1 year 2 Months",
    "50%",
    "#750075"
  ),
  createData1(
    "Gill Hamper",
    "Infozoid",
    "60000",
    "Won/Lost",
    "24 Days",
    "90%",
    "#FFA500"
  ),
  createData1(
    "Prakash Raj",
    "Inspire Tech",
    "10000",
    "Proposal Submitted",
    "6 Months",
    "45%",
    "#104210"
  ),
  createData1(
    "Samantha Gokul",
    "infovio",
    "20000",
    "Decision Maker",
    "2 Years",
    "85%",
    "#FD7F20"
  ),
  createData1(
    "Kriti Sanon",
    "infovio",
    "30000",
    "Won/Lost",
    "1 year",
    "55%",
    "#52688F"
  ),
  createData1(
    "Prakash Raj",
    "Inspire Tech",
    "50000",
    "Decision Maker",
    "24 Days",
    "50%",
    "#7F4AA4"
  ),
];

const rows2 = [
  createData1(
    "Yuvaraj Singh",
    "DynamicTech",
    "30000",
    "Won/Lost",
    "2 Years",
    "55%"
  ),
  createData1(
    "Gokulraj Sugumar",
    "Tech overwatch",
    "10000",
    "Won/Lost",
    "24 Days",
    "75%",
    "#050A30"
  ),
  createData1(
    "Kavin Kumar",
    "Electech",
    "40000",
    "Proposal Submitted",
    "1 year",
    "70%",
    "#424651"
  ),
  createData1(
    "Amy Janette",
    "Techinfo",
    "50000",
    "Decision Maker",
    "1 year 2 Months",
    "50%",
    "#750075"
  ),
  createData1(
    "Roshan Khan",
    "Tech Wire",
    "20000",
    "Decision Maker",
    "6 Months",
    "85%",
    "#FF3939"
  ),
  createData1(
    "Prakash Raj",
    "Inspire Tech",
    "10000",
    "Proposal Submitted",
    "6 Months",
    "45%",
    "#104210"
  ),
  createData1(
    "Gill Hamper",
    "Infozoid",
    "60000",
    "Won/Lost",
    "24 Days",
    "90%",
    "#FFA500"
  ),
  createData1(
    "Samantha Gokul",
    "infovio",
    "20000",
    "Decision Maker",
    "2 Years",
    "85%",
    "#FD7F20"
  ),
  createData1(
    "Kriti Sanon",
    "infovio",
    "30000",
    "Won/Lost",
    "1 year",
    "55%",
    "#52688F"
  ),
  createData1(
    "Prakash Raj",
    "Inspire Tech",
    "50000",
    "Decision Maker",
    "24 Days",
    "50%",
    "#7F4AA4"
  ),
];

const AccountDeals = () => {
  const [openAddDeal, setOpenAddDeal] = useState(false);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddDeal = () => {
    setOpenAddDeal(true);
  };

  return (
    <>
      <Typography
        paddingLeft={2.5}
        variant="h3"
        sx={{ fontSize: "16px", fontWeight: "600" }}
      >
        Deals
      </Typography>
      <Grid
        columnSpacing={2}
        // paddingBottom={1}
        container
        rowSpacing={1}
        justifyContent={"space-between"}
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Open Deals" {...a11yProps(0)} />
            <Tab label="Own Deals" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <Grid item>
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
            sx={{ maxWidth: "140px", mt: { xs: 0.5, md: 0 }, mr: 1 }}
          />

          <Button
            onClick={handleAddDeal}
            size="small"
            variant="contained"
            sx={{
              // width: "100%",
              minWidth: "85px",
              fontSize: "12px",
              background: "#007BFF",
              ":hover": { background: "#007BFF" },
              maxHeight: "27px",
              borderRadius: "10px",
            }}
          >
            Add Deal
          </Button>
          <Dialog
            scroll="body"
            PaperProps={{
              sx: {
                // width: "100%",
                minWidth: "432px",
                // height:"690px"
              },
            }}
            open={openAddDeal}
            onClose={() => setOpenAddDeal(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Card className="border-card">
              <DialogTitle
                id="alert-dialog-title"
                align="center"
                sx={{ fontSize: "18px", fontWeight: 500 }}
              >
                Add Deal
                <IconButton
                  sx={{ float: "right" }}
                  onClick={() => setOpenAddDeal(false)}
                >
                  <CancelOutlined />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Grid container direction={"column"} rowSpacing={0.5}>
                    <Grid item xs>
                      <TextField
                        sx={{
                          "& fieldset": {
                            borderRadius: "30px",
                          },
                        }}
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Deal Name"
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
                                  d="M14.5744 18.2999C16.5753 18.2999 18.1993 16.7316 18.1993 14.7999V13.3999C18.1993 11.4682 16.5753 9.8999 14.5744 9.8999H6.59944C4.59857 9.8999 2.97461 11.4682 2.97461 13.3999V14.7999C2.97461 16.7316 4.59857 18.2999 6.59944 18.2999H11.6744C12.0746 18.2999 12.3994 17.9863 12.3994 17.5999C12.3994 17.2135 12.0746 16.8999 11.6744 16.8999H6.59944C5.39897 16.8999 4.42428 15.959 4.42428 14.7999V13.3999C4.42428 12.2408 5.39897 11.2999 6.59944 11.2999H14.5744C15.7749 11.2999 16.7496 12.2408 16.7496 13.3999V14.7999C16.7496 15.959 15.7749 16.8999 14.5744 16.8999C14.1742 16.8999 13.8496 17.2135 13.8496 17.5999C13.8496 17.9863 14.1742 18.2999 14.5744 18.2999Z"
                                  fill="#6C63FF"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.30313 0.100098C4.90272 0.100098 2.95312 1.98246 2.95312 4.3001C2.95312 6.61774 4.90272 8.5001 7.30313 8.5001C9.70355 8.5001 11.6531 6.61774 11.6531 4.3001C11.6531 1.98246 9.70355 0.100098 7.30313 0.100098ZM7.30313 1.5001C8.90398 1.5001 10.2031 2.75446 10.2031 4.3001C10.2031 5.84574 8.90398 7.1001 7.30313 7.1001C5.70229 7.1001 4.40313 5.84574 4.40313 4.3001C4.40313 2.75446 5.70229 1.5001 7.30313 1.5001Z"
                                  fill="#6C63FF"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.82422 7.73657C3.2873 8.57937 2.2498 10.1733 2.2498 12.0002C2.2498 12.3866 1.92501 12.7002 1.5248 12.7002C1.1246 12.7002 0.799805 12.3866 0.799805 12.0002C0.799805 9.45986 2.36067 7.26817 4.60605 6.27217C4.86854 6.15592 5.17731 6.20154 5.39191 6.38701C5.90525 6.83077 6.58232 7.10029 7.3248 7.10029C8.06729 7.10029 8.7444 6.83076 9.2577 6.38701C9.47228 6.20154 9.78106 6.15592 10.0436 6.27217C11.8082 7.05545 13.1502 8.57653 13.6439 10.4254C13.744 10.7999 13.5104 11.1821 13.1227 11.278C12.7354 11.3746 12.3396 11.1491 12.2396 10.7754C11.893 9.47554 11.0063 8.38413 9.82543 7.73661C9.11775 8.21753 8.25566 8.50037 7.32485 8.50037C6.39403 8.50037 5.53194 8.21756 4.82426 7.73661L4.82422 7.73657Z"
                                  fill="#6C63FF"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.32461 14.7999H13.8496C14.2498 14.7999 14.5746 14.4863 14.5746 14.0999C14.5746 13.7135 14.2498 13.3999 13.8496 13.3999H7.32461C6.9244 13.3999 6.59961 13.7135 6.59961 14.0999C6.59961 14.4863 6.9244 14.7999 7.32461 14.7999Z"
                                  fill="#6C63FF"
                                />
                              </svg>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs>
                      <div className="drop-list">
                        <svg
                          style={{ marginLeft: "14px", marginRight: "6px" }}
                          width="20"
                          height="16"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0245 4.95589H11.9045C11.5845 4.95589 11.3285 5.22472 11.3285 5.56069C11.3285 5.89667 11.5845 6.16549 11.9045 6.16549H13.6325L9.88849 10.0967C9.50446 9.8111 9.05646 9.60955 8.57643 9.52552L8.57654 2.45273L9.79251 3.72949C9.90457 3.84715 10.0485 3.9143 10.1925 3.9143C10.3365 3.9143 10.4805 3.84715 10.5925 3.72949C10.8165 3.4943 10.8165 3.10792 10.5925 2.87273L8.40054 0.571036C8.30456 0.453496 8.16059 0.38623 8.00054 0.38623C7.8405 0.38623 7.69651 0.453379 7.60054 0.571036L5.39251 2.87273C5.16852 3.10792 5.16852 3.49429 5.39251 3.72949C5.6165 3.96469 5.98448 3.96469 6.20848 3.72949L7.42445 2.45273V9.52552C6.94443 9.60954 6.49645 9.8111 6.1124 10.0967L2.36839 6.16549H4.09639C4.41637 6.16549 4.67239 5.89667 4.67239 5.56069C4.67239 5.22472 4.41637 4.95589 4.09639 4.95589H0.976391C0.65642 4.95589 0.400391 5.22472 0.400391 5.56069V8.83669C0.400391 9.17266 0.656417 9.44149 0.976391 9.44149C1.29636 9.44149 1.55239 9.17266 1.55239 8.83669V7.02229L5.2964 10.9535C4.91237 11.5247 4.70442 12.1967 4.70442 12.9358C4.70442 14.851 6.19237 16.4134 8.01643 16.4134C9.84031 16.4135 11.3124 14.8511 11.3124 12.9358C11.3124 12.1966 11.0884 11.5078 10.7205 10.9535L14.4645 7.02229V8.83669C14.4645 9.17266 14.7205 9.44149 15.0405 9.44149C15.3604 9.44149 15.6165 9.17266 15.6165 8.83669L15.6164 5.56069C15.6004 5.22472 15.3444 4.95589 15.0244 4.95589H15.0245Z"
                            fill="#6C63FF"
                          />
                        </svg>

                        <Select
                          sx={{
                            boxShadow: "none",
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
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
                        >
                          <MenuItem value={0}>Select Deal Type</MenuItem>
                          {dropDownLists.map((dl) => (
                            <MenuItem value={dl.dealtype}>
                              {dl.dealtype}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <div className="drop-list">
                        <svg
                          style={{ marginLeft: "18px", marginRight: "5px" }}
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.5744 18.2999C16.5753 18.2999 18.1993 16.7316 18.1993 14.7999V13.3999C18.1993 11.4682 16.5753 9.8999 14.5744 9.8999H6.59944C4.59857 9.8999 2.97461 11.4682 2.97461 13.3999V14.7999C2.97461 16.7316 4.59857 18.2999 6.59944 18.2999H11.6744C12.0746 18.2999 12.3994 17.9863 12.3994 17.5999C12.3994 17.2135 12.0746 16.8999 11.6744 16.8999H6.59944C5.39897 16.8999 4.42428 15.959 4.42428 14.7999V13.3999C4.42428 12.2408 5.39897 11.2999 6.59944 11.2999H14.5744C15.7749 11.2999 16.7496 12.2408 16.7496 13.3999V14.7999C16.7496 15.959 15.7749 16.8999 14.5744 16.8999C14.1742 16.8999 13.8496 17.2135 13.8496 17.5999C13.8496 17.9863 14.1742 18.2999 14.5744 18.2999Z"
                            fill="#6C63FF"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.30313 0.100098C4.90272 0.100098 2.95312 1.98246 2.95312 4.3001C2.95312 6.61774 4.90272 8.5001 7.30313 8.5001C9.70355 8.5001 11.6531 6.61774 11.6531 4.3001C11.6531 1.98246 9.70355 0.100098 7.30313 0.100098ZM7.30313 1.5001C8.90398 1.5001 10.2031 2.75446 10.2031 4.3001C10.2031 5.84574 8.90398 7.1001 7.30313 7.1001C5.70229 7.1001 4.40313 5.84574 4.40313 4.3001C4.40313 2.75446 5.70229 1.5001 7.30313 1.5001Z"
                            fill="#6C63FF"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.82422 7.73657C3.2873 8.57937 2.2498 10.1733 2.2498 12.0002C2.2498 12.3866 1.92501 12.7002 1.5248 12.7002C1.1246 12.7002 0.799805 12.3866 0.799805 12.0002C0.799805 9.45986 2.36067 7.26817 4.60605 6.27217C4.86854 6.15592 5.17731 6.20154 5.39191 6.38701C5.90525 6.83077 6.58232 7.10029 7.3248 7.10029C8.06729 7.10029 8.7444 6.83076 9.2577 6.38701C9.47228 6.20154 9.78106 6.15592 10.0436 6.27217C11.8082 7.05545 13.1502 8.57653 13.6439 10.4254C13.744 10.7999 13.5104 11.1821 13.1227 11.278C12.7354 11.3746 12.3396 11.1491 12.2396 10.7754C11.893 9.47553 11.0063 8.38413 9.82543 7.73661C9.11775 8.21753 8.25566 8.50037 7.32485 8.50037C6.39403 8.50037 5.53194 8.21756 4.82426 7.73661L4.82422 7.73657Z"
                            fill="#6C63FF"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.32461 14.7999H13.8496C14.2498 14.7999 14.5746 14.4863 14.5746 14.0999C14.5746 13.7135 14.2498 13.3999 13.8496 13.3999H7.32461C6.9244 13.3999 6.59961 13.7135 6.59961 14.0999C6.59961 14.4863 6.9244 14.7999 7.32461 14.7999Z"
                            fill="#6C63FF"
                          />
                        </svg>

                        <Select
                          sx={{
                            boxShadow: "none",
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
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
                        >
                          <MenuItem value={0}>Account Name</MenuItem>
                          {dropDownLists.map((dl) => (
                            <MenuItem value={dl.accname}>{dl.accname}</MenuItem>
                          ))}
                        </Select>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <div className="drop-list">
                        <svg
                          style={{ marginLeft: "18px", marginRight: "8px" }}
                          width="17"
                          height="16"
                          viewBox="0 0 13 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.49965 8.36934C3.91662 8.36934 1.82266 6.49575 1.82266 4.18467C1.82266 1.87355 3.9166 0 6.49965 0C9.0827 0 11.1766 1.87352 11.1766 4.18467C11.1766 6.4957 9.0827 8.36934 6.49965 8.36934V8.36934ZM6.49965 7.32316C8.43686 7.32316 10.0073 5.91802 10.0073 4.18472C10.0073 2.45133 8.43686 1.04628 6.49965 1.04628C4.56243 1.04628 2.99198 2.45133 2.99198 4.18472C2.99198 5.91802 4.56243 7.32316 6.49965 7.32316ZM6.49965 8.89234C9.89603 8.89234 11.907 10.2918 12.34 13.0029C12.3903 13.3181 12.117 13.6 11.7613 13.6H1.238C0.882297 13.6 0.608942 13.3181 0.659319 13.0029C1.09222 10.2917 3.10313 8.89234 6.49965 8.89234V8.89234ZM6.49965 9.93852C3.93432 9.93852 2.46486 10.7888 1.94942 12.5538H11.0496C10.5342 10.7888 9.06478 9.93852 6.49938 9.93852H6.49965Z"
                            fill="#6C63FF"
                          />
                        </svg>

                        <Select
                          sx={{
                            boxShadow: "none",
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
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
                        >
                          <MenuItem value={0}>Contact Person</MenuItem>
                          {dropDownLists.map((dl) => (
                            <MenuItem value={dl.conperson}>
                              {dl.conperson}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <div className="drop-list">
                        <svg
                          style={{ marginLeft: "22px", marginRight: "5px" }}
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7404 12.2441L12.9404 9.74409C12.7654 9.5877 12.528 9.49995 12.2805 9.49995H11.4602L10.4059 8.55856C11.6652 7.2296 12.0618 5.41221 11.4535 3.7582C10.8452 2.1042 9.31914 0.850562 7.4227 0.446812C5.52614 0.0430617 3.53066 0.546979 2.1519 1.77799C0.773139 3.009 0.208779 4.79067 0.660979 6.48406C1.11318 8.17742 2.51722 9.53999 4.36974 10.083C6.22226 10.626 8.2577 10.272 9.74614 9.1476L10.8005 10.089V10.8213C10.8005 11.0423 10.8988 11.2543 11.0739 11.4106L13.8739 13.9106C14.0489 14.0668 14.2863 14.1547 14.5338 14.1547C14.7814 14.1547 15.0188 14.0668 15.1938 13.9106L15.7405 13.4224C15.9155 13.2662 16.0139 13.0541 16.0139 12.8331C16.0139 12.6121 15.9155 12.4002 15.7405 12.244L15.7404 12.2441ZM1.46718 5.33338C1.45687 3.95963 2.20562 2.66974 3.46858 1.88513C4.7317 1.10067 6.3467 0.92238 7.78578 1.40856C9.22486 1.89488 10.303 2.9832 10.6677 4.31774C11.0325 5.65242 10.637 7.06174 9.61062 8.08524C9.46265 7.89369 9.25765 7.74302 9.01874 7.65038L8.5239 7.46079H8.52374C6.99702 6.87972 5.27078 6.87972 3.74414 7.46079L3.25006 7.65038C3.01084 7.74302 2.80554 7.89368 2.65742 8.08538C1.89506 7.32995 1.47134 6.35031 1.46742 5.33342L1.46718 5.33338ZM3.3753 8.67602C3.40921 8.56204 3.4978 8.46732 3.61718 8.41696L4.11202 8.22736H4.11217C5.40373 7.73572 6.86389 7.73572 8.15537 8.22736L8.65117 8.41696H8.65133C8.77039 8.46746 8.85852 8.56218 8.89242 8.67602C8.09758 9.21077 7.12914 9.50009 6.13382 9.50009C5.1385 9.50009 4.17022 9.21089 3.37522 8.67602H3.3753ZM6.13374 6.16681C6.6289 6.16681 7.10358 5.99117 7.45374 5.67867C7.80374 5.36603 8.00046 4.94206 8.00046 4.50009C8.00046 4.05813 7.80374 3.63417 7.45374 3.32152C7.10358 3.00902 6.6289 2.83338 6.13374 2.83338C5.63874 2.83338 5.1639 3.00902 4.8139 3.32152C4.46374 3.63416 4.26718 4.05813 4.26718 4.50009C4.26781 4.94192 4.46468 5.36545 4.81454 5.67795C5.16454 5.99045 5.6389 6.16624 6.13374 6.16681ZM6.13374 3.66681C6.3814 3.66681 6.61874 3.75456 6.79374 3.91081C6.96874 4.06706 7.06718 4.27909 7.06718 4.50009C7.06718 4.72109 6.96874 4.93313 6.79374 5.08938C6.61874 5.24563 6.38138 5.33338 6.13374 5.33338C5.88624 5.33338 5.6489 5.24563 5.4739 5.08938C5.29874 4.93313 5.20046 4.72109 5.20046 4.50009C5.20062 4.27911 5.29906 4.0672 5.47406 3.91095C5.64906 3.7547 5.88626 3.66695 6.13374 3.66681L6.13374 3.66681Z"
                            fill="#6C63FF"
                          />
                        </svg>

                        <Select
                          sx={{
                            boxShadow: "none",
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
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
                        >
                          <MenuItem value={0}>Lead Source</MenuItem>
                          {dropDownLists.map((dl) => (
                            <MenuItem value={dl.leadsrc}>{dl.leadsrc}</MenuItem>
                          ))}
                        </Select>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <TextField
                        sx={{
                          "& fieldset": {
                            borderRadius: "30px",
                          },
                        }}
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Enter Amount"
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ paddingRight: "20px" }}
                            />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        sx={{
                          "& fieldset": {
                            borderRadius: "30px",
                          },
                        }}
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Minimum Turn Around"
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ paddingRight: "20px" }}
                            />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs>
                      <div className="drop-list">
                        <svg
                          style={{ marginLeft: "24px", marginRight: "8px" }}
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.99805 2.38135H9.92305V10.0989H7.99805V2.38135Z"
                            fill="#6C63FF"
                          />
                          <path
                            d="M0.078125 3.22119H2.00309V10.0987H0.078125V3.22119Z"
                            fill="#6C63FF"
                          />
                          <path
                            d="M4.03809 0.701172H5.96309V10.0987H4.03809V0.701172Z"
                            fill="#6C63FF"
                          />
                        </svg>

                        <Select
                          sx={{
                            boxShadow: "none",
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
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
                        >
                          <MenuItem value={0}>Deal Stage</MenuItem>
                          {dropDownLists.map((dl) => (
                            <MenuItem value={dl.dstage}>{dl.dstage}</MenuItem>
                          ))}
                        </Select>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <div className="drop-list">
                        <svg
                        style={{ marginLeft: "20px", marginRight: "4px" }}
                          width="20"
                          height="14"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.85547 0.971191V0.984026C7.90319 0.976437 7.95132 0.972196 7.99954 0.971191H7.85547Z"
                            fill="#6C63FF"
                          />
                          <path
                            d="M8.14404 0.971191H8C8.04811 0.971638 8.09623 0.975432 8.14404 0.982352V0.971191Z"
                            fill="#6C63FF"
                          />
                          <path
                            d="M7.99952 1.13142C8.04774 1.13242 8.09586 1.13722 8.14358 1.14582V0.98577C8.09576 0.978739 8.04764 0.975056 7.99952 0.974609C7.95131 0.975614 7.90319 0.979855 7.85547 0.987333V1.14738C7.90309 1.13834 7.95121 1.13298 7.99952 1.13142V1.13142Z"
                            fill="#6C63FF"
                          />
                          <path
                            d="M15.1999 8.70888C12.2724 8.70888 11.1147 5.98088 10.1828 3.78716C9.54066 2.28002 8.98762 0.971191 7.99981 0.971191C7.01343 0.971191 6.45896 2.27676 5.81821 3.78716C4.88658 5.98079 3.73023 8.70888 0.799805 8.70888V9.02885C1.83892 9.05519 2.85253 8.67013 3.65949 7.94248V8.70888H5.61789V4.98231C5.71724 4.76311 5.81376 4.54391 5.90587 4.32796V8.70882H7.85563V1.30568C7.90324 1.29641 7.95136 1.29161 7.99967 1.29128C8.04798 1.29161 8.0961 1.29641 8.14371 1.30568V8.70882H10.0935V4.32968C10.1857 4.54564 10.2821 4.76482 10.3814 4.98402V8.70888H12.3355V7.94091C13.1435 8.67013 14.1589 9.05585 15.1996 9.02885L15.1999 8.70888Z"
                            fill="#6C63FF"
                          />
                        </svg>

                      

                        <Select
                          sx={{
                            boxShadow: "none",
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
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
                        >
                          <MenuItem value={0}>Deal Probability %</MenuItem>
                          {dropDownLists.map((dl) => (
                            <MenuItem value={dl.dprob}>{dl.dprob}</MenuItem>
                          ))}
                        </Select>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <TextField
                        sx={{
                          "& fieldset": {
                            borderRadius: "30px",
                          },
                        }}
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Next Step"
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ paddingRight: "20px" }}
                            />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        sx={{
                          "& fieldset": {
                            borderRadius: "30px",
                          },
                        }}
                        className="col-sm-12 input-box mt-1"
                        id="outlined-basic"
                        placeholder="Deal Note"
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ paddingRight: "20px" }}
                            />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs>
                      <Grid
                        paddingTop={3}
                        container
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        spacing={0.5}
                      >
                        <Grid item>
                          <Button
                            onClick={() => setOpenAddDeal(false)}
                            sx={{
                              maxHeight: "23px",
                              maxWidth: "62px",
                              borderRadius: "8px",
                              color: "#007BFF",
                              borderColor: "#007BFF",
                              ":hover": { borderColor: "#007BFF" },
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
                    </Grid>
                  </Grid>
                </DialogContentText>
              </DialogContent>
            </Card>
          </Dialog>
        </Grid>
      </Grid>

      {/* <Box width={"100%"} sx={{ borderBottom: 1, borderColor: "divider",p:0 }}> */}

      <TabPanel style={{ paddingTop: "5px" }} value={value} index={0}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#1B416B" }}>
                <TableCell
                  className="accounts-table-heading"
                  align="center"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Deal Name
                  <ArrowUpwardIcon fontSize="small" />
                </TableCell>
                <TableCell
                  className="accounts-table-heading"
                  align="left"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Deal Value
                </TableCell>
                <TableCell
                  className="accounts-table-heading"
                  align="left"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Deal Stage
                </TableCell>
                <TableCell
                  className="accounts-table-heading"
                  align="left"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Age
                </TableCell>
                <TableCell
                  className="accounts-table-heading"
                  align="left"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Deal Probablity
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row) => (
                <TableRow
                  key={row.dealName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ cursor: "pointer", whiteSpace: "nowrap" }}>
                    <Div sx={{ display: "flex", justifyContent: "flex-start" }}>
                      <Avatar
                        size="small"
                        sx={{
                          backgroundColor: row.col,
                          fontSize: "12px",
                          fontWeight: 600,
                          width: "24px",
                          height: "24px",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        {row.dealName.slice(0, 2).toUpperCase()}
                      </Avatar>
                      <Typography
                        sx={{ fontSize: "12px", color: "#000000" }}
                        paddingLeft="12px"
                      >
                        {row.dealName}
                        <br />
                        <span style={{ color: "#545454", fontSize: "10px" }}>
                          {row.desig}
                        </span>
                      </Typography>
                    </Div>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: "#000000",
                      whiteSpace: "nowrap",
                    }}
                    align="left"
                  >
                    {row.dealValue}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: "#000000",
                      whiteSpace: "nowrap",
                    }}
                    align="left"
                  >
                    {row.dealStage}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: "#000000",
                      whiteSpace: "nowrap",
                    }}
                    align="left"
                  >
                    {row.age}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: "#000000",
                      whiteSpace: "nowrap",
                    }}
                    align="left"
                  >
                    {row.dealProb}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel style={{ paddingTop: "5px" }} value={value} index={1}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#1B416B" }}>
                <TableCell
                  className="accounts-table-heading"
                  align="center"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Deal Name
                  <ArrowUpwardIcon fontSize="small" />
                </TableCell>
                <TableCell
                  className="accounts-table-heading"
                  align="left"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Deal Value
                </TableCell>
                <TableCell
                  className="accounts-table-heading"
                  align="left"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Deal Stage
                </TableCell>
                <TableCell
                  className="accounts-table-heading"
                  align="left"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Age
                </TableCell>
                <TableCell
                  className="accounts-table-heading"
                  align="left"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Deal Probablity
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <TableRow
                  key={row.dealName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ cursor: "pointer", whiteSpace: "nowrap" }}>
                    <Div sx={{ display: "flex", justifyContent: "flex-start" }}>
                      <Avatar
                        size="small"
                        sx={{
                          fontSize: "12px",
                          fontWeight: 600,
                          width: "24px",
                          height: "24px",
                          backgroundColor: row.col,
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        {row.dealName.slice(0, 2).toUpperCase()}
                      </Avatar>
                      <Typography
                        sx={{ fontSize: "12px", color: "#000000" }}
                        paddingLeft="12px"
                      >
                        {row.dealName}
                        <br />
                        <span style={{ color: "#545454", fontSize: "10px" }}>
                          {row.desig}
                        </span>
                      </Typography>
                    </Div>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: "#000000",
                      whiteSpace: "nowrap",
                    }}
                    align="left"
                  >
                    {row.dealValue}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: "#000000",
                      whiteSpace: "nowrap",
                    }}
                    align="left"
                  >
                    {row.dealStage}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: "#000000",
                      whiteSpace: "nowrap",
                    }}
                    align="left"
                  >
                    {row.age}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: "#000000",
                      whiteSpace: "nowrap",
                    }}
                    align="left"
                  >
                    {row.dealProb}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      {/* </Box> */}
    </>
  );
};

export default AccountDeals;
