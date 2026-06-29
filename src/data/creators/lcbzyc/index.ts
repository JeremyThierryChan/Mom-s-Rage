import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";
import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.jpg";
import work05 from "./images/work_05.jpg";

export const creator: Creator = {
  id: "lcbzyc",
  name: { zh: "猪一川", en: "lcbzyc" },
  handle: "@猪一川",
  role: { zh: "改造艺术家", en: "Modification Artist" },
  bio: {
    zh: "我想干啥干啥，耶耶✌️",
    en: "I am free, yay!",
  },
  accent: "var(--color-magenta)",
  glyph: "猪",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "lcbzyc-01",
    creatorId: "lcbzyc",
    category: "mix",
    name: { zh: "血玫督知更鸟", en: "Blood Rose Supervises the Robin" },
    tagline: {
      zh: "血液、白玫瑰、基督十字架——被镜片划出的血涂满琴身，滴血认主。",
      en: "Blood, white roses, the cross — paint the body with the blood drawn by the lens.",
    },
    price: 0,
    forSale: true,
    priceOnInquiry: true,
    colors: ["var(--color-magenta)", "var(--color-paper)", "var(--color-ink)"],
    pattern: "burst",
    glyph: "血",
    image: work01,
  },
  {
    id: "lcbzyc-02",
    creatorId: "lcbzyc",
    category: "mix",
    name: { zh: "秽镜", en: "Impure Mirror" },
    tagline: {
      zh: "第一个改造作品，灯光通过镜片折射——他人生中第一次被照耀的瞬间。",
      en: "The first modification. Light refracts through the lens — the first moment in his life to be seen.",
    },
    price: 0,
    forSale: true,
    priceOnInquiry: true,
    colors: ["var(--color-ink)", "var(--color-magenta)", "var(--color-paper)"],
    pattern: "grid",
    glyph: "镜",
    image: work02,
  },
  {
    id: "lcbzyc-03",
    creatorId: "lcbzyc",
    category: "mix",
    name: { zh: "失真血骸", en: "Distorted Remains" },
    tagline: {
      zh: "只有骨架是自己的，凶猛的失真嘶吼着负重前行。",
      en: "Only the skeleton is its own. Ferocious distortion roars under the weight.",
    },
    price: 0,
    forSale: true,
    priceOnInquiry: true,
    colors: ["var(--color-paper)", "var(--color-ink)", "var(--color-magenta)"],
    pattern: "stripes",
    glyph: "骸",
    image: work03,
  },
  {
    id: "lcbzyc-04",
    creatorId: "lcbzyc",
    category: "mix",
    name: { zh: "碎光", en: "Shattered Light" },
    tagline: {
      zh: "渴望更多的射灯，渴望被看到。",
      en: "Craving more spotlights. Craving to be seen.",
    },
    price: 0,
    forSale: true,
    priceOnInquiry: true,
    colors: ["var(--color-acid)", "var(--color-ink)", "var(--color-magenta)"],
    pattern: "dots",
    glyph: "光",
    image: work04,
  },
  {
    id: "lcbzyc-05",
    creatorId: "lcbzyc",
    category: "apparel",
    name: { zh: "灼痕骷髅", en: "Scorched Skull" },
    tagline: {
      zh: "烧痕、裁剪、别针——弱化女性元素，可达到中性或偏狂野造型。",
      en: "Burn marks, cuts, pins — neutralising femininity toward something wilder.",
    },
    price: 0,
    forSale: true,
    priceOnInquiry: true,
    colors: ["var(--color-ink)", "var(--color-acid)", "var(--color-magenta)"],
    pattern: "scribble",
    glyph: "骷",
    image: work05,
  },
];
