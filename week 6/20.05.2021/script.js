/* 1. */
// parašyti for ciklą, kuris suksis 30 kartų.
// nuo 20 ciklo konsolėje atspausdinti: dabar sukasi x ciklas. x = ciklo skaičius

// for (i = 0; i < 30; i++) {
//   i >= 20 ? console.log(`dabar sukasi ${i} ciklas`) : null;
// }

/* 2. */
// Turime string'ą
// let string = "Labas rytas suraitytas, kaip šiandien nuotaikėlė?";
// let string1 = "Labas rytas suraitytas";
// Prasukti ciklą pro šitą stringą, naudojant .length savybę, kaip ir su masyvu.
// let space = 0;
// for (i = 0; i < string.length; i++) {
//   string[i] === " " ? (space += 1) : null;
// }
// console.log(space);

// task 3
document.querySelector(`button`).addEventListener(`click`, addOne);
let c = 0;
function addOne() {
  c += 1;
  document.querySelector(`h1`).textContent = `${c}`;
}

/* 6. */
// Parašykite funkciją, kuri prie žodžio BURP pridės tiek R raidžių, kokį parametrą paduosite.
// console.log funkcijoje
// pvz burp(3) -> BURRRP
function burp(i) {
  let letter = ``;
  for (x = 0; x < i; x++) {
    letter += `R`;
  }
  console.log(`BU${letter}P`);
}
burp(3);

/* 4. */
// turime masyvą su skaičiais
const numbers = [1.1, 5.3, 6.68, 3, 2.5, 10.1];
const numbersus = [2.1, 2.34, 6.68, 3, 2.5, 10.1, 22.22, 2342.4];
// parašyti dvi funkcijas, jos abi suks ciklą per masyvą paduotą į argumentus.
// Viena visus skaičius apvalins aukštyn(Math.ceil()), o kita žemyn(Math.floor())
let numbersanswer = [];
function down(theArrayYouwant) {
  for (i = 0; i < theArrayYouwant.length; i++) {
    numbersanswer[i] = Math.floor(theArrayYouwant[i]);
  }
  console.log(numbersanswer);
}
down(numbers);

function up(theArrayYouwant) {
  for (i = 0; i < theArrayYouwant.length; i++) {
    numbersanswer[i] = Math.ceil(theArrayYouwant[i]);
  }
  console.log(numbersanswer);
}
up(numbersus);
