// task 1
let i = 0;
const myName = `Aristidas`;
while (i < 4) {
  console.log(myName);
  i++;
}
// task 2

let combo = ``;
i = 0;
const times = 5;
do {
  combo += String(myName);
  console.log(combo);
  i++;
} while (i < times);
// task 3

i = 0;
console.log(`The cos(${i}) is ${Math.cos(i)}.`);
// task 4

let random = Math.floor(Math.random() * 5) + 1;
console.log(random);
// task 5

let random1 = Math.floor(Math.random() * 8) + 5;
console.log(random1);

// task 6
// random === 3
//   ? alert(`You have won a small car charger, click on OK to claim it!`)
//   : alert(`Sorry, just another annoying alert`);

// task 7

// let random2 = Math.floor(Math.random() * 15) + 1;
// switch (random2) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     alert(`You have won 2 EUR, click on OK to claim it!`);
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert(`You have won Samsung SG6785 smartTV, click on OK to claim it!`);
//     break;
//   case 15:
//     alert(`You have won Audi A6, click on OK to claim it!`);
//     break;
//   default:
//     alert(`Sorry, just another annoying alert`);
// }
// console.log(random2);
// task 8
// document.body.innerHTML = `<h2>Aristidas</h2>`;
// task 9
document.getElementById(`name`).textContent = `Aristidas`;
// task 10
document.getElementsByTagName(`li`)[2].textContent = `Sūris`;
// task 11
// document.querySelector(`span:nth-child(2)`).textContent = `blue`;
console.log(document.querySelector(`p:nth-child(8) `));

document.querySelector("p:nth-child(4) span").textContent = "blue";
// task 12
let bmw = document.querySelector("ol>li").textContent;
let vw = document.querySelector("ol>li:nth-child(2)").textContent;
console.log(bmw + vw);
document.querySelector(`ol>li`).textContent = vw;
document.querySelector(`ol>li:nth-child(2)`).textContent = bmw;
