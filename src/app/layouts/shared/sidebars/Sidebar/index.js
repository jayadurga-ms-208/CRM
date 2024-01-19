import React, { Suspense } from 'react';
import { IconButton } from "@mui/material";
import JumboVerticalNavbar from "@jumbo/components/JumboVerticalNavbar/JumboVerticalNavbar";
import { DrawerHeader } from "@jumbo/components/JumboLayout/style";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import useJumboSidebarTheme from "@jumbo/hooks/useJumboSidebarTheme";
import { SIDEBAR_STYLES, SIDEBAR_VIEWS } from "@jumbo/utils/constants/layout";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Zoom from "@mui/material/Zoom";
import Div from "@jumbo/shared/Div";
import SidebarSkeleton from "./SidebarSkeleton";
import homemenu from './homemenu';
// import settingmenus from './settingmenu';
import Logo from 'app/shared/Logo';
// import requestmenus from './requestmenus';




const Sidebar = (sidebarOptions) => {



    return (
        <React.Fragment>

            <SidebarHeader />

            <JumboScrollbar
                autoHide
                autoHideDuration={250}
                autoHideTimeout={500}
            >
                <Suspense
                    fallback={
                        <Div
                            sx={{
                                display: 'flex',
                                minWidth: 0,
                                alignItems: 'center',
                                alignContent: 'center',
                                px: 3,
                                zIndex: 1,
                            }}
                        >
                            <SidebarSkeleton />
                        </Div>
                    }
                >
                    <br /><br />
                    <JumboVerticalNavbar translate items={homemenu} style={{ display: sidebarOptions === true ? 'block' : 'none' }} />

                    {/* <JumboVerticalNavbar translate items={requestmenus} style={{ display: showRequestMenus === true ? 'block' : 'none' }} />

                    <JumboVerticalNavbar translate items={settingmenus} style={{ display: showSettingMenus === true ? 'block' : 'none' }} /> */}

                </Suspense>
            </JumboScrollbar>
        </React.Fragment>
    );
};

const SidebarHeader = () => {
    const { sidebarOptions, setSidebarOptions } = useJumboLayoutSidebar();
    const { sidebarTheme } = useJumboSidebarTheme();

    const isMiniAndClosed = React.useMemo(() => {
        return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
    }, [sidebarOptions.view, sidebarOptions.open]);


    return (
        <React.Fragment>
            {
                sidebarOptions?.style !== SIDEBAR_STYLES.CLIPPED_UNDER_HEADER &&
                <DrawerHeader>
                    <Logo mini={isMiniAndClosed} mode={sidebarTheme.type}
                        sx={{
                            margin: "5px 0px 0px 10px",
                            borderRadius: "0%",
                        }}
                    />
                    {
                        sidebarOptions?.view !== SIDEBAR_VIEWS.MINI &&
                        <Zoom in={sidebarOptions?.open}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{
                                    ml: 0,
                                    mr: -2.5,
                                    fontSize: "2.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "0px 30px",
                                    margin: "-8px 0px 0px 0px",
                                    borderRadius: "0%",
                                    '&:hover,&:active': {
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "inherit",
                                        color: "#3c7c33 ",
                                    }
                                }}
                                onClick={() => setSidebarOptions({ open: false })}
                            >
                                <div className='open-close-icon-theme3'>
                                    <MenuOpenIcon />
                                </div>
                            </IconButton>
                        </Zoom>
                    }
                </DrawerHeader>
            }
        </React.Fragment>
    )
};

export default Sidebar;
