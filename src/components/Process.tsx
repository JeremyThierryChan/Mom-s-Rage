"use client";

import Link from "next/link";
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
              <div className="relative h-full border-2 border-ink p-6">
                <span className="font-display block text-6xl text-magenta/20">{step.num}</span>
                <h3 className="font-display mt-2 text-2xl uppercase leading-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/75 sm:text-base">{step.body}</p>
                <ul className="mt-5 space-y-2 border-t border-ink/10 pt-4">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-ink/60">
                      <span className="mt-0.5 shrink-0 text-magenta">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
                {i < p.steps.length - 1 && (
                  <span className="absolute -right-4 top-10 hidden font-display text-4xl text-ink/20 md:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <Reveal>
            <p className="kicker mb-8 text-magenta">{p.faq.title}</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {p.faq.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-2 border-ink/20 bg-ink/[0.03] p-6 h-full">
                  <p className="font-display text-lg leading-tight sm:text-xl">{item.q}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block bg-magenta px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-paper shadow-hard transition-transform hover:-translate-y-1"
            >
              {p.cta} →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
