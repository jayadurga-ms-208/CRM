import { Grid, Typography } from '@mui/material'
import React from 'react'

const MyActivities = () => {
  return (
    <Grid className='border-card' container spacing={2} sx={{borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",}}>
        <Grid item xs={12}>
            <Typography variant='h6'sx={{fontSize:"14px",lineHeight:"16px",color:"black",fontWeight:"600"}}>My Activites</Typography>
        </Grid>
        <Grid item xs={6} >
            <Typography variant='body1'sx={{fontSize:"14px",color:"black",fontWeight:"500",whiteSpace:"nowrap"}}>Total mails sent</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography variant='body1'sx={{fontSize:"16px",color:"black",fontWeight:"600",pl:3}}>150</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='body1'sx={{fontSize:"14px",color:"black",fontWeight:"500",whiteSpace:"nowrap"}}>Calls made</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='body1'sx={{fontSize:"16px",color:"black",fontWeight:"600",pl:3}}>100</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='body1'sx={{fontSize:"14px",color:"black",fontWeight:"500",whiteSpace:"nowrap"}}>Client meetings</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='body1'sx={{fontSize:"16px",color:"black",fontWeight:"600",pl:3}}>50</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='body1'sx={{fontSize:"14px",color:"black",fontWeight:"500",whiteSpace:"nowrap"}}>Office meetings</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='body1'sx={{fontSize:"16px",color:"black",fontWeight:"600",pl:3}}>50</Typography>
        </Grid>

    </Grid>
  )
}

export default MyActivities;