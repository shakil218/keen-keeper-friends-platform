import Link from "next/link";
import { FaFacebook, FaGithub, FaXTwitter,  } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-linear-to-br from-slate-900 via-[#1e3a5f] to-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            KeenKeeper
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Your personal space for meaningful connections. Browse, track, and
            nurture the friendships that matter most.
          </p>

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Social Links
            </h3>

            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://github.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition hover:scale-105 hover:shadow-lg"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="https://facebook.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition hover:scale-105 hover:shadow-lg"
              >
                <FaFacebook size={18} />
              </Link>

              <Link
                href="https://twitter.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition hover:scale-105 hover:shadow-lg"
              >
                <FaXTwitter size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 md:flex-row">
          <p>© {year} KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>

            <Link href="/cookies" className="transition hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;