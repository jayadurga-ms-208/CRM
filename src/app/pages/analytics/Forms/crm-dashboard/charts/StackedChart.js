import React from "react";
import {
  Bar,
  BarChart,
  Label,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { name: "Basic", uv: 100, pv: 400, blank: 75 },
  { name: "Premium", uv: 100, pv: 579, blank: 75 },
  { name: "Professional", uv: 100, pv: 754, blank: 75 },
];

const dollarPrefix = (value) => {
  return "$" + value;
};

const TopLabel = (props) => {
  const { content, ...rest } = props;

  return (
    <Label
      {...rest}
      formatter={dollarPrefix}
      fontSize="10px"
      fill="#000000"
      fontWeight="500"
      position={"top"}
    />
  );
};

const StackedChart = () => (
  <ResponsiveContainer width="100%" height={197}>
    <BarChart data={data} margin={{ top: 15, right: 0, left: 0, bottom: 10 }}>
      <XAxis dy={5} axisLine={false} tickLine={false} dataKey="name" />
      <Tooltip labelStyle={{ color: "black" }} cursor={false} />
      <Legend fontSize={"12px"} />
      <Bar
        label={{ position: "center", fontSize: "10px", fontWeight: 500 }}
        name="Number of Opportunities"
        dataKey="uv"
        stackId="a"
        barSize={100}
        fill={"#C9A5E1"}
      />
      <Bar dataKey={"blank"} stackId="a" fill="#FEFEFE" />
      <Bar
        name="Average purchase value"
        dataKey="pv"
        stackId="a"
        barSize={100}
        fill={"#233D89"}
        unit="$"
      >
        <LabelList dataKey="pv" postion="top" content={TopLabel} />
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default StackedChart;
