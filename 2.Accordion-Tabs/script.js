(function () {
  // ---------- ACCORDION ----------
  const accordionData = [
    {
      q: "Does this allow more than one panel open at once?",
      a: "Yes — this is an independent accordion, not exclusive. Each panel toggles on its own. An exclusive variant would close siblings on open; that behavior is a one-line change, noted in the code comment below.",
    },
    {
      q: "How is height animated without a fixed pixel value?",
      a: "The panel's max-height is set to its scrollHeight in JavaScript at toggle time, then transitioned via CSS. This avoids hardcoding content height, so it works with any amount of text.",
    },
    {
      q: "What happens with a screen reader?",
      a: 'Each trigger is a real <button> with aria-expanded reflecting state, and aria-controls pointing at the panel id. The panel has role="region" and is labelled by the trigger, so assistive tech announces both the state and the relationship.',
    },
  ];

  const accRoot = document.getElementById("accordion");
  accordionData.forEach((item, i) => {
    const itemEl = document.createElement("div");
    itemEl.className = "acc-item";
    const panelId = `acc-panel-${i}`;
    const triggerId = `acc-trigger-${i}`;
    itemEl.innerHTML = `
      <h3 style="margin:0;">
        <button class="acc-trigger" id="${triggerId}" aria-expanded="false" aria-controls="${panelId}">
          <span>${item.q}</span>
          <span class="acc-icon" aria-hidden="true"></span>
        </button>
      </h3>
      <div class="acc-panel" id="${panelId}" role="region" aria-labelledby="${triggerId}">
        <div class="acc-panel-inner">${item.a}</div>
      </div>`;
    accRoot.appendChild(itemEl);
  });

  accRoot.addEventListener("click", (e) => {
    const trigger = e.target.closest(".acc-trigger");
    if (!trigger) return;
    const expanded = trigger.getAttribute("aria-expanded") === "true";
    const panel = document.getElementById(
      trigger.getAttribute("aria-controls"),
    );

    trigger.setAttribute("aria-expanded", String(!expanded));
    panel.style.maxHeight = expanded ? null : panel.scrollHeight + "px";
  });

  // ---------- TABS ----------
  const tabsData = [
    {
      label: "Markup",
      content:
        'Tabs use role="tablist" on the container, role="tab" on each button, and role="tabpanel" on each content region. Only the active tab has tabindex="0"; the rest are -1, so Tab key moves focus into the tablist once, then arrow keys move between tabs per the WAI-ARIA authoring pattern.',
    },
    {
      label: "Keyboard",
      content:
        "ArrowRight/ArrowLeft move focus and activate the next/previous tab, wrapping at the ends. Home and End jump to the first and last tab. This matches native OS tab behavior, not just mouse clicks.",
    },
    {
      label: "State",
      content:
        "Active tab index is tracked in one variable. Switching tabs updates aria-selected, tabindex, and hidden on the corresponding panel — three attributes kept in sync from a single source of truth rather than three independent toggles.",
    },
  ];

  const tabsRoot = document.getElementById("tabsRoot");
  const tablist = document.createElement("div");
  tablist.className = "tablist";
  tablist.setAttribute("role", "tablist");
  tablist.setAttribute("aria-label", "Implementation details");
  tabsRoot.appendChild(tablist);

  const panelsWrap = document.createElement("div");
  tabsRoot.appendChild(panelsWrap);

  let activeIndex = 0;
  const tabButtons = [];
  const tabPanels = [];

  tabsData.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn";
    btn.setAttribute("role", "tab");
    btn.id = `tab-${i}`;
    btn.setAttribute("aria-controls", `panel-${i}`);
    btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
    btn.tabIndex = i === 0 ? 0 : -1;
    btn.textContent = item.label;
    tablist.appendChild(btn);
    tabButtons.push(btn);

    const panel = document.createElement("div");
    panel.className = "tab-panel";
    panel.id = `panel-${i}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `tab-${i}`);
    if (i !== 0) panel.hidden = true;
    panel.textContent = item.content;
    panelsWrap.appendChild(panel);
    tabPanels.push(panel);
  });

  function activate(index) {
    tabButtons[activeIndex].setAttribute("aria-selected", "false");
    tabButtons[activeIndex].tabIndex = -1;
    tabPanels[activeIndex].hidden = true;

    activeIndex = index;
    tabButtons[activeIndex].setAttribute("aria-selected", "true");
    tabButtons[activeIndex].tabIndex = 0;
    tabButtons[activeIndex].focus();
    tabPanels[activeIndex].hidden = false;
  }

  tablist.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    activate(tabButtons.indexOf(btn));
  });

  tablist.addEventListener("keydown", (e) => {
    const key = e.key;
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(key)) return;
    e.preventDefault();
    let next = activeIndex;
    if (key === "ArrowRight") next = (activeIndex + 1) % tabButtons.length;
    if (key === "ArrowLeft")
      next = (activeIndex - 1 + tabButtons.length) % tabButtons.length;
    if (key === "Home") next = 0;
    if (key === "End") next = tabButtons.length - 1;
    activate(next);
  });
})();
