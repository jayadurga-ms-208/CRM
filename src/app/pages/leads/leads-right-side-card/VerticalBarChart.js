import React from 'react'
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../../charts/Composed/demo-code/vertical-composed.txt";
import Div from '@jumbo/shared/Div';
import { fontSize } from '@mui/system';
import { Typography } from '@mui/material';
const data = [
    { name: 'Others', pv: 450 },
    { name: 'Linkedin',  pv:400 },
    { name: 'Twitter',  pv: 250 },
    { name: 'Facebook',  pv:350},
    
  ];

const VerticalBarChart = () => (
    
  <Div className='border-card' sx={{borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
     <Typography sx={{pl:1,py:1,fontSize:"14px",color:"#000"}}><b>Lead By Source</b></Typography>
    <JumboDemoCard demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper',fontSize:"12px"}}>
        <ResponsiveContainer width="100%" height={234}>
            <ComposedChart layout="vertical" data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <XAxis type="number"/>
                <YAxis dataKey="name" type="category"/>
                <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
               
                <CartesianGrid stroke="#f5f5f5"/>
                {/* <Area dataKey="amt" fill={"#e91e63"} stroke="#19A6D2"/> */}
                <Bar dataKey="pv" barSize={20} fill={"#1e88e5"}/>
               
            </ComposedChart>
        </ResponsiveContainer>
    </JumboDemoCard>
    </Div>
);



  
export default VerticalBarChart;