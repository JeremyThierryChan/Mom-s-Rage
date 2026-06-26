"use client";

import Image from "next/image";
import { asset } from "@/lib/config";
import type { Creator } from "@/data/creators";

/**
 * Generated circular avatar: accent fill + halftone + big brush glyph (with an
 * offset echo for the printed look). Falls back to a real photo if
 * `creator.avatar` is set. Size is controlled by the parent via `className`
 * (the SVG scales to fill).
 */
export function CreatorAvatar({
  creator,
  className = "",
}: {
  creator: Creator;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-full border-2 border-ink ${className}`}
      style={{ background: creator.accent }}
      aria-hidden
    >
      {creator.avatar ? (
        <Image
          src={asset(creator.avatar)}
          alt=""
          fill
          sizes="220px"
          className="object-cover"
        />
      ) : (
        <>
          <div className="halftone absolute inset-0 text-ink opacity-20" />
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <text
              x="52"
              y="54"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="62"
              fill="var(--color-ink)"
              opacity="0.25"
              style={{ fontFamily: "var(--font-brush)" }}
            >
              {creator.glyph}
            </text>
            <text
              x="50"
              y="52"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="62"
              fill="var(--color-ink)"
              style={{ fontFamily: "var(--font-brush)" }}
            >
              {creator.glyph}
            </text>
          </svg>
        </>
      )}
    </div>
  );
}
