import React from "react";
import Sourcechart from "./charts/Sourcechart";
import Industrypie from "./charts/Industrypie";
import Statuschart from "./charts/Statuschart";
import Industrychart from "./charts/Industrychart";
import { Card, Grid, Typography } from "@mui/material";
import Pipeline from "./charts/Pipeline";
import "../accounts.css";

const AccountsHome = () => {
  return (
    <>
      <Card sx={{ p: 1,pt:1.5 }}>
        <Typography className="accounts-home-heading" style={{paddingLeft:".5rem",paddingBottom:".5rem"}}>
          Accounts
        </Typography>
        <Grid container pl={2} pr={1} pb={1}  columnSpacing={3} rowSpacing={3} alignItems={"center"}>
          <Grid item xs={8}>
            <Typography className="accounts-home-heading">
              Leads by Source (Current Year)
            </Typography>
            <Card className="accounts-home-card">
              <Sourcechart />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Typography className="accounts-home-heading">
              Account by Industry
            </Typography>
            <Card className="accounts-home-card">
              <Industrypie />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Typography className="accounts-home-heading">
              Leads by Status
            </Typography>
            <Card className="accounts-home-card">
              <Statuschart />
            </Card>
          </Grid>
          <Grid item xs={6}>
          <Typography className="accounts-home-heading">
          Leads by Industry
            </Typography>
            <Card className="accounts-home-card">
              <Industrychart />
            </Card>
          </Grid>
          <Grid item xs={3.5}></Grid>
          <Grid item xs>
            <Typography className="accounts-home-heading">Leads Pipeline</Typography>
            <Card className="accounts-home-card" style={{maxWidth:"353px",maxHeight:"297px"}}>
              <Pipeline />
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default AccountsHome;
