import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { navbarItems } from "./navbarItems";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Windrose & Company | Business Consultancy for Startups and Solopreneurs",
    template: "%s | Windrose & Company"
  },
  description: "Empowering startups and solopreneurs with business process architecture, AI enhancements, and scaling strategies. Navigate to richer waters with Windrose & Company.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gunmetal text-papaya-whip min-h-screen flex flex-col`}>
        <Navbar items={navbarItems} />
        <main className="flex-grow py-16 px-5 md:px-10 lg:px-16 rounded-xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}