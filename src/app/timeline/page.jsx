"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TimelineList from "@/components/timeline/TimelineList";
import { useTimeline } from "@/hooks/useTimeLine";
import { useLoader } from "@/context/LoaderContext";

const TimelinePage = () => {
  const { history } = useTimeline();

  // 🔥 LOADER (ADDED ONLY)
  const { setLoading } = useLoader();

  // 🔍 STATES
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  // 🚀 LOADING ON DATA CHANGE (ADDED ONLY)
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [history, setLoading]);

  // 🚀 FILTER + SEARCH + SORT ENGINE
  const processedTimelines = history
    // 🔍 SEARCH
    .filter((item) => {
      const keyword = search.toLowerCase().trim();

      const name = (item.friendName || item.title || "").toLowerCase();

      const type = (item.type || "").toLowerCase();

      return name.includes(keyword) || type.includes(keyword);
    })

    // 🎯 FILTER
    .filter((item) => (filter === "all" ? true : item.type === filter))

    // ⬆️ SORT
    .sort((a, b) => {
      const dateA = new Date(a.next_due_date || a.date);
      const dateB = new Date(b.next_due_date || b.date);

      return sort === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="space-y-6">
      {/* 🔙 BACK LINK */}
      <Link
        href="/friends"
        className="text-indigo-600 hover:text-purple-600 inline-block"
      >
        ← Back to Friends
      </Link>

      {/* 📜 TITLE */}
      <h1 className="text-2xl font-bold">📜 Timeline</h1>

      {/* 🎛 FILTER BAR */}
      <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-3">
        {/* 🔍 SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search friend or type..."
          className="border px-3 py-2 rounded-lg w-full"
        />

        {/* 🎯 FILTER */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
          <option value="meetup">Meetup</option>
        </select>

        {/* ⬆️ SORT */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* 📜 TIMELINE LIST */}
      <TimelineList timeline={processedTimelines} />

      {/* 🚨 EMPTY STATE */}
      {processedTimelines.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No timeline found 🔍
        </div>
      )}
    </div>
  );
};

export default TimelinePage;