import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const TimeLineLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* PAGE CONTENT AREA */}
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
};

export default TimeLineLayout;
