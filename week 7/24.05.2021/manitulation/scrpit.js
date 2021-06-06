// --- boxed example --- //
// Variables
const btnOne = document.querySelector("#btn");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
// styles
// console.dir(boxOne);
// console.log(boxOne.id);
// boxOne.style.backgroundColor = "yellow";
// btnOne.addEventListener("click", () => {
//   boxOne.style.backgroundColor = "yellow";
// });
const createLTflag = () => {
  box1.style.backgroundColor = "yellow";
  box2.style.backgroundColor = "green";
  box3.style.backgroundColor = "red";
};
// Events
btnOne.addEventListener("click", createLTflag);

// --- Boxed example --- //
const headline = document.querySelector(`#headline`);
// console.dir(headline);
console.log(headline);
// function
const getBig = () => {
  headline.style.fontSize = `45px`;
  headline.classList.add(`ph`);
};
const getSmall = () => {
  headline.style.fontSize = `35px`;
  // headline.classList.add(`pv`);
};
// events
headline.addEventListener(`mouseover`, getBig);
headline.addEventListener(`mouseleave`, getSmall);

// Small boxes Example //
// variables
const boxes = document.querySelectorAll(`.small-box`);
const removeItemsCountElement = document.querySelector(`#remove-items-count`);
let removeItemsCount = 0;
// functions
const removeBox = (e) => {
  console.log(e.target);
  let random = () => Math.floor(Math.random() * 250 + 1);
  // e.target.style.display = `none`;
  e.target.style.visibility = `hidden`;
  removeItemsCount++;
  removeItemsCountElement.innerHTML = removeItemsCount;
  boxes.forEach(
    (box) =>
      (box.style.backgroundColor = `rgb(${random()},${random()},${random()})`)
  );
};

// events
boxes.forEach((box) => {
  box.addEventListener(`click`, removeBox);
});
document.addEventListener(`DOMContentLoaded`, () => {
  removeItemsCountElement.innerHTML = removeItemsCount;
});
