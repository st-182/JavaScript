// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
let arrDoubled = numbers.map((item) => item * 2);
console.log(arrDoubled);

let arrMultiplied = (item, masyvas) => {
  return masyvas.map((aaa) => aaa * item);
};
console.log(arrMultiplied(4, numbers));

const arrCountTwos = (a) => {
  const one = a.filter((num) => num === 2);
  return one.length;
};
console.log(arrCountTwos(numbers));
