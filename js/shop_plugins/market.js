// ЗАПОЛНЕНИЕ МАРКЕТА КАРТОЧКАМИ

function fillMarket() {
  const market = document.querySelector(".shop__bodyMarket");
  market.innerHTML = "";
  salesObj.forEach((card) => {
    market.innerHTML += `
    <div class="shop__bodyCard">
      <div class="shop__bodyCardImg">
        <img src="${card.url}" alt="${card.name}">
      </div>
      <div class="shop__bodyCardSts">
        <img src="./img/icons/${card.status}.png" alt="${card.name}">
        <p>${card.label}</p>
      </div>
      <p class="shop__bodyCardName">${card.name}</p>
      <p class="shop__bodyCardPrice">${card.price}руб.</p>
    </div>
    `;
  });
}
fillMarket();

// РАСЧЕТ РАЗМЕРОВ КАРТОЧКИ с передаваемым в ф-ю заданным к-вом колонок,
// определяемым одним из алгоритмов ниже.

function setCard(qty) {
  const allCards = document.querySelectorAll(".shop__bodyCard");
  allCards.forEach((card) => {
    card.style.width = `calc(${100 / qty}% - 30px)`;
  });
  const allImgs = document.querySelectorAll(".shop__bodyCardImg");
  allImgs.forEach((img) => (img.style.height = `${83.5 - 2.5 * qty}%`));
}

// К-ВО КОЛОНОК ПРИ ПЕРВОЙ ЗАГРУЗКЕ САЙТА

function setWidth(qty, glw) {
  glw = window.innerWidth;
  switch (true) {
    case glw < 640:
      qty = 1;
      break;
    case glw >= 640 && glw < 1024:
      qty = 2;
      break;
    case glw >= 1024 && glw < 1440:
      qty = 3;
      break;
    default:
      qty = +document.querySelector(".shop__columnsSel").textContent;
      break;
  }
  setCard(qty);
  // setCardImgHeight();
}
setWidth();

// ДИНАМИЧЕКОЕ К-ВО КОЛОНОК ПРИ ИЗМЕНЕНИИ VIEWPORT ПОСЛЕ ЗАГРУЗКИ САЙТА

window.addEventListener("resize", () => {
  window.innerWidth < 1440 ? setWidth() : followColNum();
  function followColNum(qty) {
    qty = +document.querySelector(".shop__columnsSel").textContent;
    setCard(qty);
  }

  function marketWidthCheck() {
    const marketWidth = document.querySelector(".shop__bodyMarket");
    window.innerWidth < 1024
      ? (marketWidth.style.width = `100%`)
      : document
          .querySelector(".shop__bodyFlt")
          .classList.contains("shop__bodyFlt_off")
      ? (marketWidth.style.width = `100%`)
      : (marketWidth.style.width = `80%`);
  }
  marketWidthCheck();
});

// переключатель "ОТОБРАЖАТЬ К-ВО КОЛОНОК" (для 1440+)

const colSelector = document.querySelectorAll(".shop__columnsNum");
for (const colClick of colSelector) {
  colClick.onclick = (qty) => {
    colSelector.forEach((colNum) => {
      colNum.classList.remove("shop__columnsSel");
    });
    colClick.classList.add("shop__columnsSel");
    qty = +colClick.textContent;
    setCard(qty);
  };
}

// ФИЛЬТРЫ

// КНОПКА открыть/закрыть поле фильтров

document.querySelector(".shop__titleFltBtn").onclick = () => {
  // анимация стрелки
  document
    .querySelector(".shop__titleFltIcon")
    .classList.toggle("shop__titleFltIcon_down");

  // скрыть/показать поле фильтров
  document
    .querySelector(".shop__bodyFlt")
    .classList.toggle("shop__bodyFlt_off");

  //замена текста кнопки
  const btnTtl = document.querySelector(".shop__titleFltTtl");
  btnTtl.textContent === "скрыть фильтры"
    ? (btnTtl.textContent = "показать фильтры")
    : (btnTtl.textContent = "скрыть фильтры");

  //ширина маркета для разных сценариев отображения фильтров
  const marketWidth = document.querySelector(".shop__bodyMarket");
  document
    .querySelector(".shop__bodyFlt")
    .classList.contains("shop__bodyFlt_off")
    ? (marketWidth.style.width = `100%`)
    : window.innerWidth < 1024
    ? (marketWidth.style.width = `100%`)
    : (marketWidth.style.width = `80%`);

  // скрыть/показать кнопку "применить фильтры"
  document
    .querySelector(".shop__titleFltApply")
    .classList.toggle("shop__titleFltApply_off");

  setWidth();
};

// КАТЕГОРИИ
// заполнение фильтра "категории"

function categoryFill(categoryGet = [], category, catFlt) {
  catFlt = document.querySelector(".categoryContent");
  catFlt.innerHTML = "";

  salesObj.forEach((obj) => categoryGet.push(obj.category));
  category = [...new Set(categoryGet)];
  category.forEach((cat, i) => {
    i.toString().length < 2 ? (i = `0${i}`) : (i = i);
    catFlt.innerHTML += `
      <div class="shop__bodyFltItemContentLine">
        <input type="checkbox" id="category${i}" class="categoryChbox" />
        <label for="category${i}">${cat}</label>
      </div>
      `;
  });
}
categoryFill();

// вывод к-ва отмеченных категорий в наименование

const allCatChboxs = document.querySelectorAll(".categoryChbox");
for (const catChbox of allCatChboxs) {
  catChbox.onclick = () => {
    let cnt = 0;
    allCatChboxs.forEach((category) => (category.checked ? cnt++ : cnt));
    document.querySelector(".categoryCounter").textContent = cnt;
  };
}

// сворачивание фильтра по категориям

const catArrow = document.querySelector(".categoryArrow");
catArrow.onclick = () => {
  catArrow.classList.toggle("shop__bodyFltArrow_down");
  document
    .querySelector(".categoryContent")
    .classList.toggle("shop__bodyFltItemContent_off");
};

// РАЗМЕРЫ
// заполнение фильтра "размеры"

function sizesFill(sizesGet = [], sizes) {
  document.querySelector(".sizeContent").innerHTML = "";
  salesObj.forEach((obj) => sizesGet.push(obj.size));
  sizes = [...new Set(sizesGet.sort())];
  sizes.forEach((size, i) => {
    i.toString().length < 2 ? (i = `0${i}`) : (i = i);
    document.querySelector(".sizeContent").innerHTML += `
      <div class="shop__bodyFltItemContentLine">
        <input type="checkbox" id="size${i}" class="sizeChbox" />
        <label for="size${i}">${size}</label>
      </div>
    `;
  });
}
sizesFill();

// вывод количества отмеченных разеров в наименование

const allSizeChboxs = document.querySelectorAll(".sizeChbox");
for (const sizeChbox of allSizeChboxs) {
  sizeChbox.onclick = () => {
    let cnt = 0;
    allSizeChboxs.forEach((size) => (size.checked ? cnt++ : cnt));
    document.querySelector(".sizeCounter").textContent = cnt;
  };
}

// сворачивание филтра по размерам

document.querySelector(".sizeArrow").onclick = () => {
  document
    .querySelector(".sizeArrow")
    .classList.toggle("shop__bodyFltArrow_down");
  document
    .querySelector(".sizeContent")
    .classList.toggle("shop__bodyFltItemContent_off");
};

// ЦЕНЫ
// указание мин/макс цены в плейсхолдере инпутов

function minMaxPrices(allPrices = []) {
  salesObj.forEach((obj) => allPrices.push(Number(obj.price)));
  document.querySelector("#priceFrom").placeholder = Math.min(...allPrices);
  document.querySelector("#priceTill").placeholder = Math.max(...allPrices);
}
minMaxPrices();

// сворачивание фильтра по цене

document.querySelector(".priceArrow").onclick = () => {
  document
    .querySelector(".priceArrow")
    .classList.toggle("shop__bodyFltArrow_down");
  document
    .querySelector(".priceContent")
    .classList.toggle("shop__bodyFltItemContent_off");
};

// добавление "сортировки по" при разрешении < 480 в фильтр по ценам

function marketSortBy(sortHtml) {
  sortHtml = document.querySelector(".shop__titleInfoTopSort").innerHTML;
  document.querySelector(".shop__bodyFltItemSortBy").innerHTML = sortHtml;
}
marketSortBy();

// КНОПКИ ПАГИНАЦИИ

const pageBtns = document.querySelectorAll(".shop__pagingPage");
for (const pageBtn of pageBtns) {
  pageBtn.onclick = () => {
    pageBtns.forEach((btn) => btn.classList.remove("shop__pagingPageSelected"));
    !isNaN(Number(pageBtn.textContent))
      ? pageBtn.classList.add("shop__pagingPageSelected")
      : nextPage();
  };
  function nextPage() {
    for (let i = 0; i < pageBtns.length; i++) {
      pageBtns[0].classList.add("shop__pagingPageSelected");
    }
  }
}

// ПЕРЕХОД НА ШАБЛОН РАЗВЕРНУТОЙ КАРТОЧКИ

const allCardsToTpl = document.querySelectorAll(".shop__bodyCard");
for (const card of allCardsToTpl) {
  card.addEventListener("click", () => {
    document.location = "./card.html";
  });
}
