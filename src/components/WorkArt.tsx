"use client";

import type { Work } from "@/data/works";

export function WorkArt({ work }: { work: Work }) {
  const [bg, a, b] = work.colors;

  return (
    <div
      className="relative aspect-square w-full overflow-hidden"
      style={{ background: bg }}
      aria-hidden
    >
      <PatternLayer pattern={work.pattern} a={a} b={b} />
      {/* Big graphic mark */}
      <span
        className="font-brush absolute inset-0 flex items-center justify-center text-[9rem] leading-none mix-blend-hard-light"
        style={{ color: a }}
      >
        {work.glyph}
      </span>
      {/* Offset echo for that printed look */}
      <span
        className="font-brush absolute inset-0 flex translate-x-1.5 translate-y-1.5 items-center justify-center text-[9rem] leading-none opacity-50"
        style={{ color: b }}
      >
        {work.glyph}
      </span>
    </div>
  );
}

function PatternLayer({
  pattern,
  a,
  b,
}: {
  pattern: Work["pattern"];
  a: string;
  b: string;
}) {
  const base = "absolute inset-0";
  switch (pattern) {
    case "stripes":
      return (
        <div
          className={base}
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${b} 0 14px, transparent 14px 32px)`,
            opacity: 0.5,
          }}
        />
      );
    case "dots":
      return (
        <div
          className={base}
          style={{
            backgroundImage: `radial-gradient(${b} 3px, transparent 3.5px)`,
            backgroundSize: "22px 22px",
            opacity: 0.55,
          }}
        />
      );
    case "grid":
      return (
        <div
          className={base}
          style={{
            backgroundImage: `linear-gradient(${b} 2px, transparent 2px), linear-gradient(90deg, ${b} 2px, transparent 2px)`,
            backgroundSize: "30px 30px",
            opacity: 0.45,
          }}
        />
      );
    case "burst":
      return (
        <div
          className={base}
          style={{
            background: `repeating-conic-gradient(from 0deg at 50% 50%, ${b} 0deg 12deg, transparent 12deg 24deg)`,
            opacity: 0.4,
          }}
        />
      );
    case "blob":
      return (
        <svg className={base} viewBox="0 0 200 200" preserveAspectRatio="none">
          <path
            fill={b}
            opacity="0.55"
            d="M44,-58C56,-49,63,-33,68,-15C72,3,73,22,64,35C55,48,37,55,18,61C-2,66,-23,69,-40,61C-57,53,-70,34,-73,14C-77,-7,-71,-29,-58,-43C-45,-57,-25,-63,-5,-58C16,-52,32,-67,44,-58Z"
            transform="translate(100 100)"
          />
        </svg>
      );
    case "scribble":
      return (
        <svg className={base} viewBox="0 0 200 200" preserveAspectRatio="none">
          <path
            d="M10,150 C40,40 70,200 100,90 S160,30 190,160"
            fill="none"
            stroke={b}
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M10,90 C50,180 80,20 120,140 S170,180 190,60"
            fill="none"
            stroke={b}
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      );
    default:
      return null;
  }
}
