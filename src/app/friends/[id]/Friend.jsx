"use client";

import { useState } from "react";
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
import call from "../../../assets/call.png";
import text from "../../../assets/text.png";
import video from "../../../assets/video.png";
import meetup from "../../../assets/meetup.png";
import TimelineList from "@/components/timeline/TimelineList";

const Friend = ({ friend }) => {
  // const [timeline, setTimeline] = useState([]);

  // 👉 ONLY this friend's timeline (important)
  // const timeline = friend.timeline || [];
  const [timeline, setTimeline] = useState(() => {
    return friend?.timeline ? [...friend.timeline] : [];
  });

  const addTimeline = (type) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${friend.name}`,
      date: new Date().toISOString().split("T")[0],
    };

    // 👉 THIS replaces previous timeline
    setTimeline([newEntry]);
  };

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case "call":
        return call;
      case "text":
        return text;
      case "video":
        return video;
      case "meetup":
        return meetup;
      default:
        return text;
    }
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

          {/* Tags */}
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

          {/* Bio */}
          <p className="text-sm text-gray-600 mt-4 text-center">{friend.bio}</p>

          {/* Email */}
          <p className="text-sm text-gray-500 mt-2 text-center">
            {friend.email}
          </p>

          {/* Actions */}
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
                onClick={() => addTimeline("Call")}
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 text-indigo-600 py-2 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                Call
              </button>

              <button
                onClick={() => addTimeline("Text")}
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 text-indigo-600 py-2 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Text
              </button>

              <button
                onClick={() => addTimeline("Video")}
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 text-indigo-600 py-2 rounded-lg"
              >
                <Video className="w-4 h-4" />
                Video
              </button>
              <button
                onClick={() => addTimeline("Meetup")}
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 text-indigo-600 py-2 rounded-lg"
              >
                <Handshake className="w-4 h-4" />
                Meetup
              </button>
            </div>
          </div>

          {/* ===== FRIEND TIMELINE (ONLY THIS FRIEND) ===== */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">📜 Timeline</h3>

            {/* {timeline.length === 0 ? (
              <p className="text-sm text-gray-500">No activity yet</p>
            ) : (
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border-b pb-3"
                  >
                    <Image
                      src={getIcon(item.type)}
                      alt={item.type}
                      width={32}
                      height={32}
                    />

                    <div>
                      <h3><span className="font-semibold">{item.type}</span> with <span className="font-semibold">{item.title}</span></h3>

                      <p className="text-xs text-gray-500">📅 {item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )} */}
            <TimelineList timeline={timeline} getIcon={getIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
