import Div from "@jumbo/shared/Div";
import { Call, PersonAdd } from "@mui/icons-material";
import Settings from "@mui/icons-material/Settings";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Avatar,
  Card,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import CalendarWrapper from "app/pages/calendars/CalendarWrapper";
import { calendarData } from "app/pages/calendars/data";
import moment from "moment";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();
const localizer = momentLocalizer(moment);

const CallCenterCalendarList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CalendarWrapper>
        <Div
          className="row"
          sx={{
            pl: 0,
            pr: 0,
            mb: 1,
          }}
        >
          <Div className="col-8 pt-1" sx={{ display: "flex" }}>
            <Avatar
              sx={{
                width: 34,
                height: 34,
                bgcolor: deepPurple[500],
              }}
            >
              R
            </Avatar>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, pt: 0.3, pl: 1 }}
            >
              Ravi Kumar <br />
              <span style={{ fontWeight: 500 }}>online</span>
            </Typography>
          </Div>
          <Div
            className="col-4"
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <IconButton>
              <Call />
            </IconButton>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Settings />
            </IconButton>
          </Div>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar
                sx={{
                  width: 34,
                  height: 34,
                  bgcolor: deepPurple[500],
                }}
              >
                R
              </Avatar>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, pt: 1 }}
              >
                Ravi Kumar <br />
                <span style={{ fontWeight: 500 }}>online</span>
              </Typography>
            </MenuItem>

            <Divider />
            <MenuItem onClick={handleClose}>Notes</MenuItem>
            <MenuItem onClick={handleClose}>Action & Schedules</MenuItem>
          </Menu>
        </Div>
        <Calendar
          localizer={localizer}
          events={events}
          step={60}
          defaultDate={new Date(currentYear, 3, 1)}
          style={{ height: 400 }}
        />

        <Grid container className="mt-2" columnSpacing={1}>
          <Grid item xs={6}>
            <Card className="border-card">
              <Typography variant="h4" fontWeight={600}>
                Upcoming Activities
              </Typography>
              <Timeline sx={{ m: 0, p: (theme) => theme.spacing(0) }}>
                <TimelineItem
                  sx={{
                    p: 0,
                    "&::before": {
                      display: "none",
                    },
                  }}
                >
                  <TimelineSeparator>
                    <Avatar
                      alt="date"
                      sx={{
                        width: 40,
                        height: 40,
                        textAlign: "center",
                        fontSize: "12px",
                        p: 0.5,
                        bgcolor: deepPurple[500],
                        borderColor: "common.white",
                        boxShadow: (theme) => theme.shadows[3],
                      }}
                    >
                      Dec 8
                    </Avatar>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      p: (theme) => theme.spacing(0.5, 0),
                      ml: 1.5,
                    }}
                  >
                    <Typography variant="h5">To send the proposal</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              <Timeline sx={{ m: 0, p: (theme) => theme.spacing(0) }}>
                <TimelineItem
                  sx={{
                    p: 0,
                    "&::before": {
                      display: "none",
                    },
                  }}
                >
                  <TimelineSeparator>
                    <Avatar
                      alt="date"
                      sx={{
                        width: 40,
                        height: 40,
                        textAlign: "center",
                        fontSize: "12px",
                        p: 0.5,
                        bgcolor: deepOrange[500],
                        borderColor: "common.white",
                        boxShadow: (theme) => theme.shadows[3],
                      }}
                    >
                      Dec 10
                    </Avatar>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      p: (theme) => theme.spacing(0.5, 0),
                      ml: 1.5,
                    }}
                  >
                    <Typography variant="h5">To Send the mail</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="border-card">
              <Typography variant="h4" fontWeight={600}>
                Closed Activities
              </Typography>
              <Timeline sx={{ m: 0, p: (theme) => theme.spacing(0) }}>
                <TimelineItem
                  sx={{
                    p: 0,
                    "&::before": {
                      display: "none",
                    },
                  }}
                >
                  <TimelineSeparator>
                    <Avatar
                      alt="date"
                      sx={{
                        width: 40,
                        height: 40,
                        textAlign: "center",
                        fontSize: "12px",
                        p: 0.5,
                        bgcolor: deepPurple[500],
                        borderColor: "common.white",
                        boxShadow: (theme) => theme.shadows[3],
                      }}
                    >
                      Dec 8
                    </Avatar>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      p: (theme) => theme.spacing(0.5, 0),
                      ml: 1.5,
                    }}
                  >
                    <Typography variant="h5">Send the proposal</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              <Timeline sx={{ m: 0, p: (theme) => theme.spacing(0) }}>
                <TimelineItem
                  sx={{
                    p: 0,
                    "&::before": {
                      display: "none",
                    },
                  }}
                >
                  <TimelineSeparator>
                    <Avatar
                      alt="date"
                      sx={{
                        width: 40,
                        height: 40,
                        textAlign: "center",
                        fontSize: "12px",
                        p: 0.5,
                        bgcolor: deepOrange[500],
                        borderColor: "common.white",
                        boxShadow: (theme) => theme.shadows[3],
                      }}
                    >
                      Dec 10
                    </Avatar>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      p: (theme) => theme.spacing(0.5, 0),
                      ml: 1.5,
                    }}
                  >
                    <Typography variant="h5">Send the mail</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Card>
          </Grid>
        </Grid>
      </CalendarWrapper>
    </>
  );
};

export default CallCenterCalendarList;
