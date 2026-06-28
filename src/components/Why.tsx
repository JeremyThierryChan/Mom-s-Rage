"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Why() {
  const { t } = useLang();
  const w = t.why;

  return (
    <section id="why" className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28">
      <div className="halftone pointer-events-none absolute inset-0 text-electric opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-cyan">{w.kicker}</p>
          <h2 className="display-tight mt-4 max-w-4xl text-5xl sm:text-7xl">{w.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base text-paper/75 sm:text-lg">{w.lead}</p>
        </Reveal>

        {/* Two personas */}
        <Reveal delay={0.1}>
          <p className="kicker mt-12 mb-5 text-paper/50">{w.personasTitle}</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {w.personas.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.12}>
              <div className="flex h-full flex-col border-2 border-paper/30 p-6">
                <div className="flex items-center justify-between">
                  <span className="bg-acid px-3 py-1 font-mono text-xs font-bold text-ink">
                    {p.tag}
                  </span>
                  <span className="kicker text-paper/40">{p.age}</span>
                </div>
                <h3 className="font-display mt-4 text-2xl leading-tight sm:text-3xl">{p.title}</h3>
                <p className="mt-3 text-sm text-paper/70 sm:text-base">{p.body}</p>
                <p className="mt-auto border-t border-paper/20 pt-4 text-sm text-acid sm:text-base">{p.gives}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The anger */}
        <Reveal delay={0.1}>
          <div className="mt-12 border-l-4 border-blood bg-paper/5 p-6 sm:p-8">
            <p className="kicker text-blood">{w.angerTitle}</p>
            <p className="font-display mt-3 text-3xl text-paper sm:text-5xl">{w.angerQuote}</p>
            <p className="mt-4 max-w-2xl text-sm text-paper/75 sm:text-base">{w.angerBody}</p>
          </div>
        </Reveal>

        {/* Timeline */}
        <Reveal delay={0.1}>
          <p className="kicker mt-20 mb-8 text-paper/50">{w.timeline.title}</p>
        </Reveal>
        <div className="relative border-l-2 border-paper/20 pl-8 flex flex-col gap-8">
          {w.timeline.stages.map((stage, i) => (
            <Reveal key={stage.label} delay={i * 0.1}>
              <div className="relative">
                <span
                  className="absolute -left-[2.3rem] top-1 h-3 w-3 rounded-full border-2 border-blood bg-ink"
                  aria-hidden
                />
                <p className="kicker text-blood">{stage.label}</p>
                <p className="mt-1 text-sm text-paper/70 sm:text-base">{stage.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contrast */}
        <Reveal delay={0.1}>
          <p className="kicker mt-20 mb-6 text-paper/50">{w.contrast.title}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-hidden border border-paper/20">
            <div className="grid grid-cols-2">
              <div className="border-b border-r border-paper/20 bg-paper/5 px-4 py-3 font-mono text-xs tracking-widest text-paper/40 uppercase">
                {w.contrast.them}
              </div>
              <div className="border-b border-paper/20 bg-acid/10 px-4 py-3 font-mono text-xs tracking-widest text-acid uppercase">
                {w.contrast.us}
              </div>
              {w.contrast.rows.flatMap((row, i) => [
                <div
                  key={`them-${i}`}
                  className={`border-r border-paper/20 px-4 py-4 text-sm text-paper/50 ${i < w.contrast.rows.length - 1 ? "border-b" : ""}`}
                >
                  {row.them}
                </div>,
                <div
                  key={`us-${i}`}
                  className={`px-4 py-4 text-sm text-paper ${i < w.contrast.rows.length - 1 ? "border-b border-paper/20" : ""}`}
                >
                  {row.us}
                </div>,
              ])}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
