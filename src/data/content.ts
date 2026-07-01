/**
 * Bilingual site copy. `zh` is the source-of-truth shape; `en` must match it.
 * Keeping all strings here means a future CMS / API can replace this module
 * without touching components.
 */

const zh = {
  meta: {
    title: "妈见打 Mom's Rage — 多元艺术融合品牌",
    description:
      "妈见打 Mom's Rage 是一个多元艺术融合品牌。让不敢表达的人敢表达，让敢表达的人有地方表达。灵魂只有一个字：真。",
  },
  nav: {
    story: "故事",
    why: "为什么",
    soul: "灵魂",
    works: "作品",
    process: "怎么做",
    partners: "合伙人",
    blog: "日志",
    contact: "联系",
    submitIdea: "加入群聊",
    switchLang: "EN",
  },
  hero: {
    kicker: "多元艺术融合品牌 / MULTI-ART BRAND",
    brandCn: "妈见打",
    brandEn: "MOM'S RAGE",
    tagline: "让不敢表达的人敢表达，让敢表达的人有地方表达。",
    subline: "不讨好 · 不迎合 · 不规矩。只做你心里真实长出来的东西。",
    soulLabel: "灵魂只有一个字",
    soulWord: "真",
    ctaWorks: "看作品",
    ctaIdea: "说出你的想法",
    scroll: "往下滚 · SCROLL",
  },
  marquee: [
    "妈见打",
    "灵魂发声",
    "有意思",
    "小众不小声",
    "艺术不被定义",
    "MOM'S RAGE",
    "REAL",
  ],
  story: {
    kicker: "01 — 品牌故事",
    title: "为什么叫「妈见打」",
    lead: "“再见一次，打一次。” 但她从来没停下来过。",
    body: [
      "创始人从小喜欢搞艺术，喜欢穿风格强烈的衣服，戴有个性的饰品。可家里只看重成绩，中学老师反对，高中老师反对，成年以后还是被限制。每次穿上喜欢的衣服会被骂，戴上喜欢的饰品也会被骂。",
      "即便这样，她也没有变成听话的大人——而是把那份愤怒，变成了作品，变成了这个品牌。",
    ],
    layersTitle: "三层意思",
    layers: [
      {
        num: "壹",
        title: "决心",
        body: "就算妈妈打，也要追求艺术。没什么拦得住。",
      },
      {
        num: "贰",
        title: "初心",
        body: "我们做的就是那种「妈妈知道会打人」的小众艺术。不乖、不讨好、不迎合标准答案。",
      },
      {
        num: "叁",
        title: "愤怒",
        body: "Mom's Rage——那个永远在反抗、永远坚持做自己的孩子长大了。她把愤怒变成了创造。",
      },
    ],
  },
  why: {
    kicker: "02 — 为什么要有这个品牌",
    title: "想象力，正在被磨平",
    lead: "不是天生没有。是被标准答案磨平，被「听话」磨平，被无数句「别搞那些没用的」磨平。",
    personasTitle: "我们看见两种人",
    personas: [
      {
        tag: "TYPE A",
        title: "心里有，但拿不出来",
        age: "18–30 岁",
        body: "生活按部就班，不开心、不自由、不敢做自己。心里其实有东西，但像被什么堵住了，出不来。",
        gives: "我们给的是：在无趣的生活里，一次叛逆的机会。让你感觉自己还活着，还有血有肉。",
      },
      {
        tag: "TYPE B",
        title: "想法太多，缺一个出口",
        age: "18–30 岁",
        body: "生活方式自由，随时都在表达。但情绪和想法是喷涌状态的，需要一个真正的出口，需要被看见、被共鸣。",
        gives: "我们给的是：让喷涌的情绪和想法，变成真实的、能拿在手里的作品。",
      },
    ],
    angerTitle: "最让我们愤怒的一句话",
    angerQuote: "“不行，这个太小众了，没人喜欢。”",
    angerBody:
      "主流艺术品牌太商业，不注重灵魂表达；真正有创意的独立作品又被打成小众，得不到推广。我们想打破这道壁垒——让每一种表达，都有它该有的位置。",
    timeline: {
      title: '想象力是怎么消失的',
      stages: [
        { label: '小学', text: '「你这画的什么？」——从第一句否定开始。' },
        { label: '中学', text: '「别搞那些没用的，先把成绩搞好。」' },
        { label: '大学', text: '「学艺术出来能干嘛？不如学个有用的专业。」' },
        { label: '工作', text: '「这不就是爱好吗，上班了哪有时间搞这个。」' },
      ],
    },
    contrast: {
      title: '他们在做什么，我们在做什么',
      them: '主流品牌',
      us: '妈见打',
      rows: [
        { them: '追热点，做当下好卖的', us: '追真实，做创作者真心长出来的' },
        { them: '风格迎合市场口味', us: '风格跟着创作者走' },
        { them: '流水线生产，复制成功公式', us: '限量共创，每件都有创作者的体温' },
        { them: '灵魂是商业逻辑', us: '灵魂是创作者的痕迹' },
      ],
    },
  },
  soul: {
    kicker: "03 — 品牌的灵魂",
    title: "唤醒被日常磨平的创造力",
    mission:
      "我们想成为开创艺术品领域的先锋，也想做那个长期推广小众文化的人——一直推下去，不是一阵风。",
    principles: [
      {
        cn: "灵魂发声",
        en: "SOUL FIRST",
        body: "不迎合、不套路。每一件作品都要看得出创作者的痕迹，哪怕那个痕迹是笨拙的。",
      },
      {
        cn: "艺术无界",
        en: "NO BORDERS",
        body: "打破形式壁垒。绘画、泥塑、IP、服装、装置、声音——所有艺术形式在一起碰撞。",
      },
      {
        cn: "小众不小",
        en: "NICHE ≠ SMALL",
        body: "不因为小众就觉得羞耻。每一种真心表达，都值得被看见、被传播。",
      },
      {
        cn: "叛逆不灭",
        en: "STAY DEFIANT",
        body: "就算被反对，也要坚持自己觉得对的事。这是品牌从出生就带着的基因。",
      },
    ],
    soulLead: "如果只能用一个词概括这个品牌的灵魂——",
    soulWord: "真",
    soulTail: "真实的表达，真实的情绪，真实的自己。没有滤镜。",
    manifesto: {
      title: '我们相信',
      items: [
        '每一件作品都应该有创作者的体温',
        '「太小众了」是最没底气的拒绝',
        '笨拙的真诚比精致的套路更有力量',
        '愤怒也是一种创造力',
        '你心里那个离谱的想法，值得被做出来',
        '艺术不需要被定义，只需要被感受',
      ],
    },
    realExamples: {
      title: '什么叫「真」',
      items: [
        { label: '泥塑', text: '用手把情绪捏出来。歪歪扭扭，没有两只一样——那才是真的。' },
        { label: '插画', text: '把叛逆画出来。每一笔都是态度，不讨好任何人的口味。' },
        { label: '服装', text: '穿上它，你就知道自己和别人不一样——那种感觉，就是真的。' },
      ],
    },
  },
  works: {
    kicker: "04 — 作品",
    title: "你心里长出来的东西",
    lead: "别人卖的是好看的东西。我们卖的是你心里真实长出来的东西。价格从 ¥10 到 ¥200，门槛可以低，但灵魂不低。",
    filterAll: "全部",
    categories: {
      ip: "原创 IP",
      clay: "泥塑",
      apparel: "服装",
      goods: "周边",
      mix: "多元",
    },
    priceFrom: "起",
    by: "创作者",
    notForSale: "作品 · 非卖",
    placeholderNote: "作品视觉为占位演示 — 把真实图片放进 /public/works/ 即可替换。",
  },
  creators: {
    kicker: "06 · 名单",
    title: "认识这些不听话的人",
    lead: "把头像点开，走进他们的世界——作品集和在售商品，都在里面。",
    hint: "悬停 · 点击进入",
    backHome: "← 回首页",
    allCreators: "全部合伙人",
    worksTitle: "作品集",
    shopTitle: "在售商品",
    bioTitle: "关于",
    notForSale: "作品 · 非卖",
    priceFrom: "起",
    buy: "我想要这件",
    emptyShop: "暂时没有在售商品 — 但作品都在上面。",
    moreTitle: "其他合伙人",
    worksCount: "件作品",
    outfitTitle: "穿搭展示",
  },
  process: {
    kicker: "05 — 怎么做",
    title: "从一个离谱的想法，到属于你的东西",
    steps: [
      {
        num: '01',
        title: "大胆说出你的想法",
        body: "无论多离谱都可以。越离谱，我们越兴奋。",
        details: [
          '可以是一段话、一张图、一个词、一种心情',
          '不需要懂设计，不需要会画画',
          '越模糊越好——模糊说明还没被标准答案污染',
        ],
      },
      {
        num: '02',
        title: "和你一起落地",
        body: "设计师和艺术家跟你一起，把脑子里的东西变成真实的、摸得到的作品。",
        details: [
          '团队里有设计师、艺术家、手工创作者',
          '我们来问问题，把模糊的感觉变清晰',
          '你可以全程参与，也可以只说结果',
        ],
      },
      {
        num: '03',
        title: "拿到只属于你的那件",
        body: "可能是一幅画、一只玩偶、一个你每天都用的杯子。重要的是——它是为你长出来的。",
        details: [
          '实体作品为主：印刷品、手工品、服装、摆件',
          '真的只属于你的版本，不会复制给别人',
          '如果你喜欢，可以一起把它推出去',
        ],
      },
    ],
    faq: {
      title: '常见问题',
      items: [
        {
          q: '多长时间能做完？',
          a: '取决于作品的复杂度，一般 1–4 周。我们会提前告诉你预期时间，不让你等得不知道为什么。',
        },
        {
          q: '价格大概是多少？',
          a: '从 ¥10 的小件到更复杂的定制都有。不同创作者定价不同，聊完需求后我们会告诉你。',
        },
        {
          q: '我不懂设计、没有艺术基础怎么办？',
          a: '完全没问题。你只需要有感觉、有想法。我们负责把它变成作品——这就是我们存在的意义。',
        },
        {
          q: '成品是什么形式？',
          a: '实体商品为主：印刷品、手工品、服装、摆件等。具体形式在沟通后确定，聊一聊就知道了。',
        },
      ],
    },
    cta: '现在就说出你的想法',
  },
  partners: {
    kicker: "06 — 同频艺术合伙人",
    title: "我们不找技法最娴熟的人",
    lead: "公开邀请制。我们找的是真心热爱艺术、想发展个人风格、不迎合不套路、灵魂自由、人格独立的人。",
    traitsTitle: "共同特质",
    traits: ["热爱元艺术", "人格独立", "灵魂自由", "比一般人更开朗一点", "愿意和人碰撞想法"],
    cta: "成为合伙人",
  },
  promises: {
    kicker: "07 — 我们承诺",
    title: "我们承诺什么",
    items: [
      "每一件作品都有创作者的灵魂痕迹，不做流水线产品。",
      "不因为小众就退缩——你不敢做的表达，我们来做。",
      "价格不设高门槛，¥10 也能买到真正的创意。",
      "永远欢迎离谱的想法，越离谱我们越兴奋。",
      "不做讨好所有人的品牌，只做和同频的人共振的品牌。",
    ],
  },
  contact: {
    kicker: "08 — 找到我们",
    title: "加入我们的圈子",
    lead: "进抖音群，和同频的人在一起。有想法直接在群里聊。",
    groupPlatform: "抖音群聊",
    groupName: "Mom's Rage最强外援",
    groupId: "群号：558288889595",
    membersTitle: "群管理",
    members: [
      { role: "群主", name: "Mom's Rage", id: "40503823937" },
      { role: "管理员", name: "杰蒂陈", id: "JeremyTC" },
      { role: "管理员", name: "刘抖音", id: "843725435" },
    ],
    wechat: {
      groupPlatform: "微信群聊",
      groups: ["Mom's Rage妈见打微信分部", "Mom's Rage网站信息收集"],
      joinNote: "加管理员微信，说明想进哪个群",
      membersTitle: "群管理",
      members: [
        { role: "管理员", name: "古", id: "yakun0028" },
        { role: "管理员", name: "杰蒂陈", id: "JeremyThierryChan" },
        { role: "管理员", name: "刘微信", id: "yj69803217" },
      ],
    },
  },
  blog: {
    kicker: "日志",
    title: "动态",
    lead: "品牌在做什么、合伙人访谈、幕后故事——有话说就写，没话说就空着。",
    readMore: "继续读",
    backToBlog: "回到日志",
    empty: "还没有文章，很快会有的。",
    filterAll: "全部",
  },
  footer: {
    tagline: "那个让不敢表达的人，敢表达的牌子。",
    soulLabel: "灵魂",
    soulWord: "真",
    keywords: ["妈见打", "灵魂发声", "有意思", "小众不小声", "艺术不被定义"],
    rights: "保留所有真心。",
    backToTop: "回到顶部",
  },
};

export type Dict = typeof zh;

const en: Dict = {
  meta: {
    title: "Mom's Rage 妈见打 — Multi-Art Brand",
    description:
      "Mom's Rage is a multi-disciplinary art brand. For those too afraid to express — and those bursting to. The soul is one word: REAL.",
  },
  nav: {
    story: "Story",
    why: "Why",
    soul: "Soul",
    works: "Works",
    process: "Process",
    partners: "Partners",
    blog: "Journal",
    contact: "Contact",
    submitIdea: "Join the group",
    switchLang: "中",
  },
  hero: {
    kicker: "MULTI-ART BRAND / 多元艺术融合品牌",
    brandCn: "妈见打",
    brandEn: "MOM'S RAGE",
    tagline: "For those too afraid to express — and those bursting to.",
    subline: "No pleasing. No pandering. No rules. Only what truly grows from inside you.",
    soulLabel: "The soul is one word",
    soulWord: "真",
    ctaWorks: "See the works",
    ctaIdea: "Drop your idea",
    scroll: "SCROLL · 往下滚",
  },
  marquee: [
    "MOM'S RAGE",
    "SOUL FIRST",
    "INTERESTING",
    "NICHE, NOT QUIET",
    "ART, UNDEFINED",
    "妈见打",
    "REAL",
  ],
  story: {
    kicker: "01 — The Story",
    title: "Why “Mom's Rage”",
    lead: "“Wear it again and you'll get it again.” She never stopped.",
    body: [
      "The founder loved art from a young age — bold clothes, statement accessories. But home only valued grades. Teachers in middle school said no. High school said no. Even as an adult, she was held back. Every time she wore what she loved, she got yelled at. Every accessory, a fight.",
      "And still — she never became the obedient adult. She turned that rage into work, and the work into this brand.",
    ],
    layersTitle: "Three meanings",
    layers: [
      {
        num: "I",
        title: "Resolve",
        body: "Even if Mom hits — chase the art anyway. Nothing can stop it.",
      },
      {
        num: "II",
        title: "Intent",
        body: "We make exactly the kind of niche art Mom would smack you for. Not obedient, not pleasing, not the standard answer.",
      },
      {
        num: "III",
        title: "Rage",
        body: "Mom's Rage — the kid who always rebelled, always stayed herself, grew up. She turned the anger into creation.",
      },
    ],
  },
  why: {
    kicker: "02 — Why we exist",
    title: "Imagination, being sanded down",
    lead: "Not born without it. Sanded down by standard answers, by “be obedient,” by a thousand “stop wasting your time.”",
    personasTitle: "We see two kinds of people",
    personas: [
      {
        tag: "TYPE A",
        title: "It's inside — it just won't come out",
        age: "Ages 18–30",
        body: "Life on autopilot. Unhappy, unfree, afraid to be themselves. There's something inside, but it's stuck, like something's blocking it.",
        gives: "We give: one chance to rebel inside a dull life. To feel alive again — flesh and blood.",
      },
      {
        tag: "TYPE B",
        title: "Too many ideas, no outlet",
        age: "Ages 18–30",
        body: "Free, always expressing. But the feelings and ideas come gushing out — they need a real outlet, to be seen, to resonate.",
        gives: "We give: a way to turn that flood of emotion and ideas into something real you can hold in your hand.",
      },
    ],
    angerTitle: "The line that enrages us most",
    angerQuote: "“No. Too niche. Nobody likes that.”",
    angerBody:
      "Mainstream art brands are too commercial, with no soul. Truly creative independent work gets branded “niche” and never reaches anyone. We want to break that wall — so every form of expression gets the place it deserves.",
    timeline: {
      title: 'Where imagination disappears',
      stages: [
        { label: 'Primary school', text: 'What is this even supposed to be? — The first rejection.' },
        { label: 'High school', text: 'Stop wasting time on that. Focus on your grades.' },
        { label: 'University', text: 'What are you going to do with art? Study something useful.' },
        { label: 'Work', text: "That's just a hobby. You're working now — no time for that." },
      ],
    },
    contrast: {
      title: 'What they do. What we do.',
      them: 'Mainstream brands',
      us: "Mom's Rage",
      rows: [
        { them: 'Chase trends, make what sells now', us: 'Chase truth, make what genuinely grows from inside' },
        { them: 'Style follows market taste', us: 'Style follows the creator' },
        { them: 'Assembly-line, copy the formula', us: "Limited co-creation, every piece has the maker's warmth" },
        { them: 'Soul is commercial logic', us: "Soul is the maker's fingerprint" },
      ],
    },
  },
  soul: {
    kicker: "03 — The Soul",
    title: "Reawaken the creativity daily life sanded down",
    mission:
      "We want to pioneer the art-object space — and be the ones who keep pushing niche culture for the long haul. Not a passing gust.",
    principles: [
      {
        cn: "灵魂发声",
        en: "SOUL FIRST",
        body: "No pandering, no formulas. Every piece must show the maker's fingerprint — even a clumsy one.",
      },
      {
        cn: "艺术无界",
        en: "NO BORDERS",
        body: "Break the walls between forms. Painting, clay, IP, apparel, installation, sound — all colliding together.",
      },
      {
        cn: "小众不小",
        en: "NICHE ≠ SMALL",
        body: "No shame in being niche. Every honest expression deserves to be seen and spread.",
      },
      {
        cn: "叛逆不灭",
        en: "STAY DEFIANT",
        body: "Even when opposed, stand by what you believe is right. It's in the brand's DNA from birth.",
      },
    ],
    manifesto: {
      title: 'We believe',
      items: [
        "Every piece should carry the maker's warmth",
        'Too niche is the most cowardly rejection there is',
        'Clumsy sincerity hits harder than polished formula',
        'Rage is a form of creativity',
        'That ridiculous idea in your head deserves to be made',
        "Art doesn't need to be defined — only felt",
      ],
    },
    realExamples: {
      title: 'What real looks like',
      items: [
        { label: 'Clay', text: "Squeeze emotion out with your hands. Crooked, none the same — that's real." },
        { label: 'Illustration', text: "Draw the rebellion. Every line is a stance. Not made to please anyone's taste." },
        { label: 'Apparel', text: "Put it on and you know you're different. That feeling — that's real." },
      ],
    },
    soulLead: "If one word had to capture the brand's soul —",
    soulWord: "真",
    soulTail: "Real expression. Real emotion. Real you. No filter.",
  },
  works: {
    kicker: "04 — Works",
    title: "The thing that grows from inside you",
    lead: "Others sell pretty things. We sell what truly grows from inside you. From ¥10 to ¥200 — the price can be low, the soul never is.",
    filterAll: "All",
    categories: {
      ip: "Original IP",
      clay: "Clay",
      apparel: "Apparel",
      goods: "Goods",
      mix: "Mixed",
    },
    priceFrom: "from",
    by: "by",
    notForSale: "Not for sale",
    placeholderNote: "Visuals are placeholders — drop real images into /public/works/ to replace.",
  },
  creators: {
    kicker: "06 · THE ROSTER",
    title: "Meet the disobedient ones",
    lead: "Tap a face and step into their world — their portfolio and what's for sale, all inside.",
    hint: "Hover · tap to enter",
    backHome: "← Home",
    allCreators: "All partners",
    worksTitle: "Portfolio",
    shopTitle: "For sale",
    bioTitle: "About",
    notForSale: "Not for sale",
    priceFrom: "from",
    buy: "I want this one",
    emptyShop: "Nothing for sale right now — but the work is all above.",
    moreTitle: "Other partners",
    worksCount: "works",
    outfitTitle: "Style Diary",
  },
  process: {
    kicker: "05 — Process",
    title: "From a ridiculous idea to something that's yours",
    steps: [
      {
        num: "01",
        title: "Say your idea out loud",
        body: "However ridiculous. The more ridiculous, the more excited we get.",
        details: [
          'A sentence, a photo, a word, a feeling — anything works',
          'No design skills needed. No art background required.',
          "The vaguer the better — vague means it hasn't been sanded down yet",
        ],
      },
      {
        num: "02",
        title: "We build it with you",
        body: "Designers and artists work with you to turn what's in your head into something real you can touch.",
        details: [
          'The team includes designers, artists, and handcraft makers',
          'We ask questions to sharpen the blur into something clear',
          'You can be hands-on the whole way, or just tell us the outcome',
        ],
      },
      {
        num: "03",
        title: "Get the one that's only yours",
        body: "Maybe a painting, a doll, a cup you use every day. What matters: it grew for you.",
        details: [
          'Physical works: prints, handmade, apparel, objects',
          "Truly yours — we don't duplicate it for someone else",
          'If you love it, we can push it out into the world together',
        ],
      },
    ],
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'How long does it take?',
          a: "Depends on complexity — usually 1–4 weeks. We'll tell you the expected timeline upfront so you're never left wondering.",
        },
        {
          q: 'How much does it cost?',
          a: "From ¥10 for small pieces to more for complex commissions. Pricing varies by creator — we'll quote after we understand what you need.",
        },
        {
          q: 'What if I have no design or art background?',
          a: "Completely fine. You just need a feeling and an idea. We handle turning it into a piece — that's exactly why we exist.",
        },
        {
          q: 'What form does the final piece take?',
          a: 'Primarily physical: prints, handmade goods, apparel, objects. Digital versions depend on the project — chat with us to find out.',
        },
      ],
    },
    cta: 'Say your idea out loud — right now',
  },
  partners: {
    kicker: "06 — Aligned art partners",
    title: "We don't look for the most skilled",
    lead: "Open invitation. We look for people who truly love art, want their own style, refuse to pander, with a free soul and an independent mind.",
    traitsTitle: "Shared traits",
    traits: [
      "Love meta-art",
      "Independent mind",
      "Free soul",
      "A little more open than most",
      "Up for clashing ideas",
    ],
    cta: "Become a partner",
  },
  promises: {
    kicker: "07 — Our promises",
    title: "What we promise",
    items: [
      "Every piece carries the maker's soul. No assembly-line products.",
      "We won't back down for being niche — the expression you're afraid of, we'll make.",
      "No high price barrier. ¥10 can still buy real creativity.",
      "Ridiculous ideas always welcome. The wilder, the better.",
      "We won't be a brand for everyone — only one that resonates with the aligned.",
    ],
  },
  contact: {
    kicker: "08 — Find us",
    title: "Join our circle",
    lead: "Join the Douyin group and be around aligned people. Drop your ideas right in the chat.",
    groupPlatform: "Douyin Group Chat",
    groupName: "Mom's Rage最强外援",
    groupId: "Group ID: 558288889595",
    membersTitle: "Admins",
    members: [
      { role: "Owner", name: "Mom's Rage", id: "40503823937" },
      { role: "Admin", name: "杰蒂陈", id: "JeremyTC" },
      { role: "Admin", name: "刘抖音", id: "843725435" },
    ],
    wechat: {
      groupPlatform: "WeChat Group Chat",
      groups: ["Mom's Rage妈见打微信分部", "Mom's Rage网站信息收集"],
      joinNote: "Add an admin on WeChat and say which group you want to join",
      membersTitle: "Admins",
      members: [
        { role: "Admin", name: "古", id: "yakun0028" },
        { role: "Admin", name: "杰蒂陈", id: "JeremyThierryChan" },
        { role: "Admin", name: "刘微信", id: "yj69803217" },
      ],
    },
  },
  blog: {
    kicker: "Journal",
    title: "Updates",
    lead: "What we're building, creator interviews, behind-the-scenes — we write when we have something to say.",
    readMore: "Read more",
    backToBlog: "Back to journal",
    empty: "No posts yet — soon.",
    filterAll: "All",
  },
  footer: {
    tagline: "The brand that makes the silenced speak.",
    soulLabel: "Soul",
    soulWord: "真",
    keywords: ["MOM'S RAGE", "SOUL FIRST", "INTERESTING", "NICHE NOT QUIET", "ART UNDEFINED"],
    rights: "All sincerity reserved.",
    backToTop: "Back to top",
  },
};

export const content = { zh, en } as const;
