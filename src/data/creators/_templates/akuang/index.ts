import type { Creator, Work } from "../../_types";

export const creator: Creator = {
  id: "akuang",
  name: { zh: "阿狂", en: "A-Kuáng" },
  handle: "@akuang_rage",
  role: { zh: "原创 IP · 涂鸦", en: "Original IP · Graffiti" },
  bio: {
    zh: "把愤怒画成会咬人的小孩。十年涂鸦，从墙上画到了你身上。最讨厌别人说「画点好看的」。",
    en: 'Paints rage into kids that bite. Ten years of graffiti, from walls onto you. Hates being told to "draw something pretty."',
  },
  accent: "var(--color-magenta)",
  glyph: "狂",
};

export const works: Work[] = [
  {
    id: "ip-rage-kid",
    creatorId: "akuang",
    category: "ip",
    name: { zh: "暴走小孩 No.1", en: "Rage Kid No.1" },
    tagline: { zh: "永远在反抗的那个小孩", en: "The kid who never stops rebelling" },
    price: 89,
    forSale: true,
    colors: ["var(--color-magenta)", "var(--color-acid)", "var(--color-ink)"],
    pattern: "burst",
    glyph: "怒",
  },
  {
    id: "ip-quiet-monster",
    creatorId: "akuang",
    category: "ip",
    name: { zh: "闷声怪", en: "Quiet Monster" },
    tagline: { zh: "心里有话，说不出来", en: "So much to say, can't say it" },
    price: 99,
    forSale: true,
    colors: ["var(--color-electric)", "var(--color-cyan)", "var(--color-paper)"],
    pattern: "blob",
    glyph: "闷",
  },
  {
    id: "ip-overflow",
    creatorId: "akuang",
    category: "ip",
    name: { zh: "情绪喷喷 · 原画", en: "Overflow · Original" },
    tagline: { zh: "想法太多，藏不住（原作展示）", en: "Too many ideas to hide (original, not for sale)" },
    price: 0,
    forSale: false,
    colors: ["var(--color-orange)", "var(--color-blood)", "var(--color-ink)"],
    pattern: "scribble",
    glyph: "喷",
  },
];
