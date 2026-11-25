import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import FinalCta from '../components/FinalCta';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how Windrose & Company applies technology, AI and people-first systems in education and small business.',
  alternates: { canonical: 'https://www.windroseandco.com/case-studies' },
};

const studies = [
  { title: 'AI readiness in rural Missouri', category: 'Education', body: 'Helping a small school district establish a board-approved AI policy, staff training and practical safety resources.', href: '/case-study' },
  { title: 'Building the systems behind Wintergarten', category: 'Small business', body: 'AI-assisted development and business automation in an owner-operated cottage bakery.', href: '/case-study/wintergarten' },
];

export default function CaseStudiesPage() {
  return <>
    <PageHero eyebrow="Our work" title="Practical technology in action." lead="Two very different organizations. One shared objective: use technology to help people do their best work." />
    <section className="bg-cream text-ink py-20 lg:py-28">
      <div className="container-content grid gap-6 md:grid-cols-2">
        {studies.map(({title, category, body, href}) => <article key={href} className="bg-white border border-ink/10 rounded-xl2 p-8">
          <span className="eyebrow text-myrtle-green">{category}</span>
          <h2 className="text-3xl text-gunmetal mt-4">{title}</h2>
          <p className="font-body text-lg text-ink/75 mt-4">{body}</p>
          <Link href={href} className="inline-flex items-center gap-2 font-semibold text-myrtle-green mt-7">Read the case study <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
        </article>)}
      </div>
    </section>
    <FinalCta heading="What could we build together?" body="Tell us what you are trying to accomplish and we will help you identify the next step." />
  </>;
}
