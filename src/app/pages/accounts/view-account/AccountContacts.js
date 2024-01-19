import {
  Avatar,
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
  InputAdornment,
  Grid,
} from "@mui/material";
import { ModeEdit } from "@mui/icons-material";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import React from "react";
import Div from "@jumbo/shared/Div";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import ChatIcon from "@mui/icons-material/Chat";
import "../accounts.css";

function createData(accName, desig, phone, email, lastcon,col) {
  return { accName, desig, phone, email, lastcon,col };
}

const rows = [
  createData(
    "Gokulraj Sugumar",
    "Tech overwatch",
    "(91)976543211",
    "gokul@gmail.com",
    "24 Days",
    "#050A30"
  ),
  createData(
    "Roshan Khan",
    "Tech overwatch",
    "(91)976543211",
    "gokul@gmail.com",
    "6 MOnths",
    "#FF3939"
  ),
  createData(
    "Kavin Kumar",
    "Tech overwatch",
    "(91)976543211",
    "gokul@gmail.com",
    "2 Years",
    "#424651"
  ),
  createData(
    "Yuvaraj Singh",
    "Tech overwatch",
    "(91)976543211",
    "gokul@gmail.com",
    "1 Year",
    "#750075"
  ),
  createData(
    "Gokulraj Sugumar",
    "Tech overwatch",
    "(91)976543211",
    "gokul@gmail.com",
    "1 Year 2 Months",
    "#FFA500"
  ),
  createData(
    "Gokulraj Sugumar",
    "Tech overwatch",
    "(91)976543211",
    "gokul@gmail.com",
    "24 Days",
    "#104210"
  ),
  createData(
    "Gokulraj Sugumar",
    "Tech overwatch",
    "(91)976543211",
    "gokul@gmail.com",
    "6 Months"
  ),
];

const AccountContacts = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openEditContact, setOpenEditContact] = useState(false);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };
  const handleClickEditContact = () => {
    setOpenEditContact(true);
  };

  const handleCloseAction = () => {
    setAnchorElAction(null);
  };
  return (
    <>
      <Typography
        paddingLeft={2.5}
        variant="h3"
        sx={{ fontSize: "16px", fontWeight: "600" }}
      >
        Contact
      </Typography>

      <Grid
        columnSpacing={2}
        paddingBottom={1.5}
        container
        justifyContent={"flex-end"}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={7}></Grid>
        <Grid item xs={3.5}>
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
            sx={{ minWidth: 130, mt: { xs: 0.5, md: 0 }, mr: 1 }}
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1B416B" }}>
              <TableCell
                className="accounts-table-heading"
                align="center"
                sx={{ whiteSpace: "nowrap" }}
              >
                Name
                <ArrowUpwardIcon fontSize="small" />
              </TableCell>
              <TableCell
                className="accounts-table-heading"
                align="center"
                sx={{ whiteSpace: "nowrap" }}
              >
                Phone
              </TableCell>
              <TableCell
                className="accounts-table-heading"
                align="left"
                sx={{ whiteSpace: "nowrap" }}
              >
                Email
              </TableCell>
              <TableCell
                className="accounts-table-heading"
                align="left"
                sx={{ whiteSpace: "nowrap" }}
              >
                Last Contacted
              </TableCell>
              <TableCell
                sx={{ whiteSpace: "nowrap" }}
                className="accounts-table-heading"
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.accName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ cursor: "pointer", whiteSpace: "nowrap" }}>
                  <Div sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <Avatar
                      size="small"
                      sx={{
                        backgroundColor:row.col,
                        fontSize: "12px",
                        fontWeight: 600,
                        width: "24px",
                        height: "24px",
                        boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
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
                  align="center"
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
                  sx={{
                    fontSize: "12px",
                    color: "#000000",
                    whiteSpace: "nowrap",
                  }}
                  align="left"
                >
                  <svg
                    style={{ paddingRight: "4px" }}
                    width="22"
                    height="19"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2.72727C17.9994 2.0042 17.7622 1.31096 17.3403 0.799598C16.9185 0.288234 16.3465 0.00074026 15.75 0H2.25C1.65346 0.000760948 1.08154 0.288249 0.659668 0.799598C0.237793 1.31095 0.000610714 2.0042 0 2.72727V12.2727C0 12.3271 0.0105466 12.3777 0.0131836 12.4313C-0.00188337 12.5462 0.00791044 12.664 0.0416855 12.7728C0.137989 13.3979 0.411328 13.9623 0.814496 14.369C1.21779 14.7757 1.72555 14.9989 2.25 15H15.75C16.2744 14.9989 16.7822 14.7757 17.1854 14.3692C17.5887 13.9625 17.862 13.3979 17.9583 12.773C17.9921 12.664 18.002 12.5462 17.9868 12.4313C17.9894 12.3777 18 12.3271 18 12.2727L18 2.72727ZM13.3438 7.1813L16.875 4.61338V11.0049L13.3438 7.1813ZM2.25 1.36364H15.75C16.0482 1.36409 16.3342 1.50791 16.545 1.76361C16.756 2.01914 16.8746 2.36583 16.875 2.72727V3.02298L10.4471 7.69753C10.0103 8.01637 9.51004 8.18501 9.00013 8.18501C8.49021 8.18501 7.99001 8.01638 7.55319 7.69753L1.12526 3.02298V2.72727C1.12563 2.36582 1.24429 2.01912 1.45524 1.76361C1.66605 1.50793 1.95181 1.3641 2.25 1.36364ZM1.125 4.61322L4.65621 7.18114L1.125 11.005V4.61322ZM15.75 13.6362H2.25C2.02161 13.6355 1.79888 13.5504 1.61142 13.3924C1.42396 13.2344 1.28057 13.011 1.20047 12.7518L5.6664 7.916L6.9741 8.86704C7.58581 9.3131 8.2863 9.54885 9.00009 9.54885C9.71389 9.54885 10.4143 9.31311 11.026 8.86704L12.3337 7.916L16.7996 12.7518C16.7195 13.011 16.5762 13.2345 16.3888 13.3924C16.2013 13.5504 15.9784 13.6355 15.75 13.6362Z"
                      fill="#007BFF"
                    />
                  </svg>
                  {row.email}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "12px",
                    color: "#000000",
                    whiteSpace: "nowrap",
                  }}
                  align="left"
                >
                  {row.lastcon}
                </TableCell>
                <TableCell
                  align="center"
                  onClick={handleClickAction}
                  sx={{ cursor: "pointer", whiteSpace: "nowrap" }}
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
    </>
  );
};

export default AccountContacts;
