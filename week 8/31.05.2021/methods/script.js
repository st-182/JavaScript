// JS callback array methods: forEach, map, filter, find, some, every

// -- forEach()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// let numbers = [1, 2, 3, 4, 5];

// ES5
// console.log('ES5:');
// numbers.forEach(function (item, index, array) {
//     console.log(`Item:${item} | Index: ${index} | Array: ${array}`);
// });

// ES6
// console.log('ES6:');
// numbers.forEach((item, index, array) => {
//     console.log(`Item:${item} | Index: ${index} | Array: ${array}`);
// });

// --- Example with .forEach and DOM: hanging body according to div's background (V1 - not so good)
// Variables
// let body = document.querySelector('body');

// let box1 = document.querySelector('#box-1');
// let box2 = document.querySelector('#box-2');
// let box3 = document.querySelector('#box-3');
// let box4 = document.querySelector('#box-4');
// let box5 = document.querySelector('#box-5');

// // Functions
// function changeBackgroundToDivOne() {
//   let style = getComputedStyle(box1);

//   body.style.backgroundColor = style.backgroundColor;
// }

// function changeBackgroundToDivTwo() {
//   let style = getComputedStyle(box2);

//   body.style.backgroundColor = style.backgroundColor;
// }

// function changeBackgroundToDivThree() {
//   let style = getComputedStyle(box3);

//   body.style.backgroundColor = style.backgroundColor;
// }

// function changeBackgroundToDivFour() {
//   let style = getComputedStyle(box4);

//   body.style.backgroundColor = style.backgroundColor;
// }

// function changeBackgroundToDivFive() {
//   let style = getComputedStyle(box5);

//   body.style.backgroundColor = style.backgroundColor;
// }

// // Events
// box1.addEventListener('click', changeBackgroundToDivOne);
// box2.addEventListener('click', changeBackgroundToDivTwo);
// box3.addEventListener('click', changeBackgroundToDivThree);
// box4.addEventListener('click', changeBackgroundToDivFour);
// box5.addEventListener('click', changeBackgroundToDivFive);

// --- Example with .forEach and DOM: changing body according to div's background (V2 - good)
// let body = document.querySelector('body');
// let boxes = document.querySelectorAll('.box');

// boxes.forEach(function (box) {
//   box.addEventListener('click', () => {
//     let style = getComputedStyle(box);

//     body.style.backgroundColor = style.backgroundColor;
//   });
// });

// ---///---

// -- map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// let numbers = [1, 2, 3, 4, 5];

// ES5
// let doubleNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// ES6
// let trippleNumbers = numbers.map((number) => number * 3);

// console.log('doubleNumbers', doubleNumbers);
// console.log('trippleNumbers', trippleNumbers);

// ---///---

// -- filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ES5
// let numbersBiggerThanFive = numbers.filter(function (number, index, array) {
//   return number > 5;
// });

// ES6
// let numbersBiggerThanSeven = numbers.filter((number) => number > 7);

// console.log('numbersBiggerThanFive', numbersBiggerThanFive);
// console.log('numbersBiggerThanSeven', numbersBiggerThanSeven);

// let names = ['Tadas', 'Linas', 'Rasa', 'Inga', 'Linas', 'Rasa', 'Rasa'];

// let nameRasa = names.filter(function (name) {
//   return name === 'Rasa';
// });

// console.log(nameRasa);

// -- find()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// let searchedUser = names.find(function (name) {
//   return name === 'Juozas';
// });

// if (searchedUser) {
//   console.log('User with that name exist');
// } else {
//   console.log('User with that name does not exist');
// }

// -- some()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// let numbers = [4, 5, 8, 96, 24, 5, 22, 78];

// ES5
// let hasNumberBiggerThanTen = numbers.some(function (number, index, array) {
//   return number > 10;
// });

// ES6
// let hasNumberBiggerThanFive = numbers.some(
//   (number, index, array) => number > 5
// );

// console.log('hasNumberBiggerThanTen', hasNumberBiggerThanTen);
// console.log('hasNumberBiggerThanFive', hasNumberBiggerThanFive);

// -- every()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// ES5
// let allNumbersBiggerThanFour = numbers.every(function (number, index, array) {
//   return number > 4;
// });

// console.log('allNumbersBiggerThanFour', allNumbersBiggerThanFour);
// !Monday-----------------------------------------------------------------------------------------------------------------
// ? Sort()
let numbers = [1, 2, 3, 4, 5];
for (i = 0; i < 10; i++) {
  numbers[i] = Math.floor(Math.random() * 15);
}
// console.log(numbers.sort());
// console.log(
//   numbers
//     .sort((a, b) => {
//       a - b;
//     })
//     .reverse()
// );
// console.log(
//   numbers.sort((a, b) => {
//     b - a;
//   })
// );
let users = [
  { name: "John", surname: "Smith", age: 24 },
  { name: "Alex", surname: "James", age: 45 },
  { name: "Rose", surname: "Namajunas", age: 30 },
  { name: "James", surname: "Farrel", age: 35 },
  { name: "Will", surname: "Smith", age: 21 },
  { name: "Peter", surname: "Gold", age: 18 },
  { name: "John", surname: "Snow", age: 55 },
  { name: "Tom", surname: "Smith", age: 37 },
];
const youngUsers = users.map((item) => item).sort((a, b) => a.age - b.age);
console.log(youngUsers);
// const youngUsers = users.map((item) => item).sort((a, b) => a.age - b.age);
// sort by name
// const youngUsersNames = users
//   .map((item) => item)
//   .sort(function (a, b) {
//     let nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     let nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//   });
// console.log(youngUsersNames);
let usersAgeAverage = Math.round(
  users.reduce(function (total, currentItem) {
    return total + currentItem.age;
  }, 0) / users.length
);
console.log(usersAgeAverage);
// 1. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

const numberOne = 19980308;
function backwards(num) {
  let num1 = String(num);
  return Number(num1.split(``).reverse().join(``));
}
console.log(backwards(numberOne));
// 2. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"
const arrMas = [8, 5, 4, 2, 7, 1, 9];
// let max = 0;
// let min = 0;
// arrMas.forEach(function (item) {
//   if (max < item) {
//     max = item;
//   }
//   if (min > item) {
//     min = item;
//   }
// });
// console.log(`"Mažiausas: ${min}, Didžiausas: ${max}"`);
// console.log(
//   `"Mažiausas: ${Math.min.apply(null, arrMas)}, Didžiausas: ${Math.max.apply(
//     null,
//     arrMas
//   )}"`
// );
// console.log(
//   `"Mažiausas: ${arrMas.forEach((item) =>
//     Math.min(item)
//   )}, Didžiausas: ${arrMas.forEach((item) => Math.max(item))}"`
// );
function minMax(arr) {
  let newOne = arr.map((item) => item).sort();
  console.log(`Mažiausas: ${newOne.shift()}, Didžiausas: ${newOne.pop()}`);
}
minMax(arrMas);
console.log(arrMas);
