const input = document.querySelector(`form`);
const p = 3;
let something = 5;
let ai;

input.addEventListener(`submit`, print);

function print(e) {
  e.preventDefault();
  if (input % 2 === 0 || input <= 0) {
    console.log(`wrong number`);
  } else {
    for (let i = 0; i < someting; i++) {
      if (i === 0) {
        for (let h = 0; h < something; h++) {
          ai += `I`;
        }
      }
    }
  }
}
