// JS funkcijos
// JS funkcijos
// JS funkcijos

// Task 1
// const myName = prompt();
// function alertName(i) {
//   alert(i);
// }
// alertName(myName);

// Task 1
// const myName = prompt();
// let alertName = (i) => alert(i);
// alertName(myName);

// Task 2
// let randomBack = () => console.log(Math.floor(Math.random() * 5 + 1));
// randomBack();

// Task 3
// const myName = prompt(`Your name`);
// const mySurname = prompt(`Your surname`);
// let nameLength = (a, b) => console.log(a.length + b.length);
// nameLength(myName, mySurname);

// Task 4
// alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// let myNumber = prompt(`number`);
// const numberInArray = (i) => console.log(alphabet[i]);
// numberInArray(myNumber);

// Task 5
// const num1 = Number(prompt(`Number 1`));
// const num2 = Number(prompt(`Number 2`));
// const action = prompt(`one of actions: "sum", "sub", "div", "multi"`);
// function paims(n1, n2, operator) {
//   return operator === `sum`
//     ? console.log(n1 + n2)
//     : operator === `sub`
//     ? console.log(n1 - n2)
//     : operator === `div`
//     ? console.log(n1 / n2)
//     : operator === `multi`
//     ? console.log(n1 * n2)
//     : console.log(`invalod operator, try again`);
// }
// paims(num1, num2, action);

// Task 6
let random = () => Math.floor(Math.random() * 10 + 1);
let randomSquared = (i) => Number(i) * Number(i);
console.log(randomSquared(random()));

// JS eventai
// JS eventai
// JS eventai
// Task 1
// function myName() {
//   alert(`Aristidas Jasudas`);
// }

// Task 2
// const button = document.querySelector(`button`);
// function myName() {
//   alert(`Aristidas Jasudas`);
// }
// button.addEventListener("click", myName);

// Task 2
// const button = document.querySelector(`button`);
// myName = () => alert(`Aristidas Jasudas`);
// button.addEventListener("click", myName);

// Task 3
// const button = document.querySelector(`button`);
// const myPar = document.querySelector(`p`);
// myParContent = () => (myPar.textContent = `I am 23 years old`);
// button.addEventListener("click", myParContent);

// Task 4
// const button = document.querySelector(`button`);
// const createH1 = document.createElement(`h1`);
// const createbutton = document.createElement(`button`);
// document.querySelector(`main`).appendChild(createH1);
// document.querySelector(`main`).appendChild(createbutton);
// createH1.innerHTML = `I clicked ${(i += i)} times!`;
// createbutton.innerHTML = `Press ONE More time! `;
// // clickCount = (i) => (createH1.innerHTML = `I clicked ${(i += i)} times!`);
// button.addEventListener("click", clickCount);

// Task 4
