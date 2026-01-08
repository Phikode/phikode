(() => {
  const header = document.querySelector(".section-navbar");
  const btn = document.querySelector(".nav-toggle");
  const menu = document.getElementById("navMenu");
  if (!header || !btn || !menu) return;

  const BP = 900;

  const openMenu = () => {
    header.classList.add("nav-open");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Chiudi menu");
  };

  const closeMenu = () => {
    header.classList.remove("nav-open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Apri menu");
  };

  btn.addEventListener("click", () => {
    header.classList.contains("nav-open") ? closeMenu() : openMenu();
  });

  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > BP) closeMenu();
  });

  if (window.innerWidth > BP) closeMenu();
})();
