import type { Creator, Work } from "../../_types";

export const creator: Creator = {
  id: "fangu",
  name: { zh: "反骨", en: "Fǎngǔ" },
  handle: "@fangu_wear",
  role: { zh: "服装 · 穿戴", en: "Apparel · Wearable" },
  bio: {
    zh: "做妈妈看了会皱眉的衣服。穿上它，你就知道自己和别人不一样。",
    en: "Makes clothes that make moms frown. Put it on and you know — you're not like the rest.",
  },
  accent: "var(--color-electric)",
  glyph: "反",
};

export const works: Work[] = [
  {
    id: "apparel-defiant-tee",
    creatorId: "fangu",
    category: "apparel",
    name: { zh: "叛逆 Tee", en: "Defiant Tee" },
    tagline: { zh: "穿上就知道，我和别人不一样", en: "Wear it and you know — I'm different" },
    price: 179,
    forSale: true,
    colors: ["var(--color-ink)", "var(--color-acid)", "var(--color-magenta)"],
    pattern: "grid",
    glyph: "叛",
  },
  {
    id: "apparel-rage-hoodie",
    creatorId: "fangu",
    category: "apparel",
    name: { zh: "妈见打卫衣", en: "Rage Hoodie" },
    tagline: { zh: "地下摇滚海报穿在身上", en: "An underground poster you can wear" },
    price: 199,
    forSale: true,
    colors: ["var(--color-magenta)", "var(--color-ink)", "var(--color-cyan)"],
    pattern: "burst",
    glyph: "打",
  },
  {
    id: "apparel-scarf",
    creatorId: "fangu",
    category: "apparel",
    name: { zh: "乱涂围巾 · 样衣", en: "Scribble Scarf · Sample" },
    tagline: { zh: "把情绪缠在脖子上（样衣展示）", en: "Wrap the feeling round your neck (sample)" },
    price: 0,
    forSale: false,
    colors: ["var(--color-orange)", "var(--color-electric)", "var(--color-paper)"],
    pattern: "scribble",
    glyph: "乱",
  },
];
