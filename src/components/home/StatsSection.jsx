
import {
  Users,
  CheckCircle2,
  AlertTriangle,
  CalendarDays,
} from "lucide-react";

const friendsPromise = async function () {
  const res = await fetch("https://keen-keeper-friends-platform.vercel.app/friends.json");
  const data = await res.json();
  return data;
};

const StatsSection = async () => {
  const friends = await friendsPromise();
  // Total Friends
  const totalFriends = friends.length;

  // On Track Friends
  const onTrack = friends.filter(
    (friend) => friend.status === "on-track"
  ).length;

  // Need Attention = overdue + almost due
  const needAttention = friends.filter(
    (friend) =>
      friend.status === "overdue" ||
      friend.status === "almost due"
  ).length;

  // Interactions This Month
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const interactionsThisMonth = friends.filter((friend) => {
    const dueDate = new Date(friend.next_due_date);

    return (
      dueDate.getMonth() === currentMonth &&
      dueDate.getFullYear() === currentYear
    );
  }).length;

  const stats = [
    {
      id: 1,
      title: "Total Friends",
      value: totalFriends,
      icon: Users,
      color: "from-indigo-500 to-violet-500",
    },
    {
      id: 2,
      title: "On Track",
      value: onTrack,
      icon: CheckCircle2,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "Need Attention",
      value: needAttention,
      icon: AlertTriangle,
      color: "from-rose-500 to-pink-500",
    },
    {
      id: 4,
      title: "Interactions This Month",
      value: interactionsThisMonth,
      icon: CalendarDays,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="mt-5 md:-mt-10 relative z-20 px-4 md:px-0">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${item.color} text-white`}
              >
                <Icon size={22} />
              </div>

              <h3 className="text-sm font-medium text-slate-500">
                {item.title}
              </h3>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;