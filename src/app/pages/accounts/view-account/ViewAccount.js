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
import { getAssetPath } from "app/utils/appHelpers";
import { ASSET_AVATARS, ASSET_IMAGES } from "app/utils/constants/paths";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import AccountDeals from "./AccountDeals";
import AccountMail from "./AccountMail";
import AccountNotes from "./AccountNotes";
import AccountContacts from "./AccountContacts";
import AccountAppointments from "./AccountAppointments";
import AccountSales from "./AccountSales";

const ViewAccount = () => {
  const [base64, setbase64] = useState("");
  const [image, setImage] = useState("");
  const [openUploadEdit, setOpenUploadEdit] = useState(false);
  const [showDeals, setShowDeals] = useState(true);
  const [showMail, setShowMail] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const handleShowDeals = () => {
    setShowDeals(true);
    setShowMail(false);
    setShowNotes(false);
    setShowContacts(false);
    setShowAppointment(false);
    setShowHistory(false);
  };

  const handleShowMail = () => {
    setShowDeals(false);
    setShowMail(true);
    setShowNotes(false);
    setShowContacts(false);
    setShowAppointment(false);
    setShowHistory(false);
  };

  const handleShowNotes = () => {
    setShowDeals(false);
    setShowMail(false);
    setShowNotes(true);
    setShowContacts(false);
    setShowAppointment(false);
    setShowHistory(false);
  };

  const handleShowContacts = () => {
    setShowDeals(false);
    setShowMail(false);
    setShowNotes(false);
    setShowContacts(true);
    setShowAppointment(false);
    setShowHistory(false);
  };

  const handleShowAppointment = () => {
    setShowDeals(false);
    setShowMail(false);
    setShowNotes(false);
    setShowContacts(false);
    setShowAppointment(true);
    setShowHistory(false);
  };

  const handleShowHistory = () => {
    setShowDeals(false);
    setShowMail(false);
    setShowNotes(false);
    setShowContacts(false);
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
  };

  return (
    <>
      {/* <JumboContentLayoutMain> */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 4, boxShadow: "none", border: "1px solid #EEEEEE" }}>
            <Div sx={{ position: "relative" }}>
              <CardMedia
                sx={{ borderRadius: "10px" }}
                component="img"
                height="120"
                image={getAssetPath(
                  `${ASSET_IMAGES}/wall/tamara-bellis.jpg`,
                  "240x120"
                )}
                alt="Paella dish"
              />
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
                  src={`data:image/png;base64,${base64}`}
                  // src={getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`, "70x70")}
                  sx={{
                    backgroundColor: "#F9646D",
                    width: "132px",
                    height: "129px",
                    border: 3,
                    fontSize: "50px",
                    fontWeight: 500,
                    borderColor: "common.white",
                    boxShadow: (theme) => theme.shadows[3],
                  }}
                >
                  GO
                </Avatar>
              </Div>
              <Div sx={{ flex: 1, textAlign: "center", mt: -1, mb: 0.8 }}>
                <Typography variant="h3" color={"common.black"}>
                  Ravikumar
                </Typography>
                <Typography
                  variant={"body1"}
                  color={"text.secondary"}
                  sx={{ mt: -0.5 }}
                >
                  Messi infotech,
                  <br />
                  Chennai, India
                </Typography>
              </Div>
              <Stack
                direction={"row"}
                // justifyContent={"space-evenly"}
                divider={<Divider orientation="vertical" flexItem />}
                mb={2}
              >
                <Grid
                  container
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <IconButton sx={{ paddingRight: "20px" }}>
                    <PhoneIcon size={20} color="black" />
                  </IconButton>

                  <IconButton>
                    <MailIcon size={20} color="black" />
                  </IconButton>

                  <IconButton
                    onClick={() => setOpenUploadEdit(true)}
                    sx={{ p: 1, paddingLeft: "20px" }}
                  >
                    <EditIcon size={18} color="black" />
                  </IconButton>
                </Grid>

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
                          <TextField
                            type="file"
                            accept="image/*"
                            multiple
                            className="input-box"
                            onChange={handleChangeImage}
                          />
                        </DialogContentText>
                      </DialogContent>

                      <DialogActions
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          className="save-button"
                          onClick={handleSaveImage}
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Form>
                  </Formik>
                </Dialog>
              </Stack>
              <Grid container paddingTop={0.5} paddingBottom={2}>
                <Grid item xs={6}>
                  <Grid container direction={"column"} rowSpacing={1.5}>
                    <Grid item>
                      <Typography color={"#565656"} fontSize={"12px"}>
                        Account Owner
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#000000"} fontSize={"13px"}>
                        Hayyim Tanesha
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#565656"} fontSize={"12px"}>
                        Annual Revenue
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#000000"} fontSize={"13px"}>
                        ₹200000
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#565656"} fontSize={"12px"}>
                        Industry Type
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#000000"} fontSize={"13px"}>
                        Finance
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#565656"} fontSize={"12px"}>
                        Pincode
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#000000"} fontSize={"13px"}>
                        600100
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container direction={"column"} rowSpacing={1.5}>
                    <Grid item>
                      <Typography color={"#565656"} fontSize={"12px"}>
                        No. of Employees
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#000000"} fontSize={"13px"}>
                        30
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#565656"} fontSize={"12px"}>
                        Territory
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#000000"} fontSize={"13px"}>
                        South Zone,Chennai
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#565656"} fontSize={"12px"}>
                        Address
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#000000"} fontSize={"13px"}>
                        Main Road,Chennai
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#565656"} fontSize={"12px"}>
                        Lead Score
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={"#000000"} fontSize={"13px"}>
                        80%
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
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
                  Upcoming Activities
                </Typography>

                <Grid
                  alignItems={"center"}
                  container
                  padding={1}
                  rowSpacing={1.5}
                  columnSpacing={2}
                >
                  <Grid item xs={4}>
                    <Typography
                      align="center"
                      sx={{
                        minWidth: "86px",
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
                    <Typography
                      align="center"
                      sx={{
                        minWidth: "86px",

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
                    <Typography
                      align="center"
                      sx={{
                        minWidth: "86px",
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
                    <Typography
                      align="center"
                      sx={{
                        minWidth: "86px",
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
          <Card
            sx={{
              p: 1,
              boxShadow: "none",
              border: "1px solid #EEEEEE",
              minHeight: "800px",
            }}
          >
            <Div
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                pt: 1,
                pb: 1,
              }}
            >
              <Div
                onClick={handleShowDeals}
                sx={{ textAlign: "center", cursor: "pointer" }}
              >
                <IconButton
                  sx={{
                    height: "36px",
                    width: "36px",
                    backgroundColor: "#B7AC44",
                    color: "white",
                    ":hover": { backgroundColor: "#B7AC44" },
                    mb: 1,
                  }}
                >
                  <svg
                    width="20"
                    height="13"
                    viewBox="0 0 20 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.65865 7.82473C6.50761 7.70735 6.32 7.65584 6.13036 7.68066C5.94073 7.70503 5.77213 7.80209 5.65593 7.95371L5.04712 8.74315C5.04669 8.74358 5.04669 8.74416 5.04625 8.7446L5.04611 8.74445L5.04233 8.74924L5.04291 8.74968L4.93555 8.8878L4.53871 9.40216C4.27973 9.7376 4.33907 10.2257 4.67074 10.4896C4.84442 10.6274 5.06075 10.6843 5.27941 10.6495C5.4982 10.6145 5.68609 10.4932 5.8081 10.3081L6.81371 8.78248C7.01988 8.473 6.95169 8.0527 6.65861 7.82475L6.65865 7.82473Z"
                      fill="white"
                    />
                    <path
                      d="M8.72065 10.4679C8.56816 10.3635 8.38405 10.3265 8.20296 10.3649C8.02175 10.4029 7.87245 10.5141 7.77467 10.6711L7.57938 10.9782L7.52773 11.0599C7.33622 11.3646 7.41297 11.7592 7.70909 11.9645C7.85984 12.069 8.04192 12.1071 8.22225 12.071C8.40231 12.035 8.5561 11.9301 8.65548 11.7759L8.90634 11.3859C9.10395 11.078 9.02255 10.6749 8.72062 10.4679L8.72065 10.4679Z"
                      fill="white"
                    />
                    <path
                      d="M7.78464 9.19401C7.65305 9.0701 7.48039 9.0022 7.30164 9.0022C7.27581 9.0022 7.25028 9.00365 7.22445 9.00655C7.019 9.02904 6.83445 9.14003 6.71793 9.31109L6.0241 10.3586C5.804 10.6867 5.87916 11.1172 6.20154 11.3454C6.3652 11.4614 6.56325 11.5035 6.76029 11.4649C6.95703 11.4257 7.12432 11.311 7.23126 11.1412L7.35226 10.9494C7.35313 10.948 7.35357 10.9465 7.35458 10.9451L7.41465 10.8506L7.89621 10.0873C8.07786 9.80132 8.03114 9.42611 7.78464 9.19397L7.78464 9.19401Z"
                      fill="white"
                    />
                    <path
                      d="M4.7785 8.75084L4.87745 8.62244C5.08188 8.32414 5.0324 7.92237 4.7608 7.68574C4.49615 7.45548 4.10805 7.45084 3.83831 7.67573L3.75373 7.74624L3.33791 8.21646C3.07269 8.51636 3.09416 8.96571 3.38695 9.23874C3.53915 9.38078 3.73706 9.45028 3.94495 9.43345C4.15257 9.41706 4.3374 9.31738 4.4654 9.15314L4.7785 8.75084Z"
                      fill="white"
                    />
                    <path
                      d="M15.3058 7.7625C13.0665 5.90666 10.9541 4.63132 10.1329 4.20942C9.93775 4.10931 9.71418 4.08798 9.50247 4.14862L9.268 4.21624C9.09186 4.26702 8.93372 4.37511 8.82273 4.52049L8.4616 4.99332C8.17621 5.36694 7.76896 5.61995 7.31467 5.70613C7.12939 5.74124 6.96631 5.76663 6.82936 5.78128C6.68644 5.79666 6.54774 5.78592 6.41689 5.74907C6.15311 5.67507 5.96887 5.42581 5.96887 5.1432C5.96887 4.93311 6.04751 4.74202 6.19042 4.59764L6.4053 4.37986C6.77034 4.00843 7.07822 3.58753 7.32054 3.12919L7.32199 3.12643C7.0942 3.10902 6.64238 3.06259 6.04795 2.94333C5.85716 2.90503 5.67622 2.82189 5.52505 2.70262L4.51566 1.92407L2.03711 5.89501L2.74791 6.46579C2.95467 6.61654 3.14211 6.79935 3.30101 7.00611L3.69784 7.52191L3.7051 7.51581C4.05346 7.22549 4.55504 7.23086 4.89731 7.52873C5.09724 7.70283 5.20055 7.94614 5.20722 8.19455L5.49073 7.82704C5.64075 7.63132 5.85853 7.50596 6.10344 7.47433C6.34936 7.44371 6.59094 7.509 6.78609 7.66077C7.14736 7.9418 7.24034 8.44801 7.01722 8.8408C7.0767 8.8215 7.13807 8.80684 7.20148 8.80002C7.4683 8.77086 7.73206 8.85937 7.92692 9.04276C8.24335 9.34034 8.30458 9.82046 8.07621 10.1887C8.10407 10.1797 8.13077 10.1679 8.16007 10.1617C8.39744 10.1122 8.63799 10.1598 8.83823 10.2969C9.22009 10.5585 9.32937 11.0591 9.10302 11.4563C9.41235 11.6013 10.6122 12.1567 11.4604 12.4612C11.7608 12.5692 12.0898 12.4315 12.2257 12.1404C12.3668 11.8368 12.24 11.4836 11.9368 11.3355L11.8571 11.296L10.8695 10.8078L10.8701 10.8065L10.0171 10.3834C9.96545 10.3578 9.94455 10.2955 9.97009 10.244C9.99548 10.1923 10.058 10.1714 10.1095 10.1968L11.9511 11.1103L12.027 11.1479C12.0275 11.148 12.0276 11.1483 12.028 11.1484L12.4899 11.3774C12.8349 11.5488 13.2564 11.4082 13.4296 11.0647C13.5998 10.7278 13.4733 10.3198 13.1415 10.136L10.7371 8.80162C10.6867 8.77347 10.6686 8.7105 10.6964 8.66016C10.7247 8.60966 10.7884 8.5924 10.8379 8.61953L11.0201 8.72066C11.0203 8.7208 11.0207 8.7208 11.021 8.7208L13.7928 10.2592C14.0791 10.4159 14.4418 10.3375 14.6375 10.0758C14.7486 9.92708 14.7919 9.73744 14.7563 9.5552C14.7208 9.37282 14.6092 9.21322 14.4502 9.11732L11.7133 7.46491C11.6643 7.43517 11.6485 7.37133 11.6782 7.322C11.7081 7.27296 11.7723 7.25758 11.8212 7.28688L13.5442 8.32703L14.4985 8.89027C14.7924 9.0635 15.1616 9.01113 15.395 8.76172C15.5244 8.62359 15.5887 8.43498 15.5716 8.24402C15.5543 8.05308 15.4591 7.88348 15.3061 7.76232L15.3058 7.7625Z"
                      fill="white"
                    />
                    <path
                      d="M15.6263 1.08971C15.5058 1.16066 15.4645 1.31503 15.5331 1.43661L15.6963 1.72548L18.258 6.07527C18.3329 6.20237 18.4993 6.24024 18.6218 6.15812L19.7698 5.38681C19.881 5.31238 19.9158 5.16482 19.8504 5.04846L17.2562 0.433478C17.1858 0.308266 17.0264 0.265466 16.9026 0.338155L15.6263 1.08971Z"
                      fill="white"
                    />
                    <path
                      d="M3.02721 0.428451L0.150945 5.04606C0.0860894 5.15023 0.114527 5.28734 0.215655 5.35698L1.35401 6.14222C1.46195 6.21665 1.61024 6.18589 1.67973 6.07461L4.56674 1.44958C4.63232 1.34453 4.60286 1.20669 4.50058 1.13735L3.35134 0.359647C3.2434 0.28652 3.09627 0.317716 3.02721 0.428566L3.02721 0.428451Z"
                      fill="white"
                    />
                    <path
                      d="M14.3876 2.46446C14.1286 2.58576 13.8609 2.63175 13.6145 2.59766C13.351 2.55979 12.8441 2.47244 11.8943 2.26656C11.5901 2.2004 11.283 2.16427 10.9811 2.15876C10.3806 2.14875 9.25936 2.16166 8.48485 2.37088C8.43059 2.38539 8.37589 2.4073 8.31742 2.43719L8.01172 2.59446C7.8881 2.65787 7.77899 2.75029 7.69571 2.86085L7.5042 3.22589C7.25247 3.70221 6.93253 4.13938 6.55341 4.52545L6.3381 4.74366C6.23407 4.84885 6.17676 4.98799 6.17676 5.1357C6.17676 5.33274 6.29863 5.49973 6.47289 5.54862C6.57793 5.57822 6.69067 5.58663 6.80688 5.57445C6.9379 5.56037 7.09561 5.536 7.27522 5.5019C7.679 5.4253 8.04129 5.19983 8.29549 4.86713L8.65662 4.39456C8.79446 4.21407 8.99091 4.07972 9.20957 4.0166L9.44403 3.94884C9.54197 3.92055 9.64208 3.90662 9.74147 3.90662C9.90904 3.90662 10.075 3.94609 10.2271 4.02429C11.0521 4.44824 13.1677 5.72488 15.4111 7.58042L15.4115 7.57984C15.4153 7.58274 15.4182 7.58652 15.422 7.58942C15.4684 7.62772 15.5144 7.66472 15.5607 7.7036C15.7325 7.59856 16.2417 7.26558 16.7485 6.71887C16.8473 6.61223 16.9682 6.51415 17.1072 6.42753L17.8724 5.83179L15.5647 1.91211L14.3876 2.46446Z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
                <br />
                <Typography
                  sx={{ fontSize: "13px", color: "#565656" }}
                  textAlign="center"
                >
                  Deals
                </Typography>
              </Div>
              <Div
                onClick={handleShowMail}
                sx={{ textAlign: "center", cursor: "pointer" }}
              >
                <IconButton
                  sx={{
                    height: "36px",
                    width: "36px",
                    backgroundColor: "#E32227",
                    color: "white",
                    ":hover": { backgroundColor: "#E32227" },
                    mb: 1,
                  }}
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 4.5475V10.75C0.5 11.413 0.763392 12.0489 1.23223 12.5178C1.70107 12.9866 2.33696 13.25 3 13.25H13C13.663 13.25 14.2989 12.9866 14.7678 12.5178C15.2366 12.0489 15.5 11.413 15.5 10.75V3.25C15.5 2.58696 15.2366 1.95107 14.7678 1.48223C14.2989 1.01339 13.663 0.75 13 0.75H3C2.33696 0.75 1.70107 1.01339 1.23223 1.48223C0.763392 1.95107 0.5 2.58696 0.5 3.25V4.5475ZM3 2H13C13.3315 2 13.6495 2.1317 13.8839 2.36612C14.1183 2.60054 14.25 2.91848 14.25 3.25V4.175L8 7.54L1.75 4.175V3.25C1.75 2.91848 1.8817 2.60054 2.11612 2.36612C2.35054 2.1317 2.66848 2 3 2ZM1.75 5.595L7.70375 8.8C7.7948 8.84901 7.89659 8.87467 8 8.87467C8.10341 8.87467 8.2052 8.84901 8.29625 8.8L14.25 5.595V10.75C14.25 11.0815 14.1183 11.3995 13.8839 11.6339C13.6495 11.8683 13.3315 12 13 12H3C2.66848 12 2.35054 11.8683 2.11612 11.6339C1.8817 11.3995 1.75 11.0815 1.75 10.75V5.595Z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
                <br />
                <Typography
                  sx={{ fontSize: "13px", color: "#565656" }}
                  textAlign="center"
                >
                  Mail
                </Typography>
              </Div>
              <Div
                onClick={handleShowNotes}
                sx={{ textAlign: "center", cursor: "pointer" }}
              >
                <IconButton
                  sx={{
                    height: "36px",
                    width: "36px",
                    backgroundColor: "#ED006D",
                    color: "white",
                    ":hover": { backgroundColor: "#ED006D" },
                    mb: 1,
                  }}
                >
                  <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.042 14.8335H0.958659C0.748696 14.8335 0.547332 14.9169 0.398866 15.0654C0.2504 15.2138 0.166992 15.4152 0.166992 15.6252C0.166992 15.8351 0.2504 16.0365 0.398866 16.185C0.547332 16.3334 0.748696 16.4168 0.958659 16.4168H12.042C12.252 16.4168 12.4533 16.3334 12.6018 16.185C12.7503 16.0365 12.8337 15.8351 12.8337 15.6252C12.8337 15.4152 12.7503 15.2138 12.6018 15.0654C12.4533 14.9169 12.252 14.8335 12.042 14.8335Z"
                      fill="white"
                    />
                    <path
                      d="M0.95808 13.2501H1.02933L4.33058 12.9493C4.69221 12.9132 5.03044 12.7539 5.2885 12.498L12.4135 5.37301C12.69 5.08086 12.8395 4.69099 12.8291 4.28885C12.8187 3.8867 12.6493 3.50508 12.3581 3.22759L10.1889 1.05842C9.90581 0.7925 9.53483 0.639917 9.14655 0.629699C8.75827 0.619481 8.37978 0.752342 8.08308 1.00301L0.95808 8.12801C0.702186 8.38606 0.542854 8.72429 0.50683 9.08592L0.166413 12.3872C0.155749 12.5031 0.170795 12.62 0.210478 12.7295C0.250162 12.839 0.313507 12.9383 0.395997 13.0205C0.46997 13.0939 0.557699 13.1519 0.654154 13.1913C0.750609 13.2307 0.853891 13.2507 0.95808 13.2501ZM9.0885 2.16676L11.2497 4.32801L9.66641 5.87176L7.54475 3.75009L9.0885 2.16676ZM2.04266 9.22051L6.49975 4.79509L8.63725 6.93259L4.20391 11.3659L1.82891 11.5876L2.04266 9.22051Z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
                <br />
                <Typography
                  sx={{ fontSize: "13px", color: "#565656" }}
                  textAlign="center"
                >
                  Notes
                </Typography>
              </Div>
              <Div
                onClick={handleShowContacts}
                sx={{ textAlign: "center", cursor: "pointer" }}
              >
                <IconButton
                  sx={{
                    height: "36px",
                    width: "36px",
                    paddingLeft: "5px",
                    backgroundColor: "#FF8300",
                    color: "white",
                    ":hover": { backgroundColor: "#FF8300" },
                    mb: 1,
                  }}
                >
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.41748 0.439941V2.1296H2.35028C2.71994 2.1296 3.01911 2.42879 3.01911 2.79844V3.784C3.01911 4.15367 2.71993 4.45284 2.35028 4.45284H1.41748V7.65604H2.35028C2.71994 7.65604 3.01911 7.95522 3.01911 8.32487V9.31044C3.01911 9.6801 2.71993 9.97927 2.35028 9.97927H1.41748V13.1825H2.35028C2.71994 13.1825 3.01911 13.4817 3.01911 13.8513V14.8369C3.01911 15.2065 2.71993 15.5057 2.35028 15.5057H1.41748V17.1777H15.7791V0.457667L1.41748 0.457299V0.439941ZM8.84468 4.76954C9.75991 4.76954 10.4991 5.50874 10.4991 6.42397C10.4991 7.05757 10.1471 7.60317 9.61911 7.88477C9.39028 8.00803 9.12631 8.07838 8.84468 8.07838C8.56305 8.07838 8.29911 8.00803 8.07025 7.88477C7.54222 7.60314 7.19025 7.05757 7.19025 6.42397C7.19025 5.50874 7.92954 4.76954 8.84468 4.76954ZM11.3439 11.8447L9.60145 12.1967C9.10865 12.3023 8.59819 12.3023 8.10539 12.1967L6.36296 11.8447C6.04622 11.7744 5.83492 11.4928 5.87016 11.1759L5.99341 9.89114C6.08144 9.01114 6.66225 8.3072 7.45422 8.02557C7.82388 8.36 8.31665 8.5536 8.86225 8.5536C9.40785 8.5536 9.90062 8.36 10.2703 8.02557C11.0622 8.3072 11.6431 9.01114 11.7311 9.89114L11.8543 11.1759C11.8719 11.4928 11.6607 11.7744 11.3439 11.8447H11.3439Z"
                      fill="white"
                    />
                    <path
                      d="M0.484675 4.03036H2.35024C2.49106 4.03036 2.59664 3.92478 2.59664 3.78396V2.7984C2.59664 2.65758 2.49106 2.552 2.35024 2.552H0.484675C0.343859 2.552 0.238281 2.65758 0.238281 2.7984V3.78396C0.238281 3.92478 0.343862 4.03036 0.484675 4.03036Z"
                      fill="white"
                    />
                    <path
                      d="M2.57906 14.8191V13.8336C2.57906 13.6927 2.47348 13.5872 2.33267 13.5872H0.467097C0.326281 13.5872 0.220703 13.6927 0.220703 13.8336V14.8191C0.220703 14.9599 0.326284 15.0655 0.467097 15.0655H2.33267C2.47348 15.048 2.57906 14.9424 2.57906 14.8191Z"
                      fill="white"
                    />
                    <path
                      d="M0.484675 9.53915H2.35024C2.49106 9.53915 2.59664 9.43357 2.59664 9.29275V8.30718C2.59664 8.16637 2.49106 8.06079 2.35024 8.06079H0.484675C0.343859 8.06079 0.238281 8.16637 0.238281 8.30718V9.29275C0.238281 9.43357 0.343862 9.53915 0.484675 9.53915Z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
                <br />
                <Typography
                  sx={{ fontSize: "13px", color: "#565656" }}
                  textAlign="center"
                >
                  Contacts
                </Typography>
              </Div>
              <Div
                onClick={handleShowAppointment}
                sx={{ textAlign: "center", cursor: "pointer" }}
              >
                <IconButton
                  sx={{
                    height: "36px",
                    width: "36px",
                    backgroundColor: "#006194",
                    color: "white",
                    ":hover": { backgroundColor: "#006194" },
                    mb: 1,
                  }}
                >
                  <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.042 14.8335H0.958659C0.748696 14.8335 0.547332 14.9169 0.398866 15.0654C0.2504 15.2138 0.166992 15.4152 0.166992 15.6252C0.166992 15.8351 0.2504 16.0365 0.398866 16.185C0.547332 16.3334 0.748696 16.4168 0.958659 16.4168H12.042C12.252 16.4168 12.4533 16.3334 12.6018 16.185C12.7503 16.0365 12.8337 15.8351 12.8337 15.6252C12.8337 15.4152 12.7503 15.2138 12.6018 15.0654C12.4533 14.9169 12.252 14.8335 12.042 14.8335Z"
                      fill="white"
                    />
                    <path
                      d="M0.95808 13.2501H1.02933L4.33058 12.9493C4.69221 12.9132 5.03044 12.7539 5.2885 12.498L12.4135 5.37301C12.69 5.08086 12.8395 4.69099 12.8291 4.28885C12.8187 3.8867 12.6493 3.50508 12.3581 3.22759L10.1889 1.05842C9.90581 0.7925 9.53483 0.639917 9.14655 0.629699C8.75827 0.619481 8.37978 0.752342 8.08308 1.00301L0.95808 8.12801C0.702186 8.38606 0.542854 8.72429 0.50683 9.08592L0.166413 12.3872C0.155749 12.5031 0.170795 12.62 0.210478 12.7295C0.250162 12.839 0.313507 12.9383 0.395997 13.0205C0.46997 13.0939 0.557699 13.1519 0.654154 13.1913C0.750609 13.2307 0.853891 13.2507 0.95808 13.2501ZM9.0885 2.16676L11.2497 4.32801L9.66641 5.87176L7.54475 3.75009L9.0885 2.16676ZM2.04266 9.22051L6.49975 4.79509L8.63725 6.93259L4.20391 11.3659L1.82891 11.5876L2.04266 9.22051Z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
                <br />
                <Typography
                  sx={{ fontSize: "13px", color: "#565656" }}
                  textAlign="center"
                >
                  Appointments
                </Typography>
              </Div>
              <Div
                onClick={handleShowHistory}
                sx={{ textAlign: "center", cursor: "pointer" }}
              >
                <IconButton
                  sx={{
                    height: "36px",
                    width: "36px",
                    backgroundColor: "#613659",
                    color: "white",
                    ":hover": { backgroundColor: "#613659" },
                    mb: 1,
                  }}
                >
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7501 19.5H1.9001V0.649991C1.9001 0.417703 1.77619 0.203125 1.5751 0.0870536C1.374 -0.0290179 1.12619 -0.0290179 0.925098 0.0870536C0.724006 0.203125 0.600098 0.417711 0.600098 0.649991V20.15C0.600098 20.3224 0.668582 20.4878 0.790455 20.6096C0.912328 20.7315 1.07773 20.8 1.2501 20.8H20.7501C20.9824 20.8 21.197 20.6761 21.313 20.475C21.4291 20.2739 21.4291 20.0261 21.313 19.825C21.197 19.6239 20.9824 19.5 20.7501 19.5Z"
                      fill="white"
                    />
                    <path
                      d="M20.5943 2.8275C20.4832 2.69546 20.3242 2.6132 20.1523 2.59854C19.9803 2.58389 19.8097 2.63815 19.6778 2.74944L11.4551 9.71744L7.19115 9.09994C7.04867 9.0805 6.90372 9.10879 6.77893 9.18061C6.6543 9.25228 6.55695 9.36342 6.5021 9.49647L3.25211 17.2965C3.16273 17.5112 3.19479 17.7574 3.33611 17.9423C3.47743 18.1271 3.70653 18.2224 3.93738 18.1926C4.16807 18.1625 4.36527 18.0118 4.45463 17.7969L7.50963 10.4586L11.5589 11.0371H11.5591C11.7438 11.0633 11.9308 11.0088 12.0726 10.8876L20.5226 3.73761C20.6517 3.62575 20.7315 3.4676 20.745 3.29728C20.7583 3.12695 20.7041 2.95821 20.5941 2.82761L20.5943 2.8275Z"
                      fill="white"
                    />
                    <path
                      d="M20.1002 18.2001C20.2726 18.2001 20.438 18.1316 20.5598 18.0097C20.6817 17.8879 20.7502 17.7225 20.7502 17.5501V6.50009C20.7502 6.2678 20.6263 6.05322 20.4252 5.93715C20.2241 5.82108 19.9763 5.82108 19.7752 5.93715C19.5741 6.05322 19.4502 6.26781 19.4502 6.50009V17.5501C19.4502 17.7225 19.5187 17.8879 19.6406 18.0097C19.7624 18.1316 19.9278 18.2001 20.1002 18.2001Z"
                      fill="white"
                    />
                    <path
                      d="M13.6001 11.7V17.55C13.6001 17.7823 13.724 17.9969 13.9251 18.113C14.1262 18.229 14.374 18.229 14.5751 18.113C14.7762 17.9969 14.9002 17.7823 14.9002 17.55V11.7C14.9002 11.4678 14.7762 11.2532 14.5751 11.1371C14.374 11.021 14.1262 11.021 13.9251 11.1371C13.724 11.2532 13.6001 11.4678 13.6001 11.7Z"
                      fill="white"
                    />
                    <path
                      d="M7.75 13.0001V17.5501C7.75 17.7824 7.8739 17.997 8.075 18.113C8.2761 18.2291 8.52391 18.2291 8.725 18.113C8.92609 17.997 9.05 17.7824 9.05 17.5501V13.0001C9.05 12.7678 8.9261 12.5532 8.725 12.4372C8.5239 12.3211 8.27609 12.3211 8.075 12.4372C7.87391 12.5532 7.75 12.7678 7.75 13.0001Z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
                <br />
                <Typography
                  sx={{ fontSize: "13px", color: "#565656" }}
                  textAlign="center"
                >
                  Sales
                </Typography>
              </Div>
            </Div>
            <Divider sx={{ mb: 2, color: "#000000" }} />
            <Div sx={{ display: showDeals === true ? "block" : "none" }}>
              <AccountDeals />
            </Div>

            <Div sx={{ display: showMail === true ? "block" : "none" }}>
              <AccountMail />
            </Div>

            <Div sx={{ display: showNotes === true ? "block" : "none" }}>
              <AccountNotes />
            </Div>

            <Div sx={{ display: showContacts === true ? "block" : "none" }}>
              <AccountContacts />
            </Div>

            <Div sx={{ display: showAppointment === true ? "block" : "none" }}>
              <AccountAppointments />
            </Div>

            <Div sx={{ display: showHistory === true ? "block" : "none" }}>
              <AccountSales />
            </Div>
          </Card>
        </Grid>
      </Grid>
      {/* </JumboContentLayoutMain> */}
    </>
  );
};

export default ViewAccount;
