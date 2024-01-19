import Div from "@jumbo/shared/Div";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const TemperatureTable = () => {
  return (
    <>
      <Div className="border-card" sx={{borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <Typography variant="h4" sx={{ color: "#746C70" }}>
          Month
        </Typography>
        <Grid container >
          <Grid item xs={2}>
            <Typography variant="h3" sx={{fontSize:"18px"}}>Dec</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h3" sx={{fontSize:"18px"}}>Cold</Typography>
            <br />
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              200
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h3"  sx={{fontSize:"18px"}}>Warm</Typography>
            <br />
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              10
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h3" sx={{fontSize:"18px"}}>Hot</Typography>
            <br />
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              40
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h3" sx={{fontSize:"18px"}}>Now</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h3" sx={{fontSize:"18px"}}>Change</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h3" sx={{fontSize:"18px"}}>Cold(250)</Typography>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                color: "#9ACEEB",
                background: "#9ACEEB",
                minWidth: "70px",
                height: "11px",
                border: "1px solid",
              }}
            ></div>
            <br />
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              20
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                color: "#4DA9DC",
                background: "#4DA9DC",
                minWidth: "70px",
                height: "11px",
                border: "1px solid",
              }}
            ></div>
            <br />
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              60
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                color: "#227AAB",
                background: "#227AAB",
                width: "70px",
                height: "11px",
                border: "1px solid",
              }}
            ></div>
            <br />
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              200
            </Typography>
          </Grid>
          <Grid item xs={"2"}>
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              230
            </Typography>
          </Grid>
          <Grid item xs={"2"}>
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              -18%
            </Typography>
          </Grid>
          <Grid item xs={"2"}>
            <Typography variant="h4" sx={{fontSize:"18px"}}>Warm(100)</Typography>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                color: "#FFD68A",
                background: "#FFD68A",
                Width: "60px",
                height: "11px",
                border: "1px solid",
              }}
            ></div>
            <br />
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              10
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                color: "#FFB52E",
                background: "#FFB52E",
                minWidth: "70px",
                height: "11px",
                border: "1px solid",
              }}
            ></div>
            <br />
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              10
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                color: "#FFA500",
                background: "#FFA500",
                width: "70px",
                height: "11px",
                border: "1px solid",
              }}
            ></div>
            <br />
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              90
            </Typography>
          </Grid>
          <Grid item xs={"2"}>
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              80
            </Typography>
          </Grid>
          <Grid item xs={"2"}>
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              -18%
            </Typography>
          </Grid>
          <Grid item xs={"2"}>
            <Typography variant="h3"  sx={{fontSize:"18px"}}>Cold(250)</Typography>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                color: "#FF8A8A",
                background: "#FF8A8A",
                minWidth: "70px",
                height: "11px",
                border: "1px solid",
              }}
            ></div>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                color: "#FF2E2E",
                background: "#FF2E2E",
                minWidth: "70px",
                height: "11px",
                border: "1px solid",
              }}
            ></div>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                color: "#DB161B",
                background: "#DB161B",
                width: "70px",
                height: "11px",
                border: "1px solid",
              }}
            ></div>
          </Grid>
          <Grid item xs={"2"}>
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              230
            </Typography>
          </Grid>
          <Grid item xs={"2"}>
            <Typography variant="h6" sx={{ color: "#746C70" }}>
              -18%
            </Typography>
          </Grid>
        </Grid>
      </Div>
    </>
  );
};

export default TemperatureTable;
