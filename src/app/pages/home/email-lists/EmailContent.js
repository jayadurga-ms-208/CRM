import Div from "@jumbo/shared/Div";
import React, { useState } from "react";
import {
  Button, Dialog, DialogActions, DialogContent,
  Typography,
  Avatar,
  Box,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  IconButton,
  DialogTitle,
  DialogContentText,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import { HiOutlineSearch } from "react-icons/hi";
import PropTypes from "prop-types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { TabContext, Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from "@mui/lab";
import { useMutation } from "react-query";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import { mailServices } from "app/services/mail-services";
import DownloadIcon from '@mui/icons-material/Download';
import Draggable from "react-draggable";
import { ModeEdit } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}




const EmailContent = ({ mailItem, onSave }) => {
  const [value, setValue] = React.useState(0);
  const [height, setHeight] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const Swal = useSwalWrapper();
  const [to, setTo] = React.useState();
  const [cc, setCc] = React.useState();
  const [subject, setSubject] = React.useState();
  const [message, setMessage] = React.useState(mailItem ? mailItem?.message : "");
  const [attachFile, setAttachFile] = React.useState();
  const [anchorElAction, setAnchorElAction] = useState(null);

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };

  const handleCloseAction = () => {
    setAnchorElAction(null);
  };


  const addMailMutation = useMutation(mailServices.addMail, {
    onSuccess: () => {
      onSave();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mail has been sent successfully.',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });

  const onSendMessage = () => {
    addMailMutation.mutate({ to, subject, message });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <>
      <Typography variant="h3" fontWeight={600}>
        Email
      </Typography>
      <TabContext value={value}>
        <Div sx={{ display: "flex", justifyContent: "end" }}>
          <TextField
            className="col-6 input-box"
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
            sx={{ minWidth: 100, mt: { xs: 0.5, md: 0 }, mr: 2 }}
          />
          <Button
            className="save-button"
            onClick={() => setShowDialog(true)}
          >
            Compose Mail
          </Button>
          <Dialog
            open={showDialog}
            onClose={() => setShowDialog(false)}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >

            <DialogContent>
              <Typography variant='h3' fontWeight={600} marginBottom="10px" sx={{ cursor: 'move' }} id="draggable-dialog-title">Compose Mail</Typography>
              <DialogContentText>
                <TextField
                  className='input-box col-12 mb-1'
                  size={"small"}
                  type={"email"}
                  placeholder={"To"}
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
                <TextField
                  className='input-box col-12 mb-1'
                  size={"small"}
                  type={"email"}
                  placeholder={"CC"}
                  value={cc}
                  onChange={(e) => setCc(e.target.value)}
                />
                <TextField
                  className='input-box col-12 mb-1'
                  size={"small"}
                  placeholder={"Subject"}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <TextField
                  multiline
                  className='multiline-box col-12 mb-1'
                  rows={5}
                  maxRows={10}
                  placeholder={"Content"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <TextField
                  className='input-box col-12 mb-1'
                  type="file"
                  placeholder={"Attach file"}
                  value={attachFile}
                  onChange={(e) => setAttachFile(e.target.value)}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Div sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                <Button className='save-button' onClick={onSendMessage} sx={{ mr: 2 }}>Send</Button>
                <Button className='cancel-button' onClick={() => setShowDialog(false)}>Cancel</Button>
              </Div>
            </DialogActions>
          </Dialog>

        </Div>


        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Inbox" {...a11yProps(0)} />
            <Tab label="Send" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0} sx={{ pl: 0, pr: 0 }}>
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
                      width: 45,
                      height: 45,
                      textAlign: "center",
                      fontSize: "14px",
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
                    ml: 2.5,
                  }}
                >
                  <Div
                    className="card"
                    sx={{
                      p: 1,
                    }}
                  >
                    <Div sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "start",
                      height: height === true ? "65px" : "fit-content", overflow: "hidden"
                    }}>
                      <Div>
                        <Typography variant="h5">
                          From <span style={{ marginLeft: 28, marginRight: 5 }}> : </span> <span>vijay@gmail.com</span>
                        </Typography>
                        <Typography variant="h5">
                          Subject <span style={{ marginLeft: 15, marginRight: 5 }}> : </span> <span> Project Report</span>
                        </Typography>
                        <Typography variant="h5">
                          Message <span style={{ marginLeft: 5, marginRight: 5 }}> : </span><span>He did some.Eiusmod nisi laboris minim tempor. Enim eiusmod sint duis ea irure Lorem laborum et dolore labore nisi eu. Do laborum eu non sint sit. Labore exercitation eu amet cillum excepteur culpa elit tempor mollit ad reprehenderit esse. Enim aute ex consectetur velit nulla eiusmod amet ut. Cillum sunt magna adipisicing magna consectetur est nostrud quis sunt ad ea. Do amet ut aliqua quis in ullamco pariatur do enim irure aute ullamco ipsum.</span>
                        </Typography>
                        <Typography>Attachements <span> : <span>File.jpg <DownloadIcon /></span></span></Typography>
                      </Div>
                      <Div sx={{ display: 'flex' }}>
                        <IconButton onClick={() => setHeight(!height)} sx={{ p: 0 }}>
                        {height ? <ArrowDropDownIcon /> : <ArrowDropUpIcon/>}
                        </IconButton>
                        <IconButton onClick={handleClickAction} sx={{ p: 0 }}>
                          <MoreVertIcon />
                        </IconButton>
                      </Div>
                    </Div>
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
                      sx={{
                        mt: 3,
                        mr: 5,
                        maxHeight: "300px",
                        width: "300px",
                      }}
                    >
                      <MenuItem><ModeEdit sx={{ fontSize: 20, mr: 2 }} />Edit</MenuItem>
                      <MenuItem><DeleteIcon sx={{ fontSize: 20, mr: 2 }} />Delete</MenuItem>
                    </Menu>
                  </Div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>
          <TabPanel value={value} index={1} sx={{ pl: 0, pr: 0 }}>
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
                      width: 45,
                      height: 45,
                      textAlign: "center",
                      fontSize: "14px",
                      borderColor: "common.white",
                      boxShadow: (theme) => theme.shadows[3],
                    }}
                  >
                    Jan 18
                  </Avatar>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    p: (theme) => theme.spacing(0.5, 0),
                    ml: 2.5,
                  }}
                >
                  <Div
                    className="card"
                    sx={{
                      p: 1,
                    }}
                  >
                    <Div sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "start", height: height === true ? "65px" : "fit-content", overflow: "hidden",
                    }}>
                      <Div>
                        <Typography variant="h5">
                          To <span style={{ marginLeft: 45, marginRight: 5 }}> : </span> <span>ponkumar@gmail.com</span>
                        </Typography>
                        <Typography variant="h5">
                          Subject <span style={{ marginLeft: 15, marginRight: 5 }}> : </span> <span> Project Report</span>
                        </Typography>
                        <Typography variant="h5">
                          Message <span style={{ marginLeft: 5, marginRight: 5 }}> : </span><span>He did some.Eiusmod nisi laboris minim tempor. Enim eiusmod sint duis ea irure Lorem laborum et dolore labore nisi eu. Do laborum eu non sint sit. Labore exercitation eu amet cillum excepteur culpa elit tempor mollit ad reprehenderit esse. Enim aute ex consectetur velit nulla eiusmod amet ut. Cillum sunt magna adipisicing magna consectetur est nostrud quis sunt ad ea. Do amet ut aliqua quis in ullamco pariatur do enim irure aute ullamco ipsum.</span>
                        </Typography>
                        <Typography>Attachements <span> : <span>File.jpg <DownloadIcon /></span></span></Typography>
                      </Div>
                      <Div sx={{ display: 'flex' }}>
                        <IconButton onClick={() => setHeight(!height)} sx={{ p: 0 }}>
                        {height ? <ArrowDropDownIcon /> : <ArrowDropUpIcon/>}
                        </IconButton>
                        <IconButton onClick={handleClickAction} sx={{ p: 0 }}>
                          <MoreVertIcon />
                        </IconButton>
                      </Div>
                    </Div>
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
                      sx={{
                        mt: 3,
                        mr: 5,
                        maxHeight: "300px",
                        width: "300px",
                      }}
                    >
                      <MenuItem><ModeEdit sx={{ fontSize: 20, mr: 2 }} />Edit</MenuItem>
                      <MenuItem><DeleteIcon sx={{ fontSize: 20, mr: 2 }} />Delete</MenuItem>
                    </Menu>
                  </Div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>
        </Box>
      </TabContext>
    </>
  )
}

export default EmailContent;