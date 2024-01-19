import Div from "@jumbo/shared/Div";
import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="col-12 landing-page">
        <Div className="landingpage-header">
          <Div className="profile-icon">
            <img
              className="image-logo"
              src="./../../../images/CRM_Farm_Logo.png"
              width={190}
              height={40}
              alt="CRM"
            ></img>
          </Div>
          {/* <Div>
            <ul className="d-flex justify-content-between">
              <li className="list-items">Features</li>
              <li className="list-items">Solution</li>
              <li className="list-items">Pricing</li>
            </ul>
          </Div>
          <Div sx={{ fontSize: "16px", fontWeight: 500 }}>SignIn</Div> */}
        </Div>

        <Div className="landingpage-body">
          <Div className="col-7">
            <Typography className="greeting-title">
              Greetings From CRMFarm Team
            </Typography>
            <Typography className="greeting-description">
              CRMFarm will help you grow your business.
            </Typography>
            <Typography className="greeting-details">
              Clients,schedule,warehouse,salary,notifications,finances,online
              appoinment,ip-telephony,mobile application
            </Typography>
            <Div sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                className="login-button"
                variant="contained"
                onClick={() => navigate("/login")}
              >
                Login Here
              </Button>
            </Div>
          </Div>

          <Div className="col-5" sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: "45px"}}>
            <img src="./../images/auth/login-img.png" />
          </Div>
        </Div>
      </div>
    </>
  );
};

export default LandingPage;
