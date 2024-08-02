// File: src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { navbarItems } from "./navbarItems";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Windrose & Company",
  description: "Windrose & Company website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gunmetal mx-">
      <body className={`${inter.className} bg-gunmetal text-papaya-whip `}>
        <Navbar items={navbarItems} />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
