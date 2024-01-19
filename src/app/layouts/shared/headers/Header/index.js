import React, { useState } from "react";
import "./Header.css";
import Stack from "@mui/material/Stack";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import AuthUserDropdown from "../../../../shared/widgets/AuthUserDropdown";
import NotificationsDropdown from "../../../../shared/NotificationsDropdown";
import MessagesDropdown from "../../../../shared/MessagesDropdown";
import { IconButton, Slide, useMediaQuery } from "@mui/material";
import Div from "@jumbo/shared/Div";
import CloseIcon from "@mui/icons-material/Close";
import JumboIconButton from "@jumbo/components/JumboIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../../../../shared/Logo";
import { SIDEBAR_STYLES, SIDEBAR_VARIANTS } from "@jumbo/utils/constants";
import useJumboHeaderTheme from "@jumbo/hooks/useJumboHeaderTheme";
import { DrawerHeader } from "@jumbo/components/JumboLayout/style";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import SearchGlobal from "app/shared/SearchGlobal";

const Header = () => {
  const { sidebarOptions, setSidebarOptions } = useJumboLayoutSidebar();
  const [dropdownSearchVisibility, setDropdownSearchVisibility] =
    useState(false);

  const { headerTheme } = useJumboHeaderTheme();

  const showDropdownSearch = useMediaQuery("(max-width:575px)");

  const showHeaderMenu = useMediaQuery("(min-width:575px)");

  const showSettingIcon = useMediaQuery("(min-width:575px)");

  const HomeMenu = () => {
    setSidebarOptions({ open: true });
  };

  const PurchaseMenu = () => {
    setSidebarOptions({ open: true });
  };

  const SettingMenu = () => {
    setSidebarOptions({ open: true });
  };

  return (
    <React.Fragment>
      {(sidebarOptions.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER ||
        sidebarOptions.variant === SIDEBAR_VARIANTS.TEMPORARY ||
        (sidebarOptions.variant === SIDEBAR_VARIANTS.PERSISTENT &&
          !sidebarOptions.open)) && (
        <>
          <DrawerHeader>
            <Div className="menubar-logo">
              <Logo />
            </Div>
            <IconButton
              edge="start"
              color="inherit"
              mode={headerTheme.type ?? "light"}
              aria-label="open drawer"
              sx={{
                ml:
                  sidebarOptions.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER
                    ? -1
                    : -2,
                mr: 1,
                overflow: "hidden",
                fontSize: "0.5rem",
                borderRadius: "1px",
                padding: "6px 26px 18px 18px",
                height: "70px",
                backgroundColor: "white",
                "&:hover,&:active": {
                  backgroundColor: "inherit",
                  color: "#3c7c33 ",
                },
              }}
              onClick={() => setSidebarOptions({ open: !sidebarOptions.open })}
            >
              <>
                {sidebarOptions?.open ? (
                  <div className="open-close-icon-theme2">
                    <MenuOpenIcon />
                  </div>
                ) : (
                  <div className="open-close-icon-theme2">
                    <MenuIcon />
                  </div>
                )}
              </>
            </IconButton>
          </DrawerHeader>
        </>
      )}
      {sidebarOptions?.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && <></>}
      {showDropdownSearch && (
        <Slide in={dropdownSearchVisibility}>
          <Div
            sx={{
              zIndex: 1,
              left: 0,
              right: 0,
              position: "absolute",
              height: "65px",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                color: "inherit",
                transform: "translateY(-50%)",
              }}
              onClick={() => setDropdownSearchVisibility(false)}
            >
              <div className="open-close-icon-theme2">
                <CloseIcon mode={headerTheme.type ?? "light"} />
              </div>
            </IconButton>
          </Div>
        </Slide>
      )}

      {showHeaderMenu && (
        <div className="header-menus">
          <h2
            className="col"
            id="home_"
            style={{
              padding: "0px 20px 0px 15px",
              fontWeight: "400",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <Link to="/home" onClick={HomeMenu}></Link>
          </h2>

          <h2
            className="col"
            style={{
              padding: "0px 15px 0px 15px",
              fontWeight: "400",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <Link
              to="/licence/list-licence"
              href="#purchase_"
              // onClick={PurchaseMenu}
            ></Link>
          </h2>

          <h2
            className="col"
            style={{
              padding: "0px 15px 0px 15px",
              fontWeight: "400",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <Link to="/lookup/list-lookup" href="#lookup_"></Link>
          </h2>

          <h2
            className="col"
            style={{
              padding: "0px 15px 0px 15px",
              fontWeight: "400",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <Link to="/ticket/list-ticket" href="#ticket_"></Link>
          </h2>
        </div>
      )}

      {/* {!showDropdownSearch && (
        <Div sx={{ marginLeft: { xs: "0px", md: "120px" } }}>
          <SearchGlobal
            sx={{
              minWidth: { xs: 0, md: 360 },
              maxWidth: { xs: 240, md: 420 },
            }}
          />
        </Div>
      )} */}

      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 1, md: 1.3 }}
        className="Notification-icon"
        sx={{ ml: { xs: -1, md: "auto" } }}
      >
        <MessagesDropdown />
        <NotificationsDropdown />

        {showSettingIcon && (
          <div className="setting-icon-menu">
            <Link to="/settings/general">
              <ThemeProvider theme={headerTheme}>
                <JumboIconButton>
                  <SettingsIcon
                    onClick={SettingMenu}
                    sx={{
                      color: "#FFFFFF",
                      opacity: 0.95,
                      background: "#3c7c33 ",
                      width: "40px",
                      height: "40px",
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      borderRadius: "50%",
                      boxShadow: "0 5px 10px rgb(0 0 0 / 9%)",
                      padding: "10px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#000000",
                        opacity: 0.8,
                        backgroundColor: "inherit",
                      },
                    }}
                  />
                </JumboIconButton>
              </ThemeProvider>
            </Link>
          </div>
        )}

        <div className="profile-icon">
          <AuthUserDropdown />
        </div>
      </Stack>

      {/* <Sidebar showPartnerMenus={showPartnerMenus}/> */}
    </React.Fragment>
  );
};

export default Header;
