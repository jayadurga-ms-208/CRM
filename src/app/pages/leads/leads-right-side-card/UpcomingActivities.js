import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'

const UpcomingActivities = () => {
  return (
  <Grid className='border-card'  container rowSpacing={3} sx={{borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
    <Grid item xs={12} >
    <Typography variant='h4'sx={{fontsize:"14px",fontWeight:"600"}}>Upcoming activities</Typography>
    </Grid>
    <br/>
    <Grid item xs={4}>
    <Avatar sx={{ bgcolor: "#757500",fontSize: "10px",textAlign:"center" }} > 16 Dec 2021</Avatar>
    </Grid>
    <Grid item xs={8}>
    <Typography variant="h5" sx={{fontsize:"14px",whiteSpace:"nowrap"}}> To Send the Proposal</Typography>
    </Grid>
    <Grid item xs={4}>
    <Avatar sx={{ bgcolor: "#972900",fontSize: "10px",textAlign:"center" }} > 17 Dec 2021</Avatar>
    </Grid>
    <Grid item xs={8}>
    <Typography variant="h5" sx={{fontsize:"14px",whiteSpace:"nowrap"}}> To Send the Mail</Typography>
    </Grid>
    <Grid item xs={4}>
    <Avatar sx={{ bgcolor: "#008CC5",fontSize: "10px",textAlign:"center" }} > 18 Dec 2021</Avatar>
    </Grid>
    <Grid item xs={8}>
    <Typography variant="h5" sx={{fontsize:"14px",whiteSpace:"nowrap"}}> To attend the meeting</Typography>
    </Grid>
    <Grid item xs={4}>
    <Avatar sx={{ bgcolor: "#FF7F50",fontSize: "10px", textAlign:"center"}} > 19 Dec 2021</Avatar>
    </Grid>
    <Grid item xs={8}>
    <Typography variant="h5" sx={{fontsize:"14px",whiteSpace:"nowrap"}}> To visit the client</Typography>
    </Grid>
    <Grid item xs={4}>
    <Avatar sx={{ bgcolor: "#454D66",fontSize: "10px",textAlign:"center" }} > 20 Dec 2021</Avatar>
    </Grid>
    <Grid item xs={8}>
    <Typography variant="h5" sx={{fontsize:"14px",whiteSpace:"nowrap"}}> To visit the client</Typography>
    </Grid>
   </Grid>
   
  )
}

export default UpcomingActivities;