// Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut - daugiau apie jį čia.

// const alwaysAfter5Sec = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(`yes, veikia! line 3`), 5000);
// });
// alwaysAfter5Sec.then((message) => console.log(message));
// console.log(`line 6`);

// Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

// const alwaysAfter5Sec = new Promise((resolve, reject) => {
//   let randomNum = Math.random().toFixed(2);
//   console.log(randomNum);
//   if (randomNum > 0.2) {
//     setTimeout(() => resolve(`yes, veikia! line 14`), 5000);
//   } else {
//     setTimeout(() => reject(`no, neveikia! line 16`), 5000);
//   }
// });
// alwaysAfter5Sec
//   .then((message) => console.log(message))
//   .catch((message) => console.log(message));
// console.log(`line 22`);

// Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą. Nelabai aišku? Pasižiūrėk čia apie teoriją - o jei ne, užmesk akį į atsakymus.
const alwaysAfter5Sec = new Promise((resolve, reject) => {
  let randomNum = Math.random().toFixed(2);
  console.log(randomNum);
  if (randomNum > 0.2) {
    setTimeout(() => resolve(), 5000);
  } else {
    setTimeout(() => reject(`no, neveikia! line 16`), 5000);
  }
});
alwaysAfter5Sec
  .then(() => `(aaaaaaaaaaaaaaaaa)`)
  .then((message) => alert(message))
  .catch((message) => console.log(message));
console.log(`line 22`);
