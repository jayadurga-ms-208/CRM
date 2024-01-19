import React, { useState } from "react";
import "./Login.css";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Div from "@jumbo/shared/Div";
import * as yup from "yup";
import authServices from "../../../services/auth-services";
import { useNavigate } from "react-router-dom";
import useJumboAuth from "@jumbo/hooks/useJumboAuth";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Form, Formik } from "formik";


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter your password").required("Password is required"),
});
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));



const Login = () => {
  const { setAuthToken } = useJumboAuth();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (event) => {
    setValues(event.target.value);
  };


  const mutation = { isError: false };


  const onSignIn = (email, password) => {
    // mutation.mutate({email, password});
    navigate("/home");
    // authServices.signIn({ email, password }).then((data) => {
    //   setAuthToken(data?.token);
    //   navigate("/home");
    // });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <>
      <Div className="col-12 landing-page">
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
      </Div>
     
      <Grid container>
        <Grid item xs={12} md={3} sm={12} xl={3}></Grid>
        {/* code for login image card */}
        <Grid item xs={12} sm={12} md={6} xl={6} sx={{ p: { xs: "0px", lg: "20px 60px", xl: "80px 160px" } }}>
          <br />
          <br />
          <Card
            sx={{
              p: 2, borderRadius: "5px",
              // boxShadow: "none",
              boxShadow: "0px 0px 5px 0px"
            }}
          >
            <Div className="profile-icon">
              <img
                className="image-logo"
                src="./../../../images/CRM_Farm_Logo.png"
                width={200}
                height={45}
                alt="CRM React"
              ></img>
            </Div>
            <Div className="signin-title">Sign In</Div>
            <Formik
              validateOnChange={true}
              initialValues={{
                email: 'ponkumar@foyertech.com',
                password: '123456',
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                onSignIn(data.email, data.password);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form style={{ textAlign: 'left' }} noValidate autoComplete='off'>

                  {mutation.isError && <p>{mutation.error.message}</p>}
                  <Div className="mt-3 ">
                    <TextField
                      fullWidth
                      type="text"
                      autoComplete="off"
                      className="input-box"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Enter Your Mail"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Div>
                  <Div className="mt-3">
                    <TextField
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      autoComplete="off"
                      className="input-box"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Enter Your Password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Div>
                  <Div
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                      mb: 1,
                      flexDirection: { xs: "row", sm: "row", md: "row" },
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      className="checkbox-label"
                      label="Remember me"
                    />
                    <Typography className="fgt-pwd-text" variant={"body1"}>
                      <Link href="/auth-pages/forgot-password" underline={"none"}>
                        Forgot password?
                      </Link>
                    </Typography>

                  </Div>
                  <Button type="submit" className="save-button" loading={isSubmitting || mutation.isLoading}>
                    Log In
                  </Button>
                </Form>
              )}
            </Formik>

            {/* <Div className="not-member-account">
            Not a member?<span> Create an Account</span>
          </Div> */}
          </Card>
        </Grid>
        <Grid item xs={12} md={3} sm={12} xl={3}></Grid>
      </Grid>
      </Div>
    </>
  );
};
export default Login;
