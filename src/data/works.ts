/**
 * Portfolio works.
 *
 * Visuals are generated on the fly from `colors` + `pattern` + `glyph` (see
 * <WorkArt/>), so the site looks complete before any real photography exists.
 * To use a real image, drop a file into `public/works/` and set `image:
 * "works/your-file.jpg"`. Everything else (CMS / API) can replace this array.
 */

export type WorkCategory = "ip" | "clay" | "apparel" | "goods";

export type WorkPattern = "stripes" | "dots" | "blob" | "grid" | "burst" | "scribble";

export type Work = {
  id: string;
  category: WorkCategory;
  name: { zh: string; en: string };
  tagline: { zh: string; en: string };
  price: number;
  /** [background, shapeA, shapeB] — brand palette token values. */
  colors: [string, string, string];
  pattern: WorkPattern;
  /** Big graphic mark for the generated poster placeholder. */
  glyph: string;
  /** Optional real image path relative to `public/` (e.g. "works/foo.jpg"). */
  image?: string;
};

export const works: Work[] = [
  {
    id: "ip-rage-kid",
    category: "ip",
    name: { zh: "暴走小孩 No.1", en: "Rage Kid No.1" },
    tagline: { zh: "永远在反抗的那个小孩", en: "The kid who never stops rebelling" },
    price: 89,
    colors: ["var(--color-magenta)", "var(--color-acid)", "var(--color-ink)"],
    pattern: "burst",
    glyph: "怒",
  },
  {
    id: "ip-quiet-monster",
    category: "ip",
    name: { zh: "闷声怪", en: "Quiet Monster" },
    tagline: { zh: "心里有话，说不出来", en: "So much to say, can't say it" },
    price: 99,
    colors: ["var(--color-electric)", "var(--color-cyan)", "var(--color-paper)"],
    pattern: "blob",
    glyph: "闷",
  },
  {
    id: "ip-overflow",
    category: "ip",
    name: { zh: "情绪喷喷", en: "Overflow" },
    tagline: { zh: "想法太多，藏不住", en: "Too many ideas to hide" },
    price: 109,
    colors: ["var(--color-orange)", "var(--color-blood)", "var(--color-ink)"],
    pattern: "scribble",
    glyph: "喷",
  },
  {
    id: "clay-stubborn",
    category: "clay",
    name: { zh: "倔泥人", en: "Stubborn One" },
    tagline: { zh: "每一只都不一样，手工留下的痕迹", en: "No two alike — the marks of the hand" },
    price: 168,
    colors: ["var(--color-acid)", "var(--color-ink)", "var(--color-magenta)"],
    pattern: "dots",
    glyph: "倔",
  },
  {
    id: "clay-soul-jar",
    category: "clay",
    name: { zh: "灵魂罐", en: "Soul Jar" },
    tagline: { zh: "把愤怒装进去", en: "A jar to hold the rage" },
    price: 158,
    colors: ["var(--color-purple)", "var(--color-acid)", "var(--color-paper)"],
    pattern: "stripes",
    glyph: "魂",
  },
  {
    id: "clay-clumsy",
    category: "clay",
    name: { zh: "笨拙的痕迹", en: "Clumsy Marks" },
    tagline: { zh: "笨拙也是一种真", en: "Clumsy is its own kind of real" },
    price: 138,
    colors: ["var(--color-cyan)", "var(--color-blood)", "var(--color-ink)"],
    pattern: "blob",
    glyph: "拙",
  },
  {
    id: "apparel-defiant-tee",
    category: "apparel",
    name: { zh: "叛逆 Tee", en: "Defiant Tee" },
    tagline: { zh: "穿上就知道，我和别人不一样", en: "Wear it and you know — I'm different" },
    price: 179,
    colors: ["var(--color-ink)", "var(--color-acid)", "var(--color-magenta)"],
    pattern: "grid",
    glyph: "叛",
  },
  {
    id: "apparel-rage-hoodie",
    category: "apparel",
    name: { zh: "妈见打卫衣", en: "Rage Hoodie" },
    tagline: { zh: "地下摇滚海报穿在身上", en: "An underground poster you can wear" },
    price: 199,
    colors: ["var(--color-magenta)", "var(--color-ink)", "var(--color-cyan)"],
    pattern: "burst",
    glyph: "打",
  },
  {
    id: "apparel-scarf",
    category: "apparel",
    name: { zh: "乱涂围巾", en: "Scribble Scarf" },
    tagline: { zh: "把情绪缠在脖子上", en: "Wrap the feeling round your neck" },
    price: 129,
    colors: ["var(--color-orange)", "var(--color-electric)", "var(--color-paper)"],
    pattern: "scribble",
    glyph: "乱",
  },
  {
    id: "goods-mug",
    category: "goods",
    name: { zh: "有意思马克杯", en: "Interesting Mug" },
    tagline: { zh: "每天都用，每天都不无聊", en: "Used daily, never boring" },
    price: 59,
    colors: ["var(--color-acid)", "var(--color-magenta)", "var(--color-ink)"],
    pattern: "dots",
    glyph: "趣",
  },
  {
    id: "goods-stickers",
    category: "goods",
    name: { zh: "叛逆贴纸包", en: "Defiance Sticker Pack" },
    tagline: { zh: "贴在任何不该贴的地方", en: "Stick it where it shouldn't go" },
    price: 19,
    colors: ["var(--color-cyan)", "var(--color-orange)", "var(--color-ink)"],
    pattern: "grid",
    glyph: "贴",
  },
  {
    id: "goods-tote",
    category: "goods",
    name: { zh: "灵魂帆布袋", en: "Soul Tote" },
    tagline: { zh: "装下你所有离谱的想法", en: "Carry all your ridiculous ideas" },
    price: 79,
    colors: ["var(--color-electric)", "var(--color-acid)", "var(--color-paper)"],
    pattern: "stripes",
    glyph: "装",
  },
];

export const categoryOrder: WorkCategory[] = ["ip", "clay", "apparel", "goods"];
