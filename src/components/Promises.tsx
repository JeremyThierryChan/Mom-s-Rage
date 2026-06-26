"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Promises() {
  const { t } = useLang();
  const p = t.promises;

  return (
    <section className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-magenta">{p.kicker}</p>
          <h2 className="display-tight mt-4 text-5xl sm:text-7xl">{p.title}</h2>
        </Reveal>

        <ul className="mt-12 divide-y-2 divide-ink border-y-2 border-ink">
          {p.items.map((item, i) => (
            <Reveal key={i}>
              <li className="group flex items-start gap-5 py-6 transition-colors hover:bg-ink hover:text-paper">
                <span className="font-display shrink-0 text-3xl text-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-lg font-semibold leading-snug sm:text-xl">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
