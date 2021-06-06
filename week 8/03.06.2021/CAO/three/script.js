// Prisimename darbą su masyvais: sukurkite funkciją, kuri priims masyvą ir išfiltruos visus pasikartojančius skaičius bei šį masyvą grąžins atgal.
// Pvz:
// paduodu: [1, 3, 3, 5, 5, 5]
// grąžina: [1, 3, 5]
const arrayOfNumbers = [1, 3, 3, 5, 5, 5];
function giveBack(arr) {
  let one = arr[0];
  const copyOfArr = arr
    .map((item) => item)
    .filter((item) => {
      item === one;
      one = item;
    });
  return copyOfArr;
}
console.log(giveBack(arrayOfNumbers));
