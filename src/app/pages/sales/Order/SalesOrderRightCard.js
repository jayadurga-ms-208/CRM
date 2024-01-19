import React from "react";
import {
  Autocomplete,
  Button,
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
  List,
  ListItem,
  Menu,
  MenuItem,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
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
import { useState } from "react";
import { Card } from "react-bootstrap";
import Div from "@jumbo/shared/Div";
import Select from "@mui/material/Select";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CancelOutlined } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCube,
  faTags,
  faPerson,
  faUniversalAccess,
  faShield,
  faSailboat,
  faCubes,
  faCalendarDays,
  faFileSignature,
  faCalendarWeek,
  faUserShield,
  faTag,
  faMoneyBill,
  faNoteSticky,
  faBook,
  faPassport,
  faRuler,
  faCoins,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

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
    custname,
    custno,
    podate,
    quantity,
    discount,
    orderamount,
  };
}

const rows = [
  createData(
    "01 Jan 2022",
    "ORD0001",
    "Ásdís",
    "PO001",
    "03 Jan 2022",
    120,
    "12%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0002",
    "Gunnvor",
    "PO002",
    "03 Jan 2022",
    200,
    "20%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0003",
    "Ida",
    "PO003",
    "03 Jan 2022",
    150,
    "15%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0004",
    "Tamrat",
    "PO004",
    "03 Jan 2022",
    133,
    "13%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0005",
    "Arthur",
    "PO005",
    "03 Jan 2022",
    40,
    "40%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0006",
    "Katlyn",
    "PO006",
    "03 Jan 2022",
    50,
    "5%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0007",
    "Fanny",
    "PO007",
    "03 Jan 2022",
    20,
    "20%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0008",
    "Anabelle",
    "PO008",
    "03 Jan 2022",
    24,
    "2.4%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0009",
    "Anita",
    "PO009",
    "03 Jan 2022",
    43,
    "4.3%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0010",
    "Catalina",
    "PO010",
    "03 Jan 2022",
    12,
    "12%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0011",
    "Diệp",
    "PO011",
    "03 Jan 2022",
    75,
    "7.5%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0012",
    "Pejo",
    "PO012",
    "03 Jan 2022",
    43,
    "4.3%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0013",
    "Eshe",
    "PO013",
    "03 Jan 2022",
    34,
    "34%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0014",
    "Yanina",
    "PO014",
    "03 Jan 2022",
    12,
    "12%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0015",
    "Othman",
    "PO015",
    "03 Jan 2022",
    23,
    "23%"
  ),
  createData(
    "01 Jan 2022",
    "ORD0016",
    "Ethelyn",
    "PO016",
    "03 Jan 2022",
    22,
    "22%"
  ),
];

const SalesOrderRightCard = () => {
  const contacts = [
    {
      country: "India",
      state: "Tamilnadu",
      mobile_code: "+91",
      industry_type: "Product Bsaed",
    },
    { state: "Kerala", mobile_code: "+92", industry_type: "Service Bsaed" },
  ];

  const [openAddContact, setOpenCreateAccount] = useState(false);

  const handleCreateAccount = () => {
    setOpenCreateAccount(true);
  };

  return (
    <>
      <Card>
        <Dialog
          open={openAddContact}
          onClose={() => setOpenCreateAccount(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            align="center"
            id="alert-dialog-title"
            sx={{ fontSize: "18px" }}
          >
            Create Sales Order
            <IconButton
              sx={{ float: "right" }}
              onClick={() => setOpenCreateAccount(false)}
            >
              <CancelOutlined />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: "rgba(141, 119, 190, 0.5)" }}>
          <br/>
            <Card>
              <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
                <Grid item xs={6}>
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Order No"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faCube} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Sales Person"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faUniversalAccess} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Customer PO No."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faPerson} size="2xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Offer No."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faTags} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Payment Terms"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faShield} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Freight"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faSailboat} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Order Amount"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faCubes} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Order Date"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faCalendarDays} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Customer Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faFileSignature} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Customer PO Date"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faPerson} size="2xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Offer Date"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faCalendarWeek} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Delivery Terms"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faUserShield} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Discount%"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faTag} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Net Amount"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faMoneyBill} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid sx={{ mx: 2, my: 1 }}>
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1, p: 1 } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Note"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faNoteSticky} size="xl" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </Grid>
            </Card>
            <br />
            <Card sx={{p:1}}>
            <Typography variant="h3" sx={{pl:2,pt:1}}>Item Details</Typography>
              <Grid container spacing={2} sx={{ p: 1 }}>
                <Grid item xs={6}>
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Item Code"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faPassport} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="UOM"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faRuler} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Quantity"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faCubes} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Item Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faBook} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Unit Price"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faCoins} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                    className="col-sm-12 input-box mt-1"
                    id="outlined-basic"
                    placeholder="Amount"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faBox} size="xl" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Button
                size="small"
                variant="contained"
                sx={{
                  ml: "70%",
                  px: 0,
                  width: "150px",
                  bgcolor: "white",
                  color: "#007BFF",
                  boxShadow: 0,
                  ":hover": { backgroundColor: "white", boxShadow: 2 },
                }}
              >
                <AddIcon />
                Add more
              </Button>
              <Grid
                container
                className="border-card"
                sx={{ background: "#FEFFEA", px: 0, py:2, mb:5,mr:0 }}
              >
                <Grid item sx={{ p: "2px" }}>
                  <Typography sx={{ color: "#7D7D7D" }}>Item Code</Typography>
                  <Typography sx={{ fontWeight: 600 }}>ITEM001</Typography>
                </Grid>
                <Grid item sx={{ p: "2px" }}>
                  <Typography sx={{ color: "#7D7D7D" }}>Item Name</Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    Maecenas blandit vel purus
                  </Typography>
                </Grid>
                <Grid item sx={{ p: "2px" }}>
                  <Typography sx={{ color: "#7D7D7D" }}>UOM</Typography>
                  <Typography sx={{ fontWeight: 600 }}>Mtrs.</Typography>
                </Grid>
                <Grid item sx={{ p: "2px" }}>
                  <Typography sx={{ color: "#7D7D7D" }}>Unit Price</Typography>
                  <Typography sx={{ fontWeight: 600 }}>₹55.00</Typography>
                </Grid>
                <Grid item sx={{ p: "2px" }}>
                  <Typography sx={{ color: "#7D7D7D" }}>Quantity</Typography>
                  <Typography sx={{ fontWeight: 600 }}>100</Typography>
                </Grid>
                <Grid item sx={{ p: "2px" }}>
                  <Typography sx={{ color: "#7D7D7D" }}>Amount</Typography>
                  <Typography sx={{ fontWeight: 600 }}>₹5500</Typography>
                </Grid>
                <Grid item sx={{ p: "2px","&:hover": { cursor:"pointer", backgroundColor:"#E8E8E8", borderRadius:"10px" } }}>
                  <EditIcon sx={{ color: "#007BFF" }} />
                </Grid>
                <Grid item sx={{ pt: "2px",pb: "2px",pl: "2px","&:hover": { cursor:"pointer", backgroundColor:"#E8E8E8", borderRadius:"10px" } }}>
                  <DeleteIcon sx={{ color: "#DB161B" }} />
                </Grid>
              </Grid>
            </Card>
            <br />
            <Grid container align="center" spacing={2}>
              <Grid item align="right" xs={6}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    bgcolor: "#1E90FF",
                    paddingRight: "10px",
                    "&:hover": { color: "#FFFFFF", bgcolor: "#008000" },
                  }}
                >
                  Save
                </Button>
              </Grid>
              <Grid item align="left" xs={6}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    bgcolor: "#FFFFFF",
                    paddingRight: "10px",
                    color: "#007BFF",
                    "&:hover": { color: "#FFFFFF", bgcolor: "#008000" },
                  }}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <Card sx={{ pt: 5 }}>
          <Grid container spacing={2} sx={{ m: 2 }}>
            <Grid item xs={6}>
              <Button
                size="small"
                variant="contained"
                onClick={handleCreateAccount}
                sx={{
                  bgcolor: "#1E90FF",
                  paddingRight: "10px",
                }}
              >
                <AddIcon />
                Create Account
              </Button>
              <br />
              <br />
              <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                Sales Order List
              </Typography>
              <br />
            </Grid>
            <Grid item align="right" xs={6}>
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
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1050 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#1B416B" }}>
                  <TableCell sx={{ color: "#FEFEFE" }} align="center">
                    Order Date
                    <ArrowUpwardIcon />
                  </TableCell>
                  <TableCell sx={{ color: "#FEFEFE" }} align="center">
                    Order No
                  </TableCell>
                  <TableCell sx={{ color: "#FEFEFE" }} align="center">
                    Customer Name
                  </TableCell>
                  <TableCell sx={{ color: "#FEFEFE" }} align="center">
                    Customer PO No.
                  </TableCell>
                  <TableCell sx={{ color: "#FEFEFE" }} align="center">
                    PO Date
                  </TableCell>
                  <TableCell sx={{ color: "#FEFEFE" }} align="center">
                    Quantity
                  </TableCell>
                  <TableCell sx={{ color: "#FEFEFE" }} align="center">
                    Discount%
                  </TableCell>
                  <TableCell sx={{ color: "#FEFEFE" }} align="center">
                    {" "}
                    Order Amount
                  </TableCell>
                  <TableCell sx={{ color: "#FEFEFE" }} align="center">
                    <Button sx={{color:"white"}}><SettingsIcon /></Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.orderid}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.orderid}
                    </TableCell>
                    <TableCell align="center">{row.orderno}</TableCell>
                    <TableCell align="center">{row.custname}</TableCell>
                    <TableCell align="center">{row.custno}</TableCell>
                    <TableCell align="center">{row.podate}</TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">{row.discount}</TableCell>
                    <TableCell align="center">{row.orderamount}3000</TableCell>
                    <TableCell align="center">
                      <Button><MoreVertIcon /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Card>
    </>
  );
};

export default SalesOrderRightCard;
