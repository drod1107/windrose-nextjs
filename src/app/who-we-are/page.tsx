import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '../components/PageHero';
import FinalCta from '../components/FinalCta';

export const metadata: Metadata = {
  title: 'About Us | A People-first Consultancy',
  description: 'Meet the founders and philosophy behind Windrose & Company. We build practical technology and systems that help people do their best work.',
  alternates: { canonical: 'https://www.windroseandco.com/who-we-are' },
};

export default function WhoWeAre() {
  return (
    <>
      <PageHero eyebrow="The people behind Windrose" title="Curious about systems. Serious about people." lead="We started Windrose because we believe technology should help people spend more of their lives doing what they are good at." />
      <section className="bg-cream py-20 text-ink sm:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <figure>
              <div className="overflow-hidden bg-cloud">
                <Image src="/assets/img/barbe_and_david.png" width={760} height={900} alt="Barbe and David, founders of Windrose & Company" className="h-auto w-full object-cover" sizes="(max-width: 1024px) 100vw, 42vw" priority />
              </div>
              <figcaption className="mt-3 font-body text-sm text-ink/65">Barbe and David · Windrose & Company</figcaption>
            </figure>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <span className="eyebrow text-teal-deep">Our story</span>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-snug text-gunmetal-deep sm:text-5xl">We care about how work <em className="font-normal text-myrtle-green">feels</em> to the people doing it.</h2>
            <div className="mt-8 max-w-2xl space-y-6 font-body text-lg leading-relaxed text-ink/80">
              <p>We&apos;re a married couple shaped by work alongside Fortune 500 organizations, nonprofits and mom-and-pop businesses. Different settings, same fascination: what makes a culture healthy, and what makes good work possible?</p>
              <p>Our experience spans technology, systems engineering, training, operations and the everyday realities of running small ventures. We also draw on a network of specialists when a project needs expertise beyond our own.</p>
              <p>We look for the bottlenecks, but we listen for the human story behind them. The goal is always a system that gives people more confidence, time and agency.</p>
            </div>
            <div className="mt-10 border-l-4 border-gold bg-cloud px-6 py-7">
              <p className="font-display text-2xl leading-snug text-gunmetal-deep sm:text-3xl">Computers are best used to help people &ldquo;human&rdquo; better.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cloud py-20 text-ink sm:py-28">
        <div className="container-content grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><span className="eyebrow text-teal-deep">What guides us</span><h2 className="mt-4 text-3xl text-gunmetal-deep sm:text-4xl">Good work has a human center.</h2></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            <div className="border-t border-ink/25 pt-6"><h3 className="text-2xl text-gunmetal-deep">Start with understanding.</h3><p className="mt-4 font-body leading-relaxed text-ink/75">Listen to the people living with a problem before prescribing a tool.</p></div>
            <div className="border-t border-ink/25 pt-6"><h3 className="text-2xl text-gunmetal-deep">Make it genuinely useful.</h3><p className="mt-4 font-body leading-relaxed text-ink/75">Choose the smallest good solution that someone can actually maintain.</p></div>
            <div className="border-t border-ink/25 pt-6"><h3 className="text-2xl text-gunmetal-deep">Leave room for judgment.</h3><p className="mt-4 font-body leading-relaxed text-ink/75">Automation should support human decisions, not erase them.</p></div>
            <div className="border-t border-ink/25 pt-6"><h3 className="text-2xl text-gunmetal-deep">Show up for the community.</h3><p className="mt-4 font-body leading-relaxed text-ink/75">Smaller organizations deserve the benefit of thoughtful, practical systems.</p></div>
          </div>
        </div>
      </section>
      <FinalCta heading="Tell us what you want to make better." body="If our way of seeing the world sounds familiar, we would enjoy hearing about your work." />
    </>
  );
}
