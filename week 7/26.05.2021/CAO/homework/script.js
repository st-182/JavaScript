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
}
//! Filling elements with content
//Functions

function fillingContent(toWhom, value) {
  document.querySelector(toWhom).textContent = value;
}

// Execution (content insertion)

fillingContent(`#logo__span`, `Phonk.com`);
fillingContent(`#nav__link1`, `Home`);
fillingContent(`#nav__link2`, `The best`);
fillingContent(`#nav__link3`, `The nearest phonk meet`);
fillingContent(`#nav__link4`, `Registration`);
fillingContent(`#nav__link5`, `Contacts`);

//! CSS
//Functions

function setStyle(toWhom, attribute, value) {
  document.querySelector(toWhom).style[attribute] = value;
}

// Execution (aplication of syles)
setStyle(`header`, `height`, `7vh`);
setStyle(`header`, `backgroundColor`, `gray`);

setStyle(`#navigation-toggler img`, `width`, `20px`);
