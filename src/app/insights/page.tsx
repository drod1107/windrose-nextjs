import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import FinalCta from '../components/FinalCta';
import Reveal from '../components/Reveal';
import { insights } from '../insightsData';

export const metadata: Metadata = {
  title: 'Insights on AI in K-12 Schools',
  description:
    'Practical, plain-language answers for K-12 leaders on AI policy, teacher training, student safety, and the 2026 regulatory wave — from Windrose & Company.',
  openGraph: {
    title: 'Insights on AI in K-12 Schools | Windrose & Company',
    description:
      'Practical answers for K-12 leaders on AI policy, teacher training, and student safety.',
    type: 'website',
    url: 'https://www.windroseandco.com/insights',
    images: [{ url: '/assets/img/windroselogo.png', width: 1200, height: 630, alt: 'Windrose & Company' }],
  },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function InsightsPage() {
  const sorted = [...insights].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Straight answers on AI in schools"
        lead="No hype, no jargon — practical guidance for K-12 leaders navigating AI policy, teacher training, student safety, and the 2026 regulatory wave."
      />

      <section className="bg-cream text-ink py-20 lg:py-28">
        <div className="container-content">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post, i) => (
              <Reveal
                key={post.slug}
                delay={i * 80}
                as="article"
                className="group flex flex-col rounded-xl2 bg-white border border-ink/5 shadow-soft p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 font-body text-xs text-ink/50">
                  <span>{formatDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {post.readMins} min
                  </span>
                </div>
                <h2 className="font-display text-xl text-gunmetal mt-3">
                  <Link href={`/insights/${post.slug}`} className="hover:text-myrtle-green">
                    {post.title}
                  </Link>
                </h2>
                <p className="font-body text-ink/70 mt-3 flex-grow">{post.description}</p>
                <Link
                  href={`/insights/${post.slug}`}
                  className="inline-flex items-center font-body font-semibold text-myrtle-green hover:text-teal-deep mt-5"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
