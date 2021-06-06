// switch task one
let car = `Audi`;
switch (car) {
  case `VW`:
  case `Audi`:
  case `Bentley`:
  case `Bugatti`:
  case `Lamborghini`:
  case `Porsche`:
    console.log(`VW Group`);
    break;
  case `BMW`:
  case `Mini`:
  case `Rolls-Royce`:
    console.log(`BMW Group`);
    break;
  default:
    console.log(`No such group in  data base`);
}
// switch task 2
let userInput = `Obuolys`;
switch (userInput) {
  case `Obuolys`:
  case `avokadas`:
  case `bananas`:
  case `granatas`:
  case `kivis`:
  case `kokosas`:
    console.log(` ${userInput} Vaisius`);
    break;
  case `Bulvė`:
  case `Briuselio kopūstas`:
  case `Savojos kopūstas`:
  case `Burokėlis`:
  case `Morka`:
  case `Ropė`:
    console.log(` ${userInput} Daržovė`);
    break;
  default:
    console.log(`Nera tokio produkto duomenu bazeje`);
}

// switch task 3
let weekDay = 3;
switch (weekDay) {
  case 0:
    weekDay = `pirmadienis`;
    console.log(weekDay);
    break;
  case 1:
    weekDay = `antradienis`;
    console.log(weekDay);
    break;
  case 2:
    weekDay = `trečiadienis`;
    console.log(weekDay);
    break;
  case 3:
    weekDay = `Ketvirtadienis`;
    console.log(weekDay);
    break;
  case 4:
    weekDay = `Penktadienis`;
    console.log(weekDay);
    break;
  case 5:
    weekDay = `Šeštadienis`;
    console.log(weekDay);
    break;
  case 6:
    weekDay = `Sekmadienis`;
    console.log(weekDay);
    break;
  default:
    console.log(`Nera tokios dienos duomenu bazeje`);
}

// switch task 4
const myName = `Aristidas`;
myName.length <= 5 ? console.log(`Short Name`) : console.log(`Long Name`);

// switch task 5,6
const clientAge = -19;
const legalAge = 20;
clientAge >= legalAge ? console.log(`Can Drive`) : console.log(`Can't drive`);
clientAge >= 120 || clientAge <= 0
  ? console.log(`Invalid Age`)
  : clientAge >= legalAge
  ? console.log(`Can Drive`)
  : console.log(`Can't drive`);

// switch task 7
const phone = `iPhone`;
let isIphoneUser;
phone == `iPhone` ? (isIphoneUser = true) : (isIphoneUser = false);
console.log(isIphoneUser);
// switch task 7.1

const isIphoneUser1 = phone === `iPhone`;
console.log(isIphoneUser1);
// Ciklų Pradmenys

for (let i = 0; i < 10; i++) {
  console.log(myName);
}
for (i = 0; i < 10; i++) {
  console.log(myName, i);
}
for (i = 0; i < 10; i++) {
  console.log(`${i}.${myName}`);
}
for (i = 10; i > 0; i--) {
  console.log(`${i}.${myName}`);
}
