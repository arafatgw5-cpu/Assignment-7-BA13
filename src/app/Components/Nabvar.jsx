"use client";

import { Clock3, Home, PieChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nabvar = () => {
  const pathName = usePathname();
  return (
    <header className="sticky top-0 z-10 bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-700">
          Keen <span className="text-green-800">Keeper</span>
        </div>

        <nav className="flex gap-2">
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
      </div>
    </header>
  );
};

export default Nabvar;
