import { Metadata } from 'next';
import { Lock, Calendar, Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import FinalCta from '../components/FinalCta';
import Reveal from '../components/Reveal';
import { siteConfig } from '../siteConfig';

export const metadata: Metadata = {
  title: 'Case Study: AI Safety in a Rural K-8 District',
  description:
    'How Windrose & Company partnered with a small, rural Missouri K-8 district to deliver a custom AI policy, staff training, a student assembly, and an incident response playbook in a single semester.',
  openGraph: {
    title: 'Case Study: AI Safety in a Rural K-8 District | Windrose & Company',
    description:
      'A full AI safety program — policy, staff PD, student assembly, and incident playbook — delivered in one semester.',
    type: 'article',
    url: 'https://www.windroseandco.com/case-study',
    images: [{ url: '/assets/img/windroselogo.png', width: 1200, height: 630, alt: 'Windrose & Company' }],
  },
};

const delivered = [
  'A custom, K-8-appropriate AI Acceptable Use Policy',
  'On-site professional development for all staff',
  'An age-appropriate student assembly for grades 3-8',
  'An AI Incident Response Playbook',
  'Parent & community resources and communications',
];

export default function CaseStudyPage() {
  return (
    <>
      <PageHero
        eyebrow="Case study"
        title="A full AI safety program, delivered in one semester"
        lead="Windrose & Company partnered with a small, rural Missouri K-8 district as the inaugural implementation of our AI Safety & Integration Program — pro bono, and built to become a model other districts can follow."
      />

      <section className="bg-cream text-ink py-20 lg:py-28">
        <div className="container-content max-w-4xl space-y-14">
          <Reveal>
            <span className="eyebrow text-myrtle-green">The challenge</span>
            <h2 className="text-3xl md:text-4xl text-gunmetal mt-3">
              The AI wave met a district with a binder, not a plan
            </h2>
            <p className="font-body text-lg text-ink/75 mt-4">
              Like most districts, our partner school faced AI with only a basic,
              compliance-first policy draft — a list of rules focused on punishment,
              with no staff training, no student education, and no plan for when
              something went wrong. Small, rural, and budget-constrained, they needed
              high impact at low cost.
            </p>
          </Reveal>

          <Reveal>
            <span className="eyebrow text-myrtle-green">Our approach</span>
            <h2 className="text-3xl md:text-4xl text-gunmetal mt-3">
              From compliance to culture
            </h2>
            <p className="font-body text-lg text-ink/75 mt-4">
              Rather than replace what they had, we elevated it — adding an educational
              philosophy to the policy, a lightweight AI-literacy curriculum, practical
              training that empowered teachers as facilitators, and a non-punitive
              &ldquo;Safety Huddle&rdquo; so students surface problems instead of hiding
              them.
            </p>
          </Reveal>

          <Reveal>
            <span className="eyebrow text-myrtle-green">What we delivered</span>
            <ul className="mt-5 space-y-3">
              {delivered.map((item) => (
                <li key={item} className="flex gap-3 font-body text-lg text-ink/80">
                  <Check className="w-6 h-6 flex-shrink-0 text-myrtle-green" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Gated full writeup */}
          <Reveal className="rounded-xl2 border border-ink/10 bg-white shadow-soft p-8 md:p-10">
            <div className="flex items-center gap-3 text-myrtle-green">
              <Lock className="w-5 h-5" aria-hidden="true" />
              <span className="eyebrow text-myrtle-green">Full case study</span>
            </div>
            <h3 className="font-display text-2xl text-gunmetal mt-3">
              The detailed writeup is available on request
            </h3>
            <p className="font-body text-ink/70 mt-3">
              Out of respect for our partner district, the complete case study —
              including outcomes and sample artifacts — is shared directly with school
              leaders evaluating a program, once post-program review is complete. The
              policy, playbook, and Readiness Matrix themselves remain proprietary to
              Windrose &amp; Company.
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-6"
            >
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Request the full case study
            </a>
          </Reveal>
        </div>
      </section>

      <FinalCta
        heading="Bring this to your district"
        body="What we built for one school, we can build for yours. Book a free discovery call to see what a program would look like for your district."
      />
    </>
  );
}
