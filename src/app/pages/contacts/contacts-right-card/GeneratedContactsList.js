import Div from "@jumbo/shared/Div";
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
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { CloseIcon, SettingsIcon } from "app/icons/PngIcons";
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { green } from "@mui/material/colors";
import ModeEdit from "@mui/icons-material/ModeEdit";
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import ChatIcon from '@mui/icons-material/Chat';
import DndWrapper from "../DndWrapper";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";


const contacts = [
  {
    country: "India",
    state: "Tamilnadu",
    mobile_code: "+91",
    industry_type: "Product Bsaed",
  },
  { state: "Kerala", mobile_code: "+92", industry_type: "Service Bsaed" },
];



const GeneratedContactsList = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <ListItem selected key={file.path} sx={{ width: "auto", mr: 1 }}>
      {file.path} - {file.size} bytes
    </ListItem>
  ));

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openUpload, setOpenUpload] = useState(false);
  const [openAddContact, setOpenAddContact] = useState(false);
  const [openEditContact, setOpenEditContact] = useState(false);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAction = () => {
    setAnchorElAction(null);
  };

  const handleClickOverviewContact = () => {
    navigate("/app/contacts/overview");
  };

  const handleUpload = () => {
    setOpenUpload(true);
  };

  const handleAddContact = () => {
    setOpenAddContact(true);
  };

  const handleClickEditContact = () => {
    setOpenEditContact(true);
  }


  return (
    <>
      <Div sx={{ display: "flex", justifyContent: "space-between" }}>
        <Div>
          <Button className="save-button" onClick={handleUpload} sx={{ mr: 2 }}>
            Upload
          </Button>
          <Button className="save-button" onClick={handleAddContact}> + Add Contact</Button>

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
              <Typography
                sx={{ fontSize: "18px", verticalAlign: "middle" }}
              >
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
                  Before Import Contacts you must confirm the data in
                  the prescribed template which shall be used to import
                  data to the CRMFarm. <br />
                  <br />
                  If you don't have the template please download the
                  template here.
                </Typography>
                <Div sx={{ display: "flex", justifyContent: "center" }}>
                  <Button className="save-button">
                    Download Template
                  </Button>
                </Div>
                <DndWrapper>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Typography variant={"body1"}>
                      Drag 'n' drop some files here, or click to select
                      files
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

          {/* popup for add contacts */}
          <Dialog
            open={openAddContact}
            onClose={() => setOpenAddContact(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              sx={{ fontSize: "18px" }}
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
                {/* <Div className="mt-1">
                  <FormControl className="col-sm-6">
                    <Autocomplete
                      disablePortal
                      className="search-select"
                      getOptionLabel={(option) => option.country}
                      options={contacts}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Country"
                        />
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
                        <TextField
                          {...params}
                          placeholder="Select State"
                        />
                      )}
                    />
                  </FormControl>
                </Div> */}
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
                  placeholder="No. of lead generated"
                  variant="outlined"
                />
                {/* <FormControl className="col-sm-12 mt-1">
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
                </FormControl> */}
              </DialogContentText>
            </DialogContent>
            <DialogActions
              sx={{ display: "flex", justifyContent: "center" }}
            >
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
        <Div sx={{ display: "flex", justifyContent: "end" }}>
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
        </Div>
      </Div>
      <Typography variant="h3" sx={{ mt: 2 }}>
        Contacts generated lead
      </Typography>

      <Table>
        <TableHead className="table-head">
          <TableRow>
            <TableCell>Contact Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>No. of lead generated</TableCell>
            <TableCell onClick={handleClickOpen} sx={{ cursor: "pointer" }}>
              <IconButton>
                <SettingsIcon size={18} color="black" />
              </IconButton>
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
              {/* <MenuItem> */}
              <FormGroup sx={{ p: 2 }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Contact Name"
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
                  control={<Checkbox />}
                  label="Country"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="City"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Status"
                />
                <FormControlLabel control={<Checkbox />} label="Open Deals" />
                <FormControlLabel control={<Checkbox />} label="Closed Deals" />
                <FormControlLabel control={<Checkbox />} label="Next Activity Date" />
                <FormControlLabel control={<Checkbox />} label="Owner" />
                <FormControlLabel control={<Checkbox />} label="Done Activities" />
              </FormGroup>
              {/* </MenuItem> */}
              <Div sx={{ display: "flex", justifyContent: "center" }}>
                <Button className="save-button" onClick={handleClose}>
                  Save
                </Button>
              </Div>
            </Menu>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell onClick={handleClickOverviewContact}
              sx={{ cursor: "pointer" }}>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  // alignItems: "center",
                }}
              >
                <Avatar
                  size="small"
                  sx={{
                    fontSize: "14px",
                    bgcolor: green[500],
                    width: "30px",
                    height: "30px",
                  }}
                >
                  RK
                </Avatar>
                <Typography variant="h4" paddingLeft="8px">
                  Ravi Kumar
                  <br />
                  <span style={{ color: "#475259" }}>Tech Wire</span>
                </Typography>
              </Div>
            </TableCell>
            <TableCell>6539280798</TableCell>
            <TableCell>ravi@gmail.com</TableCell>
            <TableCell>2</TableCell>
            <TableCell onClick={handleClickAction}>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </TableCell>

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
              sx={{ mt: 7, maxHeight: "300px" }}
            >
              <MenuItem onClick={handleClickEditContact}><ModeEdit sx={{ fontSize: 20, mr: 2 }} />Edit</MenuItem>
              <MenuItem><DeleteIcon sx={{ fontSize: 20, mr: 2 }} />Delete</MenuItem>
              <MenuItem><ArchiveIcon sx={{ fontSize: 20, mr: 2 }} />Archieve</MenuItem>
              <MenuItem><ChatIcon sx={{ fontSize: 20, mr: 2 }} />Chat</MenuItem>
            </Menu>

            {/* popup for Edit contacts */}
            <Dialog
              open={openEditContact}
              onClose={() => setOpenEditContact(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle
                id="alert-dialog-title"
                sx={{ fontSize: "18px" }}
              >
                Edit Contact
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
                    placeholder="Age of contact"
                    variant="outlined"
                  />

                </DialogContentText>
              </DialogContent>
              <DialogActions
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button className="save-button">Save</Button>
                <Button
                  className="cancel-button"
                  onClick={() => setOpenEditContact(false)}
                  autoFocus
                >
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default GeneratedContactsList;
