import React from "react";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Stack from "@mui/material/Stack";
import { TrendingDown } from "@mui/icons-material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Span from "@jumbo/shared/Span";
import { useTranslation } from "react-i18next";
import Div from "@jumbo/shared/Div";

const PageViews = () => {
  const { t } = useTranslation();
  return (
    <JumboCardQuick
      // title={<Typography variant={"h5"} mb={0}>{t('widgets.title.pageViews')}</Typography>}
      // action={
      //     <Stack direction={"row"} spacing={1}>
      //         <Chip label={"Monthly"} color={"success"} size={"small"}/>
      //         <ShowChartIcon fontSize={"small"}/>
      //     </Stack>
      // }
      wrapperSx={{ textAlign: "center" }}
      // headerSx={{
      //     borderBottom: 1,
      //     borderBottomColor: 'divider'
      // }}
    >
      <Div sx={{ padding: "14px 0px" }}>
        <Typography variant={"h2"}>386,290</Typography>
        <Typography variant={"body1"}>
          Avg. daily views:
          <Span sx={{ color: "error.main", ml: 1 }}>
            7,829
            <TrendingDown
              fontSize={"small"}
              sx={{ verticalAlign: "middle", ml: 1 }}
            />
          </Span>
        </Typography>
      </Div>
    </JumboCardQuick>
  );
};

export default PageViews;
