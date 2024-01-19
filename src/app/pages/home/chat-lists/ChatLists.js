import Div from "@jumbo/shared/Div";
import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  TextField,
  Avatar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ChatApp from "app/pages/apps/chat/ChatApp";
import { useNavigate } from "react-router-dom";
import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import SocialMedias from "../SocialMedias";
import { deepOrange, deepPurple, green } from "@mui/material/colors";
import { HiOutlineSearch } from "react-icons/hi";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import { Form, Formik } from "formik";

const ChatLists = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [showResult, setShowResult] = useState(false);
  const [changeName1, setChangeName1] = useState(true);
  const [changeName2, setChangeName2] = useState(false);
  const [changeName3, setChangeName3] = useState(false);
  const [showBox1, setShowBox1] = useState(true);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);

  const handleChange = (e) => {
    const newdata = { ...value };
    newdata[e.target.id] = e.target.value;
    setValue(newdata);
  };

  const handleClickName1 = () => {
    setChangeName1(!changeName1);
    setChangeName2(false);
    setChangeName3(false);
    setShowBox1(true);
    setShowBox2(false);
    setShowBox3(false);
  };

  const handleClickName2 = () => {
    setChangeName2(!changeName2);
    setChangeName1(false);
    setChangeName3(false);
    setShowBox2(true);
    setShowBox1(false);
    setShowBox3(false);
  };

  const handleClickName3 = () => {
    setChangeName3(!changeName3);
    setChangeName1(false);
    setChangeName2(false);
    setShowBox3(true);
    setShowBox1(false);
    setShowBox2(false);
  };

  return (
    <>
      <JumboContentLayoutMain>
        <SocialMedias />

        <Div>
          {/* <ChatApp /> */}

          <Div className="row">
            <Div className="col-5" sx={{ borderRight: "1px solid #000000" }}>
              <Div sx={{ display: "flex" }}>
                <Avatar sx={{ bgcolor: deepPurple[500], width: "30px", height: "30px", fontSize: "14px" }}>ST</Avatar>
                <Typography variant="h4" paddingLeft="5px">
                  Subramanian Thangappan <br />
                  <span>Online</span>
                </Typography>
              </Div>

              <Typography variant="h3" sx={{ mt: 2 }}>
                Chats
              </Typography>
              <Div sx={{ display: "flex", justifyContent: "end" }}>
                <TextField
                  className="col-8 input-box"
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
              <Card
                onClick={handleClickName1}
                sx={{
                  p: 2,
                  mt: 2,
                  display: "flex",
                  alignItems: "cneter",
                  justifyContent: "space-between",
                  backgroundColor:
                    changeName1 === true
                      ? "rgba(212, 241, 244, 0.7)"
                      : "transparent",
                }}
              >
                <Div sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Avatar sx={{ bgcolor: deepPurple[500], width: "30px", height: "30px", fontSize: "14px" }}>ST</Avatar>
                  <Typography variant="h5" paddingLeft="5px">
                    Subramanian Thangappan <br />
                    <span>How are you?</span>
                  </Typography>
                </Div>
                <Div sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Typography variant="h5">10:30 AM</Typography>
                </Div>
              </Card>
              <Card
                onClick={handleClickName2}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "cneter",
                  justifyContent: "space-between",
                  backgroundColor:
                    changeName2 === true
                      ? "rgba(212, 241, 244, 0.7)"
                      : "transparent",
                }}
              >
                <Div sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Avatar sx={{ bgcolor: deepOrange[300] , width: "30px", height: "30px", fontSize: "14px" }}>PK</Avatar>
                  <Typography variant="h5" paddingLeft="5px">
                    Ponkumar <br />
                    <span>How are you?</span>
                  </Typography>
                </Div>
                <Div sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Typography variant="h5">11:30 AM</Typography>
                </Div>
              </Card>
              <Card
                onClick={handleClickName3}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "cneter",
                  justifyContent: "space-between",
                  backgroundColor:
                    changeName3 === true
                      ? "rgba(212, 241, 244, 0.7)"
                      : "transparent",
                }}
              >
                <Div sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Avatar sx={{ bgcolor: green[500], width: "30px", height: "30px", fontSize: "14px" }}>RK</Avatar>
                  <Typography variant="h5" paddingLeft="5px">
                    Ravi Kumar <br />
                    <span>How are you?</span>
                  </Typography>
                </Div>
                <Div sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Typography variant="h5">02:30 PM</Typography>
                </Div>
              </Card>
            </Div>
            <Div className="col-7">
              <Formik>
                <Form>
                  <Card
                    sx={{ p: 2, display: showBox1 === true ? "block" : "none" }}
                  >
                    <Div
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Div
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                      >
                        <Avatar sx={{ bgcolor: deepPurple[500], width: "30px", height: "30px", fontSize: "14px" }}>ST</Avatar>
                        <Typography variant="h4" paddingLeft="5px">
                          Subramanian Thangappan <br />
                          <span>Online</span>
                        </Typography>
                      </Div>
                      <Div sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton>
                          <VideocamIcon />
                        </IconButton>
                        <IconButton>
                          <CallIcon />
                        </IconButton>
                      </Div>
                    </Div>
                    <Div sx={{ mt: 2, minHeight: "300px" }}>
                      <Typography variant="h4" sx={{ textAlign: "left" }}>
                        How Are You?
                      </Typography>
                      <Typography variant="h4" sx={{ textAlign: "right" }}>
                        I am fine.
                      </Typography>
                      <Typography variant="h4" sx={{ textAlign: "left" }}>
                        ....
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          textAlign: "right",
                          display: showResult === true ? "block" : "none",
                        }}
                      >
                        {value}
                      </Typography>
                    </Div>
                    <Div
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        className="col-12"
                        id="input-with-icon-textfield"
                        placeholder="Type your message here..."
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AttachFileIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Button className="save-button">Send</Button>
                            </InputAdornment>
                          ),
                        }}
                        variant="outlined"
                      />
                    </Div>
                  </Card>

                  <Card
                    sx={{ p: 2, display: showBox2 === true ? "block" : "none" }}
                  >
                    <Div
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Div
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                      >
                        <Avatar sx={{ bgcolor: deepOrange[300], width: "30px", height: "30px", fontSize: "14px" }}>PK</Avatar>
                        <Typography variant="h4" paddingLeft="5px">
                          Ponkumar <br />
                          <span>Online</span>
                        </Typography>
                      </Div>
                      <Div sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton>
                          <VideocamIcon />
                        </IconButton>
                        <IconButton>
                          <CallIcon />
                        </IconButton>
                      </Div>
                    </Div>
                    <Div sx={{ mt: 2, minHeight: "300px" }}>
                      <Typography variant="h4" sx={{ textAlign: "left" }}>
                        How Are You?
                      </Typography>
                      <Typography variant="h4" sx={{ textAlign: "right" }}>
                        I am fine.
                      </Typography>
                      <Typography variant="h4" sx={{ textAlign: "left" }}>
                        ....
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          textAlign: "right",
                          display: showResult === true ? "block" : "none",
                        }}
                      >
                        {value}
                      </Typography>
                    </Div>
                    <Div
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        className="col-12"
                        id="input-with-icon-textfield"
                        placeholder="Type your message here..."
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AttachFileIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Button className="save-button">Send</Button>
                            </InputAdornment>
                          ),
                        }}
                        variant="outlined"
                      />
                    </Div>
                  </Card>

                  <Card
                    sx={{ p: 2, display: showBox3 === true ? "block" : "none" }}
                  >
                    <Div
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Div
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                      >
                        <Avatar sx={{ bgcolor: green[500], width: "30px", height: "30px", fontSize: "14px" }}>RK</Avatar>
                        <Typography variant="h4" paddingLeft="5px">
                          Ravi Kumar <br />
                          <span>Online</span>
                        </Typography>
                      </Div>
                      <Div sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton>
                          <VideocamIcon />
                        </IconButton>
                        <IconButton>
                          <CallIcon />
                        </IconButton>
                      </Div>
                    </Div>
                    <Div sx={{ mt: 2, minHeight: "300px" }}>
                      <Typography variant="h4" sx={{ textAlign: "left" }}>
                        How Are You?
                      </Typography>
                      <Typography variant="h4" sx={{ textAlign: "right" }}>
                        I am fine.
                      </Typography>
                      <Typography variant="h4" sx={{ textAlign: "left" }}>
                        ....
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          textAlign: "right",
                          // display: showResult === true ? "block" : "none",
                        }}
                      >
                        {value}
                      </Typography>
                    </Div>
                    <Div
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        className="col-12"
                        id="input-with-icon-textfield"
                        value={value}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" component="label">
                              <TextField type="file" hidden />
                              <AttachFileIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Button
                                className="save-button"
                                onClick={() => setShowResult(true)}
                              >
                                Send
                              </Button>
                            </InputAdornment>
                          ),
                        }}
                        variant="outlined"
                      />
                    </Div>
                  </Card>
                </Form>
              </Formik>
            </Div>
          </Div>
        </Div>
      </JumboContentLayoutMain>
    </>
  );
};

export default ChatLists;
