import type { Metadata } from 'next';
import Link from 'next/link';
import { Workflow, Code2, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import FinalCta from '../components/FinalCta';

export const metadata: Metadata = {
  title: 'Technology Consulting & AI Automation',
  description: 'People-first AI automation, software development, technology consulting, business process architecture and AI governance for schools and small businesses.',
  alternates: { canonical: 'https://www.windroseandco.com/what-we-do' },
};

const services = [
  { id: 'automation', title: 'AI & workflow automation', icon: Workflow, intro: 'Reclaim the time lost to repetitive work.', items: ['Process mapping and workflow redesign', 'AI-assisted customer communications and administrative work', 'Marketing and content workflows', 'Practical training, documentation and human review'] },
  { id: 'systems', title: 'Technology & systems engineering', icon: Code2, intro: 'Build a reliable foundation for the next stage of your organization.', items: ['Custom software and websites', 'Systems integration and modernization', 'Digital records and document workflows', 'Technology assessment and implementation'] },
  { id: 'community', title: 'Small business & community capacity', icon: Users, intro: 'Build systems that help entrepreneurs stay focused on their strengths and help community organizations support them.', items: ['Operational design for solopreneurs and growing teams', 'Administrative and event workflow improvements', 'Sales, marketing and customer-facing systems', 'Affordable, maintainable technology that fits your organization'] },
  { id: 'education', title: 'AI governance & education', icon: ShieldCheck, intro: 'Help educators and leaders manage AI with confidence, safety and clear expectations.', items: ['AI policy and responsible-use guidance', 'Staff development and AI literacy', 'Safety procedures and incident response playbooks', 'Practical implementation support'] },
];

export default function WhatWeDoPage() {
  return <>
    <PageHero eyebrow="Our services" title="Make technology work for your people." lead="We start with the work you actually do, the people doing it and the outcomes you want. Then we build the systems to help you get there." />
    <section className="bg-cream text-ink py-20 lg:py-28">
      <div className="container-content grid gap-6 md:grid-cols-2">
        {services.map(({id, title, icon: Icon, intro, items}) => (
          <article id={id} key={id} className="scroll-mt-28 rounded-xl2 bg-white border border-ink/10 p-8">
            <Icon className="w-9 h-9 text-myrtle-green" aria-hidden="true" />
            <h2 className="text-3xl text-gunmetal mt-5">{title}</h2>
            <p className="font-body text-lg text-ink/75 mt-3">{intro}</p>
            <ul className="list-disc pl-5 space-y-2 mt-5 font-body text-ink/80">{items.map(item => <li key={item}>{item}</li>)}</ul>
            {id === 'education' && <Link href="/for-schools" className="inline-flex items-center gap-2 font-semibold text-myrtle-green mt-6">Explore the school program <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>}
          </article>
        ))}
      </div>
    </section>
    <FinalCta heading="Let's find your first opportunity." body="We'll help you identify a problem worth solving and a solution that fits your people, technology and budget." />
  </>;
}
