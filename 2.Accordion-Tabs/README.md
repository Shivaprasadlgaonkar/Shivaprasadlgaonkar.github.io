# 02 — Custom Accordion &amp; Tabs Component

**Live demo:** _add your GitHub Pages link here after deploying_

## What this is
Two composite UI widgets — an accordion and a tab panel — built with no library, implementing the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) patterns for both by hand.

## Why this is the project interviewers actually probe
Almost anyone can toggle a `display:none` on click. What's being tested here is whether you know the *contract* a real component needs to honor:
- **Accordion:** each trigger is a real `<button>` with `aria-expanded` reflecting live state and `aria-controls` pointing at its panel by id. The panel carries `role="region"` and is labelled by its trigger — so a screen reader announces both content and relationship, not just visible text.
- **Tabs:** implements roving `tabindex` (only the active tab is in the Tab order; arrow keys move between tabs) per the ARIA tabs pattern — not just "click changes which div shows."
- Height animation on the accordion uses `scrollHeight` measured at toggle time rather than a hardcoded max-height, so it works regardless of content length.

## Keyboard support
- Accordion: `Tab` to reach a trigger, `Enter`/`Space` to toggle (native `<button>` behavior — free, and worth pointing out you didn't reinvent it)
- Tabs: `←`/`→` to move between tabs, `Home`/`End` to jump to first/last

## If asked to extend it live
The code includes a commented-out block showing exactly how to flip the accordion from **independent** (multiple panels open) to **exclusive** (opening one closes others) — a common follow-up question in interviews, so it's pre-answered in the source.

## Run locally
Open `index.html` directly — no build step, no dependencies.

## Deploy
```bash
git add 02-accordion-tabs
git commit -m "feat: add accordion/tabs component with ARIA patterns (02)"
git push origin main
```
Same repo structure as project 01 — this becomes `.../02-accordion-tabs/` once the root project-picker page is built.
