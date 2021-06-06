const country = "Lietuva";
const continent = "Eurasia";
let population = 2.8;
console.log(
  `My country is ${country}, continent is ${continent}, and population is ${population}`
);
console.log(
  "My country is " +
    country +
    ", continent is " +
    continent +
    ", and population is " +
    population
);
const typeOfIslandNo = false;
console.log(country + "'s type is " + typeOfIslandNo + " island");
switch (typeOfIslandNo) {
  case true:
    console.log(`${country} is island`);
    break;
  case false:
    console.log(`${country} is not island`);
    break;
}
// 13.05.2021
let language;
console.log(typeof typeOfIslandNo);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
language = "Lithuanian";

let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(`none 17 17 true 134`);
console.log("9" - "5");
console.log("19" + "a" - "17");
console.log("19" - "13" + 17);
console.log("A" < "a");
console.log(5 + 6 + "4" + 9 - 4 - 2);

population++;
console.log(population);
population--;
console.log(population);
let finland = 6;
console.log(population > finland);
const avaragePopulation = 33;
console.log(avaragePopulation > population);
let description = `" ${country} is in ${continent} , and its ${population} million people speak ${language}"`;
console.log(description);
// alert("hi, nice to come here and stop your javaSCRIPT");

// let answer = prompt(`are you ok?`);
//  alert(answer);
// console.log(answer);

// if (((answer = `ok`), (answer = `good`))) {
// alert(`nice! very good!`);
// }
population = 33;
if (population > 33) {
  console.log(`${country}'s population is more then 33 million`);
} else if (population === 33) {
  console.log(`${country}'s population is criticaly small`);
} else {
  console.log(`${country}'s population something else`);
}

// let numNeighbours = Number(
//   prompt(`how many neighbouring countries does your country have?`)
// );
let numNeighbours;
if (numNeighbours === 1) {
  console.log(`only one`);
} else if (numNeighbours > 1) {
  console.log(` more then 1`);
} else {
  console.log(`no borders`);
}
if (country == `Lietuva` && continent == `Eurasia`) {
  console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa`);
} else {
  console.log(`No NO nO no No`);
}
if (country == `Lithuania` || continent == `Eurasia`) {
  console.log(`No, never`);
} else {
  console.log(`YES, FOREVER Aaaaaaa`);
}
let language1 = `English`;
let population1 = 49;
island = false;
if (language1 === `English` && population1 < 50 && !island) {
  console.log(`YES, this country is goooooooooooood`);
} else {
  console.log(`It seems that you are in ${country}`);
}
// population = 130;
const result =
  population > 33
    ? console.log(` ${country}'s POPULATION is ABOVE avarage`)
    : console.log(` ${country}'s POPULATION is BELOW avarage`);
const result1 = population > 33 ? `above` : `below`;
console.log(` ${country}'s POPULATION is ${result1} avarage`);
let fName = prompt(`iveskite varda`);
// if (fName != ``) {
//   console.log(fName);
// }
fName != `` ? console.log(`Hi, ${fName}`) : null;

let firstName = `Jonas`;
let wrongName = true;
// if ((wrongName = true)) {
//   firstName = `Dzionis`;
// } else {
//   console.log(firstName);
// }
wrongName == true ? (firstName = `Dzionis`) : console.log(firstName);
// console.log(firstName);
let dateOne = 1991;
let dateTwo = 2020;
dateOne > dateTwo ? console.log(dateOne) : console.log(dateOne - dateTwo);

let newName;
wrongName ? (newName = `Kukumber`) : (newName = firstName);
console.log(newName);

let a = 36;
let b = 54;
let c = 11;
let d = 44;

a + b < c + d
  ? console.log(`${a + b} is less then ${c + d}`)
  : a > 10 && b > 10 && c > 10 && d > 10
  ? console.log(` THE answer `)
  : console.log(` NO, no answer `);

let language11 = `mandarin`;
switch (language11) {
  case `chinese`:
  case `mandarin`:
    console.log(` The biggest number of native speackers `);
    break;
  case `spanish`:
    console.log(` 2nd place `);
    break;
  case `english`:
    console.log(` 3rd place `);
    break;
  case `hindi`:
    console.log(` 4th arabic  5th most spoken language`);
    break;
  default:
    console.log(` great language`);
    break;
}
