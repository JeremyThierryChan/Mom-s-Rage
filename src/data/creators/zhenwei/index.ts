import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";
import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.png";

export const creator: Creator = {
  id: "zhenwei",
  name: { zh: "真伪", en: "真伪" },
  handle: "@真伪",
  role: { zh: "纹身师·画家", en: "Tattoo Artist · Painter" },
  bio: {
    zh: "AKA天蓬，晋北地区非著名传统纹身师，国画油画双修，偶尔也玩儿点暗黑。",
    en: "AKA Tianpeng. A not-so-famous traditional tattoo artist from northern Shanxi — Chinese ink and oil painting, occasionally veering dark.",
  },
  accent: "var(--color-electric)",
  glyph: "伪",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "zhenwei-01",
    creatorId: "zhenwei",
    category: "ip",
    name: { zh: "恶童", en: "BAD BOY" },
    tagline: {
      zh: "借鉴红孩儿/哪吒造型，抛弃【伟光正】概念，突出【恶】。",
      en: "Referencing Nezha's archetype — discarding righteousness, foregrounding malice.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-ink)", "var(--color-paper)"],
    pattern: "burst",
    glyph: "恶",
    image: work01,
  },
  {
    id: "zhenwei-02",
    creatorId: "zhenwei",
    category: "ip",
    name: { zh: "双龙斗", en: "Dragon Battle" },
    tagline: {
      zh: "原创双半胛包大臂，左云右浪的设计【破】开严谨的感觉。",
      en: "Original double shoulder-to-arm piece — left cloud, right wave, breaking through rigidity.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-ink)", "var(--color-electric)", "var(--color-paper)"],
    pattern: "scribble",
    glyph: "龙",
    image: work02,
  },
  {
    id: "zhenwei-03",
    creatorId: "zhenwei",
    category: "ip",
    name: { zh: "普贤菩萨", en: "Puxian Bodhisattva" },
    tagline: {
      zh: "借鉴唐卡构图，严肃不失美艳。",
      en: "Thangka-influenced composition — solemn yet resplendent.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-paper)", "var(--color-electric)", "var(--color-ink)"],
    pattern: "grid",
    glyph: "贤",
    image: work03,
  },
  {
    id: "zhenwei-04",
    creatorId: "zhenwei",
    category: "ip",
    name: { zh: "妙吉祥", en: "Miao Jixiang" },
    tagline: {
      zh: "你的火只烧得了旁人，却烧不得我。",
      en: "Your fire can burn others — but it cannot burn me.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-paper)", "var(--color-ink)"],
    pattern: "blob",
    glyph: "祥",
    image: work04,
  },
];
