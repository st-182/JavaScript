//Imports
import endpoints from "./modules/endpoints.js";
import nav from "./components/nav.js";
console.log(nav(), endpoints());

//variables
const shopAllBtn = document.querySelector(`#shop-all`);
const canvasesAllBtn = document.querySelector(`#canvases`);
const postersAllBtn = document.querySelector(`#posters`);
const stickersAllBtn = document.querySelector(`#stickers`);
const apparelsAllBtn = document.querySelector(`#apparels`);
const cupsAllBtn = document.querySelector(`#cups`);
const calendarsAllBtn = document.querySelector(`#calendars`);

const start = (EndPoint) => {
  fetch(EndPoint)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(`#output`).innerHTML = data.reduce((acc, cur) => {
        acc += `
        <div class="item">
          <div class="img-div">
            <img src="${cur.image}" alt="">
          </div>
          <p>${cur.category}</p>
          <p>${cur.name}</p>
          <p></p>
          <p>${cur.price}</p>
        </div>
        `;
        return acc;
      }, ``);
      document.querySelector(
        `#showing`
      ).textContent = `Showing all ${data.length} results`;
    });
  // ?per_page=100
  // ?category=30
};

document.addEventListener(`DOMContentLoaded`, () => {
  start(endpoints(`all`));
});
shopAllBtn.addEventListener(`click`, () => {
  start(endpoints(`all`));
});
canvasesAllBtn.addEventListener(`click`, () => {
  start(endpoints(`canvases`));
});
postersAllBtn.addEventListener(`click`, () => {
  start(endpoints(`posters`));
});
stickersAllBtn.addEventListener(`click`, () => {
  start(endpoints(`stickers`));
});
apparelsAllBtn.addEventListener(`click`, () => {
  start(endpoints(`apparels`));
});
cupsAllBtn.addEventListener(`click`, () => {
  start(endpoints(`cups`));
});
calendarsAllBtn.addEventListener(`click`, () => {
  start(endpoints(`calendars`));
});
