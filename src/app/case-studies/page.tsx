import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import FinalCta from '../components/FinalCta';
import CompassRose from '../components/CompassRose';

export const metadata: Metadata = {
  title: 'Case Studies | Our Work',
  description: 'Real-world examples of how Windrose & Company applies thoughtful technology to education and small business.',
  alternates: { canonical: 'https://www.windroseandco.com/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="Selected work" title="Real people. Real problems. Practical progress." lead="Every organization is different. These stories show what happens when we start by understanding the work and build from there." />
      <section className="bg-cream py-20 text-ink sm:py-28">
        <div className="container-content">
          <div className="grid gap-10 border-b border-ink/20 pb-16 lg:grid-cols-12 lg:items-center">
            <div className="relative grid min-h-[320px] place-items-center overflow-hidden bg-[#E8F3FB] lg:col-span-5" aria-hidden="true">
              <CompassRose className="h-64 w-64 text-myrtle-green/25" />
              <span className="absolute bottom-7 left-8 font-body text-xs font-bold uppercase tracking-[0.2em] text-teal-deep">Education / 01</span>
            </div>
            <article className="lg:col-span-7 lg:pl-8">
              <span className="eyebrow text-teal-deep">Education / Rural Missouri</span>
              <h2 className="mt-5 max-w-xl text-3xl leading-snug text-gunmetal-deep sm:text-4xl">AI readiness begins with the people in the classroom.</h2>
              <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/80">A rural school partnership focused on making AI policy, staff training and student safety concrete and useful for a small community.</p>
              <Link href="/case-study" className="mt-8 inline-flex min-h-12 items-center gap-2 border-b border-teal-deep/40 font-body font-semibold text-teal-deep hover:border-teal-deep">Explore the education case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            </article>
          </div>
          <div className="grid gap-10 py-16 lg:grid-cols-12 lg:items-center">
            <article className="lg:col-span-7">
              <span className="eyebrow text-teal-deep">Small business / Wintergarten</span>
              <h2 className="mt-5 max-w-xl text-3xl leading-snug text-gunmetal-deep sm:text-4xl">Giving a maker more time to make.</h2>
              <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/80">Our own cottage bakery is a working example of practical AI-assisted development, integrated business systems and automation that support an owner-operated venture.</p>
              <Link href="/case-study/wintergarten" className="mt-8 inline-flex min-h-12 items-center gap-2 border-b border-teal-deep/40 font-body font-semibold text-teal-deep hover:border-teal-deep">Explore the Wintergarten case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            </article>
            <div className="relative grid min-h-[320px] place-items-center overflow-hidden bg-[#FFF7F1] lg:col-span-5" aria-hidden="true">
              <div className="absolute inset-0 cartographic-paper opacity-50" />
              <span className="relative font-display text-[clamp(3.5rem,8vw,8rem)] italic leading-none text-teal-deep/75">W.</span>
              <span className="absolute bottom-7 left-8 font-body text-xs font-bold uppercase tracking-[0.2em] text-gunmetal">Small business / 02</span>
            </div>
          </div>
        </div>
      </section>
      <FinalCta heading="What could we make better together?" body="The starting point is a conversation about your people, your work and what you would like to change." />
    </>
  );
}
