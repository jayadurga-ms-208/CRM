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
import code01 from "../../../charts/Bar/demo-code/bar-stacked-by-sign.txt";

const data1 = [
  { month: "Finance", val: 76 },
  { month: "Tourism", val: 63 },
  { month: "Construction", val: 30 },
  { month: "Production", val: 45 },
  { month: "Marketing", val: 72 },
  { month: "Sales", val: 95 },
];

const Industrychart = () => (
  <>
    <JumboDemoCard
      demoCode={code01}
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
          <Bar dataKey="val" barSize={26} fill={"#52D452"} />
        </BarChart>
      </ResponsiveContainer>
    </JumboDemoCard>
  </>
);

export default Industrychart;
