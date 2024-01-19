import React from 'react'
import { useState } from 'react';
import {
  Button, Card, IconButton, InputAdornment, TextField, Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import Div from '@jumbo/shared/Div';
import { HiOutlineSearch } from "react-icons/hi";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEdit from "@mui/icons-material/ModeEdit";
import DeleteIcon from '@mui/icons-material/Delete';



const ConatctNotes = () => {
  const [height, setHeight] = useState(true);
  const [openAddNotes, setOpenAddNotes] = useState(false);
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
          Notes
        </Typography>
        <Div sx={{ display: "flex", justifyContent: "flex-end" }}>
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
            onClick={() => setOpenAddNotes(true)}
          >
            Add Notes
          </Button>
        </Div>

        <Dialog
          open={openAddNotes}
          onClose={() => setOpenAddNotes(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{ fontSize: "18px" }}
          >
            Add Notes
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextField
                className="col-sm-12 multiline-box"
                multiline
                rows={4}
                id="outlined-basic"
                placeholder="Enter your notes"
                variant="outlined"
                sx={{ width: "400px" }}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button className="save-button">Save</Button>
            <Button
              className="cancel-button"
              onClick={() => setOpenAddNotes(false)}
              autoFocus
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Div>

      <Div sx={{ flex: 1, mt: 2 }}>
        <Div sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Div sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Card sx={{ p: 0.5, minWidth: 60, height: 55, border: "2px solid #EEEEEE", backgroundColor: "#EEEEEE", borderRadius: "5px", boxShadow: "none" }}>
              <Div sx={{ background: "#EEEEEE", height: "5px" }} />
              <Divider />
              <Typography variant='h4' sx={{ textAlign: "center", pt: 0.5, fontWeight: 600 }}>Dec 20 <br /><span style={{fontWeight: 500}}>10:30am</span></Typography>
            </Card>
          </Div>
          <Div
            className="card"
            sx={{
              p: 1,
            }}
          >
            <Div sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "start", height: height === true ? "30px" : "fit-content", overflow: "hidden",
            }}>
              <Typography variant="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Anim dolore incididunt cupidatat ea. Proident nisi elit duis duis laborum. Aute labore in enim irure irure exercitation occaecat officia aute dolor sit nulla in.Non aliquip nostrud magna aute dolore nisi minim. Cillum eu enim laboris consectetur laboris. Mollit velit incididunt nisi aliqua. Veniam eu amet consectetur enim eu ex veniam sit qui adipisicing. Culpa exercitation sunt ea dolor aliqua minim culpa in quis esse labore.
              </Typography>
              <Div sx={{ mt: -0.56, display: "flex" }}>
                <IconButton onClick={() => setHeight(!height)} sx={{ p: 0 }}>
                  {height ? <ArrowDropDownIcon /> : <ArrowDropUpIcon/>}
                </IconButton>
                <IconButton onClick={handleClickAction} sx={{ p: 0 }}>
                  <MoreVertIcon />
                </IconButton>
              </Div>
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
          </Div>
        </Div>

      </Div>
    </>
  )
}

export default ConatctNotes;