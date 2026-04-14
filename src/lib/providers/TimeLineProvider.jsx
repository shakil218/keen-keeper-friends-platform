"use client";

import { TimelineContext } from "@/context/TimeLineContext";
import { useState } from "react";

export const TimelineProvider = ({ children }) => {
  const [timelines, setTimelines] = useState([]);

  // 🔥 GLOBAL HISTORY (for stats)
  const [history, setHistory] = useState([]);

  const addTimeline = (newItem) => {
    setTimelines((prev) => {
      // ✅ FRIEND: only latest per friend
      const filtered = prev.filter(
        (item) => item.friendId !== newItem.friendId
      );

      return [newItem, ...filtered];
    });

    // 🔥 HISTORY: keep everything (NO duplicates removed)
    setHistory((prev) => [newItem, ...prev]);
  };

  return (
    <TimelineContext.Provider
      value={{
        timelines,   // friend view (latest only)
        history,     // analytics view (full data)
        addTimeline,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};