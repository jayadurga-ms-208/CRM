import React from "react";
import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import AccountsHome from "../AccountsHome";
import { useState } from "react";
import NewAccount from "../../new-account/NewAccount";
import {
  Button,
  Grid,
  Avatar,
  Card,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Menu,
  MenuItem,
} from "@mui/material";
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
import DeleteIcon from "@mui/icons-material/Delete";
import { ModeEdit } from "@mui/icons-material";
import ArchiveIcon from "@mui/icons-material/Archive";
import ChatIcon from "@mui/icons-material/Chat";
import ViewAccount from "../../view-account/ViewAccount";
import MyAccount from "../../myaccount/MyAccount";
import "../../accounts.css";

// Table Function and Data

function createData(
  accName,
  desig,
  accId,
  phone,
  dates,
  address,
  industry,
  col
) {
  return { accName, desig, accId, phone, dates, address, industry, col };
}

const rows = [
  createData(
    "Gokulraj Sugumar",
    "Tech overwatch",
    "ACC00011",
    "(91)976543211",
    "50%",
    "180",
    "IT",
    "#050A30"
  ),
  createData(
    "Roshan Khan",
    "Tech Wire",
    "ACC00010",
    "(91)976543211",
    "50%",
    "130",
    "Finance",
    "#FF3939"
  ),
  createData(
    "Yuvaraj Singh",
    "DynamicTech",
    "ACC0009",
    "(91)976543211",
    "50%",
    "80",
    "Travel Tourism"
  ),
  createData(
    "Kavin Kumar",
    "Electech",
    "ACC0008",
    "(91)976543211",
    "50%",
    "80",
    "IT",
    "#424651"
  ),
  createData(
    "Amy Janette",
    "Techinfo",
    "ACC0007",
    "(91)976543211",
    "50%",
    "130",
    "Marketing",
    "#750075"
  ),
  createData(
    "Gill Hamper",
    "Infozoid",
    "ACC0006",
    "(91)976543211",
    "50%",
    "180",
    "Sales",
    "#FFA500"
  ),
  createData(
    "Prakash Raj",
    "Inspire Tech",
    "ACC0005",
    "(91)976543211",
    "50%",
    "10",
    "IT",
    "#104210"
  ),
  createData(
    "Samantha Gokul",
    "infovio",
    "ACC0004",
    "(91)976543211",
    "50%",
    "80",
    "Marketing",
    "#FD7F20"
  ),
  createData(
    "Kriti Sanon",
    "infovio",
    "ACC0003",
    "(91)976543211",
    "50%",
    "180",
    "Sales",
    "#52688F"
  ),
  createData(
    "Prakash Raj",
    "Infozoid",
    "ACC0002",
    "(91)976543211",
    "50%",
    "30",
    "Travel Tourism",
    "#7F4AA4"
  ),
];

const AccountsLeftSide = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openEditAccount, setOpenEditAccount] = useState(false);
  const [ShowAccountsHome, setShowAccountsHome] = useState(true);
  const [ShowMyAccountsPage, setShowMyAccountsPage] = useState(false);
  const [ShowNewAccountPage, setShowNewAccountPage] = useState(false);
  const [ShowViewAccount, setShowViewAccount] = useState(false);

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };
  const handleClickEditAccount = () => {
    setOpenEditAccount(true);
  };

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseAction = () => {
    setAnchorElAction(null);
  };

  const handleClickViewAccount = () => {
    setShowAccountsHome(false);
    setShowMyAccountsPage(false);
    setShowNewAccountPage(false);
    setShowViewAccount(true);
  };

  const handleClickAccountsHome = () => {
    setShowAccountsHome(true);
    setShowMyAccountsPage(false);
    setShowNewAccountPage(false);
    setShowViewAccount(false);
  };

  const handleClickMyAccountsPage = () => {
    setShowAccountsHome(false);
    setShowMyAccountsPage(true);
    setShowNewAccountPage(false);
    setShowViewAccount(false);
  };
  const handleClickNewAccountPage = () => {
    setShowAccountsHome(false);
    setShowMyAccountsPage(false);
    setShowViewAccount(false);
    setShowNewAccountPage(true);
  };

  return (
    <>
      <JumboContentLayoutMain>
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <Card
              sx={{
                maxWidth: "285px",
                background: "#FFFFFF",
                padding: "8px",
                paddingTop: 0,

                // border: "1px solid",
              }}
            >
              <Card className="accounts-left-card">
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#FB7575",
                      width: "45px",
                      height: "45px",
                      fontSize: "12px",
                    }}
                  >
                    ST
                  </Avatar>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      paddingLeft: "8px",
                      color: "#000000",
                    }}
                  >
                    Subramanian Thangaappan
                  </Typography>
                </Div>
                <br />
                <Div
                  sx={{
                    alignItems: "left",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    className="accounts-left-card1-heading"
                    sx={{ pl: 2 }}
                  >
                    Today's Target
                    <br />
                    <span
                      style={{
                        fontWeight: 500,
                        fontSize: "10px",
                        color: "#545454",
                      }}
                    >
                      22 Dec 2021
                    </span>
                  </Typography>
                </Div>
                <Typography
                  align="right"
                  sx={{ fontSize: "12px", color: "#000000" }}
                >
                  Pending
                </Typography>
                <Grid container>
                  <Grid item xs={7.4}>
                    <Typography
                      align="left"
                      className="accounts-left-card1-heading"
                    >
                      Total deals to be fixed
                    </Typography>
                  </Grid>
                  <Grid item xs={2.3}>
                    <Typography
                      className="accounts-left-card1-heading"
                      style={{ fontSize: "10px" }}
                      align="center"
                    >
                      100
                    </Typography>
                  </Grid>
                  <Grid item xs={2.3}>
                    <Typography
                      className="accounts-left-card1-heading"
                      style={{ fontSize: "10px" }}
                      align="center"
                    >
                      90
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container pb={0.5}>
                  <Grid item xs={7.4}>
                    <Typography
                      align="left"
                      className="accounts-left-card1-heading"
                    >
                      Total appointments to be fixed
                    </Typography>
                  </Grid>
                  <Grid item xs={2.3}>
                    <Typography
                      className="accounts-left-card1-heading"
                      style={{ fontSize: "10px" }}
                      align="center"
                    >
                      100
                    </Typography>
                  </Grid>
                  <Grid item xs={2.3}>
                    <Typography
                      className="accounts-left-card1-heading"
                      style={{ fontSize: "10px" }}
                      align="center"
                    >
                      90
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
              <Card className="accounts-left-card">
                <Div
                  sx={{
                    pt: 0.5,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    onClick={handleClickAccountsHome}
                    className="accounts-left-card2-heading"
                    sx={{
                      background: ShowAccountsHome ? "#D4F1F4B2" : "#FEFEFE",
                      borderRadius: "10px  ",
                      ":hover": { background: "#D4F1F4B2" },
                      minHeight: "30px",
                      paddingLeft: "8px",
                      m: 0,
                    }}
                  >
                    Accounts Home
                  </Typography>
                </Div>
                <Div
                  sx={{
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    onClick={handleClickMyAccountsPage}
                    className="accounts-left-card2-heading"
                    sx={{
                      background: ShowMyAccountsPage
                        ? "#D4F1F4B2"
                        : ShowViewAccount
                        ? "#D4F1F4B2"
                        : "#FEFEFE",

                      minHeight: "45px",
                      borderRadius: "10px",
                      ":hover": { background: "#D4F1F4B2" },
                      paddingLeft: "8px",
                      m: 0,
                      cursor: "pointer",
                    }}
                  >
                    My Account
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      50000 account
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    onClick={handleClickNewAccountPage}
                    className="accounts-left-card2-heading"
                    sx={{
                      background: ShowNewAccountPage ? "#D4F1F4B2" : "#FEFEFE",
                      minHeight: "45px",
                      borderRadius: "10px",
                      ":hover": { background: "#D4F1F4B2" },
                      paddingLeft: "8px",
                      m: 0,
                      cursor: "pointer",
                    }}
                  >
                    New Account
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      50000 account
                    </span>
                  </Typography>
                </Div>
              </Card>
              <Card className="accounts-left-card">
                <Div
                  sx={{
                    p: 1,
                    cursor: "pointer",
                  }}
                >
                  <Typography className="accounts-left-card2-heading">
                    All Account
                  </Typography>
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pt: "5px" }}
                  >
                    All States
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      500000 account
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#FF3939",
                      width: "38px",
                      height: "38px",
                      fontSize: "12px",
                    }}
                  >
                    ND
                  </Avatar>
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Maharastra
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#424651",
                      width: "38px",
                      height: "38px",
                      fontSize: "14px",
                    }}
                  >
                    MU
                  </Avatar>
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Tamilnadu
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#750075",
                      width: "38px",
                      height: "38px",
                      fontSize: "14px",
                    }}
                  >
                    KL
                  </Avatar>
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Andhra Pradesh
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#750075",
                      width: "38px",
                      height: "38px",
                      fontSize: "14px",
                    }}
                  >
                    KL
                  </Avatar>
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Kerala
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account
                    </span>
                  </Typography>
                </Div>
              </Card>
              <Card className="accounts-left-card">
                <Div
                  sx={{
                    p: 2,
                    pb: 1,
                  }}
                >
                  <Typography sx={{ fontSize: "14px", color: "#545454" }}>
                    Industry
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",

                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Finance
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account{" "}
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Travel Tourism
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Construction
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Production
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Marketing
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account
                    </span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    className="accounts-left-card2-heading"
                    sx={{ pl: 2 }}
                  >
                    Sales
                    <br />
                    <span className="accounts-left-card2-sidehead">
                      25000 account
                    </span>
                  </Typography>
                </Div>
              </Card>
            </Card>
          </Grid>
          <Grid
            item
            xs={9.5}
            sx={{ display: ShowAccountsHome === true ? "block" : "none" }}
          >
            <Card className="accounts-main-content-card">
              <AccountsHome />
            </Card>
          </Grid>
          <Grid
            item
            xs={9.5}
            sx={{ display: ShowMyAccountsPage === true ? "block" : "none" }}
          >
            {/* MY ACCOUNTS PAGE HERE */}
            <>
              <Card
                className="accounts-main-content-card"
                style={{ padding: "8px" }}
              >
                <MyAccount />
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 800 }}>
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#1B416B" }}>
                        <TableCell
                          className="accounts-table-heading"
                          align="center"
                        >
                          Account Name
                          <ArrowUpwardIcon fontSize="small" />
                        </TableCell>
                        <TableCell
                          className="accounts-table-heading"
                          align="center"
                        >
                          Account ID
                        </TableCell>
                        <TableCell
                          className="accounts-table-heading"
                          align="center"
                        >
                          Phone
                        </TableCell>
                        <TableCell
                          className="accounts-table-heading"
                          align="center"
                        >
                          Date
                        </TableCell>
                        <TableCell
                          className="accounts-table-heading"
                          align="center"
                        >
                          Address
                        </TableCell>
                        <TableCell
                          className="accounts-table-heading"
                          align="center"
                        >
                          Industry
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
                          <Div
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Button
                              className="save-button"
                              onClick={handleClose}
                            >
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
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>
                            <Div
                              sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                              }}
                            >
                              <Avatar
                                size="small"
                                sx={{
                                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                  bgcolor: row.col,
                                  fontSize: "12px",
                                  fontWeight: 600,
                                  width: "38px",
                                  height: "38px",
                                }}
                              >
                                {row.accName.slice(0, 2).toUpperCase()}
                              </Avatar>
                              <Typography
                                sx={{ fontSize: "12px", color: "#000000" }}
                                paddingLeft="12px"
                              >
                                {row.accName}
                                <br />
                                <span
                                  style={{ color: "#545454", fontSize: "10px" }}
                                >
                                  {row.desig}
                                </span>
                              </Typography>
                            </Div>
                          </TableCell>

                          <TableCell
                            onClick={handleClickViewAccount}
                            sx={{
                              color: "#304995",
                              cursor: "pointer",
                              fontSize: "14px",
                            }}
                            align="center"
                          >
                            {row.accId}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ color: "#000000", fontSize: "12px" }}
                          >
                            <svg
                              style={{ paddingRight: "4px" }}
                              width="20"
                              height="19"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.65307 10.2903C4.19134 12.312 6.62376 13.826 9.58024 14.3547C11.3755 14.6769 13.1354 13.6768 13.5085 12.1263C13.5543 11.9318 13.5613 11.6582 13.5543 11.4089C13.5402 11.1049 13.3185 10.8343 12.9876 10.7278C12.0829 10.433 9.714 9.6608 8.81986 9.37504C8.49599 9.26858 8.13346 9.33856 7.89064 9.55136L7.88708 9.55443C7.72871 9.69736 7.5809 9.85841 7.45409 10.0347C7.40486 10.1046 7.32383 10.1503 7.22881 10.1624C7.13735 10.1746 7.04576 10.1533 6.97542 10.1016C6.4334 9.68515 5.97929 9.19869 5.60963 8.66368L5.57795 8.62116C5.14851 8.10735 4.80352 7.545 4.57469 6.94615C4.54658 6.87013 4.56057 6.78499 4.60993 6.71819C4.65916 6.64832 4.74018 6.60262 4.83521 6.59054C5.07104 6.56011 5.29988 6.5054 5.51805 6.43553H5.52161C5.84549 6.32907 6.06363 6.06464 6.07774 5.7667C6.12697 4.94595 6.24667 2.76008 6.29246 1.92706C6.31002 1.62309 6.11298 1.33733 5.79269 1.20661C5.53217 1.10016 5.23656 0.996888 5.01128 0.957341C3.21262 0.63206 1.45262 1.63219 1.07956 3.18262C0.474062 5.71793 1.10424 8.22604 2.61784 10.2414L2.84667 10.3508L2.61784 10.2444L2.65307 10.2903ZM8.74613 1.25231C12.6992 1.94847 15.2547 5.28629 14.4485 8.70032C14.4169 8.82797 14.5154 8.95563 14.6632 8.98003C14.8111 9.00738 14.9589 8.92224 14.9871 8.79459C15.853 5.12215 13.1074 1.53495 8.85509 0.784175C8.70728 0.75682 8.55947 0.841959 8.53122 0.969615C8.50311 1.10342 8.59813 1.228 8.74594 1.25239L8.74613 1.25231ZM8.66522 3.2526C11.1714 3.8454 12.6501 6.08578 11.9637 8.25042C11.925 8.37808 12.0094 8.50881 12.1573 8.54232C12.3051 8.57572 12.4564 8.50277 12.4952 8.37511C13.2625 5.95823 11.6116 3.45926 8.80961 2.79671C8.6618 2.76331 8.51043 2.83625 8.47163 2.96391C8.43296 3.0886 8.51742 3.21933 8.66524 3.25274L8.66522 3.2526ZM7.90135 5.33498C9.37271 5.67543 10.2492 6.98263 9.85495 8.25338C9.81628 8.38104 9.90418 8.51177 10.0486 8.54528C10.1964 8.57868 10.3477 8.50276 10.3865 8.37807C10.8582 6.855 9.80574 5.2865 8.04216 4.87908C7.89435 4.84568 7.74297 4.9216 7.70418 5.04629C7.6655 5.17087 7.75353 5.3016 7.90134 5.33501L7.90135 5.33498Z"
                                fill="#007BFF"
                              />
                            </svg>

                            {row.phone}
                          </TableCell>
                          <TableCell
                            sx={{ fontSize: "14px", color: "#000000" }}
                            align="center"
                          >
                            {row.dates}
                          </TableCell>
                          <TableCell
                            sx={{ fontSize: "14px", color: "#000000" }}
                            align="center"
                          >
                            {row.address}
                          </TableCell>
                          <TableCell
                            sx={{ fontSize: "14px", color: "#000000" }}
                            align="center"
                          >
                            {row.industry}
                          </TableCell>
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
                          boxShadow: "none",
                          mt: 7,
                          mr: 5,
                          maxHeight: "300px",
                          width: "300px",
                        }}
                      >
                        <MenuItem onClick={handleClickEditAccount}>
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
            </>
          </Grid>
          <Grid
            item
            xs={9.5}
            sx={{ display: ShowViewAccount === true ? "block" : "none" }}
          >
            <Card
              className="accounts-main-content-card"
              style={{ padding: "8px" }}
            >
              <ViewAccount />
            </Card>
          </Grid>
          <Grid
            item
            xs={9.5}
            sx={{ display: ShowNewAccountPage === true ? "block" : "none" }}
          >
            <Card
              className="accounts-main-content-card"
              style={{ padding: "8px" }}
            >
              <NewAccount />
            </Card>
          </Grid>
        </Grid>
      </JumboContentLayoutMain>
    </>
  );
};

export default AccountsLeftSide;
