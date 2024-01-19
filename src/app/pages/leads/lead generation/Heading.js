import React from "react";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Avatar,
  Card,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormControl,
  Menu,
  MenuItem,
  DialogActions,
  DialogContentText,
  DialogContent,
  Autocomplete,
  Dialog,
  DialogTitle,
  Link,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SummarizeIcon from "@mui/icons-material/Summarize";
import FaxIcon from "@mui/icons-material/Fax";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FactoryIcon from "@mui/icons-material/Factory";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import Enquiry from "./Enquiry";
import SocialMedia from "../lead generation/Socialmedia";
import Contact from "../lead generation/Contact";
import WebListPage from "../lead generation/WebListPage";
import JumboContentLayout from "@jumbo/components/JumboContentLayout";
import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import LeadGenerationList from "./LeadNameWebListPage";
import { CancelOutlined } from "@mui/icons-material";
import { color } from "@mui/system";

const dropDownLists = [
  {
    leadid: "ACC0030",
    country: "India",
    state: "Tamilnadu",
    city: "Chennai",
    mobile_code: "+91",
  },
];

const Heading = () => {
  const [showWebListPage, setShowWebListPage] = useState(true);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showLeadGenerationList, setShowLeadGenerationList] = useState(false);
  const [openCreateList, setOpenCreateList] = useState(false);

  const handleClickWebListPage = () => {
    setShowWebListPage(true);
    setShowEnquiry(false);
    setShowSocialMedia(false);
    setShowContact(false);
    setShowLeadGenerationList(false);
  };
  const handleClickEnquiry = () => {
    setShowWebListPage(false);
    setShowEnquiry(true);
    setShowSocialMedia(false);
    setShowContact(false);
    setShowLeadGenerationList(false);
  };
  const handleClickSocialMedia = () => {
    setShowWebListPage(false);
    setShowEnquiry(false);
    setShowSocialMedia(true);
    setShowContact(false);
    setShowLeadGenerationList(false);
  };
  const handleClickContact = () => {
    setShowWebListPage(false);
    setShowEnquiry(false);
    setShowSocialMedia(false);
    setShowContact(true);
    setShowLeadGenerationList(false);
  };
  const handleCreateList = () => {
    setOpenCreateList(true);
  };
  return (
    <>
      <JumboContentLayoutMain>
        <Grid container>
          <Grid items xs={9}>
            <Grid container spacing={3}>
              <Grid item>
                <Button
                  onClick={handleClickWebListPage}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: "14px",
                    backgroundColor: showWebListPage ? "#007BFF" : "#fff",
                    color: showWebListPage ? "#fff": "#007BFF",
                    ":hover": { background: "#007BFF" },
                    maxHeight: "23px",
                    borderRadius: "10px",
                    border: 2
                  }}
                >
                  Web
                </Button>
              </Grid>

              <Grid item>
                <Button
                  onClick={handleClickEnquiry}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: "14px",
                    backgroundColor: showEnquiry ? "#007BFF" : "#fff",
                    color: showEnquiry ? "#fff": "#007BFF",
                    ":hover": { background: "#007BFF" },
                    maxHeight: "23px",
                    borderRadius: "10px",
                    border: 2
                  }}
                >
                  Enquiry
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleClickSocialMedia}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: "14px",
                    backgroundColor: showSocialMedia ? "#007BFF" : "#fff",
                    color: showSocialMedia ? "#fff": "#007BFF",
                    ":hover": { background: "#007BFF" },
                    maxHeight: "23px",
                    borderRadius: "10px",
                    border: 2
                  }}
                >
                  Social Media
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleClickContact}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: "14px",
                    backgroundColor: showContact ? "#007BFF" : "#fff",
                    color: showContact ? "#fff": "#007BFF",
                    ":hover": { background: "#007BFF" },
                    maxHeight: "23px",
                    borderRadius: "10px",
                    border: 2
                  }}
                >
                  Contacts
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={"8"}>
              <Grid item>
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
              </Grid>
              <br />
              <Grid item>
                <Button
                  size="small"
                  onClick={handleCreateList}
                  startIcon={<AddIcon />}
                  variant="contained"
                  sx={{
                    fontSize: "14px",
                    background: "#007BFF",
                    ":hover": { background: "#007BFF" },
                    maxHeight: "23px",
                    borderRadius: "10px",
                  }}
                >
                  Create List
                </Button>
              </Grid>

              <Dialog
              scroll="body"
                PaperProps={{
                  sx: {
                    width: "100%",
                    maxWidth: "848px",
                  },
                }}
                open={openCreateList}
                onClose={() => setOpenCreateList(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <Card className="border-card">
                  <DialogTitle
                    id="alert-dialog-title"
                    align="center"
                    sx={{ fontSize: "18px" }}
                  >Lead Generation(Web)
                    <IconButton
                      sx={{ float: "right" }}
                      onClick={() => setOpenCreateList(false)}
                    >
                      <CancelOutlined />
                    </IconButton>
                  </DialogTitle>
                </Card>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Card className="border-card">
                      <Grid container spacing={4} paddingLeft={10}>
                        <Grid item xs={10}>
                          <TextField
                            className="col-sm-12 input-box mt-1"
                            id="outlined-basic"
                            placeholder="Enter List Name"
                            variant="outlined"
                            sx={{
                              "& fieldset": {
                                borderRadius: "30px",
                              },
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FaxIcon sx={{ color: "#6C63FF" }} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>

                        <Grid item xs={10}>
                          <TextField
                            className="col-sm-12 input-box mt-1"
                            id="outlined-basic"
                            placeholder="Geography"
                            variant="outlined"
                            sx={{
                              "& fieldset": {
                                borderRadius: "30px",
                              },
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <EqualizerIcon sx={{ color: "#6C63FF" }} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>

                        <Grid item xs={10}>
                          <FormControl
                            className="col-sm-2 mt-1"
                            sx={{
                              width: "100%",
                              "& fieldset": {
                                borderRadius: "30px",
                              },
                            }}
                          >
                            <Autocomplete
                              disablePortal
                              className="search-select"
                              getOptionLabel={(option) => option.leadid}
                              options={dropDownLists}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  placeholder="Lead Source"
                                />
                              )}
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid
                        paddingTop={6}
                        paddingLeft={10}
                        container
                        direction={"row"}
                        // justifyContent={"center"}
                        // alignItems={"center"}

                        spacing={2}
                      ></Grid>
                      <Grid item align="center">
                        <Button
                          sx={{
                            maxHeight: "30px",
                            maxWidth: "150px",
                            borderRadius: "20px",
                            backgroundColor: "#007BFF",
                            ":hover": { background: "#007BFF" },
                          }}
                          variant="contained"
                        >
                          Scrap It Now
                        </Button>
                      </Grid>
                    </Card>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography
              variant="h3"
            ></Typography>
          </Grid>
        </Grid>

        <Div sx={{ display: showWebListPage === true ? "block" : "none"}}>
          <WebListPage />
        </Div>

        <Div sx={{ display: showEnquiry === true ? "block" : "none" }}>
          <Enquiry />
        </Div>

        <Div sx={{ display: showSocialMedia === true ? "block" : "none" }}>
          <SocialMedia />
        </Div>

        <Div sx={{ display: showContact === true ? "block" : "none" }}>
          <Contact />
        </Div>
      </JumboContentLayoutMain>
    </>
  );
};

export default Heading;
