import React, { useState } from "react";
import "./Home.css";
import SalesReport from "app/shared/metrics/SalesReport";
import NewArticles from "app/shared/metrics/NewArticles";
import ActiveUsers from "app/shared/metrics/ActiveUsers";
import Div from "@jumbo/shared/Div";
import BiaxialBarChart from "./chart/components/BiaxialBarChart";
import PageViews from "app/shared/metrics/PageViews";
import AppUsers from "app/shared/metrics/AppUsers";
import VerticalComposedChart from "../charts/Composed/components/VerticalComposedChart";
import EmailLists from "./email-lists/EmailLists";
import { Card, Grid, Typography } from "@mui/material";
import SocialMedias from "./SocialMedias";
import { useNavigate } from "react-router-dom";
import { HistoryIcon } from "app/icons/PngIcons";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Div
          className="container main-div"
          // style={{ display: homePage === true ? "block" : "none" }}
        >
          <SocialMedias />
          <br />

          {/* code for dashboard */}
          <div class="row gy-5">
            <div className="col-8 col-sm-12 leftside-card">
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={4}
                  onClick={() => navigate("/app/emails/:category")}
                >
                  <SalesReport className="grid"></SalesReport>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                  <NewArticles className="grid"></NewArticles>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                  <ActiveUsers className="grid"></ActiveUsers>
                </Grid>
                <Grid item xs={12}>
                  <BiaxialBarChart className="grid" />
                </Grid>
                <Grid item xs={4}>
                  <PageViews />
                </Grid>
                <Grid item xs={4}>
                  <PageViews />
                </Grid>
                <Grid item xs={4}>
                  <PageViews />
                </Grid>
              </Grid>
            </div>
            <div className="col-4 col-sm-12 rightside-card">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card className="grid" sx={{ padding: "15px" }}>
                    <Div>
                      <Typography variant="h3">Recent Activity</Typography>
                      <div class="mt-2">
                        <Typography variant="h4">
                          <span className="push-pin">
                            <HistoryIcon />
                          </span>
                          Added an Event "sgahjfjfjahdth"
                        </Typography>
                        <Typography variant="h4">
                          <span className="push-pin">
                            <HistoryIcon />
                          </span>
                          Added an Event "sgahjfjfjrhstjryj"
                        </Typography>
                        <Typography variant="h4">
                          <span className="push-pin">
                            <HistoryIcon />
                          </span>
                          Added an Event "sgahjfjfjargrdhgdfhd"
                        </Typography>
                        <Typography variant="h4">
                          <span className="push-pin">
                            <HistoryIcon />
                          </span>
                          Added an Event "sgahjfjfjdfhafdfghjf"
                        </Typography>
                        <Typography variant="h4">
                          <span className="push-pin">
                            <HistoryIcon />
                          </span>
                          Added an Event "sgahjfjfjdfhgjhgdj"
                        </Typography>
                        <Typography variant="h4">
                          <span className="push-pin">
                            <HistoryIcon />
                          </span>
                          Added an Event "sgahjfjfjdfjhghah"
                        </Typography>
                        <Typography variant="h4">
                          <span className="push-pin">
                            <HistoryIcon />
                          </span>
                          Added an Event "sgahjfjfjdfjhghah"
                        </Typography>
                        <Typography variant="h4">
                          <span className="push-pin">
                            <HistoryIcon />
                          </span>
                          Added an Event "sgahjfjfjdfjhghah"
                        </Typography>
                      </div>
                    </Div>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <AppUsers />
                </Grid>
              </Grid>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-4">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <VerticalComposedChart />
                </Grid>
              </Grid>
            </div>
            <div class="col-8">
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <PageViews />
                </Grid>
                <Grid item xs={4}>
                  <PageViews />
                </Grid>
                <Grid item xs={4}>
                  <PageViews />
                </Grid>
                <Grid item xs={4}>
                  <PageViews />
                </Grid>
                <Grid item xs={4}>
                  <PageViews />
                </Grid>
                <Grid item xs={4}>
                  <PageViews />
                </Grid>
              </Grid>
            </div>
          </div>
        </Div>

        {/* <Div sx={{display: navigateEmailLists === true ? "block" : "none"}}>
          <EmailLists/>
        </Div> */}
      </div>
    </>
  );
};
export default Home;
