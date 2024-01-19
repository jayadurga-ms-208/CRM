import {
  Card,
  CardMedia,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import SalesChart from "./charts/SalesChart";
import StackedChart from "./charts/StackedChart";
import VerticalChart from "./charts/VerticalChart";

function createData(
  apv,
  sp,
  comp,
  country,
  pck,
  stageName,
  comms,
  avgP,
  score,
  nr
) {
  return { apv, sp, comp, country, pck, stageName, comms, avgP, score, nr };
}

const rows = [
  createData(
    "2022-05-30",
    "Ranjini",
    "Foyer tech",
    "India",
    "Professional",
    "Lost",
    "Other",
    "$500",
    "2",
    "421"
  ),
  createData(
    "2022-05-30",
    "Prakash",
    "Foyer tech",
    "India",
    "Professional",
    "Lost",
    "Needs changed",
    "$500",
    "2",
    "421"
  ),
  createData(
    "2022-05-30",
    "Tamil",
    "Foyer tech",
    "India",
    "Basic",
    "Negotiation",
    "Perfect fit",
    "$500",
    "2",
    "421"
  ),
  createData(
    "2022-05-30",
    "Jaya Prakash",
    "Foyer tech",
    "India",
    "Premium",
    "Negotiation",
    "Perfect fit",
    "$500",
    "2",
    "421"
  ),
  createData(
    "2022-05-30",
    "Prashanth",
    "Foyer tech",
    "India",
    "Premium",
    "Lost",
    "Competitor choosen",
    "$500",
    "2",
    "421"
  ),
];

const CRMdashboard = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid
            container
            pl={3}
            pr={14}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              background: "rgba(108, 99, 255, 0.5)",
              height: "39px",
              borderRadius: "10px",
              color: "#000000",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>
              CRM Opportunities Dashboard
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>Date: 17/10/2022</Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* spn 2 Container */}
      <Grid container columnSpacing={2} rowSpacing={2} pt={2}>
        <Grid item xs={6}>
          {/* 4 Small Cards Below */}
          <Grid container columnSpacing={1.5} rowSpacing={2.5}>
            {/* 1st Small Card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  padding: "8px",
                  borderRadius: "10px",
                  width: "100%",
                  maxHeight: "114px",
                  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography sx={{ fontSize: "18px" }} pl={0.5}>
                  Current Opportunities
                </Typography>
                <Grid container pt={1} alignItems={"center"} p={1}>
                  <Grid item xs>
                    <CardMedia
                      component={"img"}
                      sx={{ height: "50px", width: "50px" }}
                      image={
                        "/images/Form-3-Icons/Equal-Housing-Opportunity.png"
                      }
                      alt={"Equal-Housing-Opportunity"}
                    />
                  </Grid>
                  <Grid item xs>
                    <Grid container direction={"column"} alignItems={"end"}>
                      <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
                        107(+7%)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          paddingRight: "12px",
                        }}
                      >
                        vs last month
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            {/* 2nd Small */}
            <Grid item xs={6}>
              <Card
                sx={{
                  padding: "8px",
                  borderRadius: "10px",
                  width: "100%",
                  maxHeight: "114px",
                  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography
                  sx={{ fontSize: "18px", whiteSpace: "nowrap" }}
                  pl={1}
                >
                  Current purchase value
                </Typography>
                <Grid container pt={1} alignItems={"center"} p={1}>
                  <Grid item xs={4}>
                    <CardMedia
                      component={"img"}
                      sx={{ height: "50px", width: "50px" }}
                      image={"/images/Form-3-Icons/Add-Shopping-Cart.png"}
                      alt={"Add-Shopping-Cart"}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Grid container direction={"column"} alignItems={"end"}>
                      <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
                        $55,84(+1%)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          paddingRight: "12px",
                        }}
                      >
                        vs last month
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            {/* 3rd Small Card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  // border: "1px solid black",
                  padding: "8px",
                  borderRadius: "10px",
                  // maxWidth: "250px",
                  width: "100%",

                  height: "114px",
                  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography
                  sx={{ fontSize: "18px", whiteSpace: "nowrap" }}
                  pl={1}
                >
                  Average Purchase value
                </Typography>
                <Grid container pt={1} alignItems={"center"} p={1}>
                  <Grid item xs={4}>
                    <CardMedia
                      component={"img"}
                      sx={{ height: "50px", width: "50px" }}
                      image={"/images/Form-3-Icons/Return-Purchase.png"}
                      alt={"Return-Purchase"}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Grid container direction={"column"} alignItems={"end"}>
                      <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
                        $578(+5%)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          paddingRight: "12px",
                        }}
                      >
                        vs last month
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            {/* 4th Small Card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  // border: "1px solid black",
                  padding: "8px",
                  borderRadius: "10px",
                  // maxWidth: "250px",
                  width: "100%",

                  height: "114px",
                  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography sx={{ fontSize: "18px" }} pl={1}>
                  Win rate
                </Typography>
                <Grid container pt={1} alignItems={"end"} p={1}>
                  <Grid item xs={4}>
                    <CardMedia
                      component={"img"}
                      sx={{ height: "50px", width: "50px" }}
                      image={"/images/Form-3-Icons/Bronze-Medal.png"}
                      alt={"Bronze-Medal"}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Grid container direction={"column"} alignItems={"end"}>
                      <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
                        7%(-8%)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          paddingRight: "12px",
                        }}
                      >
                        vs last month
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* 2nd COLUMN Graph */}
        <Grid item xs={6}>
          <Card
            sx={{
              // border: "1px solid black",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                paddingTop: "10px",
                paddingLeft: "20px",
              }}
            >
              New sales opportunities & purchase value
            </Typography>
            <Typography sx={{ fontSize: "12px", paddingLeft: "20px" }}>
              by first contact date
            </Typography>
            <SalesChart />
          </Card>
        </Grid>
        {/* 2nd Row 1st Column */}
        <Grid item xs={6}>
          <Card
            sx={{
              height: "271px",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Grid container p={0.5} pb={0} columnSpacing={1}>
              <Grid item xs={4}>
                <Card
                  sx={{
                    maxWidth: "160px",
                    minHeight: "65px",
                    background: "#CECEFA",
                    borderTopLeftRadius: "10px",
                  }}
                >
                  <Grid
                    container
                    direction={"column"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                      Lost Opportunities
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                      <span style={{ color: "#304995" }}>46</span>(+2%)
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      vs last month
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card
                  sx={{
                    maxWidth: "160px",
                    minHeight: "65px",
                    background: "#CECEFA",
                  }}
                >
                  <Grid
                    container
                    direction={"column"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                      Lost Purchase
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                      <span style={{ color: "#DB161B" }}>25,784</span>(+2%)
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      vs last month
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card
                  sx={{
                    maxWidth: "160px",
                    minHeight: "65px",
                    background: "#CECEFA",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <Grid
                    container
                    direction={"column"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                      Opp Chumrate
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                      <span style={{ color: "#6C63FF" }}>45%</span>(+2%)
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      vs last month
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
            <Grid container columnSpacing={2}>
              <Grid item xs={8} pl={4} pt={4}>
                <VerticalChart />
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  direction={"column"}
                  rowSpacing={1}
                  pr={3}
                  pt={3}
                >
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "4px",
                        marginRight: "8px",
                        height: "10px",
                        width: "10px",
                        background: "#FFB67E",
                      }}
                    />
                    <Typography sx={{ fontSize: "12px", color: "#000000" }}>
                      Number of lost
                      <br />
                      opportunities
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "4px",
                        marginRight: "8px",
                        height: "10px",
                        width: "10px",
                        background: "#DB161B",
                      }}
                    />
                    <Typography sx={{ fontSize: "12px", color: "#000000" }}>
                      Lost purchase
                      <br />
                      value
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        {/* 2nd Row - 2nd Column*/}
        <Grid item xs={6}>
          <Card
            sx={{
              height: "271px",
              // border: "1px solid black",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: 600, p: 1, pb: 0 }}>
              Number of opportunities & average purchase value By package
            </Typography>
            <StackedChart />
          </Card>
        </Grid>
        {/* 3rd row Table spn */}
        <Grid item xs={12}>
          <Card
            sx={{
              // border: "1px solid black",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              p={1.5}
              pl={5}
              sx={{ fontSize: "18px", fontWeight: 600, color: "#000000" }}
            >
              Details latest opportunities
            </Typography>
            <TableContainer component={Paper} sx={{ p: 2, pt: 1 }}>
              <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ bgcolor: "rgba(0, 123, 255, 0.75)" }}>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Average Purchase value
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Sales Person
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Company
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Country
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Package
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Stage Name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Comment
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Avg purchase
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Score
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      Nr.
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={row.sp}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        background:
                          index % 2 === 0
                            ? "rgba(125, 125, 125, 0.3)"
                            : "rgba(0, 123, 255, 0.5)",
                      }}
                    >
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                        align="center"
                      >
                        {row.apv}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                        align="center"
                      >
                        {row.sp}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                        align="center"
                      >
                        {row.comp}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                        align="center"
                      >
                        {row.country}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                        align="center"
                      >
                        {row.pck}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                          color:
                            row.stageName === "Lost" ? "#DB161B" : "#987503",
                        }}
                        align="center"
                      >
                        {row.stageName}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                        align="center"
                      >
                        {row.comms}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                        align="center"
                      >
                        {row.avgP}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                        align="center"
                      >
                        {row.score}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                        align="center"
                      >
                        {row.nr}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CRMdashboard;
