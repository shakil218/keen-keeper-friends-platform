// ❌ REMOVE "use client"

import StatsClient from "./StatsClient";

export const metadata = {
  title: "Friendship Analytics | Keen Keeper",
  description:
    "Analyze your friendship interactions including calls, texts, videos, and meetups.",
};

const StatsPage = () => {
  return (
    <div className="min-h-[calc(100vh-493.6px)]">
      <StatsClient />
    </div>
  );
};

export default StatsPage;
