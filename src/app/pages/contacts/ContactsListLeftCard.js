import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import {
  Avatar,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import { useState } from "react";
import NotGeneratedContactsList from "./contacts-right-card/NotGeneratedContactsList";
import GeneratedContactsList from "./contacts-right-card/GeneratedContactsList";
import AllContactsList from "./contacts-right-card/AllContactsList";



const ContactsListLeftCard = () => {

  const [showAllContacts, setShowAllContacts] = useState(true);
  const [notGeneratedContacts, setNotGeneratedContacts] = useState(false);
  const [generatedContacts, setGeneratedContacts] = useState(false);



  const handleClickAllContacts = () => {
    setShowAllContacts(true);
    setNotGeneratedContacts(false);
    setGeneratedContacts(false);
  };

  const handleClickNotGenerated = () => {
    setShowAllContacts(false);
    setNotGeneratedContacts(true);
    setGeneratedContacts(false);
  };

  const handleClickGenerated = () => {
    setShowAllContacts(false);
    setNotGeneratedContacts(false);
    setGeneratedContacts(true);
  };



  return (
    <>
      <JumboContentLayoutMain>
        <Grid container spacing={2}>
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
                      bgcolor: green[500],
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    RK
                  </Avatar>
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Ravi Kumar
                  </Typography>
                </Div>
              </Card>

              <Card className="border-card" sx={{ mt: 1, p: 0 }}>
                <Div
                  onClick={handleClickAllContacts}
                  sx={{
                    p: 1,pb: 0.5,
                    cursor: "pointer",
                    backgroundColor:
                      showAllContacts === true
                        ? "#EEEEEE"
                        : "transparent",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    All Contacts<br/><span style={{fontWeight: 500}}>10,000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickNotGenerated}
                  sx={{
                    p: 1,pb: 0.5,
                    cursor: "pointer",
                    backgroundColor:
                      notGeneratedContacts === true
                        ? "#EEEEEE"
                        : "transparent",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Contacts not converted to lead<br/><span style={{fontWeight: 500}}>5,000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickGenerated}
                  sx={{
                    p: 1,pb: 0.5,
                    cursor: "pointer",
                    backgroundColor:
                      generatedContacts === true
                        ? "#EEEEEE"
                        : "transparent",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Contacts converted to lead<br/><span style={{fontWeight: 500}}>5,000 contacts</span>
                  </Typography>
                </Div>
              </Card>

              <Card className="border-card" sx={{ mt: 1, p: 0 }}>
                <Div
                  sx={{
                    p: 1,pb: 0,
                    cursor: "pointer",
                    // backgroundColor: "rgba(212, 241, 244, 0.7)",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Archieved List<br/><span style={{fontWeight: 500}}>3,000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    p: 1,pb: 0,
                    cursor: "pointer",
                    // backgroundColor: "rgba(212, 241, 244, 0.7)",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Unarchieved List<br/><span style={{fontWeight: 500}}>2,000 contacts</span>
                  </Typography>
                </Div>
              </Card>

              <Card className="border-card" sx={{ mt: 1,p: 0 }}>
                <Div sx={{p: 1}}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  All Countries <br/><span style={{fontWeight: 500}}>10,000 contacts</span>
                </Typography>
                </Div>
                <Div
                  className="row"
                  sx={{
                    pl: 1,pr: 1,
                    cursor: "pointer",
                    // backgroundColor: "rgba(212, 241, 244, 0.7)",
                  }}
                >
                  <Div className="col-2">
                    <img alt="flag" src="../images/flag/icons8-india.png"/>
                  </Div>
                  <Div className="col">
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    India <br/><span style={{fontWeight: 500}}>5,000 contacts</span>
                  </Typography>
                  </Div>
                </Div>
                <Div
                  className="row"
                  sx={{
                    pl: 1,pr: 1,
                    cursor: "pointer",
                    // backgroundColor: "rgba(212, 241, 244, 0.7)",
                  }}
                >
                  <Div className="col-2">
                    <img alt="flag" src="../images/flag/icons8-america.png"/>
                  </Div>
                  <Div className="col">
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    America <br/><span style={{fontWeight: 500}}>5,000 contacts</span>
                  </Typography>
                  </Div>
                </Div>
                <Div
                  className="row"
                  sx={{
                    pl: 1,pr: 1,
                    cursor: "pointer",
                    // backgroundColor: "rgba(212, 241, 244, 0.7)",
                  }}
                >
                  <Div className="col-2">
                    <img alt="flag" src="../images/flag/icons8-china.png"/>
                  </Div>
                  <Div className="col">
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    China <br/><span style={{fontWeight: 500}}>5,000 contacts</span>
                  </Typography>
                  </Div>
                </Div>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Card className="border-card"
              sx={{
                p: 1, minHeight: "485px",
                display: showAllContacts === true ? "block" : "none",
              }}
            >
              <AllContactsList />
            </Card>
            <Card className="border-card"
              sx={{
                p: 1, minHeight: "485px",
                display: notGeneratedContacts === true ? "block" : "none",
              }}
            >
              <NotGeneratedContactsList />
            </Card>
            <Card className="border-card"
              sx={{
                p: 1, minHeight: "485px",
                display: generatedContacts === true ? "block" : "none",
              }}
            >
              <GeneratedContactsList />
            </Card>

          </Grid>
        </Grid>
      </JumboContentLayoutMain>
    </>
  );
};

export default ContactsListLeftCard;
