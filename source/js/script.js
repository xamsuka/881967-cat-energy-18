var mainNav = document.querySelector(".main-nav");
var buttonNavigation = mainNav.querySelector(".main-nav__toggle");
var examplePreview = document.querySelector(".example__preview");
var exampleBefore = examplePreview.querySelector(".example__image-before");
var exampleAfter = examplePreview.querySelector(".example__image-after");
var exampleBar = examplePreview.querySelector(".example__bar");

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

exampleBar.addEventListener("click", function () {
  if (exampleBar.classList.contains("example-right")) {
    exampleBar.classList.remove("example-right");
    exampleBefore.classList.remove("display-none");

    exampleAfter.classList.add("display-none");
  } else {
    exampleBar.classList.add("example-right");
    exampleBefore.classList.add("display-none");

    exampleAfter.classList.remove("display-none");
  }
});
