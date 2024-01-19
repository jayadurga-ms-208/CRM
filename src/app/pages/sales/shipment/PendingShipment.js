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


function createData(shipdate, shipcode, schedno, custname, transname, ordercode, custpo) {
    return {shipdate, shipcode, schedno, custname, transname, ordercode, custpo};
  }
const rows = [
    createData(
        "02 Jan 2022",
        "SCH0001",
        "SCH0001",
        "Ásdís",
        "Irfan",
        "ORD0001",
        "PO001"
      ),
      createData(
        "02 Jan 2022",
        "SCH0002",
        "SCH0001",
        "Gunnvor",
        "Antonia",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH0003",
        "SCH0001",
        "Ida",
        "Hacer",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH0004",
        "SCH0001",
        "Tamrat",
        "Ugène",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH0005",
        "SCH0001",
        "Arthur",
        "Lilibeth",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH0006",
        "SCH0001",
        "Katlyn",
        "Gwilherm",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH0007",
        "SCH0001",
        "Fanny",
        "Evelina",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH0008",
        "SCH0001",
        "Anabelle",
        "Beavis",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH0009",
        "SCH0001",
        "Anita",
        "Tsvetanka",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH00010",
        "SCH0001",
        "Catalina",
        "Xystos",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH00011",
        "SCH0001",
        "Diệp",
        "Brynlee",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH00012",
        "SCH0001",
        "Pejo",
        "Tijana",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH00013",
        "SCH0001",
        "Eshe",
        "Miljana",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH00014",
        "SCH0001",
        "Yanina",
        "Michelle",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH00015",
        "SCH0001",
        "Othman",
        "Kelly",
        "ORD0001",
        "PO001"
      ),
      createData(
        "01 Jan 2022",
        "SCH00016",
        "SCH0001",
        "Ethelyn",
        "Ember",
        "ORD0001",
        "PO001"
      ),
  ];

const PendingShipment = () => {

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

        {/* Table starts here */}

         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#1B416B' }}>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Shipment Date<ArrowUpwardIcon/></TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Shipment Code</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Schedule No</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer Name</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Transporter Name </TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Order Code</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer PO</TableCell>
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
                    <TableCell align="center">{row.shipdate}</TableCell>
                    <TableCell align="center">{row.shipcode}</TableCell>
                    <TableCell align="center">{row.schedno}</TableCell>
                    <TableCell align="center"  sx={{ color: "#304995" ,textAlign: "left", pl:7}}>{row.custname}</TableCell>
                    <TableCell align="center"  sx={{textAlign: "left", pl:7}}>{row.transname}</TableCell>
                    <TableCell align="center">{row.ordercode}</TableCell>
                    <TableCell align="center">{row.custpo}</TableCell>
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

                  {/* Menu pop up */}

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

export default PendingShipment;
