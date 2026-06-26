"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <section id="process" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-magenta">{p.kicker}</p>
          <h2 className="display-tight mt-4 max-w-4xl text-5xl sm:text-7xl">{p.title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {p.steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.12}>
              <div className="relative h-full">
                <span className="font-display block text-6xl text-magenta/30">{step.num}</span>
                <h3 className="font-display mt-2 text-2xl uppercase leading-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/75 sm:text-base">{step.body}</p>
                {i < p.steps.length - 1 && (
                  <span className="absolute -right-4 top-10 hidden font-display text-4xl text-ink/20 md:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
