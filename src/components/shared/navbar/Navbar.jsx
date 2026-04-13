import Link from "next/link";
import { Users } from "lucide-react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 shadow-xl bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white shadow-md">
            <Users size={22} />
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-bold text-gray-900">KeenKeeper</h1>
            <p className="text-xs text-gray-500">Keep Friendships Alive</p>
          </div>
        </Link>

        {/* Client Component */}
        <NavLinks />
      </div>
    </header>
  );
}

export default Navbar;