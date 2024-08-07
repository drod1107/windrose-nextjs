'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NavbarItem } from '../navbarItems';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gunmetal shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Image
                src="/assets/img/windroselogo.png"
                width={50}
                height={50}
                className="h-12 w-auto"
                alt="Windrose & Company Logo"
                priority
              />
            </Link>
          </div>
          <div className="flex-grow text-start px-5">
            <span className="text-papaya-whip font-bold text-xl md:text-2xl lg:text-3xl font-saira text-shadow">
              <span className="md:hidden">Windrose & Co</span>
              <span className="hidden md:inline">Windrose & Company</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 font-hind ${
                    pathname === item.href
                      ? 'bg-myrtle-green text-papaya-whip'
                      : 'text-papaya-whip hover:bg-myrtle-green-light hover:text-papaya-whip'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-papaya-whip hover:text-papaya-whip hover:bg-myrtle-green-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-papaya-whip"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gunmetal">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 font-hind ${
                pathname === item.href
                  ? 'bg-myrtle-green text-papaya-whip'
                  : 'text-papaya-whip hover:bg-myrtle-green-light hover:text-papaya-whip'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;