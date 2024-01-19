import React from 'react';
import Div from "@jumbo/shared/Div";
import useJumboContentLayout from "@jumbo/hooks/useJumboContentLayout";

const JumboContentLayoutMain = ({children}) => {
    const contentLayout = useJumboContentLayout();
    return (
        <Div
            sx={{
                display: 'flex',
                flex: 1,
                // mt: '-30px',
                // mb: '-30px',
                // ml: '-47px',
                // mr: {xs: '-32px', md: '-46px'},
                // overflow: "hidden",
                // position: "relative",
                p: {xs: 2, md: 3},
                minWidth: 0,
                flexDirection: 'column',
                minHeight: '100%',
                backgroundColor: "#FFFFFF",
                ...contentLayout?.main?.sx
            }}
            className="CmtLayout-main"
        >
            {children}
        </Div>
    );
};

export default JumboContentLayoutMain;