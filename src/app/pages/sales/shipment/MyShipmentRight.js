import React, { useState } from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PendingShipment from "./PendingShipment";
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
  Grid,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import {
  BarChartOutlined,
  BorderColorOutlined,
  CancelOutlined,
  CheckBox,
  EmailOutlined,
  FactoryOutlined,
  FaxOutlined,
  ModeEdit,
  RingVolume,
  RingVolumeOutlined,
} from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { InputAdornment, Avatar } from "@mui/material";
import { HiOutlineSearch } from "react-icons/hi";
import Div from "@jumbo/shared/Div";
import Select from "@mui/material/Select";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BusinessIcon from "@mui/icons-material/Business";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FaxIcon from "@mui/icons-material/Fax";
import { CloseIcon, EditIcon } from "app/icons/PngIcons";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { PermContactCalendar } from "@mui/icons-material";
import ArchiveIcon from "@mui/icons-material/Archive";
import ChatIcon from "@mui/icons-material/Chat";
import LanguageIcon from "@mui/icons-material/Language";
import GradeIcon from "@mui/icons-material/Grade";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";



function createData(
  orderid,
  orderno,
  custname,
  custno,
  podate,
  quantity,
  discount,
  orderamount
) {
  return {
    orderid,
    orderno,
    custno,
    custname,
    podate,
    quantity,
    discount,
    orderamount,
  };
}

const rows = [
  createData(
    "01 Jan 2022",
    "SCH0001",
    "SCH0001",
    "Ásdís",
    "Irfan",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
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

// popup dropdown values

const dropDownLists = [
  {
    custName: "Name 1",
    store: "S1",
    mot: "Truck",
    salesPerson: "Person 1",
  },
  {
    custName: "Name 2",
    mot: "Ship",
    salesPerson: "Person 2",
    store: "S2",
  },
  {
    custName: "Name 3",
    mot: "Courier",
    salesPerson: "Person 3",
    store: "S3",
  },
];

const MyShipmentRight = () => {
  const [showCreateShippment, setShowCreateShipment] = useState(false);
  const [showScheduledRightCard, setshowScheduledRightCard] = useState(true);
  const [showPendingShipments, setshowPendingShipments] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openEditContact, setOpenEditContact] = useState(false);

  const handleClickCreateShipment = () => {
    setShowCreateShipment(true);
  };

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAction = () => {
    setAnchorElAction(null);
  };

  const handleClickEditContact = () => {
    setOpenEditContact(true);
  };

  const handlePendingShipments = () => {
    setshowScheduledRightCard(false);
    setshowPendingShipments(true);
  };

  const handleRightCard = () => {
    setshowScheduledRightCard(true);
    setshowPendingShipments(false);
  };

  return (
    <Card sx={{backgroundColor:"white",py:3,px:1}}>
      <Grid container>
        <Grid item xs={9}>

          {/*  pop up buttons */}

          <Button
            onClick={handleClickCreateShipment}
            size="small"
            variant="contained"
            sx={{
              fontSize: "14px",
              background: "#007BFF",
              ":hover": { background: "#007BFF" },
              maxHeight: "23px",
              borderRadius: "10px",
            }}
          >
            +Create Shipment
          </Button>

          {/* popup box */}

          <Dialog
            scroll="body"
            PaperProps={{
              sx: {
                borderRadius: 5,
                maxWidth: "848px",
              },
            }}
            open={showCreateShippment}
            onClose={() => setShowCreateShipment(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              align="center"
              id="alert-dialog-title"
              sx={{ fontSize: "18px", pl: 5 }}
            >
              Create Shipment
              <IconButton
                sx={{ float: "right" }}
                onClick={() => setShowCreateShipment(false)}
              >
                <CancelOutlined />
              </IconButton>
            </DialogTitle>
            <br></br>
            <DialogContent sx={{ backgroundColor: "rgba(141, 119, 190, 0.5)", p: 2, borderRadius: 5 }}>
              {/* 1ST CARD */}

              <Card style={{ padding: 0, borderRadius: 10 }}>
                <Grid container p={1} rowSpacing={0.5} columnSpacing={5}>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Shipment Code"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="date"
                      placeholder="Shipment Date"
                      variant="outlined"
                      onfocus="(this.placeholder='sads')"
                      type={"date"}
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <PermIdentityIcon sx={{ color: "#6C63FF" }} />
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl
                      className="col-sm-2 mt-1"
                      sx={{
                        width: "100%",
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                    >
                      <Autocomplete
                        disablePortal
                        className="search-select"
                        getOptionLabel={(option) => option.custName}
                        options={dropDownLists}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Customer Name" />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl
                      className="col-sm-2 mt-1"
                      sx={{
                        width: "100%",
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                    >
                      <Autocomplete
                        disablePortal
                        className="search-select"
                        getOptionLabel={(option) => option.store}
                        options={dropDownLists}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Store" />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Order no."
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl
                      className="col-sm-2 mt-1"
                      sx={{
                        width: "100%",
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                    >
                      <Autocomplete
                        disablePortal
                        className="search-select"
                        getOptionLabel={(option) => option.salesPerson}
                        options={dropDownLists}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Sales Person" />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl
                      className="col-sm-2 mt-1"
                      sx={{
                        width: "100%",
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                    >
                      <Autocomplete
                        disablePortal
                        className="search-select"
                        getOptionLabel={(option) => option.mot}
                        options={dropDownLists}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Mode of Transport"
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Vehicle No."
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Transporter Name"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Shipment Schedule No."
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Delivery From"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Delivery To"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Remarks"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                </Grid>
              </Card>
              {/* 2ND CARD */}
              <Card style={{ marginTop: "6px", padding: "12px", borderRadius: 10 }}>
                <Typography
                  p={1}
                  pl={2}
                  sx={{ fontSize: "14px", fontWeight: 500 }}
                >
                  Shipment Details
                </Typography>
                <Grid container p={1} pt={0} rowSpacing={0.5} columnSpacing={5}>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Product ID"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Order Code"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Product Name"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="UOM"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Order Quantity"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Pending Quantity"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Available Stock"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Shipment Quantity"
                      variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      size="small"
                      variant="text"
                      sx={{ float: "right", color: "#007BFF" }}
                    >
                      + Add More
                    </Button>
                  </Grid>
                </Grid>
                {/* 3RD CARD */}
                <Card
                  style={{
                    background: "#FEFFEA",
                    border: "1px solid #C9C9C9",
                    padding: "10px",
                  }}
                >
                  <Grid
                    container
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid item>
                      <Typography sx={{ fontSize: "12px" }}>
                        Product ID
                      </Typography>
                      <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                        ProductID
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: "12px" }}>
                        Order Code
                      </Typography>
                      <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>ORD001</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: "12px" }}>
                        Product Name
                      </Typography>
                      <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                        Maecenas
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: "12px" }}>UOM</Typography>
                      <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>Mtrs</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: "12px" }}>
                        Order Quantity
                      </Typography>
                      <Typography sx={{ fontSize: "14px", textAlign: "center", fontWeight: 700 }}>30</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: "12px" }}>
                        Available Stock
                      </Typography>
                      <Typography sx={{ fontSize: "14px", textAlign: "center", fontWeight: 700 }}>100</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: "12px" }}>
                        Shipment Quantity
                      </Typography>
                      <Typography sx={{ fontSize: "14px", textAlign: "center", fontWeight: 700 }}>25</Typography>
                    </Grid>
                    <Grid sx={{ paddingLeft: "6px" }} item>
                      <IconButton sx={{ color: "#007BFF" }}>
                        <BorderColorOutlined />
                      </IconButton>
                      <IconButton sx={{ color: "#DB161B" }}>
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Card>
                <Grid container align="center" spacing={2} pt={2}>
                  <Grid item align="right" xs={6}>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        maxHeight: "23px",
                        width: "55px",
                        bgcolor: "#1E90FF",
                        paddingRight: "8px",
                        "&:hover": { bgcolor: "#007BFF" },
                      }}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item align="left" xs={6}>
                    <Button
                      size="small"
                      variant="text"
                      sx={{
                        maxHeight: "23px",
                        width: "55px",
                        paddingRight: "10px",
                        color: "#007BFF",
                        "&:hover": { bgcolor: "transparent" },
                      }}
                    >
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </DialogContent>
          </Dialog>
        </Grid>
        <Grid item xs={3}>

          {/* Search box */}

          <TextField
            className="col-12 input-box"
            id="outlined-search"
            type="search"
            variant="standard"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiOutlineSearch size={20} />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 110, mt: { xs: 0.5, md: 0 }, mr: 1 }}
          />
        </Grid>
        <Grid item xs>
          <Grid container paddingBottom={2} direction="row" columnSpacing={1.5}>
            <Grid item>

              {/* buttons */}

              <Button
                onClick={handleRightCard}
                size="small"
                variant={showScheduledRightCard ? "contained" : "text"}
                sx={{
                  width: "114px",
                  height: "33px",
                  backgroundColor: showScheduledRightCard ? "#EFDCF9" : "#fff",
                  color: showScheduledRightCard ? "#CD2A1C" : "black",
                  ":hover": {
                    background: showScheduledRightCard ? "#EFDCF9" : "#EFDCF9",
                  },
                  borderRadius: 3,
                  fontWeight: 500
                }}
              >
                My Shipment
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handlePendingShipments}
                size="small"
                variant={showPendingShipments ? "contained" : "text"}
                sx={{
                  height: "33px",
                  minwidth: "140px",
                  ":hover": {
                    background: showScheduledRightCard ? "#EFDCF9" : "#EFDCF9",
                  },
                  backgroundColor: showPendingShipments ? "#EFDCF9" : "#fff",
                  color: showPendingShipments ? "#CD2A1C" : "black",
                  borderRadius: 3,
                  fontWeight: 500
                }}
              >
                Pending Shipments
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* table starts here */}

      <Div sx={{ display: showScheduledRightCard === true ? "block" : "none" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ bgcolor: "#1B416B" }}>
                <TableCell sx={{ color: "#FEFEFE", whiteSpace: "nowrap" }} align="center">
                  Shipment Date
                  <ArrowUpwardIcon />
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE", whiteSpace: "nowrap" }} align="center">
                  Shipment Code
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE", whiteSpace: "nowrap" }} align="center">
                  Schedule No
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE", whiteSpace: "nowrap" }} align="center">
                  Customer Name
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE", whiteSpace: "nowrap" }} align="center">
                  Transporter Name
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE", whiteSpace: "nowrap" }} align="center">
                  Order Code
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE", whiteSpace: "nowrap" }} align="center">
                  Customer PO
                </TableCell>
                <TableCell
                  sx={{ color: "#FEFEFE", cursor: "pointer" }}
                  onClick={handleClickOpen}
                  align="center"
                >
                  <SettingsIcon size="small" color="white" />
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
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Open Deals"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Closed Deals"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Next Activity Date"
                    />
                    <FormControlLabel control={<Checkbox />} label="Owner" />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Done Activities"
                    />
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
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ bgcolor: "white" }}
                  >
                    {row.orderid}
                  </TableCell>
                  <TableCell align="center">{row.orderno}</TableCell>
                  <TableCell align="center">{row.custname}</TableCell>
                  <TableCell align="center" sx={{ textAlign: "left", pl: 7, color: "#304995" }}>
                    {row.custno}
                  </TableCell>
                  <TableCell align="center" sx={{ textAlign: "left", pl: 7 }} >{row.podate}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">{row.discount}</TableCell>
                  <TableCell
                    align="center"
                    onClick={handleClickAction}
                    sx={{ cursor: "pointer" }}
                  >
                    <MoreVertIcon />
                  </TableCell>
                </TableRow>
              ))}

              {/* menu pop up */}

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
                <MenuItem onClick={handleClickEditContact}>
                  <ModeEdit sx={{ fontSize: 20, mr: 2 }} />
                  Edit
                </MenuItem>
                <MenuItem>
                  <DeleteIcon sx={{ fontSize: 20, mr: 2 }} />
                  Delete
                </MenuItem>
                <MenuItem>
                  <ArchiveIcon sx={{ fontSize: 20, mr: 2 }} />
                  Archieve
                </MenuItem>
                <MenuItem>
                  <ChatIcon sx={{ fontSize: 20, mr: 2 }} />
                  Chat
                </MenuItem>
              </Menu>
            </TableBody>
          </Table>
        </TableContainer>
      </Div>

      {/* Routing */}

      <Div sx={{ display: showPendingShipments === true ? "block" : "none" }}>
        <PendingShipment />
      </Div>
      </Card>
      );
};

      export default MyShipmentRight;
