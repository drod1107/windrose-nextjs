import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Code2, GraduationCap, HeartHandshake, Workflow } from 'lucide-react';
import PageHero from '../components/PageHero';
import FinalCta from '../components/FinalCta';

export const metadata: Metadata = {
  title: 'Services | People-first Technology Consulting',
  description: 'Practical AI automation, technology systems, software development, and community capacity building from Windrose & Company.',
  alternates: { canonical: 'https://www.windroseandco.com/what-we-do' },
};

const offerings = [
  {
    id: 'automation', no: '01', eyebrow: 'AI & automation', Icon: Workflow,
    title: 'Give time back to the people doing the work.',
    body: 'The most valuable hours in a small organization are rarely the ones spent copying data, chasing reminders, or keeping three tools in sync. We find the friction and build workflows that simplify it.',
    examples: ['Operations and administrative automation', 'Practical AI-assisted workflows', 'Customer communication and follow-up systems'],
  },
  {
    id: 'systems', no: '02', eyebrow: 'Technology & systems', Icon: Code2,
    title: 'Make your tools work as a team.',
    body: 'You should not have to design your day around disconnected software. We take a close look at how you work, then build, connect or improve the systems you depend on.',
    examples: ['Custom websites and software', 'System integrations and process design', 'Digital records and information organization'],
  },
  {
    id: 'schools', no: '03', eyebrow: 'AI safety & education', Icon: GraduationCap,
    title: 'Make responsible progress possible.',
    body: 'We support K-12 schools as they turn AI safety from a policy document into real understanding: useful guidance, staff confidence, student literacy, and ways to respond when something goes wrong.',
    examples: ['AI acceptable-use and safety policy', 'Staff development and AI literacy', 'AI incident preparedness'],
  },
  {
    id: 'community', no: '04', eyebrow: 'Community & small business', Icon: HeartHandshake,
    title: 'Help the people helping others.',
    body: 'Chambers, nonprofits and small-business ecosystems often have more ideas than capacity. We help build systems that make their limited time go further.',
    examples: ['Small-business operations support', 'Community program technology', 'Practical workflows and communications'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="How we help" title="Good technology should make a difference you can feel." lead="We start with the work, not the tool. Together, we find what is getting in the way and build a better route forward." />
      <section className="bg-cream py-16 text-ink sm:py-24">
        <div className="container-content">
          <div className="grid gap-6 border-b border-ink/20 pb-12 lg:grid-cols-12">
            <span className="eyebrow text-teal-deep lg:col-span-3">The way we work</span>
            <p className="max-w-[740px] font-display text-2xl leading-snug text-gunmetal-deep sm:text-3xl lg:col-span-9">Listen closely. Look at the whole system. Make the next step practical. Leave people more capable than we found them.</p>
          </div>
          {offerings.map(({id, no, eyebrow, Icon, title, body, examples}) => (
            <article key={id} id={id} className="grid scroll-mt-28 gap-8 border-b border-ink/20 py-14 lg:grid-cols-12 lg:py-20">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4"><span className="font-body text-sm font-bold text-myrtle-green">{no} / 04</span><Icon className="h-7 w-7 text-teal-deep" aria-hidden="true" /></div>
                <span className="eyebrow mt-6 text-teal-deep">{eyebrow}</span>
              </div>
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl leading-snug text-gunmetal-deep sm:text-4xl">{title}</h2>
                <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/80">{body}</p>
                {id === 'schools' && <Link href="/for-schools" className="mt-6 inline-flex items-center gap-2 font-body font-semibold text-teal-deep underline decoration-teal-deep/40 underline-offset-8 hover:decoration-teal-deep">Explore the school program <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>}
              </div>
              <div className="lg:col-span-3">
                <h3 className="font-body text-xs font-bold uppercase tracking-widest text-teal-deep">What this can include</h3>
                <ul className="mt-5 space-y-4">{examples.map(example => <li key={example} className="flex gap-3 font-body text-sm leading-relaxed text-ink/75"><ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-myrtle-green" aria-hidden="true" />{example}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-cloud py-16 text-ink sm:py-24">
        <div className="container-content grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow text-teal-deep">Also in our wheelhouse</span>
            <h2 className="mt-4 text-3xl text-gunmetal-deep sm:text-4xl">Practical help, in many forms.</h2>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {['Software development', 'Technology consulting', 'Innovation consulting', 'Virtual assistance', 'Social media content and management', 'Paper document digitization'].map((capability, index) => (
              <li key={capability} className="flex gap-4 border-t border-ink/20 py-5 font-body text-base font-medium text-ink/85">
                <span className="text-sm font-bold text-myrtle-green">{String(index + 1).padStart(2, '0')}</span>
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta heading="Let's solve the right problem first." body="Come with the challenge you are facing, even if you don't yet know what technology should do about it. That's a useful place to start." />
    </>
  );
}
