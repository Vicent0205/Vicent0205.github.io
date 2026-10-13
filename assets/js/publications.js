(() => {
  const root = document.querySelector("[data-publications]");
  if (!root) return;
  const search = root.querySelector("[data-publication-search]");
  const year = root.querySelector("[data-publication-year]");
  const rows = [...root.querySelectorAll("[data-publication]")];
  const count = root.querySelector("[data-publication-count]");
  const empty = root.querySelector("[data-publication-empty]");
  const searchable = new Map(
    rows.map((row) => [
      row,
      [".publication-body h3", ".publication-authors", ".publication-meta"]
        .map((selector) => row.querySelector(selector).textContent)
        .join(" ")
        .toLocaleLowerCase(),
    ])
  );
  function refreshAuthorToggles() {
    rows.forEach((row) => {
      if (row.hidden) return;
      const authors = row.querySelector(".publication-authors");
      const toggle = row.querySelector("[data-authors-toggle]");
      toggle.hidden = !authors.classList.contains("is-expanded") && authors.scrollHeight <= authors.clientHeight + 1;
    });
  }
  function applyFilters() {
    const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    rows.forEach((row) => {
      const matches = (!year.value || row.dataset.year === year.value) && terms.every((term) => searchable.get(row).includes(term));
      row.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? "publication" : "publications"}`;
    empty.hidden = visible !== 0;
    refreshAuthorToggles();
  }
  search.addEventListener("input", applyFilters);
  year.addEventListener("change", applyFilters);
  root.querySelectorAll("[data-authors-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const authors = document.getElementById(toggle.getAttribute("aria-controls"));
      const expanded = authors.classList.toggle("is-expanded");
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.textContent = expanded ? "Show fewer authors" : "Show all authors";
    });
  });
  root.classList.add("is-enhanced");
  root.querySelector("[data-publication-tools]").hidden = false;
  applyFilters();
  window.addEventListener("resize", refreshAuthorToggles);
  if (document.fonts) document.fonts.ready.then(refreshAuthorToggles);
})();
