import About from '../components/About';
import YouTubeEmbed from '../components/YoutubeEmbed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What We Do | Windrose & Company',
  description: 'Discover how Windrose & Company empowers startups and solopreneurs with expert business consultancy, from process architecture to AI-driven solutions.',
  openGraph: {
    title: 'What We Do | Windrose & Company',
    description: 'Expert business consultancy for startups and solopreneurs. Discover our unique approach to people-first systems and AI-driven solutions.',
    type: 'website',
    url: 'https://www.windroseandco.com/what-we-do',
    images: [
      {
        url: '/assets/img/windroselogo.png',
        width: 1200,
        height: 630,
        alt: 'Windrose & Company Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What We Do | Windrose & Company',
    description: 'Expert business consultancy for startups and solopreneurs. Discover our unique approach to people-first systems and AI-driven solutions.',
    images: ['/assets/img/windroselogo.png'],
  },
};

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-gunmetal">
      <main className="p-2">  {/* Add padding-top to account for the fixed navbar */}
        <About />
      </main>
    </div>
  );
}