import type { Post } from "../index";

export const post: Post = {
  slug: "003-whitepaper",
  date: "2026-06-23",
  category: { zh: "品牌动态", en: "Brand News" },
  title: {
    zh: "白皮书写完了",
    en: "The Brand Whitepaper Is Done",
  },
  excerpt: {
    zh: "把品牌是什么、为什么这么做、接下来要做什么，第一次完整地写下来。",
    en: "For the first time, we wrote down what this brand is, why we're doing it, and where it's going.",
  },
  body: [
    {
      type: "p",
      text: {
        zh: "做品牌最难的一件事，是把脑子里那些说不清楚的东西变成能给别人看的文字。白皮书就是干这个用的。不是对外宣传，是对内把事情讲明白——我们到底在做什么，我们认为艺术应该怎么存在，合伙人体系是怎么运作的，以后想去哪里。",
        en: "The hardest part of building a brand is turning what's in your head into something others can read. That's what the whitepaper is for. Not external publicity — internal clarity. What exactly we're doing, how we think art should exist, how the partner system works, and where we want to go.",
      },
    },
    {
      type: "p",
      text: {
        zh: "写这个的过程本身就是一次梳理。很多之前只是直觉的东西，写下来才知道自己真的是这么想的。也有一些写到一半发现不对，改了又改。",
        en: "Writing it was itself a process of untangling. A lot of things we'd only felt intuitively — writing them down confirmed that we really did believe them. And some things, halfway through, turned out to be wrong, and we revised them again and again.",
      },
    },
    {
      type: "h2",
      text: {
        zh: "白皮书里写了什么",
        en: "What's in the whitepaper",
      },
    },
    {
      type: "p",
      text: {
        zh: "品牌的起点和理由。合伙人体系的逻辑——为什么不是雇员、不是KOL、不是寄售关系，而是合伙人。我们对「艺术品牌」这件事的理解，和我们不想成为什么。还有一些关于未来的想法，现在说出来可能太早，但不写下来又觉得不踏实。",
        en: "Where the brand started and why it exists. The logic of the partner system — why not employees, not influencers, not consignment, but partners. Our understanding of what an 'art brand' even means, and what we don't want to become. And some thoughts about the future that might be too early to say out loud, but feel unstable left unwritten.",
      },
    },
    {
      type: "quote",
      text: {
        zh: "不讨好，不迎合，不规矩。只做你心里真实长出来的东西。",
        en: "No pandering, no compromise, no rules. Only what genuinely grows from inside you.",
      },
      attr: { zh: "妈见打白皮书", en: "Mom's Rage Brand Whitepaper" },
    },
    {
      type: "p",
      text: {
        zh: "白皮书暂时不对外公开，但它是我们做所有决定的底层文件。合伙人加入之前会读，品牌方向有争议的时候会回来翻。",
        en: "The whitepaper isn't public for now, but it's the foundational document behind every decision we make. Partners read it before joining. When there's disagreement about direction, we come back to it.",
      },
    },
  ],
  author: "Mom's Rage",
};
