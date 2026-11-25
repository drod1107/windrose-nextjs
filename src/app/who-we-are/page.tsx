import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import FounderBand from '../components/FounderBand';
import FinalCta from '../components/FinalCta';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Windrose & Company is a people-first technology consultancy based in Missouri, helping businesses and community organizations adopt practical technology and AI.',
  alternates: { canonical: 'https://www.windroseandco.com/who-we-are' },
};

export default function WhoWeArePage() {
  return <>
    <PageHero eyebrow="About Windrose & Company" title="Technology is a human endeavor." lead="We believe computers are best used for empowering people to human better. Our work begins with understanding the people, culture and goals behind every organization." />
    <FounderBand />
    <section className="bg-cloud text-ink py-20">
      <div className="container-content grid md:grid-cols-3 gap-8">
        {[
          ['Understand first', 'We listen, learn your processes and identify the problems that are worth solving.'],
          ['Build for people', 'We design around the people who will use the systems, including their budgets, skills and responsibilities.'],
          ['Leave you stronger', 'We aim to deliver technology, guidance and workflows you can understand and maintain.'],
        ].map(([title, body]) => <article key={title} className="rounded-xl2 bg-white p-8 border border-ink/10"><h2 className="text-2xl text-gunmetal">{title}</h2><p className="font-body text-ink/75 mt-3">{body}</p></article>)}
      </div>
    </section>
    <FinalCta heading="Let's build something useful." body="Tell us what you are trying to accomplish and we'll work through the possibilities together." />
  </>;
}
