import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";
import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.jpg";
import work05 from "./images/work_05.jpg";
import work06 from "./images/work_06.jpg";

export const creator: Creator = {
  id: "zhiyu",
  name: { zh: "知语", en: "Zhiyu" },
  handle: "@知语",
  role: { zh: "品牌设计师", en: "Brand Designer" },
  bio: {
    zh: "专注于品牌视觉体系的构建——从字标、色系到应用场景，每一套 VI 都是一门语言的完整语法。",
    en: "Building brand visual systems from logotype to color palette to application — every VI is a complete grammar of a language.",
  },
  accent: "var(--color-electric)",
  glyph: "语",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "zhiyu-01",
    creatorId: "zhiyu",
    category: "ip",
    name: { zh: "YUEBOX 品牌标识系统", en: "YUEBOX Brand Identity System" },
    tagline: {
      zh: "年轻中式美学母婴品牌——字标、辅助图形、应用场景全套 VI 规范。",
      en: "A young Chinese-aesthetic mother-and-baby brand — full VI system: logotype, supporting graphics, application specs.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-paper)", "var(--color-ink)"],
    pattern: "grid",
    glyph: "悦",
    image: work01,
  },
  {
    id: "zhiyu-02",
    creatorId: "zhiyu",
    category: "ip",
    name: { zh: "YUEBOX 色彩系统", en: "YUEBOX Colour System" },
    tagline: {
      zh: "主调象牙白、点缀国风琥珀——配色规范与视觉层次设计。",
      en: "Ivory white as the base tone, Chinese-heritage amber as the accent — colour rules and visual hierarchy.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-paper)", "var(--color-orange)", "var(--color-electric)"],
    pattern: "blob",
    glyph: "彩",
    image: work02,
  },
  {
    id: "zhiyu-03",
    creatorId: "zhiyu",
    category: "ip",
    name: { zh: "YUEBOX 字体与排版", en: "YUEBOX Typography" },
    tagline: {
      zh: "衬线与现代无衬线的混排语法，兼顾东方韵味与当代简洁。",
      en: "Mixed-setting grammar for serif and modern sans-serif — balancing Eastern sensibility with contemporary clarity.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-electric)"],
    pattern: "scribble",
    glyph: "字",
    image: work03,
  },
  {
    id: "zhiyu-04",
    creatorId: "zhiyu",
    category: "ip",
    name: { zh: "YUEBOX 应用场景", en: "YUEBOX Application Mockups" },
    tagline: {
      zh: "包装、购物袋、名片、电商主图——品牌系统落地到每一个触点。",
      en: "Packaging, shopping bags, cards, e-commerce hero images — brand system landing on every touchpoint.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-ink)", "var(--color-paper)"],
    pattern: "burst",
    glyph: "用",
    image: work04,
  },
  {
    id: "zhiyu-05",
    creatorId: "zhiyu",
    category: "ip",
    name: { zh: "YUEBOX 辅助图形", en: "YUEBOX Supporting Graphics" },
    tagline: {
      zh: "源自中式窗格纹的几何单元，成为贯穿包装与数字媒体的视觉语言。",
      en: "Geometric units derived from Chinese lattice patterns — a visual language woven through print and digital.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-orange)", "var(--color-electric)", "var(--color-paper)"],
    pattern: "grid",
    glyph: "纹",
    image: work05,
  },
  {
    id: "zhiyu-06",
    creatorId: "zhiyu",
    category: "ip",
    name: { zh: "YUEBOX 整体展示", en: "YUEBOX Full System Overview" },
    tagline: {
      zh: "完整品牌手册的最终页——所有规范与应用在同一个视野下呈现。",
      en: "The final spread of the complete brand book — every rule and application seen in one view.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-paper)", "var(--color-electric)", "var(--color-ink)"],
    pattern: "blob",
    glyph: "全",
    image: work06,
  },
];
