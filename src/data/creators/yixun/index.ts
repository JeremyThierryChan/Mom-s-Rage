import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";
import work01 from "./images/work_01.jpg";

export const creator: Creator = {
  id: "yixun",
  name: { zh: "亿循拓珃", en: "亿循拓珃" },
  handle: "@亿循拓珃",
  role: { zh: "视觉创作者", en: "Visual Creator" },
  bio: {
    zh: "循环往复，拓展边界。",
    en: "Cycling endlessly, expanding boundaries.",
  },
  accent: "var(--color-orange)",
  glyph: "珃",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "yixun-works",
    creatorId: "yixun",
    category: "mix",
    name: { zh: "作品集", en: "Works" },
    tagline: {
      zh: "视觉探索与创作。",
      en: "Visual exploration and creation.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-orange)", "var(--color-ink)", "var(--color-paper)"],
    pattern: "burst",
    glyph: "循",
    image: work01,
  },
];
