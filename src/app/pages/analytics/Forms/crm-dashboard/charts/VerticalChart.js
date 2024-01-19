import React from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Scatter,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Competitor chosen", nlo: 10, lpv: 6 },
  { name: "Functionality", nlo: 4, lpv: 2 },
  { name: "Price", nlo: 20, lpv: 16 },
  { name: "Needs changed", nlo: 16, lpv: 8 },
  { name: "Others", nlo: 9, lpv: 3 },
];

const VerticalChart = () => (
  <ResponsiveContainer width="95%" height={160}>
    <ComposedChart
      layout="vertical"
      data={data}
      margin={{ top: 0, right: 0, left: 40, bottom: 10 }}
    >
      <XAxis
        axisLine={false}
        tickLine={false}
        type="number"
        style={{ fontSize: "12px" }}
      />
      <YAxis
        tickLine={false}
        dataKey="name"
        type="category"
        style={{ fontSize: "12px" }}
        minTickGap={-100}
      />
      <Tooltip labelStyle={{ color: "black" }} cursor={false} />
      {/* <Legend  layout="vertical" verticalAlign="middle" align="right" /> */}
      <CartesianGrid
        horizontal={false}
        style={{ color: "rgba(0, 0, 0, 0.5)" }}
      />
      <Bar
        name="Number of lost opportunities"
        dataKey="nlo"
        barSize={12}
        fill={"#FFB67E"}
      />
      <Scatter name="Lost purchase value" dataKey="lpv" fill="#DB161B" />
    </ComposedChart>
  </ResponsiveContainer>
);

export default VerticalChart;
