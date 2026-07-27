import React from 'react';
import { ArrowRight } from 'lucide-react';
import { matrixStages } from '../schoolsData';
import Reveal from './Reveal';

/**
 * Public teaser of the AI Safety Readiness Matrix. Shows only the three stage
 * names + one-line summaries (the "pitch"). The full populated rubric is a
 * gated asset and is never rendered as text here (see redesign plan §6).
 */
const ReadinessMatrix: React.FC = () => (
  <section className="bg-gunmetal-deep text-cream py-20 lg:py-28">
    <div className="container-content">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Our framework</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-cream mt-3">
          The AI Safety Readiness Matrix
        </h2>
        <p className="font-body text-lg text-cream/70 mt-4">
          Most districts are stuck at &ldquo;rules on paper.&rdquo; We move you up the
          matrix — from awareness to a genuine culture of safe, effective AI use.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {matrixStages.map((stage, i) => (
          <Reveal
            key={stage.level}
            delay={i * 110}
            className="relative rounded-xl2 border border-cream/10 bg-cream/[0.04] p-7"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-4xl text-myrtle-green-light/80">
                {stage.level}
              </span>
              {i < matrixStages.length - 1 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-cream/30" aria-hidden="true" />
              )}
            </div>
            <h3 className="text-2xl text-cream mt-3">{stage.title}</h3>
            <p className="font-body text-cream/65 mt-3">{stage.summary}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8" delay={120}>
        <p className="font-body text-sm text-cream/50">
          The full self-assessment rubric is available to partner districts.{' '}
          <span className="text-cream/75">Compliance &rarr; Culture.</span>
        </p>
      </Reveal>
    </div>
  </section>
);

export default ReadinessMatrix;
