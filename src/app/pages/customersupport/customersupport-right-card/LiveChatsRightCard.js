import React from "react";
import Div from "@jumbo/shared/Div";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  TextField,
  InputAdornment,
  Card,
  Grid,
  Typography,
  Button,
  borderRadius,
} from "@mui/material";
import { HiOutlineSearch } from "react-icons/hi";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import CollectionsIcon from "@mui/icons-material/Collections";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

const LiveChatsRightCard = () => {
  return (
    <>
      <Card sx={{ border: 1, py: 2, px: 1, borderRadius: "10px" }}>
        <Grid container>
          <Grid item xs={4}>
            <Card className="border-card" sx={{ minWidth: 290 }}>
              <Card sx={{ border: 1, p: 1, borderRadius: "30px" }}>
                <TextField
                  className="col-10 input-box"
                  variant="standard"
                  id="outlined-search"
                  type="search"
                  placeholder="Search Chat"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HiOutlineSearch size={20} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderRadius: "30px", mr: 1 },
                    mr: 1,
                    ml: 2,
                  }}
                />
              </Card>
              <Typography align="right" paddingRight={2} padding={1}>
                Last Chatted
              </Typography>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c1.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c2.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c3.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c4.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c5.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c6.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c7.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c1.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c2.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c3.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={1}
                sx={{ "&:hover": { bgcolor: "#D4F1F4" }, borderRadius: "5%" }}
              >
                <Grid item xs={1}>
                  <img src={"/images/users/c4.png"} alt="User" width={30} />
                </Grid>
                <Grid item xs={8} sx={{ pl: 3, pt: "10px" }}>
                  <Typography>Proin ac augue lacus.</Typography>
                </Grid>
                <Grid item xs={2} sx={{ pt: "10px" }}>
                  <Typography>10 min</Typography>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon
                    sx={{ width: "50px", height: "30px", pt: "10px", pr: 1 }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2} sx={{ ml: 1 }}>
              <Grid item>
                <Card className="" sx={{ p: 1 }}>
                  <Div
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#050A30",
                        width: "30px",
                        height: "30px",
                        fontSize: "14px",
                      }}
                    >
                      GS
                    </Avatar>
                    <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                      Gokulraj Sugumar
                      <Typography sx={{ fontSize: "10px" }}>
                        <span sx={{ color: "#1DB700", fontSize: "10px" }}>
                          🟢{" "}
                        </span>
                        Online
                      </Typography>
                    </Typography>
                  </Div>
                </Card>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  className="col-12 input-box"
                  id="outlined-search"
                  type="search"
                  placeholder="Search Message"
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HiOutlineSearch size={20} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderRadius: "30px", mr: 1 },
                    minWidth: 130,
                    mt: { xs: 0.5, md: 0 },
                    mr: 1,
                  }}
                />
              </Grid>
              <Grid item>
                <VideocamIcon sx={{ color: "#007BFF" }} />
              </Grid>
              <Grid item>
                <CallIcon sx={{ color: "#007BFF" }} />
              </Grid>
            </Grid>
            <Grid container sx={{ padding: 2 }}>
              <Grid
                item
                xs={7}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#050A30",
                    width: "20px",
                    height: "20px",
                    fontSize: "10px",
                  }}
                >
                  GS
                </Avatar>
                <Grid direction="column">
                  <Typography
                    xs={6}
                    variant="h5"
                    sx={{
                      padding: 1,
                      ml: 1,
                      borderRadius: "10% 10% 10% 0% / 40% 40% 40% 0%",
                      bgcolor: "#E6E6FA",
                    }}
                  >
                    Pellentesque nibh ex, facilisis id ligula a, mattis laoreet
                    nibh. In sodales porttitor justo id hendrerit.
                  </Typography>

                  <Grid align="right">
                    <Typography variant="p">2.40PM</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                paddingLeft={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Grid direction="column">
                  <Typography
                    al
                    xs={6}
                    variant="h5"
                    sx={{
                      padding: 1,
                      ml: 1,
                      borderRadius: "10% 10% 10% 0% / 40% 40% 40% 0%",
                      bgcolor: "#E6E6FA",
                    }}
                  >Pellentesque nibh ex, facilisis id ligula a, mattis laoreet
                    nibh. In sodales porttitor justo id hendrerit.
                  </Typography>

                  <Grid align="right">
                    <Typography variant="p">2.41PM</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container sx={{padding:2}}>
              <Grid item xs={5}>

              </Grid>
              <Grid item
                xs={6}
                paddingLeft={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Grid direction="column">
                  <Typography
                    al
                    xs={6}
                    variant="h5"
                    sx={{
                      padding: 1,
                      ml: 1,
                      borderRadius: "10% 10% 10% 0% / 40% 40% 40% 0%",
                      bgcolor: "#9A9AEB",
                    }}
                  >Pellentesque nibh ex, facilisis id ligula a, mattis laoreet
                    nibh. In sodales porttitor justo id hendrerit.
                  </Typography>

                  <Grid align="right">
                    <Typography variant="p">2.41PM</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={0.5}>

              </Grid>
              <Grid item xs={0.5} sx={{pt:3}}>
              <Avatar
                  sx={{
                    bgcolor: "#FB7575",
                    width: "20px",
                    height: "20px",
                    fontSize: "10px",
                  }}
                >
                  GS
                </Avatar>
              </Grid>
            </Grid>
            <Grid container>
            <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  pl:3,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#050A30",
                    width: "20px",
                    height: "20px",
                    fontSize: "10px",
                   
                  }}
                >
                  GS
                </Avatar>
                <Grid direction="column">
                  <Typography
                    xs={6}
                    variant="h5"
                    sx={{
                      padding: 1,
                      ml: 1,
                      borderRadius: "10% 10% 10% 0% / 40% 40% 40% 0%",
                      bgcolor: "#E6E6FA",
                    }}
                  >
                    Pellentesque nibh ex, facilisis id ligula a, mattis laoreet
                    nibh. In sodales porttitor justo id hendrerit.
                  </Typography>

                  <Grid align="right">
                    <Typography variant="p">2.40PM</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>

              </Grid>
            </Grid>

            <TextField
              className="col-12 input-box"
              id="outlined-search"
              type="search"
              placeholder="Type your message here"
              sx={{
                "& fieldset": {
                  borderRadius: "10px",
                  mr: 3,
                  borderColor: "#9A9AEB",
                },
                minWidth: 130,
                mt: { xs: 0.5, md: 0 },
                ml: 4,
              }}
            />
            <Grid container paddingLeft={4} paddingTop={2} spacing={1}>
              <Grid item>
                <CollectionsIcon />
              </Grid>
              <Grid item>
                <FolderOpenIcon />
              </Grid>
              <Grid item align="right" xs={10}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    bgcolor: "#4D61FC",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  <SendIcon fontSize="15px" sx={{ mr: 0.5 }} />
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default LiveChatsRightCard;
