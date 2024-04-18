"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Raleway } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menu = (
    <ul className="flex flex-col md:flex-row items-center">
      <li
        className={`p-4 border-b-4 border-transparent ${
          pathname === "/" ? "text-red-600 font-bold" : "hover:border-red-600"
        }`}
      >
        <Link href="/">About</Link>
      </li>
      <li
        className={`p-4 border-b-4 border-transparent ${
          pathname === "/resume"
            ? "text-red-600 font-bold"
            : "hover:border-red-600"
        }`}
      >
        <Link href="/resume">Resume</Link>
      </li>
      <li className="p-4 border-b-4 border-transparent text-slate-300 dark:text-slate-500">
        <a>Work</a>
      </li>
      <li
        className={`p-4 border-b-4 border-transparent ${
          pathname === "/photography"
            ? "text-red-600 font-bold"
            : "hover:border-red-600"
        }`}
      >
        <Link href="/photography">Photography</Link>
      </li>
      <li
        className={`p-4 border-b-4 border-transparent ${
          pathname === "/design"
            ? "text-red-600 font-bold"
            : "hover:border-red-600"
        }`}
      >
        <Link href="/design">Design</Link>
      </li>
      <li className="p-4 border-b-4 border-transparent text-slate-300 dark:text-slate-500">
        <a>Achievement</a>
      </li>
      <li
        className={`p-4 border-b-4 border-transparent ${
          pathname === "/contact"
            ? "text-red-600 font-bold"
            : "hover:border-red-600"
        }`}
      >
        <Link href="/contact">Contact</Link>
      </li>
      <li className="p-4 border-b-4 border-transparent text-slate-300 dark:text-slate-500">
        {/* To Medium */}
        <a>Blog</a>
      </li>
    </ul>
  );

  return (
    <>
      {isMenuOpen ? (
        <FaTimes
          className="md:hidden text-red-600 text-2xl"
          onClick={toggleMenu}
        />
      ) : (
        <FaBars
          className="md:hidden text-red-600 text-2xl"
          onClick={toggleMenu}
        />
      )}

      {isMenuOpen ? (
        <nav
          className={`absolute w-full top-4 py-8 bg-white dark:bg-black text-sm space-x-8 mt-10 ${raleway.className} text-slate-500 dark:text-slate-300`}
        >
          {menu}
        </nav>
      ) : null}

      <nav
        className={`hidden md:flex text-sm gap-8 mt-10 ${raleway.className} text-slate-500 dark:text-slate-300`}
      >
        {menu}
      </nav>
    </>
  );
}
