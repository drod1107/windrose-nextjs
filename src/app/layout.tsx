import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { navbarItems } from "./navbarItems";
import Footer from "./components/Footer";
import { inter, hind, montserrat, lora, saira } from './fonts';
import { Analytics } from "@vercel/analytics/react"

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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${hind.variable} ${montserrat.variable} ${lora.variable} ${saira.variable}`}>
      <body className={`bg-gunmetal text-papaya-whip min-h-screen flex flex-col font-sans`}>
        <Navbar items={navbarItems} />
        <main className="flex-grow py-16 rounded-xl">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}