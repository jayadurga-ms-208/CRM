import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {
  Avatar,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import TinyBarChart from "app/pages/charts/Bar/components/TinyBarChart";
import PieChartWithPaddingAngle from "app/pages/charts/Pie/components/PieChartWithPaddingAngle";
import React from "react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Paper from "@mui/material/Paper";
import dataform from "./demo-codes/dataform";

const data1 = [
  { name: "Call", students: 1000, fill: "#000000" },
  { name: "Other", students: 400, fill: "#748E70" },
  { name: "Lead research", students: 400, fill: "#104210" },
  { name: "Email", students: 400, fill: "#0F7272" },
  { name: "Preparation", students: 500, fill: "#7ACD2E" },
];

const data0 = [{ name: "0", students: 1000 }];

const BarStyle = {
  width: "10rem",
  height: "10rem",
  background: "#F0F0F0",
  padding: "0.5rem",
  float: "right",
};
function createData(sales, one, two, three, four) {
  return { sales, one, two, three, four };
}

const data = [
  {
    name: "Tamil",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Gokul",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Prasanth",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Shanath",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Hari",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
];

const rows = [
  createData("Tamil Selvan", "85%", "45%", "85%", "85%"),
  createData("Tamil Selvan", "85%", "45%", "85%", "85%"),
  createData("Tamil Selvan", "85%", "45%", "85%", "85%"),
];

const FirstForm = () => {
  return (
    <>
      <Card
        sx={{
          bgcolor: "#ADADAD99",
          width: "100%",
          height: "100%",
          borderRadius: 5,
          p: 0,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            paddingLeft: "100px",
            m: 0,
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          Analytics
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Grid container rowSpacing={7} paddingLeft={2} paddingBottom={6}>
              <Grid item xs={12}>
                <Card
                  className="border-card"
                  sx={{ p: 1, py: 5, borderRadius: 5, boxShadow: 5 }}
                >
                  <Typography variant="h2" sx={{ fontWeight: 500, ml: "18%" }}>
                    Avg Contract Value
                    <br />
                    {/* <span style={{ fontSize: 18, fontWeight: 500 }}> */}
                      $3,547 <span style={{color:"#007BFF"}}>(+5)</span>
                    {/* </span> */}
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h2" sx={{ fontWeight: 500, ml: "18%" }}>
                    Avg sales Cycle
                    <br />
                    32 days <span style={{color:"#007BFF"}}>(+5)</span>
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  className="border-card"
                  sx={{  borderRadius: 5, boxShadow: 5,py:3,px:1 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      pl: 2,
                      paddingLeft: 1,
                      paddingBottom: 0,
                      mb:0
                    }}
                  >
                    Sales Cycle Steps
                  </Typography>
                  <Typography sx={{pt:0,mt:0,ml:1,mb:2}}>By type</Typography>
                  <Grid container spacing={2} sx={{ mb: "10px", pl: 1 }}>
                    <Grid item xs={4}>
                      <Typography>Opportunity</Typography>
                    </Grid>
                    <Grid item>
                      <Card
                        className="border-card"
                        sx={{
                          bgcolor: "rgba(217, 217, 217, 0.75)",
                          p: 0,
                          m: 0,
                          width: "110px",
                        }}
                      >
                        <Div
                          sx={{
                            bgcolor: "#007BFF",
                            width: "20px",
                            color: "white",
                            pl: "2px",
                          }}
                        >
                          4.1
                        </Div>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mb: "10px", pl: 1 }}>
                    <Grid item xs={4}>
                      <Typography>Proposal</Typography>
                    </Grid>
                    <Grid item>
                      <Card
                        className="border-card"
                        sx={{
                          bgcolor: "rgba(217, 217, 217, 0.75)",
                          p: 0,
                          m: 0,
                          width: "110px",
                        }}
                      >
                        <Div
                          sx={{
                            bgcolor: "#1B830B",
                            width: "20px",
                            color: "white",
                            ml: 5,
                            pl: "2px",
                          }}
                        >
                          4.2
                        </Div>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mb: "10px", pl: 1 }}>
                    <Grid item xs={4}>
                      <Typography>Negotiation</Typography>
                    </Grid>
                    <Grid item>
                      <Card
                        className="border-card"
                        sx={{
                          bgcolor: "rgba(217, 217, 217, 0.75)",
                          p: 0,
                          m: 0,
                          width: "110px",
                        }}
                      >
                        <Div
                          sx={{
                            bgcolor: "#7D7D7D",
                            width: "20px",
                            color: "white",
                            ml: 8,
                            pl: "2px",
                          }}
                        >
                          8.7
                        </Div>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ pl: 1 }}>
                    <Grid item xs={4}>
                      <Typography>Closing</Typography>
                    </Grid>
                    <Grid item>
                      <Card
                        className="border-card"
                        sx={{
                          bgcolor: "rgba(217, 217, 217, 0.75)",
                          p: 0,
                          m: 0,
                          width: "110px",
                        }}
                      >
                        <Div
                          sx={{
                            bgcolor: "#007BFF",
                            width: "20px",
                            color: "white",
                            pl: "2px",
                          }}
                        >
                          4.1
                        </Div>
                      </Card>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  className="border-card"
                  sx={{ p: 0, borderRadius: 5, boxShadow: 5 }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "28%",
                      borderRadius: 2,
                      backgroundColor: "#CECEFA",
                      color: "#007BFF",
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 400,
                        pl: 2,
                        paddingTop: 2,
                        paddingLeft: 3,
                      }}
                    >
                      AVG lead response time
                      <br />
                      1.0hours(-3)
                    </Typography>
                  </Box>
                  <Typography variant="h3" sx={{ pl: 3 }}>
                    AVG lead response time
                  </Typography>
                  <Typography variant="h5y" sx={{ pl: 3 }}>
                    by sales rep in hours
                  </Typography>
                  {/* <JumboDemoCard title={"AVG lead response time"} demoCode={code} wrapperSx={{ p: 0, backgroundColor: 'background.paper' }}></JumboDemoCard> */}
                  <ResponsiveContainer width="90%" height={200}>
                    <ComposedChart
                      minWidth="500px"
                      layout="vertical"
                      width={500}
                      height={400}
                      data={data}
                    >
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" scale="band" />
                      <Bar dataKey="pv" barSize={20} fill="#FFB67E" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
              <Grid sx={{mb:7}}>
                <Card
                  className="border-card"
                  sx={{ p: 1, borderRadius: 5, boxShadow: 5 }}
                >
                <Typography variant="h2" sx={{fontWeight:"600",mb:0,pb:0,ml:1,mt:1}}>Sales Activity</Typography>
                <Typography sx={{pt:0,mt:0,ml:1}}>By type</Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Grid container spacing={1} sx={{my:0.5,ml:1}}>
                        <Grid item>
                          <Div
                            sx={{
                              bgcolor: "black",
                              width: "18px",
                              color: "black",
                              pl: "2px",
                            }}
                          >
                            .
                          </Div>
                        </Grid>
                        <Grid item>
                          <Typography>Call</Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1} sx={{my:0.5,ml:1}}>
                        <Grid item>
                          <Div
                            sx={{
                              bgcolor: "#7ACD2E",
                              width: "18px",
                              color: "#7ACD2E",
                              pl: "2px",
                            }}
                          >
                            .
                          </Div>
                        </Grid>
                        <Grid item>
                          <Typography>Preparation</Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1} sx={{my:0.5,ml:1}}>
                        <Grid item>
                          <Div
                            sx={{
                              bgcolor: "#0F7272",
                              width: "18px",
                              color: "#0F7272",
                              pl: "2px",
                            }}
                          >
                            .
                          </Div>
                        </Grid>
                        <Grid item>
                          <Typography>Email</Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1} sx={{my:0.5,ml:1}}>
                        <Grid item>
                          <Div
                            sx={{
                              bgcolor: "#104210",
                              width: "18px",
                              color: "#104210",
                              pl: "2px",
                            }}
                          >
                            .
                          </Div>
                        </Grid>
                        <Grid item>
                          <Typography>Lead research</Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1} sx={{my:0.5,ml:1}}>
                        <Grid item>
                          <Div
                            sx={{
                              bgcolor: "#748E70",
                              width: "18px",
                              color: "#748E70",
                              pl: "2px",
                            }}
                          >
                            .
                          </Div>
                        </Grid>
                        <Grid item>
                          <Typography>Other</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <ResponsiveContainer width="100%" height={120}>
                        <PieChart width={50} height={50}>
                          <Pie
                            data={data1}
                            dataKey="students"
                            outerRadius={50}
                            innerRadius={35}
                          />
                          <Pie
                            data={data0}
                            dataKey="students"
                            outerRadius={35}
                            innerRadius={0}
                            fill="#D9D9D9"
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </Grid>
                  </Grid>

                </Card>
              </Grid>
              <Grid sx={{mb:7}}>
                <Card
                  className="border-card"
                  sx={{
                    p: 1,
                    borderRadius: 5,
                    boxShadow: 5,
                  }}
                >
                  <Typography variant="h2" sx={{fontWeight:"600",mb:0,pb:0,ml:1,mt:1}}>AVG contract value</Typography>
                <Typography sx={{pt:0,mt:0,ml:1,mb:1}}>By Rep and Nr. of Follow Up</Typography>
                    <ResponsiveContainer width="80%" height={150}>
                    
                      <BarChart
                        data={dataform}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip
                          labelStyle={{ color: "black" }}
                          itemStyle={{ color: "black" }}
                          cursor={false}
                        />
                        <XAxis />
                        <defs>
                          <linearGradient x1="0" y1="0" x2="0" y2="1">
                            <stop
                              offset="5%"
                              stopColor="#6200EE"
                              stopOpacity={1}
                            />
                            <stop
                              offset="95%"
                              stopColor="#B819D2"
                              stopOpacity={1}
                            />
                          </linearGradient>
                        </defs>
                        <defs>
                          <linearGradient x1="0" y1="0" x2="0" y2="1">
                            <stop
                              offset="5%"
                              stopColor="#1ABBDE"
                              stopOpacity={1}
                            />
                            <stop
                              offset="95%"
                              stopColor="#09BCA7"
                              stopOpacity={1}
                            />
                          </linearGradient>
                        </defs>

                        <Bar dataKey="Cost_Per_Lead" fill={"#1e88e5"} />
                        <Bar dataKey="Net_income_per_lead" fill={"#304995"} />

                        <Legend />
                      </BarChart>
                    </ResponsiveContainer>
                  {/* </JumboDemoCard> */}
                </Card>
              </Grid>
              <Grid>
                <Card
                  className="border-card"
                  sx={{ p: 2, borderRadius: 5, boxShadow: 5 }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 600,
                      p: 0,
                      paddingTop: 0,
                      paddingLeft: 1,
                    }}
                  >
                    Follow up contract rate
                    <br />
                    <span style={{ fontSize: 12, fontWeight: 500 }}>
                      By type
                    </span>
                  </Typography>
                  <ResponsiveContainer width="100%" height="100%">
                    <TableContainer component={Paper}>
                      <Table
                        sx={{minWidth: 550, border: "1px solid #007BFF" }}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow sx={{ bgcolor: "#ffffff" }}>
                            <TableCell
                              sx={{ color: "#000", fontSize: "12px" }}
                              align="center"
                            >
                              Sales Rep
                            </TableCell>
                            <TableCell
                              sx={{ color: "#000", fontSize: "12px" }}
                              align="center"
                            >
                              1st
                            </TableCell>
                            <TableCell
                              sx={{ color: "#000", fontSize: "12px" }}
                              align="center"
                            >
                              2nd
                            </TableCell>
                            <TableCell
                              sx={{ color: "#000", fontSize: "12px" }}
                              align="center"
                            >
                              3rd
                            </TableCell>
                            <TableCell
                              sx={{ color: "#000", fontSize: "12px" }}
                              align="center"
                            >
                              4th
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.accName}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                sx={{ color: "#000", fontSize: "12px" }}
                                align="center"
                              >
                                {row.sales}
                              </TableCell>
                              <TableCell
                                sx={{ color: "#000", fontSize: "12px" }}
                                align="center"
                              >
                                {row.one}
                              </TableCell>
                              <TableCell
                                sx={{ color: "#000", fontSize: "12px" }}
                                align="center"
                              >
                                {row.two}
                              </TableCell>
                              <TableCell
                                sx={{ color: "#000", fontSize: "12px" }}
                                align="center"
                              >
                                {row.three}
                              </TableCell>
                              <TableCell
                                sx={{ color: "#000", fontSize: "12px" }}
                                align="center"
                              >
                                {row.four}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </ResponsiveContainer>
                </Card>
            </Grid>
          </Grid>
          <Grid item xs={4} columnSpacing={10}>
            <Grid
              container
              direction={"column"}
              rowSpacing={7}
              paddingBottom={6}
              paddingRight={3}
              columnSpacing={2}
            >
              <Grid item xs={12}>
                <Card
                  className="border-card"
                  sx={{
                    p: 2,
                    pb: 4,
                    width: "100%",
                    borderRadius: 5,
                    boxShadow: 5,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      pl: 2,
                      paddingTop: 0,
                      paddingLeft: 5,
                      paddingBottom: 5,
                    }}
                  >
                    Top 5 deals
                  </Typography>
                  <Div
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingLeft: 0,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#FB7575",
                        width: "35px",
                        height: "35px",
                        fontSize: "14px",
                      }}
                    >
                      ST
                    </Avatar>
                    <Typography
                      variant="h3"
                      sx={{ paddingLeft: "30px", m: 0, fontSize: "18px" }}
                    >
                      RJI Corp
                      <br />
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          paddingBottom: 10,
                        }}
                      >
                        $15000
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales Rep:Steve gomez
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales cycle length: 34 days
                      </span>
                    </Typography>
                  </Div>
                  <Div
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingTop: 3,
                      paddingLeft: 0,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#FB7575",
                        width: "35px",
                        height: "35px",
                        fontSize: "14px",
                      }}
                    >
                      ST
                    </Avatar>
                    <Typography
                      variant="h3"
                      sx={{ paddingLeft: "30px", m: 0, fontSize: "18px" }}
                    >
                      RJI Corp
                      <br />
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          paddingBottom: 10,
                        }}
                      >
                        $15000
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales Rep:Steve gomez
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales cycle length: 34 days
                      </span>
                    </Typography>
                  </Div>
                  <Div
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingTop: 3,
                      paddingLeft: 0,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#FB7575",
                        width: "35px",
                        height: "35px",
                        fontSize: "14px",
                      }}
                    >
                      ST
                    </Avatar>
                    <Typography
                      variant="h3"
                      sx={{ paddingLeft: "30px", m: 0, fontSize: "18px" }}
                    >
                      RJI Corp
                      <br />
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          paddingBottom: 10,
                        }}
                      >
                        $15000
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales Rep:Steve gomez
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales cycle length: 34 days
                      </span>
                    </Typography>
                  </Div>
                  <Div
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingTop: 3,
                      paddingLeft: 0,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#FB7575",
                        width: "35px",
                        height: "35px",
                        fontSize: "14px",
                      }}
                    >
                      ST
                    </Avatar>
                    <Typography
                      variant="h3"
                      sx={{ paddingLeft: "30px", m: 0, fontSize: "18px" }}
                    >
                      RJI Corp
                      <br />
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          paddingBottom: 10,
                        }}
                      >
                        $15000
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales Rep:Steve gomez
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales cycle length: 34 days
                      </span>
                    </Typography>
                  </Div>
                  <Div
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingTop: 3,
                      paddingLeft: 0,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#FB7575",
                        width: "35px",
                        height: "35px",
                        fontSize: "14px",
                      }}
                    >
                      ST
                    </Avatar>
                    <Typography
                      variant="h3"
                      sx={{ paddingLeft: "30px", m: 0, fontSize: "18px" }}
                    >
                      RJI Corp
                      <br />
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          paddingBottom: 10,
                        }}
                      >
                        $15000
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales Rep:Steve gomez
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: 500 }}>
                        Sales cycle length: 34 days
                      </span>
                    </Typography>
                  </Div>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default FirstForm;
