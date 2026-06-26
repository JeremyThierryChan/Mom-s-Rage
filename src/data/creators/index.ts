/**
 * Creator registry.
 *
 * ── Adding a new creator ──────────────────────────────────────────────────
 *  1. mkdir src/data/creators/<slug>/
 *  2. Create src/data/creators/<slug>/index.ts  (copy any existing one)
 *  3. Add one import line in the "Data registry" block below
 *  4. Add creator + works to the arrays at the bottom
 *
 * ── Custom page layout ────────────────────────────────────────────────────
 *  By default every creator uses <CreatorDetail> (the shared layout).
 *  To give a creator their own unique page design:
 *  1. Create src/data/creators/<slug>/page.tsx
 *     – must export a default React component that accepts `{ id: string }`
 *  2. Import it and add it to PAGE_REGISTRY below
 */

export type { Creator, Work, WorkCategory, WorkPattern } from "./_types";
import type { ComponentType } from "react";
import type { Creator, Work, WorkCategory } from "./_types";

// ── Data registry ─────────────────────────────────────────────────────────────
import { creator as akuang,   works as akuangWorks   } from "./akuang";
import { creator as niijiang, works as niijiangWorks } from "./niijiang";
import { creator as fangu,    works as fanguWorks    } from "./fangu";
import { creator as xiaoguai, works as xiaoguaiWorks } from "./xiaoguai";
import { creator as zhenzhen, works as zhenzhenWorks } from "./zhenzhen";
import { creator as dudu,     works as duduWorks     } from "./dudu";
import { creator as hunhun,   works as hunhunWorks   } from "./hunhun";
import { creator as xiaobai,  works as xiaobaiWorks  } from "./xiaobai";
import { creator as dianying, works as dianyingWorks } from "./dianying";
import { creator as lengdan,  works as lengdanWorks  } from "./lengdan";
// ── End data registry ─────────────────────────────────────────────────────────

// ── Page layout registry ──────────────────────────────────────────────────────
// Only list creators who have a custom page.tsx in their folder.
// Everyone else automatically gets the default <CreatorDetail> layout.
import AkuangPage   from "./akuang/page";
import NiijiangPage from "./niijiang/page";
import ZhenzhenPage from "./zhenzhen/page";
import FanguPage    from "./fangu/page";
import XiaoguaiPage from "./xiaoguai/page";
import DuduPage     from "./dudu/page";
import HunhunPage   from "./hunhun/page";
import XiaobaiPage  from "./xiaobai/page";
import DianyingPage from "./dianying/page";
import LengdanPage  from "./lengdan/page";

const PAGE_REGISTRY: Partial<Record<string, ComponentType<{ id: string }>>> = {
  akuang:   AkuangPage,   // Editorial / 杂志双栏
  niijiang: NiijiangPage, // Zine / 地下拼贴
  zhenzhen: ZhenzhenPage, // Monolith / 黑色纪念碑
  fangu:    FanguPage,    // Blackout Poster / 夜店海报
  xiaoguai: XiaoguaiPage, // Blueprint Lab / 产品说明书
  dudu:     DuduPage,     // Candy Store / 糖果屋
  hunhun:   HunhunPage,   // Brutalist / 粗野宣言
  xiaobai:  XiaobaiPage,  // Risograph / 孔版印刷
  dianying: DianyingPage, // Film Strip / 胶片档案
  lengdan:  LengdanPage,  // Terminal / 终端输出
};
// ── End page layout registry ──────────────────────────────────────────────────

export const creators: Creator[] = [
  akuang,
  niijiang,
  fangu,
  xiaoguai,
  zhenzhen,
  dudu,
  hunhun,
  xiaobai,
  dianying,
  lengdan,
];

export const works: Work[] = [
  ...akuangWorks,
  ...niijiangWorks,
  ...fanguWorks,
  ...xiaoguaiWorks,
  ...zhenzhenWorks,
  ...duduWorks,
  ...hunhunWorks,
  ...xiaobaiWorks,
  ...dianyingWorks,
  ...lengdanWorks,
];

export const categoryOrder: WorkCategory[] = ["ip", "clay", "apparel", "goods", "mix"];

export function getCreator(id: string): Creator | undefined {
  return creators.find((c) => c.id === id);
}

export function creatorWorks(id: string): Work[] {
  return works.filter((w) => w.creatorId === id);
}

/**
 * Returns the custom page component for a creator, or null if they use
 * the default layout. Used by src/app/creators/[id]/page.tsx.
 */
export function getCreatorPage(
  id: string
): ComponentType<{ id: string }> | null {
  return PAGE_REGISTRY[id] ?? null;
}
