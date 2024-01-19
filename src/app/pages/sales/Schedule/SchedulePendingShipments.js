import { useState } from "react";
import { Autocomplete, Button, Checkbox, Dialog,  DialogActions,
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
import { Card } from "react-bootstrap";
import Div from "@jumbo/shared/Div"
import Select from '@mui/material/Select';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BusinessIcon from '@mui/icons-material/Business';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FaxIcon from '@mui/icons-material/Fax';
import { CloseIcon } from "app/icons/PngIcons";
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


function createData(orderid, orderno, custname, custno, podate, quantity, discount, orderamount) {
    return {orderid, orderno, custno, custname, podate, quantity, discount, orderamount};
  }
const rows = [
    createData('02 Jan 2022','SCH0001','ORD0001', 'PO001','Ásdís','12' ,100,'1200' ),
    createData('02 Jan 2022','SCH0002','ORD0001', 'PO002','Gunnvor', '12', 100,'1200' ),
    createData('02 Jan 2022','SCH0003','ORD0001', 'PO003','Ida', '12', 100, '1200'),
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
const SchedulePendingShipments = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [openAddContact, setOpenAddContact] = useState(false);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openEditContact, setOpenEditContact] = useState(false);
  
  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };
  const handleClickEditContact = () => {
    setOpenEditContact(true);
  }

  const handleAddContact = () => {
    setOpenAddContact(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

   const handleCloseAction = () => {
    setAnchorElAction(null);
  };

  return (
    <Div>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#1B416B' }}>
                  <TableCell sx={{ color: '#FEFEFE',whiteSpace: "nowrap" }} align="center">Schedule Date<ArrowUpwardIcon/></TableCell>
                  <TableCell sx={{ color: '#FEFEFE',whiteSpace: "nowrap" }} align="center">Schedule No</TableCell>
                  <TableCell sx={{ color: '#FEFEFE',whiteSpace: "nowrap" }} align="center">Order No</TableCell>
                  <TableCell sx={{ color: '#FEFEFE',whiteSpace: "nowrap" }} align="center">Customer P.O No</TableCell>
                  <TableCell sx={{ color: '#FEFEFE',whiteSpace: "nowrap" }} align="center">Customer Name</TableCell>
                  <TableCell sx={{ color: '#FEFEFE',whiteSpace: "nowrap" }} align="center">Order City</TableCell>
                  <TableCell sx={{ color: '#FEFEFE',whiteSpace: "nowrap" }} align="center">Price</TableCell>
                  <TableCell sx={{ color: '#FEFEFE',whiteSpace: "nowrap" }} align="center">Total Value</TableCell>
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
                    <TableCell align="center"  sx={{ textAlign:"left",pl:5,color: "#304995" }}>{row.custno}</TableCell>
                    <TableCell align="center" sx={{ textAlign:"left",pl:5,color: "#304995" }}>{row.podate}</TableCell>
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
  )
}

export default SchedulePendingShipments
