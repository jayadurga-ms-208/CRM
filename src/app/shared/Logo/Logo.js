import React from "react";
import "./Logo.css";
import Div from "@jumbo/shared/Div";
import Link from "@mui/material/Link";
import { ASSET_IMAGES } from "../../utils/constants/paths";
import { Typography } from "@mui/material";
const Logo = ({ mini, mode, sx }) => {
  return (
    <Div sx={{ display: "flex", flexDirection: "column" }}>
      <Div sx={{ display: "inline-flex", ...sx }}>
        <Link href={"/"}>
          {!mini ? (
            <img
              className="full-logo"
              src={
                mode === "light"
                  ? `${ASSET_IMAGES}/CRM_Farm_Logo.png`
                  : `${ASSET_IMAGES}/CRM_Farm_Logo.png`
              }
              width={140}
              height={37}
              alt="crm"
            />
          ) : (
            <img
              className="short-logo"
              src={
                mode === "light"
                  ? `${ASSET_IMAGES}/company-logo.png`
                  : `${ASSET_IMAGES}/company-logo.png`
              }
              width={40}
              height={40}
              alt="crm"
            />
          )}
        </Link>
      </Div>
      {/* {!mini ? (<Typography variant="h4">Tech Solutions Pvt Ltd</Typography>) : ("")} */}
    </Div>
  );
};
Logo.defaultProps = {
  mode: "light",
};
export default Logo;
