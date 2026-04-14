import Image from "next/image";
import getIcon from "@/lib/getIcon";

const TimelineList = ({ timeline }) => {
  if (!timeline || timeline.length === 0) {
    return <p className="text-sm text-gray-500">No activity yet</p>;
  }

  return (
    <div className="space-y-3 w-full animate-fade-in">
      {timeline.map((item,index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-5 bg-indigo-50/50 rounded-lg border border-indigo-100 "
        >
          {/* ✅ USE CENTRAL ICON */}
          <Image
            src={getIcon(item.type)}
            alt={item.type}
            width={32}
            height={32}
          />

          <div>
            <h3 className="text-sm">
              <span className="font-semibold capitalize">
                {item.type}
              </span>{" "}
              with{" "}
              <span className="font-semibold">
                {item.friendName || item.title}
              </span>
            </h3>

            <p className="text-xs text-gray-500">
              📅 {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineList;