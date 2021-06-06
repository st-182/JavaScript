"use strict";
// x = 3.14;

console.log("Labas");

alert("siandien mokomes JS");

const las = document.querySelector("h1");
las.addEventListener("click", updateName);
function updateName() {
  let name = prompt("Enter a new name");
  las.textContent = "JS basics " + name;
}
// nice js
let firstName = "Aristidas";

console.log(firstName);

firstName = "Aiste";

console.log(firstName);

const lastName = "XXXauskas";

var birthday = "2021.05.12";
console.log("gimimo data:", birthday);
