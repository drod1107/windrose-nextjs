import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Code2, GraduationCap, HeartHandshake, Workflow } from 'lucide-react';
import CompassRose from './CompassRose';
import FounderBand from './FounderBand';
import FinalCta from './FinalCta';

const specialties = [
  {
    no: '01', title: 'AI & automation', audience: 'Make room to breathe',
    detail: 'Thoughtful workflows take repetitive work off your plate without taking you out of the loop.',
    href: '/what-we-do#automation', Icon: Workflow,
  },
  {
    no: '02', title: 'Technology & systems', audience: 'Make things work together',
    detail: 'Custom software, connected tools and sensible processes built around the way people actually work.',
    href: '/what-we-do#systems', Icon: Code2,
  },
  {
    no: '03', title: 'AI safety & education', audience: 'Move forward responsibly',
    detail: 'Practical policy, training and resources to help schools navigate AI with confidence.',
    href: '/for-schools', Icon: GraduationCap,
  },
  {
    no: '04', title: 'Community & small business', audience: 'Help good ideas grow',
    detail: 'More capacity for entrepreneurs, nonprofits and the organizations helping them thrive.',
    href: '/what-we-do#community', Icon: HeartHandshake,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gunmetal-deep text-cream pt-36 pb-12 sm:pt-40 lg:pt-44">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 technical-grid-windrose opacity-75" />
        <div className="container-content relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-6">
            <div className="lg:col-span-8 xl:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-gold" aria-hidden="true" />
                <span className="eyebrow text-gold">People-first technology consulting</span>
              </div>
              <h1 className="mt-8 max-w-[900px] font-display text-[clamp(3.6rem,7vw,7.4rem)] leading-[0.99] tracking-[-0.055em] text-cream">
                Better systems.
                <span className="block italic font-normal text-[#75d9e6]">More human</span>
                work.
              </h1>
              <p className="mt-9 max-w-[620px] font-body text-lg sm:text-xl leading-relaxed text-cream/80">
                Good people spend too much time fighting bad processes. We help small businesses, schools and community organizations use technology to make room for what matters.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-cta">
                  Let&rsquo;s find a better way <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="/what-we-do" className="inline-flex min-h-12 items-center gap-2 border-b border-cream/40 px-1 font-semibold text-cream hover:border-cream">
                  Explore our work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[460px] lg:col-span-4 lg:col-start-9 xl:col-span-5 xl:col-start-8" aria-hidden="true">
              <div className="relative aspect-square rounded-full border border-cream/20 bg-cream/[0.035] p-7 shadow-[0_30px_100px_-65px_rgba(24,57,55,0.6)] sm:p-10">
                <div className="relative grid h-full w-full place-items-center rounded-full border border-cream/20">
                  <div className="absolute inset-[11%] rounded-full border border-dashed border-cream/20" />
                  <CompassRose className="w-[75%] text-[#75d9e6]/75" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gunmetal-deep px-3 font-body text-[11px] font-bold tracking-[0.28em] text-[#75d9e6]">PURPOSE</span>
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gunmetal-deep px-3 font-body text-[11px] font-bold tracking-[0.28em] text-[#75d9e6]">PEOPLE</span>
                  <span className="absolute top-1/2 -left-7 -translate-y-1/2 -rotate-90 bg-gunmetal-deep px-2 font-body text-[10px] font-bold tracking-[0.2em] text-[#75d9e6]">CLARITY</span>
                  <span className="absolute top-1/2 -right-9 -translate-y-1/2 rotate-90 bg-gunmetal-deep px-2 font-body text-[10px] font-bold tracking-[0.2em] text-[#75d9e6]">POSSIBILITY</span>
                </div>
              </div>
              <div className="absolute -bottom-5 left-0 right-0 mx-auto w-fit rounded-full border border-cream/20 bg-cream px-5 py-3 text-center font-body text-xs font-semibold tracking-wide text-gunmetal shadow-sm">
                A little more room for what makes us human.
              </div>
            </div>
          </div>
          <div className="mt-24 grid gap-5 border-t border-cream/20 py-7 font-body sm:grid-cols-3 lg:mt-32">
            <div className="flex items-center gap-3"><span className="text-sm font-bold text-gold">01</span><span className="text-sm text-cream/80">Understand the people</span></div>
            <div className="flex items-center gap-3"><span className="text-sm font-bold text-gold">02</span><span className="text-sm text-cream/80">Untangle the problem</span></div>
            <div className="flex items-center gap-3"><span className="text-sm font-bold text-gold">03</span><span className="text-sm text-cream/80">Build the better way</span></div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 text-ink sm:py-24 lg:py-32">
        <div className="container-content grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <span className="eyebrow text-teal-deep">Our point of view</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="max-w-[900px] font-display text-[clamp(2.15rem,4.4vw,4.65rem)] leading-[1.12] tracking-[-0.035em] text-gunmetal-deep">
              The best technology almost disappears.
              <span className="text-myrtle-green"> The people using it get to shine.</span>
            </h2>
            <p className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-ink/75">
              We believe a good system should give you confidence, capacity and freedom. That means asking better questions before writing a line of code, and making sure the result works in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 text-ink sm:py-24 lg:py-32" id="our-work">
        <div className="container-content">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow text-teal-deep">How we can help</span>
              <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-gunmetal-deep sm:text-5xl lg:text-6xl">The right tools for the work in front of you.</h2>
            </div>
            <p className="max-w-md font-body text-lg leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-9">Every engagement starts by understanding the problem, the people, and what a useful outcome actually looks like.</p>
          </div>
          <div className="mt-12 border-t border-ink/20">
            {specialties.map(({ no, title, audience, detail, href, Icon }) => (
              <Link key={no} href={href} className="group grid gap-5 border-b border-ink/20 py-8 transition-colors hover:bg-cloud/50 focus-visible:bg-cloud/50 sm:grid-cols-12 sm:items-center sm:gap-7 sm:px-4 lg:py-10">
                <div className="flex items-center gap-5 sm:col-span-1">
                  <span className="font-body text-sm font-semibold text-myrtle-green">{no}</span>
                  <Icon className="h-7 w-7 text-teal-deep sm:hidden" aria-hidden="true" />
                </div>
                <div className="sm:col-span-5">
                  <h3 className="font-display text-[clamp(1.55rem,2.6vw,2.7rem)] text-gunmetal-deep">{title}</h3>
                  <p className="mt-1 font-body text-sm font-semibold text-teal-deep">{audience}</p>
                </div>
                <p className="max-w-md font-body leading-relaxed text-ink/75 sm:col-span-5">{detail}</p>
                <ArrowUpRight className="hidden h-6 w-6 text-myrtle-green transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:col-span-1 sm:block" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gunmetal-deep py-20 text-cream sm:py-24 lg:py-32">
        <div className="container-content">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Out in the real world</span>
              <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl lg:text-6xl">Ideas are good. <em className="font-normal text-gold">Useful work</em> is better.</h2>
            </div>
            <Link href="/case-studies" className="inline-flex min-h-12 items-center gap-2 self-start border-b border-cream/40 font-body font-semibold text-cream hover:border-cream">
              Explore our case studies <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden border border-cream/20 bg-teal-deep p-8 sm:p-10">
              <CompassRose className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 text-cream/10" aria-hidden="true" />
              <div className="relative"><span className="eyebrow text-gold">Education / AI safety</span><h3 className="mt-5 max-w-sm text-3xl leading-snug text-cream sm:text-4xl">Helping schools move forward thoughtfully.</h3></div>
              <div className="relative">
                <p className="max-w-md font-body leading-relaxed text-cream/80">Policy, staff development and practical safety resources for a small rural Missouri school community.</p>
                <Link href="/case-study" className="mt-7 inline-flex items-center gap-2 border-b border-cream/50 pb-1 font-body font-semibold text-cream hover:border-cream">See the education work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </article>
            <article className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden border border-gold/40 bg-[#e5c99a] p-8 text-gunmetal-deep sm:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 cartographic-paper opacity-25" />
              <div className="relative"><span className="eyebrow text-teal-deep">Small business / automation</span><h3 className="mt-5 max-w-sm text-3xl leading-snug sm:text-4xl">Giving a small bakery bigger possibilities.</h3></div>
              <div className="relative">
                <p className="max-w-md font-body leading-relaxed text-ink/80">Wintergarten is our own working laboratory for practical systems that give an owner more time to create.</p>
                <Link href="/case-study/wintergarten" className="mt-7 inline-flex items-center gap-2 border-b border-teal-deep/50 pb-1 font-body font-semibold text-teal-deep hover:border-teal-deep">See the small business work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <FounderBand />
      <FinalCta heading="What would you do with a little more room?" body="Tell us what is slowing your organization down. We'll listen, find the useful questions, and work toward a practical first step." />
    </>
  );
}
