import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-gunmetal py-8 px-4 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <p className="text-center md:text-left mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Windrose & Company. All rights reserved.
      </p>
      <nav className="flex flex-wrap justify-center md:justify-end">
        <Link href="/privacy-policy" className="text-papaya-whip hover:text-myrtle-green-light mx-2 my-1">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="text-papaya-whip hover:text-myrtle-green-light mx-2 my-1">
          Terms of Service
        </Link>
        <Link href="/contact" className="text-papaya-whip hover:text-myrtle-green-light mx-2 my-1">
          Contact Us
        </Link>
      </nav>
    </div>
  </footer>
);

export default Footer;