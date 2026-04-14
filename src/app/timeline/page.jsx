"use client";

import TimelineList from "@/components/timeline/TimelineList";
import { useTimeline } from "@/hooks/useTimeLine";
import Link from "next/link";

const TimelinePage = () => {
  const { timelines } = useTimeline();

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-[calc(100vh-493.6px)]">
      <Link href="/friends" className="text-indigo-600 hover:text-purple-600 mb-6 inline-block">
        ← Back to Friends
      </Link>

      <h1 className="text-2xl font-bold mb-6">📜 Timeline</h1>

      <TimelineList timeline={timelines} />
    </div>
  );
};

export default TimelinePage;
