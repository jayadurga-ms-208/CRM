import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import Div from "@jumbo/shared/Div";
import { HiOutlineSearch } from "react-icons/hi";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEdit from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const AccountNotes = () => {
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
      <Typography
        paddingLeft={2.5}
        variant="h3"
        sx={{ fontSize: "16px", fontWeight: "600" }}
      >
        Notes
      </Typography>
      <Grid
        columnSpacing={2}
        paddingBottom={1.5}
        container
        justifyContent={"space-between"}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={6}></Grid>
        <Grid item >
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
            onClick={() => setOpenAddNotes(true)}
            size="small"
            variant="contained"
            sx={{
              // width: "100%",
              minWidth: "91px",
              fontSize: "12px",
              background: "#007BFF",
              ":hover": { background: "#007BFF" },
              maxHeight: "27px",
              borderRadius: "10px",
            }}
          >
            Add Notes
          </Button>
          <Dialog
            open={openAddNotes}
            onClose={() => setOpenAddNotes(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" sx={{ fontSize: "18px" }}>
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
            <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
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
        </Grid>
      </Grid>
      <Card className="border-card">
        <Div sx={{ flex: 1, mt: 2 }}>
          <Div sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Div sx={{ display: "flex", alignItems: "center", mr: 2 }}>
              <Div>
                <Typography
                  style={{
                    position: "absolute",

                    zIndex: 1,
                    textAlign: "center",
                    paddingTop: "15px",
                    fontWeight: 500,
                    fontSize: "11px",
                    color: "black",
                  }}
                >
                  Dec 20 <br />
                  <span>10:30am</span>
                </Typography>
                <svg
                  // style={{ position:"absolute"}}
                  width="44"
                  height="49"
                  viewBox="0 0 44 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.625 0C9.98967 0 10.3394 0.161328 10.5973 0.448493C10.8551 0.735658 11 1.12514 11 1.53125V3.0625H33V1.53125C33 1.12514 33.1449 0.735658 33.4027 0.448493C33.6606 0.161328 34.0103 0 34.375 0C34.7397 0 35.0894 0.161328 35.3473 0.448493C35.6051 0.735658 35.75 1.12514 35.75 1.53125V3.0625H38.5C39.9587 3.0625 41.3576 3.70781 42.3891 4.85647C43.4205 6.00513 44 7.56305 44 9.1875V42.875C44 44.4995 43.4205 46.0574 42.3891 47.206C41.3576 48.3547 39.9587 49 38.5 49H5.5C4.04131 49 2.64236 48.3547 1.61091 47.206C0.579463 46.0574 0 44.4995 0 42.875V15.3125H44V12.25H0V9.1875C0 7.56305 0.579463 6.00513 1.61091 4.85647C2.64236 3.70781 4.04131 3.0625 5.5 3.0625H8.25V1.53125C8.25 1.12514 8.39487 0.735658 8.65273 0.448493C8.91059 0.161328 9.26033 0 9.625 0V0Z"
                    fill="#C9C9C9"
                  />
                </svg>
              </Div>
            </Div>
            <Div
              className="card"
              sx={{
                p: 1,
                background: "#FEFFEA",
                borderColor: "#C9C9C9",
              }}
            >
              <Div
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "start",
                  height: height === true ? "30px" : "fit-content",
                  overflow: "hidden",
                }}
              >
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Anim
                  dolore incididunt cupidatat ea. Proident nisi elit duis duis
                  laborum. Aute labore in enim irure irure exercitation occaecat
                  officia aute dolor sit nulla in.Non aliquip nostrud magna aute
                  dolore nisi minim. Cillum eu enim laboris consectetur laboris.
                  Mollit velit incididunt nisi aliqua. Veniam eu amet
                  consectetur enim eu ex veniam sit qui adipisicing. Culpa
                  exercitation sunt ea dolor aliqua minim culpa in quis esse
                  labore.
                </Typography>
                <Div sx={{ mt: -0.56, display: "flex" }}>
                  <IconButton onClick={() => setHeight(!height)} sx={{ p: 0 }}>
                    {height ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
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
                <MenuItem>
                  <ModeEdit sx={{ fontSize: 20, mr: 2 }} />
                  Edit
                </MenuItem>
                <MenuItem>
                  <DeleteIcon sx={{ fontSize: 20, mr: 2 }} />
                  Delete
                </MenuItem>
              </Menu>
            </Div>
          </Div>
        </Div>
      </Card>
    </>
  );
};

export default AccountNotes;
