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
    <nav aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-50 border-b border-signal-black bg-white/95 text-signal-black backdrop-blur-lg">
      <div className="container-content flex h-20 items-center justify-between gap-4">
        <Link href="/" className="inline-flex min-w-0 items-center gap-3" aria-label="Windrose & Company home">
          <span className="grid h-11 w-11 shrink-0 place-items-center border border-signal-black bg-signal-lime">
            <Image src="/assets/img/windroselogo.png" width={38} height={38} alt="" priority className="h-9 w-auto saturate-0 mix-blend-multiply" />
          </span>
          <span className="font-display text-base font-extrabold tracking-[-0.04em] sm:text-lg">
            <span className="sm:hidden">WINDROSE</span><span className="hidden sm:inline">WINDROSE &amp; COMPANY</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 xl:flex">
          {items.map(({href, label}) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}
              className={pathname === href ? 'bg-signal-lime px-3.5 py-2 font-body text-sm font-bold text-signal-black' : 'px-3.5 py-2 font-body text-sm font-semibold text-signal-black hover:bg-signal-fog'}>
              {label}
            </Link>
          ))}
          <Link href={navbarCta.href} className="btn-cta ml-3 px-5 py-2.5 text-sm">
            {navbarCta.label} <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <button type="button" className="inline-flex h-12 w-12 items-center justify-center border border-signal-black text-signal-black hover:bg-signal-lime xl:hidden"
          aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-navigation" hidden={!isOpen} className="border-t border-signal-black/20 bg-white px-5 pb-7 pt-4 xl:hidden">
        <div className="container-content flex flex-col gap-1 px-0">
          {items.map(({href, label}) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)} aria-current={pathname === href ? 'page' : undefined}
              className={pathname === href ? 'bg-signal-lime px-5 py-3 font-body font-bold text-signal-black' : 'px-5 py-3 font-body font-semibold text-signal-black hover:bg-signal-fog'}>
              {label}
            </Link>
          ))}
          <Link href={navbarCta.href} onClick={() => setIsOpen(false)} className="btn-cta mt-3 self-start">{navbarCta.label} <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </nav>
  );
}
