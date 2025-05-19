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
          margin={{
            right: 5,
          }}
          padding={0}
          data={[
            { attendance: "<30%", students: 40 },
            { attendance: "30-50%", students: 33 },
            { attendance: "50-70%", students: 70 },
            { attendance: "70-80%", students: 50 },
            { attendance: "80-90%", students: 22 },
            { attendance: ">90%", students: 8 },
          ]}
        >
          <YAxis type="number" width={30}/>
          <XAxis dataKey="attendance" type="category"/>
          <Tooltip />
          <Bar type="monotone" dataKey="students" fill="#333333" />
        </BarChart>
      </ResponsiveContainer>
  );
}
