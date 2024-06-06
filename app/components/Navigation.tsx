"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Raleway } from "next/font/google";
import { useState } from "react";
import { NavListLink } from "./NavListLink";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menu = (
    <ul className="flex flex-col md:flex-row items-center">
      <NavListLink path="/" title="About" />
      <NavListLink path="/resume" title="Resume" />
      <NavListLink path="/work" title="Work" disabled />
      <NavListLink path="/photography" title="Photography" />
      <NavListLink path="/design" title="Design" />
      <NavListLink path="/achievement" title="Achievement" disabled />
      <NavListLink path="/contact" title="Contact" />
      <NavListLink path="/medium" title="Blog" disabled />
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
