"use client";

import { useContext } from "react";
import FriendsPieChart from "./FriendsPieCharts";
import { TimelineContext } from "@/context/TimeLineContext";
import { PieChart } from "lucide-react";

const StatsPage = () => {
  const { timelines } = useContext(TimelineContext);

  // 🔥 COUNT TYPES
  const count = (type) => timelines.filter((t) => t.type === type).length;

  const chartData = [
    { name: "Call", value: count("call") },
    { name: "Text", value: count("text") },
    { name: "Video", value: count("video") },
    { name: "Meetup", value: count("meetup") },
  ];

  return (
    <div className=" p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="bg-indigo-100 p-2 rounded-lg">
          <PieChart className="w-5 h-5 text-indigo-600" />
        </span>
        Friendship Analytics
      </h1>

      {/* Chart */}
      <FriendsPieChart data={chartData} />
    </div>
  );
};

export default StatsPage;
