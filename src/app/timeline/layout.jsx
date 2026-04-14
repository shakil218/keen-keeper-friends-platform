export const metadata = {
  title: "Timeline | Keen Keeper",
  description: "View all friendship interactions including calls, texts, videos, and meetups.",
};

const TimeLineLayout = ({ children }) => {
  return (
    <div className="min-h-[calc(100vh-493.6px)] flex flex-col bg-gray-50">
      {/* CONTENT WRAPPER */}
      <main className="flex-1 w-full px-4 py-6">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default TimeLineLayout;
