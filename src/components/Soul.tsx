"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const ACCENTS = ["bg-magenta", "bg-electric", "bg-orange", "bg-purple"];

export function Soul() {
  const { t } = useLang();
  const s = t.soul;

  return (
    <section id="soul" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-magenta">{s.kicker}</p>
          <h2 className="display-tight mt-4 max-w-4xl text-5xl sm:text-7xl">{s.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg text-ink/75">{s.mission}</p>
        </Reveal>

        {/* Four principles */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {s.principles.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden border-2 border-ink p-7 transition-colors hover:bg-ink hover:text-paper">
                <span
                  className={`absolute right-0 top-0 h-3 w-24 ${ACCENTS[i % ACCENTS.length]}`}
                />
                <div className="flex items-baseline gap-4">
                  <span className="font-brush text-5xl">{p.cn}</span>
                  <span className="font-mono text-sm tracking-widest opacity-60">{p.en}</span>
                </div>
                <p className="mt-4 text-ink/75 group-hover:text-paper/75">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The soul: 真 */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-center gap-6 border-2 border-ink bg-ink p-10 text-center text-paper sm:p-16">
            <p className="kicker text-acid">{s.soulLead}</p>
            <span className="font-brush text-[34vw] leading-none text-acid sm:text-[16rem]">
              {s.soulWord}
            </span>
            <p className="max-w-md text-lg text-paper/80">{s.soulTail}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
