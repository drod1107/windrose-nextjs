import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

/**
 * Founder credibility band — the human, "people-first" trust signal.
 * Reuses the existing founders photo.
 */
const FounderBand: React.FC = () => (
  <section className="bg-cream text-ink py-20 lg:py-28">
    <div className="container-content">
      <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
        <Reveal className="lg:col-span-2">
          <Image
            src="/assets/img/barbe_and_david.png"
            width={520}
            height={520}
            alt="David and Barbe, founders of Windrose & Company"
            className="rounded-xl2 shadow-lift w-full h-auto object-cover"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Reveal>

        <Reveal className="lg:col-span-3" delay={100}>
          <span className="eyebrow text-myrtle-green">Why Windrose</span>
          <h2 className="text-3xl md:text-4xl text-gunmetal mt-3">
            People-first technology, built by people who&rsquo;ve done the work
          </h2>
          <div className="font-body text-lg text-ink/75 mt-5 space-y-4">
            <p>
              We&rsquo;re a team that has learned from decades of work with Fortune 500
              companies, nonprofits, and startups alike — always asking what makes a
              culture succeed.
            </p>
            <p>
              We harness experience, technology, and AI to build people-first systems,
              because we believe computers are best used for empowering people to
              &ldquo;human&rdquo; better. For schools, that means AI students can use
              wisely and staff can manage with confidence.
            </p>
            <p className="text-ink/90 font-medium">
              Our founder is even stepping into district board service — because we
              don&rsquo;t just advise on AI safety in schools, we show up for it.
            </p>
          </div>
          <Link href="/who-we-are" className="inline-flex items-center font-body font-semibold text-myrtle-green hover:text-teal-deep mt-6">
            Meet the team
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FounderBand;
