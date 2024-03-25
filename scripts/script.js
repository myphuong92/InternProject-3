const currentPage = window.location.pathname;
const links = document.querySelectorAll(".header-line li");
document.addEventListener("click", function (event) {
  console.log(event.target); // Console log phần tử được click
});
links.forEach((li) => {
  const link = li.querySelector("a");
  if (link) {
    const href = link.getAttribute("href");
    if (href) {
      console.log(href);
      // Trim leading slashes from currentPage and href for consistent comparison
      const trimmedCurrentPage = currentPage.replace(/^\/+/, "");
      const trimmedHref = href.replace(/^\/+/, "");
      if (trimmedCurrentPage === trimmedHref) {
        li.classList.add("selected-link");
      } else {
      }
    }
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
    close.addEventListener("click", function (event) {
      event.stopPropagation(); // Stop event propagation
      sidebar.classList.remove("active");
    });
    sidebar.addEventListener("click", function () {
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
// Header
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
