const menuBtn = document.querySelector(".header__menuBtn");
const menuBtnClose = document.querySelector(".header__dropmenuHum");
const dropMenu = document.querySelector(".header__dropdown");

menuBtn.onclick = () => {
  dropMenu.classList.add("header__dropdown_on");
};

menuBtnClose.onclick = () => {
  dropMenu.classList.remove("header__dropdown_on");
};
