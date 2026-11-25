import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '../siteConfig';

const exploreLinks = [
  { href: '/for-schools', label: 'For Schools' },
  { href: '/case-study', label: 'Education case study' },
  { href: '/case-study/wintergarten', label: 'Business case study' },
  { href: '/insights', label: 'Insights' },
  { href: '/resources', label: 'Resources' },
  { href: '/who-we-are', label: 'About' },
  { href: '/what-we-do', label: 'Consulting' },
];

const Footer: React.FC = () => (
  <footer className="bg-gunmetal-deep text-cream/80 pt-16 pb-8">
    <div className="container-content">
      <div className="grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/img/windroselogo.png"
              width={40}
              height={40}
              className="h-10 w-auto"
              alt="Windrose & Company"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <span className="font-display font-semibold text-lg text-cream">
              Windrose &amp; Company
            </span>
          </div>
          <p className="font-body text-sm text-cream/60 mt-4 max-w-xs">
            People-first technology consulting, AI automation and AI governance. {siteConfig.location}.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h2 className="font-body font-semibold uppercase tracking-[0.16em] text-xs text-cream/50">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-cream/75 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get started */}
        <div>
          <h2 className="font-body font-semibold uppercase tracking-[0.16em] text-xs text-cream/50">
            Get started
          </h2>
          <p className="font-body text-sm text-cream/60 mt-4">
            Book a free discovery call and we&rsquo;ll explore practical ways to help your organization.
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta mt-5 text-sm"
          >
            Book a Consult
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-body text-sm text-cream/55">
          &copy; {new Date().getFullYear()} Windrose &amp; Company. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          <Link href="/privacy-policy" className="font-body text-sm text-cream/60 hover:text-cream">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="font-body text-sm text-cream/60 hover:text-cream">
            Terms of Service
          </Link>
          <Link href="/contact" className="font-body text-sm text-cream/60 hover:text-cream">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
