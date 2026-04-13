"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Clock3, ChartColumn } from "lucide-react";

const NavLinks = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: House },
    { name: "Timeline", href: "/timeline", icon: Clock3 },
    { name: "Stats", href: "/stats", icon: ChartColumn },
  ];

  const linkStyle = (href) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
      pathname === href
        ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white shadow-lg"
        : "text-gray-600 hover:text-[#632EE3] hover:bg-[#F4F0FF]"
    }`;

  return (
    <>
      {/* Desktop */}
      <nav className="hidden items-center gap-2 md:flex">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={linkStyle(item.href)}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <ul className="menu dropdown-content z-1 mt-3 w-52 rounded-box border border-base-200 bg-white p-2 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={
                    pathname === item.href ? "font-semibold text-[#632EE3]" : ""
                  }
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavLinks;