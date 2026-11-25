import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FounderBand() {
  return (
    <section className="bg-white py-20 text-signal-black sm:py-24 lg:py-32">
      <div className="container-content grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative lg:col-span-5">
          <div className="absolute -bottom-5 -right-4 h-1/3 w-2/3 bg-signal-lime" aria-hidden="true" />
          <div className="relative border border-signal-black bg-signal-fog">
            <Image src="/assets/img/barbe_and_david.png" width={760} height={760} alt="Barbe and David, founders of Windrose & Company" className="h-auto w-full object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
          <div className="relative -mt-px inline-block border border-signal-black bg-signal-lime px-5 py-3 font-body text-xs font-extrabold uppercase tracking-[0.14em] text-signal-black">People behind the process</div>
        </div>
        <div className="lg:col-span-7">
          <span className="signal-overline">04 / Why Windrose</span>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.3rem,4.3vw,4.6rem)] font-extrabold leading-[1.09] tracking-[-0.055em]">
            We are people who care about <span className="inline-block border-b-[0.12em] border-signal-coral">people.</span>
          </h2>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-signal-muted">From big-company systems to tiny startup challenges, our work has taught us that great technology starts with understanding the lives and cultures of the people using it.</p>
          <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-signal-muted">Our favorite projects let people spend less energy keeping things running and more energy being brilliant, creative and useful to one another.</p>
          <div className="mt-9 border-t border-signal-black/30 pt-7">
            <Link href="/who-we-are" className="inline-flex min-h-12 items-center gap-2 border-b-2 border-signal-black font-body font-bold text-signal-black hover:border-signal-coral">
              Meet the people behind Windrose <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
