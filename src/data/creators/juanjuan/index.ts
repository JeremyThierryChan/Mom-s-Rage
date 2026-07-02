import type { Creator, Work } from "../_types";
import type { StaticImageData } from "next/image";
import avatarImg from "./images/juanjuan.jpg";

import makeup01 from "./images/makeup_01.jpg";
import makeup02 from "./images/makeup_02.jpg";
import makeup03 from "./images/makeup_03.jpg";
import makeup04 from "./images/makeup_04.jpg";
import makeup05 from "./images/makeup_05.jpg";
import makeup06 from "./images/makeup_06.jpg";
import makeup07 from "./images/makeup_07.jpg";
import makeup08 from "./images/makeup_08.jpg";
import makeup09 from "./images/makeup_09.jpg";
import makeup10 from "./images/makeup_10.jpg";
import makeup11 from "./images/makeup_11.jpg";
import makeup12 from "./images/makeup_12.jpg";
import makeup13 from "./images/makeup_13.jpg";
import makeup14 from "./images/makeup_14.jpg";
import makeup15 from "./images/makeup_15.jpg";
import makeup16 from "./images/makeup_16.jpg";
import makeup17 from "./images/makeup_17.jpg";
import makeup18 from "./images/makeup_18.jpg";
import makeup19 from "./images/makeup_19.jpg";
import makeup20 from "./images/makeup_20.jpg";
import makeup21 from "./images/makeup_21.jpg";
import makeup22 from "./images/makeup_22.jpg";
import makeup23 from "./images/makeup_23.jpg";
import makeup24 from "./images/makeup_24.jpg";
import makeup25 from "./images/makeup_25.jpg";
import makeup26 from "./images/makeup_26.jpg";
import makeup27 from "./images/makeup_27.jpg";
import makeup28 from "./images/makeup_28.jpg";
import makeup29 from "./images/makeup_29.jpg";
import makeup30 from "./images/makeup_30.jpg";
import makeup31 from "./images/makeup_31.jpg";
import makeup32 from "./images/makeup_32.jpg";
import makeup33 from "./images/makeup_33.jpg";
import makeup34 from "./images/makeup_34.jpg";
import makeup35 from "./images/makeup_35.jpg";
import makeup36 from "./images/makeup_36.jpg";
import makeup37 from "./images/makeup_37.jpg";
import makeup38 from "./images/makeup_38.jpg";
import makeup39 from "./images/makeup_39.jpg";
import makeup40 from "./images/makeup_40.jpg";
import makeup41 from "./images/makeup_41.jpg";
import makeup42 from "./images/makeup_42.jpg";
import makeup43 from "./images/makeup_43.jpg";
import makeup44 from "./images/makeup_44.jpg";
import makeup45 from "./images/makeup_45.jpg";
import makeup46 from "./images/makeup_46.jpg";
import makeup47 from "./images/makeup_47.jpg";
import makeup48 from "./images/makeup_48.jpg";
import makeup49 from "./images/makeup_49.jpg";
import makeup50 from "./images/makeup_50.jpg";
import makeup51 from "./images/makeup_51.jpg";

import scene01 from "./images/scene_01.jpg";
import scene02 from "./images/scene_02.jpg";
import scene03 from "./images/scene_03.jpg";
import scene04 from "./images/scene_04.jpg";
import scene05 from "./images/scene_05.jpg";
import scene06 from "./images/scene_06.jpg";

import costume01 from "./images/costume_01.jpg";
import costume02 from "./images/costume_02.jpg";
import costume03 from "./images/costume_03.jpg";
import costume04 from "./images/costume_04.jpg";
import costume05 from "./images/costume_05.jpg";
import costume06 from "./images/costume_06.jpg";
import costume07 from "./images/costume_07.jpg";
import costume08 from "./images/costume_08.jpg";
import costume09 from "./images/costume_09.jpg";
import costume10 from "./images/costume_10.jpg";
import costume11 from "./images/costume_11.jpg";
import costume12 from "./images/costume_12.jpg";
import costume13 from "./images/costume_13.jpg";

export const creator: Creator = {
  id: "juanjuan",
  name: { zh: "卷卷", en: "Jesmine" },
  handle: "小红书@薯条卷卷卷 · 抖音@薯条卷卷卷",
  role: { zh: "妆造 · 服装改造 · 装置 · 首饰", en: "Makeup · Costume Rework · Installation · Jewelry" },
  bio: {
    zh: "神的痞颜，谁敢看，看就把你变成神颜。",
    en: "A rascal's face fit for gods — dare to look, and looking will turn you into one.",
  },
  accent: "var(--color-magenta)",
  glyph: "卷",
  avatar: avatarImg,
};

const makeupImages: StaticImageData[] = [
  makeup01, makeup02, makeup03, makeup04, makeup05, makeup06, makeup07, makeup08, makeup09, makeup10,
  makeup11, makeup12, makeup13, makeup14, makeup15, makeup16, makeup17, makeup18, makeup19, makeup20,
  makeup21, makeup22, makeup23, makeup24, makeup25, makeup26, makeup27, makeup28, makeup29, makeup30,
  makeup31, makeup32, makeup33, makeup34, makeup35, makeup36, makeup37, makeup38, makeup39, makeup40,
  makeup41, makeup42, makeup43, makeup44, makeup45, makeup46, makeup47, makeup48, makeup49, makeup50,
  makeup51,
];

export const works: Work[] = [
  {
    id: "juanjuan-makeup",
    creatorId: "juanjuan",
    category: "mix",
    name: { zh: "创意妆造", en: "Creative Makeup" },
    tagline: {
      zh: "擅长妆造，风格偏戏剧，喜欢以人体为画布，向外延展。",
      en: "Skilled in makeup with a theatrical edge — treats the body as a canvas that extends outward.",
    },
    price: 800,
    forSale: true,
    colors: ["var(--color-cyan)", "var(--color-magenta)", "var(--color-paper)"],
    pattern: "blob",
    glyph: "妆",
    images: makeupImages,
  },
  {
    id: "juanjuan-scene",
    creatorId: "juanjuan",
    category: "mix",
    name: { zh: "场景搭建", en: "Scene Building" },
    tagline: {
      zh: "影视、平面场景搭建均可，工作经历多，人美场美均可。价格 ¥500/天起。",
      en: "Set building for film and print, with real production experience. From ¥500/day.",
    },
    price: 500,
    forSale: true,
    colors: ["var(--color-magenta)", "var(--color-electric)", "var(--color-ink)"],
    pattern: "grid",
    glyph: "场",
    images: [scene01, scene02, scene03, scene04, scene05, scene06],
  },
  {
    id: "juanjuan-costume",
    creatorId: "juanjuan",
    category: "apparel",
    name: { zh: "服装制作与改造", en: "Costume Making & Rework" },
    tagline: {
      zh: "不说了，叫我巧手裁缝。价格看难易程度定。",
      en: "Say no more — call her the skilled tailor. Price depends on difficulty.",
    },
    price: 0,
    forSale: true,
    priceOnInquiry: true,
    colors: ["var(--color-ink)", "var(--color-magenta)", "var(--color-paper)"],
    pattern: "stripes",
    glyph: "裁",
    images: [costume01, costume02, costume03, costume04, costume05, costume06, costume07, costume08, costume09, costume10, costume11, costume12, costume13],
  },
  {
    id: "juanjuan-jewelry",
    creatorId: "juanjuan",
    category: "apparel",
    name: { zh: "钢丝缠绕首饰", en: "Wire-Wrapped Jewelry" },
    tagline: { zh: "手作首饰，样图待补", en: "Handmade jewelry — photos coming soon" },
    price: 0,
    forSale: false,
    colors: ["var(--color-paper)", "var(--color-magenta)", "var(--color-ink)"],
    pattern: "scribble",
    glyph: "饰",
  },
];
