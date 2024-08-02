// File: src/app/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavbarItem } from '../navbarItems';

interface NavbarProps {
  items?: NavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gunmetal bg-opacity-50 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/img/windroselogo.png"
                width={40}
                height={40}
                className="h-8 w-auto"
                alt="Windrose & Company Logo"
              />
            </Link>
          </div>
          <div className="flex-grow text-center">
            <span className="text-papaya-whip font-bold text-xl md:text-2xl">
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
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
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
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
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