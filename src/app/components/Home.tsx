import Link from 'next/link';
import { ArrowRight, Workflow, ShieldCheck, Code2, Users, Compass } from 'lucide-react';
import CompassRose from './CompassRose';
import FounderBand from './FounderBand';
import FinalCta from './FinalCta';

const practices = [
  { title: 'AI & automation', description: 'Give your team time back. We turn repetitive administrative, marketing and operational work into practical workflows your people can maintain.', icon: Workflow, href: '/what-we-do#automation' },
  { title: 'Technology & systems', description: 'Make the systems behind your business work together. From software to process design, we build around the people using it.', icon: Code2, href: '/what-we-do#systems' },
  { title: 'AI safety & education', description: 'Help schools adopt AI thoughtfully, with practical policy, staff training and incident response resources.', icon: ShieldCheck, href: '/for-schools' },
  { title: 'Community & small business', description: 'Build capacity for entrepreneurs and the organizations supporting them. Spend less time keeping the lights on and more time helping people grow.', icon: Users, href: '/what-we-do#community' },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gunmetal-deep text-cream">
        <div className="absolute inset-0 bg-gradient-to-br from-gunmetal-deep via-gunmetal to-teal-deep/80" />
        <CompassRose className="pointer-events-none absolute -right-32 top-12 w-[30rem] h-[30rem] lg:w-[48rem] lg:h-[48rem] text-myrtle-green/20" />
        <div className="container-content relative grid gap-12 pt-36 pb-20 lg:pt-44 lg:pb-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow">People-first technology consulting</span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.03] mt-6 text-cream">
              Technology that lets people <span className="text-myrtle-green-light">do their best work.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-cream/80 mt-7 max-w-2xl">
              We help small businesses, schools and community organizations use technology and AI to solve real problems, build stronger systems and make more room for the work that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link href="/contact" className="btn-cta">Let&rsquo;s talk <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" /></Link>
              <Link href="/what-we-do" className="btn-ghost">Explore our services</Link>
            </div>
          </div>
          <div className="lg:col-span-4 border-l border-cream/20 pl-6 lg:pl-8 py-4">
            <Compass className="w-8 h-8 text-gold mb-5" aria-hidden="true" />
            <p className="font-display text-2xl text-cream">Good technology starts with understanding people.</p>
            <p className="font-body text-cream/65 mt-4">Based in Missouri. Built for organizations ready to grow on their own terms.</p>
          </div>
        </div>
      </section>
      <section className="bg-cream text-ink py-20 lg:py-28">
        <div className="container-content">
          <span className="eyebrow text-myrtle-green">What we do</span>
          <h2 className="text-4xl lg:text-5xl text-gunmetal mt-4 max-w-3xl">Practical solutions for the work in front of you.</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            {practices.map(({title, description, icon: Icon, href}) => (
              <Link key={title} href={href} className="group flex flex-col rounded-xl2 bg-white border border-ink/10 p-6 lg:p-7 hover:shadow-lift transition-shadow">
                <Icon className="w-8 h-8 text-myrtle-green" aria-hidden="true" />
                <h3 className="text-xl text-gunmetal mt-6">{title}</h3>
                <p className="font-body text-ink/75 mt-3 flex-grow">{description}</p>
                <span className="font-body font-semibold text-myrtle-green mt-6 flex items-center gap-2">Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cloud text-ink py-20 lg:py-28">
        <div className="container-content">
          <span className="eyebrow text-myrtle-green">In practice</span>
          <h2 className="text-4xl lg:text-5xl text-gunmetal mt-4">Real work. Real organizations.</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-10">
            <article className="rounded-xl2 bg-white border border-ink/10 p-8 lg:p-10">
              <span className="font-body text-sm uppercase tracking-widest text-myrtle-green font-semibold">Education</span>
              <h3 className="text-3xl text-gunmetal mt-3">AI readiness in rural Missouri</h3>
              <p className="font-body text-ink/75 mt-4">A small school district gained a board-approved AI policy, practical staff training and safety resources designed around its community.</p>
              <Link href="/case-study" className="inline-flex items-center gap-2 font-semibold text-myrtle-green mt-6">Read the case study <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
            </article>
            <article className="rounded-xl2 bg-white border border-ink/10 p-8 lg:p-10">
              <span className="font-body text-sm uppercase tracking-widest text-myrtle-green font-semibold">Small business</span>
              <h3 className="text-3xl text-gunmetal mt-3">Building the systems behind Wintergarten</h3>
              <p className="font-body text-ink/75 mt-4">Our founders&rsquo; cottage bakery is a working example of putting AI-assisted development and practical automation to use in a small business.</p>
              <Link href="/case-study/wintergarten" className="inline-flex items-center gap-2 font-semibold text-myrtle-green mt-6">Read the case study <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>
      <FounderBand />
      <FinalCta heading="What would you rather spend your time doing?" body="Tell us what is getting in the way. Together, we'll identify a practical first step and build from there." />
    </>
  );
}
