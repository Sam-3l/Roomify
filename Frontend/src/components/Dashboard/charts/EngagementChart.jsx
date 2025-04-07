"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function EngagementChart() {
  return (
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width="100%"
          height="100%"
          layout="vertical"
          margin={{
            right: 5,
          }}
          padding={0}
          data={[
            { range: ">90%", attendance: 8 },
            { range: "80-90%", attendance: 22 },
            { range: "70-80%", attendance: 50 },
            { range: "50-70", attendance: 70 },
            { range: "30-50%", attendance: 33 },
            { range: "<30%", attendance: 40 },
          ]}
        >
          <XAxis type="number" />
          <YAxis dataKey="range" type="category" width={60} />
          <Tooltip />
          <Bar type="monotone" dataKey="attendance" fill="hsl(2,0%,60%)" />
        </BarChart>
      </ResponsiveContainer>
  );
}
