import Div from "@jumbo/shared/Div";
import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { Stack } from "@mui/material";
import { Twitter } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChatApp from "app/pages/apps/chat/ChatApp";
import { useNavigate } from "react-router-dom";
import CalenderList from "./calender-lists/CalenderList";



const SocialMedias = () => {
    const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [navigateCalendarLists, setNavigateCalendarLists] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleClickEmail = () => {
    navigate("/app/mails");
  };

  const handleClickChat = () => {
    navigate("/app/chats");
  };

  const handleClickCalender = () =>{
    navigate("/app/calender");
  }

  return (
    <div>
      <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          className="grid"
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <Div>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <Div
                onClick={() => setOpen(true)}
                sx={{
                  bgcolor: "#385196",
                  color: "common.white",
                  padding: "5px",
                  borderRadius: "4px",
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "#385196",
                  },
                }}
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="small" />
              </Div>
              <Div
                onClick={() => setOpen(true)}
                sx={{
                  bgcolor: "#00a8ff",
                  color: "common.white",
                  padding: "5px",
                  borderRadius: "4px",
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "#00a8ff",
                  },
                }}
                aria-label="Twitter"
              >
                <Twitter fontSize="small" />
              </Div>
              <Div
                onClick={() => setOpen(true)}
                sx={{
                  bgcolor: "#23272b",
                  color: "common.white",
                  padding: "5px",
                  borderRadius: "4px",
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "#23272b",
                  },
                }}
                aria-label="Twitter"
              >
                <LinkedInIcon fontSize="small" />
              </Div>
              <Div
                onClick={handleClickEmail}
                sx={{
                  bgcolor: "red",
                  color: "common.white",
                  padding: "5px",
                  borderRadius: "4px",
                  cursor: "pointer",
                //   "&:hover": {
                //     backgroundColor: "#23272b",
                //   },
                }}
                aria-label="Email"
              >
                <EmailIcon fontSize="small" />
              </Div>
              <Div
                onClick={handleClickChat}
                sx={{
                  bgcolor: "green",
                  color: "common.white",
                  padding: "5px",
                  borderRadius: "4px",
                  cursor: "pointer",

                //   "&:hover": {
                //     backgroundColor: "#00a8ff",
                //   },
                }}
                aria-label="Chat"
              >
                <MessageIcon fontSize="small" />
              </Div>
              <Div
                onClick={handleClickCalender}
                sx={{
                  bgcolor: "#00BFFF",
                  color: "common.white",
                  padding: "5px",
                  borderRadius: "4px",
                  cursor: "pointer",

                //   "&:hover": {
                //     backgroundColor: "#23272b",
                //   },
                }}
                aria-label="Calendar"
              >
                <CalendarMonthIcon fontSize="small" />
              </Div>
            </Stack>
            {/* code for social media open alert popup */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Typography variant="h4" fontWeight={600}>
                    You are going to external website. The CRMFarm website is
                    logout.
                  </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button className="save-button" onClick={handleClose}>
                  Yes
                </Button>
                <Button
                  className="cancel-button"
                  onClick={handleClose}
                  autoFocus
                >
                  No
                </Button>
              </DialogActions>
            </Dialog>
          </Div>
        </Grid>

        {/* <Div>
          <CalenderList/>
        </Div> */}
    </div>
  )
}

export default SocialMedias;
