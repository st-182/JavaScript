//* Sukurkite HTML dokumentą, kuris <body> dalyje turės tris žymas, t.y. <header>, <main>, <footer>.
//! Done
//* <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu).

//* <main> dalyje bus trys <section>:

//* Pirmas <section> turės pilno pločio ir aukčio “slider” foną, kuriame bus trys paveikslėliai, kurie keisis kas 2 sekundės;

//* Antras <section> turės pilno pločio ir ne mažesnę nei 300px aukščio laikrodį (laikas rodomas kaip tekstas), kuriame bus matomos dabartinės valandos, minutės ir sekundės (atsinaujins realiu laiku);

//* Trečias <section> turės kontaktų formą, kurią užpildžius, po ja pasirodys žinutė, kurioje nurodoma, kad forma užpildyta sėkmingai;

//! ---------- Header ----------
//! Elements' creation
// ? Level 1:
// logo, toggler, and navigation
document
  .querySelector(`header`)
  .appendChild(document.createElement(`div`)) // #logo
  .setAttribute(`id`, `logo`);
document
  .querySelector(`header`)
  .appendChild(document.createElement(`div`)) // #navigation-toggler
  .setAttribute(`id`, `navigation-toggler`);
document
  .querySelector(`header`)
  .appendChild(document.createElement(`nav`)) // #navigation
  .setAttribute(`id`, `navigation`);

// ? Level 2:
// span for logo, icon (fontawsome), and <ul></ul> elements

document
  .querySelector(`#logo`)
  .appendChild(document.createElement(`span`)) // #logo__span
  .setAttribute(`id`, `logo__span`);
document
  .querySelector(`#navigation-toggler`)
  .appendChild(document.createElement(`img`)) // #navigation-toggler img
  .setAttribute(`src`, `burger-menu.svg`);
document
  .querySelector(`#navigation`)
  .appendChild(document.createElement(`ul`)) // #nav__ul
  .setAttribute(`id`, `nav__ul`);

// ? Level 3:
//  5 <li> elements with <a> links inside,

for (let i = 1; i < 6; i++) {
  document
    .querySelector(`#nav__ul`)
    .appendChild(document.createElement(`li`)) // #nav__ul li
    .appendChild(document.createElement(`a`)) // #nav__links
    .setAttribute(`id`, `nav__link${i}`);
  document.querySelector(`#nav__link${i}`).setAttribute(`href`, `#section${i}`);
}
//! Filling elements with content
//? Functions

function fillingContent(toWhom, value) {
  document.querySelector(toWhom).textContent = value;
}

//? Execution (content insertion)

fillingContent(`#logo__span`, `Phonk.com`);
fillingContent(`#nav__link1`, `Home`);
fillingContent(`#nav__link2`, `The best`);
fillingContent(`#nav__link3`, `The nearest phonk meet`);
fillingContent(`#nav__link4`, `Registration`);
fillingContent(`#nav__link5`, `Contacts`);

//! CSS
//? Functions

function setStyle(toWhom, attribute, value) {
  document.querySelector(toWhom).style[attribute] = value;
}
function setStyleAll(toWhom, attribute, value) {
  document.querySelectorAll(toWhom).style[attribute] = value;
}
//MARGIN and PADDING RESET //?GLOBAL STYLE
const style = document.createElement("style");
style.innerHTML = `
       *{
        margin: 0;
        padding: 0;
        font-family: roboto;
      }
    `;
document.head.appendChild(style);

// ?Execution (aplication of syles)
// flex header
setStyle(`header`, `height`, `7vh`); //header
setStyle(`header`, `backgroundColor`, `gray`);
setStyle(`header`, `display`, `flex`);
setStyle(`header`, `justifyContent`, `space-between`);
setStyle(`header`, `alignItems`, `center`);
setStyle(`header`, `flexWrap`, `wrap`);

setStyle(`#logo`, `color`, `white`); //logo
setStyle(`#logo`, `fontSize`, `1.5rem`);
setStyle(`#logo`, `width`, `50%`);
setStyle(`#logo`, `height`, `100%`);
setStyle(`#logo`, `display`, `flex`);
setStyle(`#logo`, `alignItems`, `center`);

setStyle(`#navigation-toggler`, `width`, `50%`); //hamburger-menu - container
setStyle(`#navigation-toggler`, `height`, `50%`);
setStyle(`#navigation-toggler`, `display`, `flex`);
setStyle(`#navigation-toggler`, `alignItems`, `center`);
setStyle(`#navigation-toggler`, `justifyContent`, `right`);

setStyle(`#navigation`, `width`, `100%`); //navigation for mobile
setStyle(`#navigation`, `display`, `none`);
// header elements

setStyle(`#navigation-toggler img`, `width`, `30px`); // hamburger-menu - icon
setStyle(`#navigation-toggler img`, `marginRight`, `3%`);
setStyle(`#navigation-toggler img`, `filter`, `invert(100%)`);

setStyle(`#logo__span`, `marginLeft`, `3%`); // logo margin

setStyle(`#nav__ul`, `listStyle`, `none`); // logo margin
setStyle(`#nav__ul`, `textAlign`, `center`);
// setStyle(`#nav__ul`, `padding`, `0`);

for (let q = 1; q < 6; q++) {
  setStyle(`#nav__link${q}`, `textDecoration`, `none`); // nav links
  setStyle(`li:nth-of-type(${q})`, `backgroundColor`, `gray`);
  setStyle(`li:nth-of-type(${q})`, `padding`, `10px`);
}
let li = document.getElementsByTagName(`LI`);

document
  .getElementsByTagName(`LI`)[1]
  .addEventListener(`mouseover`, hoverFunction);
function hoverFunction(e) {
  setStyle(`li:nth-of-type(1)`, `backgroundColor`, `white`);
}
document.querySelector(`li:nth-of-type(1)`).addEventListener(`mouseout`, () => {
  setStyle(`li:nth-of-type(1)`, `backgroundColor`, `gray`);
});

// x.addListener(myFunction);

// setStyle(`#nav__link2`, `textDecoration`, `none`);
// setStyle(`#nav__link3`, `textDecoration`, `none`);
// setStyle(`#nav__link4`, `textDecoration`, `none`);
// setStyle(`#nav__link5`, `textDecoration`, `none`);

//? Media Queries
// const mediaQuery = window.matchMedia(`(max-width: 768px)`);

// if (mediaQuery.matches) {
//   menuImage.style.display = `flex`;
//   headerDiv.style.position = `relative`;
//   headerDiv.style.textAlign = `right`;
//   headerDiv.style.zIndex = `2`;
//   headerDiv.style.lienHeight = `3`;
//   ulList.style.justifyContent = `flex-end`;

//   ulList.style.position = `absolute`;
//   ulList.style.display = `none`;
//   ulList.style.top = `3rem`;
//   ulList.style.flexDirection = `column`;

//   menuImage.addEventListener(`mouseover`, (e) => {
//     e.preventDefault();
//     ulList.style.display = `block`;
//   });

//   menuImage.addEventListener(`mouseleave`, (e) => {
//     e.preventDefault();
//     ulList.style.display = `none`;
//   });

//   menuImage.addEventListener(`click`, (e) => {
//     e.preventDefault();
//     ulList.style.display = `block`;
//   });
// }

//
//
//
//
//
//
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.body.style.backgroundColor = "rgb(86, 86, 86)";
  } else {
    document.body.style.backgroundColor = "rgb(65, 58, 76)";
  }
}

const x = window.matchMedia("(max-width: 768px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

//! Functions (some of functions are located in CSS section due to developer's preference)
//? Drop-down menu appears/disappears
document
  .querySelector(`#navigation-toggler img`)
  .addEventListener(`click`, (e) => {
    e.preventDefault();
    console.log(`Hamburger is working`);
    if (document.querySelector(`#navigation`).style.display === `block`) {
      document.querySelector(`#navigation`).style.display = `none`;
    } else {
      document.querySelector(`#navigation`).style.display = `block`;
    }
  });
//? Alternative Drop-down - ternary or switch
