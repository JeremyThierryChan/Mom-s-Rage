import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";
import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.jpg";
import work05 from "./images/work_05.jpg";
import work06 from "./images/work_06.jpg";
import work07 from "./images/work_07.jpg";
import work08 from "./images/铸剑-干将莫邪.jpg";
import work09 from "./images/铸剑-纯钧.jpg";
import work10 from "./images/铸剑-轩辕.jpg";

export const creator: Creator = {
  id: "zhihuannihong",
  name: { zh: "致幻霓虹", en: "致幻霓虹" },
  handle: "@致幻霓虹",
  role: { zh: "概念服装设计师", en: "Concept Fashion Designer" },
  bio: {
    zh: "用时装诠释超现实，用超现实质疑时装。每一件作品都是一次关于身体、权力与自然的叩问。",
    en: "Using fashion to interpret the surreal, and the surreal to question fashion. Every piece interrogates body, power, and nature.",
  },
  accent: "var(--color-electric)",
  glyph: "幻",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "zhihuannihong-01",
    creatorId: "zhihuannihong",
    category: "apparel",
    name: { zh: "骨架", en: "Exoskeleton" },
    tagline: {
      zh: "从线稿到灰度再到暗色——一件衣服的三次生命。",
      en: "From line art to grey to dark — three lives of a single garment.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-ink)", "var(--color-electric)", "var(--color-paper)"],
    pattern: "grid",
    glyph: "构",
    image: work01,
  },
  {
    id: "zhihuannihong-02",
    creatorId: "zhihuannihong",
    category: "apparel",
    name: { zh: "波德莱尔的理想", en: "Baudelaire's Ideal" },
    tagline: {
      zh: "美即是恶，恶即是美。镂空即皮肤，黑暗即光。",
      en: "Beauty is evil, evil is beauty. The cutout is skin; the darkness, light.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-electric)"],
    pattern: "scribble",
    glyph: "恶",
    image: work02,
  },
  {
    id: "zhihuannihong-03",
    creatorId: "zhihuannihong",
    category: "ip",
    name: { zh: "铸剑", en: "Blade-Forging" },
    tagline: {
      zh: "轩辕、纯约、孽将践邪——三种刀锋，三种信仰，同一熔炉。",
      en: "Xuanyuan, Chun Yue, Nie Jiang — three blades, three faiths, one forge.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-orange)", "var(--color-ink)", "var(--color-electric)"],
    pattern: "burst",
    glyph: "剑",
    image: work03,
  },
  {
    id: "zhihuannihong-04",
    creatorId: "zhihuannihong",
    category: "ip",
    name: { zh: "日本·16:18", en: "Japan 16:18" },
    tagline: {
      zh: "日本福岛第一核电站启动核污染水排海，当地时间16:18。鱼、章鱼、螃蟹——谁在签字，谁在受害。",
      en: "Fukushima Daiichi begins discharging nuclear water into the Pacific, 16:18 local time. Fish, octopus, crab — who signs; who suffers.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-paper)", "var(--color-ink)"],
    pattern: "blob",
    glyph: "核",
    image: work04,
  },
  {
    id: "zhihuannihong-05",
    creatorId: "zhihuannihong",
    category: "apparel",
    name: { zh: "蔓延", en: "Proliferation" },
    tagline: {
      zh: "骨骼与丝线交织，生命在结构中蔓延生长。",
      en: "Bone and thread intertwined — life proliferating through structure.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-ink)", "var(--color-magenta)", "var(--color-paper)"],
    pattern: "scribble",
    glyph: "蔓",
    image: work05,
  },
  {
    id: "zhihuannihong-06",
    creatorId: "zhihuannihong",
    category: "apparel",
    name: { zh: "浴火", en: "Through Fire" },
    tagline: {
      zh: "五种形态，同一火焰。战袍不是盔甲——是燃烧本身。",
      en: "Five silhouettes, one flame. The battle robe is not armor — it is the burning itself.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-magenta)", "var(--color-electric)", "var(--color-ink)"],
    pattern: "burst",
    glyph: "火",
    image: work06,
  },
  {
    id: "zhihuannihong-07",
    creatorId: "zhihuannihong",
    category: "apparel",
    name: { zh: "神曲", en: "Divine Comedy" },
    tagline: {
      zh: "万物皆可为料，众生皆可为衣。自然穿在身上，还是身体回归自然？",
      en: "All things can be material; all creatures can be cloth. Is nature worn — or is the body returned to it?",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-orange)", "var(--color-ink)"],
    pattern: "grid",
    glyph: "曲",
    image: work07,
  },
  {
    id: "zhihuannihong-08",
    creatorId: "zhihuannihong",
    category: "apparel",
    name: { zh: "铸剑·干将莫邪", en: "Forging the Blade · Gan Jiang & Mo Ye" },
    tagline: {
      zh: "「采五山之铁精，六合之金英，以铸铁剑。三月不成。莫邪断发剪爪，投于炉中，使童男童女三百人鼓橐装炭，金铁乃濡，遂以成剑。」",
      en: "\"Iron's essence from the five mountains, gold's brilliance from the six directions — to forge the blade. Three months, still unfinished. Mo Ye cut her hair and nails and cast herself into the furnace; three hundred hands stoked the coals until metal turned to liquid. Only then was the sword done.\"",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-orange)", "var(--color-ink)", "var(--color-electric)"],
    pattern: "scribble",
    glyph: "邪",
    image: work08,
  },
  {
    id: "zhihuannihong-09",
    creatorId: "zhihuannihong",
    category: "apparel",
    name: { zh: "铸剑·纯钧", en: "Forging the Blade · Chun Jun" },
    tagline: {
      zh: "「手振拂扬，其华捽如芙蓉始出。观其釽，烂如列星之行；观其光，浑浑如水之溢于塘；观其断，岩岩如琐石；观其才，焕焕如冰释。『此所谓纯钧耶？』王曰：『是也。』」",
      en: "\"Raised and shaken in the hand, its brilliance bursts like a lotus just blooming. Its ridgeline gleams like a procession of stars; its light swells like water overflowing a pool; its temper-lines are jagged as scattered stone; its substance glows like melting ice. 'Is this not Chun Jun?' The king said: 'It is.'\"",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-ink)", "var(--color-paper)"],
    pattern: "blob",
    glyph: "钧",
    image: work09,
  },
  {
    id: "zhihuannihong-10",
    creatorId: "zhihuannihong",
    category: "apparel",
    name: { zh: "铸剑·轩辕", en: "Forging the Blade · Xuanyuan" },
    tagline: {
      zh: "「轩辕帝采首山之铜铸剑，以天文古字题铭其上。帝崩葬乔山，五百年后，山崩，室空，惟剑在焉。一旦，亦失去。」",
      en: "\"The Yellow Emperor mined copper from Shou Mountain and cast a sword, inscribing it with ancient astronomical script. When the Emperor died he was buried at Qiao Mountain; five hundred years later the mountain collapsed and the chamber stood empty — only the sword remained. Then, one day, even that was gone.\"",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-orange)", "var(--color-ink)", "var(--color-paper)"],
    pattern: "grid",
    glyph: "轩",
    image: work10,
  },
];
