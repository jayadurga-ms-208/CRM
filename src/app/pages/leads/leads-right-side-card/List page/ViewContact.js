import Div from "@jumbo/shared/Div";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  CloseIcon,
  EditIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "app/icons/PngIcons";
import ContactsIcon from '@mui/icons-material/Contacts';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import EmailIcon from '@mui/icons-material/Email';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import HistoryIcon from '@mui/icons-material/History';
import { getAssetPath } from "app/utils/appHelpers";
import { ASSET_AVATARS, ASSET_IMAGES } from "app/utils/constants/paths";
import React, { useState } from "react";
import EmailContent from "app/pages/home/email-lists/EmailContent";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import Appointment from "app/pages/contacts/overviewcontact/Appointment";
import ContactNotes from "app/pages/contacts/overviewcontact/ContactNotes";





const ViewContact = () => {

  const navigate = useNavigate();
  const [base64, setbase64] = useState("");
  const [image, setImage] = useState("");
  const [openUploadEdit, setOpenUploadEdit] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [showMail, setShowMail] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
 



  const handleShowNotes = () => {
    setShowNotes(true);
    setShowMail(false);
    setShowAppointment(false);
   
  };

  const handleShowMail = () => {
    setShowNotes(false);
    setShowMail(true);
    setShowAppointment(false);
    
  };

  
  

  const handleShowAppointment = () => {
    setShowNotes(false);
    setShowMail(false);
    setShowAppointment(true);
    
  };

  

  // image upload function
  const handleChangeImage = (e) => {
    console.log("file uploaded: ", e.target.files[0]);
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      setImage(reader.readAsBinaryString(file));
    }
  };

  const handleReaderLoaded = (e) => {
    console.log("file uploaded 2: ", e);
    let binaryString = e.target.result;
    setbase64(btoa(binaryString));
  };

  const handleSaveImage = (e) => {
    setOpenUploadEdit(false);
  }


  return (
    <>
      <Typography variant="h4" onClick={() => navigate("/app/contacts")} sx={{ cursor: "pointer", mb: 1 }}></Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 4, boxShadow: "none", border: "1px solid #EEEEEE" }}>
            <Div sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="120"
                image={getAssetPath(
                  `${ASSET_IMAGES}/wall/tamara-bellis.jpg`,
                  "240x120"
                )}
                alt="Paella dish"
              />
              {/* <IconButton
                sx={{ float: "right", position: "absolute", top: "5px", right: "5px" }}
              >
                <EditIcon size={18} />
              </IconButton> */}
            </Div>
            <CardContent sx={{ p: 1 }}>
              <Div
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                  mt: -5.5,
                  mb: 2,
                }}
              >
                <Avatar
                  alt="Ravikumar"
                  src={`data:image/png;base64,${base64}`}
                  // src={getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`, "70x70")}
                  sx={{
                    width: 70,
                    height: 70,
                    border: 3,
                    // mr: 2,
                    borderColor: "common.white",
                    boxShadow: (theme) => theme.shadows[3],
                  }}
                />
              </Div>
              <Div sx={{ flex: 1, textAlign: "center", mt: -1, mb: 0.8 }}>
                <Typography variant="h3" color={"common.black"}>
                  Ravikumar
                </Typography>
                <Typography variant={"body1"} color={"text.secondary"} sx={{mt: -0.5}}>
                  Salem,India
                </Typography>
              </Div>
              <Stack
                direction={"row"}
                justifyContent={"space-evenly"}
                divider={<Divider orientation="vertical" flexItem />}
                mb={2}
              >
                <IconButton>
                  <PhoneIcon size={22} color="black"/>
                </IconButton>
                <IconButton>
                  <MailIcon size={22} color="black"/>
                </IconButton>
                <IconButton
                  onClick={() => setOpenUploadEdit(true)}
                  sx={{ p: 1 }}
                >
                  <EditIcon size={18} color="black"/>
                </IconButton>

                <Dialog
                  open={openUploadEdit}
                  onClose={() => setOpenUploadEdit(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <Formik>
                    <Form>

                      <DialogTitle
                        id="alert-dialog-title"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Div></Div>
                        <Avatar
                          alt="User"
                          src={`data:image/png;base64,${base64}`}
                          // src={getAssetPath(
                          //   `${ASSET_AVATARS}/avatar4.jpg`,
                          //   "40x40"
                          // )}
                          sx={{
                            width: 50,
                            height: 50,
                            verticalAlign: "middle",
                            boxShadow: (theme) => theme.shadows[3],
                          }}
                        />
                        <IconButton
                          onClick={() => setOpenUploadEdit(false)}
                          sx={{ float: "right" }}
                        >
                          <CloseIcon size={24} color="black" />
                        </IconButton>
                      </DialogTitle>

                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          <Typography
                            variant="h4"
                            sx={{ fontSize: "16px", verticalAlign: "middle" }}
                          >
                            Upload Picture
                          </Typography>
                          <TextField type="file" accept="image/*"
                            multiple className="input-box" onChange={handleChangeImage} />
                        </DialogContentText>
                      </DialogContent>

                      <DialogActions
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button className="save-button" onClick={handleSaveImage}>Save</Button>
                      </DialogActions>
                    </Form>
                  </Formik>
                </Dialog>
              </Stack>

              <Div>
                <Typography variant="h4" sx={{ fontWeight: 600, mt: 2 }}>
                  Insights
                </Typography>
                <List disablePadding>
                  <ListItem
                  // sx={{ p: (theme) => theme.spacing(1.25, 3) }}
                  >
                    <ListItemIcon>
                      <MailIcon size={20} color="black" />
                    </ListItemIcon>
                    <ListItemText>
                      Last contacted through mail on 16 Jan 2023
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon size={20} color="black" />
                    </ListItemIcon>
                    <ListItemText>
                      Last contacted through phone on 17 Jan 2023
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocationIcon size={20} color="black" />
                    </ListItemIcon>
                    <ListItemText>Last visited on 17 Jan 2023</ListItemText>
                  </ListItem>
                </List>
              </Div>

              <Div>
                <Typography variant="h4" sx={{ fontWeight: 600, mt: 2 }}>
                  Referred Leads
                </Typography>
                <List disablePadding>
                  <ListItem>
                    <ListItemIcon>
                      <Avatar
                        alt="ravikumar"
                        src={getAssetPath(
                          `${ASSET_AVATARS}/avatar4.jpg`,
                          "30x30"
                        )}
                        sx={{
                          width: 30,
                          height: 30,
                          borderColor: "common.white",
                          boxShadow: (theme) => theme.shadows[3],
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText>Prakash</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Avatar
                        alt="ravikumar"
                        src={getAssetPath(
                          `${ASSET_AVATARS}/avatar4.jpg`,
                          "30x30"
                        )}
                        sx={{
                          width: 30,
                          height: 30,
                          borderColor: "common.white",
                          boxShadow: (theme) => theme.shadows[3],
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText>Gokul</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Avatar
                        alt="ravikumar"
                        src={getAssetPath(
                          `${ASSET_AVATARS}/avatar4.jpg`,
                          "30x30"
                        )}
                        sx={{
                          width: 30,
                          height: 30,
                          borderColor: "common.white",
                          boxShadow: (theme) => theme.shadows[3],
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText>Tamil</ListItemText>
                  </ListItem>
                </List>
              </Div>

              <Div>
                  <Typography variant="h4" sx={{ fontWeight: 600, mt: 2 }}>
                    Upcoming Activities
                  </Typography>

                  <Grid
                    alignItems={"center"}
                    container
                    padding={1}
                    rowSpacing={1.5}
                    columnSpacing={0.5}
                  >
                    <Grid item xs={4}>
                      <Typography align="center"
                        sx={{
                          backgroundColor: "#815355",
                          fontSize: "14px",
                          color: "#FFFFFF",
                          p: 0.3,
                          mr: 1,
                        }}
                      >
                        16 Jan 2023
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontSize: "14px", color: "#000000" }}>
                        To send the proposal
                      </Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography align="center"
                        sx={{
                          backgroundColor: "#C69C72",
                          fontSize: "14px",
                          color: "#FFFFFF",
                          p: 0.3,
                          mr: 1,
                        }}
                      >
                        17 Dec 2021
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontSize: "14px", color: "#000000" }}>
                        To Send the Mail
                      </Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography align="center"
                        sx={{
                          backgroundColor: "#E56B6F",
                          fontSize: "14px",
                          color: "#FFFFFF",
                          p: 0.3,
                          mr: 1,
                        }}
                      >
                        18 Dec 2021
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontSize: "14px", color: "#000000" }}>
                        To attend the meeting
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography align="center"
                        sx={{
                          backgroundColor: "#FFA737",
                          fontSize: "14px",
                          color: "#FFFFFF",
                          p: 0.3,
                          mr: 1,
                        }}
                      >
                        20 Dec 2021
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontSize: "14px", color: "#000000" }}>
                        To visit the client
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography align="center"
                        sx={{
                          backgroundColor: "#FFA737",
                          fontSize: "14px",
                          color: "#FFFFFF",
                          p: 0.3,
                          mr: 1,
                        }}
                      >
                        20 Dec 2021
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontSize: "14px", color: "#000000" }}>
                        To visit the client
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography align="center"
                        sx={{
                          backgroundColor: "#FFA737",
                          fontSize: "14px",
                          color: "#FFFFFF",
                          p: 0.3,
                          mr: 1,
                        }}
                      >
                        20 Dec 2021
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontSize: "14px", color: "#000000" }}>
                        To visit the client
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography align="center"
                        sx={{
                          backgroundColor: "#FFA737",
                          fontSize: "14px",
                          color: "#FFFFFF",
                          p: 0.3,
                          mr: 1,
                        }}
                      >
                        20 Dec 2021
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontSize: "14px", color: "#000000" }}>
                        To visit the client
                      </Typography>
                    </Grid>
                  </Grid>
                </Div>
            </CardContent>
          </Card>
        </Grid>

        {/* code for right side card */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 1, boxShadow: "none", border: "1px solid #EEEEEE", minHeight: "800px" }}>
            <Div sx={{ display: "flex", justifyContent: "space-evenly", pt: 1, pb: 1 }}>
             
              <Div onClick={handleShowMail} sx={{ textAlign: "center", cursor: "pointer" }}>
                <IconButton
                  sx={{ backgroundColor: "red", mb: 1 }}
                >
                  <EmailIcon size={20} />
                </IconButton>
                <br />
                <Typography variant="h4" textAlign="center">
                  Mail
                </Typography>
              </Div>
              <Div onClick={handleShowNotes} sx={{ textAlign: "center", cursor: "pointer" }}>
                <IconButton
                  sx={{ backgroundColor: "#ED006D", mb: 1 }}
                >
                  <NoteAltIcon size={20}/>
                </IconButton>
                <br />
                <Typography variant="h4" textAlign="center">
                  Notes
                </Typography>
              </Div>
              <Div sx={{ textAlign: "center", cursor: "pointer" }}>
                <IconButton
                  sx={{ backgroundColor: "#FF8300", mb: 1 }}
                >
                  <ContactsIcon size={20} />
                </IconButton>
                <br />
                <Typography variant="h4" textAlign="center">
                  Contacts
                </Typography>
              </Div>
              <Div onClick={handleShowAppointment} sx={{ textAlign: "center", cursor: "pointer" }}>
                <IconButton
                  sx={{ backgroundColor: "#006194", mb: 1 }}
                >
                  <DriveFileRenameOutlineIcon size={20} />
                </IconButton>
                <br />
                <Typography variant="h4" textAlign="center">
                  Appointments
                </Typography>
              </Div>
            </Div>
            <Divider sx={{ mb: 2, color: "#000000" }} />

            <Div sx={{ display: showNotes === true ? "block" : "none" }}>
              <ContactNotes />
            </Div>

            <Div sx={{ display: showMail === true ? "block" : "none" }}>
              <EmailContent />
            </Div>

            <Div sx={{ display: showAppointment === true ? "block" : "none" }}>
              <Appointment />
            </Div>

          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewContact;
