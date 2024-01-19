import React from "react";
import {
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import { Facebook, Google, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import Div from "@jumbo/shared/Div";
import { ASSET_IMAGES } from "../../../utils/constants/paths";
import { getAssetPath } from "../../../utils/appHelpers";

const ForgotPassword = () => {
  return (
    <Div
      sx={{
        flex: 1,
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // ml: {xs: 0, md: 60, xl: 60},
        p: (theme) => theme.spacing(4),
      }}
    >
      <Div sx={{ mb: 3, display: "inline-flex" }}>
        <Link href="#" underline="none" sx={{ display: "inline-flex" }}>
          <img
            src="../images/CRM_Farm_Logo.png"
            width={200}
            height={45}
            alt="CRM React"
          />
        </Link>
      </Div>
      <Div sx={{ display: "inline-flex" }}>
        <Card
          sx={{
            maxWidth: "100%",
            width: {xs: 250, md: 360},
            mb: 4,
            borderRadius: "10px",
            boxShadow: "0px 0px 5px 0px #95A5A6",
          }}
        >
          <Div sx={{ position: "relative", height: "100px" }}>
            
            <Div
              sx={{
                flex: 1,
                inset: 0,
                position: "absolute",
                // display: "flex",
                alignItems: "center",
                backgroundColor: (theme) =>
                  alpha(theme.palette.common.white),
                p: (theme) => theme.spacing(3),
              }}
            >
              <Typography
                variant={"h2"}
                sx={{
                  color: "common.black",
                  textAlign: "center",
                  fontSize: {xs: "1.2rem", md: "1.5rem"},
                  mb: 0,
                }}
              >
                What is My Password?
              </Typography>
              <Typography
                variant={"h4"}
                sx={{
                  color: "common.black",
                  opacity: 0.7,
                  mt: 2,
                  fontSize: "0.8rem",
                  mb: 0,
                }}
              >
                If you have forgot your password you can reset it here.
              </Typography>
            </Div>
          </Div>
          <CardContent>
            <Div sx={{ mb: 3, mt: 1 }}>
              <TextField
                fullWidth
                className="input-box"
                id="email"
                label="Email"
                defaultValue="demo@example.com"
              />
            </Div>
            <Button fullWidth className="save-button" sx={{ mb: 3 }}>
              Reset Password
            </Button>
            <Typography textAlign={"center"} variant={"body1"} mb={1}>
              Don't remember your email?{" "}
              <Link underline="none" href="#">
                Contact Support
              </Link>
            </Typography>
            <Link href="/" sx={{ float: "right", mb: 1, fontSize: "12px", cursor: "pointer"}}>Cancel</Link>
          </CardContent>
        </Card>
      </Div>
      {/* <Typography variant={"body1"} mb={2}>Or sign up with</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                    sx={{
                        bgcolor: '#385196',
                        color: 'common.white',
                        p: theme => theme.spacing(1.25),

                        '&:hover': {
                            backgroundColor: '#385196',
                        }
                    }}
                    aria-label="Facebook"
                >
                    <Facebook fontSize="small"/>
                </IconButton>
                <IconButton
                    sx={{
                        bgcolor: '#00a8ff',
                        color: 'common.white',
                        p: theme => theme.spacing(1.25),

                        '&:hover': {
                            backgroundColor: '#00a8ff',
                        }
                    }}
                    aria-label="Twitter"
                >
                    <Twitter fontSize="small"/>
                </IconButton>
                <IconButton
                    sx={{
                        bgcolor: '#23272b',
                        color: 'common.white',
                        p: theme => theme.spacing(1.25),

                        '&:hover': {
                            backgroundColor: '#23272b',
                        }
                    }}
                    aria-label="Twitter"
                >
                    <Google fontSize="small"/>
                </IconButton>
            </Stack> */}
    </Div>
  );
};

export default ForgotPassword;
