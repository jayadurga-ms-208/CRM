import React from 'react';
import { Card, Grid, Typography,Divider } from '@mui/material';
import Div from "@jumbo/shared/Div";
// import c1 from '../../../../../public/images/users/c1.png';
// import c2 from '../../../../../public/images/users/c2.png';
// import c3 from '../../../../../public/images/users/c3.png';
// import c4 from '../../../../../public/images/usersc4.png';
// import c5 from '../../../../../public/images/users/c5.png';
// import profile from '../../../../../public/images/profile/profile.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function createData(user, client, date, amount, status, tcolor, bcolor) {
  return {user, client, date, amount, status, tcolor, bcolor};
}

const series = [
  {
    name: '',
    data: [
      { category: 'Jan', value: 10 },
      { category: 'Feb', value: 20 },
      { category: 'Mar', value: 70 },
      { category: 'Apr', value: 50 },
      { category: 'May', value: 100 },
      { category: 'Jun', value: 70 },
      { category: 'Aug', value: 85 },
      { category: 'Sep', value: 10 },
      { category: 'Oct', value: 85 },
      { category: 'Nov', value: 70 },
      { category: 'Dec', value: 85 },

    ],
  },
];

const rows = [
  createData("/images/users/c1.png",'Proin','02 Jan 2022',1000,'Paid', '#DB161B', '#F69C9E'),
  createData("/images/users/c2.png",'Proin','02 Jan 2022',1000, 'Overdue', '#FF740B', '#FACFAF'),
  createData("/images/users/c3.png",'Proin','02 Jan 2022',1000, 'Unpaid', '#C600BE', '#FFD4FB'),
  createData("/images/users/c4.png",'Proin','02 Jan 2022',1000, 'Draft', '#00006D', '#CECEFA'),
  createData("/images/users/c5.png",'Proin','02 Jan 2022',1000, 'Unpaid', '#208B10', '#CFFFC8'),
];


const InvoiceDashboardRightCard = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Card className="" sx={{bgcolor:"#8E77C3", pt:5,pr:6,pb:5, borderRadius:5}}>
            <Typography variant='h5' sx={{color:"white",pl:3}}>Client of the Month</Typography>
            <br/><br/>
            <Grid container spacing={2} sx={{bgcolor:"white", m:1,ml:3, p:1,pb:3, borderRadius:8}}>
              <Grid item >
              <img src={"/images/profile/profile.png"} alt="User" width={50}/>
              </Grid>
              <Grid item>
                <Typography variant='h5' sx={{color:"#8E77C3", pt:1}}>Roshan<br/>2000</Typography>
              </Grid>
              <Grid item>
              <Typography variant='h5' sx={{color:"#8E77C3", pt:1}}>Kumar<br/>70%</Typography>
              </Grid>
            </Grid>
            <br/>
            <Divider variant='fullWidth' sx={{bgcolor:"white", ml:3, }}/>
            <br/>
            <Typography variant='h5' sx={{color:"white",p:1, pl:3}}>Revenue Graph (YTD)</Typography>
            <br/>
            
              <LineChart width={250} height={250} stroke='white'>
                {/* <CartesianGrid stroke='white' sx={{color:"white"}} /> */}
                <XAxis dataKey="category" stroke='white' type="category" allowDuplicatedCategory={false} />
                <YAxis stroke='white' />
                
                {series.map((s) => (
                  <Line dataKey="value" data={s.data} name={s.name} key={s.name} stroke='white'/>
                ))}
              </LineChart>
           
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item>
                <Typography align="center" sx={{pl:4,pr:3,pt:4,pb:3, borderRadius:"100% 10% 10% 10% / 100% 10% 10% 10%", bgcolor:"#EFF6FD"}}>Paid<br/>50</Typography>
            </Grid>
            <Grid item>
              <Typography align="center" sx={{pl:4,pr:3,pt:4,pb:3, borderRadius:"100% 10% 10% 10% / 100% 10% 10% 10%", bgcolor:"#FDF2CD"}}>UnPaid<br/>50</Typography>
            </Grid>
            <Grid item>
              <Typography align="center" sx={{pl:4,pr:3,pt:4,pb:3, borderRadius:"100% 10% 10% 10% / 100% 10% 10% 10%", bgcolor:"#FFDFDF"}}>Overdue<br/>50</Typography>
            </Grid>
            <Grid item>
              <Typography align="center" sx={{pl:4,pr:3,pt:4,pb:3, borderRadius:"100% 10% 10% 10% / 100% 10% 10% 10%", bgcolor:"#D4FFD4"}}>Draft<br/>50</Typography>
            </Grid>
          </Grid>
          <Div sx={{pt:2}}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#1B416B' }}>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Client</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Date</TableCell>
                  <TableCell sx={{ color: '#FEFEFE' }} align="center">Amount</TableCell>
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
                    {row.client}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.amount}</TableCell>
                    <TableCell align="center"><Typography sx={{color:row.tcolor, bgcolor:row.bcolor, borderRadius:"10%"}}>{row.status}</Typography></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Div>
        </Grid>
      </Grid>
    </>
  )
}

export default InvoiceDashboardRightCard
