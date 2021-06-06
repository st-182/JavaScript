// 1. Pasirašome HTML.
// --> Game Container blokas, kuriame:
// --> Susikurti 3 blokus - jie reprezentuos skirtingus vaizdus (tačiau viskas vyks viename psl - index.html)
// 1. START PAGE - MYGTUKAI: CHANGE BG IR START GAME;
// 2. GAME PAGE - SCORE: ; SAUSAINIO NUOTRAUKA; MYGTUKAS GO TO SHOP;
// 3. SHOP PAGE - MYGTUKAS GO BACK TO GAME; + 4 MYGTUKAI APSIPIRKIMUI;
// 2. Su CSS susitvarkome pradinį vaizdą: t.y. pradžioje matome tik start page, tačiau viską išcentruojame, sutvarkome dydžius, apsirašome mygtukus (sukuriame jiems id/klases, juos pasiimsime su JS).
// 3. Su JS apsirašome logiką.
// 1. start page - jame yra mygtukas (Start), kurį paspaudus mums rodomas žaidimo vaizdas, o start mygtukas neberodomas;
// 2. game page:
//     - jame yra užrašas score, kuris keisis kiekvieną kartą paspaudus ant sausainio;
//     - sausainio nuotrauka, kurią spaudinėsime, kad rinktume taškus;
//     - užvedus pelyte ant sausainio nuotraukos - ji padidėja 1.2 karto, pelytę patraukus sumažėja iki originalios. Aprašoma per JS.
//     - mygtukas shop, kurį paspaudus bus atvaizduojama "parduotuvė", tuo tarpu sausainis nebėra atvaizduojamas;
// 3. shop page: jame yra nurodomas bendras surinktų taškų kiekis, ir keli pasirinkimai:
//     - mygtukas BACK - paspaudus vėl atvaizduojamas game page;
//     - mygtukas MAKE COOKIE SPIN. COST 20 POINTS;
//     - mygtukas ADD TWO POINTS ON CLICK. COST 100 POINTS;
//     - mygtukas ADD FIVE POINTS ON CLICK. COST 300 POINTS;
//     - mygtukas CHANGE COOKIE IMAGE TO NEW ONE. COST 150 POINTS;

// variables
const changebg = document.querySelector(`#changebg`);
const start = document.querySelector(`#start`);
const gotoshop = document.querySelector(`#gotoshop`);
const spin = document.querySelector(`#spin`);
const add2 = document.querySelector(`#add2`);
const add5 = document.querySelector(`#add5`);
const addmore = document.querySelector(`#addmore`);
const goback = document.querySelector(`#goback`);
const imgCookie = document.querySelector(`#imgcookie`);
const smile = document.querySelector(`#smile`);
const anime = document.querySelector(`#anime`);
const cow = document.querySelector(`#cow`);
const flex = document.querySelector(`.flex`);
let startpage = document.querySelector(`#startpage`);
let gamepage = document.querySelector(`#gamepage`);
let shoppage = document.querySelector(`#shoppage`);
let score = 0;
let points = 1;
// events
start.addEventListener(`click`, openGame);
gotoshop.addEventListener(`click`, openShop);
goback.addEventListener(`click`, openGame);
imgCookie.addEventListener(`mouseover`, cookieScale);
imgCookie.addEventListener(`mouseleave`, cookieScaleBack);
imgCookie.addEventListener(`click`, scorePoints);
spin.addEventListener(`click`, spinTheCookie);
add2.addEventListener(`click`, scorePointsX2);
add5.addEventListener(`click`, scorePointsX5);
document.addEventListener(`keydown`, stopTheCookie);
addmore.addEventListener(`click`, accessSkins);
smile.addEventListener(`click`, changeTheCookieSmile);
anime.addEventListener(`click`, changeTheCookieAnime);
cow.addEventListener(`click`, changeTheCookieCow);
// logic, functions
function openGame(e) {
  e.preventDefault;
  startpage.style.display = "none";
  gamepage.style.display = "flex";
  shoppage.style.display = "none";
}
function openShop(e) {
  e.preventDefault;
  gamepage.style.display = "none";
  shoppage.style.display = "flex";
}
// function cookieScaleClick(e) {
//   e.preventDefault;
// }
function fastCookie(e) {
  e.preventDefault;
  if (score > 300) {
    imgCookie.style.animationDuration = `4s`;
  }
}
fastCookie();
function cookieScale(e) {
  e.preventDefault;
  imgCookie.classList.add(`transform`);
}
function cookieScaleBack(e) {
  e.preventDefault;
  imgCookie.classList.remove(`transform`);
}
function scorePoints(e) {
  e.preventDefault;
  score += points;
  updateScore();
}
function updateScore() {
  document.querySelector(`#text`).textContent = `Score: ${score}`;
  document.querySelector(`#text1`).textContent = `Score: ${score}`;
}
function nomoney() {
  document.querySelector(
    `#text`
  ).textContent = `Start playing Right NOW! ${score}`;
  document.querySelector(
    `#text1`
  ).textContent = `NOT ENOUGH POINTS, play moooooreeee!!!!`;
}
function spinTheCookie(e) {
  e.preventDefault;
  if (score >= 25) {
    score = score - 25;
    imgCookie.classList.add(`rotate`);
    add2.setAttribute(`disabled`, true);
    updateScore();
  } else {
    nomoney();
  }
}
function stopTheCookie(e) {
  e.preventDefault;
  imgCookie.classList.remove(`rotate`);
}

function scorePointsX2(e) {
  e.preventDefault;
  if (score >= 50) {
    points = 2;
    score = score - 50;
    add2.setAttribute(`disabled`, true);
    updateScore();
  } else {
    nomoney();
  }
}
function scorePointsX5(e) {
  e.preventDefault;
  if (score >= 150) {
    points = 5;
    score = score - 150;
    add2.setAttribute(`disabled`, true);
    updateScore();
  } else {
    nomoney();
  }
}
function accessSkins(e) {
  e.preventDefault;
  if (score >= 100) {
    score = score - 100;
    flex.style.display = "flex";
    add2.setAttribute(`disabled`, true);
    updateScore();
  } else {
    nomoney();
  }
}
function changeTheCookieSmile(e) {
  e.preventDefault;
  if (score >= 200) {
    points = 6;
    score = score - 200;
    imgcookie.setAttribute(`src`, `1.png`);
    add2.setAttribute(`disabled`, true);
    updateScore();
  } else {
    nomoney();
  }
}
function changeTheCookieAnime(e) {
  e.preventDefault;
  if (score >= 550) {
    points = 6 + Math.floor(Math.random() * 20);
    score = score - 550;
    imgcookie.setAttribute(`src`, `2.png`);
    add2.setAttribute(`disabled`, true);
    updateScore();
  } else {
    nomoney();
  }
}
function changeTheCookieCow(e) {
  e.preventDefault;
  if (score >= 1000) {
    points =
      Math.floor(Math.random() * 20) * 5 +
      Math.floor(Math.random() * 20) -
      Math.floor(Math.random() * 20);
    score = score - 1000;
    imgcookie.setAttribute(`src`, `3.png`);
    add2.setAttribute(`disabled`, true);
    updateScore();
  } else {
    nomoney();
  }
}
