"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const AllFriendsClient = ({ friends }) => {
  const [search, setSearch] = useState("");

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          👥 All Friends
        </h1>
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
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFriends.map((friend) => (
          <div
            key={friend.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5"
          >

            {/* Profile */}
            <div className="flex items-center gap-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />

              <div>
                <h2 className="font-semibold text-gray-800">
                  {friend.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {friend.email}
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-600 mt-4 line-clamp-2">
              {friend.bio}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Status */}
            <div className="mt-4">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  friend.status === "overdue"
                    ? "bg-red-100 text-red-600"
                    : friend.status === "almost due"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {friend.status}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default AllFriendsClient;