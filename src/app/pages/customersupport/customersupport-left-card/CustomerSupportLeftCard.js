import React from 'react';
import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import { Avatar, Card, Grid, Typography,Button, borderRadius } from "@mui/material";
import LiveChatsRightCard from '../customersupport-right-card/LiveChatsRightCard';
import TicketStatusRightCard from '../customersupport-right-card/TicketStatusRightCard';
import SummaryRightSideCardList from '../customersupport-right-card/SummaryRightSideCardList';
import TicketsRightSideCardList from '../customersupport-right-card/TicketsRightSideCardList';
import { useState } from 'react';




const CustomerSupportLeftCard = () => {
  const [showSummaryRightCard, setShowSummaryRightCard] = useState(true);
  const [showTicketsRightCard, setShowTicketsRightCard] = useState(false);
  const [showTicketStatusRightCard, setShowTicketStatusRightCard] = useState(false);
  const [showLiveChatsRightCard, setShowLiveChatsRightCard] = useState(false);

  const handleClickTicketStatusRightCard = () => {
    setShowTicketStatusRightCard(true);
    setShowLiveChatsRightCard(false);
    setShowSummaryRightCard(false);
    setShowTicketsRightCard(false);
  };
  const handleClickTicketsRightCard = () => {
    setShowTicketStatusRightCard(false);
    setShowLiveChatsRightCard(false);
    setShowSummaryRightCard(false);
    setShowTicketsRightCard(true);
  };
  const handleClickSummaryRightCard = () => {
    setShowTicketStatusRightCard(false);
    setShowLiveChatsRightCard(false);
    setShowSummaryRightCard(true);
    setShowTicketsRightCard(false);
  };

  const handleClickLiveChatRightCard = () => {
    setShowTicketStatusRightCard(false);
    setShowLiveChatsRightCard(true);
    setShowSummaryRightCard(false);
    setShowTicketsRightCard(false);
  };

  return (
    <>
      {/* <JumboContentLayoutMain sx={{p:0,m:0}}> */}
        <Grid container spacing={2} sx={{bgcolor:"rgba(212, 241, 244, 0.5)", p:1,}}>
            <Grid item xs={3}>
            <Card sx={{ boxShadow: "none", minHeight:550,borderRadius: "10px" }}>
              <Card className="border-card" sx={{py:3, borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",m:1 }}>
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
                  <Typography sx={{ paddingLeft: "8px", m: 0,fontSize:"14px" }}>
                    Subramanian Thangaappan
                  </Typography>
                </Div>
              </Card>
              <Card className="border-card" sx={{ borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",m:1 }}>
                <Div
                onClick={handleClickSummaryRightCard}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                    backgroundColor: showSummaryRightCard ? "#D4F1F4" : "#fff",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                  }}
                >
                  <Typography sx={{ paddingLeft: "8px", m: 0 ,fontSize:"13px"}}>
                    Summary
                  </Typography>
                </Div>
                <Div
                onClick={handleClickTicketsRightCard}
                  
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    backgroundColor: showTicketsRightCard ? "#D4F1F4" : "#fff",
                    borderRadius: '5%',

                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0,fontSize:"13px" }}>
                  Tickets
                  </Typography>
                </Div>
                <Div
                onClick={handleClickLiveChatRightCard}
                  
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    backgroundColor: showLiveChatsRightCard ? "#D4F1F4" : "#fff",
                    borderRadius: '5%',
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0,fontSize:"13px" }} >
                    Live Chats
                  </Typography>
                </Div>
                <Div
                 onClick={handleClickTicketStatusRightCard}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                    backgroundColor: showTicketStatusRightCard ? "#D4F1F4" : "#fff",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0,fontSize:"13px" }} onClick={handleClickTicketStatusRightCard}>
                    Ticket Status
                  </Typography>
                </Div>
              </Card>
            </Card>
            </Grid>
            <Grid item xs={9}  sx={{display: showTicketStatusRightCard === true ? "block" : "none"}}>
                <TicketStatusRightCard/>
            </Grid>
            <Grid item xs={9}  sx={{display: showLiveChatsRightCard === true ? "block" : "none"}}>
                <LiveChatsRightCard/>
            </Grid>
            <Grid item xs={9}  sx={{display: showSummaryRightCard === true ? "block" : "none"}}>
                <SummaryRightSideCardList/>
            </Grid>
            <Grid item xs={9}  sx={{display: showTicketsRightCard === true ? "block" : "none"}}>
                <TicketsRightSideCardList/>
            </Grid>
        </Grid>
      {/* </JumboContentLayoutMain> */}
    </>
  )
}

export default CustomerSupportLeftCard;
