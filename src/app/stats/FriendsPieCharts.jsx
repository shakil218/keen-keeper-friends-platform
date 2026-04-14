"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4E79A7", "#59A14F", "#E15759", "#F28E2B"];

const FriendsPieChart = ({ data }) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-2xl">
      <h2 className="text-lg font-semibold mb-4">Interaction Breakdown</h2>

      <div className="w-full h-100">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={140}
              innerRadius={70}
              paddingAngle={6}
              cornerRadius={10}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FriendsPieChart;
