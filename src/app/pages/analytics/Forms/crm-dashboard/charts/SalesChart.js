import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";

const data = [
  { dates: "2022-04-01", noOp: 24, pv: 12 },
  { dates: "2022-04-03", noOp: 16, pv: 6 },
  { dates: "2022-04-05", noOp: 32, pv: 22 },
  { dates: "2022-04-07", noOp: 20, pv: 10 },
  { dates: "2022-04-09", noOp: 6, pv: 18 },
  { dates: "2022-04-12", noOp: 14, pv: 24 },
  { dates: "2022-04-15", noOp: 20, pv: 6 },
];

const SalesChart = () => (
  <JumboDemoCard wrapperSx={{ pt: 0, backgroundColor: "background.paper" }}>
    <ResponsiveContainer width="100%" height={130}>
      <BarChart data={data} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
        <XAxis
          dataKey="dates"
          tickLine={false}
          style={{ fontSize: "10px" }}
          angle={-25}
          dy={10}
          minTickGap={-100}
        />
        <YAxis tickLine={false} style={{ fontSize: "10px" }} />
        <Tooltip labelStyle={{ color: "black" }} cursor={false} />
        <Bar
          name="Number of Opportunities"
          dataKey="noOp"
          fill={"#007BFF"}
          barSize={17}
        />
        <Bar name="Purchase value" dataKey="pv" fill={"#304995"} barSize={17} />
        <Legend wrapperStyle={{ bottom: -15 }} />
      </BarChart>
    </ResponsiveContainer>
  </JumboDemoCard>
);

export default SalesChart;
