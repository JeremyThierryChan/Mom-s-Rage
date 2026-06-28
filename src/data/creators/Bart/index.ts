import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";

export const creator: Creator = {
  id: "bart",
  name: { zh: "巴特", en: "Bart" },
  handle: "@Bart",
  role: { zh: "视觉艺术家", en: "Visual Artist" },
  bio: {
    zh: "用色彩说话，用形状思考。",
    en: "Speaking in colour, thinking in shape.",
  },
  accent: "var(--color-acid)",
  glyph: "B",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "bart-01", creatorId: "bart", category: "mix",
    name: { zh: "作品 01", en: "Work 01" },
    tagline: { zh: "", en: "" },
    price: 0, forSale: false,
    colors: ["var(--color-acid)", "var(--color-ink)", "var(--color-paper)"],
    pattern: "burst", glyph: "B",
  },
  {
    id: "bart-02", creatorId: "bart", category: "mix",
    name: { zh: "作品 02", en: "Work 02" },
    tagline: { zh: "", en: "" },
    price: 0, forSale: false,
    colors: ["var(--color-paper)", "var(--color-acid)", "var(--color-ink)"],
    pattern: "grid", glyph: "B",
  },
];
