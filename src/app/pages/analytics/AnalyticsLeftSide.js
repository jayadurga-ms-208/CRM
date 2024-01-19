import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import { useState } from "react";
import CRMdashboard from "./Forms/crm-dashboard/CRMdashboard";
import FirstForm from "./Forms/FirstForm";
import Form4 from "./Forms/Form4";
import SecondForm from "./Forms/SecondForm";


const AnalyticsLeftSide = () => {

  const [showForm2, setshowForm2] = useState(false);
  const [showForm1, setshowForm1] = useState(true);
  const [ShowForm3,setShowForm3]=useState(false);
  const [ShowForm4,setShowForm4]=useState(false);


  const handleClickShowForm1 = () => {
    setshowForm1(true);
    setshowForm2(false);
    setShowForm3(false);
    setShowForm4(false);
  };

  const handleClickShowForm2 = () => {
    setshowForm2(true);
    setshowForm1(false);
    setShowForm3(false);
    setShowForm4(false);;
  };

  const handleClickShowForm3 = () => {
    setshowForm2(false);
    setshowForm1(false);
    setShowForm3(true);
    setShowForm4(false);
  }

  const handleClickShowForm4 = () => {
    setshowForm2(false);
    setshowForm1(false);
    setShowForm3(false);
    setShowForm4(true);
  }

  return (
    <>
      <JumboContentLayoutMain borderRadius={20}>
      
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Card sx={{ boxShadow: "none", p:1 }}>
              <Card className="border-card" sx={{ p: 1,maxWidth:"300px",height:"100px", borderRadius: "10px", boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#FB7575",
                      width: "45px",
                      height: "45px",
                      fontSize: "12px",
                    }}
                  >
                    ST
                  </Avatar>
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0,fontSize: "14px" }}>
                    Subramanian Thangaappan
                  </Typography>
                </Div>
              </Card>
              <Card className="border-card" sx={{  mt:2,p: 1,maxWidth:"300px" ,height: 500, borderRadius: "10px", boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                <Div
                    onClick={handleClickShowForm1}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    backgroundColor: showForm1? "#D4F1F4" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                    height: '45px'
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 , paddingTop: "5px"}}>
                    1 Form
                  </Typography>
                </Div>
                <Div
                 onClick={handleClickShowForm2}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    backgroundColor: showForm2? "#D4F1F4" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                    height: '50px'

                  }}
                >
                  <Typography variant="h3" sx={{  paddingLeft: "8px", m: 0 , paddingTop: "5px"}}>
                  2 Form
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickShowForm3}
                  sx={{
                    p: 1,
                    pb: 0.5,

                    backgroundColor: ShowForm3? "#D4F1F4" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                    height: '50px'
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 , paddingTop: "5px"}}>
                  3 Form
                  </Typography>
                </Div>
                <Div
                onClick={handleClickShowForm4}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    backgroundColor: ShowForm4? "#D4F1F4" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                    height: '50px'
                  }}
                >
                  <Typography variant="h3" sx={{  paddingLeft: "8px", m: 0 , paddingTop: "5px" }}>
                  4 Form
                  </Typography>
                </Div>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    // backgroundColor: showMyShipmentRight? "#D4F1F4" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                    height: '50px'
                  }}
                >
                  <Typography variant="h3" sx={{  paddingLeft: "8px", m: 0 , paddingTop: "5px"}}>
                  5 Form
                  </Typography>
                </Div>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    // backgroundColor: showMyShipmentRight? "#D4F1F4" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                    height: '50px'
                  }}
                >
                  <Typography variant="h3" sx={{  paddingLeft: "8px", m: 0 , paddingTop: "5px" }}>
                  6 Form
                  </Typography>
                </Div>
                <Div
                
                  sx={{
                    p: 1,
                    pb: 0.5,
                    // backgroundColor: showMyShipmentRight? "#D4F1F4" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                    height: '50px'
                  }}
                >
                  <Typography variant="h3" sx={{  paddingLeft: "8px", m: 0 , paddingTop: "5px" }}>
                  7 Form
                  </Typography>
                </Div>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    // backgroundColor: showMyShipmentRight? "#D4F1F4" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                    height: '50px'
                  }}
                >
                  <Typography variant="h3" sx={{  paddingLeft: "8px", m: 0 , paddingTop: "5px"}}>
                  8 Form
                  </Typography>
                </Div>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    // backgroundColor: showMyShipmentRight? "#D4F1F4" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#D4F1F4" },
                    borderRadius: '5%',
                    height: '50px'
                  }}
                >
                  <Typography variant="h3" sx={{  paddingLeft: "8px", m: 0 , paddingTop: "5px" }}>
                  9 Form
                  </Typography>
                </Div>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={9}  sx={{display: showForm1 === true ? "block" : "none"}}>
            <FirstForm/>
          </Grid> 
          <Grid item xs={9}  sx={{display: showForm2 === true ? "block" : "none"}}>
            <SecondForm/>
          </Grid>
          <Grid item xs={9}  sx={{display: ShowForm3 === true ? "block" : "none"}}>
            <CRMdashboard />
          </Grid>
          <Grid item xs={9}  sx={{display: ShowForm4 === true ? "block" : "none"}}>
            <Form4/>
          </Grid>
        </Grid>
      </JumboContentLayoutMain>
    </>
  );
};

export default AnalyticsLeftSide;