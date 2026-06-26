/**
 * Runtime configuration helpers.
 *
 * `BASE_PATH` is injected at build time (empty on Vercel / local, `/<repo>` on
 * GitHub Pages). Use `asset()` for any URL pointing at a file in `public/` so it
 * resolves correctly under a sub-path deployment.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public-folder asset path with the deployment base path. */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

/**
 * Backend integration point. Set NEXT_PUBLIC_API_URL once you ship a backend
 * (e.g. a Vercel API route or external service). Until then, forms fall back to
 * local storage so the UI is fully functional during the static-only phase.
 */
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
