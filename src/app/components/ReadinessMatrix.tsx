import React from 'react';
import { ArrowRight } from 'lucide-react';
import { matrixStages } from '../schoolsData';
import Reveal from './Reveal';

const ReadinessMatrix: React.FC = () => (
  <section className="border-y border-[#D9DDD3] bg-[#EFF1EC] py-20 text-ink lg:py-28">
    <div className="container-content">
      <Reveal className="max-w-2xl">
        <span className="eyebrow text-teal-deep">Our framework</span>
        <h2 className="mt-3 text-3xl text-gunmetal-deep md:text-4xl lg:text-5xl">
          The AI Safety Readiness Matrix
        </h2>
        <p className="mt-4 font-body text-lg text-ink/75">
          Most districts are stuck at &ldquo;rules on paper.&rdquo; We move you up the
          matrix, from awareness to a genuine culture of safe, effective AI use.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {matrixStages.map((stage, i) => (
          <Reveal key={stage.level} delay={i * 110}
            className="relative rounded-xl2 border border-[#D9DDD3] bg-white p-7 shadow-sm">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-4xl font-semibold text-myrtle-green">{stage.level}</span>
              {i < matrixStages.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 text-ink/35 md:block" aria-hidden="true" />
              )}
            </div>
            <h3 className="mt-3 text-2xl text-gunmetal-deep">{stage.title}</h3>
            <p className="mt-3 font-body text-ink/75">{stage.summary}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8" delay={120}>
        <p className="font-body text-sm text-ink/70">
          The full self-assessment rubric is available to partner districts.{' '}
          <span className="font-semibold text-teal-deep">Compliance &rarr; Culture.</span>
        </p>
      </Reveal>
    </div>
  </section>
);

export default ReadinessMatrix;
