const year = document.getElementById("year");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const header = document.querySelector(".site-header");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav && header) {
  const updateHeaderHeight = () => {
    const height = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty(
      "--mobile-header-height",
      `${height}px`
    );
  };

  const setMenuState = (open) => {
    updateHeaderHeight();
    nav.classList.toggle("nav-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
  };

  updateHeaderHeight();

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setMenuState(open);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("nav-open")) {
      setMenuState(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    updateHeaderHeight();

    if (window.innerWidth > 640) {
      setMenuState(false);
    }
  });

  window.addEventListener("orientationchange", updateHeaderHeight);
}
