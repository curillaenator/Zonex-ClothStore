// РЕЙТИНГ

const ratingStars = {
  on: "./img/card/rate_on.png",
  off: "./img/card/rate_off.png",
};

function fillUserRate() {
  const rating = document.querySelector(".c__bodyDescRatingStar");
  rating.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    rating.innerHTML += `
    <img
      src="${ratingStars.off}"
      alt=""
      class="c__bodyStarRate"
      data-counter="${i}"
    />
    `;
  }
}
fillUserRate();

const userSetRate = document.querySelectorAll(".c__bodyStarRate");
for (const userClick of userSetRate) {
  userClick.onclick = () => {
    userSetRate.forEach((click) => (click.src = ratingStars.off));
    let starCnt = userClick.dataset.counter;
    for (let i = 0; i <= starCnt; i++) {
      userSetRate[i].src = ratingStars.on;
    }
  };
}

// ЗАПОЛНЕНИЕ ЦВЕТОВ

function fillColors() {
  const colorCont = document.querySelector(".c__bodyDescColorSelect");
  colorCont.innerHTML = "";
  salesItemObj.color.forEach((color, i) => {
    colorCont.innerHTML += `
        <div class="c__bodyDescColorSelectValue" data-color="${color}"></div>
    `;
    const a = document.querySelectorAll(".c__bodyDescColorSelectValue");
    a[i].style.backgroundColor = `${color}`;
  });
  function firstChecked() {
    const allColors = document.querySelectorAll(".c__bodyDescColorSelectValue");
    allColors[0].classList.add("colorColorSelected");
  }
  firstChecked();
}
fillColors();

// ВЫБОР ЦВЕТА

function setColorName() {
  let colorCheked = document.querySelector(".colorColorSelected").dataset.color;
  document.querySelector(".c__bodyColorSelected").textContent =
    colorRu[colorCheked];
}

setColorName();

const allColorBtns = document.querySelectorAll(".c__bodyDescColorSelectValue");
for (const colorBtn of allColorBtns) {
  colorBtn.addEventListener("click", () => {
    allColorBtns.forEach((btn) => btn.classList.remove("colorColorSelected"));
    colorBtn.classList.add("colorColorSelected");
    setColorName();
  });
}

// ВЫБОР РАЗМЕРА

function fillSizes() {
  const sizeSelect = document.querySelector(".c__bodyDescSizeSelect");
  sizeSelect.innerHTML = "";
  salesItemObj.size.forEach((size) => {
    sizeSelect.innerHTML += `
    <div class="c__bodyDescSizeSelectValue">${size}</div>
    `;
  });
}
fillSizes();

const allSizeBtns = document.querySelectorAll(".c__bodyDescSizeSelectValue");
for (const sizeBtn of allSizeBtns) {
  sizeBtn.onclick = () => {
    allSizeBtns.forEach((btn) => btn.classList.remove("sizeSizeSelected"));
    sizeBtn.classList.add("sizeSizeSelected");
    document.querySelector(".c__bodySizeSelected").textContent =
      sizeBtn.textContent;
  };
}

// КОЛИЧЕСВО В КОРЗИНУ

document.querySelector(".qtyButtonPlus").onclick = () => {
  document.querySelector(".qtyButtonValue").value++;
};
document.querySelector(".qtyButtonMinus").onclick = () => {
  let qty = document.querySelector(".qtyButtonValue").value;
  qty <= 1 ? (qty = 1) : qty--;
  document.querySelector(".qtyButtonValue").value = qty;
};
