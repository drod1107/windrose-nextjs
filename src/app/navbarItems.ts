
// File: src/app/navbarItems.ts
export interface NavbarItem {
    href: string;
    label: string;
  }

  // Audience-first IA for the AI-safety-for-schools relaunch.
  // Existing routes are reused: /who-we-are = About, /what-we-do = Consulting.
  export const navbarItems: NavbarItem[] = [
    { href: '/for-schools', label: 'For Schools' },
    { href: '/case-study', label: 'Case Study' },
    { href: '/resources', label: 'Resources' },
    { href: '/who-we-are', label: 'About' },
    { href: '/what-we-do', label: 'Consulting' },
  ];

  // Persistent primary conversion action.
  export const navbarCta = { href: '/contact', label: 'Book a Consult' };
