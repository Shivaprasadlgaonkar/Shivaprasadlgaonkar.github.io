const projects = [
  {
    n: 1,
    t: "Responsive Landing Page",
    tier: "Foundations",
    tag: "",
    status: "live",
    folder: "1-FocaL-A-timer",
  },
  {
    n: 2,
    t: "Accordion & Tabs (ARIA)",
    tier: "Foundations",
    tag: "",
    status: "live",
    folder: "2-Accordion-Tabs",
  }];

const root = document.getElementById("projectsRoot");
const tiers = [...new Set(projects.map((p) => p.tier))];

tiers.forEach((tierName) => {
  const h = document.createElement("h3");
  h.className = "tier-title";
  h.textContent = tierName;
  root.appendChild(h);

  const grid = document.createElement("div");
  grid.className = "project-grid";

  projects
    .filter((p) => p.tier === tierName)
    .forEach((p) => {
      const isLive = p.status === "live";
      const card = document.createElement("div");
      card.className = "card";
      const tagHtml = p.tag
        ? p.tag
            .split(" ")
            .map((t) => `<span class="tag">${t}</span>`)
            .join("")
        : "";
      card.innerHTML = `
      <div class="top">
        <span class="num">#${String(p.n).padStart(2, "0")}</span>
        <span class="status ${isLive ? "live" : "planned"}">${isLive ? "● Live" : "○ Planned"}</span>
      </div>
      <h3>${p.t}</h3>
      <div class="tags">${tagHtml}</div>
  <div class="card-actions">
        ${
          isLive
            ? `<button class="btn" data-folder="${p.folder}" data-title="${p.t}">Live demo</button>`
            : `<button class="btn disabled" disabled>Coming soon</button>`
        }
      </div>`;
      grid.appendChild(card);
    });
  root.appendChild(grid);
});

// ---------- SCROLL-SPY (left nav auto-selects the section in view) ----------
(function () {
  const navLinks = document.querySelectorAll(".side-nav a");
  const sections = ["about", "scores", "projects"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === id);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      // Pick the entry closest to the top of the viewport among those currently intersecting.
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length === 0) return;
      visible.sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
      );
      setActive(visible[0].target.id);
    },
    { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));

  // Smooth scroll on click, since nav links are plain #anchors.
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.dataset.nav;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    });
  });

  if (sections.length) setActive(sections[0].id);
})();

// ---------- MODAL (pop-up live preview) ----------
const overlay = document.getElementById("modalOverlay");
const frame = document.getElementById("modalFrame");
const modalTitle = document.getElementById("modalTitle");
const openTabLink = document.getElementById("modalOpenTab");
let lastFocused = null;

function openModal(folder, title) {
  lastFocused = document.activeElement;
  modalTitle.textContent = title;
  frame.src = `./${folder}/index.html`;
  openTabLink.href = `./${folder}/index.html`;
  overlay.classList.add("open");
  document.getElementById("modalClose").focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("open");
  frame.src = "about:blank";
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

root.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-folder]");
  if (!btn) return;
  openModal(btn.dataset.folder, btn.dataset.title);
});

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
});
