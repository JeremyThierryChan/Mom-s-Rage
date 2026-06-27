"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Partners() {
  const { t } = useLang();
  const p = t.partners;

  return (
    <section id="partners" className="relative overflow-hidden bg-electric py-20 text-paper sm:py-28">
      <div className="halftone pointer-events-none absolute inset-0 text-ink opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-acid">{p.kicker}</p>
          <h2 className="display-tight mt-4 max-w-4xl text-5xl sm:text-7xl">{p.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base text-paper/85 sm:text-lg">{p.lead}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="kicker mt-10 mb-4 text-paper/60">{p.traitsTitle}</p>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {p.traits.map((trait, i) => (
            <Reveal key={trait} delay={i * 0.06}>
              <span className="hover-wiggle inline-block border-2 border-paper bg-electric px-4 py-2 font-mono text-sm font-bold">
                {trait}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <a
            href="/contact"
            className="mt-12 inline-block bg-acid px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-ink shadow-hard transition-transform hover:-translate-y-1"
          >
            {p.cta} →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
