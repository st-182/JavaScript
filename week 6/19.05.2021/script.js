const item = document.querySelectorAll(`.item`);
const box = document.querySelector(`.box`);
console.log(box);
// box.addEventListener(`mouseover`, boxFunction);
// function boxFunction() {
//   return (box.style.border = `1px solid black`);
// }
box.addEventListener(`mouseover`, () => {
  box.style.outline = `6px solid red`;
});
box.addEventListener(`mouseleave`, () => {
  box.style.outline = `none`;
});
console.log(box);
for (let i = 0; i < item.length; i++) {
  const eachItem = item[i];
  eachItem.addEventListener(`mouseover`, () => {
    eachItem.style.outline = `4px solid yellow`;
  });
  eachItem.addEventListener(`mouseleave`, () => {
    eachItem.style.outline = `none`;
  });
}
let random = () => Math.floor(Math.random() * 255);
for (let i = 0; i < item.length; i++) {
  const eachItem = item[i];
  eachItem.addEventListener(`click`, () => {
    // eachItem.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
    if (eachItem.style.backgroundColor) {
      eachItem.style.backgroundColor = ``;
    } else {
      eachItem.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
    }
  });
  eachItem.addEventListener(`click`, () => {
    eachItem.style.backgroundColor = `none`;
  });
}
