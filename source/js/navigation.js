var navMain = document.querySelector(".main-nav");
var pageHeaderToggle = document.querySelector(".page-header__toogle");
var buttonWrapper = document.querySelector(".page-header__button-wrapper");

buttonWrapper.classList.remove("main-nav--nojs");

pageHeaderToggle.addEventListener("click", function () {
  if (navMain.classList.contains("page-header--closed")) {
    navMain.classList.remove("page-header--closed");
    buttonWrapper.classList.remove("page-header--closed");
    navMain.classList.add("page-header--opened");
    buttonWrapper.classList.add("page-header--opened");
  } else {
    navMain.classList.add("page-header--closed");
    buttonWrapper.classList.add("page-header--closed");
    navMain.classList.remove("page-header--opened");
    buttonWrapper.classList.remove("page-header--opened");
  }
});
