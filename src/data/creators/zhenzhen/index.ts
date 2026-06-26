import type { Creator, Work } from "../_types";

export const creator: Creator = {
  id: "zhenzhen",
  name: { zh: "真真", en: "Zhēn" },
  handle: "@zhen_founder",
  role: { zh: "多元 · 主理人", en: "Multi · Founder" },
  bio: {
    zh: "妈见打的那个孩子。把妈妈的「再见一次打一次」变成了作品，变成了这个品牌。",
    en: "The kid behind Mom's Rage. Turned \"wear it again and you'll get it again\" into work, and into this brand.",
  },
  accent: "var(--color-purple)",
  glyph: "真",
};

export const works: Work[] = [
  {
    id: "mix-installation",
    creatorId: "zhenzhen",
    category: "mix",
    name: { zh: "真 · 装置", en: "REAL · Installation" },
    tagline: { zh: "一整面墙的愤怒（展览装置）", en: "A whole wall of rage (installation)" },
    price: 0,
    forSale: false,
    colors: ["var(--color-purple)", "var(--color-acid)", "var(--color-paper)"],
    pattern: "grid",
    glyph: "真",
  },
  {
    id: "mix-sound",
    creatorId: "zhenzhen",
    category: "mix",
    name: { zh: "声音碎片", en: "Sound Shards" },
    tagline: { zh: "把没说出口的话录下来（声音作品）", en: "The words never said, recorded (sound piece)" },
    price: 0,
    forSale: false,
    colors: ["var(--color-cyan)", "var(--color-blood)", "var(--color-ink)"],
    pattern: "scribble",
    glyph: "声",
  },
  {
    id: "mix-zine",
    creatorId: "zhenzhen",
    category: "mix",
    name: { zh: "妈见打 ZINE", en: "MOM'S RAGE ZINE" },
    tagline: { zh: "一本会被妈妈撕掉的小册子", en: "A zine your mom would tear up" },
    price: 45,
    forSale: true,
    colors: ["var(--color-magenta)", "var(--color-ink)", "var(--color-acid)"],
    pattern: "dots",
    glyph: "杂",
  },
];
