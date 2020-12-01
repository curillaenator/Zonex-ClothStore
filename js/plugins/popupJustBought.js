// ОТОБРАЖЕНИЕ ПОП ОКОШКА РАНДОМНО КАЖДЫЕ 4-12 сек

// функция открывающее поп окно и закрывающая его через 3 сек

function JustBoughtFunc() {
  const justBought = document.querySelector(".banner__content-popup");
  justBought.classList.add("banner__content-popup_on");
  function JBFClose() {
    justBought.classList.remove("banner__content-popup_on");
  }
  setTimeout(JBFClose, time - 1000);
}

// переменная time служит для хранения промежутков времени
// переменная ri (RandomItem) хранит в себе ключ, по которому беруться данные из массива

let time = 100;
let ri = 0;
// let key = 0;

// с каждым новым отображением поп окна вычисляется новое значение для ri (ключ к массиву)

function randomItem() {
  const randRange = salesObj.length;
  ri = Math.floor(Math.random() * randRange);
  return ri;
}

// С каждым новым отображением поп окна вычисляется новый временной интервал
// между текущим и слудущим отображением поп
// переменной time присваивается новое значение интервала и запускается loop

function interval() {
  const rand = Math.floor(Math.random() * 6 + 4) * 1000;
  time = rand;
  loop();
}

// первичный вызов расчета интервала на странице и в нем вызов loop

interval();

// Loop запускате снова функции:
// 1. расчета наового рандмного ключа для следующей итерации
// 2. расчета нового рандомного интервала времени
// 3. повторно отображает поп окно с новым контентом
// 4. подставляет новый контент в HTML

function loop() {
  const popName = document.querySelector("#popName");
  const popLocation = document.querySelector("#popLocation");
  const popImage = document.querySelector("#popImage");

  window.setTimeout(randomItem, time);
  window.setTimeout(interval, time);
  window.setTimeout(JustBoughtFunc, time);
  popName.textContent = salesObj[ri].name;
  popLocation.textContent = salesObj[ri].locatiion;
  popImage.src = salesObj[ri].url;
}

document.querySelector(".banner__content-popupClose").onclick = () =>
  (popTrack.style.display = "none");
document.querySelector(".banner__content-popupImg").onclick = () => {
  document.location = "./card.html";
};
