import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import SocialMedias from "../SocialMedias";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarWrapper from "app/pages/calendars/CalendarWrapper";
import "moment/locale/es";
import "moment/locale/fr";
import "moment/locale/ar";
import "moment/locale/en-gb";
import "moment/locale/en-in";
import { calendarData } from "app/pages/calendars/data";
import Div from "@jumbo/shared/Div";
import {
  Autocomplete,
  Button,
  Card,
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
  TextField,
  Typography,
} from "@mui/material";

const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const manufacturer = [{ name: "" }, { name: "" }];

const CalenderList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <JumboContentLayoutMain>
        <SocialMedias />

        <Div className="row">
          <Div className="col-3">
            <TextField type="date" className="input-box col-12" />
            <Card sx={{ p: 2, mt: 5 }}>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4">Calendar</Typography>
                <IconButton> + </IconButton>
              </Div>
              <Div sx={{ pl: 2 }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Project Activity"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Appointments"
                  />
                  <FormControlLabel control={<Checkbox />} label="Meetings" />
                </FormGroup>
              </Div>
            </Card>
          </Div>
          <Div className="col-9">
            <JumboDemoCard wrapperSx={{ pt: 0, bgcolor: "background.paper" }}>
              <CalendarWrapper>
                <Div sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    className="save-button"
                    onClick={handleClickOpen}
                    sx={{ float: "right", mb: 1 }}
                  >
                    Add Task
                  </Button>

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title" sx={{fontSize: "18px"}}>Add Task</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <FormControl className="col-sm-12">
                          <Autocomplete
                            disablePortal
                            className="search-select"
                            getOptionLabel={(option) => option.name}
                            options={manufacturer}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Select task type"
                              />
                            )}
                          />
                        </FormControl>
                        <TextField
                          className="col-sm-12 input-box mt-1"
                          id="outlined-basic"
                          placeholder="Enter task name"
                          variant="outlined"
                        />
                        <TextField
                          className="col-sm-12 input-box mt-1"
                          id="outlined-basic"
                          placeholder="Enter task description"
                          variant="outlined"
                        />
                        <TextField
                          type="date"
                          className="col-sm-12 input-box mt-1"
                          id="outlined-basic"
                          placeholder="Select date"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button className="save-button">Save</Button>
                      <Button className="cancel-button" onClick={handleClose} autoFocus>
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Div>
                <Calendar
                  localizer={localizer}
                  events={events}
                  step={60}
                  defaultDate={new Date(currentYear, 3, 1)}
                  style={{ height: 600 }}
                />
              </CalendarWrapper>
            </JumboDemoCard>
          </Div>
        </Div>
      </JumboContentLayoutMain>
    </>
  );
};

export default CalenderList;
