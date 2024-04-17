'use client'

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

    const menu =        <ul className="flex flex-col md:flex-row items-center gap-8">
    <li
      className={`${
        pathname === "/"
          ? "text-red-600 font-bold"
          : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
      }`}
    >
      {" "}
      <Link href="/">About</Link>
    </li>
    <li
      className={`${
        pathname === "/resume"
          ? "text-red-600 font-bold"
          : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
      }`}
    >
      <Link href="/resume">Resume</Link>
    </li>
    <li className="text-slate-300 dark:text-slate-500">
      <a>Work</a>
    </li>
    <li
      className={`${
        pathname === "/photography"
          ? "text-red-600 font-bold"
          : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
      }`}
    >
      <Link href="/photography">Photography</Link>
    </li>
    <li
      className={`${
        pathname === "/design"
          ? "text-red-600 font-bold"
          : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
      }`}
    >
      <Link href="/design">Design</Link>
    </li>
    <li
      className={`${
        pathname === "/achievements"
          ? "text-red-600 font-bold"
          : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
      }`}
    >
      <Link href="/achievements">Achievement</Link>
    </li>
    <li
      className={`${
        pathname === "/contact"
          ? "text-red-600 font-bold"
          : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
      }`}
    >
      <Link href="/contact">Contact</Link>
    </li>
    <li className="text-slate-300 dark:text-slate-500">
      {/* To Medium */}
      <a>Blog</a>
    </li>
  </ul>;

    return (
      <>
      {
        isMenuOpen ? 
        <FaTimes className="md:hidden text-red-600 text-2xl" onClick={toggleMenu}/> : 
        <FaBars className="md:hidden text-red-600 text-2xl" onClick={toggleMenu}/>
      }
      
      {
        isMenuOpen ?       <nav
        className={`absolute w-full top-4 py-8 bg-white text-sm space-x-8 mt-10 ${raleway.className} text-slate-500 dark:text-slate-300`}
      >
        {/* <nav className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex"> */}
        {menu}
      </nav> : null
      }

      <nav className={`hidden md:flex bg-white text-sm gap-8 mt-10 ${raleway.className} text-slate-500 dark:text-slate-300`}>
        {menu}
        </nav>
        
      </>
    );
  }
  