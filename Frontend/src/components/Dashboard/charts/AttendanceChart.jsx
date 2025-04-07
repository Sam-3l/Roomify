"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        width="100%"
        height="100%"
        margin={{
          right:5,
        }}
        data={[
          { name: "Wk1", attendance: 92 },
          { name: "Wk2", attendance: 80 },
          { name: "Wk3", attendance: 78 },
          { name: "Wk4", attendance: 53 },
          { name: "Wk5", attendance: 34 },
          { name: "Wk6", attendance: 47 },
          { name: "Wk7", attendance: 49 },
          { name: "Wk8", attendance: 61 },
          { name: "Wk9", attendance: 74 },
          { name: "Wk10", attendance: 82 },
        ]}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis width={30} />
        <Tooltip />
        <Line type="monotone" dataKey="attendance" stroke="#016630" />
      </LineChart>
    </ResponsiveContainer>
  );
}
