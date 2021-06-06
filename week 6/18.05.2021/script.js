// !function without parameters
// function logger() {
//   console.log(`Hi`);
// }
// function newLogger(name) {
//   console.log(`Hi ${name}`);
// }
// function newOneLogger(min, max) {
//   console.log(`Hi ${min + max}`);
// }
// function newTwoLogger(min, max) {
//   for (let i = min; i < max; i++) {
//     console.log(`Hi ${i}`);
//   }
// }
// newTwoLogger(2, 5);
// newTwoLogger(0, 15);

// function one(a, b) {
//   return a + b;
// }
// let result = one(5, 6);

function fruitProcessor(a, b, c) {
  return a + b + c;
}
let result = fruitProcessor(`apples`, ` and `, `mangoes`);
console.log(`juice is made of ${result}`);

// 2.
// paprasyti funkcija, kuri priims 2 parametrus, ir palygins ar tie parametrai yra lygus ir vienodi.
// turi grazinti rezultata
function arLygus(a, b) {
  return a === b;
}
let result1 = arLygus(`apples`, `apples`);
console.log(` ${result1}`);

// 3.
let strings = ["Labas", "vakaras", "ponios", "ir", "ponai"];
let array = [1, 5, 15, 0.3, -9, -63, 25898412, 15];
// parasyti funkcija, kuriai i parametrus padavus masyva, ir ja iskvietus, ciklo pagalba butu konsoleje atvaizduojami masyvo elementai.
function myArray(varibale) {
  for (let i = 0; i < varibale.length; i++) {
    console.log(varibale[i]);
  }
}
let result2 = myArray(strings);
// task 4
// parasyti funkcija, kuriai padavus gimimo metus ir dabartinius metus bus apskaiciuojami metai like iki pensijos (tebunie - pensija prasides 65)
function pensija(gimmet, dabar) {
  const penamz = 65;
  return penamz - (dabar - gimmet) > 0
    ? console.log(` ${penamz - (dabar - gimmet)}`)
    : console.log(`person is already retired`);
}
let ikiPensijos = pensija(1998, 2021);

// task upgrade:
// jeigu iki pensijos like metai yra daugiau uz 0, graziname tik metus, kitu atveju graziname sakini 'person is already retired'
let pensija1 = function (gimmet, dabar) {
  const penamz = 65;
  return penamz - (dabar - gimmet) > 0
    ? console.log(` ${penamz - (dabar - gimmet)}`)
    : console.log(`person is already retired`);
};
pensija1(1998, 2021);

let comparison = (num1, num2) => num1 + num2;
console.log(comparison(12, 12));

let greeting = (comparison) => console.log(`the answer` + comparison(12, 12));

let fruitProcessor2 = (a, c) => `juice is made of ${a} and ${c}`;

console.log(fruitProcessor2(`apples`, `mangoes`));
