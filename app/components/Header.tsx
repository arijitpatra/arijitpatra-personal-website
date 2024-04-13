"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Homemade_Apple, Raleway } from "next/font/google";

const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center flex-col mt-12 sticky top-4">
      <h1 className={`text-xl ${homemadeApple.className} dark:text-slate-300`}>
        Arijit Patra
      </h1>
      <nav
        className={`text-md space-x-8 mt-10 ${raleway.className} text-slate-500 dark:text-slate-300`}
      >
        {/* <nav className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex"> */}
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "text-red-600 font-bold"
              : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
          }`}
        >
          About
        </Link>
        <Link
          href="/resume"
          className={`${
            pathname === "/resume"
              ? "text-red-600 font-bold"
              : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
          }`}
        >
          Resume
        </Link>
        {/* <Link href='/work' className={`${pathname === '/work' ? 'text-red-600 font-bold' : ''}`}>Work</Link>  */}
        <a className="text-slate-300 dark:text-slate-500">Work</a>
        <Link
          href="/photography"
          className={`${
            pathname === "/photography"
              ? "text-red-600 font-bold"
              : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
          }`}
        >
          Photography
        </Link>
        <Link
          href="/design"
          className={`${
            pathname === "/design"
              ? "text-red-600 font-bold"
              : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
          }`}
        >
          Design
        </Link>
        <Link
          href="/achievements"
          className={`${
            pathname === "/achievements"
              ? "text-red-600 font-bold"
              : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
          }`}
        >
          Achievement
        </Link>
        <Link
          href="/contact"
          className={`${
            pathname === "/contact"
              ? "text-red-600 font-bold"
              : "hover:decoration-red-600 hover:underline underline-offset-8 decoration-4"
          }`}
        >
          Contact
        </Link>
        {/* <Link href='/blog' className={`${pathname === '/blog' ? 'text-red-600 font-bold' : ''}`}>Blog</Link> */}
        <a className="text-slate-300 dark:text-slate-500">Blog</a>
      </nav>
    </header>
  );
}
