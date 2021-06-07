// Promices, async await, callbacks, listeners
// console.log(`Inicializing`);
// console.log(`Hellow world`);
// function greeting() {
//   return `Hellow Again!`;
// }
// console.log(greeting());
// console.log(`Hellow WORLD 3!`);

// setTimeout(function () {
//   console.log(`a`);
// }, 3000);
// setInterval(function () {
//   console.log(`b`);
// }, 5000);
//!
let name;
let username;
function getUserData() {
  name = `Aristidas`;
  surname = `Jasudas`;
  return true;
}
function showGreeting(a, b) {
  return `Hellow, ${a} ${b}`;
}
getUserData();
console.log(showGreeting(name, surname));
