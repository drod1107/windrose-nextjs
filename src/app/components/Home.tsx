import React from 'react';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import CompassRose from './CompassRose';
import UrgencyBand from './UrgencyBand';
import Pillars from './Pillars';
import ReadinessMatrix from './ReadinessMatrix';
import CaseStudyTeaser from './CaseStudyTeaser';
import FounderBand from './FounderBand';
import FinalCta from './FinalCta';
import Link from 'next/link';

const Home: React.FC = () => (
  <>
    {/* ---------- Hero ---------- */}
    <section className="relative overflow-hidden bg-gunmetal-deep text-cream">
      {/* layered gradient + motif */}
      <div className="absolute inset-0 bg-gradient-to-br from-gunmetal-deep via-gunmetal to-teal-deep/70" />
      <CompassRose className="pointer-events-none absolute right-[-6rem] top-24 w-[34rem] h-[34rem] text-myrtle-green/25 animate-float-slow" />

      <div className="container-content relative pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 border border-cream/15 px-4 py-1.5 text-sm font-body font-medium text-cream/90">
            <ShieldCheck className="w-4 h-4 text-gold" aria-hidden="true" />
            AI safety &amp; policy for K-12 schools
          </span>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-6 text-cream">
            Your district needs an AI policy.
            <span className="block text-myrtle-green-light mt-2">
              We&rsquo;ll get you from compliance to culture.
            </span>
          </h1>

          <p className="font-body text-lg md:text-xl text-cream/80 mt-7 max-w-2xl">
            Windrose &amp; Company helps U.S. K-12 districts create board-ready AI
            policies, train staff, and run student AI-safety programs — safely,
            affordably, and fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-base"
            >
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Book a discovery call
            </a>
            <Link href="/for-schools" className="btn-ghost text-base">
              See how it works
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </div>

          <p className="font-body text-sm text-cream/55 mt-6">
            Built on a real K-8 pilot · No student data collected · {siteConfig.location}
          </p>
        </div>
      </div>
    </section>

    <UrgencyBand />
    <Pillars />
    <ReadinessMatrix />
    <CaseStudyTeaser />
    <FounderBand />
    <FinalCta />
  </>
);

export default Home;
