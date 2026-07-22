document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}
