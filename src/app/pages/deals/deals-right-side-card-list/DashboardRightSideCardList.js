import React from 'react';
import Div from "@jumbo/shared/Div";
import {Card, Grid, Typography, Button} from "@mui/material";
import DoubleBarChart from './DoubleBarChart';

const DashboardRightSideCardList = () => {
  return (
    <>
    {/* <Grid container className="border-card"> */}
    <Grid item xs={12} sx={{pr:2,borderRadius:"10px"}}>
    <Typography  variant="h5" align="left" sx={{ fontWeight:600, fontSize:"14px",color: "#000000",pl:4}}>Deals</Typography>

    <Grid container>
      <Grid item xs={9} align="center" className="border-card" sx={{width: "722px",height: "160px",background: "#FEFEFE",borderRadius:"8px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
      <br/>
        <Grid container >
          <Grid item xs={2} spacing={0.3} className="border-card" sx={{mx:'8px',borderRadius:"6px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}  >
            <Card align="center">
              <Typography  variant="h5" align="center" sx={{ fontWeight:500, fontSize:"10px",color: "#746C70",mb:"15px",}}>Year To Date</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#000000"}}>130</Typography>
                
            </Card>
          </Grid>
          <Grid item xs={2} spacing={0.3} className="border-card" sx={{mx:'8px',borderRadius:"6px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}  >
            <Card align="center">
              <Typography  variant="h5" align="center" sx={{ fontWeight:500, fontSize:"10px",color: "#746C70",mb:"15px",}}>Month To Date</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#000000"}}>10</Typography>
                
            </Card>
          </Grid>
          <Grid item xs={2} spacing={0.3} className="border-card" sx={{mx:'8px',borderRadius:"6px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}  >
            <Card align="center">
              <Typography  variant="h5" align="center" sx={{ fontWeight:500, fontSize:"10px",color: "#746C70",mb:"15px",}}>Sales</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#000000"}}>2</Typography>
                
            </Card>
          </Grid>
          <Grid item xs={2} spacing={0.3} className="border-card" sx={{mx:'8px',borderRadius:"6px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}  >
            <Card align="center">
              <Typography  variant="h5" align="center" sx={{ fontWeight:500, fontSize:"10px",color: "#746C70",mb:"15px",}}>Open Deals</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#000000"}}>45</Typography>
                
            </Card>
          </Grid>
          <Grid item xs={2} spacing={0.3} className="border-card" sx={{mx:'8px',borderRadius:"6px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} >
            <Card align="center">
              <Typography  variant="h5" align="center" sx={{ fontWeight:500, fontSize:"10px",color: "#746C70",mb:"15px",}}>Closed Deals</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#000000"}}>20</Typography>
                
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={0.2}> </Grid>
      <Grid item xs={2.8} spacing={2} className="border-card" sx={{width: "305px",height: "160px",borderRadius:6,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
      <Typography  variant="h5" sx={{ fontWeight:600, fontSize:"14px",color: "#000000"}}>My Activities</Typography>
      <br/>
        <Grid container>
          <Grid item xs={6}>
            <Typography  variant="h5" align="left" sx={{ fontWeight:400, fontSize:"10px",color: "#000000"}}>Total Mails Sent</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography  variant="h5" align="right" sx={{ fontWeight:600, fontSize:"11px",color: "#000000"}}>150</Typography> 
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography  variant="h5" align="left" sx={{ fontWeight:400, fontSize:"10px",color: "#000000"}}>Calls Made</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography  variant="h5" align="right" sx={{ fontWeight:600, fontSize:"11px",color: "#000000"}}>100</Typography> 
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography  variant="h5" align="left" sx={{ fontWeight:400, fontSize:"10px",color: "#000000"}}>Cliet Settings</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography  variant="h5" align="right" sx={{ fontWeight:600, fontSize:"11px",color: "#000000"}}>50</Typography> 
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <br/>
    <Typography  variant="h5" align="left" sx={{ fontWeight:600, fontSize:"14px",color: "#000000",pl:4}}>MonthWise Converted to deals</Typography>
    <Grid container>
          <Grid item xs={12} className="border-card" sx={{height:"380px",width:"500px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
            <DoubleBarChart />
          </Grid>
    </Grid>

    </Grid>
    {/* </Grid> */}
    </>

  )
}

export default DashboardRightSideCardList;