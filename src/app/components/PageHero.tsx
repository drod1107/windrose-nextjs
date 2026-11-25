import React from 'react';
import CompassRose from './CompassRose';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, lead, children }) => (
  <section className="relative isolate overflow-hidden bg-gunmetal-deep text-cream">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gunmetal-deep via-gunmetal to-teal-deep/65" aria-hidden="true" />
    <CompassRose className="pointer-events-none absolute -right-28 -top-20 h-[30rem] w-[30rem] text-cream/[0.075] lg:h-[42rem] lg:w-[42rem]" aria-hidden="true" />
    <div className="container-content relative pb-20 pt-40 sm:pt-44 lg:pb-28 lg:pt-48">
      <div className="max-w-[880px]">
        {eyebrow && <div className="flex items-center gap-3"><span className="h-px w-8 bg-gold" /><span className="eyebrow text-gold">{eyebrow}</span></div>}
        <h1 className="mt-6 font-display text-[clamp(2.8rem,6vw,5.8rem)] leading-[1.04] tracking-[-0.04em] text-cream">{title}</h1>
        {lead && <p className="mt-8 max-w-[720px] font-body text-lg leading-relaxed text-cream/80 sm:text-xl">{lead}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </div>
  </section>
);

export default PageHero;
