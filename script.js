const year = document.getElementById("year");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  const firstLink = nav.querySelector("a");

  const setMenuState = (open, moveFocus = false) => {
    nav.classList.toggle("nav-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );

    if (moveFocus) {
      if (open && firstLink) {
        firstLink.focus();
      } else if (!open) {
        toggle.focus();
      }
    }
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setMenuState(open, open);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("nav-open")) {
      setMenuState(false, true);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      setMenuState(false);
    }
  });
}
