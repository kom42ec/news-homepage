// Mobile navigation

const btnNavEl = document.querySelector(".btn_mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
