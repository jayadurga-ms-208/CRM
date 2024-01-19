import React from "react";
import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import { Avatar, Card, Grid, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AllDealsRightSideCardList from "app/pages/deals/deals-right-side-card-list/AllDealsRightSideCardList";
import NewDealsRightSideCardList from "app/pages/deals/deals-right-side-card-list/NewDealsRightSideCardList";
import MyDealRightSideCardList from "app/pages/deals/deals-right-side-card-list/MyDealRightSideCardList";
import PipelineDealsRightSideCardList from "app/pages/deals/deals-right-side-card-list/PipelineDealsRightSideCardList";
import DashboardRightSideCardList from "app/pages/deals/deals-right-side-card-list/DashboardRightSideCardList";
import { useState } from "react";

const DealsLeftSideCardList = () => {
  const [showDashboardRightSideCardList, setShowDashboardRightSideCardList] =
    useState(true);
  const [showAllDealsRightSideCardList, setShowAllDealsRightSideCardList] =
    useState(false);
  const [showNewDealsRightSideCardList, setShowNewDealsRightSideCardList] =
    useState(false);
  const [showMyDealRightSideCardList, setShowMyDealRightSideCardList] =
    useState(false);
  const [
    showPipelineDealsRightSideCardList,
    setShowPipelineDealsRightSideCardList,
  ] = useState(false);
  const [hideIndustryCard, setHideIndustryCard] =
    useState(true);

  const handleClickAllDealsRightSideCardList = () => {
    setShowAllDealsRightSideCardList(true);
    setShowNewDealsRightSideCardList(false);
    setShowMyDealRightSideCardList(false);
    setShowPipelineDealsRightSideCardList(false);
    setShowDashboardRightSideCardList(false);
    setHideIndustryCard(false);
  };

  const handleClickNewDealsRightSideCardList = () => {
    setShowAllDealsRightSideCardList(false);
    setShowNewDealsRightSideCardList(true);
    setShowMyDealRightSideCardList(false);
    setShowPipelineDealsRightSideCardList(false);
    setShowDashboardRightSideCardList(false);
    setHideIndustryCard(false);
  };

  const handleClickMyDealRightSideCardList = () => {
    setShowAllDealsRightSideCardList(false);
    setShowNewDealsRightSideCardList(false);
    setShowMyDealRightSideCardList(true);
    setShowPipelineDealsRightSideCardList(false);
    setShowDashboardRightSideCardList(false);
    setHideIndustryCard(false);
  };

  const handleClickPipelineDealsRightSideCardList = () => {
    setShowAllDealsRightSideCardList(false);
    setShowNewDealsRightSideCardList(false);
    setShowMyDealRightSideCardList(false);
    setShowPipelineDealsRightSideCardList(true);
    setShowDashboardRightSideCardList(false);
    setHideIndustryCard(true);
  };

  return (
    <>
      {/* <Card > */}
        <Grid container spacing={2} sx={{ backgroundColor: "rgba(212, 241, 244, 0.5)", }}>
          <Grid item xs={3} className="border-card" sx={{ p: 1, backgroundColor:"white",mt:1,ml:2, borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            {/* <Card sx={{ boxShadow: "none" }}> */}
              <Card className="border-card" sx={{ p: 1, borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}> 
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#FB7575",
                      width: "30px",
                      height: "30px",
                      fontSize: "12px",
                    }}
                  >
                    ST
                  </Avatar>
                  <Typography variant="h4" sx={{ paddingLeft: "8px", m: 0 }}>
                    Subramanian Thangaappan
                  </Typography>
                </Div>
                <br />
                <Div
                  sx={{
                    alignItems: "left",
                    cursor: "pointer",
                  }}
                >
                  <Typography sx={{ fontWeight: 600, pl: 2, fontSize:"12px"}}>
                    Today's Deals
                    <br />
                    <span style={{ fontWeight: 500,fontSize:"10px" }}>22 Dec 2021</span>
                  </Typography>
                </Div>
                <Typography align="right" sx={{}}>
                  Pending
                </Typography>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography align="left" sx={{ fontWeight: 600 }}>
                      Total deals to be made
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align="center">100</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align="center">90</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography align="left" sx={{ fontWeight: 600 }}>
                      Total deals to be made
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align="center">100</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align="center">90</Typography>
                  </Grid>
                </Grid>
              </Card>

              {/* <Card className="border-card" sx={{ mt: 1, p: 0 }}>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 600, paddingLeft: "8px", m: 0 }}
                  >
                    Accounts Home
                  </Typography>
                </Div>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 600, paddingLeft: "8px", m: 0 }}
                  >
                    My Account
                    <br />
                    <span style={{ fontWeight: 500 }}>50000 accouht</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 600, paddingLeft: "8px", m: 0 }}
                  >
                    New Account
                    <br />
                    <span style={{ fontWeight: 500 }}>50000 account</span>
                  </Typography>
                </Div>
              </Card> */}

              <Card
                className="border-card"
                sx={{ mt: 1, p: 0,borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <Div
                  onClick={handleClickAllDealsRightSideCardList}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      paddingLeft: "8px",
                      m: 0,
                      backgroundColor: showAllDealsRightSideCardList
                        ? "#ADD8E6"
                        : "#fff",
                      borderRadius: 4,
                      "&:hover": {},
                    }}
                  >
                    All Deals
                    <br />
                    <span style={{ fontWeight: 400,fontSize:"12px" }}>50000 leads</span>
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickMyDealRightSideCardList}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      paddingLeft: "8px",
                      m: 0,
                      backgroundColor: showMyDealRightSideCardList
                        ? "#ADD8E6"
                        : "#fff",
                      borderRadius: 4,
                      "&:hover": {},
                    }}
                  >
                    My deal
                    <br />
                    <span style={{ fontWeight: 400,fontSize:"12px" }}>50000 deals</span>
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickNewDealsRightSideCardList}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      paddingLeft: "8px",
                      backgroundColor: showNewDealsRightSideCardList
                        ? "#ADD8E6"
                        : "#fff",
                      borderRadius: 4,
                      m: 0,
                      "&:hover": {},
                    }}
                  >
                    New deal
                    <br />
                    <span style={{ fontWeight: 400,fontSize:"12px" }}>50000 deals</span>
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickPipelineDealsRightSideCardList}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      paddingLeft: "8px",
                      m: 0,
                      backgroundColor: showPipelineDealsRightSideCardList
                        ? "#ADD8E6"
                        : "#fff",
                      borderRadius: 4,
                      "&:hover": {},
                    }}
                  >
                    Pipeline deal
                    <br />
                    <span style={{ fontWeight: 400,fontSize:"12px" }}>50000 deals</span>
                  </Typography>
                </Div>
              </Card>
              <Card
                className="border-card"
                sx={{ mt: 1, p: 0, borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 1 }}>
                    All Account
                    <br />
                    <br />
                    All States
                    <br />
                    <span style={{ fontWeight: 400,fontSize:"12px" }}>500000 account</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#FF3939",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    ND
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Maharastra
                    <br />
                    <span style={{ fontWeight: 400,fontSize:"12px" }}>2500 account</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#424651",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    MU
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Tamilnadu
                    <br />
                    <span style={{ fontWeight: 400,fontSize:"12px" }}>2500 account</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#750075",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    KL
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Andhra Pradesh
                    <br />
                    <span style={{ fontWeight: 400,fontSize:"12px" }}>2500 account</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#750075",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    KL
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Kerala
                    <br />
                    <span style={{ fontWeight: 400,fontSize:"12px" }}>2500 account</span>
                  </Typography>
                </Div>
              </Card>
              <Card
                className="border-card"
                sx={{ mt: 1, p: 0, borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", display: hideIndustryCard === true ? "none" : "block", }}
              >
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Industry
                    <br />
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Finance
                    <br />
                    <span style={{ fontWeight: 400 }}>2500 account</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Travel Tourism
                    <br />
                    <span style={{ fontWeight: 400 }}>2500 account</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Construction
                    <br />
                    <span style={{ fontWeight: 400 }}>2500 account</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Production
                    <br />
                    <span style={{ fontWeight: 400 }}>2500 account</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Marketing
                    <br />
                    <span style={{ fontWeight: 400 }}>2500 account</span>
                  </Typography>
                </Div>
                <Div
                  sx={{mt:1.5,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Sales
                    <br />
                    <span style={{ fontWeight: 400 }}>2500 account</span>
                  </Typography>
                </Div>
              </Card>
            {/* </Card> */}
          </Grid>
          <Grid
            item
            xs={8.5}
            sx={{mt:1.5,
              display:
                showDashboardRightSideCardList === true ? "block" : "none",
                backgroundColor:"white",
                ml:2,
                borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            <DashboardRightSideCardList />
          </Grid>
          <Grid
            item
            xs={8.5}
            sx={{mt:1.5,
              display:
                showAllDealsRightSideCardList === true ? "block" : "none",
                backgroundColor:"white",
                ml:2,
                borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            <AllDealsRightSideCardList />
          </Grid>
          <Grid
            item
            xs={8.5}
            sx={{mt:1.5,
              display:
                showNewDealsRightSideCardList === true ? "block" : "none",
                backgroundColor:"white",
                ml:2,
                borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            <NewDealsRightSideCardList />
          </Grid>
          <Grid
            item
            xs={8.5}
            sx={{mt:1.5,
              display: showMyDealRightSideCardList === true ? "block" : "none",
              backgroundColor:"white",
              ml:2,
              borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            <MyDealRightSideCardList />
          </Grid>
          <Grid
            item
            xs={8.5}
            sx={{mt:1.5,
              display:
                showPipelineDealsRightSideCardList === true ? "block" : "none",
                backgroundColor:"white",
                ml:2,
                borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            <PipelineDealsRightSideCardList />
          </Grid>
        </Grid>
      {/* </Card> */}
    </>
  );
};

export default DealsLeftSideCardList;
