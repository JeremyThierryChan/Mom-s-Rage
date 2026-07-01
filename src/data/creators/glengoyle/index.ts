import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.png";
import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";

export const creator: Creator = {
  id: "glengoyle",
  name: { zh: "格拉盖伊尔", en: "Glengoyle" },
  handle: "@Glengoyle",
  role: { zh: "插画师 · 超现实主义", en: "Illustrator · Surrealism" },
  bio: {
    zh: "全息渐变笔触下的破碎身体与面孔，用糖果色讲一个不太安稳的故事。",
    en: "Fractured bodies and faces rendered in holographic gradients — telling an uneasy story in candy colors.",
  },
  accent: "var(--color-cyan)",
  glyph: "格",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "glengoyle-01",
    creatorId: "glengoyle",
    category: "mix",
    name: { zh: "蝶翼", en: "Butterfly Wing" },
    tagline: {
      zh: "血管与蝶翼共生，一张脸接着一张脸，睡着往下坠。",
      en: "Veins and butterfly wings grow from the same body — face after face, drifting down asleep.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-magenta)", "var(--color-cyan)", "var(--color-paper)"],
    pattern: "blob",
    glyph: "蝶",
    image: work01,
  },
  {
    id: "glengoyle-02",
    creatorId: "glengoyle",
    category: "mix",
    name: { zh: "垂泪", en: "Weeping" },
    tagline: {
      zh: "佛的手势滴下彩色的血，罩袍下坠着一个仰躺的身体。",
      en: "A Buddha's mudra bleeds in color; beneath the robe, a body lies suspended, tilted upward.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-cyan)", "var(--color-blood)", "var(--color-paper)"],
    pattern: "scribble",
    glyph: "泪",
    image: work02,
  },
  {
    id: "glengoyle-03",
    creatorId: "glengoyle",
    category: "mix",
    name: { zh: "提线", en: "Marionette" },
    tagline: {
      zh: "一张脸牵着提线，线的另一端是被摆布的关节木偶。",
      en: "A face pulls the strings; on the other end, a jointed marionette is made to move.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-cyan)", "var(--color-paper)"],
    pattern: "grid",
    glyph: "线",
    image: work03,
  },
];
