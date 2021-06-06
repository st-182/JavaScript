// !Task 1
// Variables
// const h1 = document.querySelector(`h1`);
// const div = document.querySelector(`div`);
// // Functions
// const myFunction = () => {
//   h1.style.fontSize = `64px`;
//   h1.style.color = `red`;
//   h1.style.cursor = `pointer`;
//   //   div
//   div.style.heoght = `100vh`;
//   div.style.display = `flex`;
//   div.style.justifyContent = `center`;
//   div.style.alignItems = `center`;
// };
// // Events
// h1.addEventListener(`click`, myFunction);
// !Task 3, 2, and 1

const h1 = document.querySelector(`h1`);
const div = document.querySelector(`div`);
const btn = document.querySelector(`button`);
let positionTop = true;
let positionLeft = true;

// Functions
const myFunction = () => {
  h1.style.fontSize = `64px`;
  h1.style.color = `red`;
  h1.style.cursor = `pointer`;
  //   div
  div.style.heoght = `100vh`;
  div.style.display = `flex`;
  div.style.justifyContent = `center`;
  div.style.alignItems = `center`;
};
const topLeft = () => {
  btn.style.position = `absolute`;
  btn.style.top = `0`;
  btn.style.bottom = ``;
  btn.style.left = `0`;
  btn.style.right = ``;
  positionTop = true;
  positionLeft = true;
  return `topLeft done`;
};
const bottomLeft = () => {
  btn.style.position = `absolute`;
  btn.style.bottom = `0`;
  btn.style.left = `0`;
  btn.style.top = ``;
  btn.style.right = ``;
  positionTop = true;
  positionLeft = false;
  return `bottomLeft done`;
};
const bottomRight = () => {
  btn.style.position = `absolute`;
  btn.style.bottom = `0`;
  btn.style.right = `0`;
  btn.style.top = ``;
  btn.style.left = ``;
  positionTop = false;
  positionLeft = true;
  return `bottomRight done`;
};
const topRight = () => {
  btn.style.position = `absolute`;
  btn.style.top = `0`;
  btn.style.right = `0`;
  btn.style.bottom = ``;
  btn.style.left = ``;
  positionTop = false;
  positionLeft = false;
  return `topRight done`;
};
const oneTwoThreeFour = () => {
  if (positionTop === true) {
    positionLeft === true
      ? console.log(bottomLeft())
      : console.log(bottomRight()); // true true; true false
  } else {
    positionLeft === true ? console.log(topRight()) : console.log(topLeft()); // false true; false false
  }
};
// Events
btn.addEventListener(`DOMContentLoaded`, topLeft);
btn.addEventListener(`click`, oneTwoThreeFour);
h1.addEventListener(`click`, myFunction);
// !Task 4
// addition to task 3
console.log(document.querySelector(`input`));

document.querySelector(`input`).addEventListener(`blur`, (e) => {
  //focusout
  e.preventDefault();
  console.log(`working`);

  const input = document.querySelector(`input`);
  console.log(input.value.length);
  if (input.value.length <= 2) {
    document.body.style.backgroundColor = `red`;
  } else {
    document.body.style.backgroundColor = `green`;
  }
});

// !Task 5
const btn2 = document.querySelector(`button:nth-of-type(2)`);
const arr = ["red", "green", "blue", "yellow"];
console.log(arr.length);
function random() {
  return Math.floor(Math.random() * 255);
}
btn2.addEventListener(`click`, () => {
  // btn2.style.backgroundColor = arr[Math.floor(Math.random() * arr.length)];
  btn2.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
});
// !Task 6
