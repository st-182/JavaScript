//JS callback array methods: forEach, map, filter, find, some, every

let numbers = [1, 2, 3, 4, 5];
// ES5
numbers.forEach(function (item, index, array) {
  console.log(`item: ${item} | Index: ${index} | Array: ${array}`);
});
console.log(`------------------------`);
// ES6
numbers.forEach((item, index, array) =>
  console.log(`Item: ${item} | Index: ${index} | Array: ${array}`)
);
// Changing body according to div background
let body = document.querySelector(`body`);
let main = document.querySelector(`main`);
let box1 = document.querySelector(`#box-1`);
let box2 = document.querySelector(`#box-2`);
let box3 = document.querySelector(`#box-3`);
let box4 = document.querySelector(`#box-4`);
let box5 = document.querySelector(`#box-5`);

let boxes = document.querySelectorAll(`.box`);
// let boxWithGetelementsByClassName = document.getElementsByClassName(`box`);
// console.log(boxWithQuerySelectorAll);
// console.log(boxWithGetelementsByClassName);

boxes.forEach(function (box) {
  box.addEventListener(`click`, function () {
    let style = getComputedStyle(box);
    body.style.backgroundColor = style.backgroundColor;
  });
});

// function changeBG() {
//   //   e.preventDefault();
//   console.log(`working`);
//   let style = getComputedStyle(box1);
//   body.style.backgroundColor = style.backgroundColor;
// }
// function changeBG2(e) {
//   //   e.preventDefault();
//   console.log(`working`);
//   let style = getComputedStyle(box2);
//   body.style.backgroundColor = style.backgroundColor;
// }
// function changeBG3(e) {
//   //   e.preventDefault();
//   console.log(`working`);
//   let style = getComputedStyle(box3);
//   body.style.backgroundColor = style.backgroundColor;
// }
// function changeBG4(e) {
//   //   e.preventDefault();
//   console.log(`working`);
//   let style = getComputedStyle(box4);
//   body.style.backgroundColor = style.backgroundColor;
// }
// function changeBG5(e) {
//   //   e.preventDefault();
//   console.log(`working`);
//   let style = getComputedStyle(box5);
//   body.style.backgroundColor = style.backgroundColor;
// }

// box1.addEventListener(`click`, changeBG);
// box2.addEventListener(`click`, changeBG2);
// box3.addEventListener(`click`, changeBG3);
// box4.addEventListener(`click`, changeBG4);
// box5.addEventListener(`click`, changeBG5);

// map - copy cels and insert data
// filter  - filters:)
//some
let mas = [2, 3, 5, 67, 44, 3, 5, 45, 0, 6, 43, 6];
