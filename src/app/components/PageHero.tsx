import React from 'react';
import CompassRose from './CompassRose';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, lead, children }) => (
  <section className="relative isolate overflow-hidden border-b border-[#E0EBF3] bg-[#F7FBFE] text-ink">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#F9FCFF] to-[#EAF4FA]" aria-hidden="true" />
    <CompassRose className="pointer-events-none absolute -right-28 -top-20 h-[30rem] w-[30rem] text-myrtle-green/[0.075] lg:h-[42rem] lg:w-[42rem]" aria-hidden="true" />
    <div className="container-content relative pb-16 pt-40 sm:pt-44 lg:pb-24 lg:pt-48">
      <div className="max-w-[890px]">
        {eyebrow && <div className="flex items-center gap-3"><span className="h-[2px] w-8 bg-[#DE9B75]" /><span className="eyebrow text-teal-deep">{eyebrow}</span></div>}
        <h1 className="mt-6 font-display text-[clamp(2.6rem,5.5vw,5.35rem)] font-semibold leading-[1.07] tracking-[-0.055em] text-gunmetal-deep">{title}</h1>
        {lead && <p className="mt-7 max-w-[740px] font-body text-lg leading-relaxed text-ink/80 sm:text-xl">{lead}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </div>
  </section>
);

export default PageHero;
