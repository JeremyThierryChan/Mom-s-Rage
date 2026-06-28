"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { getCreator } from "@/data/creators";
import type { Work } from "@/data/works";
import { WorkArt } from "./WorkArt";

export function WorkCard({
  work,
  showCreator = false,
  onSelect,
}: {
  work: Work;
  showCreator?: boolean;
  onSelect?: (work: Work) => void;
}) {
  const { t, lang } = useLang();
  const w = t.works;
  const creator = showCreator ? getCreator(work.creatorId) : undefined;

  return (
    <article
      className="group flex cursor-pointer flex-col border-2 border-ink bg-paper shadow-hard transition-transform hover:-translate-y-1"
      onClick={() => onSelect?.(work)}
    >
      <div className="overflow-hidden border-b-2 border-ink">
        {work.image ? (
          <Image
            src={work.image}
            alt={work.name.zh}
            width={work.image.width}
            height={work.image.height}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <WorkArt work={work} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="kicker text-magenta">{w.categories[work.category]}</span>
        <h3 className="font-display mt-2 text-2xl uppercase leading-tight">{work.name[lang]}</h3>
        <p className="mt-2 flex-1 text-sm text-ink/70">{work.tagline[lang]}</p>

        {creator && (
          <Link
            href={`/creators/${creator.id}`}
            className="mt-3 inline-block font-mono text-xs text-ink/60 underline-offset-2 hover:text-magenta hover:underline"
            onClick={e => e.stopPropagation()}
          >
            {w.by} {creator.name[lang]}
          </Link>
        )}

        <div className="mt-4 flex items-center justify-between">
          {work.forSale ? (
            <div className="flex items-baseline gap-2">
              <span className="kicker text-ink/50">{w.priceFrom}</span>
              <span className="font-display text-2xl">¥{work.price}</span>
            </div>
          ) : (
            <span className="border-2 border-ink px-2 py-1 font-mono text-[0.7rem] uppercase tracking-wide">
              {w.notForSale}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
