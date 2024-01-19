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
import ViewDayIcon from '@mui/icons-material/ViewDay';
import EventIcon from '@mui/icons-material/Event';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function createData(date, enquiryno, custname, contpers, salespers, totquantity) {
    return {date, enquiryno, custname, contpers, salespers, totquantity};
  }
  
  const rows = [
    createData('01 Jan 2022','ENQ0001','vitae', 'Fergus','Ásdís',1200 ),
    createData('01 Jan 2022','ENQ0002','vitae', 'Agata', 'Gunnvor',2000 ),
    createData('01 Jan 2022','ENQ0003','lorem', 'Jeronim', 'Ida',1500),
    createData('01 Jan 2022','ENQ0004','rutrum ', 'Michi', 'Tamrat',1330),
    createData('01 Jan 2022','ENQ0005','tincidunt ', 'Monte', 'Arthur',4000),
    createData('01 Jan 2022','ENQ0006','Quisque', 'Pryderi', 'Katlyn',500),
    createData('01 Jan 2022','ENQ0007','aliquam', 'Raphaëlle','Fanny',2000),
    createData('01 Jan 2022','ENQ0008','Pellentesque', 'Loan', 'Anabelle',2400),
    createData('01 Jan 2022','ENQ0009','Anita', 'Þórr', 'Anita',4300),
    createData('01 Jan 2022','ENQ0010','Catalina', 'Naama','Catalina',1200),
    createData('01 Jan 2022','ENQ0011','Diệp', 'Vinícius', 'Diệp',750),
    createData('01 Jan 2022','ENQ0012','Pejo', 'Pinja', 'Pejo',4300 ),
    createData('01 Jan 2022','ENQ0013','Eshe', 'Kreka', 'Eshe',3400),
    createData('01 Jan 2022','ENQ0014','Yanina', 'Howie', 'Yanina',1290),
    createData('01 Jan 2022','ENQ0015','Othman', 'Gaea','Othman',2300),
    createData('01 Jan 2022','ENQ0016','Ethelyn', 'Maredudd','Ethelyn',2200),
  ];

  const dropDownLists = [
    {
        type:'1',
        con_pers:'ravi',
    },
    {
      type:'2',
      con_pers:'ani',
    },
    {
      type:'3',
      con_pers:'kevin',
    },
  ];

const EnquirydRightCard = () => {

  const [openAddContact, setOpenCreateAccount] = useState(false);

  const handleCreateAccount = () => {
    setOpenCreateAccount(true);
  };

  return (
    <>
    <Card sx={{borderRadius:"5px"}}>
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
          Create Enquiry
          <IconButton
                sx={{ float: "right" }}
                onClick={() => setOpenCreateAccount(false)}
              ><CancelOutlined />
              </IconButton>
        </DialogTitle>
        <DialogContent sx={{backgroundColor:"rgba(141, 119, 190, 0.5)"}}>
        <br/>
          <Card sx={{borderRadius:"10px"}}>
            <Grid container spacing={2} sx={{pl:1,pr:1,pt:1 }}>
            <Grid item xs={6}>
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',mr:1,},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Customer Name"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SupportAgentIcon sx={{color:"#6C63FF"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                />
            <FormControl
              className="col-sm-2 mt-1"
              sx={{ width: "100%" }}
            >
              <Autocomplete
              sx={{'& fieldset': {borderRadius: '30px',mr:1},}}
                disablePortal
                className="search-select"
                getOptionLabel={(option) => option.type}
                options={dropDownLists}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Type"
                  />
                )}
              />
            </FormControl>
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',mr:1},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Expiry Date"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon sx={{color:"#6C63FF"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                />
            </Grid>
            <Grid item xs={6}>
            <FormControl
              className="col-sm-2 mt-1"
              sx={{ width: "100%" }}
            >
              <Autocomplete
              sx={{'& fieldset': {borderRadius: '30px',mr:1},}}
                disablePortal
                className="search-select"
                getOptionLabel={(option) => option.con_pers}
                options={dropDownLists}
                renderInput={(params) => (
                  <TextField
                  
                    {...params}
                    placeholder="Contact Person"
                  />
                )}
              />
            </FormControl>
            <TextField
                  sx={{'& fieldset': {borderRadius: '30px',mr:1},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Sales Person"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonPinIcon sx={{color:"#6C63FF"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                />
            </Grid>
          </Grid>
          <br/>
          </Card>
          <br/>
          <Card sx={{p:2, borderRadius:"10px"}}>
            <Typography variant='h2' align="center">Enquiry Details</Typography>
            <Grid container spacing={2} sx={{p:1}}>
              <Grid item xs={6}>
              <TextField
                  sx={{'& fieldset': {borderRadius: '30px',mr:1},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Product ID"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ViewDayIcon sx={{color:"#6C63FF"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                />
                <TextField
                  sx={{'& fieldset': {borderRadius: '30px',mr:1},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="UOM"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon sx={{color:"#6C63FF"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                  sx={{'& fieldset': {borderRadius: '30px',mr:1},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Quantity"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon sx={{color:"#6C63FF"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                />
                <TextField
                  sx={{'& fieldset': {borderRadius: '30px',mr:1},}}
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Description"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WaterfallChartIcon sx={{color:"#6C63FF"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <br/>
            <Div>
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
            </Div>
            <Grid container className="border-card" sx={{ background: "#FEFFEA",p:2, borderRadius:"10px"}}>
              <Grid item sx={{p:'11px'}}>
                <Typography sx={{color:"#7D7D7D"}}>Product ID</Typography>
                <Typography sx={{fontWeight: 600}}>PRODUCT001</Typography>
              </Grid>
              <Grid item sx={{p:'6px'}}>
              <Typography sx={{color:"#7D7D7D"}}>UOM</Typography>
                <Typography sx={{fontWeight: 600}}>Mtrs.</Typography>
              </Grid>
              <Grid item sx={{p:'6px'}}>
              <Typography sx={{color:"#7D7D7D"}}>Description</Typography>
                <Typography sx={{fontWeight: 600}}>Maecenas blandit vel purus</Typography>
              </Grid>
              <Grid item sx={{p:'6px'}}>
                <Typography sx={{color:"#7D7D7D"}}>Quantity</Typography>
                <Typography sx={{fontWeight: 600}}>100</Typography>
              </Grid>
              <Grid item sx={{ p: "6px","&:hover": { cursor:"pointer", backgroundColor:"#E8E8E8", borderRadius:"10px" } }}>
                  <EditIcon sx={{ color: "#007BFF" }} />
                </Grid>
                <Grid item sx={{ pt: "6px",pb: "2px",pl: "2px","&:hover": { cursor:"pointer", backgroundColor:"#E8E8E8", borderRadius:"10px" } }}>
                  <DeleteIcon sx={{ color: "#DB161B" }} />
                </Grid>
            </Grid>
            <Grid container align="center" spacing={2} sx={{mt:3}}>
            <Grid item align="right" xs={6}>
              <Button size='small' variant="contained"  sx={{
              bgcolor: "#1E90FF",paddingRight: "9px",
              "&:hover":{color:"#FFFFFF",bgcolor: "#008000" }
              }}
              >Save</Button>
            </Grid>
            <Grid item align="left" xs={6}>
              <Button size='small' variant="contained"  sx={{
              bgcolor: "#FFFFFF",paddingRight: "9px", color:"#007BFF",
              "&:hover":{color:"#FFFFFF",bgcolor: "#008000" }
              }}>Clear</Button>
            </Grid>
          </Grid>
          </Card>
          <br/>
          
        </DialogContent>
      </Dialog>
        <Grid container spacing={2} sx={{pt:3, px:2}}>
        <Grid item xs={6}>
          <Button size='small' variant="contained"
          onClick={handleCreateAccount}
          sx={{ bgcolor: "#1E90FF",paddingRight: "9px"
          }}><AddIcon/>Add Enquiry</Button>
          <br/>
          <br/>

              <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
              <Button size='small' variant="contained"  sx={{
            bgcolor: "#EFDCF9",paddingRight: "9px", color:"#CD2A1C", mr:1,":hover":{background:"#EFDCF9"}
          }}>My Enquiry</Button>
          <Button
              size='small' 
              variant="contained"
              sx={{
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
              Lost Enquiries
            </Button></Typography>

          <br/>
        </Grid>
        <Grid item align="right" xs={6}>
        <TextField className="col-12 input-box" variant="standard" id="outlined-search" type="search" placeholder="Search..."
              InputProps={{startAdornment: (<InputAdornment position="start">
                <HiOutlineSearch size={20} />
              </InputAdornment>),}}
          sx={{ minWidth: 130, mt: { xs: 0.5, md: 0 }, mr: 1, width:"180px", mr:2 }} />
          </Grid>
    </Grid>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#1B416B' }}>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Date<ArrowUpwardIcon/></TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Enquiry No</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer Name</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Customer Person</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Sales Person</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Total Quantity</TableCell>
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
                    <TableCell align="center">{row.enquiryno}</TableCell>
                    <TableCell align="center">{row.custname}</TableCell>
                    <TableCell align="center">{row.contpers}</TableCell>
                    <TableCell align="center">{row.salespers}</TableCell>
                    <TableCell align="center">{row.totquantity}</TableCell>
                    <TableCell align="center"><MoreVertIcon/></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Card>
    </>
  )
}

export default EnquirydRightCard;

