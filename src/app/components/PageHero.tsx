import React from 'react';
import CompassRose from './CompassRose';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}

/**
 * Dark header band for inner pages. Sits under the fixed (transparent) navbar
 * and gives every page a consistent, cohesive entry point.
 */
const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, lead, children }) => (
  <section className="relative overflow-hidden bg-gunmetal-deep text-cream">
    <div className="absolute inset-0 bg-gradient-to-br from-gunmetal-deep via-gunmetal to-teal-deep/60" />
    <CompassRose className="pointer-events-none absolute right-[-5rem] top-10 w-[26rem] h-[26rem] text-myrtle-green/20" />
    <div className="container-content relative pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="max-w-3xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mt-4 text-cream">
          {title}
        </h1>
        {lead && <p className="font-body text-lg md:text-xl text-cream/80 mt-6">{lead}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </div>
  </section>
);

export default PageHero;
