import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";

export const creator: Creator = {
  id: "shan",
  name: { zh: "山。", en: "SHAN." },
  handle: "@山。",
  role: { zh: "抽象艺术 · 油画 丙烯，泥塑 · 手作", en: "Abstract Art · Oil & Acrylic, Clay Sculpture · Handcraft" },
  bio: {
    zh: "这里是山，一名东北野生艺术创作者。",
    en: "Here is SHAN, a wild artist from Northeast China.",
  },
  accent: "var(--color-magenta)",
  glyph: "山",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "shan-01",
    creatorId: "shan",
    category: "mix",
    name: { zh: "霓虹月夜狂想曲", en: "Neon Nocturne Rhapsody" },
    tagline: {
      zh: "如倒影，看世物重叠，星光璀璨。",
      en: "Like reflections — the world overlaps, and starlight dazzles.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-magenta)", "var(--color-ink)", "var(--color-electric)"],
    pattern: "burst",
    glyph: "霓",
  },
  {
    id: "shan-02",
    creatorId: "shan",
    category: "mix",
    name: { zh: "苹果", en: "Apple" },
    tagline: {
      zh: "我认为，受伤的苹果，才是「完美」的苹果。",
      en: "I believe a wounded apple is the \"perfect\" apple.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-magenta)", "var(--color-paper)", "var(--color-ink)"],
    pattern: "grid",
    glyph: "果",
  },
  {
    id: "shan-03",
    creatorId: "shan",
    category: "mix",
    name: { zh: "静物2.不友好的人", en: "Still Life 2. The Unfriendly" },
    tagline: {
      zh: "不友好的人是我。",
      en: "The unfriendly one is me.",
    },
    price: 850,
    forSale: true,
    colors: ["var(--color-ink)", "var(--color-magenta)", "var(--color-paper)"],
    pattern: "noise",
    glyph: "静",
  },
  {
    id: "shan-04",
    creatorId: "shan",
    category: "mix",
    name: { zh: "二周（花）", en: "Two Weeks (Bloom)" },
    tagline: {
      zh: "在二周的时间里，它开满了花。",
      en: "In two weeks, it bloomed in full.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-magenta)", "var(--color-acid)", "var(--color-paper)"],
    pattern: "burst",
    glyph: "花",
  },
  {
    id: "shan-05",
    creatorId: "shan",
    category: "mix",
    name: { zh: "龙", en: "Dragon" },
    tagline: {
      zh: "是实物，是幻影，请向内看。",
      en: "It is real, it is phantom — look inward.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-ink)", "var(--color-electric)", "var(--color-magenta)"],
    pattern: "wave",
    glyph: "龙",
  },
  {
    id: "shan-06",
    creatorId: "shan",
    category: "mix",
    name: { zh: "漫语夜谈", en: "Night Ramble" },
    tagline: {
      zh: "夜漫漫，如一生，与自己攀谈一番。",
      en: "The night stretches long, like a lifetime — talk with yourself.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-ink)", "var(--color-magenta)", "var(--color-electric)"],
    pattern: "grid",
    glyph: "夜",
  },
];
