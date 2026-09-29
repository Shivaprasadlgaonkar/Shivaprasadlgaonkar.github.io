// Project data drives the grid — add a folder + status:'live' once a project is pushed.
// LIVE projects only show up on the site. To add a finished project:
// 1. Find its commented-out line below (Ctrl+F its number)
// 2. Uncomment it, add status:"live", folder:"NN-folder-name" (must match the actual folder name)
// 3. Push — the card appears automatically, grouped under its tier.
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
  },

  // ---- Tier 1: Foundations — uncomment as each is built ----
  // {n:3,t:"Bootstrap Portfolio Template",tier:"Foundations",tag:"B",status:"live",folder:"03-bootstrap-portfolio"},
  // {n:4,t:"Image Carousel (touch swipe)",tier:"Foundations",tag:"",status:"live",folder:"04-image-carousel"},
  // {n:5,t:"Reusable Modal System",tier:"Foundations",tag:"",status:"live",folder:"05-modal-system"},
  // {n:6,t:"To-Do List (localStorage)",tier:"Foundations",tag:"jQ",status:"live",folder:"06-todo-list"},
  // {n:7,t:"Multi-Step Form Wizard",tier:"Foundations",tag:"B",status:"live",folder:"07-form-wizard"},
  // {n:8,t:"Expense Tracker (canvas chart)",tier:"Foundations",tag:"",status:"live",folder:"08-expense-tracker"},
  // {n:9,t:"Quiz App with Timer",tier:"Foundations",tag:"",status:"live",folder:"09-quiz-app"},
  // {n:10,t:"Pricing Page + Dark Mode",tier:"Foundations",tag:"B",status:"live",folder:"10-pricing-page"},

  // ---- Tier 2: Interactive & APIs (11-20) ----
  // {n:11,t:"Weather Dashboard",tier:"Interactive & APIs",tag:"",status:"live",folder:"11-weather-dashboard"},
  // {n:12,t:"GitHub Profile Finder",tier:"Interactive & APIs",tag:"",status:"live",folder:"12-github-finder"},
  // {n:13,t:"Movie Search (debounced)",tier:"Interactive & APIs",tag:"",status:"live",folder:"13-movie-search"},
  // {n:14,t:"Currency Converter",tier:"Interactive & APIs",tag:"",status:"live",folder:"14-currency-converter"},
  // {n:15,t:"Kanban Board (drag & drop)",tier:"Interactive & APIs",tag:"",status:"live",folder:"15-kanban-board"},
  // {n:16,t:"Sorting Algorithm Visualizer",tier:"Interactive & APIs",tag:"",status:"live",folder:"16-sorting-visualizer"},
  // {n:17,t:"Pathfinding Visualizer",tier:"Interactive & APIs",tag:"",status:"live",folder:"17-pathfinding-visualizer"},
  // {n:18,t:"Sudoku Solver",tier:"Interactive & APIs",tag:"",status:"live",folder:"18-sudoku-solver"},
  // {n:19,t:"Memory Match Game",tier:"Interactive & APIs",tag:"",status:"live",folder:"19-memory-match"},
  // {n:20,t:"E-commerce Filter & Cart",tier:"Interactive & APIs",tag:"B jQ",status:"live",folder:"20-ecommerce-cart"},

  // ---- Tier 3: Advanced (21-30) ----
  // {n:21,t:"Infinite Scroll Feed",tier:"Advanced",tag:"",status:"live",folder:"21-infinite-scroll"},
  // {n:22,t:"Offline-First Notes PWA",tier:"Advanced",tag:"",status:"live",folder:"22-notes-pwa"},
  // {n:23,t:"Canvas Whiteboard",tier:"Advanced",tag:"",status:"live",folder:"23-canvas-whiteboard"},
  // {n:24,t:"Calendar / Date Picker",tier:"Advanced",tag:"",status:"live",folder:"24-date-picker"},
  // {n:25,t:"Form Validation Plugin",tier:"Advanced",tag:"jQ",status:"live",folder:"25-validation-plugin"},
  // {n:26,t:"Autocomplete / Typeahead",tier:"Advanced",tag:"",status:"live",folder:"26-autocomplete"},
  // {n:27,t:"Audio Player + Visualizer",tier:"Advanced",tag:"",status:"live",folder:"27-audio-visualizer"},
  // {n:28,t:"Snake / Tetris",tier:"Advanced",tag:"",status:"live",folder:"28-snake-tetris"},
  // {n:29,t:"Data Table Engine",tier:"Advanced",tag:"B",status:"live",folder:"29-data-table"},
  // {n:30,t:"Drag-and-Drop File Previewer",tier:"Advanced",tag:"",status:"live",folder:"30-file-previewer"},

  // ---- Tier 4: Expert JavaScript (31-40) ----
  // {n:31,t:"Web Worker Image Processor",tier:"Expert JS",tag:"",status:"live",folder:"31-web-worker-image"},
  // {n:32,t:"Multi-Tab Chat (BroadcastChannel)",tier:"Expert JS",tag:"",status:"live",folder:"32-multitab-chat"},
  // {n:33,t:"Mini State Management Library",tier:"Expert JS",tag:"",status:"live",folder:"33-mini-redux"},
  // {n:34,t:"Mini Virtual DOM Library",tier:"Expert JS",tag:"",status:"live",folder:"34-mini-vdom"},
  // {n:35,t:"Client-Side SPA Router",tier:"Expert JS",tag:"",status:"live",folder:"35-spa-router"},
  // {n:36,t:"Design System",tier:"Expert JS",tag:"B",status:"live",folder:"36-design-system"},
  // {n:37,t:"Analytics Dashboard (hand-built SVG)",tier:"Expert JS",tag:"B",status:"live",folder:"37-analytics-dashboard"},
  // {n:38,t:"Code Editor + Syntax Highlighting",tier:"Expert JS",tag:"",status:"live",folder:"38-code-editor"},
  // {n:39,t:"Performance Case Study",tier:"Expert JS",tag:"",status:"live",folder:"39-performance-case-study"},
  // {n:40,t:"Capstone: Habit & Finance Tracker",tier:"Expert JS",tag:"B jQ",status:"live",folder:"40-habit-finance-tracker"},

  // ---- Tier 5-7: ASP.NET MVC 5 / EF6 / SQL Server (41-60) ----
  // {n:41,t:"Employee Management (EF Code First)",tier:".NET / EF / SQL",tag:"",status:"live",folder:"41-employee-management"},
  // {n:42,t:"Library Management",tier:".NET / EF / SQL",tag:"",status:"live",folder:"42-library-management"},
  // {n:43,t:"Blog with Roles (Identity)",tier:".NET / EF / SQL",tag:"",status:"live",folder:"43-blog-with-roles"},
  // {n:44,t:"Inventory and Stock",tier:".NET / EF / SQL",tag:"",status:"live",folder:"44-inventory-stock"},
  // {n:45,t:"Online Bookstore",tier:".NET / EF / SQL",tag:"",status:"live",folder:"45-online-bookstore"},
  // {n:46,t:"Hospital Appointment Booking",tier:".NET / EF / SQL",tag:"",status:"live",folder:"46-hospital-booking"},
  // {n:47,t:"Hotel Reservation",tier:".NET / EF / SQL",tag:"",status:"live",folder:"47-hotel-reservation"},
  // {n:48,t:"HR and Payroll",tier:".NET / EF / SQL",tag:"",status:"live",folder:"48-hr-payroll"},
  // {n:49,t:"Helpdesk Ticketing",tier:".NET / EF / SQL",tag:"",status:"live",folder:"49-helpdesk-ticketing"},
  // {n:50,t:"Learning Management System",tier:".NET / EF / SQL",tag:"",status:"live",folder:"50-lms"},
  // {n:51,t:"Banking Simulation",tier:".NET / EF / SQL",tag:"",status:"live",folder:"51-banking-simulation"},
  // {n:52,t:"Restaurant POS + SignalR",tier:".NET / EF / SQL",tag:"",status:"live",folder:"52-restaurant-pos"},
  // {n:53,t:"Multi-Tenant SaaS",tier:".NET / EF / SQL",tag:"",status:"live",folder:"53-multitenant-saas"},
  // {n:54,t:"Web API 2 + MVC Hybrid",tier:".NET / EF / SQL",tag:"",status:"live",folder:"54-webapi-mvc-hybrid"},
  // {n:55,t:"Layered Architecture (Repo + UoW)",tier:".NET / EF / SQL",tag:"",status:"live",folder:"55-layered-architecture"},
  // {n:56,t:"SQL Analytics Dashboard",tier:".NET / EF / SQL",tag:"",status:"live",folder:"56-sql-analytics-dashboard"},
  // {n:57,t:"EF6 Performance Case Study",tier:".NET / EF / SQL",tag:"",status:"live",folder:"57-ef6-performance"},
  // {n:58,t:"Audit & Soft-Delete Framework",tier:".NET / EF / SQL",tag:"",status:"live",folder:"58-audit-soft-delete"},
  // {n:59,t:"Background Jobs & Observability",tier:".NET / EF / SQL",tag:"",status:"live",folder:"59-background-jobs"},
  // {n:60,t:"Capstone: Order Management System",tier:".NET / EF / SQL",tag:"",status:"live",folder:"60-order-management"}
];

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
            ? `<button class="btn" data-folder="${p.folder}" data-title="${p.t}">Live demo</button>
             <a class="btn secondary" href="./${p.folder}/" target="_blank" rel="noopener">Source</a>`
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
