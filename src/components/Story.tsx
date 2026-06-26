"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Story() {
  const { t } = useLang();
  const s = t.story;

  return (
    <section id="story" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-magenta">{s.kicker}</p>
          <h2 className="display-tight mt-4 max-w-4xl text-5xl sm:text-7xl">{s.title}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl border-l-4 border-magenta pl-5 text-xl font-bold italic leading-snug sm:text-2xl">
            {s.lead}
          </p>
        </Reveal>

        <div className="mt-8 grid max-w-3xl gap-4 text-base leading-relaxed text-ink/80 sm:text-lg">
          {s.body.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Three meanings */}
        <Reveal delay={0.1}>
          <p className="kicker mt-14 mb-5 text-ink/60">{s.layersTitle}</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {s.layers.map((layer, i) => (
            <Reveal key={layer.title} delay={i * 0.1}>
              <div className="group h-full border-2 border-ink bg-paper p-7 shadow-hard transition-transform hover:-translate-y-1">
                <span className="font-brush block text-6xl text-magenta">{layer.num}</span>
                <h3 className="font-display mt-4 text-3xl uppercase">{layer.title}</h3>
                <p className="mt-3 text-ink/75">{layer.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
