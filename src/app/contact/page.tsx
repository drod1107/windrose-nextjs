import { Metadata } from 'next';
import { Linkedin, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import PageHero from '../components/PageHero';
import LeadForm from '../components/LeadForm';
import CalendarEmbed from '../components/CalendarEmbed';
import Reveal from '../components/Reveal';
import { siteConfig } from '../siteConfig';

export const metadata: Metadata = {
  title: 'Book a Consult',
  description:
    'Talk to Windrose & Company about AI safety and policy for your K-12 district. Send a message or book a free discovery call — no obligation.',
  openGraph: {
    title: 'Book a Consult | Windrose & Company',
    description:
      'Talk to Windrose & Company about AI safety and policy for your K-12 district. Free discovery call, no obligation.',
    type: 'website',
    url: 'https://www.windroseandco.com/contact',
    images: [{ url: '/assets/img/windroselogo.png', width: 1200, height: 630, alt: 'Windrose & Company' }],
  },
};

const expectations = [
  { icon: <Clock className="w-5 h-5" aria-hidden="true" />, text: 'A focused 30-minute call — no sales pressure.' },
  { icon: <MessageSquare className="w-5 h-5" aria-hidden="true" />, text: 'We map where your district sits on the Readiness Matrix.' },
  { icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />, text: 'You leave with clear next steps, whether or not we work together.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        title="Book a consult for your district"
        lead="Whether you need a board-ready AI policy, staff training, or a full program, the first step is a free discovery call. Send a message and we'll follow up — or grab a time on the calendar right away."
      >
        <ul className="space-y-2.5">
          {expectations.map((e) => (
            <li key={e.text} className="flex items-center gap-3 font-body text-cream/85">
              <span className="text-gold">{e.icon}</span>
              {e.text}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-cream text-ink py-20 lg:py-28">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Intake form */}
            <Reveal className="rounded-xl2 bg-white border border-ink/5 shadow-soft p-8">
              <h2 className="text-2xl text-gunmetal">Send us a message</h2>
              <p className="font-body text-ink/65 mt-2 mb-6">
                Tell us a little about your district and we&rsquo;ll be in touch within one
                business day.
              </p>
              <LeadForm source="contact-page" />
            </Reveal>

            {/* Booking */}
            <Reveal delay={120}>
              <h2 className="text-2xl text-gunmetal">Or book a time now</h2>
              <p className="font-body text-ink/65 mt-2 mb-6">
                Pick a slot that works for you — it goes straight onto our calendar.
              </p>
              <CalendarEmbed />
              <p className="font-body text-sm text-ink/60 mt-6">
                Prefer LinkedIn?{' '}
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-myrtle-green hover:text-teal-deep"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  Connect with us
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
