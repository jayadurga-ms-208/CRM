import React from "react";
import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import { Avatar, Card, Grid, Typography, Button } from "@mui/material"; 
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StatisticsRightSideCardList from "../campaign-right-side-card/StatisticsRightSideCardList";
import {useState} from "react";

const CampaignLeftSideCardList = () => {

  const [showStatisticsRightSideCardList, setShowStatisticsRightSideCardList] = useState(false);


  const handleClickStatisticsRightSideCardList = () => {
    setShowStatisticsRightSideCardList(true);
  }

  return (
    <>

   
    <Grid container spacing={2} sx={{ backgroundColor: "rgba(212, 241, 244, 0.5)",height:"876px" }}>
        <Grid item xs={3} className="border-card" sx={{ p: 1, backgroundColor:"white",mt:1,ml:2, borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",height:"876px"}}>
            {/* <Card sx={{ boxShadow: "none" }}> */}
            <Card className="border-card" sx={{ p: 1, borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
      
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
                      fontSize: "14px",
                    }}
                  >
                    ST
                  </Avatar>
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Subramanian Thangaappan
                  </Typography>
                </Div>
                <br/>
                <Div
                  sx={{
                    alignItems: "left",
                    cursor: "pointer",
                  }}
                >
                  <Typography sx={{ fontWeight: 600, pl: 2,fontSize:"12px" }}>
                    Today's  Target
                    <br />
                    <span style={{ fontWeight: 500,fontSize:"10px"  }}>22 Dec 2021</span>
                  </Typography>
                </Div>
                <Typography align="center" sx={{pl:16}}>Pending</Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography  variant="h6" align="left" sx={{fontWeight:600}}>Total deals</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography  align="center">100</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography  align="center">90</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography  variant="h6" align="left" sx={{fontWeight:600}}>Total appointments to be fixed</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography  align="center">100</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography  align="center">90</Typography>
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

            <Card className="border-card" sx={{ mt: 1, p: 0,borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
          
          <Div
            onClick={handleClickStatisticsRightSideCardList}
            sx={{
              p: 1,
              pb: 0.5,
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, paddingLeft: "8px", pt:1,m: 0,height:"35px",borderRadius: 4,"&:hover": {
                
               },}}>
             Dashboard
              <br />
            </Typography>
          </Div>
          <Div
          onClick={handleClickStatisticsRightSideCardList}
            sx={{
              p: 1,
              pb: 0.5,
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, paddingLeft: "8px",pt:1, m: 0,height:"35px",borderRadius: 4, "&:hover": {
                
               }, }}
            >
              Email
              <br />
            </Typography>
          </Div>
          <Div
          onClick={handleClickStatisticsRightSideCardList}
            sx={{
              p: 1,
              pb: 0.5,
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, paddingLeft: "8px", m: 0,height:"35px",pt:1,borderRadius: 4,"&:hover": {
               
               }, }}
            >
             Templates
             <br/>
            </Typography>
          </Div>
          <Div
          onClick={handleClickStatisticsRightSideCardList}
            sx={{
              p: 1,
              pb: 0.5,
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, paddingLeft: "8px", m: 0,backgroundColor: showStatisticsRightSideCardList ? "#ADD8E6" : "#fff",height:"35px",width:"100%",pt:1,borderRadius: 4,"&:hover": {
               }, }}
            >
              Statistics
              <br />
            </Typography>
          </Div>
       
              </Card>
            {/* </Card> */}

        </Grid>
        
          <Grid item xs={8} className="border-card" sx={{display: showStatisticsRightSideCardList  === true? "block" : "none", backgroundColor:"white",ml:5, borderRadius:"10px",}}>
            <StatisticsRightSideCardList/>
          </Grid>
        </Grid>
    </>
  );
};

export default CampaignLeftSideCardList;
