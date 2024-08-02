import { Contact } from '../components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Windrose & Company | Start Your Business Journey',
  description: 'Get in touch with Windrose & Company for expert business consultancy. Schedule a free consultation or connect with us on LinkedIn to begin your journey to business success.',
  openGraph: {
    title: 'Contact Windrose & Company | Start Your Business Journey',
    description: 'Connect with Windrose & Company for expert business consultancy. Schedule a free consultation or reach out on LinkedIn.',
    type: 'website',
    url: 'https://www.windroseandco.com/contact',
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
    title: 'Contact Windrose & Company | Start Your Business Journey',
    description: 'Connect with Windrose & Company for expert business consultancy. Schedule a free consultation or reach out on LinkedIn.',
    images: ['/assets/img/windroselogo.png'],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gunmetal">
      <Contact />
    </div>
  );
}