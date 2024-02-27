import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arijit Patra",
  description: "Arijit Patra's personal website - arijitpatra.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white dark:bg-black">
      <body className={sourceSans.className}>
        <Header />
        <main className="py-32 px-40 container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
