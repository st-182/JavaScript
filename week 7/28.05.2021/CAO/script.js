// Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą. Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins. O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).
//// function alertName(name) {
////   alert(name);
//// }
//// function consoleName(name) {
////   console.log(name);
//// }
//// function coreFunction(name) {
////   name = name.split(``);
////   console.log(name);
////   name.unshift(name.shift().toUpperCase());
////   console.log(name);
////   name = name.join(``);
////   console.log(name);
////   return consoleName(alertName(name));
//// }
//// coreFunction(`aristidas`);

// Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
const cars = ["BMW", "VW", "Audi"];
cars.forEach((item) => console.log(item));
// Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).
cars.map((item, index) => console.log(index + item));
// Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").
const people = [
  "peTras",
  "Jonas",
  "aNTanaS",
  `sarUnas`,
  `LaurynaS`,
  `MODESTAS`,
  `KOsTAs`,
];
function normalFriends(arr) {
  let newNormalFriends = arr.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
  console.log(newNormalFriends);
}
normalFriends(people);
// Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
const peopleAge = [20, 21, 33, 19, 69, 15, 23];
function normalAge(arr) {
  return arr.filter((item) => item >= 18);
  // console.log(arr);
}
console.log(normalAge(peopleAge));
// Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
const city = [
  "Vilnius",
  "Kaunas",
  "Marijampole",
  `Gargzdai`,
  `Klaipeda`,
  `klaipeda`,
  `Klaipeda`,
];
city.find((item) => item[0] === `K` || item[0] === `k`);
console.log(city.find((item) => item[0] === `K` || item[0] === `k`));
// Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
console.log(city.some((item) => item[0] === `k`));
// Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.
console.log(city.every((item) => item[0] === item[0].toUpperCase()));

// !POTATO
function howManyPotato(potato) {
  let potatoString = toString(potato);
}
