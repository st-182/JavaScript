// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
function checkForLetters(long, short) {
  const fnArray = long.toLowerCase().split(``);
  smallShort = short.toLowerCase();
  const fnArrayFiltered = fnArray.filter((item) => item === smallShort);
  return `Raidė “${smallShort}” sakinyje rasta ${fnArrayFiltered.length} kartus`;
}
console.log(checkForLetters(`Aristidas`, `A`));
// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
const arr2 = [8, "Hello", "click", "u", 7, 4, "a", "a", 3, 6, "chair", , 10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];
function onlyNumbers(arr) {
  const arrayFiltered = arr.filter((item) => item == +item);
  return arrayFiltered.sort((a, b) => a > b);
}
console.log(onlyNumbers(arr2));
//Isivaizduok kad turi "vending machine". Parasyk funkcija kuri apskaiciuos optimaliausia grazos grazinimo buda. (maziausiai monetu). pvz.: preke kainuoja. 59ct, o idejot 1 eur. tokiu atveju graza bus 41ct (20ct 20ct ir 1ct).Galimi monetu nominalai [1eur, 50ct, 20ct, 10ct, 5ct, 1ct]grazint reikia array su monetomis, siuo atveju [20, 20, 1]
const nominalas = [100, 50, 20, 10, 5, 1];
const nominalas2 = [100, 50, 20, 10, 5, 2, 1];
// money in cents
function optimizer(money, price, coinsArray) {
  let change = money - price;
  console.log(change);
  let output = [];
  coinsArray.forEach(function (item) {
    numberOfCoins = Math.floor(change / item);
    for (let n = 0; n < numberOfCoins; n++) {
      change = change - item;
      output.push(item);
    }
  });
  // console.log(output);
  return output;
}
console.log(optimizer(200, 1, nominalas));
console.log(optimizer(200, 1, nominalas2));
