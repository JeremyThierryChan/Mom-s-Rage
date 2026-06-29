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
  role: { zh: "数字插画师", en: "Digital Illustrator" },
  bio: {
    zh: "游走于真实与幻觉之间，用数字插画探索身份的边界与内心的多重面孔。",
    en: "Drifting between the real and the hallucinatory — using digital illustration to map the edges of identity and the many faces within.",
  },
  accent: "var(--color-magenta)",
  glyph: "伪",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "zhenwei-01",
    creatorId: "zhenwei",
    category: "ip",
    name: { zh: "噪声", en: "Static" },
    tagline: {
      zh: "失真不是失真，是另一种清晰。",
      en: "Distortion isn't distortion — it's another kind of clarity.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-magenta)", "var(--color-electric)", "var(--color-ink)"],
    pattern: "scribble",
    glyph: "噪",
    image: work01,
  },
  {
    id: "zhenwei-02",
    creatorId: "zhenwei",
    category: "ip",
    name: { zh: "真与伪", en: "True & False" },
    tagline: {
      zh: "同一颗心，对立的两面：猛烈与忧郁，冷酷与内省。",
      en: "One heart, two opposing faces: fierce and melancholic, ruthless and introspective.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-magenta)", "var(--color-electric)", "var(--color-ink)"],
    pattern: "burst",
    glyph: "真",
    image: work02,
  },
  {
    id: "zhenwei-03",
    creatorId: "zhenwei",
    category: "ip",
    name: { zh: "致幻兔", en: "Psychedelic Bunny" },
    tagline: {
      zh: "色彩漫溢出边界，意识也随之液化。",
      en: "Color overflows its boundaries — consciousness liquefies with it.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-magenta)", "var(--color-paper)", "var(--color-electric)"],
    pattern: "blob",
    glyph: "幻",
    image: work03,
  },
  {
    id: "zhenwei-04",
    creatorId: "zhenwei",
    category: "ip",
    name: { zh: "游鱼之境", en: "Among the Fish" },
    tagline: {
      zh: "身体半透明，鱼自穿身而过——谁在渔，谁在被渔。",
      en: "The body turns translucent; fish pass right through it — who fishes, and who is caught.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-paper)", "var(--color-magenta)"],
    pattern: "grid",
    glyph: "鱼",
    image: work04,
  },
];
