"use client";

import Image from "next/image";
import {
  Clock,
  Archive,
  Trash2,
  Phone,
  MessageCircle,
  Video,
  Edit,
  Handshake,
} from "lucide-react";
import TimelineList from "@/components/timeline/TimelineList";
import { toast } from "react-toastify";
import { useTimeline } from "@/hooks/useTimeLine";

const Friend = ({ friend }) => {
  const { timelines, addTimeline } = useTimeline();

  // 👉 ONLY THIS FRIEND'S TIMELINE
  const friendTimeline = timelines.filter((t) => t.friendId === friend.id);

  const handleAddTimeline = (type) => {
    const newEntry = {
      friendId: friend.id,
      type: type.toLowerCase(),
      title: friend.name,
      date: new Date().toISOString().split("T")[0],
    };

    addTimeline(newEntry);

    toast.success(`Added ${type} with ${friend.name}!`, {
      position: "top-center",
      autoClose: 2000,  
    });

  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= LEFT ================= */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="text-center">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />

            <h2 className="text-xl font-bold mt-3">{friend.name}</h2>

            <span
              className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${
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

          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-4 text-center">{friend.bio}</p>

          <p className="text-sm text-gray-500 mt-2 text-center">
            {friend.email}
          </p>

          <div className="mt-6 space-y-2">
            <button className="w-full flex items-center justify-center gap-2 bg-gray-100 py-2 rounded-lg">
              <Clock className="w-4 h-4" />
              Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-gray-100 py-2 rounded-lg">
              <Archive className="w-4 h-4" />
              Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-red-100 text-red-600 py-2 rounded-lg">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="lg:col-span-2 space-y-6">
          {/* ===== Stats ===== */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl text-center">
              <p className="text-sm text-gray-500">Days Since Contact</p>
              <h3 className="text-xl font-bold">{friend.days_since_contact}</h3>
            </div>

            <div className="bg-white p-4 rounded-xl text-center">
              <p className="text-sm text-gray-500">Goal</p>
              <h3 className="text-xl font-bold">{friend.goal} days</h3>
            </div>

            <div className="bg-white p-4 rounded-xl text-center">
              <p className="text-sm text-gray-500">Next Due</p>
              <h3 className="text-sm font-bold">{friend.next_due_date}</h3>
            </div>
          </div>

          {/* ===== Goal Card ===== */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Relationship Goal</h3>

              <button className="flex items-center gap-1 text-indigo-600">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>

            <p className="text-gray-600 mt-2">
              Current goal: <b>{friend.goal} days</b>
            </p>
          </div>

          {/* ===== QUICK CHECK-IN ===== */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            <div className="flex gap-3">
              <button
                onClick={() => handleAddTimeline("Call")}
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 text-indigo-600 py-2 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                Call
              </button>

              <button
                onClick={() => handleAddTimeline("Text")}
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 text-indigo-600 py-2 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Text
              </button>

              <button
                onClick={() => handleAddTimeline("Video")}
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 text-indigo-600 py-2 rounded-lg"
              >
                <Video className="w-4 h-4" />
                Video
              </button>

              <button
                onClick={() => handleAddTimeline("Meetup")}
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 text-indigo-600 py-2 rounded-lg"
              >
                <Handshake className="w-4 h-4" />
                Meetup
              </button>
            </div>
          </div>

          {/* ===== FRIEND TIMELINE ===== */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">📜 Timeline</h3>

            {/* ✅ FIXED: removed getIcon prop */}
            <TimelineList timeline={friendTimeline} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
