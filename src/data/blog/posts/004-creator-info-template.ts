import type { Post } from "../index";

export const post: Post = {
  slug: "004-creator-info-template",
  date: "2026-07-01",
  category: { zh: "创作者资源", en: "Creator Resources" },
  title: {
    zh: "创作者作品集信息收集表",
    en: "Creator Portfolio Info Collection Form",
  },
  excerpt: {
    zh: "想在妈见打上线自己的主页？这篇内容告诉你要填什么、图片怎么命名——点击按钮直接下载模版文件。",
    en: "Want your own page on Mom's Rage? This post covers exactly what to fill in and how to name your images — click the button to download the template directly.",
  },
  download: {
    label: { zh: "下载模版（.txt）", en: "Download template (.txt)" },
    href: "/downloads/creator-info-template.txt",
  },
  body: [
    {
      type: "p",
      text: {
        zh: "每一位加入妈见打的创作者，主页上线前都要走一遍同样的流程：填这份表，把作者信息和作品信息整理清楚，再把对应的图片打包发过来。表填得越完整，我们把内容放上网站的速度就越快，也越不容易出错。",
        en: "Every creator joining Mom's Rage goes through the same step before their page goes live: fill out this form, get your author info and work info organized, then send over the matching image files. The more complete the form, the faster (and more accurate) we can get your page up.",
      },
    },
    {
      type: "p",
      text: {
        zh: "感谢你愿意参与作品展示。请按照下面的格式填写信息，并将对应图片文件单独打包发送。",
        en: "Thanks for taking part. Fill in your info following the format below, and send the matching image files as a separate package.",
      },
    },

    { type: "h2", text: { zh: "一、作者信息", en: "1. Author Info" } },
    {
      type: "p",
      text: {
        zh: "基础信息：作者名称（中文）、作者英文名（如无可留空）、作者简介（中文）、作者简介（英文，如无可留空，我们可提供翻译服务）。",
        en: "Basics: author name (Chinese), author English name (leave blank if none), author bio (Chinese), author bio (English — leave blank and we'll translate it for you).",
      },
    },
    {
      type: "p",
      text: {
        zh: "社交平台账号（越多越好），请填写平台名称及账号链接或用户名。例如：Instagram、X（Twitter）、Facebook、YouTube、TikTok、小红书、Bilibili、微博、Behance、Dribbble、ArtStation、Pixiv、DeviantArt、Patreon、Gumroad、Etsy、淘宝、个人网站、其他。",
        en: "Social accounts (the more, the better) — platform name plus link or handle. For example: Instagram, X (Twitter), Facebook, YouTube, TikTok, Xiaohongshu, Bilibili, Weibo, Behance, Dribbble, ArtStation, Pixiv, DeviantArt, Patreon, Gumroad, Etsy, Taobao, personal website, other.",
      },
    },

    { type: "h2", text: { zh: "二、作品展示信息", en: "2. Work Info" } },
    {
      type: "p",
      text: {
        zh: "图片命名规则：请把图片文件按「作者英文名_作品名称_序号.jpg」命名，例如 JeremyChan_ABC文化_01.jpg、JeremyChan_ModernCity_01.jpg。不方便用英文的话，直接用中文也行，比如 ABC文化_01.jpg、ABC文化_02.jpg。图片名称是我们后台自动匹配作品信息的依据，请确保文件名和表里填的完全一致。",
        en: "Image naming rule: name each file \"EnglishName_WorkTitle_number.jpg\" — e.g. JeremyChan_ABC-Culture_01.jpg, JeremyChan_ModernCity_01.jpg. If English isn't convenient, Chinese works too, e.g. ABC文化_01.jpg, ABC文化_02.jpg. The filename is what our backend uses to auto-match a work to its info, so make sure it matches exactly what you write in the form.",
      },
    },
    {
      type: "p",
      text: {
        zh: "每一件作品需要填：作品名称（中文/英文）、对应图片文件名、作品介绍（中文/英文，英文留空我们可代为翻译）、作品类型（插画 / 摄影 / 平面设计 / 3D设计 / 雕塑 / 装置艺术 / 绘画 / 其他）、创作时间、创作工具或软件、是否允许转载展示。最少填一件，最多不限，第一件之后每件作品重复同样的字段即可。",
        en: "For each work, fill in: title (Chinese/English), matching image filenames, description (Chinese/English — leave English blank and we'll translate), medium (illustration / photography / graphic design / 3D / sculpture / installation / painting / other), date made, tools or software used, and whether reproduction for display is allowed. At least one work, no upper limit — just repeat the same fields for each additional piece.",
      },
    },
    {
      type: "p",
      text: {
        zh: "如果部分作品不需要单独介绍，只是纯展示，可以直接列一份「图片文件名 + 备注（可选）」的清单，不用逐件填写完整信息。",
        en: "If some pieces don't need individual write-ups and are just for display, you can list them as a simple \"filename + optional note\" set instead of filling out the full fields for each.",
      },
    },

    { type: "h2", text: { zh: "三、售卖作品信息（如有）", en: "3. Items for Sale (if any)" } },
    {
      type: "p",
      text: {
        zh: "每件商品需要填：商品名称（中文/英文）、对应图片文件名、商品介绍（中文/英文）、售价、货币单位（CNY / USD / EUR / JPY）、购买链接、库存状态（现货 / 接受预订 / 已售出 / 限量作品）。有几件填几件，模块可以重复使用。",
        en: "For each item: name (Chinese/English), matching image filenames, description (Chinese/English), price, currency (CNY / USD / EUR / JPY), purchase link, and stock status (in stock / pre-order / sold out / limited edition). Repeat this block for as many items as you have.",
      },
    },

    { type: "h2", text: { zh: "四、授权确认", en: "4. Rights Confirmation" } },
    {
      type: "p",
      text: {
        zh: "提交前请确认：你拥有提交作品的版权或合法展示授权；同意作品在网站中展示与宣传；同意网站对作者简介和作品介绍进行必要的排版调整；如英文内容为空，同意由网站方代为翻译。",
        en: "Before submitting, please confirm: you own the copyright or have legitimate rights to display the submitted work; you agree to have the work shown and promoted on the site; you agree the site may make necessary formatting adjustments to your bio and work descriptions; and if any English field is left blank, you agree we can translate it on your behalf.",
      },
    },
    {
      type: "p-link",
      before: {
        zh: "提交时请提供：填写完成的这份表、所有作品图片原文件、如有售卖作品请附购买链接或联系方式。表格可以点击「",
        en: "When you submit, please include: the completed form, the original image files for every work, and — if anything is for sale — a purchase link or contact method. You can ",
      },
      linkText: {
        zh: "直接下载",
        en: "download the template directly",
      },
      after: {
        zh: "」，填好之后发回给我们就行。",
        en: ", fill it in, and send it back to us.",
      },
      href: "/downloads/creator-info-template.txt",
    },
  ],
  author: "杰蒂陈",
  authorId: "jtc",
};
