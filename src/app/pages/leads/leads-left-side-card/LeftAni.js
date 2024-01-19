import React from "react";
import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import PendingLeadsRight from "../leads-right-side-card/PendingLeadsRight";
import AssignLeadsRight from "../leads-right-side-card/AssignLeadsRight";
import UnAssignLeadsRight from "../leads-right-side-card/UnAssignLeadsRight";
import UnTouchedLeadsRight from "../leads-right-side-card/UnTouchedLeadsRight";
import { useState } from "react";



const Left = () => {
  const [showPendingLeadsRight, setshowPendingLeadsRight] = useState(true);
  const [showAssignLeadsRight, setshowAssignLeadsRight] = useState(false);
  const [showUnAssignLeadsRight, setshowUnAssignLeadsRight] = useState(false);
  const [showUnTouchedLeadsRight, setshowUnTouchedLeadsRight] = useState(false);

  const handleClickPendingLeadsRight = () => {
    setshowPendingLeadsRight(true);
    setshowAssignLeadsRight(false);
    setshowUnAssignLeadsRight(false);
    setshowUnTouchedLeadsRight(false);
  }

  const handleClickAssignLeadsRight = () => {
    setshowPendingLeadsRight(false);
    setshowAssignLeadsRight(true);
    setshowUnAssignLeadsRight(false);
    setshowUnTouchedLeadsRight(false);
  }
  const handleClickUnAssignLeadsRight = () => {
    setshowPendingLeadsRight(false);
    setshowAssignLeadsRight(false);
    setshowUnAssignLeadsRight(true);
    setshowUnTouchedLeadsRight(false);
  }
  const handleClickUnTouchedLeadsRight = () => {
    setshowPendingLeadsRight(false);
    setshowAssignLeadsRight(false);
    setshowUnAssignLeadsRight(false);
    setshowUnTouchedLeadsRight(true);
  }

  return (
    <>
      <JumboContentLayoutMain>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Card sx={{ boxShadow: "none",paddingBottom:1 }}>
              <Card className="border-card" sx={{ p: 1, borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" , width: 350}}>
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
                      width: "45px",
                      height: "45px",
                      fontSize: "14px",
                    }}
                  >
                    ST
                  </Avatar>
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
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
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Todays Target
                    <br />
                    <span style={{ fontWeight: 500 }}>22 Dec 2021</span>
                  </Typography>
                </Div>
                <Typography align="right" sx={{ fontWeight: 600 ,paddingRight: 5}}>Pending</Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography align="left" sx={{ fontWeight: 600 }}>Total deals to be made</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography align="center"  sx={{ fontWeight: 600 }}>100</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography align="center" sx={{ fontWeight: 600 }}>90</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography align="left" sx={{ fontWeight: 600 }}>Total deals to be fixed</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography align="center"  sx={{ fontWeight: 600 }}>100</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography align="center"  sx={{ fontWeight: 600 }}>90</Typography>
                  </Grid>
                </Grid>
              </Card>
              <Card className="border-card" sx={{ mt: 1, p: 0, borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" , width: "350px"}}>
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
                    All Leads
                    <br />
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
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
                    Lead Generation
                    <br />
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickPendingLeadsRight}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    backgroundColor: showPendingLeadsRight ? "rgba(212, 241, 244, 0.7);" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Pending Leads To Qualify
                    <br />
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickAssignLeadsRight}

                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    backgroundColor: showAssignLeadsRight ? "rgba(212, 241, 244, 0.7);" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Assigned Leads
                    <br />
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickUnAssignLeadsRight}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    backgroundColor: showUnAssignLeadsRight ? "rgba(212, 241, 244, 0.7);" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    UnAssigned Leads
                    <br />
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickUnTouchedLeadsRight}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1,
                    pb: 0.5,
                    backgroundColor: showUnTouchedLeadsRight ? "rgba(212, 241, 244, 0.7);" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    UnTouched Leads
                    <br />
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
                  </Typography>
                </Div>
              </Card>
              <Card className="border-card" sx={{ mt: 1, p: 0, borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)", width: "350px" }}>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    All Leads
                    <br />
                    <br />
                    All States
                    <br />
                    <span style={{ fontWeight: 500 }}>500000 contacts</span>
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
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
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
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
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
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
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
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
                  </Typography>
                </Div>
              </Card>
              <Card className="border-card" sx={{ mt: 1, p: 0 , borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)", width: "350px"}}>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
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
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
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
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
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
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
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
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
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
                    <span style={{ fontWeight: 500 }}>25000 contacts</span>
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
                </Div>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={9} sx={{ display: showPendingLeadsRight == true ? "block" : "none" }}>
            <PendingLeadsRight />
          </Grid>
          <Grid item xs={9} sx={{ display: showAssignLeadsRight == true ? "block" : "none" }}>
            <AssignLeadsRight />
          </Grid>
          <Grid item xs={9} sx={{ display: showUnAssignLeadsRight == true ? "block" : "none" }}>
            <UnAssignLeadsRight />
          </Grid>
          <Grid item xs={9} sx={{ display: showUnTouchedLeadsRight == true ? "block" : "none" }}>
            <UnTouchedLeadsRight />
          </Grid>
        </Grid>


      </JumboContentLayoutMain>
    </>
  );
};

export default Left;
