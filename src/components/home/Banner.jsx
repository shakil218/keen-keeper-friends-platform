import Link from "next/link";
import { UserPlus } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#632EE3] via-[#7C3AED] to-[#9F62F2] px-6 py-16 text-white shadow-xl md:px-10">
      {/* Background Glow */}
      <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Friends to keep close in your life
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85 md:text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <Link
          href="/add-friend"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-[#632EE3] shadow-lg transition hover:scale-105"
        >
          <UserPlus size={18} />
          Add a Friend
        </Link>
      </div>
    </section>
  );
};

export default Banner;
