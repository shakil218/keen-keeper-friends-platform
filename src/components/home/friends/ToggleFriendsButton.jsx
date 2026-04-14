"use client";
import { Users } from "lucide-react";
import { useRouter } from "next/navigation";

const ToggleFriendsButton = () => {
  const router = useRouter();

  return (
    <div className="mt-8 text-center">
      <button
        onClick={() => router.push("/friends")}
        className="group inline-flex items-center gap-2 rounded-2xl bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
      >
        <Users className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
        <span>View All Friends</span>
      </button>
    </div>
  );
};

export default ToggleFriendsButton;
