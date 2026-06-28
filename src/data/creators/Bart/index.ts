import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";
import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.jpg";
import work05 from "./images/work_05.png";
import work06 from "./images/work_06.jpg";
import work07 from "./images/work_07.jpg";
import work08 from "./images/work_08.jpg";
import work09 from "./images/work_09.jpg";

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
  { id: "bart-01", creatorId: "bart", category: "mix", name: { zh: "作品 01", en: "Work 01" }, tagline: { zh: "", en: "" }, price: 0, forSale: false, colors: ["var(--color-acid)", "var(--color-ink)", "var(--color-paper)"], pattern: "burst", glyph: "B", image: work01 },
  { id: "bart-02", creatorId: "bart", category: "mix", name: { zh: "作品 02", en: "Work 02" }, tagline: { zh: "", en: "" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-acid)", "var(--color-ink)"], pattern: "grid", glyph: "B", image: work02 },
  { id: "bart-03", creatorId: "bart", category: "mix", name: { zh: "作品 03", en: "Work 03" }, tagline: { zh: "", en: "" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-acid)", "var(--color-paper)"], pattern: "blob", glyph: "B", image: work03 },
  { id: "bart-04", creatorId: "bart", category: "mix", name: { zh: "作品 04", en: "Work 04" }, tagline: { zh: "", en: "" }, price: 0, forSale: false, colors: ["var(--color-acid)", "var(--color-paper)", "var(--color-ink)"], pattern: "scribble", glyph: "B", image: work04 },
  { id: "bart-05", creatorId: "bart", category: "mix", name: { zh: "作品 05", en: "Work 05" }, tagline: { zh: "", en: "" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-ink)", "var(--color-acid)"], pattern: "stripes", glyph: "B", image: work05 },
  { id: "bart-06", creatorId: "bart", category: "mix", name: { zh: "作品 06", en: "Work 06" }, tagline: { zh: "", en: "" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-acid)"], pattern: "dots", glyph: "B", image: work06 },
  { id: "bart-07", creatorId: "bart", category: "mix", name: { zh: "作品 07", en: "Work 07" }, tagline: { zh: "", en: "" }, price: 0, forSale: false, colors: ["var(--color-acid)", "var(--color-ink)", "var(--color-paper)"], pattern: "burst", glyph: "B", image: work07 },
  { id: "bart-08", creatorId: "bart", category: "mix", name: { zh: "作品 08", en: "Work 08" }, tagline: { zh: "", en: "" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-acid)", "var(--color-ink)"], pattern: "grid", glyph: "B", image: work08 },
  { id: "bart-09", creatorId: "bart", category: "mix", name: { zh: "作品 09", en: "Work 09" }, tagline: { zh: "", en: "" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-acid)", "var(--color-paper)"], pattern: "blob", glyph: "B", image: work09 },
];
