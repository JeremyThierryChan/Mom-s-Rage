import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";
import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.jpg";
import work05 from "./images/work_05.jpg";
import work06 from "./images/work_06.jpg";
import work07 from "./images/work_07.jpg";

export const creator: Creator = {
  id: "zu0king_z",
  name: { zh: "张茁清", en: "Zu0king_z" },
  handle: "@张茁清",
  role: { zh: "纹身师·画家", en: "Tattoo Artist · Painter" },
  bio: {
    zh: "AKA天蓬，晋北地区非著名传统纹身师，国画油画双修，好奇心比较强，只要是感兴趣的东西都喜欢看一看，了解了解。",
    en: "AKA Tianpeng. A not-so-famous traditional tattoo artist from northern Shanxi, mastering both Chinese ink and oil painting. Deeply curious — if it's interesting, it's worth knowing.",
  },
  accent: "var(--color-orange)",
  glyph: "茁",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "zu0king_z-01",
    creatorId: "zu0king_z",
    category: "ip",
    name: { zh: "恶童", en: "BAD BOY" },
    tagline: {
      zh: "借鉴红孩儿/哪吒造型，抛弃【伟光正】概念，突出【恶】。",
      en: "Referencing Nezha's archetype — discarding righteousness, foregrounding malice.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-orange)", "var(--color-ink)", "var(--color-paper)"],
    pattern: "burst",
    glyph: "恶",
    image: work01,
  },
  {
    id: "zu0king_z-02",
    creatorId: "zu0king_z",
    category: "ip",
    name: { zh: "双龙斗", en: "Dragon Battle" },
    tagline: {
      zh: "原创双半胛包大臂，左云右浪的设计【破】开严谨的感觉。",
      en: "Original double shoulder-to-arm piece — left cloud, right wave, breaking through rigidity.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-ink)", "var(--color-orange)", "var(--color-paper)"],
    pattern: "scribble",
    glyph: "龙",
    images: [work02, work03],
  },
  {
    id: "zu0king_z-03",
    creatorId: "zu0king_z",
    category: "ip",
    name: { zh: "普贤菩萨", en: "Puxian Bodhisattva" },
    tagline: {
      zh: "客人的生肖守护佛，借鉴唐卡构图，严肃不失美艳。",
      en: "A patron bodhisattva for the client — Thangka-influenced, solemn yet resplendent.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-paper)", "var(--color-orange)", "var(--color-ink)"],
    pattern: "grid",
    glyph: "贤",
    images: [work04, work05, work06],
  },
  {
    id: "zu0king_z-04",
    creatorId: "zu0king_z",
    category: "ip",
    name: { zh: "妙吉祥", en: "Miao Jixiang" },
    tagline: {
      zh: "你的火只烧得了旁人，却烧不得我。",
      en: "Your fire can burn others — but it cannot burn me.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-orange)", "var(--color-paper)", "var(--color-ink)"],
    pattern: "blob",
    glyph: "祥",
    image: work07,
  },
];
