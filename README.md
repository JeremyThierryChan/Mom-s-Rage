# 妈见打 · Mom's Rage — Website

多元艺术融合品牌官网 / 作品集。
让不敢表达的人敢表达，让敢表达的人有地方表达。灵魂只有一个字：**真**。

A bilingual (中文 / English) portfolio site for the art brand **Mom's Rage**, built to be
fully static today and ready to grow a backend tomorrow.

## 技术栈 / Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** — bold, clashing, underground-poster styling
- **Framer Motion** — scroll reveals & motion
- Client-side **i18n** (中/英 toggle, persisted to `localStorage`) — stays 100% static
- Static export (`output: "export"`) → runs on **GitHub Pages _and_ Vercel**

## 本地开发 / Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Build a production static site:

```bash
npm run build      # outputs to ./out
```

## 部署 / Deployment

### Vercel (推荐 / recommended)

1. Push this repo to GitHub.
2. Import it on [vercel.com](https://vercel.com) — framework auto-detected as Next.js.
3. Deploy. No extra config needed.

When you add a backend later, remove `output: "export"` from `next.config.mjs` and Vercel
will run API routes / server components natively.

### GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`.

1. Push to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. The action builds with `GITHUB_PAGES=true` and the correct base path
   (`/<repo-name>`) and publishes automatically.

To build a Pages bundle locally:

```bash
GITHUB_REPO=<your-repo-name> npm run build:pages
```

> Using a custom domain (or a `<user>.github.io` root repo)? Drop a `CNAME` file in
> `public/` and remove the base-path env vars — the site then serves from `/`.

## 内容怎么改 / Editing content

Everything lives in the data layer so a future CMS/API can drop in cleanly:

| What | Where |
| --- | --- |
| All page copy (中 + 英) | `src/data/content.ts` |
| Portfolio works | `src/data/works.ts` |
| Colors, fonts, textures | `src/app/globals.css` (the `@theme` block) |

### 加真实作品图片 / Adding real work images

Work visuals are generated from `colors` + `pattern` + `glyph`, so the gallery looks
complete with zero photos. To use a real image:

1. Put the file in `public/works/` (e.g. `public/works/rage-kid.jpg`).
2. In `src/data/works.ts`, set `image: "works/rage-kid.jpg"` on that work.

## 未来后端 / Future backend

The “drop your idea” form (`src/components/Contact.tsx`) is already wired for a backend:

- **Now (static):** submissions are saved to `localStorage` (`momsrage.ideas`).
- **Later:** set `NEXT_PUBLIC_API_URL` and the form `POST`s to `<API_URL>/ideas`.

Suggested next steps when you build the backend:

1. Move to Vercel, remove `output: "export"`.
2. Add `src/app/api/ideas/route.ts` (or an external service) to receive submissions.
3. Set `NEXT_PUBLIC_API_URL` to your API base.
4. Optionally fetch `works` / `content` from a database or headless CMS instead of the
   static `src/data` files.

## 结构 / Structure

```
src/
  app/        layout, global styles, page composition
  components/ Nav, Hero, Story, Why, Soul, Works, Process, Partners, Promises, Contact, Footer
  data/       content.ts (bilingual copy), works.ts (portfolio)
  lib/        i18n.tsx (language context), config.ts (base path + API helpers)
```

灵魂只有一个字，真。
# Mom-s-Rage
