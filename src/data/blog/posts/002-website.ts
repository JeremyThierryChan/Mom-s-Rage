import type { Post } from "../index";

export const post: Post = {
  slug: "002-website",
  date: "2026-06-26",
  category: { zh: "品牌动态", en: "Brand News" },
  title: {
    zh: "网站开始做了",
    en: "The Website Has Started",
  },
  excerpt: {
    zh: "一个让合伙人说话、让作品被看见的地方，正在从零搭起来。",
    en: "A place for partners to speak and work to be seen — being built from scratch.",
  },
  body: [
    {
      type: "p",
      text: {
        zh: "在这之前，妈见打的存在主要靠微信群和朋友圈。合伙人的作品散在各自的社交账号上，品牌本身没有一个统一的落点。这不太对——一个认真做事的品牌，应该有自己的地方。",
        en: "Before this, Mom's Rage existed mostly through WeChat groups and Moments. Partners' work was scattered across their own social accounts, and the brand itself had no single landing point. That didn't feel right — a brand that takes itself seriously should have its own home.",
      },
    },
    {
      type: "p",
      text: {
        zh: "所以网站从今天开始搭。目标很简单：把合伙人的作品整理好，说清楚品牌是什么，给想进来的人一个入口。不求花哨，求真实。",
        en: "So the website starts today. The goal is simple: organize the partners' work, be clear about what the brand is, and give people who want in a place to enter. Not flashy — just real.",
      },
    },
    {
      type: "h2",
      text: {
        zh: "这个网站会有什么",
        en: "What this site will have",
      },
    },
    {
      type: "p",
      text: {
        zh: "每一个合伙人都会有自己的页面，按他们的风格定制——不是统一模板套出来的，是真的为每个人做的。品牌的故事、理念、合作方式，也都会放在这里。再往后，还会有这个日志。",
        en: "Every partner will have their own page, designed around their style — not a generic template, but something made for each person. The brand's story, philosophy, and how to work with us will all live here too. And eventually, this journal.",
      },
    },
    {
      type: "p",
      text: {
        zh: "边做边上线。现在看到的不是最终版，但每一个版本都是认真的。",
        en: "We'll launch as we build. What you see now isn't the final version — but every version is genuine.",
      },
    },
  ],
  author: "Mom's Rage",
};
