import React from "react";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import { ImHome } from "react-icons/im";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AnalyticsIcon from '@mui/icons-material/Analytics';


const homemenu = [
  {
    uri: "/home",
    label: "HOME",
    type: "nav-item",
    icon: <ImHome style={{ fontSize: 22, marginLeft: "-15px" }} />,
  },
  {
    uri: "/app/contacts",
    label: "CONTACT",
    type: "nav-item",
    icon: <PermContactCalendarIcon sx={{ fontSize: 22, marginLeft: "-15px" }} />,
  },
  {
    uri: "/app/call-centre",
    label: "CALL CENTRE",
    type: "nav-item",
    icon: <SettingsPhoneIcon sx={{ fontSize: 22, marginLeft: "-15px" }} />,
  },
  {
    uri: "/leads",
    label: "LEADS",
    type: "nav-item",
    icon: <LeaderboardIcon sx={{ fontSize: 22, marginLeft: "-15px" }} />,
  },
  {
    uri: "/accounts",
    label: "ACCOUNTS",
    type: "nav-item",
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 22, marginLeft: "-15px" }} />,
  },

  {
    uri: "/campaign",
    label: "CAMPAIGN",
    type: "nav-item",
    icon: <CampaignIcon sx={{ fontSize: 22, marginLeft: "-15px" }} />,
  },
  {
    uri: "/deals",
    label: "DEALS",
    type: "nav-item",
    icon: <LocalOfferIcon sx={{ fontSize: 22, marginLeft: "-15px" }} />,
  },
  {
    uri: "/sales",
    label: "SALES",
    type: "nav-item",
    icon: <TrendingDownIcon sx={{ fontSize: 22, marginLeft: "-15px" }} />,
  },
  {
    uri: "/customer-support",
    label: "CUSTOMER SUPPORT",
    type: "nav-item",
    icon: <SupportAgentIcon sx={{ fontSize: 22, marginLeft: "-15px" }} />,
  },
  {
    uri: "/analytics",
    label: "ANALYTICS",
    type: "nav-item",
    icon: <AnalyticsIcon sx={{ fontSize: 22, marginLeft: "-15px" }} />,
  },
];
export default homemenu;
