import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Card,
  Button,
  Autocomplete,
  FormControl,
  Dialog,
  DialogContent,
  DialogTitle,
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
import Div from "@jumbo/shared/Div";
import { InputAdornment, Avatar } from "@mui/material";
import { HiOutlineSearch } from "react-icons/hi";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { CancelOutlined } from "@mui/icons-material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import SalesPendingInvoiceRightCard from "./SalesPendingInvoiceRightCard";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import InvoiceDashboardRightCard from "./InvoiceDashboardRightCard";
import SalesMyPaymentRightCard from "../Payment/SalesMyPaymentRightCard";

function createData(
  invdate,
  code,
  custname,
  contpono,
  ordercode,
  duedate,
  salespers,
  totval,
  appstatus
) {
  return {
    invdate,
    code,
    custname,
    contpono,
    ordercode,
    duedate,
    salespers,
    totval,
    appstatus,
  };
}

const rows = [
  createData(
    "01 Jan 2022",
    "DIS0001",
    "vitae",
    "CUSTPO001",
    "ORD001",
    "03 Jan 2022",
    "Fergus",
    1200,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0002",
    "vitae",
    "CUSTPO002",
    "ORD002",
    "03 Jan 2022",
    "Agata",
    2000,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0003",
    "lorem",
    "CUSTPO003",
    "ORD003",
    "03 Jan 2022",
    "Jeronim",
    1500,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0004",
    "rutrum ",
    "CUSTPO004",
    "ORD004",
    "03 Jan 2022",
    "Michi",
    1330,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0005",
    "tincidunt ",
    "CUSTPO005",
    "ORD005",
    "03 Jan 2022",
    "Arthur",
    4000,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0006",
    "Quisque",
    "CUSTPO006",
    "ORD006",
    "03 Jan 2022",
    "Pryderi",
    500,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0007",
    "aliquam",
    "CUSTPO007",
    "ORD007",
    "03 Jan 2022",
    "Raphaëlle",
    2000,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0008",
    "Pellentesque",
    "CUSTPO008",
    "ORD008",
    "03 Jan 2022",
    "Anabelle",
    2400,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0009",
    "Anita",
    "Þórr",
    "CUSTPO009",
    "ORD009",
    "03 Jan 2022",
    "Anita",
    4300,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0010",
    "Catalina",
    "CUSTPO010",
    "ORD010",
    "03 Jan 2022",
    "Naama",
    1200,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0011",
    "Diệp",
    "CUSTPO011",
    "ORD011",
    "03 Jan 2022",
    "Vinícius",
    750,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0012",
    "Pejo",
    "CUSTPO012",
    "ORD012",
    "03 Jan 2022",
    "Pinja",
    4300,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0013",
    "Eshe",
    "CUSTPO013",
    "ORD013",
    "03 Jan 2022",
    "Kreka",
    3400,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0014",
    "Yanina",
    "CUSTPO014",
    "ORD014",
    "03 Jan 2022",
    "Howie",
    1290,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0015",
    "Othman",
    "CUSTPO0015",
    "ORD015",
    "03 Jan 2022",
    "Gaea",
    2300,
    "Approved"
  ),
  createData(
    "01 Jan 2022",
    "DIS0016",
    "Ethelyn",
    "CUSTPO016",
    "ORD016",
    "03 Jan 2022",
    "Maredudd",
    2200,
    "Approved"
  ),
];

const dropDownLists = [
  {
    type: "1",
    con_pers: "ravi",
    filter: "Category",
  },
  {
    type: "2",
    con_pers: "ani",
    filter: "Size",
  },
  {
    type: "3",
    con_pers: "kevin",
    filter: "Recent",
  },
];

const SalesInvoiceRightCard = () => {
  const [openAddContact, setOpenCreateAccount] = useState(false);
 

  const handleCreateAccount = () => {
    setOpenCreateAccount(true);
  };



  const [showSalesInvoiceRightCard, setShowSalesInvoiceRightCard] =
    useState(true);
   
  const [
    showSalesPendingInvoiceRightCard,
    setShowSalesPendingInvoiceRightCard,
  ] = useState(false);
  const [showInvoiceDashboardRightCard, setShowInvoiceDashboardRightCard] =
    useState(false);

    const [showWholeInvoiceRightCard, setShowWholeInvoiceRightCard] = useState(true);
    const [showMyPaymentRightCard, setShowMyPaymentRightCard] = useState(false);

  const handleClickSalesInvoiceRightCard = () => {
    setShowSalesInvoiceRightCard(true);
    setShowSalesPendingInvoiceRightCard(false);
    setShowInvoiceDashboardRightCard(false);
  };

  const handleClickSalesPendingInvoiceRightCard = () => {
    setShowSalesInvoiceRightCard(false);
    setShowSalesPendingInvoiceRightCard(true);
    setShowInvoiceDashboardRightCard(false);
  };

  const handleClickInvoiceDashboardRightCard = () => {
    setShowSalesInvoiceRightCard(false);
    setShowSalesPendingInvoiceRightCard(false);
    setShowInvoiceDashboardRightCard(true);
  };

  const handleClickMyPaymentRightCard = () => {
    setShowMyPaymentRightCard(true);
    setShowWholeInvoiceRightCard(false);

  };

  return (
    <>
    <Card sx={{px:1, py:2, borderRadius:"10px", display: showWholeInvoiceRightCard === true ? "block" : "none" }}>
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
          Create Invoice
          <IconButton
            sx={{ float: "right" }}
            onClick={() => setOpenCreateAccount(false)}
          >
            <CancelOutlined />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Card className="border-card">
            <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
              <Grid item xs={6}>
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px", mr: 1 } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Invoice No"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Customer Code"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermContactCalendarIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Order No."
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Packing No."
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Invoice Amount"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Net Amount"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Discount Amount"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Invoice Date"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Customer Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Order Date"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Packing List Date"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Tax Amount"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Freight Cost"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Card>
          <br />
          <Card className="border-card">
            <Typography variant="h3" sx={{ pl: 1 }}>
              Invoice Details
            </Typography>
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item xs={6}>
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Product ID"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Product Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Quantity"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Dispatch No."
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="UOM"
                  variant="outlined"
                />
                <TextField
                  sx={{ "& fieldset": { borderRadius: "30px" } }}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Amount"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid
              container
              className="border-card"
              sx={{ background: "#FEFFEA", p: 2 }}
            >
              <Grid item sx={{ p: "3px" }}>
                <Typography sx={{ color: "#7D7D7D" }}>Item Code</Typography>
                <Typography sx={{ fontWeight: 600 }}>ITEM001</Typography>
              </Grid>
              <Grid item sx={{ p: "3px" }}>
                <Typography sx={{ color: "#7D7D7D" }}>Item Name</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  Maecenas blandit vel purus
                </Typography>
              </Grid>
              <Grid item sx={{ p: "3px" }}>
                <Typography sx={{ color: "#7D7D7D" }}>UOM</Typography>
                <Typography sx={{ fontWeight: 600 }}>Mtrs.</Typography>
              </Grid>
              <Grid item sx={{ p: "1px" }}>
                <Typography sx={{ color: "#7D7D7D" }}>Unit Price</Typography>
                <Typography sx={{ fontWeight: 600 }}>₹55.00</Typography>
              </Grid>
              <Grid item sx={{ p: "1px" }}>
                <Typography sx={{ color: "#7D7D7D" }}>Quantity</Typography>
                <Typography sx={{ fontWeight: 600 }}>100</Typography>
              </Grid>
              <Grid item sx={{ p: "1px" }}>
                <Typography sx={{ color: "#7D7D7D" }}>Amount</Typography>
                <Typography sx={{ fontWeight: 600 }}>₹5500</Typography>
              </Grid>
              <Grid item sx={{ p: "1px" }}>
                <EditIcon sx={{ color: "#007BFF" }} />
              </Grid>
              <Grid item sx={{ p: "1px" }}>
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
      <Grid container spacing={2}>
        <Grid item>
          <Button
            size="small"
            variant="contained"
            onClick={handleCreateAccount}
            sx={{ bgcolor: "#1E90FF", paddingRight: "9px" }}
          >
            <AddIcon />
            Create Invoice
          </Button>
          <br />
          <br />
        </Grid>
        <Grid item align="left" xs={3}>
          <Button
            size="small"
            variant="contained"
            onClick={handleClickMyPaymentRightCard}
            sx={{ bgcolor: "#1E90FF", paddingRight: "9px" }}
          >
            Payments
          </Button>
        </Grid>
        <Grid item align="right" xs={6}>
          <TextField
            className="col-12 input-box"
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
            sx={{ minWidth: 130, mt: { xs: 0.5, md: 0 }, mr: 1 }}
          />
        </Grid>

        <Grid
          container
          sx={{ paddingLeft: "16px", paddingBottom: "25px", m: 0 }}
        >
          <Grid item onClick={handleClickInvoiceDashboardRightCard}>
            <Button
              variant="contained"
              sx={{
                marginTop: "8px",
                boxShadow: 0,
                bgcolor: "white",
                color: "black",
                paddingRight: "9px",
                mr: 1,
                ":hover": {
                  color: "#CD2A1C",
                  background: "#EFDCF9",
                  boxShadow: 2,
                },
              }}
            >
              Dashboard
            </Button>
          </Grid>
          <Grid item onClick={handleClickSalesInvoiceRightCard}>
            <Button
              variant="contained"
              sx={{
                marginTop: "8px",
                boxShadow: 0,
                bgcolor: "white",
                color: "black",
                paddingRight: "9px",
                mr: 1,
                ":hover": {
                  color: "#CD2A1C",
                  background: "#EFDCF9",
                  boxShadow: 2,
                },
              }}
            >
              My Invoice
            </Button>
          </Grid>
          <Grid item onClick={handleClickSalesPendingInvoiceRightCard}>
            <Button
              variant="contained"
              sx={{
                marginTop: "8px",
                boxShadow: 0,
                bgcolor: "white",
                color: "black",
                paddingRight: "9px",
                mr: 1,
                ":hover": {
                  color: "#CD2A1C",
                  background: "#EFDCF9",
                  boxShadow: 2,
                },
              }}
            >
              Pending Invoice
            </Button>
          </Grid>
          <Grid item align="right" sx={{ ml: "160px" }} xs={3}>
            <FormControl className="col-sm-2 mt-1" sx={{ width: "100%" }}>
              <Autocomplete
                disablePortal
                className="search-select"
                getOptionLabel={(option) => option.filter}
                options={dropDownLists}
                renderInput={(params) => (
                  <TextField {...params} placeholder="filter" />
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Div
        sx={{ display: showSalesInvoiceRightCard === true ? "block" : "none" }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ bgcolor: "#1B416B" }}>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  Invoice Date
                  <ArrowUpwardIcon />
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  Code
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  Customer Name
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  Customer PO NO.
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  Order Code
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  Due Date
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  Sales Person
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  Total Value
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  Approval Status
                </TableCell>
                <TableCell sx={{ color: "#FEFEFE" }} align="center">
                  <SettingsIcon />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.invdate}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.invdate}
                  </TableCell>
                  <TableCell align="center">{row.code}</TableCell>
                  <TableCell align="center" sx={{ color: "#304995" }}>
                    {row.custname}
                  </TableCell>
                  <TableCell align="center">{row.contpono}</TableCell>
                  <TableCell align="center">{row.ordercode}</TableCell>
                  <TableCell align="center">{row.duedate}</TableCell>
                  <TableCell align="center">{row.salespers}</TableCell>
                  <TableCell align="center">{row.totval}</TableCell>
                  <TableCell align="center">{row.appstatus}</TableCell>

                  <TableCell align="center">
                    <MoreVertIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Div>
      <Div
        sx={{
          display: showSalesPendingInvoiceRightCard === true ? "block" : "none",
        }}
      >
        <SalesPendingInvoiceRightCard />
      </Div>
      <Div
        sx={{
          display: showInvoiceDashboardRightCard === true ? "block" : "none",
        }}
      >
        <InvoiceDashboardRightCard />
      </Div>
      </Card>
      <Div
        sx={{
          display: showMyPaymentRightCard === true ? "block" : "none",
        }}
      >
        <SalesMyPaymentRightCard />
      </Div>
    </>
  );
};

export default SalesInvoiceRightCard;
