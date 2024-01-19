import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../../charts/Bar/demo-code/mix-bar-chart.txt"

const data = [
    {
      name: 'Jan',
      current: 20000,
      pv: 10000,
      previous: 20000,
    },
    {
      name: 'Feb',
      current: 40000,
      pv: 40000,
      previous:40000,
    },
    {
      name: 'Mar',
      current: 60000,
      pv: 40000,
      previous:40000,
    },
    {
      name: 'Apr',
      current: 60000,
      pv: 20000,
      previous: 20000,
    },
    {
      name: 'May',
      current: 80000,
      pv: 40000,
      previous:40000,
    },
    {
      name: 'June',
      current: 20000,
      pv: 30000,
      previous:30000,
    },
    {
      name: 'Jul',
      current: 40000,
      pv: 40000,
      previous:40000,
    },
    {
      name: 'Aug',
      current: 60000,
      pv: 60000,
      previous:60000,
    },
   {
      name: 'Sep',
      current: 10000,
      pv: 10000,
      previous:10000,
    },
    {
      name: 'Oct',
      current: 40000,
      pv: 30000,
      previous:30000,
    },
    {
      name: 'Nov',
      current: 40000,
      pv: 20000,
      previous:20000,
    },
    {
      name: 'Dec',
      current: 60000,
      pv: 20000,
      previous:20000,
    },


  ];
  

const  DoubleBarChart = () => (
    <JumboDemoCard demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="70%" height={300}>
            <BarChart data={data} margin={{top: 0, right: 0,left: 0, bottom: 0}}>
                <XAxis dataKey="name" sx={{color:"#000000"}}/>
                <YAxis  sx={{color:"#000000"}} />
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
                <Legend/>
                <defs>
                    <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6200EE" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#B819D2" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#09BCA7" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E59D1E" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#E59D1E" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>
                <Bar dataKey="previous" stackId="a" fill={"#A06AB4"}/>
                {/* <Bar dataKey="pv" stackId="a" fill={"#e91e63"}/> */}
                <Bar dataKey="current" fill={"#FFD743"}/>
            </BarChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default DoubleBarChart;
