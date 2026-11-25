'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NavbarItem, navbarCta } from '../navbarItems';

interface NavbarProps { items?: NavbarItem[] }

export default function Navbar({ items = [] }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <nav aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-50 border-b border-cream/15 bg-gunmetal-deep/95 text-cream shadow-[0_10px_35px_-25px_rgba(0,0,0,0.6)] backdrop-blur-lg">
      <div className="container-content flex h-20 items-center justify-between gap-4">
        <Link href="/" className="inline-flex min-w-0 items-center gap-3" aria-label="Windrose & Company home">
          <Image src="/assets/img/windroselogo.png" width={48} height={48} alt="" priority className="h-11 w-auto shrink-0" />
          <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            <span className="sm:hidden">Windrose</span><span className="hidden sm:inline">Windrose &amp; Company</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 xl:flex">
          {items.map(({href, label}) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}
              className={pathname === href ? 'rounded-full bg-cream/15 px-3.5 py-2 font-body text-sm font-semibold text-cream' : 'rounded-full px-3.5 py-2 font-body text-sm font-medium text-cream/85 hover:bg-cream/10 hover:text-cream'}>
              {label}
            </Link>
          ))}
          <Link href={navbarCta.href} className="btn-cta ml-3 px-5 py-2.5 text-sm">
            {navbarCta.label} <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <button type="button" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 text-cream hover:bg-cream/10 xl:hidden"
          aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-navigation" hidden={!isOpen} className="border-t border-cream/10 bg-gunmetal-deep px-5 pb-7 pt-4 xl:hidden">
        <div className="container-content flex flex-col gap-1 px-0">
          {items.map(({href, label}) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)} aria-current={pathname === href ? 'page' : undefined}
              className={pathname === href ? 'rounded-lg bg-cream/15 px-5 py-3 font-body font-semibold text-cream' : 'rounded-lg px-5 py-3 font-body font-medium text-cream/85 hover:bg-cream/10'}>
              {label}
            </Link>
          ))}
          <Link href={navbarCta.href} onClick={() => setIsOpen(false)} className="btn-cta mt-3 self-start">{navbarCta.label} <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </nav>
  );
}
