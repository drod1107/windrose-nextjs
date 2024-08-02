
// File: src/app/navbarItems.ts
export interface NavbarItem {
    href: string;
    label: string;
  }
  
  export const navbarItems: NavbarItem[] = [
    { href: '/what-we-do', label: 'What we do' },
    { href: '/who-we-are', label: 'Who we are' },
    { href: '/contact', label: 'Get in touch' },
  ];