import type { Post } from "../index";

export const post: Post = {
  slug: "001-welcome",
  date: "2026-06-29",
  category: { zh: "品牌动态", en: "Brand News" },
  title: {
    zh: "妈见打，正式开始说话了",
    en: "Mom's Rage Is Finally Speaking Up",
  },
  excerpt: {
    zh: "我们一直在做，从来没停下来说过自己是什么。今天起，这里是我们说话的地方。",
    en: "We've been making things all along — we just never stopped to explain ourselves. Starting today, this is where we talk.",
  },
  body: [
    {
      type: "p",
      text: {
        zh: "妈见打从来不是一个喜欢自我介绍的品牌。品牌的逻辑是：先做，做出来了，别人自然看得见。但做着做着，我们意识到有些事情光靠作品说不清楚——比如为什么选这个合伙人，比如一件作品背后的来龙去脉，比如我们踩过的坑，和一些只有在聊天里才会冒出来的想法。",
        en: "Mom's Rage was never a brand that liked introducing itself. The logic was: make things first, and people will see them. But somewhere along the way, we realized some things can't be explained through work alone — like why we chose a particular partner, the story behind a piece, the mistakes we've made, and the ideas that only come out in conversation.",
      },
    },
    {
      type: "p",
      text: {
        zh: "所以这里诞生了。不是公告栏，不是新闻稿，不是营销文章。就是我们说话的地方。",
        en: "So this was born. Not a bulletin board, not a press release, not a marketing piece. Just a place where we talk.",
      },
    },
    {
      type: "h2",
      text: {
        zh: "这里会有什么",
        en: "What you'll find here",
      },
    },
    {
      type: "p",
      text: {
        zh: "品牌动态——新合伙人加入、新作品上线、我们在做什么、准备做什么。访谈记录——我们会和合伙人认真聊一次，把那些只有在聊天里才会说的东西整理出来。幕后故事——一件作品是怎么来的，一个决定是怎么做的，有时候也会聊聊我们觉得做得不好的地方。",
        en: "Brand updates — new partners joining, new works dropping, what we're doing and what we're planning. Interviews — we sit down with our partners and pull out the things they'd only say in conversation. Behind-the-scenes — how a piece came to be, how a decision got made, and sometimes, where we think we got it wrong.",
      },
    },
    {
      type: "quote",
      text: {
        zh: "让不敢表达的人敢表达，让敢表达的人有地方表达。",
        en: "For those too afraid to express — and those bursting to.",
      },
      attr: { zh: "妈见打品牌理念", en: "Mom's Rage brand mission" },
    },
    {
      type: "p",
      text: {
        zh: "没有固定的更新频率。有话说就更新，没话说就不硬撑。你可以把这里理解成我们的笔记本——有时候密密麻麻，有时候空着。",
        en: "No fixed update schedule. We write when we have something to say, and we don't force it when we don't. Think of this as our notebook — sometimes full, sometimes blank.",
      },
    },
  ],
  author: "Mom's Rage",
};
