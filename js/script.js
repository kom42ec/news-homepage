// Toggle mobile navigation

const btnNavEl = document.querySelector(".btn_mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Remove menu mobile when link clicked

const navLink = document.querySelectorAll(".nav_list-link");

navLink.forEach((n) =>
  n.addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
  })
);
