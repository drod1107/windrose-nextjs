import React from 'react';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import CompassRose from './CompassRose';

interface FinalCtaProps {
  heading?: string;
  body?: string;
}

const FinalCta: React.FC<FinalCtaProps> = ({
  heading = 'Could your organization use a little more room?',
  body = 'Tell us what is getting in the way. We can start with a conversation, then find the next useful step together.',
}) => (
  <section className="relative isolate overflow-hidden bg-teal-deep py-20 text-cream sm:py-24 lg:py-32">
    <CompassRose className="pointer-events-none absolute -right-20 -bottom-32 h-[30rem] w-[30rem] text-cream/[0.09] lg:h-[40rem] lg:w-[40rem]" aria-hidden="true" />
    <div className="container-content relative grid gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <span className="eyebrow text-gold">Chart a better course</span>
        <h2 className="mt-5 max-w-[760px] font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.08]">{heading}</h2>
        <p className="mt-6 max-w-[650px] font-body text-lg leading-relaxed text-cream/85">{body}</p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row lg:col-span-4 lg:flex-col lg:items-start">
        <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-cta">
          Book a conversation <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </a>
        <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 px-2 font-body font-semibold text-cream underline decoration-cream/40 underline-offset-8 hover:decoration-cream">
          <Linkedin className="h-5 w-5" aria-hidden="true" /> Connect on LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
