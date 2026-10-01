# mohammadyr.github.io

Personal portfolio and resume (English + Persian) of Mohammad Yousefi, back-end developer.
Built with React, Vite and wouter; deployed to GitHub Pages by GitHub Actions.

## Structure

```
client/
  index.html              page shell + Open Graph / Twitter meta
  public/                 static files copied as-is (favicon, og-image.png, robots, sitemap)
  src/
    content/profile.ts    ALL text: resume content (en + fa), projects, contact links
    components/           Resume (renders either language), ArchitectureDiagram, ErrorBoundary
    pages/                Home, NotFound
    styles/               tokens.css (palette + fonts), base.css, home.css, resume.css
scripts/og/               og-image.html template + render.mjs → client/public/og-image.png
vite.config.ts            build config + per-route HTML (resume-en.html, resume-fa.html, 404.html)
.github/workflows/        build and deploy to Pages on every push to main
```

## Editing content

Change text in `client/src/content/profile.ts`; both resume pages and the home page read from it.
If the headline, stack or diagram changes, update `scripts/og/og-image.html` and run `npm run og`.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run check     # type-check
npm run build     # production build into dist/
npm run preview   # serve dist/ locally
npm run og        # re-render the link-preview image (needs Edge or Chrome)
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/`.
One-time setup: repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.

After deploying, check the link preview with the LinkedIn Post Inspector:
https://www.linkedin.com/post-inspector/
