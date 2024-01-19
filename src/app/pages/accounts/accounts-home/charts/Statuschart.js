import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";


const data1 = [
  { month: "Hot", val: 76 },
  { month: "Warm", val: 63 },
  { month: "Cold", val: 30 },
  { month: "Qualified", val: 45 },
  { month: "Unqualified", val: 72 },
  { month: "Open", val: 95 },
];

const Statuschart = () => (
  <>
    <JumboDemoCard
      wrapperSx={{ pt: 0, backgroundColor: "background.paper" }}
    >
      <ResponsiveContainer width="100%" height={276}>
        <BarChart
          data={data1}
          margin={{ top: 0, right: 0, left: -35, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            style={{ fontSize: "10px" }}
            minTickGap={-100}
          />
          <YAxis tickLine={false} style={{ fontSize: "10px" }} />
          <CartesianGrid vertical={false} />
          <Tooltip labelStyle={{ color: "black" }} cursor={false} />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="val" barSize={26} fill={"#838BC2"} />
        </BarChart>
      </ResponsiveContainer>
    </JumboDemoCard>
  </>
);

export default Statuschart;
