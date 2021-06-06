//! #1
const phones = ["iPhone 7", "Samsung 9", "OnePlus", "Apple", "Xiaomi 7"];

phones.sort((a, b) => {
  if (a.includes(" ") && !b.includes(" ")) {
    return 1;
  } else {
    return -1;
  }
});
console.log(phones);
// Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.
const names = [
  `Petras`,
  `Ernestas`,
  `Aiste`,
  `Deimante`,
  `Laurynas`,
  `Juozas`,
  `Edgaras`,
  `ETC.`,
];
console.log(names.sort());
// Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.

console.log(names.sort().reverse());
// Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).
const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
console.log(numbers.sort().reverse());
// Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).
const numbers2 = [10, 5, 20, 4];
console.log(Math.max(...numbers2));

// !#2
// Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.
const numbers3 = [22, 45, 56];
console.log(numbers3.reduce((a, v) => a + v));
// Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).
const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
console.log(cars.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0));
const cars2 = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
console.log(cars2.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0));
// Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.
const numbers4 = [];
for (let i = 0; i < 25; i++) {
  numbers4[i] = Math.round(Math.random() * 20);
}

console.log(numbers4);
let big = 0.1;
console.log(
  numbers4.reduce((a, v) => {
    big < v ? (big = v) : null;
    return big;
  })
);
//! #3
const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];
console.log(people.filter((item) => item.age >= 18));
console.log(people.filter((item) => item.age >= 18).map((item) => item.name));
console.log(
  people
    .filter((item) => item.age >= 18)
    .map((item) => item.name)
    .sort()
);
const arrr = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "grape", price: 11 },
  { name: "Salat", price: 20 },
  { name: "Orange", price: 40 },
  { name: "Apple", price: 49 },
];
function myNewFnc(arr) {
  const justHere = arr.map((item) => item).sort((a, b) => a.price - b.price);
  console.log(arr);
  console.log(justHere);
  return `the cheapest is ${justHere[0].name}, the most expensive is ${
    justHere[justHere.length - 1].name
  }`;
}
console.log(myNewFnc(arrr));
