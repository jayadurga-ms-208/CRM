import Div from '@jumbo/shared/Div'
import React from 'react'
import { Avatar, Card, Grid, Typography } from "@mui/material";
import { useState } from 'react';
import AllLeadsList from "../List page/AllLeadsList";
import Allign from "../leads-right-side-card/Allign";
import QualifyNow from './QualifyNow';


const QualifyPage = () => {
    
        const [showAllign,setShowAllign]=useState(true);
        const [showAllLeadsList,setShowAllLeadsList]=useState(false);
        const [showLeadsWebPage,setShowLeadsWebPage]=useState(false);
       //  const [showQualifySocial,setShowQualifySocial]=useState(false);
   
        const handleClickLeadsWebPage=()=>{
         setShowAllign(false);
         setShowAllLeadsList(false);
         setShowLeadsWebPage(true);
         // setShowQualifySocial(false);
        }
   
       //  const handleClickAllign =()=>{
       //   setShowAllign(true);
       //   setShowAllLeadsList(false);
       //   setShowLeadsWebPage(false);
       //  }
        const handleClickAllLeadsList=()=>{
         setShowAllign(false);
         setShowAllLeadsList(true);
         setShowLeadsWebPage(false);
         // setShowQualifySocial(false);
    }
       //  const handleQualifySocial=()=> {
       //   setShowAllign(false);
       //   setShowAllLeadsList(false);
       //   setShowLeadsWebPage(false);
       //   setShowQualifySocial(true);
       //  }
  return (<>
    <Grid container spacing={4}>
    <Grid item xs={3}>
      <Card sx={{ boxShadow: "none" }}>
        <Card className="border-card" sx={{ p: 1 }}>
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
            <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
              Today's Target
              <br />
              <span style={{ fontWeight: 500 }}>25000 contacts</span>
            </Typography>
          </Div>
          <Typography align="right" sx={{}}>Pending</Typography>
          <Grid container>
              <Grid item xs={6}>
                  <Typography  align="left" sx={{fontWeight:600}}>Total deals to be made</Typography>
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
                  <Typography  align="left" sx={{fontWeight:600}}>Total deals to be made</Typography>
              </Grid>
              <Grid item xs={3}>
                  <Typography  align="center">100</Typography>
              </Grid>
              <Grid item xs={3}>
                  <Typography  align="center">90</Typography>
              </Grid>
          </Grid>
        </Card>
        <Card className="border-card" sx={{ mt: 1, p: 0 }}>
          <Div
            sx={{
              p: 1,
              pb: 0.5,
              cursor: "pointer",
            }}
          >
          </Div>
          <Div
          onClick={handleClickAllLeadsList}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              p: 1,
              pb: 0.5,
              cursor: "pointer",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}
            >
              All Leads 
              <br />
              <span style={{ fontWeight: 500 }}>500000 Leads</span>
            </Typography>
          </Div>
          <Div
          onClick={handleClickLeadsWebPage}
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
              <span style={{ fontWeight: 500 }}>500000 Leads</span>
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
              Pending leads to Qualify
              <br />
              <span style={{ fontWeight: 500 }}>50000 Leads</span>
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
              Assigned Leads
              <br />
              <span style={{ fontWeight: 500 }}>50000 Leads</span>
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
              Unassigned Leads
              <br />
              <span style={{ fontWeight: 500 }}>50000 Leads</span>
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
              Untouched Leads
              <br />
              <span style={{ fontWeight: 500 }}>50000 Leadss</span>
            </Typography>
          </Div>
        </Card>
        
        <Card className="border-card" sx={{ mt: 1, p: 0 }}>
          <Div
            sx={{
              p: 1,pb: 0.5,
              cursor: "pointer",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              All Account<br/><br/>All States<br/><span style={{fontWeight: 500}}>500000 contacts</span>
            </Typography>
          </Div>
          <Div
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              p: 1,pb: 0.5,
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
            <Typography variant="h5" sx={{ fontWeight: 600, pl:2 }}>
              Maharastra<br/><span style={{fontWeight: 500}}>25000 contacts</span>
            </Typography>
          </Div>
          <Div
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              p: 1,pb: 0.5,
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
            <Typography variant="h5" sx={{ fontWeight: 600, pl:2 }}>
              Tamilnadu<br/><span style={{fontWeight: 500}}>25000 contacts</span>
            </Typography>
          </Div>
          <Div
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              p: 1,pb: 0.5,
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
            <Typography variant="h5" sx={{ fontWeight: 600, pl:2 }}>
              Andhra Pradesh<br/><span style={{fontWeight: 500}}>25000 contacts</span>
            </Typography>
          </Div>
          <Div
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              p: 1,pb: 0.5,
              cursor: "pointer",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#FFA500",
                width: "30px",
                height: "30px",
                fontSize: "14px",
              }}
            >
              ND
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: 600, pl:2 }}>
              Kerala<br/><span style={{fontWeight: 500}}>25000 contacts</span>
            </Typography>
          </Div>
        </Card>
        <Card className="border-card" sx={{ mt: 1, p: 0 }}>
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
              <span style={{ fontWeight: 500 }}>2500 account</span>
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
              <span style={{ fontWeight: 500 }}>2500 account</span>
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
              <span style={{ fontWeight: 500 }}>2500 account</span>
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
              <span style={{ fontWeight: 500 }}>2500 account</span>
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
              <span style={{ fontWeight: 500 }}>2500 account</span>
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
              Sales
              <br />
              <span style={{ fontWeight: 500 }}>2500 account</span>
            </Typography>
          </Div>
        </Card>
      </Card>
    </Grid>
    <Grid item xs={9}>
      <QualifyNow/>
    </Grid>
    
      {/* <Grid item  className='border-card'>
      <Grid item xs={9}>
            <Typography variant='h1'  > Qualify question & Answers </Typography>           
      </Grid>
      <Grid item xs={3}>
      <Typography variant='h1'  > Karbon Software</Typography>
      </Grid>
      </Grid> */}
      </Grid>
      
    
    
    
    
    </>
    )
}


export default QualifyPage