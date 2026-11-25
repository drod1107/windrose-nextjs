import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const links = [
  { href: '/what-we-do', label: 'Services' },
  { href: '/for-schools', label: 'For schools' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/resources', label: 'Resources' },
  { href: '/who-we-are', label: 'Our story' },
];

export default function Footer() {
  return (
    <footer className="bg-signal-black py-16 text-white sm:py-20">
      <div className="container-content">
        <div className="grid gap-12 border-b border-white/25 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Windrose & Company home">
              <span className="grid h-12 w-12 place-items-center bg-signal-lime">
                <Image src="/assets/img/windroselogo.png" width={42} height={42} alt="" className="h-10 w-auto saturate-0 mix-blend-multiply" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">WINDROSE &amp; COMPANY</span>
            </Link>
            <p className="mt-7 max-w-sm font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">Better systems.<br /><span className="text-signal-lime">More human work.</span></p>
            <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-white/70">{siteConfig.location} · Working with organizations everywhere.</p>
          </div>
          <div className="lg:col-span-3">
            <h2 className="signal-overline text-signal-lime">Find your way</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 font-body text-sm lg:grid-cols-1">
              {links.map(({href,label}) => <li key={href}><Link href={href} className="text-white/85 hover:text-signal-lime">{label}</Link></li>)}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className="signal-overline text-signal-lime">Start a conversation</h2>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-white/80">No complicated pitch. Just a conversation about what you are trying to make better.</p>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-2 border-b-2 border-signal-lime font-body font-semibold text-white hover:text-signal-lime">
              Book a consult <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 font-body text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Windrose &amp; Company. Built around people.</p>
          <nav aria-label="Legal and contact" className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/privacy-policy" className="hover:text-signal-lime">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-signal-lime">Terms</Link>
            <Link href="/contact" className="hover:text-signal-lime">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
