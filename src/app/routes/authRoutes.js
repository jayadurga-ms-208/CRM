import React from "react";
import Login from "../pages/auth-pages/login";
// import Login from "../pages/auth-pages/login/Login";
// import Login2 from "../pages/auth-pages/login2";
// import Signup1 from "../pages/auth-pages/signup1";
import Signup2 from "../pages/auth-pages/signup2";
import ForgotPassword from "../pages/auth-pages/forgot-password";
import ResetPassword from "../pages/auth-pages/reset-password";
import Page from "@jumbo/shared/Page";
import LandingPage from "app/pages/landing-page/LandingPage";

const authRoutes = [
    // {
    //     path: "/auth-pages/login-1",
    //     element: <Page component={Login1} layout={"solo-page"} />,
    // },
    {
        path: "/",
        element: <Page component={LandingPage} layout={"solo-page"} />
    },
    {
        path: "/login",
        element: <Page component={Login} layout={"solo-page"} />
    },
    // {
    //     path: "/user/login",
    //     element: <Page component={Login} layout={"solo-page"} />
    // },
    // {
    //     path: "/auth-pages/signup-1",
    //     element: <Page component={Signup1} layout={"solo-page"} />
    // },
    {
        path: "/auth-pages/signup-2",
        element: <Page component={Signup2} layout={"solo-page"} />
    },
    {
        path: "/auth-pages/forgot-password",
        element: <Page component={ForgotPassword} layout={"solo-page"} />
    },
    {
        path: "/auth-pages/reset-password",
        element: <Page component={ResetPassword} layout={"solo-page"} />
    }
];

export default authRoutes;
