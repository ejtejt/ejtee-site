const year = document.getElementById("year");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  const setMenuState = (open) => {
    nav.classList.toggle("nav-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
  };

  toggle.addEventListener("click", () => {
    setMenuState(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      setMenuState(false);
    }
  });
}
