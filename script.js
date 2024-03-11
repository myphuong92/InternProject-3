const currentPage = window.location.pathname;
const links = document.querySelectorAll(".header-line li");
links.forEach((li) => {
  const link = li.querySelector("a");
  const href = link.getAttribute("href");
  if (currentPage === href) {
    li.classList.add("selected-link");
  }
});
console.log(currentPage);
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.classList.add("active");
  }
}
function hideSidebar() {
  const close = document.querySelector(".close-icon");
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    close.addEventListener("click", function () {
      sidebar.classList.remove("active");
    });
  }
}
// function handleNav(e) {
//   // Remove selected-link class from all links
//   links = document.querySelectorAll(".header-line li");
//   links.forEach((link) => {
//     link.classList.remove("selected-link");
//   });
//   e.classList.add("selected-link");
// }
