import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '../../components/PageHero';
import FinalCta from '../../components/FinalCta';

export const metadata: Metadata = {
  title: 'Case Study: Wintergarten Small Business Automation',
  description: 'How Windrose applied AI-assisted development and business process automation to its own cottage bakery in rural Missouri.',
  alternates: { canonical: 'https://www.windroseandco.com/case-study/wintergarten' },
};

export default function WintergartenCaseStudy() {
  return <>
    <PageHero eyebrow="Case study / small business" title="More room for the work that matters." lead="Wintergarten Bakehouse + Botanicals is a small business operated by our founders in rural Missouri. It provides a real environment for testing what AI-assisted development and automation can do for an owner-operated business." />
    <section className="bg-cream text-ink py-20 lg:py-28">
      <div className="container-content max-w-4xl space-y-12">
        <article><span className="eyebrow text-myrtle-green">The challenge</span><h2 className="text-3xl text-gunmetal mt-3">Running the business takes time away from making things.</h2><p className="font-body text-lg text-ink/75 mt-4">A small bakery needs a website, product catalog, inventory, customer communications, payment systems and marketing. An owner has to keep these systems working while making products and serving customers.</p></article>
        <article><span className="eyebrow text-myrtle-green">What we built</span><h2 className="text-3xl text-gunmetal mt-3">Practical systems, designed around the owner.</h2><ul className="space-y-3 mt-5">{['A custom business website and administrative tools', 'AI-assisted software development and maintenance', 'A point-of-sale workflow with inventory tracking', 'Scheduled newsletter and content operations'].map(item => <li key={item} className="flex gap-3 font-body text-lg text-ink/80"><Check className="w-6 h-6 shrink-0 text-myrtle-green" aria-hidden="true" />{item}</li>)}</ul></article>
        <article><span className="eyebrow text-myrtle-green">The result</span><h2 className="text-3xl text-gunmetal mt-3">A small business with infrastructure it can build on.</h2><p className="font-body text-lg text-ink/75 mt-4">The point-of-sale system has been used at live events, and newsletter operations are supported by automation. The work continues as the business grows; the objective is to reduce the operational load on the owner, so the owner can focus on making products and serving customers.</p><a href="https://www.derwintergarten.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-myrtle-green mt-6">Visit Wintergarten <ArrowRight className="w-4 h-4" aria-hidden="true" /></a></article>
        <Link href="/case-study" className="font-semibold text-myrtle-green">Explore our education case study</Link>
      </div>
    </section>
    <FinalCta heading="Build a stronger foundation for your business." body="Let's identify what consumes your time and what technology can do to help." />
  </>;
}
