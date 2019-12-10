var mainNav = document.querySelector(".main-nav");
var buttonNavigation = mainNav.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");

buttonNavigation.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--open");
  } else {
    mainNav.classList.remove("main-nav--open");
    mainNav.classList.add("main-nav--closed");
  }
});
