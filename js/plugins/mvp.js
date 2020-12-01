const mvpTittles = document.querySelectorAll(".mvp__padsItem");
const cardHolder = document.querySelector(".mvp__cardholder");

// дефолт

bestsellers();

// переключение стилей для заголовков MVP
// и вызов функции наполнения кардхолдера

for (const title of mvpTittles) {
  title.onclick = () => {
    for (let i = 0; i < mvpTittles.length; i++) {
      mvpTittles[i].classList.remove("mvp__padsSel");
    }
    title.classList.add("mvp__padsSel");
    if (title.classList.contains("mvp__newproducts")) {
      newproducts();
    } else if (title.classList.contains("mvp__salesoff")) {
      salesoff();
    } else if (title.classList.contains("mvp__bestsellers")) {
      bestsellers();
    }
  };
}

// отобразить только новинки

function newproducts() {
  cardHolder.innerHTML = "";

  const newProdArr = salesObj.filter((stsNew) => stsNew.status === "new");
  for (i = 0; i < newProdArr.length; i++) {
    cardHolder.innerHTML += `
      <div class="mvp__card">
        <div class="mvp__cardImgHolder">
          <img src="${newProdArr[i].url}" alt="${newProdArr[i].name}" />
        </div>
        <div class="mvp__cardSts">
          <img src="./img/icons/${newProdArr[i].status}.png" alt="" /><p>${newProdArr[i].label}</p>
        </div>
        <p class="mvp__cardName">${newProdArr[i].name}</p>
        <p class="mvp__cardPrice">${newProdArr[i].price}</p>
        <div class="mvp__cardHover"></div>
      </div>`;
  }
}

// отобразить только распродажу

function salesoff() {
  cardHolder.innerHTML = "";
  const salesArr = salesObj.filter(
    (salesItem) =>
      salesItem.status === "hot" ||
      salesItem.status === "top" ||
      salesItem.status === "few"
  );

  for (i = 0; i < salesArr.length; i++) {
    cardHolder.innerHTML += `
      <div class="mvp__card">
        <div class="mvp__cardImgHolder">
          <img src="${salesArr[i].url}" alt="${salesArr[i].name}" />
        </div>
        <div class="mvp__cardSts">
          <img src="./img/icons/${salesArr[i].status}.png" alt="" /><p>${salesArr[i].label}</p>
        </div>
        <p class="mvp__cardName">${salesArr[i].name}</p>
        <p class="mvp__cardPrice">${salesArr[i].price}</p>
        <div class="mvp__cardHover"></div>
      </div>`;
  }
}

// отобразить все MVP

function bestsellers() {
  cardHolder.innerHTML = "";

  for (let i = 0; i < salesObj.length; i++) {
    let sts = salesObj[i].status;

    cardHolder.innerHTML += `
    <div class="mvp__card">
      <div class="mvp__cardImgHolder">
        <img src="${salesObj[i].url}" alt="${salesObj[i].name}" />
      </div>
      <div class="mvp__cardSts">
        <img src="./img/icons/${salesObj[i].status}.png" alt="" /><p>${salesObj[i].label}</p>
      </div>
      <p class="mvp__cardName">${salesObj[i].name}</p>
      <p class="mvp__cardPrice">${salesObj[i].price}</p>
      <div class="mvp__cardHover"></div>
    </div>`;
  }
}

const allMvpToTpl = document.querySelectorAll(".mvp__card");
for (const mvp of allMvpToTpl) {
  mvp.onclick = () => {
    document.location = "./card.html";
  };
}
