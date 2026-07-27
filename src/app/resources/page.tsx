import { Metadata } from 'next';
import { Lock, FileText, ClipboardCheck, ShieldAlert } from 'lucide-react';
import PageHero from '../components/PageHero';
import FinalCta from '../components/FinalCta';
import Reveal from '../components/Reveal';
import LeadForm from '../components/LeadForm';

export const metadata: Metadata = {
  title: 'Resources for K-12 AI Safety',
  description:
    'Toolkits and guides to help K-12 districts navigate AI safely — including a parent AI safety toolkit, a sample acceptable use policy, and the AI Safety Readiness self-assessment.',
  openGraph: {
    title: 'Resources for K-12 AI Safety | Windrose & Company',
    description: 'Toolkits and guides to help K-12 districts navigate AI safely.',
    type: 'website',
    url: 'https://www.windroseandco.com/resources',
    images: [{ url: '/assets/img/windroselogo.png', width: 1200, height: 630, alt: 'Windrose & Company' }],
  },
};

const resources = [
  {
    icon: <FileText className="w-7 h-7" aria-hidden="true" />,
    title: 'Parent & Guardian AI Safety Toolkit',
    desc: 'A plain-language guide for families on keeping kids safe with AI at home.',
  },
  {
    icon: <ClipboardCheck className="w-7 h-7" aria-hidden="true" />,
    title: 'AI Safety Readiness Self-Assessment',
    desc: 'A quick way to see where your district sits on the Readiness Matrix.',
  },
  {
    icon: <ShieldAlert className="w-7 h-7" aria-hidden="true" />,
    title: 'AI Incident Response One-Pager',
    desc: 'The first steps when AI shows up in a deepfake or academic-integrity incident.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical tools for AI-safe schools"
        lead="Windrose & Company publishes plain-language toolkits and guides to help K-12 leaders and families navigate AI safely. Request early access to any resource below — we'll send it your way."
      />

      <section className="bg-cream text-ink py-20 lg:py-28">
        <div className="container-content">
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 90}
                className="rounded-xl2 bg-white border border-ink/5 shadow-soft p-8 flex flex-col"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-myrtle-green/10 text-myrtle-green">
                  {r.icon}
                </span>
                <h3 className="font-display text-xl text-gunmetal mt-5">{r.title}</h3>
                <p className="font-body text-ink/70 mt-3 flex-grow">{r.desc}</p>
                <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-myrtle-green mt-6">
                  <Lock className="w-4 h-4" aria-hidden="true" />
                  Available on request
                </span>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl text-gunmetal">
                Want one of these for your district?
              </h2>
              <p className="font-body text-lg text-ink/70 mt-4">
                We&rsquo;re finalizing public versions of these toolkits. Tell us which one
                you need and a bit about your district — we&rsquo;ll send it your way and
                point you to the right next step.
              </p>
            </Reveal>
            <Reveal delay={120} className="rounded-xl2 bg-white border border-ink/5 shadow-soft p-8">
              <LeadForm
                source="resources-request"
                successMessage="Thank you — we’ll send the resource you need and follow up shortly."
                compact
              />
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
