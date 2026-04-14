"use client";

import { TimelineContext } from "@/context/TimeLineContext";
import { useContext } from "react";

export const useTimeline = () => {
  return useContext(TimelineContext);
};