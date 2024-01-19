import React from 'react';
import Typography from "@mui/material/Typography";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import {TrendingUp} from "@mui/icons-material";
import OnlineSignupChartFilled from "./OnlineSignupChartFilled";

const RipplePrice = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h3"} color={"common.black"}>$9,626</Typography>}
            subheader={
                <Typography
                    variant={"h6"}
                    color={"common.grey"}
                    mb={0}
                >{t('widgets.subheader.ripplePrice')}</Typography>
            }
            action={
                <Typography
                    variant={"body1"}
                >
                    6% <TrendingUp sx={{verticalAlign: 'middle', fontSize: '1rem', ml: .5}}/>
                </Typography>
            }
            sx={{color: "common.black"}}
            bgColor={"#FFFFFF"}
            wrapperSx={{pt: 0}}
        >
            <OnlineSignupChartFilled color={"#AED6F1 "} />
        </JumboCardQuick>
    );
};

export default RipplePrice;
