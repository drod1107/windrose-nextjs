import React from 'react';
import { TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

const stats = [
  { figure: '100+', label: 'state K-12 AI bills introduced in 2026' },
  { figure: 'Half', label: 'of U.S. states now guide or mandate district AI policy' },
  { figure: '1 in 4', label: 'students already use AI for schoolwork' },
];

const UrgencyBand: React.FC = () => (
  <section className="border-y border-[#D8E8F2] bg-[#EAF4FA] py-14 text-gunmetal-deep">
    <div className="container-content">
      <Reveal className="flex items-center gap-3 text-teal-deep">
        <TrendingUp className="h-5 w-5" aria-hidden="true" />
        <span className="eyebrow text-teal-deep">The 2026 policy wave</span>
      </Reveal>
      <Reveal className="mt-6 grid gap-8 sm:grid-cols-3" delay={80}>
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-4xl font-semibold text-myrtle-green md:text-5xl">{s.figure}</div>
            <p className="mt-2 font-body text-ink/80">{s.label}</p>
          </div>
        ))}
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-8 max-w-3xl font-body text-lg text-ink/90">
          The question is no longer <em>whether</em>{' '}your district needs an AI policy,
          it&rsquo;s whether yours will protect students or just sit in a binder.
        </p>
      </Reveal>
    </div>
  </section>
);

export default UrgencyBand;
