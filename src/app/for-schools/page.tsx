import { Metadata } from 'next';
import { Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import Pillars from '../components/Pillars';
import ReadinessMatrix from '../components/ReadinessMatrix';
import Faq from '../components/Faq';
import FinalCta from '../components/FinalCta';
import { siteConfig } from '../siteConfig';

export const metadata: Metadata = {
  title: 'AI Safety & Policy for K-12 Schools',
  description:
    'Windrose & Company helps K-12 districts adopt a board-ready AI acceptable use policy, train staff, run student AI-literacy programs, and prepare for AI incidents — from compliance to culture.',
  openGraph: {
    title: 'AI Safety & Policy for K-12 Schools | Windrose & Company',
    description:
      'Board-ready AI policy, staff training, student programs, and an incident playbook for K-12 districts.',
    type: 'website',
    url: 'https://www.windroseandco.com/for-schools',
    images: [{ url: '/assets/img/windroselogo.png', width: 1200, height: 630, alt: 'Windrose & Company' }],
  },
};

export default function ForSchoolsPage() {
  // Service JSON-LD (Layer A pitch — strengthens AI/GEO extraction)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI safety policy and integration for K-12 schools',
    provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    areaServed: 'United States',
    audience: { '@type': 'EducationalAudience', educationalRole: 'K-12 school district' },
    description:
      'Custom AI acceptable use policy, on-site staff professional development, student AI-literacy assemblies (grades 3-8), and an AI incident response playbook for K-12 districts.',
  };

  return (
    <>
      <PageHero
        eyebrow="For K-12 districts"
        title="A complete AI safety program for your district"
        lead="Windrose & Company helps U.S. K-12 districts create a board-ready AI policy, train every staff member, teach students to use AI safely, and prepare for incidents before they happen. We don't hand you a binder — we build a culture."
      >
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-base"
        >
          <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
          Book a discovery call
        </a>
      </PageHero>

      <Pillars detailed />
      <ReadinessMatrix />
      <Faq />
      <FinalCta
        heading="Let's scope your district's program"
        body="Tell us where your district stands and we'll map out a practical, affordable path forward. Every engagement is custom — book a free discovery call to get a proposal."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
