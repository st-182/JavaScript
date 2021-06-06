function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(3, 2, 1));
function callback(callback, randNumMaxValue) {
  let num1 = Math.round(Math.random() * randNumMaxValue);
  let num2 = Math.round(Math.random() * randNumMaxValue);
  let num3 = Math.round(Math.random() * randNumMaxValue);
  console.log(num1);
  console.log(num2);
  console.log(num3);
  return sum(num1, num2, num3);
}
// console.log(num1);
// console.log(num2);
// console.log(num3);

console.log(callback(sum, 10));

//! #2 with arrow
const callbackf2 = (callback, name) => callback(name);

const greetinginLT = (name) => `Sveiki, ${name}`;
const greetinginEN = (name) => `Hi, ${name}`;

console.log(callbackf2(greetinginLT, `Aristidas`));
console.log(callbackf2(greetinginEN, `Aristidas`));
