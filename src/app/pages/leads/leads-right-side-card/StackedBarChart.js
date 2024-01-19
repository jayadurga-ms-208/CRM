import React from 'react'
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../../charts/Bar/demo-code/stacked-bar-chart.txt'
import { Card } from 'react-bootstrap';
import { Grid } from '@mui/material';
const data = [
    { name: 'Cold Calling', value:80},
    { name: 'Thru SEO', value:60},
    { name: 'Social Media', value:30},
    { name: 'Campaign', value:50,},
    { name: 'Refarrals', value:77},
   
  ];
const StackedBarChart = () => {
  return (<>
  
    <JumboDemoCard  demoCode={code} wrapperSx={{pt: 0,backgroundColor: 'background.paper'}} sx={{borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
    <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
           
            <defs>
                <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6200EE" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#B819D2" stopOpacity={1}/>
                </linearGradient>
            </defs>
            <defs>
                <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1}/>
                    <stop offset="95%" stopColor="##000000CC" stopOpacity={1}/>
                </linearGradient>
            </defs>
            <Bar dataKey="value" stackId="a" fill={"#4297A0"} barSize={37} />
        </BarChart>
    </ResponsiveContainer>
</JumboDemoCard>
</>
  )
}

export default StackedBarChart;