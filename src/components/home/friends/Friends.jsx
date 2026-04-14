import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Tag } from "lucide-react";

const friendsPromise = async function () {
  const res = await fetch(
    "https://keen-keeper-friends-platform.vercel.app/friends.json",
  );
  const data = await res.json();
  return data;
};

const Friends = async () => {
  const friends = await friendsPromise();
  const statusStyle = {
    overdue: "bg-rose-100 text-rose-700 border border-rose-200",
    "almost due": "bg-amber-100 text-amber-700 border border-amber-200",
    "on-track": "bg-emerald-100 text-emerald-700 border border-emerald-200",
  };

  return (
    <section className="mt-16 max-w-7xl mx-auto px-4 md:px-0">
      {/* Heading */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Your Friends</h2>
          <p className="mt-1 text-sm text-slate-500">
            Keep track of the people who matter most.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {friends.map((friend) => (
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
    </section>
  );
};

export default Friends;
