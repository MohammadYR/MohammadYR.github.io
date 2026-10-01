import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

const SITE = "https://mohammadyr.github.io";
const outDir = path.resolve(import.meta.dirname, "dist");

type RouteMeta = {
  file: string;
  url: string;
  lang: string;
  locale: string;
  title: string;
  description: string;
  noindex?: boolean;
};

// GitHub Pages serves /resume-en from resume-en.html with status 200, so link
// previews (LinkedIn, Telegram, X) get real per-page meta instead of the
// 404.html SPA fallback. Unknown paths still fall back to 404.html.
const routes: RouteMeta[] = [
  {
    file: "resume-en.html",
    url: `${SITE}/resume-en`,
    lang: "en",
    locale: "en_US",
    title: "Resume — Mohammad Yousefi",
    description:
      "Resume of Mohammad Yousefi, back-end developer (Python, Django, DRF): projects, experience, skills and education.",
  },
  {
    file: "resume-fa.html",
    url: `${SITE}/resume-fa`,
    lang: "fa",
    locale: "fa_IR",
    title: "رزومه — محمد یوسفی",
    description: "رزومهٔ محمد یوسفی، برنامه‌نویس بک‌اند (Python، Django، DRF): پروژه‌ها، سوابق، مهارت‌ها و تحصیلات.",
  },
  {
    file: "404.html",
    url: SITE,
    lang: "en",
    locale: "en_US",
    title: "Page not found — Mohammad Yousefi",
    description: "This page doesn't exist.",
    noindex: true,
  },
];

const escapeAttr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function applyMeta(html: string, m: RouteMeta): string {
  const setContent = (attr: string, value: string) =>
    html.replace(new RegExp(`(<meta\\s+${attr}\\s+content=")[^"]*(")`), `$1${escapeAttr(value)}$2`);

  html = html.replace(/<html lang="[^"]*"/, `<html lang="${m.lang}"`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(m.title)}</title>`);
  html = setContent('name="description"', m.description);
  html = setContent('property="og:title"', m.title);
  html = setContent('property="og:description"', m.description);
  html = setContent('property="og:url"', m.url);
  html = setContent('property="og:locale"', m.locale);
  html = setContent('name="twitter:title"', m.title);
  html = setContent('name="twitter:description"', m.description);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${m.url}$2`);
  if (m.noindex) html = html.replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>');
  return html;
}

function routePages(): Plugin {
  return {
    name: "route-pages",
    apply: "build",
    closeBundle() {
      const index = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
      for (const route of routes) {
        fs.writeFileSync(path.join(outDir, route.file), applyMeta(index, route));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), routePages()],
  root: path.resolve(import.meta.dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
  },
  preview: {
    port: 4173,
  },
});
