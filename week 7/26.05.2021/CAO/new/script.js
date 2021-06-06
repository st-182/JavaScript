// *Susikuriame h1 elementą, jame įrašome savo vardą, pastilizuojame, kad elementas būtų raudonas ir pridedame jį prie <body>.
// *Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų brand'ais. <body> turi atsirasti <ul>, kuriame trys <li>
// const h1 =
document
  .querySelector(`main`)
  .appendChild(document.createElement(`h1`)).textContent = `Aristidas`;
document.querySelector(`h1`).style.color = `red`;
document
  .querySelector(`main`)
  .appendChild(
    document.createElement(`ul`)
  ).innerHTML = `<li>BMW<li>Audi<li>Mercedes`;
