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
import { creator as juanjuan, works as juanjuanWorks } from "./juanjuan";
import { creator as jtc,      works as jtcWorks      } from "./jtc";
import { creator as longgumu, works as longgumuWorks } from "./longgumu";
import { creator as zach,       works as zachWorks       } from "./zach";
import { creator as erraticvex, works as erraticvexWorks } from "./erraticvex";
import { creator as cry1vloon,  works as cry1vloonWorks  } from "./cry1vloon";
import { creator as vivi,       works as viviWorks       } from "./vivi";
import { creator as s16_7,      works as s16_7Works      } from "./16_7";
import { creator as co1dvvv,    works as co1dvvvWorks    } from "./co1dvvv";
import { creator as kalare,     works as kalareWorks     } from "./kalare";
import { creator as soul,       works as soulWorks       } from "./soul";
import { creator as yixun,      works as yixunWorks      } from "./yixun";
import { creator as bart,       works as bartWorks       } from "./Bart";
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
import JuanjuanPage from "./juanjuan/page";
import JtcPage        from "./jtc/page";
import LonggumuPage   from "./longgumu/page";
import ZachPage         from "./zach/page";
import ErraticVexPage  from "./erraticvex/page";
import Cry1vloOnPage   from "./cry1vloon/page";
import ViviPage        from "./vivi/page";
import SixteenSevenPage from "./16_7/page";
import Co1dvvvPage      from "./co1dvvv/page";
import KalarePage       from "./kalare/page";
import SoulPage         from "./soul/page";
import YixunPage        from "./yixun/page";
import BartPage         from "./Bart/page";

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
  juanjuan: JuanjuanPage, // Monolith Portrait / 黑色纪念碑·真人版
  jtc:      JtcPage,      // Editorial Portrait / 杂志双栏·真人版
  longgumu: LonggumuPage, // Terminal Portrait / 终端输出·真人版
  zach:       ZachPage,       // Editorial Portrait / 杂志双栏·真人版
  erraticvex: ErraticVexPage, // Brutalist Portrait / 粗野宣言·真人版
  cry1vloon:  Cry1vloOnPage,  // Film Strip Portrait / 胶片档案·真人版
  vivi:       ViviPage,       // Risograph Portrait / 孔版印刷·真人版
  "16_7":     SixteenSevenPage, // Zine Portrait / 地下拼贴·真人版
  co1dvvv:    Co1dvvvPage,      // Blackout Poster Portrait / 夜店海报·真人版
  kalare:     KalarePage,       // Lookbook / 系列画册
  soul:       SoulPage,         // Lookbook · 版权分区
  yixun:      YixunPage,        // Zine Collage / 拼贴画册
  bart:       BartPage,         // Candy Store Portrait / 糖果屋·真人版
};
// ── End page layout registry ──────────────────────────────────────────────────

export const creators: Creator[] = [
  // ── 有真实头像 ──────────────────────────────────────────────────────────────
  jtc,
  longgumu,
  zach,
  erraticvex,
  cry1vloon,
  vivi,
  s16_7,
  juanjuan,
  co1dvvv,
  kalare,
  soul,
  yixun,
  bart,
  // ── 文字字形头像 ────────────────────────────────────────────────────────────
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
  ...juanjuanWorks,
  ...jtcWorks,
  ...longgumuWorks,
  ...zachWorks,
  ...erraticvexWorks,
  ...cry1vloonWorks,
  ...viviWorks,
  ...s16_7Works,
  ...co1dvvvWorks,
  ...kalareWorks,
  ...soulWorks,
  ...yixunWorks,
  ...bartWorks,
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
