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
      <section className="relative isolate overflow-hidden border-b border-signal-black bg-white pt-36 text-signal-black sm:pt-40 lg:pt-44">
        <div className="container-content relative">
          <div className="grid gap-12 pb-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-20">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block h-2.5 w-2.5 rotate-45 bg-signal-coral" aria-hidden="true" />
                <span className="signal-overline">Independent consulting / People first</span>
              </div>
              <h1 className="mt-8 max-w-[850px] font-display text-[clamp(3.2rem,6.45vw,6.55rem)] font-bold leading-[0.99] tracking-[-0.074em] text-signal-black">
                Better systems.
                <span className="mt-2 block w-fit bg-signal-lime px-[0.065em] pb-[0.09em] pt-[0.015em] text-signal-black">More human</span>
                work.
              </h1>
              <p className="mt-9 max-w-[610px] font-body text-lg leading-relaxed text-signal-muted sm:text-xl">
                Good people spend too much time fighting bad processes. We help small businesses, schools and community organizations use technology to make room for what matters.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link href="/contact" className="btn-cta">
                  Let&rsquo;s find a better way <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="/what-we-do" className="inline-flex min-h-12 items-center gap-2 border-b-2 border-signal-black font-body font-semibold text-signal-black hover:border-signal-coral">
                  Explore our work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[440px] lg:col-span-5" aria-hidden="true">
              <div className="absolute -right-3 -top-3 h-24 w-24 bg-signal-coral sm:-right-5 sm:-top-5" />
              <div className="relative border border-signal-black bg-signal-black p-6 text-white sm:p-9">
                <div className="flex items-center justify-between border-b border-white/25 pb-4">
                  <span className="font-body text-[11px] font-bold uppercase tracking-[0.23em] text-white/80">W / Co. Method</span>
                  <span className="h-3 w-3 rounded-full bg-signal-lime" />
                </div>
                <div className="relative grid min-h-[300px] place-items-center sm:min-h-[350px]">
                  <div className="absolute inset-[9%] rounded-full border border-white/20" />
                  <div className="absolute inset-[20%] rounded-full border border-dashed border-signal-lime/40" />
                  <CompassRose className="w-[70%] text-signal-lime" />
                </div>
                <div className="grid grid-cols-3 border-t border-white/25 pt-5">
                  {['People','Clarity','Progress'].map((word, index) => (
                    <div key={word} className="border-r border-white/20 px-2 first:pl-0 last:border-0 last:pr-0">
                      <div className="font-body text-[10px] font-bold tracking-wide text-signal-lime">0{index + 1}</div>
                      <div className="mt-1 font-body text-xs font-semibold uppercase tracking-[0.08em] sm:text-sm">{word}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative -mt-px flex items-center justify-between border border-signal-black bg-signal-fog px-4 py-3 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-signal-black sm:px-6">
                <span>Less friction. More possibility.</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-signal-black/25 bg-signal-fog">
          <div className="container-content grid gap-3 py-5 font-body sm:grid-cols-3 sm:gap-6">
            {['Understand the people','Untangle the problem','Build the better way'].map((text, index) => (
              <div key={text} className="flex items-center gap-3 text-sm">
                <span className="font-bold text-signal-black">0{index + 1}</span>
                <span className="h-px w-6 bg-signal-black/35" aria-hidden="true" />
                <span className="text-signal-black/80">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-signal-lime py-20 text-signal-black sm:py-24 lg:py-28">
        <div className="container-content grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <span className="signal-overline">01 / Our point of view</span>
            <div className="mt-5 h-1 w-14 bg-signal-black" aria-hidden="true" />
          </div>
          <div className="lg:col-span-9">
            <h2 className="max-w-[920px] font-display text-[clamp(2.35rem,5vw,5rem)] font-bold leading-[1.08] tracking-[-0.055em]">
              The best technology almost disappears. The people using it get to shine.
            </h2>
            <p className="mt-7 max-w-[750px] font-body text-lg leading-relaxed text-signal-black/80">
              We believe a good system should give you confidence, capacity and freedom. That means asking better questions before writing a line of code, and making sure the result works in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-signal-black sm:py-24 lg:py-32" id="our-work">
        <div className="container-content">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="signal-overline">02 / How we can help</span>
              <h2 className="mt-5 max-w-[750px] font-display text-[clamp(2.3rem,4.7vw,4.9rem)] font-bold leading-[1.08] tracking-[-0.055em]">
                The right tools for the work in front of you.
              </h2>
            </div>
            <p className="max-w-md font-body text-lg leading-relaxed text-signal-muted lg:col-span-4 lg:col-start-9">
              Every engagement starts by understanding the problem, the people, and what a useful outcome actually looks like.
            </p>
          </div>
          <div className="mt-14 border-t-2 border-signal-black">
            {specialties.map(({no,title,audience,detail,href,Icon}) => (
              <Link key={no} href={href} className="group grid gap-4 border-b border-signal-black/30 px-2 py-8 transition-colors hover:bg-[#F4F8E9] focus-visible:bg-[#F4F8E9] sm:grid-cols-12 sm:items-center sm:gap-5 sm:px-5 lg:py-10">
                <div className="flex items-center gap-3 sm:col-span-1">
                  <span className="font-body text-sm font-bold text-signal-black">{no}</span>
                  <Icon className="h-6 w-6 text-signal-black sm:hidden" aria-hidden="true" />
                </div>
                <div className="sm:col-span-5">
                  <h3 className="font-display text-[clamp(1.7rem,2.55vw,2.8rem)] font-bold leading-tight tracking-[-0.04em] text-signal-black">{title}</h3>
                  <p className="mt-1 font-body text-sm font-semibold text-signal-black/70">{audience}</p>
                </div>
                <p className="max-w-md font-body leading-relaxed text-signal-muted sm:col-span-5">{detail}</p>
                <ArrowUpRight className="hidden h-6 w-6 text-signal-black transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:col-span-1 sm:block" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-signal-fog py-20 text-signal-black sm:py-24 lg:py-32">
        <div className="container-content">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="signal-overline">03 / Out in the real world</span>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.35rem,4.6vw,4.8rem)] font-bold leading-[1.09] tracking-[-0.055em]">
                Ideas are good.<br /><span className="inline-block bg-signal-lime px-2">Useful work</span> is better.
              </h2>
            </div>
            <Link href="/case-studies" className="inline-flex min-h-12 items-center gap-2 self-start border-b-2 border-signal-black font-body font-semibold text-signal-black hover:border-signal-coral">
              Explore our case studies <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden border border-signal-black bg-white p-8 sm:p-10">
              <CompassRose className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 text-signal-black/[0.06]" aria-hidden="true" />
              <div className="relative">
                <span className="signal-overline">Education / AI safety</span>
                <h3 className="mt-5 max-w-sm font-display text-3xl font-bold leading-snug tracking-tight sm:text-4xl">Helping schools move forward thoughtfully.</h3>
              </div>
              <div className="relative">
                <p className="max-w-md font-body leading-relaxed text-signal-muted">Policy, staff development and practical safety resources for a small rural Missouri school community.</p>
                <Link href="/case-study" className="mt-7 inline-flex items-center gap-2 border-b-2 border-signal-black pb-1 font-body font-semibold text-signal-black hover:border-signal-coral">
                  See the education work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
            <article className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden border border-signal-black bg-white p-8 sm:p-10">
              <span aria-hidden="true" className="absolute right-0 top-0 h-16 w-16 bg-signal-coral" />
              <div className="relative">
                <span className="signal-overline">Small business / Automation</span>
                <h3 className="mt-5 max-w-sm font-display text-3xl font-bold leading-snug tracking-tight sm:text-4xl">Giving a small bakery bigger possibilities.</h3>
              </div>
              <div className="relative">
                <p className="max-w-md font-body leading-relaxed text-signal-muted">Wintergarten is our own working laboratory for practical systems that give an owner more time to create.</p>
                <Link href="/case-study/wintergarten" className="mt-7 inline-flex items-center gap-2 border-b-2 border-signal-black pb-1 font-body font-semibold text-signal-black hover:border-signal-coral">
                  See the small business work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
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
