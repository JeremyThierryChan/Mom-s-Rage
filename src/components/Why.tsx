"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Why() {
  const { t } = useLang();
  const w = t.why;

  return (
    <section id="why" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div className="halftone pointer-events-none absolute inset-0 text-electric opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-cyan">{w.kicker}</p>
          <h2 className="display-tight mt-4 max-w-4xl text-5xl sm:text-7xl">{w.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg text-paper/75">{w.lead}</p>
        </Reveal>

        {/* Two personas */}
        <Reveal delay={0.1}>
          <p className="kicker mt-16 mb-6 text-paper/50">{w.personasTitle}</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {w.personas.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.12}>
              <div className="flex h-full flex-col border-2 border-paper/30 p-7">
                <div className="flex items-center justify-between">
                  <span className="bg-acid px-3 py-1 font-mono text-xs font-bold text-ink">
                    {p.tag}
                  </span>
                  <span className="kicker text-paper/40">{p.age}</span>
                </div>
                <h3 className="font-display mt-5 text-3xl leading-tight">{p.title}</h3>
                <p className="mt-4 text-paper/70">{p.body}</p>
                <p className="mt-auto border-t border-paper/20 pt-4 text-acid">{p.gives}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The anger */}
        <Reveal delay={0.1}>
          <div className="mt-16 border-l-4 border-blood bg-paper/5 p-7 sm:p-10">
            <p className="kicker text-blood">{w.angerTitle}</p>
            <p className="font-display mt-4 text-4xl text-paper sm:text-6xl">{w.angerQuote}</p>
            <p className="mt-6 max-w-2xl text-paper/75">{w.angerBody}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
