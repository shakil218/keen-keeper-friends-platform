"use client";

import { TimelineContext } from "@/context/TimeLineContext";
import { useState } from "react";

export const TimelineProvider = ({ children }) => {
  const [timelines, setTimelines] = useState([]);

  // ✅ ADD GLOBAL + FRIEND DATA
  const addTimeline = (newItem) => {
    setTimelines((prev) => {
      // ❌ remove old entry of same friend
      const filtered = prev.filter(
        (item) => item.friendId !== newItem.friendId
      );

      // ✅ add latest only
      return [newItem, ...filtered];
    });
  };

  return (
    <TimelineContext.Provider value={{ timelines, addTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};