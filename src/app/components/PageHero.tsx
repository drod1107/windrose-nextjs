import React from 'react';
import CompassRose from './CompassRose';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, lead, children }) => (
  <section className="relative isolate overflow-hidden border-b border-signal-black bg-signal-fog text-signal-black">
    <div className="pointer-events-none absolute inset-0 cartographic-paper opacity-45" aria-hidden="true" />
    <CompassRose className="pointer-events-none absolute -right-36 -top-20 h-[30rem] w-[30rem] text-signal-black/[0.06] lg:h-[42rem] lg:w-[42rem]" aria-hidden="true" />
    <div className="container-content relative pb-16 pt-40 sm:pt-44 lg:pb-24 lg:pt-48">
      <div className="max-w-[890px]">
        {eyebrow && <div className="flex flex-wrap items-center gap-3"><span aria-hidden="true" className="h-3 w-3 rotate-45 bg-signal-coral" /><span className="signal-overline">{eyebrow}</span></div>}
        <h1 className="mt-7 font-display text-[clamp(2.7rem,5.6vw,5.6rem)] font-extrabold leading-[1.055] tracking-[-0.065em] text-signal-black">{title}</h1>
        {lead && <p className="mt-7 max-w-[740px] font-body text-lg leading-relaxed text-signal-muted sm:text-xl">{lead}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </div>
    <div className="h-2 w-24 bg-signal-lime sm:w-44" aria-hidden="true" />
  </section>
);

export default PageHero;
