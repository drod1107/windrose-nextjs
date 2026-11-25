import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FounderBand() {
  return (
    <section className="bg-cloud py-20 text-ink sm:py-24 lg:py-32">
      <div className="container-content grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative lg:col-span-5">
          <Image src="/assets/img/barbe_and_david.png" width={760} height={760} alt="Barbe and David, founders of Windrose & Company" className="h-auto w-full object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          <div className="absolute -bottom-5 -right-2 bg-gold px-5 py-3 font-body text-xs font-bold uppercase tracking-[0.14em] text-gunmetal-deep sm:right-[-16px]">People behind the process</div>
        </div>
        <div className="lg:col-span-7">
          <span className="eyebrow text-teal-deep">Why Windrose</span>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,4.2vw,4.4rem)] leading-[1.12] text-gunmetal-deep">
            We are people who care about <em className="font-normal text-myrtle-green">people.</em>
          </h2>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink/80">From big-company systems to tiny startup challenges, our work has taught us that great technology starts with understanding the lives and cultures of the people using it.</p>
          <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-ink/80">Our favorite projects let people spend less energy keeping things running and more energy being brilliant, creative and useful to one another.</p>
          <div className="mt-9 border-t border-ink/20 pt-7">
            <Link href="/who-we-are" className="inline-flex min-h-12 items-center gap-2 border-b border-teal-deep/50 font-body font-semibold text-teal-deep hover:border-teal-deep">
              Meet the people behind Windrose <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
