"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const ACCENTS = ["bg-magenta", "bg-electric", "bg-orange", "bg-purple"];

export function Soul() {
  const { t } = useLang();
  const s = t.soul;

  return (
    <section id="soul" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-magenta">{s.kicker}</p>
          <h2 className="display-tight mt-4 max-w-4xl text-5xl sm:text-7xl">{s.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base text-ink/75 sm:text-lg">{s.mission}</p>
        </Reveal>

        {/* Four principles */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {s.principles.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden border-2 border-ink p-6 transition-colors hover:bg-ink hover:text-paper">
                <span
                  className={`absolute right-0 top-0 h-3 w-24 ${ACCENTS[i % ACCENTS.length]}`}
                />
                <div className="flex items-baseline gap-3">
                  <span className="font-brush text-4xl">{p.cn}</span>
                  <span className="font-mono text-xs tracking-widest opacity-60">{p.en}</span>
                </div>
                <p className="mt-3 text-sm text-ink/75 group-hover:text-paper/75 sm:text-base">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The soul: 真 */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-4 border-2 border-ink bg-ink p-8 text-center text-paper sm:p-12">
            <p className="kicker text-acid">{s.soulLead}</p>
            <span className="font-brush text-[28vw] leading-none text-acid sm:text-[11rem]">
              {s.soulWord}
            </span>
            <p className="max-w-md text-base text-paper/80">{s.soulTail}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
