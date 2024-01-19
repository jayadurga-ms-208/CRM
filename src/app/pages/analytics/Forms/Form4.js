// import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, Card, Grid, Typography, Button } from "@mui/material";
import Pipeline from "./Pipeline";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import React from "react";

const data2 = [
  { name: "Lakeman Ass",uv: 5000, pv: 7800 },
  { name: " Khan corp", uv: 4000, pv: 6500 },
  { name: "Clean int", uv: 4500, pv: 4700},
  { name: "Zayn culture", uv: 3000, pv: 5000},
  { name: "Jo & jones", uv: 2000, pv: 6500 },
];

const Form4 = () => {
  const data = [
    {
      name: "1-3-22",
      Actual: 50000,
    },
    {
      name: "3-3-22",
      Actual: 100000,
    },
    {
      name: "5-3-22",
      Actual: 150000,
    },
    {
      name: "7-3-22",
      Actual: 120000,
    },
    {
      name: "9-3-22",
      Actual: 150000,
    },
    {
      name: "12-3-22",
      Actual: 100000,
    },
    {
      name: "15-3-22",
      Actual: 130000,
    },
    {
      name: "1-4-22",
      Actual: 100000,
    },
    {
      name: "3-4-22",
      Actual: 70000,
    },
    {
      name: "5-4-22",
      Actual: 50000,
    },
    {
      name: "7-4-22",
      Actual: 60000,
    },
    {
      name: "9-4-22",
      Actual: 50000,
    },
    {
      name: "12-4-22",
      WorstBestCase: 15000,
      Commited: 100000,
    },
    {
      name: "15-4-22",
      WorstBestCase: 15000,
      Commited: 90000,
    },
    {
      name: "20-4-22",
      WorstBestCase: 15000,
      Commited: 100000,
    },
  ];

  const data1 = [
    { name: "Geeksforgeeks", students: 1000, fill: "#000000" },
    { name: "Technical scripter", students: 400, fill: "#748E70" },
    { name: "Geek-i-knack", students: 400, fill: "#104210" },
    { name: "Geek-o-mania", students: 400, fill: "#0F7272" },
    { name: "Geek-o-mania", students: 500, fill: "#7ACD2E" },
  ];

  const data0 = [{ name: "Geeksforgeeks", students: 1000 }];

  return (
    <>
    <Grid container className="border-card" sx={{backgroundColor:"rgba(98, 186, 234, 0.17)"}}>
      <Box sx={{ flexGrow: 1, borderRadius:"10px"}}>
        <AppBar position="static" sx={{borderRadius:"10px"}}>
          <Toolbar sx={{ bgcolor: "#CC99FF", height: "3px", width: "100%",borderRadius:"10px" }}>
            <Typography sx={{ size: "5px", color: "black",fontWeight:"600" , fontSize:"18px",backgroundColor:"rgba (108,99,255,0.5)"}}>
              CRM Pipeline dashboard
            </Typography>
            <Typography
              component="div"
              align="right"
              sx={{ flexGrow: 1, size: "5px", color: "black",fontSize:"18px"}}
            >
              Sales Team USA
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: "black",fontSize:"18px" }} />
          </Toolbar>
        </AppBar>
        <br />
      <br />
      <br />
      </Box>
      <br />
      <br />
      
      <Grid container spacing={2}>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid
          item
          className="border-card"
          xs={5.5}
          sx={{ width: "400px", height: "340px", backgroundColor:"white" , boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius:8}}
        >
          <Typography sx={{ color: "black", paddingLeft: "15px",fontWeight:"600", fontSize:"18px" }}>
            Open Pipeline Value
          </Typography>
          <br/>
          <Grid container>
            <Grid item xs={7}>
              <Pipeline align="center" />
            </Grid>
            
            <Grid item xs={5}>
              <br />
              <br/>
              <br/>
              

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#32CD32",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">  Problem Identification</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#9ACD32",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6"> Benefits validation</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#FFDE2E",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">Proof of concept</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#FFBC1D",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6"> Negotiation terms</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#FF5C4D",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6"> Final closing</Typography>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0.5}>
          {" "}
        </Grid>

        <Grid
          item
          className="border-card"
          xs={5.5}
          sx={{ width: "400px", height: "340px", borderRadius: 8, backgroundColor:"white",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <Typography sx={{ color: "black", paddingLeft: "15px",fontWeight:"600",fontSize:"18px" }}>
            Open Pipeline By Product Value
          </Typography>
          <Grid container>
            <Grid item xs={7}>
              <JumboDemoCard
                wrapperSx={{ backgroundColor: "background.paper" }}
              >
                <ResponsiveContainer width="100%" height={140}>
                  <PieChart width={30} height={30}>
                    <Pie
                      data={data1}
                      dataKey="students"
                      outerRadius={70}
                      innerRadius={50}
                    />
                    {/* <Pie data={data0} dataKey="students" outerRadius={50} innerRadius={0} fill="#D9D9D9" /> */}
                  </PieChart>
                </ResponsiveContainer>
              </JumboDemoCard>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4} sx={{ paddingTop: "50px" }}>

              <br />
              <br/>
              
              

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#000000",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">Basic</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#7ACD2E",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6"> Pro</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#0F7272",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">Premium</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#748E70",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">Branding</Typography>
                    </Grid>
                </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      
      <Grid container sx={{pt:3}}>
        <Grid
          item
          xs={12}
          className="border-card"
          sx={{ width: "400px", height: "420px", borderRadius: 8, backgroundColor:"white",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}
        >
          <Typography variant="h4" sx={{ color: "black", paddingLeft: "15px",fontWeight:"600",fontSize:"18px"  }}>
            Pipeline vault Forecast
          </Typography>
          <br />
          <Grid container>
            <Grid item xs={9}>
              <BarChart
                width={550}
                height={350}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-90} dy={15}/>
                <YAxis />
                <Tooltip />

                <Bar dataKey="Actual" stackId="a" fill="#304995" />
                <Bar dataKey="Commited" stackId="a" fill="#385B33" />
                <Bar
                  dataKey="CrmLeftPipelineDashboard"
                  stackId="a"
                  fill="#FF3939"
                />
                <Bar dataKey="WorstBestCase" stackId="a" fill="#D9D9D9" />
              </BarChart>
            </Grid>
            {/* <Grid item xs={1}>
                       
                    </Grid> */}
            <Grid item xs={3}>
              <br />
              <br />
              <br/>
              <br/>
              <br/>
              
                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#304995",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">Actual</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#D9D9D9",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">Committed</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#385B33",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">CrmLeftPipelineDashboard</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                      <Box sx={{backgroundColor:"#FF3939",width:"8px",height:"8px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">Worst-Best Case</Typography>
                    </Grid>
                </Grid>
          
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      <Grid container sx={{mt:4,mb:2,backgroundColor:"white",boxShadow: "0px 4px 4px"}}>
        <Grid item xs={6}  sx={{ width: "400px", height: "390px" }}>
          <Typography sx={{ color: "black", paddingLeft: "15px",fontWeight:"600",pt:1,fontSize:"18px" }}>Top 5 sales opportunities</Typography>
            <Typography align="right" sx={{ color: "black", paddingRight: "25px",fontSize:"18px",fontWeight:"600" }}>Worst Best Case</Typography>
          
              {/* <Typography variant="h6"  sx={{color:"black",paddingLeft:"15px" }}>Lakeman Ass</Typography><br/><br/>
                    <Typography variant="h6"  sx={{color:"black",paddingLeft:"15px" }}>Khan corp</Typography><br/><br/>
                    <Typography variant="h6"  sx={{color:"black",paddingLeft:"15px" }}>Clean int</Typography><br/><br/>
                    <Typography variant="h6"  sx={{color:"black",paddingLeft:"15px" }}>Zayn culture</Typography><br/><br/>
                    <Typography variant="h6"  sx={{color:"black",paddingLeft:"15px" }}>Jo & jones</Typography><br/><br/> */}
              {/* Vertical Stacked */}
            

            <JumboDemoCard
              wrapperSx={{ pt: 0, backgroundColor: "background.paper" }}
            >
              <ResponsiveContainer width="100%" height={234}>
                <ComposedChart
                  layout="vertical"
                  data={data2}

                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" tickLine={false} />
                  <Tooltip
                    labelStyle={{ color: "black" }}
                    itemStyle={{ color: "black" }}
                    cursor={false}
                  />
                  {/* <Legend /> */}
                  {/* <CartesianGrid stroke="#f5f5f5" /> */}
                  {/* <Area dataKey="amt" fill={"#e91e63"} stroke="#19A6D2"/> */}
                  <Bar dataKey="uv" stackId="a" barSize={20} fill={"white"}><LabelList dataKey="uv" position="insideEnd"  /></Bar>
                  <Bar dataKey="pv" stackId="a" barSize={20} fill={"#FB7575"}><LabelList dataKey="pv" position="right" /></Bar>
                  {/* <Line dataKey="uv" stroke="#59AA2B" /> */}
                </ComposedChart>
              </ResponsiveContainer>
            </JumboDemoCard>
          </Grid>
       

        <Grid item xs={2} sx={{ width: "400px", height: "390px", bgcolor: "#D9D9D9",pt:1,pl:1}}>
          <Typography variant="h3" sx={{ color: "black", paddingLeft: "15px",fontWeight:"600",fontSize:"18px"}}>Probability</Typography>
          <br/>
          <br/>
          <br/>
          <br/>
          <Box sx={{backgroundColor:"#4D7298",width:"110px",height:"22px"}}>
          <Typography variant="h6" align="center" sx={{ color: "white",pt:0.5}}>97%</Typography>
          </Box>
          <br/>
          <Box sx={{backgroundColor:"#4D7298",width:"110px",height:"22px"}}>
          <Typography variant="h6" align="center" sx={{ color: "white",pt:0.5}}>75%</Typography>
          </Box>
          <br/>
          <Box sx={{backgroundColor:"#4D7298",width:"110px",height:"22px"}}>
          <Typography variant="h6" align="center" sx={{ color: "white",pt:0.5}}>64%</Typography>
          </Box>
          <br/>
          <Box sx={{backgroundColor:"#4D7298",width:"110px",height:"22px"}}>
          <Typography variant="h6" align="center" sx={{ color: "white",pt:0.5}}>99%</Typography>
          </Box>
          <br/>
          <Box sx={{backgroundColor:"#4D7298",width:"110px",height:"22px"}}>
          <Typography variant="h6" align="center" sx={{ color: "white",pt:0.5}}>97%</Typography>
          </Box>
        </Grid>

        <Grid item xs={2} sx={{ width: "400px", height: "390px", bgcolor: "paper",pt:1 }}>
          <Typography variant="h3" sx={{ color: "black", paddingLeft: "15px",fontWeight:"600",fontSize:"18px" }}>Sales Stage</Typography>
          <br/>
          <br/>
          <br/>
          <br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Negotitation</Typography><br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Proof of concept</Typography><br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Final closing</Typography><br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Benefits validation</Typography><br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Proof of concept</Typography>
        </Grid>

       <Grid item xs={2} sx={{ width: "400px", height: "390px", bgcolor: "#D9D9D9" }}>
          <Typography variant="h3" sx={{ color: "black", paddingLeft: "15px",fontWeight:"600",pt:1}}>Sales Rep</Typography>
          <br/>
          <br/>
          <br/>
          <br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Gowtham</Typography><br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Tamilselvan</Typography><br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Gokul</Typography><br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Prakash</Typography><br/>
          <Typography variant="h6" sx={{ color: "black", paddingLeft: "15px" }}>Hari</Typography>
        </Grid>
      </Grid>
      </Grid>
    </>
  );
};

export default Form4;
