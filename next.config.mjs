/**
 * Next.js config — dual-target deployment.
 *
 * Default (Vercel / local): builds to a static export at `out/`, served from the
 * site root. When you later add a backend, remove `output: "export"` and Vercel
 * will run API routes / server components natively.
 *
 * GitHub Pages: run `npm run build:pages`. The GitHub Actions workflow sets
 * GITHUB_PAGES=true and GITHUB_REPO=<repo-name> so the site is served correctly
 * from https://<user>.github.io/<repo-name>/.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = process.env.GITHUB_REPO || "";
const basePath = isGithubPages && repo ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Required for static export (no Image Optimization server).
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
