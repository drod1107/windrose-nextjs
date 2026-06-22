import React from 'react';
import { TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

const stats = [
  { figure: '100+', label: 'state K-12 AI bills introduced in 2026' },
  { figure: 'Half', label: 'of U.S. states now guide or mandate district AI policy' },
  { figure: '1 in 4', label: 'students already use AI for schoolwork' },
];

/**
 * Regulatory-urgency strip — the "why now" for district leaders.
 * Figures are publicly reported policy context, not claimed outcomes.
 */
const UrgencyBand: React.FC = () => (
  <section className="bg-myrtle-green text-cream py-14">
    <div className="container-content">
      <Reveal className="flex items-center gap-3 text-cream/90">
        <TrendingUp className="w-5 h-5" aria-hidden="true" />
        <span className="eyebrow text-cream/90">The 2026 policy wave</span>
      </Reveal>
      <Reveal className="mt-6 grid gap-8 sm:grid-cols-3" delay={80}>
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-4xl md:text-5xl text-cream">{s.figure}</div>
            <p className="font-body text-cream/80 mt-2">{s.label}</p>
          </div>
        ))}
      </Reveal>
      <Reveal delay={160}>
        <p className="font-body text-lg text-cream mt-8 max-w-3xl">
          The question is no longer <em>whether</em> your district needs an AI policy —
          it&rsquo;s whether yours will protect students or just sit in a binder.
        </p>
      </Reveal>
    </div>
  </section>
);

export default UrgencyBand;
