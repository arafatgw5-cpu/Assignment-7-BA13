"use client";

import { Clock3, Home, PieChart, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-700">
          Keen <span className="text-green-800">Keeper</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-2">
          <Link
            href="/"
            className={`flex items-center gap-1 px-3 py-2 rounded ${
              pathName === "/" ? "bg-green-800 text-white" : "hover:bg-gray-100"
            }`}
          >
            <Home size={16} />
            Home
          </Link>

          <Link
            href="/timeline"
            className={`flex items-center gap-1 px-3 py-2 rounded ${
              pathName === "/timeline"
                ? "bg-green-800 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Clock3 size={16} />
            Timeline
          </Link>

          <Link
            href="/stats"
            className={`flex items-center gap-1 px-3 py-2 rounded ${
              pathName === "/stats"
                ? "bg-green-800 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <PieChart size={16} />
            Stats
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            href="/"
            className={`block px-3 py-2 rounded ${
              pathName === "/" ? "bg-green-800 text-white" : "hover:bg-gray-100"
            }`}
          >
            Home
          </Link>

          <Link
            href="/timeline"
            className={`block px-3 py-2 rounded ${
              pathName === "/timeline"
                ? "bg-green-800 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Timeline
          </Link>

          <Link
            href="/stats"
            className={`block px-3 py-2 rounded ${
              pathName === "/stats"
                ? "bg-green-800 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Stats
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;