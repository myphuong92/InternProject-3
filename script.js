const navLinks = document.querySelector(".nav-links");
function ToggleMenu(e) {
  e.textContent = e.textContent === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-full");
}
