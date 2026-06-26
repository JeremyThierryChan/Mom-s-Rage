/**
 * Re-exports from the per-creator data folder.
 * Keeps existing `import ... from "@/data/works"` imports working.
 */
export type { Work, WorkCategory, WorkPattern } from "./creators";
export { works, categoryOrder, creatorWorks as worksByCreator } from "./creators";
