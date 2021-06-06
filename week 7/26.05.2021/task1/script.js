// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.
// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:
// <h2> tag’as su tekstu;
// <p> tag’as su tekstu;
// <ul> tag’as, kurio viduje yra vienas <li>
// <p> tag’as su tekstu;
document.querySelector(`body`).style.backgroundColor = `red`;
const divMain = document.querySelector(`.main`);

const h2 = document.createElement(`h2`);
const p = document.createElement(`p`);
const p2 = document.createElement(`p`);
const createUl = document.createElement(`ul`);
const li = document.createElement(`li`);

divMain.appendChild(h2).textContent = `su tekstu`;
divMain.appendChild(p).textContent = `su tekstu`;
divMain.appendChild(createUl);
const ul = document.querySelector(`ul`);
ul.appendChild(
  li
).textContent = `<ul> tag’as, kurio viduje yra vienas <li> su tekstu`;
divMain.appendChild(p2).textContent = `su tekstu AGAIN`;
