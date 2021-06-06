//! 1
// Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".
function time(minutes) {
  return `${minutes * 60} seconds`;
}
console.log(time(3));

//! 2
// Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyvenu (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.
//? V1.0
function jau(years) {
  return `Jau   ${years * 365} dienos`;
}
console.log(jau(3));

//? V2.0
arrr = [
  { years: 25, name: `Juozas` },
  { years: 18, name: `Antanas` },
  { years: 34, name: `Jonas` },
];
function ageInDays(array) {
  array.forEach((element) => {
    element.years = element.years * 365;
    console.log(`${element.name} jau gyveno ${element.years} dienos`);
  });
}
ageInDays(arrr);
//! 3
// Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25
const arrowFn = (num) => num * num;
console.log(arrowFn(5));
//! 4
// Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plota ((aukštis + plotis) / 2)
// Pvz: fn(10, 10) -> 50
const trikampioPlota = (a, b) => (a * b) / 2;
console.log(trikampioPlota(10, 10));

//! 5
// Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
const lastLetter = (stra) => stra[stra.length - 1];
const nameMy = `Aristidas`;
console.log(lastLetter(`Aristidas`));
// String(str).pop()

//! 6
// Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
const reversLetters = (stra) => stra.split(``).reverse().join(``);
console.log(reversLetters(`Aristidas`));

//! 7
// Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"
const negative = [-1, -100, -5, 10, 0, 11];
const thebiggest = (arr) => {
  const newArr100 = arr
    .filter((item) => item < 0)
    .sort()
    .shift();
  return newArr100;
};
console.log(thebiggest(negative));

//! 8
// Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].
const arrayGen = (num) => {
  const arr = [];
  for (i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 10 + 1));
  }
  return arr;
};
console.log(arrayGen(25));

//! 9
// Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true
const moreOrLess = (num1, num2) => num1 + num2 >= 100;

console.log(moreOrLess(25, 25));
console.log(moreOrLess(25, 100));

//! 10
// Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]
const namesAndAge = [
  { name: `Alfredas`, age: 25 },
  { name: `Jonas“`, age: 25 },
  { name: `Kasparas`, age: 20 },
  { name: `Benas`, age: 20 },
  { name: `Cris`, age: 26 },
  { name: `Elon`, age: 26 },
  { name: `Daniel`, age: 26 },
];
const twoFilters = (arr) => {
  const newArr = arr
    .map((item) => item)
    .sort((a, b) => a.name > b.name)
    .sort((a, b) => a.age - b.age);

  return newArr;
};
console.log(twoFilters(namesAndAge));

//! 11 WASN'T COMPLETE
// Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true
function isItHoliday(date) {
  const holidays = ["2020-01-01", "2020-05-25"];
  return holidays.some(
    (holiday) => new Date(holiday).getDate() === date.getDate()
  );
}
console.log(isItHoliday(new Date(2020, 01, 01)));

// let date = new Date().getDate();
function isHoliday(date) {
  const holidaysYes = ["05-01", "12-25", "06-24"];
  let dateForChecking = `${(`0` + (date.getMonth() + 1)).slice(-2)}-${(
    `0` + date.getDate()
  ).slice(-2)}`;
  console.log(dateForChecking);
  return holidaysYes.includes(dateForChecking);
}
console.log(isHoliday(new Date("2020-05-01")));

//! 12
// Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5, 7]; Grąžina: 3
const numbersArr = [1, 2, 3, 4, 5, 7];
let firstOne;
const numbersMissing = (arr) => {
  let next = arr[0];
  firstOne = arr.findIndex((item) => item !== next++);
  return arr[firstOne - 1] + 1;
};
console.log(numbersMissing(numbersArr));

let numArray = [10, 5, 7, 6, 23];
const getSmallestMisingNumber = (arr) => {
  let smallest = Math.min(...arr);
  console.log(smallest);
  let nextNum = smallest + 1;
  console.log(arr.some((number) => number === nextNum));
  while (arr.some((number) => number === nextNum)) nextNum++;
  return nextNum;
};
console.log(getSmallestMisingNumber(numArray));
