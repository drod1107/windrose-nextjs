import React from 'react';
import Link from 'next/link';
import { Quote, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

/**
 * Homepage teaser for the (future) Strain-Japan case study. Deliberately a
 * gated teaser only — no metrics, no proprietary deliverables. The full,
 * anonymized writeup ships once post-program data exists and the school approves
 * (see redesign plan §8).
 */
const CaseStudyTeaser: React.FC = () => (
  <section className="bg-cloud text-ink py-20 lg:py-28">
    <div className="container-content">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="eyebrow text-myrtle-green">Case study</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gunmetal mt-3">
            A real K-8 district. A full program in one semester.
          </h2>
          <p className="font-body text-lg text-ink/70 mt-4">
            Windrose partnered with a small, rural Missouri school district facing the
            AI wave with little more than a basic compliance draft. We delivered a
            custom policy, on-site staff training, a student assembly, and an incident
            response playbook — pro bono, as the inaugural model for our program.
          </p>
          <Link
            href="/case-study"
            className="btn-cta mt-7"
          >
            See the case study
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <figure className="rounded-xl2 bg-white shadow-soft border border-ink/5 p-8">
            <Quote className="w-9 h-9 text-gold" aria-hidden="true" />
            <blockquote className="font-display text-xl md:text-2xl text-gunmetal mt-4 leading-snug">
              &ldquo;We&rsquo;re proud to be a district that leads on this issue — and to
              give our students the skills they need to navigate AI safely.&rdquo;
            </blockquote>
            <figcaption className="font-body text-ink/60 mt-5">
              <span className="text-ink/70 italic">Endorsement pending publication review</span>
              <span className="block text-sm mt-1">
                Partner district principal · pull-quote to be confirmed
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
);

export default CaseStudyTeaser;
