import { useState } from "react";
import { Autocomplete, Button, Card, Checkbox, Dialog,  DialogActions,
  DialogContent,  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  TextField,
  Typography,} from "@mui/material";
  import {
    BarChartOutlined,
    CancelOutlined,
    CheckBox,
    EmailOutlined,
    FactoryOutlined,
    FaxOutlined,
    ModeEdit,
    RingVolume,
    RingVolumeOutlined,
  } from "@mui/icons-material";
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { InputAdornment, Avatar} from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';
import Div from "@jumbo/shared/Div"
import Select from '@mui/material/Select';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BusinessIcon from '@mui/icons-material/Business';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FaxIcon from '@mui/icons-material/Fax';
import { CloseIcon} from "app/icons/PngIcons";
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {blue} from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import {  PermContactCalendar } from "@mui/icons-material";
import ArchiveIcon from '@mui/icons-material/Archive';
import ChatIcon from '@mui/icons-material/Chat';
import LanguageIcon from "@mui/icons-material/Language";
import GradeIcon from '@mui/icons-material/Grade';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function createData(orderid, orderno, custname, custno, podate, quantity, discount, orderamount) {
    return {orderid, orderno, custno, custname, podate, quantity, discount, orderamount};
  }
  


  const rows = [
    createData('01 Jan 2022','SCH0001','ORD0001', 'PO001','Ásdís','12' ,100,'1200' ),
    createData('01 Jan 2022','SCH0002','ORD0001', 'PO002','Gunnvor', '12', 100,'1200' ),
    createData('01 Jan 2022','SCH0003','ORD0001', 'PO003','Ida', '12', 100, '1200'),
    createData('01 Jan 2022','SCH0004','ORD0001', 'PO004','Tamrat', '12', 100, '1200'),
    createData('01 Jan 2022','SCH0005','ORD0001', 'PO005','Arthur', '12', 100, '1200'),
    createData('01 Jan 2022','SCH0006','ORD0001', 'PO006','Katlyn', '12', 100, '1200'),
    createData('01 Jan 2022','SCH0007','ORD0001', 'PO007','Fanny','12', 20, '1200'),
    createData('01 Jan 2022','SCH0008','ORD0001', 'PO008','Anabelle', '12', 24, '1200'),
    createData('01 Jan 2022','SCH0009','ORD0001', 'PO009','Anita', '12', 43, '1200'),
    createData('01 Jan 2022','SCH00010','ORD0001', 'PO010','Catalina','12', 12, '1200'),
    createData('01 Jan 2022','SCH00011','ORD0001', 'PO011','Diệp', '12', 75, '1200'),
    createData('01 Jan 2022','SCH00012','ORD0001', 'PO012','Pejo', '12', 43, '1200' ),
    createData('01 Jan 2022','SCH00013','ORD0001', 'PO013','Eshe', '12', 34, '1200'),
    createData('01 Jan 2022','SCH00014','ORD0001', 'PO014','Yanina', '12', 12, '1200'),
    createData('01 Jan 2022','SCH00015','ORD0001', 'PO015','Othman','12', 23, '1200'),
    createData('01 Jan 2022','SCH00016','ORD0001', 'PO016','Ethelyn','12', 22, '1200'),
  ];

const NotConvertedToOrder = () => {

  const [active, setActive] = useState(false);
  const [showScheduledRightCard,setshowScheduledRightCard]=useState(true);
//   const [showSchedulePendingShipments,setshowSchedulePendingShipments]=useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openEditContact, setOpenEditContact] = useState(false);
  const [openAddContact, setOpenCreateAccount] = useState(false);

  const handleCreateAccount = () => {
    setOpenCreateAccount(true);
  };

  
  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };
  const handleClickEditContact = () => {
    setOpenEditContact(true);
  }


  const handleClose = () => {
    setAnchorEl(null);
  };

   const handleCloseAction = () => {
    setAnchorElAction(null);
  };



  const dropDownLists = [
    {
      leadid: "ACC0030",
      country: "India",
      state: "Tamilnadu",
      city: "Chennai",
      mobile_code: "+91",
    },
    {
      leadid: "ACC0011",
      state: "Kerala",
      mobile_code: "+92",
      city: "Delhi",
      country: "United Kingdom",
    },
    {
      leadid: "ACC0040",
      state: "Uttar Pradesh",
      mobile_code: "+44",
      city: "",
      country: "USA",
    },
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

 

  return (
    <>  
      <Dialog
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "848px",
        },
      }}
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
          Create Schedule
          <IconButton
                sx={{ float: "right" }}
                onClick={() => setOpenCreateAccount(false)}
              >
                <CancelOutlined />
              </IconButton>
        </DialogTitle>
        <DialogContent>
          <Card className='border-card'>
            <Grid container spacing={2} sx={{pl:1,pr:1,pt:1 }}>
            <Grid item xs={6}>
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',mr:1},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Schedule Code"
                  variant="outlined"
                />
            <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Customer Name"
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Order"
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Supplier Schedule Date"
                  variant="outlined"
                />
            </Grid>
            <Grid item xs={6}>
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Order Type"
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Customer Order Number"
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Sales Person"
                  variant="outlined"
                />
                <FormControl
                        className="col-sm-2 mt-1"
                        sx={{ width: "100%",
                         '& fieldset':{
                            borderRadius:'30px',
                          },}}
                      >
                        <Autocomplete
                          disablePortal
                          className="search-select"
                          getOptionLabel={(option) => option.leadid}
                          options={dropDownLists}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Customer Schedule Date"
                              
                            />
                          )}
                        />
                      </FormControl>
            </Grid>
          </Grid>
        </Card>
        <br/>
          <Card className='border-card'>
          <Typography variant='h3' sx={{pl:1,paddingLeft:5}}>Schedule Details</Typography>
            <Grid container spacing={2} sx={{p:1}}>
              <Grid item xs={6}>
              <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Product ID"
                  variant="outlined"
                />
                <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Ordered Quantity"
                  variant="outlined"
                />
                <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Scheduled Quantity"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Product Name"
                  variant="outlined"
                />
                <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Available Quantity"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Button sx={{color:"#007BFF", width: "120px", float:"right"}} startIcon={<AddIcon fontSize="small" sx={{color:"#007BFF"}} />}>Add More</Button>
            <Grid container className="border-card" sx={{ background: "#FEFFEA",p:2, borderRadius:5}}>
              <Grid item sx={{p:'3px', paddingRight:'20px'}}>
                <Typography sx={{color:"#7D7D7D"}}>Product ID</Typography>
                <Typography sx={{fontWeight: 600}}>PRODUCT001</Typography>
              </Grid>
              <Grid item sx={{p:'3px', paddingRight:'20px'}}>
              <Typography sx={{color:"#7D7D7D"}}>Product Name</Typography>
                <Typography sx={{fontWeight: 600}}>Maecenas blandit vel purus</Typography>
              </Grid>
              <Grid item sx={{p:'3px', paddingRight:'20px'}}>
              <Typography sx={{color:"#7D7D7D"}}>Ordered Quantity</Typography>
                <Typography sx={{fontWeight: 600}}>30</Typography>
              </Grid>
              <Grid item sx={{p:'1px', paddingRight:'20px'}}>
                <Typography sx={{color:"#7D7D7D"}}>Available Quantity</Typography>
                <Typography sx={{fontWeight: 600}}>100</Typography>
              </Grid>
              <Grid item sx={{p:'1px', paddingRight:'20px'}}>
                <Typography sx={{color:"#7D7D7D"}}>Schedule Quantity</Typography>
                <Typography sx={{fontWeight: 600}}>25</Typography>
              </Grid>
              <Grid item sx={{p:'1px', paddingRight:'20px'}}>
                <BorderColorIcon sx={{color:"#007BFF"}}/>
              </Grid>
              <Grid item sx={{p:'1px'}}>
                <DeleteIcon sx={{color:"#DB161B"}}/>
              </Grid>
            </Grid>
          </Card>
          <br/>
          <Grid container align="center" spacing={2}>
            <Grid item align="right" xs={6}>
              <Button size='small' variant="contained"  sx={{
              bgcolor: "#1E90FF",paddingRight: "10px",
              "&:hover":{color:"#FFFFFF",bgcolor: "#008000" }
              }}
              >Save</Button>
            </Grid>
            <Grid item align="left" xs={6}>
              <Button size='small' variant="contained"  sx={{
              bgcolor: "#FFFFFF",paddingRight: "10px", color:"#007BFF",
              "&:hover":{color:"#FFFFFF",bgcolor: "#008000" }
              }}>Clear</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
        {/* <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button size='small' variant="contained" onClick={handleCreateAccount}  sx={{
            bgcolor: "#1E90FF",paddingRight: "10px"
          }}><AddIcon/>Create Schedule</Button>
          <br/>
          <br/>
          <Grid container>
            <Grid item>
            <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}><Button size='small' variant="contained"  sx={{
            bgcolor: "#1E90FF",paddingRight: "10px", backgroundColor: active ? "#fff" : "#EFDCF9" ,color: active? "black": "#CD2A1C", outline: "none"
          }}>My Offers</Button></Typography>
            
            </Grid><Grid item>
            <Typography variant="h3"  sx={{ paddingLeft: "30px", m: 0 }}><Button size='small' variant="contained"  sx={{
            bgcolor: "#1E90FF",paddingRight: "10px", backgroundColor: active ? "#EFDCF9" : "#fff" , color: active? "#CD2A1C": "black", outline: "none"
          }}>Pending Offers</Button></Typography>
            </Grid>
            <Grid item>
            <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}><Button size='small' variant="contained"  sx={{
            bgcolor: "#1E90FF",paddingRight: "10px", backgroundColor: active ? "#fff" : "#EFDCF9" ,color: active? "black": "#CD2A1C", outline: "none"
          }}>Not Converted to Order</Button></Typography>
            
            </Grid>
            
          </Grid>
         
          
          <br/>
        </Grid>
      
        <Grid item align="right" xs={6}>
        <TextField className="col-12 input-box" id="outlined-search" type="search" placeholder="Search..."
              InputProps={{startAdornment: (<InputAdornment position="start">
                <HiOutlineSearch size={20} />
              </InputAdornment>),}}
          sx={{ minWidth: 130, mt: { xs: 0.5, md: 0 }, mr: 1 }} />
            
          </Grid>
          
        
        <Grid item xs={9} sx={{display:showSchedulePendingShipments===true?"block":"none"}}>
            <SchedulePendingShipments />
          </Grid>
          <Grid item xs={9} sx={{display:showScheduledRightCard===true?"block":"none"}}>
            <ScheduleRightCard />
          </Grid>
    </Grid> */}
    <Div sx={{display: showScheduledRightCard===true?"block":"none"}}>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#1B416B' }}>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Schedule Date<ArrowUpwardIcon/></TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Schedule No</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Order</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer P.O No</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer Name</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Order City</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Price</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Total Value</TableCell>
                  <TableCell sx={{ color: "#FEFEFE",cursor:"pointer" }} onClick={handleClickOpen} align="center">
                  <SettingsIcon size="small" color="white"/>
                </TableCell>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ mt: 7, maxHeight: "300px" }}
              >
                <Typography variant="h4" sx={{ p: 2, mb: -2 }}>
                  Choose Columns
                </Typography>
                <FormGroup sx={{ p: 2 }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Contact Name"
                  />
                  <FormControlLabel
                     control={<Checkbox defaultChecked />}
                    label="City"
                  />
                  <FormControlLabel
                     control={<Checkbox defaultChecked />}
                    label="Country"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Phone"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Email"
                  />
                  <FormControlLabel
                     control={<Checkbox defaultChecked />}
                    label="Address"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel control={<Checkbox />} label="Open Deals" />
                  <FormControlLabel control={<Checkbox />} label="Closed Deals" />
                  <FormControlLabel control={<Checkbox />} label="Next Activity Date" />
                  <FormControlLabel control={<Checkbox />} label="Owner" />
                  <FormControlLabel control={<Checkbox />} label="Done Activities" />
                </FormGroup>
                <Div sx={{ display: "flex", justifyContent: "center" }}>
                  <Button className="save-button" onClick={handleClose}>
                    Save
                  </Button>
                </Div>
              </Menu>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.orderid}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center" sx={{bgcolor:"white"}}>{row.orderid}</TableCell>
                    <TableCell align="center">{row.orderno}</TableCell>
                    <TableCell align="center">{row.custname}</TableCell>
                    <TableCell align="center">{row.custno}</TableCell>
                    <TableCell align="center">{row.podate}</TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">{row.discount}</TableCell>
                    <TableCell align="center">{row.orderamount}</TableCell>
                    <TableCell align="center" onClick={handleClickAction}
                  sx={{ cursor: "pointer" }}>
                    <MoreVertIcon />
                  </TableCell>
                  </TableRow>
                ))}
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
                    mt: 7,
                    mr: 5,
                    maxHeight: "300px",
                    width: "300px",
                  }}
                >
                  <MenuItem onClick={handleClickEditContact}><ModeEdit sx={{ fontSize: 20, mr: 2 }} />Edit</MenuItem>
                  <MenuItem><DeleteIcon sx={{ fontSize: 20, mr: 2 }} />Delete</MenuItem>
                  <MenuItem><ArchiveIcon sx={{ fontSize: 20, mr: 2 }} />Archieve</MenuItem>
                  <MenuItem><ChatIcon sx={{ fontSize: 20, mr: 2 }} />Chat</MenuItem>
                </Menu>
              </TableBody>
            </Table>
          </TableContainer>
          </Div>

    </>
  )
}

export default NotConvertedToOrder;

