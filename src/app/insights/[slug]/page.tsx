import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import PageHero from '../../components/PageHero';
import InsightBody from '../../components/InsightBody';
import FinalCta from '../../components/FinalCta';
import { insights, getInsight } from '../../insightsData';
import { siteConfig } from '../../siteConfig';

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  const url = `https://www.windroseandco.com/insights/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Windrose & Company`,
      description: post.description,
      type: 'article',
      url,
      publishedTime: post.date,
      images: [{ url: '/assets/img/windroselogo.png', width: 1200, height: 630, alt: 'Windrose & Company' }],
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const url = `https://www.windroseandco.com/insights/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <PageHero eyebrow="Insights" title={post.title}>
        <div className="flex items-center gap-4 font-body text-cream/70">
          <span>{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {post.readMins} min read
          </span>
        </div>
      </PageHero>

      <article className="bg-cream text-ink py-20 lg:py-28">
        <div className="container-content max-w-3xl">
          {/* Front-loaded answer (GEO: direct answer first) */}
          <p className="font-body text-xl text-gunmetal font-medium leading-relaxed border-l-4 border-gold pl-5">
            {post.answer}
          </p>

          <div className="mt-10">
            <InsightBody blocks={post.blocks} />
          </div>

          {/* Inline conversion */}
          <div className="mt-12 rounded-xl2 bg-white border border-ink/5 shadow-soft p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h2 className="font-display text-xl text-gunmetal">Ready to move forward?</h2>
              <p className="font-body text-ink/65 mt-1">
                Book a free discovery call for your district.
              </p>
            </div>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta flex-shrink-0"
            >
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Book a call
            </a>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center font-body font-semibold text-myrtle-green hover:text-teal-deep mt-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            All insights
          </Link>
        </div>
      </article>

      <FinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
