import Image from "next/image";

const TimelineList = ({ timeline, getIcon }) => {
  if (!timeline || timeline.length === 0) {
    return <p className="text-sm text-gray-500">No activity yet</p>;
  }

  return (
    <div className="space-y-3">
      {timeline.map((item) => (
        <div
          key={item.id || item.date}
          className="flex items-center gap-3 border-b pb-3"
        >
          <Image
            src={getIcon(item.type)}
            alt={item.type}
            width={32}
            height={32}
          />

          <div>
            <h3 className="text-sm">
              <span className="font-semibold capitalize">{item.type}</span> with{" "}
              <span className="font-semibold">{item.title}</span>
            </h3>

            <p className="text-xs text-gray-500">📅 {item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineList;