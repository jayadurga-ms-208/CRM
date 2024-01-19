import React from "react";
import { useState } from "react";

import { HiOutlineSearch } from "react-icons/hi";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import Div from "@jumbo/shared/Div";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEdit from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CancelOutlined,
} from "@mui/icons-material";

const AccountAppointments = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [anchorElAction, setAnchorElAction] = useState(null);

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
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
        Appointments
      </Typography>
      <Grid
        columnSpacing={2}
        paddingBottom={1.5}
        container
        rowSpacing={1}
        justifyContent={"space-between"}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={3}></Grid>
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
            sx={{ maxWidth: 130, mt: { xs: 0.5, md: 0 }, mr: 1 }}
          />

          <Button
            onClick={() => setShowDialog(true)}
            size="small"
            variant="contained"
            sx={{
              whiteSpace: "nowrap",
              maxWidth: "139px",
              fontSize: "12px",
              background: "#007BFF",
              ":hover": { background: "#007BFF" },
              maxHeight: "27px",
              borderRadius: "10px",
            }}
          >
            Make an appointment
          </Button>
          <Dialog
          scroll="body"
            PaperProps={{
              sx: {
                minWidth: "500px",
                maxHeight: "367px",
              },
            }}
            open={showDialog}
            onClose={() => setShowDialog(false)}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogContent>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                paddingBottom={2}
              >
                <Div sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    size="small"
                    sx={{
                      background: "#C74483",
                      fontSize: "20px",
                      width: "51px",
                      height: "51px",
                      border: 3,
                      borderColor: "common.white",
                      boxShadow: (theme) => theme.shadows[3],
                    }}
                  >
                    GO
                  </Avatar>
                  <Typography
                    paddingLeft={2}
                    variant="h3"
                    fontWeight={600}
                    marginBottom="10px"
                    sx={{ cursor: "move" }}
                    id="draggable-dialog-title"
                  >
                    Appointment
                  </Typography>
                </Div>
                <IconButton
                  // sx={{ float: "right" }}
                  onClick={() => setShowDialog(false)}
                >
                  <CancelOutlined />
                </IconButton>
              </Grid>

              <DialogContentText>
                <Grid container columnSpacing={2} rowSpacing={0.5}>
                  <Grid item xs={12}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "10px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Enter Location"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ color: "#6C63FF" }}
                          >
                            <svg
                              width="18"
                              height="22"
                              viewBox="0 0 18 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                                stroke="#6C63FF"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1Z"
                                stroke="#6C63FF"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "10px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Enter Venue"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ color: "#6C63FF" }}
                          >
                            <svg
                              width="18"
                              height="19"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 9V3L9 0L6 3V5H0V19H18V9H12ZM4 17H2V15H4V17ZM4 13H2V11H4V13ZM4 9H2V7H4V9ZM10 17H8V15H10V17ZM10 13H8V11H10V13ZM10 9H8V7H10V9ZM10 5H8V3H10V5ZM16 17H14V15H16V17ZM16 13H14V11H16V13Z"
                                fill="#6C63FF"
                              />
                            </svg>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "10px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Expected Date"
                      variant="outlined"
                      type={"date"}
                    />
                  </Grid>
                  <Grid item xs={6}></Grid>

                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "10px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="From Time"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "10px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="To Time"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <center>
                  <Div sx={{ paddingTop: "20px" }}>
                    <Button
                      sx={{
                        height: "30px",
                        width: "80px",
                        borderRadius: "8px",
                        backgroundColor: "#007BFF",
                        ":hover": { background: "#007BFF" },
                      }}
                      variant="contained"
                    >
                      Save
                    </Button>
                  </Div>
                </center>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>

      <Timeline sx={{ m: 0, mt: 2, p: (theme) => theme.spacing(0) }}>
        <TimelineItem
          sx={{
            "&::before": {
              display: "none",
            },
          }}
        >
          <TimelineSeparator>
            <Avatar
              alt="date"
              sx={{
                width: 45,
                height: 45,
                textAlign: "center",
                backgroundColor: "#424242",
                borderColor: "common.white",
                boxShadow: (theme) => theme.shadows[3],
              }}
            >
              <Grid container rowSpacing={0.5}>
                <Grid sx={{ fontSize: "12px" }} item xs>
                  Dec 8
                </Grid>
                <Grid sx={{ fontSize: "10px" }} item xs>
                  11:30am
                </Grid>
              </Grid>
            </Avatar>
            <TimelineConnector sx={{ backgroundColor: "#424242" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              p: (theme) => theme.spacing(0.5, 0),
              ml: 2.5,
            }}
          >
            <Div
              className="card"
              sx={{
                p: 1,
                background: "#FEFFEA",
                borderColor: "#C9C9C9",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Div>
                <Typography variant="h5">
                  To <span style={{ marginLeft: 55, marginRight: 5 }}> </span>{" "}
                  <span style={{ color: "#FA1825" }}>11:30 AM</span>
                </Typography>
                <Typography variant="h5">
                  Venue{" "}
                  <span style={{ marginLeft: 32, marginRight: 5 }}> </span>{" "}
                  <span>Columbus</span>
                </Typography>
                <Typography variant="h5">
                  Location{" "}
                  <span style={{ marginLeft: 20, marginRight: 5 }}> </span>{" "}
                  <span>Topeka, Kansas</span>
                </Typography>
              </Div>
              <IconButton onClick={handleClickAction}>
                <MoreVertIcon />
              </IconButton>
            </Div>
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
                mt: 3,
                mr: 5,
                maxHeight: "300px",
                width: "300px",
              }}
            >
              <MenuItem>
                <ModeEdit sx={{ fontSize: 20, mr: 2 }} />
                Edit
              </MenuItem>
              <MenuItem>
                <DeleteIcon sx={{ fontSize: 20, mr: 2 }} />
                Delete
              </MenuItem>
            </Menu>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default AccountAppointments;
