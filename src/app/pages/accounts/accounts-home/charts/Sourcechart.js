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
  { month: "Jan", val: 80 },
  { month: "Feb", val: 90 },
  { month: "Mar", val: 63 },
  { month: "Apr", val: 45 },
  { month: "May", val: 70 },
  { month: "Jun", val: 27 },
  { month: "Jul", val: 34 },
  { month: "Aug", val: 39 },
  { month: "Sep", val: 100 },
  { month: "Oct", val: 55 },
  { month: "Nov", val: 20 },
  { month: "Dec", val: 82 },
];

const Sourcechart = () => (
  <>
    <JumboDemoCard wrapperSx={{pl:0, pt: 0, backgroundColor: "background.paper" }}>
      <ResponsiveContainer width="100%" height={256}>
        <BarChart
          data={data1}
          margin={{ top: 0, right: 0, left: -15, bottom: 0 }}
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

          <Bar dataKey="val" barSize={19} fill={"#EF7C8E"} />
        </BarChart>
      </ResponsiveContainer>
    </JumboDemoCard>
  </>
);

export default Sourcechart;
