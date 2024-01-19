import React from 'react';
import {Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import {TrendingUp} from "@mui/icons-material";
import ChartLastMonthSales from "./ChartLastMonthSales";

const BitcoinPrice = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            noWrapper
            title={<Typography variant={"h2"} color={"common.black"}>$9,626</Typography>}
            subheader={
                <Typography
                    variant={"h6"}
                    color={"common.grey"}
                    mb={0}
                >{t("widgets.subheader.bitcoinPrice")}</Typography>
            }
            action={
                <Typography
                    variant={"body1"}>
                    23% <TrendingUp sx={{verticalAlign: 'middle', fontSize: '1rem', ml: .5}}/>
                </Typography>
            }
            sx={{color: "common.grey"}}
            bgColor={"#FFFFFF"}
            headerSx={{pb: 0}}
        >
            <ChartLastMonthSales/>
        </JumboCardQuick>
    );
};

export default BitcoinPrice;
