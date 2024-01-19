import React from 'react'
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { Avatar, Badge, Button, IconButton, InputAdornment, Dialog, DialogActions, DialogContent, DialogContentText, TextField, Typography, Menu, MenuItem } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import Div from '@jumbo/shared/Div';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEdit from "@mui/icons-material/ModeEdit";
import DeleteIcon from '@mui/icons-material/Delete';



const Appointment = () => {
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
      <Div>
        <Typography variant="h3" fontWeight={600}>
          Appointments
        </Typography>

        <Div sx={{ display: "flex", justifyContent: "end" }}>
          <TextField
            className="col-5 input-box"
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
            sx={{ mt: { xs: 0.5, md: 0 }, mr: 1 }}
          />
          <Button
            className="save-button"
            onClick={() => setShowDialog(true)}
          >
            Make an Appointment
          </Button>
          <Dialog
            open={showDialog}
            onClose={() => setShowDialog(false)}
            aria-labelledby="draggable-dialog-title"
          >

            <DialogContent>
              <Typography variant='h3' fontWeight={600} marginBottom="10px" sx={{ cursor: 'move' }} id="draggable-dialog-title">Appointment</Typography>
              <DialogContentText>
                <TextField
                  className='input-box col-12 mb-1'
                  size={"small"}
                  placeholder={"Enter location"}

                />

                <TextField
                  className='input-box col-12 mb-1'
                  size={"small"}
                  placeholder={"Enter venue"}

                />
                <TextField
                  className='input-box col-12 mb-1'
                  type="date"
                  placeholder={"Expected Date"}
                />
                <TextField
                  className='input-box col-6 mb-1 mr-1'
                  type="time"
                  placeholder={"From Time"}
                />
                <TextField
                  className='input-box col-6 mb-1 mr-1'
                  type="time"
                  placeholder={"To Time"}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Div sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                <Button className='save-button' sx={{ mr: 2 }}>Save</Button>
                <Button className='cancel-button' onClick={() => setShowDialog(false)}>Cancel</Button>
              </Div>
            </DialogActions>
          </Dialog>
        </Div>
        <Timeline sx={{ m: 0, mt: 2, p: (theme) => theme.spacing(0) }}>
          <TimelineItem
            sx={{
              "&::before": {
                display: "none",
              },
            }}
          >
            <TimelineSeparator>
              <Badge badgeContent={4} color="primary">
                <Avatar
                  alt="date"
                  sx={{
                    width: 45,
                    height: 45,
                    textAlign: "center",
                    fontSize: "14px",
                    borderColor: "common.white",
                    boxShadow: (theme) => theme.shadows[3],
                  }}
                >
                  Dec 8
                </Avatar>
              </Badge>
              <TimelineConnector />
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
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Div>
                  <Typography variant="h5">
                    To <span>: 11:30am</span>
                  </Typography>
                  <Typography variant="h5">
                    Venue <span>: Home</span>
                  </Typography>
                  <Typography variant="h5">
                    Location <span>: Chennai</span>
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
              <MenuItem><ModeEdit sx={{ fontSize: 20, mr: 2 }} />Edit</MenuItem>
              <MenuItem><DeleteIcon sx={{ fontSize: 20, mr: 2 }} />Delete</MenuItem>
            </Menu>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Div>
    </>
  )
}

export default Appointment;