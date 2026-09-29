# 01 — Responsive Landing Page

**Live demo:** _add your GitHub Pages link here after deploying_

## What this is
A landing page for "Focal," a fictional distraction-free focus timer. Built to show CSS Grid/Flexbox layout skill and restraint in visual design — no card-grid template, no stock hero gradient.

## Why it's not a generic template
- Numbered steps are used only where content is genuinely sequential (the 3-step onboarding) — not slapped on every section
- Features are a divided list, not identical rounded cards with drop shadows
- The hero timer is a real, working SVG countdown (see "Technical notes")

## Technical notes
- Pure HTML/CSS/JS, no framework, no build step
- The hero timer demonstrates: SVG manipulation via `stroke-dashoffset`, `setInterval` timing, and the Page Visibility API (`visibilitychange`) — switching tabs mid-session resets it, mirroring the real product's "honesty" mechanic
- Fully responsive: grid collapses to single column under 820px/760px/640px breakpoints
- Keyboard-visible focus state on the primary CTA (`:focus-visible`)
- Respects `prefers-reduced-motion`

## Run locally
Just open `index.html` in a browser — no dependencies, no build step.

## Deploy this folder to GitHub Pages
Assuming your portfolio repo is structured as:
```

```

Since GitHub Pages serves one site per repo (from root or `/docs`), for a **multi-project repo** the cleanest option is:

**Option A — GitHub Pages per-folder via project index (recommended)**
1. Push this repo to GitHub.
2. In repo Settings → Pages, set source to `main` branch, root folder.
3. Build a root `index.html` (a project picker) that links to `./01-landing-page/index.html`, `./02-kanban-board/index.html`, etc. I'll generate this root picker page once a few projects exist, so the links are live.
4. Your live site becomes `https://yourusername.github.io/your-portfolio-repo/`, and each project is reachable at `.../01-landing-page/`.

**Option B — Quick single-project check**
While building, you can preview just this folder locally, or drag the folder into [Netlify Drop](https://app.netlify.com/drop) for an instant temporary URL to sanity-check before committing.

## Commands to push (run in your repo root)
```bash
git add 01-landing-page
git commit -m "feat: add responsive landing page project (01)"
git push origin main
```
