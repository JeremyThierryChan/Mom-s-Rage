import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";

export const creator: Creator = {
  id: "16_7",
  name: { zh: "十六点七", en: "16.7" },
  handle: "@16_7",
  role: { zh: "视觉创作者", en: "Visual Creator" },
  bio: {
    zh: "在精准与失控之间，找到只属于自己的小数点。",
    en: "Between precision and chaos — finding the decimal point that belongs only to you.",
  },
  accent: "var(--color-magenta)",
  glyph: "七",
  avatar: avatarImg,
};

const w = (n: number): Work => ({
  id: `167-${String(n).padStart(2, "0")}`,
  creatorId: "16_7",
  category: "mix",
  name: { zh: `作品 ${String(n).padStart(2, "0")}`, en: `Work ${String(n).padStart(2, "0")}` },
  tagline: { zh: "—", en: "—" },
  price: 0,
  forSale: false,
  colors: [
    ["var(--color-ink)", "var(--color-magenta)", "var(--color-acid)"],
    ["var(--color-acid)", "var(--color-ink)", "var(--color-paper)"],
    ["var(--color-magenta)", "var(--color-paper)", "var(--color-ink)"],
  ][n % 3] as [string, string, string],
  pattern: (["blob", "scribble", "burst", "grid", "stripes", "dots"] as const)[n % 6],
  glyph: "七",
});

export const works: Work[] = Array.from({ length: 23 }, (_, i) => w(i + 1));
