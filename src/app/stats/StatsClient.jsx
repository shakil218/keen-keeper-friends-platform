"use client";

import { useContext } from "react";
import { TimelineContext } from "@/context/TimeLineContext";
import FriendsPieChart from "./FriendsPieCharts";

const StatsClient = () => {
  const { timelines } = useContext(TimelineContext);

  const count = (type) =>
    timelines.filter((t) => t.type === type).length;

  const chartData = [
    { name: "Call", value: count("call") },
    { name: "Text", value: count("text") },
    { name: "Video", value: count("video") },
    { name: "Meetup", value: count("meetup") },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📊 Friendship Analytics
      </h1>

      <FriendsPieChart data={chartData} />
    </div>
  );
};

export default StatsClient;