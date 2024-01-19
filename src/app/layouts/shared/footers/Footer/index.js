import React from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Div from "@jumbo/shared/Div";

const Footer = () => {

    return (
        <Div sx={{
            py: 2,
            mr: 0,    //new changes added
            px: {lg: 6, xs: 4},
            borderTop: 2,
            borderColor: 'divider',
            bgcolor: 'background.paper',
        }}>
            <Div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant={"body1"} color={"text.primary"}>Copyright <span style={{color: "#00BFFF"}}>CRM Farm</span> © 2022</Typography>
                <Div sx={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
                    <Typography> Developed by @ <span style={{color: "#00BFFF"}}>Foyer Technology</span></Typography>
                    {/* <Typography variant="h5"  sx={{display: { xs: 'none', sm: 'block' }, mb: 0, mr: 2, color: 'primary.main'}}>$24 Only</Typography>
                    <Button variant="contained">Buy Now</Button> */}
                </Div>
            </Div>
        </Div>
    );
};

export default Footer;
