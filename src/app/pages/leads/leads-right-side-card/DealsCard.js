import { Grid, Typography } from '@mui/material'
import React from 'react'

const DealsCard = () => {
  return (
    <Grid className='border-card'  container  my={2} spacing={0} columns={16} sx={{borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)", backgroundColor:"white"}}>
        <Grid item xs sx={{p:1}}>
            <Typography variant='h6' sx={{ fontSize:"14px",color:"#746C70"}}>Month</Typography> 
            <Typography variant='h1' sx={{fontSize:"18px"}}>Dec</Typography>
        </Grid>
        <Grid item xs sx={{p:1}}>
            <Typography variant='h6' sx={{fontSize:"14px",color:"#746C70"}}>No of deals</Typography> 
            <Typography variant='h1' sx={{fontSize:"18px"}}>41</Typography>
        </Grid>
        <Grid item xs sx={{p:1}} >
            <Typography variant='h6' sx={{fontSize:"14px",color:"#746C70"}}>Deal Amount</Typography> 
            <Typography variant='h1' sx={{fontSize:"18px"}}>₹4,50,100</Typography>
        </Grid>
        <Grid item xs sx={{p:1}}>
            <Typography variant='h6' sx={{fontSize:"14px",color:"#746C70",whiteSpace:"normal"}}>Leads Converted to Sales</Typography> 
            <Typography variant='h1' sx={{ textAlign:"justify",fontSize:"18px"}}>  5</Typography>
        </Grid>
        <Grid item xs sx={{p:1}}>
            <Typography variant='h6' sx={{fontSize:"14px",color:"#746C70"}}>Sales Amount</Typography> 
            <Typography variant='h1' sx={{fontSize:"18px"}}>₹12,50,100</Typography>
        </Grid>
    </Grid>
  )
}

export default DealsCard;