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
// import AddIcon from '@mui/icons-material/Add';
// import SearchIcon from '@mui/icons-material/Search';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Div from "@jumbo/shared/Div";
// import { InputAdornment, Avatar} from '@mui/material';
// import { HiOutlineSearch } from 'react-icons/hi';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useState } from "react";
// import {CancelOutlined} from "@mui/icons-material";
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LanguageIcon from '@mui/icons-material/Language';
// import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';

function createData(invdate, code, custname, contpono, ordercode, duedate, salespers, totval, appstatus) {
    return {invdate, code, custname, contpono, ordercode, duedate, salespers, totval, appstatus};
  }
  
  const rows = [
    createData('01 Jan 2022','DIS0001','vitae', 'CUSTPO001', 'ORD001', '03 Jan 2022', 'Fergus',1200, 'Approved', ),
    createData('01 Jan 2022','DIS0002','vitae', 'CUSTPO002', 'ORD002', '03 Jan 2022', 'Agata',2000, 'Approved', ),
    createData('01 Jan 2022','DIS0003','lorem', 'CUSTPO003', 'ORD003', '03 Jan 2022', 'Jeronim',1500, 'Approved',),
    createData('01 Jan 2022','DIS0004','rutrum ', 'CUSTPO004', 'ORD004', '03 Jan 2022', 'Michi',1330, 'Approved',),
    createData('01 Jan 2022','DIS0005','tincidunt ', 'CUSTPO005', 'ORD005', '03 Jan 2022','Arthur',4000, 'Approved',),
    createData('01 Jan 2022','DIS0006','Quisque', 'CUSTPO006', 'ORD006', '03 Jan 2022', 'Pryderi',500, 'Approved',),
    createData('01 Jan 2022','DIS0007','aliquam', 'CUSTPO007', 'ORD007', '03 Jan 2022', 'Raphaëlle',2000, 'Approved',),
    createData('01 Jan 2022','DIS0008','Pellentesque', 'CUSTPO008', 'ORD008', '03 Jan 2022','Anabelle',2400, 'Approved',),
    createData('01 Jan 2022','DIS0009','Anita', 'Þórr', 'CUSTPO009', 'ORD009', '03 Jan 2022', 'Anita',4300, 'Approved',),
    createData('01 Jan 2022','DIS0010','Catalina', 'CUSTPO010', 'ORD010', '03 Jan 2022', 'Naama',1200, 'Approved',),
    createData('01 Jan 2022','DIS0011','Diệp', 'CUSTPO011', 'ORD011', '03 Jan 2022', 'Vinícius',750, 'Approved',),
    createData('01 Jan 2022','DIS0012','Pejo', 'CUSTPO012', 'ORD012', '03 Jan 2022', 'Pinja',4300, 'Approved', ),
    createData('01 Jan 2022','DIS0013','Eshe', 'CUSTPO013', 'ORD013', '03 Jan 2022', 'Kreka',3400, 'Approved',),
    createData('01 Jan 2022','DIS0014','Yanina', 'CUSTPO014', 'ORD014', '03 Jan 2022', 'Howie',1290, 'Approved',),
    createData('01 Jan 2022','DIS0015','Othman', 'CUSTPO0015', 'ORD015', '03 Jan 2022', 'Gaea',2300, 'Approved',),
    createData('01 Jan 2022','DIS0016','Ethelyn', 'CUSTPO016', 'ORD016', '03 Jan 2022', 'Maredudd',2200, 'Approved',),
  ];


const SalesPendingInvoiceRightCard = () => {


  return (
    <>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#1B416B' }}>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Invoice Date<ArrowUpwardIcon/></TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Code</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer Name</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer PO NO.</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Order Code</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Due Date</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Sales Person</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Total Value</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Approval Status</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center"><SettingsIcon/></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.invdate}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">{row.invdate}</TableCell>
                    <TableCell align="center">{row.code}</TableCell>
                    <TableCell align="center" sx={{color:"#304995"}}>{row.custname}</TableCell>
                    <TableCell align="center">{row.contpono}</TableCell>
                    <TableCell align="center">{row.ordercode}</TableCell>
                    <TableCell align="center">{row.duedate}</TableCell>
                    <TableCell align="center">{row.salespers}</TableCell>
                    <TableCell align="center">{row.totval}</TableCell>
                    <TableCell align="center">{row.appstatus}</TableCell>
                    <TableCell align="center"><MoreVertIcon/></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </>
  )
}

export default SalesPendingInvoiceRightCard;

