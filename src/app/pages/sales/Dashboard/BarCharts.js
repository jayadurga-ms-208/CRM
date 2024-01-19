import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../../charts/Bar//demo-code/stacked-bar-chart.txt';

const data = [
    { name: 'Jan', pv: 80 },
    { name: 'Feb', pv: 50 },
    { name: 'Mar', pv: 55 },
    { name: 'Apr', pv: 80 },
    { name: 'May', pv: 90 },
    { name: 'Jun', pv: 100 },
    { name: 'Jul', pv: 70 },
    { name: 'Aug', pv: 80 },
    { name: 'Sep', pv: 90 },
    { name: 'Oct', pv: 50 },
    { name: 'Nov', pv: 40 },
    { name: 'Dec', pv: 60 },

  ];

const BarCharts = () => (
    <JumboDemoCard demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" label={{fontSize:20}} height={200}>
            <BarChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <XAxis dataKey="name" style={{fontSize:"10px"}}tickLine={false}/>
                <YAxis/>
                <CartesianGrid vertical={false}/>
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
                        <stop offset="95%" stopColor="#09BCA7" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <Bar dataKey="pv" fill={"#613659"}/>
            </BarChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default BarCharts;
