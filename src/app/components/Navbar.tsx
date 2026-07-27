'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar } from 'lucide-react';
import { NavbarItem, navbarCta } from '../navbarItems';

interface NavbarProps {
  items?: NavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gunmetal-deep/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Windrose & Company home">
            <Image
              src="/assets/img/windroselogo.png"
              width={48}
              height={48}
              className="h-11 w-auto"
              alt="Windrose & Company"
              priority
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <span className="text-cream font-display font-semibold text-lg lg:text-xl tracking-tight">
              <span className="sm:hidden">Windrose</span>
              <span className="hidden sm:inline">Windrose &amp; Company</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 rounded-full text-[15px] font-medium font-body transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-myrtle-green text-cream'
                    : 'text-cream/85 hover:text-cream hover:bg-cream/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href={navbarCta.href} className="btn-cta ml-3 text-[15px] px-5 py-2.5">
              <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
              {navbarCta.label}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-cream hover:bg-cream/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cream"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-5 space-y-1 bg-gunmetal-deep/98 backdrop-blur-md">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium font-body transition-colors duration-200 ${
                isActive(item.href)
                  ? 'bg-myrtle-green text-cream'
                  : 'text-cream/85 hover:bg-cream/10 hover:text-cream'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={navbarCta.href}
            onClick={() => setIsOpen(false)}
            className="btn-cta w-full mt-3"
          >
            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
            {navbarCta.label}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
