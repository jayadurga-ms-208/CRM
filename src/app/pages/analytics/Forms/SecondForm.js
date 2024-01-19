import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import dataone from "./demo-codes/dataone";
import datatwo from "./demo-codes/datatwo";
import datathree from "./demo-codes/datathree";
import datafour from "./demo-codes/datafour";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";

import JumboContentLayoutContext from '@jumbo/components/JumboContentLayout/JumboContentLayoutContext';
import JumboContentLayoutMain from '@jumbo/components/JumboContentLayout/JumboContentLayoutMain';
import { Box, Card, Grid, Typography } from '@mui/material';
import TinyBarChart from 'app/pages/charts/Bar/components/TinyBarChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Div from '@jumbo/shared/Div';
import { Padding } from '@mui/icons-material';
import { fontSize } from '@mui/system';


const SecondForm = () => {
    return (
        <>
            <Card sx={{p:1.5, bgcolor: "rgba(224, 196, 253, 0.17)",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", width: "100%", height: "100%", borderRadius: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="h5" sx={{ fontWeight: 600, pl: 2, paddingTop: 3, paddingLeft: 5, paddingBottom: 5 }}>
                            CMO Dashboard
                            <br />
                            <span style={{ fontSize: 13, fontWeight: 500 }}>This Month</span>
                        </Typography>
                        <Grid container direction={"column"} rowSpacing={10.2} paddingLeft={2}>
                            <Grid item xs={12}>
                                <Card className="border-card" sx={{ p: 1,width: "100%",maxWidth: 350,  border: "1px solid black", borderRadius: 5, boxShadow: 5 }}>
                                    <Typography variant="h2" sx={{fontWeight: 500, pl: 2, paddingTop: 1 }}>
                                        Users
                                    </Typography>
                                    <Div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',

                                    }}>
                                        <SignalCellularAltIcon sx={{ fontSize: "80px" }} />
                                        <h3 style={{ fontWeight: 700, paddingTop: 20, paddingLeft: 10 }}>504,72</h3>
                                    </Div>
                                    <Grid sx={{
                                        width: "100%",
                                        // height: 30,
                                        borderRadius: 2,
                                        backgroundColor: '#D9D9D9',
                                        color: "#007BFF",
                                        // paddingTop: 0.5,
                                        // paddingLeft: 2
                                    }} container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 5,
                                                fontSize: 13
                                            }}
                                        >vs last month: 5%</Div>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 10,
                                                textAlignLast: 'center',
                                                fontSize: 13
                                            }}
                                        >  to Target : -2%  </Div>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className="border-card" sx={{ p: 1,width: "100%",maxWidth: 350,  border: "1px solid black", borderRadius: 5, boxShadow: 5  }}>
                                    <Typography variant="h2" sx={{fontWeight: 500, pl: 2, paddingTop: 1 }}>
                                        Leads
                                    </Typography>
                                    <Div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <SignalCellularAltIcon sx={{ fontSize: "80px" }} />
                                        <h3 style={{ fontWeight: 700, paddingTop: 20, paddingLeft: 10 }}>21,575</h3>
                                    </Div>
                                    <Grid sx={{
                                        width: "100%",
                                        // height: 30,
                                        borderRadius: 2,
                                        backgroundColor: '#D9D9D9',
                                        color: "#007BFF",
                                        // paddingTop: 0.5,
                                        // paddingLeft: 2
                                    }} container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 5,
                                                fontSize: 13
                                            }}
                                        >vs last month: 5%</Div>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 10,
                                                textAlignLast: 'center',
                                                fontSize: 13
                                            }}
                                        >  to Target : -2%  </Div>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className="border-card" sx={{ p: 1,width: "100%",maxWidth: 350,  border: "1px solid black", borderRadius: 5, boxShadow: 5 }}>
                                    <Typography variant="h2" sx={{fontWeight: 500, pl: 2, paddingTop: 1 }}>
                                        MQL
                                    </Typography>
                                    <Div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <SignalCellularAltIcon sx={{ fontSize: "80px" }} />
                                        <h3 style={{ fontWeight: 700,  paddingTop: 20, paddingLeft: 10 }}>7,875</h3>
                                    </Div>
                                    <Grid sx={{
                                        width: "100%",
                                        // height: 30,
                                        borderRadius: 2,
                                        backgroundColor: '#D9D9D9',
                                        color: "#007BFF",
                                        // paddingTop: 0.5,
                                        // paddingLeft: 2
                                    }} container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 5,
                                                fontSize: 13
                                            }}
                                        >vs last month: 5%</Div>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 10,
                                                textAlignLast: 'center',
                                                fontSize: 13
                                            }}
                                        >  to Target : -2%  </Div>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className="border-card" sx={{ p: 1,width: "100%",maxWidth: 350,  border: "1px solid black", borderRadius: 5, boxShadow: 5  }}>
                                    <Typography variant="h2" sx={{fontWeight: 500, pl: 2, paddingTop: 1 }}>
                                        SQL
                                    </Typography>
                                    <Div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <SignalCellularAltIcon sx={{ fontSize: "80px" }} />
                                        <h3 style={{ fontWeight: 700, paddingTop: 20, paddingLeft: 10 }}>3,545</h3>
                                    </Div>
                                    <Grid sx={{
                                        width: "100%",
                                        // height: 30,
                                        borderRadius: 2,
                                        backgroundColor: '#D9D9D9',
                                        color: "#007BFF",
                                        // paddingTop: 0.5,
                                        // paddingLeft: 2
                                    }} container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 5,
                                                fontSize: 13
                                            }}
                                        >vs last month: 5%</Div>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 10,
                                                textAlignLast: 'center',
                                                fontSize: 13
                                            }}
                                        >  to Target : -2%  </Div>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className="border-card" sx={{p: 1,width: "100%",maxWidth: 350,  border: "1px solid black", borderRadius: 5, boxShadow: 5  }}>
                                    <Typography variant="h2" sx={{fontWeight: 500, pl: 2, paddingTop: 1 }}>
                                        Customer
                                    </Typography>
                                    <Div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <SignalCellularAltIcon sx={{ fontSize: "80px" }} />
                                        <h3 style={{ fontWeight: 700,  paddingTop: 20, paddingLeft: 10 }}>754</h3>
                                    </Div>
                                    <Grid sx={{
                                        width: "100%",
                                        // height: 30,
                                        borderRadius: 2,
                                        backgroundColor: '#D9D9D9',
                                        color: "#007BFF",
                                        // paddingTop: 0.5,
                                        // paddingLeft: 2
                                    }} container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 5,
                                                fontSize: 13
                                            }}
                                        >vs last month: 5%</Div>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 10,
                                                textAlignLast: 'center',
                                                fontSize: 13
                                            }}
                                        >  to Target : -2%  </Div>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container direction={"column"} rowSpacing={1.5} padding={1}>
                            <Grid item xs={12}>
                                <Card className="border-card" sx={{ width: "99%", p: 0,  border: "1px solid black", borderRadius: 5, boxShadow: 5 }}>
                                    <Typography sx={{pl:3,py:1,fontSize:"18px",fontWeight:600}}>Cost Per Lead</Typography>
                                    <JumboDemoCard wrapperSx={{ p: 0, backgroundColor: 'background.paper' }}>

                                        <ResponsiveContainer width="100%" height={160}>
                                            <BarChart data={dataone} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />

                                                <defs>
                                                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
                                                        <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
                                                    </linearGradient>
                                                </defs>
                                                <defs>
                                                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1} />
                                                        <stop offset="95%" stopColor="#09BCA7" stopOpacity={1} />
                                                    </linearGradient>
                                                </defs>

                                                <Bar dataKey="Cost_Per_Lead" fill={"#1e88e5"} />
                                                <Bar dataKey="Net_income_per_lead" fill={"#304995"} />
                                                
                                            <Legend layout="vertical" verticalAlign="middle" align="right"/>

                                            </BarChart>

                                        </ResponsiveContainer>

                                    </JumboDemoCard>
                                    <Grid sx={{
                                        width: "100%",
                                        // height: 30,
                                        borderRadius: 2,
                                        backgroundColor: '#CFFFC8',
                                        color: "#007BFF",
                                        // paddingTop: 0.5,
                                        // paddingLeft: 2
                                    }} container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 5,
                                                fontSize: 20
                                            }}
                                        >Total:$18.13 </Div>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 10,
                                                textAlignLast: 'center',
                                                fontSize: 20
                                            }}
                                        >   vs last month:-5%  </Div>
                                        <Div
                                            sx={{
                                                // float: 'right',
                                                // paddingLeft: 10,
                                                color: "#007BFF",
                                                fontSize: 20
                                            }}
                                        >  to Target:5% </Div>

                                    </Grid>

                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className="border-card" sx={{ width: "99%", p: 0,  border: "1px solid black", borderRadius: 5, boxShadow: 5 }}>
                                <Typography sx={{pl:3,py:1,fontSize:"18px",fontWeight:600}}>Cost Per MQL</Typography>
                                    <JumboDemoCard wrapperSx={{ p: 0, backgroundColor: 'background.paper' }}>

                                        <ResponsiveContainer width="100%" height={160}>

                                            <BarChart data={datatwo} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />

                                                <defs>
                                                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
                                                        <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
                                                    </linearGradient>
                                                </defs>
                                                <defs>
                                                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1} />
                                                        <stop offset="95%" stopColor="#09BCA7" stopOpacity={1} />
                                                    </linearGradient>
                                                </defs>

                                                <Bar dataKey="Cost_per_MQl" fill={"#1e88e5"} />
                                                <Bar dataKey="Net_income_per_MQL" fill={"#304995"} />

                                                <Legend layout="vertical" verticalAlign="middle" align="right"/>

                                            </BarChart>

                                        </ResponsiveContainer>

                                    </JumboDemoCard>
                                    <Grid sx={{
                                        width: "100%",
                                        // height: 30,
                                        borderRadius: 2,
                                        backgroundColor: '#CFFFC8',
                                        color: "#007BFF",
                                        // paddingTop: 0.5,
                                        // paddingLeft: 2
                                    }} container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 5,
                                                fontSize: 20
                                            }}
                                        >Total:$130.13 </Div>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 10,
                                                textAlignLast: 'center',
                                                fontSize: 20
                                            }}
                                        >   vs last month:-5%  </Div>
                                        <Div
                                            sx={{
                                                // float: 'right',
                                                // paddingLeft: 10,
                                                color: "#007BFF",
                                                fontSize: 20
                                            }}
                                        >  to Target:5% </Div>

                                    </Grid>

                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className="border-card" sx={{ width: "99%", p: 0,  border: "1px solid black", borderRadius: 5, boxShadow: 5 }}>
                                <Typography sx={{pl:3,py:1,fontSize:"18px",fontWeight:600}}>Cost Per SQL</Typography>
                                    <JumboDemoCard wrapperSx={{ p: 0, backgroundColor: 'background.paper' }}>

                                        <ResponsiveContainer width="100%" height={160}>

                                            <BarChart data={datathree} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />

                                                <defs>
                                                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
                                                        <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
                                                    </linearGradient>
                                                </defs>
                                                <defs>
                                                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1} />
                                                        <stop offset="95%" stopColor="#09BCA7" stopOpacity={1} />
                                                    </linearGradient>
                                                </defs>

                                                <Bar dataKey="Cost_per_SQL" fill={"#1e88e5"} />
                                                <Bar dataKey="Net_income_per_SQL" fill={"#304995"} />

                                                <Legend layout="vertical" verticalAlign="middle" align="right"/>

                                            </BarChart>

                                        </ResponsiveContainer>

                                    </JumboDemoCard>
                                    <Grid sx={{
                                        width: "100%",
                                        // height: 30,
                                        borderRadius: 2,
                                        backgroundColor: '#CFFFC8',
                                        color: "#007BFF",
                                        // paddingTop: 0.5,
                                        // paddingLeft: 2
                                    }} container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 5,
                                                fontSize: 20
                                            }}
                                        >Total:$375.13 </Div>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 10,
                                                textAlignLast: 'center',
                                                fontSize: 20
                                            }}
                                        >   vs last month:-5%  </Div>
                                        <Div
                                            sx={{
                                                // float: 'right',
                                                // paddingLeft: 10,
                                                color: "#007BFF",
                                                fontSize: 20
                                            }}
                                        >  to Target:5% </Div>

                                    </Grid>

                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className="border-card" sx={{ width: "99%", p: 0,  border: "1px solid black", borderRadius: 5, boxShadow: 5 }}>
                                <Typography sx={{pl:3,py:1,fontSize:"18px",fontWeight:600}}>Cost Per Customer</Typography>
                                    <JumboDemoCard wrapperSx={{ p: 0, backgroundColor: 'background.paper' }}>

                                        <ResponsiveContainer width="100%" height={160}>

                                            <BarChart data={datafour} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />

                                                <defs>
                                                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
                                                        <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
                                                    </linearGradient>
                                                </defs>
                                                <defs>
                                                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1} />
                                                        <stop offset="95%" stopColor="#09BCA7" stopOpacity={1} />
                                                    </linearGradient>
                                                </defs>

                                                <Bar dataKey="Cost_per_Customer" fill={"#1e88e5"} />
                                                <Bar dataKey="Net_income_per_Customer" fill={"#304995"} />

                                                <Legend layout="vertical" verticalAlign="middle" align="right"/>

                                            </BarChart>

                                        </ResponsiveContainer>

                                    </JumboDemoCard>
                                    <Grid sx={{
                                        width: "100%",
                                        // height: 30,
                                        borderRadius: 2,
                                        backgroundColor: '#CFFFC8',
                                        color: "#007BFF",
                                        // paddingTop: 0.5,
                                        // paddingLeft: 2
                                    }} container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 5,
                                                fontSize: 20
                                            }}
                                        >Total:$975.13 </Div>
                                        <Div
                                            sx={{
                                                color: "#007BFF",
                                                // paddingLeft: 10,
                                                textAlignLast: 'center',
                                                fontSize: 20
                                            }}
                                        >   vs last month:-5%  </Div>
                                        <Div
                                            sx={{
                                                // float: 'right',
                                                // paddingLeft: 10,
                                                color: "#007BFF",
                                                fontSize: 20
                                            }}
                                        >  to Target:5% </Div>

                                    </Grid>

                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default SecondForm
