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
        <main className="px-8 py-12 container mx-auto">
          <Header />
          <section className="py-16">
          {children}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
