"use client";

import { TimelineContext } from "@/context/TimeLineContext";
import { useState, useEffect } from "react";

export const TimelineProvider = ({ children }) => {
  // ✅ LOAD timelines from localStorage
  const [timelines, setTimelines] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("timelines");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // 🔥 GLOBAL HISTORY (for stats)
  // ✅ LOAD history from localStorage
  const [history, setHistory] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("history");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const addTimeline = (newItem) => {
    setTimelines((prev) => {
      const filtered = prev.filter(
        (item) => item.friendId !== newItem.friendId,
      );

      return [newItem, ...filtered];
    });

    // 🔥 HISTORY: keep everything
    setHistory((prev) => [newItem, ...prev]);
  };

  // ✅ SAVE timelines to localStorage
  useEffect(() => {
    localStorage.setItem("timelines", JSON.stringify(timelines));
  }, [timelines]);

  // ✅ SAVE history to localStorage
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <TimelineContext.Provider
      value={{
        timelines,
        history,
        addTimeline,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
