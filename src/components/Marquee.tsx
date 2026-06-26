"use client";

/**
 * Infinite scrolling text band. The items are duplicated so the CSS keyframe can
 * translate by -50% for a seamless loop.
 */
export function Marquee({
  items,
  className = "",
  reverse = false,
  separator = "✶",
}: {
  items: readonly string[];
  className?: string;
  reverse?: boolean;
  separator?: string;
}) {
  const run = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
        {run.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6">{item}</span>
            <span className="opacity-50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
