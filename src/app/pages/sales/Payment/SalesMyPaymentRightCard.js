import React from 'react';
import { Grid, Typography, TextField, Card, Button, Autocomplete, FormControl, Dialog, DialogContent, DialogTitle,IconButton } from "@mui/material";
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
import Div from "@jumbo/shared/Div";
import { InputAdornment, Avatar} from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import {CancelOutlined} from "@mui/icons-material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import SalesPendingInvoiceRightCard from '../Invoice/SalesPendingInvoiceRightCard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

function createData(date, invno, payno, custname, paymode, payamt, transdes) {
    return {date, invno, payno, custname, paymode, payamt, transdes};
  }
  
  const rows = [
    createData('01 Jan 2022','INV001', 'PAYM001','vitae','Online',1200, 'Software Purchase', ),
    createData('01 Jan 2022','INV002', 'PAYM002','vitae','Online',2000, 'Software Purchase', ),
    createData('01 Jan 2022','INV003', 'PAYM003','lorem','Online',1500, 'Software Purchase',),
    createData('01 Jan 2022','INV004', 'PAYM004','rutrum ','Online',1330, 'Software Purchase',),
    createData('01 Jan 2022','INV005', 'PAYM005','tincidunt ','Online',4000, 'Software Purchase',),
    createData('01 Jan 2022','INV006', 'PAYM006','Quisque','Online',500, 'Software Purchase',),
    createData('01 Jan 2022','INV007', 'PAYM007','aliquam','Online',2000, 'Software Purchase',),
    createData('01 Jan 2022','INV008', 'PAYM008','Pellentesque','Online',2400, 'Software Purchase',),
    createData('01 Jan 2022','INV009', 'PAYM009','Anita','Cheque',4300, 'Software Purchase',),
    createData('01 Jan 2022','INV010', 'PAYM010','Catalina','Cheque',1200, 'Software Purchase',),
    createData('01 Jan 2022','INV011', 'PAYM011','Diệp','Cheque',750, 'Software Purchase',),
    createData('01 Jan 2022','INV012', 'PAYM012','Pejo','Cheque',4300, 'Software Purchase', ),,
    createData('01 Jan 2022','INV013', 'PAYM013','Eshe','Cheque',3400, 'Software Purchase',),
    createData('01 Jan 2022','INV014', 'PAYM014','Yanina','Cheque',1290, 'Software Purchase',),
    createData('01 Jan 2022','INV015', 'PAYM015','Othman','Cheque',2300, 'Software Purchase',),
    createData('01 Jan 2022','INV016', 'PAYM016','Ethelyn','Cheque',2200, 'Software Purchase',)
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
  

const SalesMyPaymentRightCard = () => {

  const [openAddContact, setOpenCreateAccount] = useState(false);

  const handleCreateAccount = () => {
    setOpenCreateAccount(true);
  };

  const [showSalesInvoiceRightCard, setShowSalesInvoiceRightCard] = useState(true);
  const [showSalesPendingInvoiceRightCard, setShowSalesPendingInvoiceRightCard] = useState(false);

  const handleClickSalesInvoiceRightCard = () => {
    setShowSalesInvoiceRightCard(true);
    setShowSalesPendingInvoiceRightCard(false);
  };

  const handleClickSalesPendingInvoiceRightCard = () => {
    setShowSalesInvoiceRightCard(false);
    setShowSalesPendingInvoiceRightCard(true);
  };


  return (
    <>
    <Card sx={{px:1, py:2, borderRadius:"10px"}}>
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
          Create Invoice
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
                  placeholder="Invoice No"
                  variant="outlined"
                />
            <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Customer Code"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermContactCalendarIcon/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Order No."
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Packing No."
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Invoice Amount"
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Net Amount"
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Discount Amount"
                  variant="outlined"
                />
            </Grid>
            <Grid item xs={6}>
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Invoice Date"
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
                  placeholder="Order Date"
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Packing List Date"
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Tax Amount"
                  variant="outlined"
                />
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Freight Cost"
                  variant="outlined"
                />
            </Grid>
          </Grid>
        </Card>
        <br/>
          <Card className='border-card'>
          <Typography variant='h3' sx={{pl:1}}>Invoice Details</Typography>
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
                  placeholder="Product Name"
                  variant="outlined"
                />
                <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Quantity"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Dispatch No."
                  variant="outlined"
                />
                <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="UOM"
                  variant="outlined"
                />
                <TextField
                sx={{'& fieldset': {borderRadius: '30px',},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Amount"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container className="border-card" sx={{ background: "#FEFFEA",p:2}}>
              <Grid item sx={{p:'3px'}}>
                <Typography sx={{color:"#7D7D7D"}}>Item Code</Typography>
                <Typography sx={{fontWeight: 600}}>ITEM001</Typography>
              </Grid>
              <Grid item sx={{p:'3px'}}>
              <Typography sx={{color:"#7D7D7D"}}>Item Name</Typography>
                <Typography sx={{fontWeight: 600}}>Maecenas blandit vel purus</Typography>
              </Grid>
              <Grid item sx={{p:'3px'}}>
              <Typography sx={{color:"#7D7D7D"}}>UOM</Typography>
                <Typography sx={{fontWeight: 600}}>Mtrs.</Typography>
              </Grid>
              <Grid item sx={{p:'1px'}}>
                <Typography sx={{color:"#7D7D7D"}}>Unit Price</Typography>
                <Typography sx={{fontWeight: 600}}>₹55.00</Typography>
              </Grid>
              <Grid item sx={{p:'1px'}}>
                <Typography sx={{color:"#7D7D7D"}}>Quantity</Typography>
                <Typography sx={{fontWeight: 600}}>100</Typography>
              </Grid>
              <Grid item sx={{p:'1px'}}>
                <Typography sx={{color:"#7D7D7D"}}>Amount</Typography>
                <Typography sx={{fontWeight: 600}}>₹5500</Typography>
              </Grid>
              <Grid item sx={{p:'1px'}}>
                <EditIcon sx={{color:"#007BFF"}}/>
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
        <Grid container spacing={2}>
        <Grid item>
          <Button size='small' variant="contained"
          onClick={handleCreateAccount}
          sx={{ bgcolor: "#1E90FF",paddingRight: "9px"
          }}><AddIcon/>Create Payments</Button>
          <br/>
          <br/>

        </Grid>
        <Grid item  align="left" xs={3}>
        <Button size='small' variant="contained"
          onClick={handleCreateAccount}
          sx={{ bgcolor: "#1E90FF",paddingRight: "9px"
          }}>Invoice</Button>
        </Grid>
        <Grid item align="right" xs={6}>
        <TextField className="col-12 input-box" id="outlined-search" type="search" placeholder="Search..."
              InputProps={{startAdornment: (<InputAdornment position="start">
                <HiOutlineSearch size={20} />
              </InputAdornment>),}}
          sx={{ minWidth: 130, mt: { xs: 0.5, md: 0 }, mr: 1 }} />
          </Grid>
          
          <Grid container sx={{ paddingLeft: "16px",paddingBottom: "25px", m: 0 }}>
          
            <Grid item>
            <Typography variant="h3" sx={{ paddingRight: "16px", paddingTop: "15px"}}>Dashboard</Typography>
            </Grid>
            <Grid item onClick={handleClickSalesInvoiceRightCard}>
            <Button variant="contained"  sx={{ marginTop: "8px", boxShadow: 0,
            bgcolor:"white", color:"black",paddingRight: "9px", mr:1,":hover":{ color:"#CD2A1C",background:"#EFDCF9",boxShadow: 2}
          }}>My Payments</Button>
            </Grid>
            <Grid item onClick={handleClickSalesPendingInvoiceRightCard}>
            <Button variant="contained" sx={{ marginTop: "8px", boxShadow: 0,
            bgcolor:"white", color:"black",paddingRight: "9px", mr:1,":hover":{ color:"#CD2A1C",background:"#EFDCF9",boxShadow: 2}
          }}>Pending Payments</Button>
            </Grid>
            <Grid item align="right" sx={{ml:"160px"}} xs={3}>
            <FormControl
              className="col-sm-2 mt-1"
              sx={{ width: "100%" }}
            >
              <Autocomplete
                disablePortal
                className="search-select"
                getOptionLabel={(option) => option.filter}
                options={dropDownLists}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="filter"
                  />
                )}
              />
            </FormControl>
            </Grid>
          </Grid>
        

    </Grid>
        {/* <Div  sx={{display: showSalesInvoiceRightCard === true ? "block" : "none"}}> */}
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#1B416B' }}>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Date<ArrowUpwardIcon/></TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Invoice No.</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Payment No.</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer Name</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Pay Mode</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Payment Amount</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Transaction Description</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center"><SettingsIcon/></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.invno}</TableCell>
                    <TableCell align="center">{row.payno}</TableCell>
                    <TableCell align="center" sx={{color:"#304995"}}>{row.custname}</TableCell>
                    <TableCell align="center">{row.paymode}</TableCell>
                    <TableCell align="center">{row.payamt}</TableCell>
                    <TableCell align="center">{row.transdes}</TableCell>

                    <TableCell align="center"><MoreVertIcon/></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        {/* </Div> */}
        {/* <Div  sx={{display: showSalesPendingInvoiceRightCard === true ? "block" : "none"}}>
            <SalesPendingInvoiceRightCard/>
        </Div> */}
        </Card>
    </>
  )
}

export default SalesMyPaymentRightCard;

