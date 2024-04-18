import { Homemade_Apple } from "next/font/google";
import { Navigation } from "./Navigation";
import Link from "next/link";

const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export function Header() {
  return (
    <header className="flex md:flex-col justify-between items-center sticky top-8">
      <h1 className={`text-xl ${homemadeApple.className} dark:text-slate-300`}>
        <Link href="/">Arijit Patra</Link>
      </h1>
      <Navigation />
    </header>
  );
}
