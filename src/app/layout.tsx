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
    default: "Windrose & Company | People-First Technology & AI Consulting",
    template: "%s | Windrose & Company"
  },
  description:
    "People-first technology consulting, AI automation and software development for businesses, schools and community organizations.",
  keywords: [
    "AI automation for small business", "technology consulting Missouri", "business process automation", "AI policy for schools",
    "K-12 AI safety",
    "AI acceptable use policy",
    "school AI consulting",
    "AI in education",
    "teacher AI training",
  ],
  openGraph: {
    title: "Windrose & Company | People-First Technology & AI Consulting",
    description:
      "Practical technology and AI solutions that help businesses, schools and community organizations grow.",
    type: "website",
    url: "https://www.windroseandco.com",
    images: [{ url: "/assets/img/windroselogo.png", width: 1200, height: 630, alt: "Windrose & Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Windrose & Company | People-First Technology & AI Consulting",
    description:
      "Practical technology and AI solutions that help businesses, schools and community organizations grow.",
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
      <body className="min-h-screen bg-cream text-ink flex flex-col font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Windrose & Company",
              url: "https://www.windroseandco.com",
              description:
                "Technology consulting, AI automation, software development and AI governance for businesses and community organizations.",
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
        <a href="#main-content" className="fixed left-4 top-2 z-[100] -translate-y-[150%] rounded bg-gold px-5 py-3 font-body font-bold text-gunmetal-deep focus:translate-y-0">Skip to content</a>
        <Navbar items={navbarItems} />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
