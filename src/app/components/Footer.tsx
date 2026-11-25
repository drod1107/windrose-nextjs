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
    <footer className="border-t border-[#E0EAF1] bg-white py-16 text-ink sm:py-20">
      <div className="container-content">
        <div className="grid gap-12 border-b border-[#E0EAF1] pb-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Windrose & Company home">
              <Image src="/assets/img/windroselogo.png" width={52} height={52} alt="" className="h-12 w-auto" />
              <span className="font-display text-xl font-semibold text-gunmetal-deep sm:text-2xl">Windrose &amp; Company</span>
            </Link>
            <p className="mt-6 max-w-sm font-display text-xl font-semibold leading-snug text-gunmetal-deep sm:text-2xl">Better systems. More human work.</p>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink/70">{siteConfig.location} · Working with organizations everywhere.</p>
          </div>
          <div className="lg:col-span-3">
            <h2 className="eyebrow text-teal-deep">Find your way</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 font-body text-sm lg:grid-cols-1">
              {links.map(({href,label}) => <li key={href}><Link href={href} className="text-ink/80 hover:text-teal-deep">{label}</Link></li>)}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className="eyebrow text-teal-deep">Start a conversation</h2>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-ink/75">No complicated pitch. Just a conversation about what you are trying to make better.</p>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-2 border-b border-teal-deep/60 font-body font-semibold text-teal-deep hover:border-teal-deep">
              Book a consult <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 font-body text-sm text-ink/65 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Windrose &amp; Company. Built around people.</p>
          <nav aria-label="Legal and contact" className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/privacy-policy" className="hover:text-teal-deep">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-teal-deep">Terms</Link>
            <Link href="/contact" className="hover:text-teal-deep">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
