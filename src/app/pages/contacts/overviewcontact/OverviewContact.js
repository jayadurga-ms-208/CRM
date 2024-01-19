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
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import EmailIcon from '@mui/icons-material/Email';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import HistoryIcon from '@mui/icons-material/History';
import { getAssetPath } from "app/utils/appHelpers";
import { ASSET_AVATARS, ASSET_IMAGES } from "app/utils/constants/paths";
import React, { useState } from "react";
import EmailContent from "app/pages/home/email-lists/EmailContent";
import OpenActivity from "./OpenActivity";
import ClosedActivity from "./ClosedActivity";
import Appointment from "./Appointment";
import ContactsHistory from "./ContactsHistory";
import ConatctNotes from "./ContactNotes";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";


// function stringToColor() {
//   let hash = 0;
//   let i;

//   /* eslint-disable no-bitwise */
//   for (i = 0; i < string.length; i += 1) {
//     hash = string.charCodeAt(i) + ((hash << 5) - hash);
//   }

//   let color = '#';

//   for (i = 0; i < 3; i += 1) {
//     const value = (hash >> (i * 8)) & 0xff;
//     color += `00${value.toString(16)}`.slice(-2);
//   }
//   /* eslint-enable no-bitwise */

//   return color;
// }

// function stringAvatar() {
//   return {
//     sx: {
//       bgcolor: stringToColor(name),
//     },
//     children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
//   };
// }



const OverviewContact = () => {

  const navigate = useNavigate();
  const [base64, setbase64] = useState("");
  const [image, setImage] = useState("");
  const [openUploadEdit, setOpenUploadEdit] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [showMail, setShowMail] = useState(false);
  const [showOpenActivity, setShowOpenActivity] = useState(false);
  const [showClosedActivity, setShowClosedActivity] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [showHistory, setShowHistory] = useState(false);



  const handleShowNotes = () => {
    setShowNotes(true);
    setShowMail(false);
    setShowOpenActivity(false);
    setShowClosedActivity(false);
    setShowAppointment(false);
    setShowHistory(false);
  };

  const handleShowMail = () => {
    setShowNotes(false);
    setShowMail(true);
    setShowOpenActivity(false);
    setShowClosedActivity(false);
    setShowAppointment(false);
    setShowHistory(false);
  };

  const handleShowOpenActivity = () => {
    setShowNotes(false);
    setShowMail(false);
    setShowOpenActivity(true);
    setShowClosedActivity(false);
    setShowAppointment(false);
    setShowHistory(false);
  };

  const handleShowClosedActivity = () => {
    setShowNotes(false);
    setShowMail(false);
    setShowOpenActivity(false);
    setShowClosedActivity(true);
    setShowAppointment(false);
    setShowHistory(false);
  };

  const handleShowAppointment = () => {
    setShowNotes(false);
    setShowMail(false);
    setShowOpenActivity(false);
    setShowClosedActivity(false);
    setShowAppointment(true);
    setShowHistory(false);
  };

  const handleShowHistory = () => {
    setShowNotes(false);
    setShowMail(false);
    setShowOpenActivity(false);
    setShowClosedActivity(false);
    setShowAppointment(false);
    setShowHistory(true);
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
      <Typography variant="h4" onClick={() => navigate("/app/contacts")} sx={{ cursor: "pointer", mb: 1 }}><ArrowBackIcon sx={{ mr: 2 }} />Back</Typography>
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
              <IconButton
                sx={{ float: "right", position: "absolute", top: "5px", right: "5px" }}
              >
                <EditIcon size={18} />
              </IconButton>
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
                <List disablePadding>
                  <ListItem>
                    <ListItemText
                      sx={{
                        backgroundColor: "#F1801C",
                        fontSize: "14px",
                        color: "#FFFFFF",
                        p: 0.3,
                        mr: 1,
                      }}
                    >
                      16 Jan 2023
                    </ListItemText>
                    <ListItemText sx={{ fontSize: "14px", color: "#000000" }}>
                      To send the proposal
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      sx={{
                        backgroundColor: "#F1801C",
                        fontSize: "14px",
                        color: "#FFFFFF",
                        p: 0.3,
                        mr: 1,
                      }}
                    >
                      17 Jan 2023
                    </ListItemText>
                    <ListItemText sx={{ fontSize: "14px", color: "#000000" }}>
                      To send the mail
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      sx={{
                        backgroundColor: "#F1801C",
                        fontSize: "14px",
                        color: "#FFFFFF",
                        p: 0.3,
                        mr: 1,
                      }}
                    >
                      18 Jan 2023
                    </ListItemText>
                    <ListItemText sx={{ fontSize: "14px", color: "#000000" }}>
                      To attend the meeting
                    </ListItemText>
                  </ListItem>
                </List>
              </Div>
            </CardContent>
          </Card>
        </Grid>

        {/* code for right side card */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 1, boxShadow: "none", border: "1px solid #EEEEEE", minHeight: "800px" }}>
            <Div sx={{ display: "flex", justifyContent: "space-evenly", pt: 1, pb: 1 }}>
              <Div onClick={handleShowNotes} sx={{ textAlign: "center", cursor: "pointer" }}>
                <IconButton
                  sx={{ backgroundColor: "green", mb: 1 }}
                >
                  <NoteAltIcon size={20}/>
                </IconButton>
                <br />
                <Typography variant="h4" textAlign="center">
                  Notes
                </Typography>
              </Div>
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
              <Div onClick={handleShowOpenActivity} sx={{ textAlign: "center", cursor: "pointer" }}>
                <IconButton
                  sx={{ backgroundColor: "grey", mb: 1 }}
                >
                  <WatchLaterIcon size={20} />
                </IconButton>
                <br />
                <Typography variant="h4" textAlign="center">
                  Open <br />
                  Activities
                </Typography>
              </Div>
              <Div onClick={handleShowClosedActivity} sx={{ textAlign: "center", cursor: "pointer" }}>
                <IconButton
                  sx={{ backgroundColor: "violet", mb: 1 }}
                >
                  <BrowseGalleryIcon size={20} />
                </IconButton>
                <br />
                <Typography variant="h4" textAlign="center">
                  Closed <br />
                  Activities
                </Typography>
              </Div>
              <Div onClick={handleShowAppointment} sx={{ textAlign: "center", cursor: "pointer" }}>
                <IconButton
                  sx={{ backgroundColor: "blue", mb: 1 }}
                >
                  <InsertInvitationIcon size={20} />
                </IconButton>
                <br />
                <Typography variant="h4" textAlign="center">
                  Appointments
                </Typography>
              </Div>
              <Div onClick={handleShowHistory} sx={{ textAlign: "center", cursor: "pointer" }}>
                <IconButton
                  sx={{ backgroundColor: "orange", mb: 1 }}
                >
                  <HistoryIcon size={20} />
                </IconButton>
                <br />
                <Typography variant="h4" textAlign="center">
                  History
                </Typography>
              </Div>
            </Div>
            <Divider sx={{ mb: 2, color: "#000000" }} />

            <Div sx={{ display: showNotes === true ? "block" : "none" }}>
              <ConatctNotes />
            </Div>

            <Div sx={{ display: showMail === true ? "block" : "none" }}>
              <EmailContent />
            </Div>

            <Div sx={{ display: showOpenActivity === true ? "block" : "none" }}>
              <OpenActivity />
            </Div>

            <Div
              sx={{ display: showClosedActivity === true ? "block" : "none" }}
            >
              <ClosedActivity />
            </Div>

            <Div sx={{ display: showAppointment === true ? "block" : "none" }}>
              <Appointment />
            </Div>

            <Div sx={{ display: showHistory === true ? "block" : "none" }}>
              <ContactsHistory />
            </Div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default OverviewContact;
