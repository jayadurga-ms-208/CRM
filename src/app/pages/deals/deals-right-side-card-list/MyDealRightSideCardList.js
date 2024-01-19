import React from 'react';
import Div from "@jumbo/shared/Div";
import { Avatar, Card, Grid, Typography, Button , Menu, Select,
  MenuItem,} from "@mui/material";
import { Autocomplete, FormControl, Dialog, DialogContent, DialogTitle,IconButton,  DialogActions,  ListItem, Checkbox, FormControlLabel, FormGroup,
  DialogContentText } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { InputAdornment} from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';
import TextField from '@mui/material/TextField';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import {CancelOutlined, ColorLensOutlined} from "@mui/icons-material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import ColorTextFields from 'app/pages/components/mui/TextFields/ColorTextFields';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ModeEdit from "@mui/icons-material/ModeEdit";
import ArchiveIcon from '@mui/icons-material/Archive';
import ChatIcon from '@mui/icons-material/Chat';
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonIcon from '@mui/icons-material/Person';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ApprovalIcon from '@mui/icons-material/Approval';

function createData(bcolor,av,des,name, phone, amount, probability, stage, contactedat, contactedby, settings) {
    return {bcolor,av,des,name, phone, amount, probability, stage, contactedat, contactedby,settings };
  }
  
  const rows = [
    createData("#050A30",'GS','Tech overwatch','Gokulraj Sugumar', '(91)976543211','300', '50%','Proposal Submitted','21 Dec 2021', 'Subramanian', <MoreVertIcon/>),
    createData("#FF3939",'RK','Tech Wire','Roshan Khan', '(91)976543211', '300', '50%','Proposal Submitted','21 Dec 2021', 'Subramanian',  <MoreVertIcon/> ),
    createData("#424651",'YS','DynamicTech','DynamicTech', '(91)976543211', '300','50%','Proposal Submitted','21 Dec 2021', 'Subramanian',  <MoreVertIcon/>),
    createData("#750075",'KK','Electech','Kavin Kumar', '(91)976543211', '300', '50%','Proposal Submitted','21 Dec 2021', 'Subramanian',  <MoreVertIcon/> ),
    createData("#FFA500",'AJ','Techinfo','Amy Janette', '(91)976543211', '300', '50%','Proposal Submitted','21 Dec 2021','Subramanian' ,  <MoreVertIcon/> ),
    createData("#104210",'GH','Infozoid','Gill Hamper', '(91)976543211', '300','50%' ,'Proposal Submitted','21 Dec 2021', 'Subramanian', <MoreVertIcon/>),
    createData("#FD7F20",'PR','InspireTech','Prakash Raj', '(91)976543211','300', '50%','Proposal Submitted','21 Dec 2021','Subramanian',   <MoreVertIcon/> ),
    createData("#52688F",'SG','Infovio','Samantha Gokul', '(91)976543211', '300', '50%','Proposal Submitted','21 Dec 2021','Subramanian' ,  <MoreVertIcon/> ),
    createData("#FF3939",'KS','Infozoid','Kriti Sanon', '(91)976543211', '300', '50%','Proposal Submitted','21 Dec 2021', 'Subramanian',  <MoreVertIcon/> ),
    createData("#750075",'GH','Inspire Tech','Gill Hamper', '(91)976543211','300', '50%','Proposal Submitted','21 Dec 2021', 'Subramanian',  <MoreVertIcon/> ),
    createData("#52688F",'PR','infovio','Prakash Raj', '(91)976543211', '300', '50%','Proposal Submitted','21 Dec 2021', 'Subramanian',  <MoreVertIcon/> ),
    createData("#FD7F20",'SG','infovio','Samantha Gokul', '(91)976543211', '300','50%' ,'Proposal Submitted','21 Dec 2021','Subramanian',   <MoreVertIcon/> ),
    createData("#7F4AA4",'PR','Techsly','Seren Helga', '(91)976543211', '300','50%' ,'Proposal Submitted','21 Dec 2021', 'Subramanian',  <MoreVertIcon/>),
    createData("#FD7F20",'SG','bytech','Zarko Saima', '(91)976543211', '300','50%' ,'Proposal Submitted','21 Dec 2021', 'Subramanian',  <MoreVertIcon/> ),
    createData("#52688F",'KS','Techring','Jernej Tuulikki', '(91)976543211','300','50%' ,'Proposal Submitted','21 Dec 2021', 'Subramanian',  <MoreVertIcon/> ),
  ];

  const contacts = [
    {
      country: "India",
      state: "Tamilnadu",
      mobile_code: "+91",
      industry_type: "Product Bsaed",
    },
    { state: "Kerala", mobile_code: "+92", industry_type: "Service Bsaed" },
  ];


  const dropDownLists = [
    {
      type:'1',
      con_pers:'ravi',
      filter:'Category',
    },
    {
      type:'2',
      con_pers:'ani',
      filter:'Size',
    },
    {
      type:'3',
      con_pers:'kevin',
      filter:'Recent',
    },
  ];

const MyDealRightSideCardList = () => {
  const [openAddContact, setOpenCreateAccount] = useState(false);

  const handleCreateAccount = () => {
    setOpenCreateAccount(true);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <ListItem selected key={file.path} sx={{ width: "auto", mr: 1 }}>
      {file.path} - {file.size} bytes
    </ListItem>
  ));
  
  const [drop, setDrop] = React.useState("0");

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAllContacts, setShowAllContacts] = useState(true);
  const [openOverviewContact, setOpenOverviewContact] = useState(false);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openUpload, setOpenUpload] = useState(false);
  const [openAdddContact, setOpenAdddContact] = useState(false);
  const [openEditContact, setOpenEditContact] = useState(false);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAction = () => {
    setAnchorElAction(null);
  };

  const handleUpload = () => {
    setOpenUpload(true);
  };

  const handleAddContact = () => {
    setOpenAdddContact(true);
  };

  const handleClickEditContact = () => {
    setOpenEditContact(true);
  }

  const handleClickOverviewContact = () => {
    navigate("/app/contacts/overview");
    setOpenOverviewContact(true);
    setShowAllContacts(false);
  };

  const handleDropChange = (event) => {
    setDrop(event.target.value);
  };
  return (
    <>
    <Dialog
            open={openAddContact}
            onClose={() => setOpenCreateAccount(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
        <DialogTitle
        align='center'
          id="alert-dialog-title"
          sx={{ fontSize: "18px" }}
        >
          Add Deal
          <IconButton
                sx={{ float: "right" }}
                onClick={() => setOpenCreateAccount(false)}
              ><CancelOutlined />
              </IconButton>
        </DialogTitle>
        <DialogContent>
          <Card>
            <Grid  container  spacing={2} sx={{pl:1,pr:1,pt:1 }}>
            <Grid item xs={12}>
            <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Enter Deal Name"
                  sx={{ width:400, "& fieldset": { borderRadius: "30px",} }}
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SupportAgentIcon sx={{color:"#6C63FF"}}/>
                    </InputAdornment>
                    ),
                    }}
                />
                <br/>
            <div className="drop-list" style={{margin:3}}>
                 <VerifiedIcon sx={{ml:1,color:"#6C63FF"}}/>
                      <Select
                        sx={{

                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          fontSize: "14px",
                          width: "90%",
                          height: "38px",
                          color: "#7D7D7D",
                          fontWeight:"100",
                        }}
                        defaultValue={0}
                        value={drop}
                        
                        onChange={handleDropChange}
                      >
                        <MenuItem value={0}>Select Deal Type</MenuItem>
                        {dropDownLists.map((drop) => (
                          <MenuItem value={drop.leadid}>{drop.leadid}</MenuItem>
                        ))}
                      </Select>
                    </div>
                    <div className="drop-list" style={{margin:3}}>
                    <SupportAgentIcon sx={{color:"#6C63FF",ml:1}}/>
                      <Select
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          fontSize: "14px",

                          width: "90%",
                          height: "38px",
                          color: "#7D7D7D",
                        }}
                        defaultValue={0}
                        value={drop}
                        
                        onChange={handleDropChange}
                      >
                        <MenuItem value={0}>Account Name</MenuItem>
                        {dropDownLists.map((drop) => (
                          <MenuItem value={drop.leadid}>{drop.leadid}</MenuItem>
                        ))}
                      </Select>
                    </div>
                    <div className="drop-list" style={{margin:3}}>
                    <PersonIcon sx={{color:"#6C63FF",ml:1}}/>

                      <Select
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          fontSize: "14px",

                          width: "90%",
                          height: "38px",
                          color: "#7D7D7D",
                        }}
                        defaultValue={0}
                        value={drop}
                        
                        onChange={handleDropChange}
                      >
                        <MenuItem value={0}>Contact Person</MenuItem>
                        {dropDownLists.map((drop) => (
                          <MenuItem value={drop.leadid}>{drop.leadid}</MenuItem>
                        ))}
                      </Select>
                    </div>
                    <div className="drop-list" style={{margin:3}}>
                      <svg
                        style={{ marginLeft: "14px", marginRight: "6px", border:1 }}
                        width="20"
                        height="16"
                        viewBox="0 0 17 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.7404 12.2446L12.9404 9.74458C12.7654 9.58819 12.528 9.50044 12.2805 9.50044H11.4602L10.4059 8.55905C11.6652 7.23009 12.0618 5.41269 11.4535 3.75869C10.8452 2.10469 9.31914 0.85105 7.4227 0.4473C5.52614 0.04355 3.53066 0.547468 2.1519 1.77848C0.773139 3.00949 0.208779 4.79116 0.660979 6.48455C1.11318 8.17791 2.51722 9.54048 4.36974 10.0835C6.22226 10.6265 8.2577 10.2725 9.74614 9.14809L10.8005 10.0895V10.8218C10.8005 11.0427 10.8988 11.2548 11.0739 11.4111L13.8739 13.9111C14.0489 14.0673 14.2863 14.1552 14.5338 14.1552C14.7814 14.1552 15.0188 14.0673 15.1938 13.9111L15.7405 13.4229C15.9155 13.2667 16.0139 13.0546 16.0139 12.8336C16.0139 12.6126 15.9155 12.4007 15.7405 12.2445L15.7404 12.2446ZM1.46718 5.33387C1.45687 3.96012 2.20562 2.67023 3.46858 1.88562C4.7317 1.10115 6.3467 0.922868 7.78578 1.40905C9.22486 1.89537 10.303 2.98369 10.6677 4.31822C11.0325 5.6529 10.637 7.06223 9.61062 8.08573C9.46265 7.89418 9.25765 7.74351 9.01874 7.65087L8.5239 7.46128H8.52374C6.99702 6.8802 5.27078 6.8802 3.74414 7.46128L3.25006 7.65087C3.01084 7.7435 2.80554 7.89417 2.65742 8.08587C1.89506 7.33044 1.47134 6.3508 1.46742 5.3339L1.46718 5.33387ZM3.3753 8.67651C3.40921 8.56253 3.4978 8.4678 3.61718 8.41744L4.11202 8.22785H4.11217C5.40373 7.73621 6.86389 7.73621 8.15537 8.22785L8.65117 8.41744H8.65133C8.77039 8.46795 8.85852 8.56267 8.89242 8.67651C8.09758 9.21126 7.12914 9.50058 6.13382 9.50058C5.1385 9.50058 4.17022 9.21138 3.37522 8.67651H3.3753ZM6.13374 6.1673C6.6289 6.1673 7.10358 5.99165 7.45374 5.67915C7.80374 5.36651 8.00046 4.94255 8.00046 4.50058C8.00046 4.05862 7.80374 3.63465 7.45374 3.32201C7.10358 3.00951 6.6289 2.83387 6.13374 2.83387C5.63874 2.83387 5.1639 3.00951 4.8139 3.32201C4.46374 3.63465 4.26718 4.05862 4.26718 4.50058C4.26781 4.9424 4.46468 5.36594 4.81454 5.67844C5.16454 5.99094 5.6389 6.16673 6.13374 6.1673ZM6.13374 3.6673C6.3814 3.6673 6.61874 3.75505 6.79374 3.9113C6.96874 4.06755 7.06718 4.27958 7.06718 4.50058C7.06718 4.72158 6.96874 4.93362 6.79374 5.08987C6.61874 5.24612 6.38138 5.33387 6.13374 5.33387C5.88624 5.33387 5.6489 5.24612 5.4739 5.08987C5.29874 4.93362 5.20046 4.72158 5.20046 4.50058C5.20062 4.2796 5.29906 4.06769 5.47406 3.91144C5.64906 3.75519 5.88626 3.66744 6.13374 3.6673L6.13374 3.6673Z"
                          fill="#6C63FF"
                        />
                      </svg>
                      <Select
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          fontSize: "14px",

                          width: "90%",
                          height: "38px",
                          color: "#7D7D7D",
                        }}
                        defaultValue={0}
                        value={drop}
                        
                        onChange={handleDropChange}
                      >
                        <MenuItem value={0}>Lead source</MenuItem>
                        {dropDownLists.map((drop) => (
                          <MenuItem value={drop.leadid}>{drop.leadid}</MenuItem>
                        ))}
                      </Select>
                    </div>
            <TextField
                  className="col-sm-12 input-box "
                  id="outlined-basic"
                  placeholder="Enter amount"
                  variant="outlined"
                  sx={{ "& fieldset": { borderRadius: "30px"} }}
                />
            <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Minimum Turn Around"
                  variant="outlined"
                  sx={{ "& fieldset": { borderRadius: "30px"} }}
                />
                      <div className="drop-list" style={{margin:3}}>
                      <SignalCellularAltIcon sx={{color:"#6C63FF",ml:1}}/>
                      <Select
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          fontSize: "14px",

                          width: "90%",
                          height: "38px",
                          color: "#7D7D7D",
                        }}
                        defaultValue={0}
                        value={drop}
                        
                        onChange={handleDropChange}
                      >
                        <MenuItem value={0}>Deal Stage</MenuItem>
                        {dropDownLists.map((drop) => (
                          <MenuItem value={drop.leadid}>{drop.leadid}</MenuItem>
                        ))}
                      </Select>
                    </div>
                    <div className="drop-list" style={{margin:3}}>
                    <ApprovalIcon sx={{ml:1,color:"#6C63FF"}}/>
                      <Select
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                              border: 0,
                            },
                          fontSize: "14px",

                          width: "90%",
                          height: "38px",
                          color: "#7D7D7D",
                        }}
                        defaultValue={0}
                        value={drop}
                        
                        onChange={handleDropChange}
                      >
                        <MenuItem value={0}>Deal Probability</MenuItem>
                        {dropDownLists.map((drop) => (
                          <MenuItem value={drop.leadid}>{drop.leadid}</MenuItem>
                        ))}
                      </Select>
                    </div>
            <TextField
                  className="col-sm-12 input-box"
                  id="outlined-basic"
                  placeholder="Next Step"
                  variant="outlined"
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                />
            <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Deal Note"
                  variant="outlined"
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                />
            </Grid>
          </Grid>
          <br/>
          </Card>
          
          <Grid container align="center" spacing={2}>
            <Grid item align="right" xs={6}>
              <Button size='small' variant="contained"  sx={{
              bgcolor: "#1E90FF",paddingRight: "9px",
              "&:hover":{color:"#FFFFFF",bgcolor: "#008000" }
              }}
              >Cancel</Button>
            </Grid>
            <Grid item align="left" xs={6}>
              <Button size='small' variant="contained"  sx={{
              bgcolor: "#FFFFFF",paddingRight: "9px", color:"#007BFF",
              "&:hover":{color:"#FFFFFF",bgcolor: "#008000" }
              }}>Save</Button>
            </Grid>
           </Grid>
          
        </DialogContent>
      </Dialog>
<Grid container className="border-card" spacing={2}>
<Grid container spacing={2}>
        <Grid item xs={6} onClick={handleCreateAccount}>
        <Typography variant="contained"  sx={{
            bgcolor: "#1E90FF",paddingRight: "10px",borderRadius:"16px",px:1,py:1,cursor:"pointer"
          }}><AddIcon/>Add Deals</Typography>
          <br/>
          <br/>
          <Typography sx={{ paddingLeft: "8px", m: 0, fontSize:"14px"}}>My deal</Typography>
          <br/>
        </Grid>
        <Grid item xs={6} align="right">
          {/* <Typography variant="contained"  sx={{
            fontcolor: "#7D7D7D",
          }}><SearchIcon/>  Search</Typography> */}
          {/* <TextField id="standard-basic" label="Search" variant="standard" /> */}
          {/* <br/>
          <Button variant="outlined" sx={{ paddingRight: "30px", m: 0 }}>This Week <KeyboardArrowDownIcon/></Button> */}
          <TextField
                variant="standard"
                className="input-box"
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
                sx={{ mt: { xs: 0.5, md: 0 }, mr: 7 }}
              />
          <br/>
        </Grid>
    </Grid>
 
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1300 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#1B416B' }}>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer Name<ArrowUpwardIcon/></TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Phone</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Deal Amount</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Deal Probablilty<ArrowUpwardIcon/></TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Deal Stage</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Last Conatacted at</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Last Contacted By</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center"><SettingsIcon/></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                    <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: row.bcolor,
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    {row.av}
                  </Avatar>
                  <Typography sx={{ fontWeight: 600, pl:2,fontSize:"14px",color:"#304995" }}>
                    {row.name}<br/><span style={{fontWeight: 500,color:"black",fontSize:"12px"}}>{row.des}</span>
                  </Typography>
                </Div>
                    </TableCell>
                    <TableCell align="center"><PhoneInTalkIcon sx={{color:"#2093c3"}}/>{row.phone}</TableCell>
                    <TableCell align="center">{row.amount}</TableCell>
                    <TableCell align="center">{row.probability}</TableCell>
                    <TableCell align="center">{row.stage}</TableCell>
                    <TableCell align="center">{row.contactedat}</TableCell>
                    <TableCell align="center">{row.contactedby}</TableCell>
                    <TableCell align="center">{row.settings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Grid>
    </>
  )
}

export default  MyDealRightSideCardList

