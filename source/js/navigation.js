var navMain = document.querySelector(".main-nav");
var pageHeaderToggle = document.querySelector(".page-header__toogle");
var buttonWrapper = document.querySelector(".page-header__button-wrapper");

buttonWrapper.classList.remove("page-header__button-wrapper--nojs");
navMain.classList.add("page-header__button-wrapper--closed");
buttonWrapper.classList.add("page-header__button-wrapper--closed");
navMain.classList.remove("main-nav--opened");
buttonWrapper.classList.remove("main-nav--opened");

pageHeaderToggle.addEventListener("click", function () {
  if (navMain.classList.contains("page-header__button-wrapper--closed")) {
    navMain.classList.remove("page-header__button-wrapper--closed");
    buttonWrapper.classList.remove("page-header__button-wrapper--closed");
    navMain.classList.add("main-nav--opened");
    buttonWrapper.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("page-header__button-wrapper--closed");
    buttonWrapper.classList.add("page-header__button-wrapper--closed");
    navMain.classList.remove("main-nav--opened");
    buttonWrapper.classList.remove("main-nav--opened");
  }
});
