import type { Creator, Work } from "../_types";

export const creator: Creator = {
  id: "xiaoguai",
  name: { zh: "小怪", en: "Xiǎoguài" },
  handle: "@xiaoguai_lab",
  role: { zh: "周边 · 装置", en: "Goods · Objects" },
  bio: {
    zh: "把无聊的日用品变成有意思的小怪物。一个杯子也能有自己的脾气。",
    en: "Turns boring everyday objects into interesting little monsters. Even a mug can have a temper.",
  },
  accent: "var(--color-orange)",
  glyph: "怪",
};

export const works: Work[] = [
  {
    id: "goods-mug",
    creatorId: "xiaoguai",
    category: "goods",
    name: { zh: "有意思马克杯", en: "Interesting Mug" },
    tagline: { zh: "每天都用，每天都不无聊", en: "Used daily, never boring" },
    price: 59,
    forSale: true,
    colors: ["var(--color-acid)", "var(--color-magenta)", "var(--color-ink)"],
    pattern: "dots",
    glyph: "趣",
  },
  {
    id: "goods-stickers",
    creatorId: "xiaoguai",
    category: "goods",
    name: { zh: "叛逆贴纸包", en: "Defiance Sticker Pack" },
    tagline: { zh: "贴在任何不该贴的地方", en: "Stick it where it shouldn't go" },
    price: 19,
    forSale: true,
    colors: ["var(--color-cyan)", "var(--color-orange)", "var(--color-ink)"],
    pattern: "grid",
    glyph: "贴",
  },
  {
    id: "goods-tote",
    creatorId: "xiaoguai",
    category: "goods",
    name: { zh: "灵魂帆布袋", en: "Soul Tote" },
    tagline: { zh: "装下你所有离谱的想法", en: "Carry all your ridiculous ideas" },
    price: 79,
    forSale: true,
    colors: ["var(--color-electric)", "var(--color-acid)", "var(--color-paper)"],
    pattern: "stripes",
    glyph: "装",
  },
];
