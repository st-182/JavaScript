// Recap Arrays
// Darbas su masyvais
let arr = [1, 2, 3, 4, 5, 6];
// console.log(`originalus massivas:`, arr);
// Darbas su masyvo pabaigi
// pop(); - panaikina paskutini masyvo elementa
arr.pop();
// console.log(`.pop():`, arr);

// .push() - prideda elementus
arr.push(6, 7, 8);
// console.log(`.push():`, arr);

// Darbas su masyvo pradzia
// .shift() - panaikina 1 masyvo elementa i pradzia
arr.shift();
// console.log(`.shift():`, arr);
// .unshift() - prideda 1 masyvo elementa i pradzia
arr.unshift(-1, 0, 1);
// console.log(`.unshift():`, arr);

// Ciklai ir masyvai
// for loop
for (let i = 0; i < arr.length; i++) {
  //   console.log(`Data from loop`, arr[i]);
}
// for of loop
for (let number of arr) {
  //number - unic item, value
  //   console.log(`Data from for of loop`, number);
}

// for of loop
for (let numer in arr) {
  //number - is index (place)
  //   console.log(`Data from for in loop`, numer);
}
//
//
//
//
//
// task 2
// let array = [`Jazz`, `Blues`];
// console.log(array);

// array.push(`Rock-n-Roll`);
// console.log(array);

// array.splice(1, 1, `Classic`);
// // array[1] = `Classic`;
// console.log(array);

// console.log(array.shift());
// console.log(array);

// array.unshift(`Rap`, `Reggae`);
// console.log(array);
//
//
//
//
//
//! task 3
// Turite masyvą:
let arrr = [11, -2, 34, 45, 19, 6];
// Sukurkite funkciją getMaxSubSum(arr), kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.
getMaxSubSum(arrr);
function getMaxSubSum(randomArray) {
  let summ = 0;
  for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] > 0) {
      console.log(randomArray[i]);
      summ += randomArray[i];
    } else {
      console.log(`not a natural number`);
    }
  }
  console.log(`summ is `, summ);
}
//
//
//
//
//
// !task 4

// function getMaxSum(randomArray) {
//   let summ = 0;
//   for (let i = 0; i < randomArray.length; i++) {
//     if (typeof randomArray[i] === `number`) {
//       if (randomArray[i] > 0) {
//         summ += randomArray[i];
//       } else {
//         return `Error`;
//       }
//     }
//   }
//   return summ;
// }
// ?some new info
// add = function (arr2) {
//   return arr2.reduce((a, b) => a + b, 0);
// };

// let arr2 = [11, -2, 34, 45, 19, 6];

// let sum = add(arr2);
// console.log(sum);

// !task 5

// Objektai turi savybes ir metodus
let carObject = {
  name: `Audi`,
  year: 2016,
  start: function () {
    console.log(this.name, `is started`);
  },
};
console.log(carObject.start());
