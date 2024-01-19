import { Card, Grid } from "@mui/material";
import React from "react";
import StackedBarChart from "./StackedBarChart";
import UpcomingActivities from "./UpcomingActivities";
import DealsCard from "./DealsCard";
import VerticalBarChart from "./VerticalBarChart";
import TemperatureTable from "./TemperatureTable";
import LeadStageMovement from "./LeadStageMovement";
import MyActivities from "./MyActivities";
const Allign = () => {
  return (
    <Card sx={{backgroundColor:"white",p:1}}>
      <div style={{fontSize:"14px",fontWeight:"600"}}>Lead Stage Movement</div>
      <br />
      <br />
      <Grid container columnSpacing={4}>
        <Grid item xs={8}>
          <LeadStageMovement /> 
        </Grid>
        <Grid item xs={4} sx={{pt:2}}>
          <MyActivities/>
        </Grid>
      </Grid>
      <br/>
      <div style={{ paddingLeft:"0",fontSize:"14px",fontWeight:"600",paddingTop:"10"}}>Stacked Bar chart</div>
      <br />
      <Grid container columnSpacing={3}>
        <Grid item xs={8} >
          <StackedBarChart/>
          <DealsCard/>
        </Grid>
        <Grid item xs={4} paddingTop={3} paddingBottom={2}>
          <UpcomingActivities />
        </Grid>
      </Grid>
      <br/>
        <Grid container columnSpacing={3}>
        <Grid item xs={8}>
          <TemperatureTable />
        </Grid>

        <Grid item xs={4}>
          <VerticalBarChart />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Allign;
