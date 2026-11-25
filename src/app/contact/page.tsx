import type { Metadata } from 'next';
import { ArrowUpRight, Linkedin, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import { siteConfig } from '../siteConfig';

export const metadata: Metadata = {
  title: 'Contact | Start a Conversation',
  description: 'Connect with Windrose & Company about automation, systems, responsible AI and practical technology consulting.',
  alternates: { canonical: 'https://www.windroseandco.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="The best place to start is a conversation." lead="Tell us where things feel harder than they ought to be. We can talk through the problem before jumping to a solution." />
      <section className="bg-cream py-20 text-ink sm:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="eyebrow text-teal-deep">A practical first step</span>
            <h2 className="mt-5 max-w-2xl text-3xl leading-snug text-gunmetal-deep sm:text-5xl">Come with a big idea, a stubborn problem, or a question.</h2>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink/75">We work with small businesses, schools and community organizations. If a conversation reveals we are not the right fit, we will say so. We value your time, and we know you do too.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-cta">Book a discovery call <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" /></a>
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 border-b border-teal-deep/35 px-1 font-body font-semibold text-teal-deep hover:border-teal-deep"><Linkedin className="h-5 w-5" aria-hidden="true" /> Connect on LinkedIn</a>
            </div>
          </div>
          <aside className="bg-cloud p-8 sm:p-10 lg:col-span-5">
            <span className="eyebrow text-teal-deep">Good to know</span>
            <h3 className="mt-5 text-2xl text-gunmetal-deep">What can we talk about?</h3>
            <ul className="mt-7 space-y-5 font-body text-ink/80">
              <li className="border-t border-ink/15 pt-4">Tools that do not talk to each other</li>
              <li className="border-t border-ink/15 pt-4">Repetitive tasks that eat up your week</li>
              <li className="border-t border-ink/15 pt-4">Practical and responsible AI adoption</li>
              <li className="border-t border-ink/15 pt-4">The next step for an organization ready to grow</li>
            </ul>
            <div className="mt-10 flex items-start gap-3 border-t border-ink/15 pt-7 font-body text-sm text-ink/70"><MapPin className="h-5 w-5 shrink-0 text-myrtle-green" aria-hidden="true" /> Based in {siteConfig.location}. Working beyond Missouri, too.</div>
          </aside>
        </div>
      </section>
    </>
  );
}
