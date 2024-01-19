import React from "react";
import Page from "@jumbo/shared/Page";
import Home from "../pages/home";
import Login from "app/pages/auth-pages/login";
import login from "app/pages/auth-pages/login";
import ForgotPassword from "app/pages/auth-pages/forgot-password/ForgotPassword";
import LandingPage from "app/pages/landing-page/LandingPage";
import EmailLists from "app/pages/home/email-lists/EmailLists";
import ChatLists from "app/pages/home/chat-lists/ChatLists";
import dashboardRoutes from "./dashboardRoutes";
import appsRoutes from "./appsRoutes";
import authRoutes from "./authRoutes";
import { Navigate } from "react-router-dom";
import CalenderList from "app/pages/home/calender-lists/CalenderList";
import ContactsApp from "app/pages/apps/contacts/ContactsApp";
import ContactsListLeftCard from "app/pages/contacts/ContactsListLeftCard";
import OverviewContact from "app/pages/contacts/overviewcontact/OverviewContact";
import CallCenterLeftCardLists from "app/pages/call-center/call-center-left-side-card/CallCenterLeftCardLists";
import AddLeads from "app/pages/leads/AddLeads";
import AccountsLeftSide from "app/pages/accounts/accounts-home/accounts-left-side/AccountsLeftSide";
import SalesLeftCard from "app/pages/sales/SalesLeftCard";
import AnalyticsLeftSide from "app/pages/analytics/AnalyticsLeftSide";
import CampaignLeftSideCardList from "app/pages/campaign/campaign-left-side-card/CampaignLeftSideCardList";
import DealsLeftSideCardList from "app/pages/deals/deals-left-side-card-list/DealsLeftSideCardList";
import LeadsLeftSide from "app/pages/leads/leads-left-side-card/LeadsLeftSide";
import CustomerSupportLeftCard from "app/pages/customersupport/customersupport-left-card/CustomerSupportLeftCard";
   




/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/


const routesForPublic = [

    ...dashboardRoutes,
    ...appsRoutes,
    ...authRoutes,
    // {
    //     path: "/",
    //     element: <Page component={Login} />,
    //     target: "_blank"
    // },
    {
        path: "/home",
        element: <Page component={Home} />
    },

    {
        path: "/app/mails",
        element: <Page component={EmailLists} />
    },

    {
        path: "/app/chats",
        element: <Page component={ChatLists} />
    },

    {
        path: "/app/calender",
        element: <Page component={CalenderList} />
    },


    {
        path: ["/app/contacts", "/app/contacts/:overview"],
        element: <Page component={ContactsListLeftCard} />
    },

    {
        path: "/app/contacts/overview",
        element: <Page component={OverviewContact} />
    },


    {
        path: "/app/call-centre",
        element: <Page component={CallCenterLeftCardLists} />
    },


    // anirudh menon

    {
        path: "/leads",
        element: <Page component={LeadsLeftSide} />
        
    },
    {
        path: "/leads/addleads",
        element: <Page component={AddLeads} />
        
    },
    {
        path: "/sales",
        element: <Page component={SalesLeftCard} />
        
    },
    {
        path: "/analytics",
        element: <Page component={AnalyticsLeftSide} />
        
    },
//  ij harish

{
    path: "/accounts",
    element: <Page component={AccountsLeftSide} />
    
},

// bk dhanush and jayadurga

{
    path: "/campaign",
    element: <Page component={CampaignLeftSideCardList} />
    
},

{
    path: "/deals",
    element: <Page component={DealsLeftSideCardList} />
    
},

{
    path: "/customer-support",
    element: <Page component={CustomerSupportLeftCard} />
    
},

];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [
 

];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [
    // {
    //     path: "/login",
    //     element: <Page component={Login} layout={"solo-page"} disableSmLogin={false}/>
    // },
    {
        path: "/",
        element: <Page component={LandingPage} layout={"solo-page"} disableSmLogin={true} />
    },
    {
        path: "/login",
        element: <Page component={login} layout={"solo-page"} disableSmLogin={true} />
    },
    {
        path: "/auth-pages/forgot-password",
        element: <Page component={ForgotPassword} layout={"solo-page"} disableSmLogin={true} />
    },
    
];


const routes = [
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export {routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly};