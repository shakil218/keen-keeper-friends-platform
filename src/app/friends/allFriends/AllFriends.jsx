"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, Search, Tag } from "lucide-react";
import Link from "next/link";

const AllFriends = ({ friends }) => {
  const [search, setSearch] = useState("");

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase()),
  );

  const statusStyle = {
    overdue: "bg-rose-100 text-rose-700 border border-rose-200",
    "almost due": "bg-amber-100 text-amber-700 border border-amber-200",
    "on-track": "bg-emerald-100 text-emerald-700 border border-emerald-200",
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">👥 All Friends</h1>
        <p className="text-gray-500 mt-2">
          Manage and explore your connections
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-10 relative">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search friends..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid px-4 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredFriends.map((friend) => (
          <Link
            key={friend.id}
            href={`/friends/${friend.id}`}
            className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Top */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
                <Image
                  className="object-cover"
                  src={friend.picture}
                  alt={friend.name}
                  width={64}
                  height={64}
                />
              </div>

              <div className="flex-1">
                <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
                  {friend.name}
                </h3>

                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                    statusStyle[friend.status]
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            </div>

            {/* Days Since Contact */}
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
              <CalendarDays size={16} />
              <span>{friend.days_since_contact} days since contact</span>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
