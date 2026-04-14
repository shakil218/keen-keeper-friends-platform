import Banner from "@/components/home/Banner";
import Friends from "@/components/home/friends/Friends";
import StatsSection from "@/components/home/StatsSection";

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-493.6px)]">
      <Banner />
      <StatsSection />
      <Friends />
    </div>
  );
};

export default HomePage;
