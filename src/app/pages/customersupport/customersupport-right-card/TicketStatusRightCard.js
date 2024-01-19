import React from 'react';
import {TextField,Typography,Card} from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';
import { InputAdornment, Avatar} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap';

function createData(user, ticname, lastchat, name, sign, priority, status, tcolor, bcolor) {
    return {user, ticname, lastchat, name, sign, priority, status, tcolor, bcolor};
  }
  
  const rows = [
    createData("/images/users/c1.png",'Proin ac augue lacus.','10 min','Ásdís', "/images/sign/s1.png",'High', 'To do', '#DB161B', '#F69C9E'),
    createData("/images/users/c2.png",'Proin ac augue lacus.','10 min','Gunnvor',  "/images/sign/s2.png", 'Medium', 'In progress', '#FF740B', '#FACFAF'),
    createData("/images/users/c3.png",'Proin ac augue lacus.','10 min','Ida',  "/images/sign/s3.png", 'Low', 'On Hold', '#C600BE', '#FFD4FB'),
    createData("/images/users/c4.png",'Proin ac augue lacus.','10 min','Tamrat',  "/images/sign/s4.png", 'Critical', 'Closed', '#00006D', '#CECEFA'),
    createData("/images/users/c5.png",'Proin ac augue lacus.','10 min','Arthur',  "/images/sign/s5.png", 'Trivial', 'Done', '#208B10', '#CFFFC8'),
    createData("/images/users/c6.png",'Proin ac augue lacus.','10 min','Katlyn', "/images/sign/s1.png", 'High', 'To do', '#DB161B', '#F69C9E'),
    createData("/images/users/c7.png",'Proin ac augue lacus.','10 min','Fanny', "/images/sign/s2.png",'Medium', 'In progress', '#FF740B', '#FACFAF'),
    createData("/images/users/c8.png",'Proin ac augue lacus.','10 min','Anabelle', "/images/sign/s3.png", 'Low', 'On Hold', '#C600BE', '#FFD4FB'),
    createData("/images/users/c1.png",'Proin ac augue lacus.','10 min','Anita', "/images/sign/s4.png", 'Critical', 'Closed', '#00006D', '#CECEFA'),
    createData("/images/users/c2.png",'Proin ac augue lacus.','10 min','Catalina', "/images/sign/s5.png",'Trivial', 'Done', '#208B10', '#CFFFC8'),
    createData("/images/users/c3.png",'Proin ac augue lacus.','10 min','Diệp', "/images/sign/s1.png", 'Critical', 'Clos1ed', '#00006D', '#CECEFA'),
  ];

const TicketStatusRightCard = () => {
  return (
    <>
    <Card sx={{px:1,py:2, borderRadius: "10px"}}>
      <Typography variant='h5' sx={{p:1}}>Ticket Status</Typography>
      <Card  sx={{ border: 1, py: 1, borderRadius: "20px" }}>
      <TextField sx={{'& fieldset': {borderRadius: '30px',mr:1}, width:'300px', p:1}} className="col-12 input-box" id="outlined-search" type="search" placeholder="Search archived chats"
              InputProps={{startAdornment: (<InputAdornment position="start">
                <HiOutlineSearch size={20} />
              </InputAdornment>),}}
           />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#1B416B' }}>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Ticket Name</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Last Chatted</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Name</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Priority</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Status</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.ticname}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                    <img src={row.user} alt="User" width={30}/>
                    {row.ticname}
                    </TableCell>
                    <TableCell align="center">{row.lastchat}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">
                    <img sx={{pr:1}} src={row.sign} alt="Sign" width={15}/>
                    {row.priority}
                    </TableCell>
                    <TableCell align="center"><Typography sx={{color:row.tcolor, bgcolor:row.bcolor, borderRadius:"10%"}}>{row.status}</Typography></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </Card>
      </Card>
    </>
  )
}

export default TicketStatusRightCard;
