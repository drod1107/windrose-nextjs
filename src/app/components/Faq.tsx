import React from 'react';
import { schoolFaqs } from '../schoolsData';
import Reveal from './Reveal';

/**
 * FAQ section + FAQPage JSON-LD. The structured data strengthens GEO/AI
 * extraction (Layer A) — these are pitch answers, no proprietary substance.
 */
const Faq: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: schoolFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="bg-mist text-ink py-20 lg:py-28">
      <div className="container-content max-w-4xl">
        <Reveal>
          <span className="eyebrow text-myrtle-green">Questions, answered</span>
          <h2 className="text-3xl md:text-4xl text-gunmetal mt-3">
            What district leaders ask us first
          </h2>
        </Reveal>

        <dl className="mt-10 space-y-4">
          {schoolFaqs.map((faq, i) => (
            <Reveal
              key={faq.q}
              delay={i * 70}
              className="rounded-xl2 bg-white border border-ink/5 shadow-soft p-7"
            >
              <dt className="font-display text-xl text-gunmetal">{faq.q}</dt>
              <dd className="font-body text-ink/70 mt-3 leading-relaxed">{faq.a}</dd>
            </Reveal>
          ))}
        </dl>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default Faq;
