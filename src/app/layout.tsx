import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { navbarItems } from "./navbarItems";
import Footer from "./components/Footer";
import { inter, hind, montserrat, lora, saira } from './fonts';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.windroseandco.com"),
  title: {
    default: "Windrose & Company | AI Safety & Policy for K-12 Schools",
    template: "%s | Windrose & Company"
  },
  description:
    "Windrose & Company helps U.S. K-12 districts create board-ready AI policies, train staff, and run student AI-safety programs — taking schools from compliance to culture.",
  keywords: [
    "AI policy for schools",
    "K-12 AI safety",
    "AI acceptable use policy",
    "school AI consulting",
    "AI in education",
    "teacher AI training",
  ],
  openGraph: {
    title: "Windrose & Company | AI Safety & Policy for K-12 Schools",
    description:
      "Board-ready AI policy, staff training, and student programs for K-12 districts. From compliance to culture.",
    type: "website",
    url: "https://www.windroseandco.com",
    images: [{ url: "/assets/img/windroselogo.png", width: 1200, height: 630, alt: "Windrose & Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Windrose & Company | AI Safety & Policy for K-12 Schools",
    description:
      "Board-ready AI policy, staff training, and student programs for K-12 districts.",
    images: ["/assets/img/windroselogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${hind.variable} ${montserrat.variable} ${lora.variable} ${saira.variable}`}>
      <body className={`bg-gunmetal text-cream min-h-screen flex flex-col font-body`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Windrose & Company",
              url: "https://www.windroseandco.com",
              description:
                "AI safety, policy, and integration consulting for U.S. K-12 school districts.",
              areaServed: "United States",
              address: {
                "@type": "PostalAddress",
                addressLocality: "St. Louis",
                addressRegion: "MO",
                addressCountry: "US",
              },
              sameAs: ["https://www.linkedin.com/in/david-windrose/"],
            }),
          }}
        />
        <Navbar items={navbarItems} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
