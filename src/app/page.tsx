// File: src/app/page.tsx
import type { Metadata } from 'next';
import Home from './components/Home';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.windroseandco.com/' },
};

export default function Page() {
  return <Home />;
}