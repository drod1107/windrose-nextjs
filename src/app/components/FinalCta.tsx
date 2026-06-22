import React from 'react';
import { Calendar, Linkedin } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import CompassRose from './CompassRose';
import Reveal from './Reveal';

interface FinalCtaProps {
  heading?: string;
  body?: string;
}

const FinalCta: React.FC<FinalCtaProps> = ({
  heading = 'Is your district ready for AI?',
  body = 'Book a free discovery call. We’ll talk through where your district stands on the Readiness Matrix and what a program could look like — no obligation, no jargon.',
}) => (
  <section className="relative overflow-hidden bg-gunmetal-deep text-cream py-24 lg:py-32">
    {/* Decorative motif */}
    <CompassRose className="pointer-events-none absolute -right-16 -bottom-16 w-80 h-80 text-myrtle-green/30" />

    <div className="container-content relative">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Chart your course</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-cream mt-3">{heading}</h2>
        <p className="font-body text-lg text-cream/75 mt-5">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-9">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
            Book a discovery call
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Linkedin className="w-5 h-5 mr-2" aria-hidden="true" />
            Connect on LinkedIn
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
