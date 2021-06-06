// data types
const nickName = "st-182";
const digit = 15;

console.log(`my nickname is ${nickName}`.length);
console.log(`my nickname is ${nickName}`);
console.log(`my digit is ${digit}, and nickname is ${nickName} `);

const number = 15;
const number1 = "15";
const number2 = -56;

let country = "Lietuva";
let continent = "Eurasia";
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
console.log(typeof nickName);
console.log(typeof number);

const typeOfIslandyes = true;
const typeOfIslandno = false;
console.log(country + "'s type is " + typeOfIslandno + " island");
switch (typeOfIslandno) {
  case true:
    console.log(`${country} is island`);
    break;
  case false:
    console.log(`${country} is not island`);
    break;
}
console.log(number2 + "15" / 2);
let age = null;
let myAge;
console.log(myAge);
console.log(age);

let students = [
  "Aristdas",
  "Augistinas",
  "Darius",
  "Deividas",
  125,
  false,
  nickName,
  cats("one", "two", "three"),
];
console.log(students);
