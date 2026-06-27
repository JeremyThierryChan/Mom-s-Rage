import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";

export const creator: Creator = {
  id: "co1dvvv",
  name: { zh: "Co1dvvv", en: "Co1dvvv" },
  handle: "@co1dvvv",
  role: { zh: "视觉创作者", en: "Visual Creator" },
  bio: {
    zh: "冷静的眼睛，热烈的笔触。",
    en: "A cold eye, a burning line.",
  },
  accent: "var(--color-electric)",
  glyph: "冷",
  avatar: avatarImg,
};

const w = (n: number): Work => ({
  id: `co1dvvv-${String(n).padStart(2, "0")}`,
  creatorId: "co1dvvv",
  category: "mix",
  name: { zh: `作品 ${String(n).padStart(2, "0")}`, en: `Work ${String(n).padStart(2, "0")}` },
  tagline: { zh: "—", en: "—" },
  price: 0,
  forSale: false,
  colors: [
    ["var(--color-ink)", "var(--color-electric)", "var(--color-paper)"],
    ["var(--color-electric)", "var(--color-ink)", "var(--color-magenta)"],
    ["var(--color-paper)", "var(--color-ink)", "var(--color-electric)"],
  ][n % 3] as [string, string, string],
  pattern: (["blob", "scribble", "burst", "grid", "stripes", "dots"] as const)[n % 6],
  glyph: "冷",
});

export const works: Work[] = Array.from({ length: 13 }, (_, i) => w(i + 1));
