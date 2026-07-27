import React from 'react';
import { ScrollText, Users, GraduationCap, ShieldCheck } from 'lucide-react';
import { pillars } from '../schoolsData';
import Reveal from './Reveal';

const icons: Record<string, React.ReactNode> = {
  policy: <ScrollText className="w-7 h-7" aria-hidden="true" />,
  people: <Users className="w-7 h-7" aria-hidden="true" />,
  students: <GraduationCap className="w-7 h-7" aria-hidden="true" />,
  preparedness: <ShieldCheck className="w-7 h-7" aria-hidden="true" />,
};

interface PillarsProps {
  /** Show the full bullet detail (used on the For Schools page). */
  detailed?: boolean;
}

const Pillars: React.FC<PillarsProps> = ({ detailed = false }) => (
  <section className="bg-cream text-ink py-20 lg:py-28">
    <div className="container-content">
      <Reveal className="max-w-2xl">
        <span className="eyebrow text-myrtle-green">The engagement</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gunmetal mt-3">
          Four pillars, one safe AI program
        </h2>
        <p className="font-body text-lg text-ink/70 mt-4">
          Every district engagement is built on the same proven structure — from a
          policy your board can sign to students who can spot a deepfake.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 mt-12">
        {pillars.map((pillar, i) => (
          <Reveal
            key={pillar.id}
            delay={i * 90}
            className="group rounded-xl2 bg-white border border-ink/5 shadow-soft p-8 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-myrtle-green/10 text-myrtle-green">
                {icons[pillar.id]}
              </span>
              <div>
                <h3 className="text-2xl text-gunmetal">{pillar.title}</h3>
                <p className="font-body text-sm font-semibold text-myrtle-green">
                  {pillar.tagline}
                </p>
              </div>
            </div>
            <p className="font-body text-ink/80 mt-5 text-lg">{pillar.outcome}</p>
            {detailed && (
              <ul className="mt-5 space-y-2.5">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-3 font-body text-ink/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Pillars;
