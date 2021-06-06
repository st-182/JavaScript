document.querySelector(`form`).addEventListener(`submit`, fn);
function fn(e) {
  e.preventDefault();
  let number = e.target[0].value;
  // let ll = `L`;
  // const p = document.createElement(`p`);
  let m = ``;
  for (let i = 0; i < number; i++) {
    m += `.`;
    console.log(`L` + m);
  }
  let l = ``;
  for (x = 0; x < number; x++) {
    l += `L`;
  }
  console.log(l);
}

// const p = document.createElement(`p`);
// for (i = 0; i < number; i++) {
//   for (x = 0; x < number; x++) {
//     if (i === x) {
//       document.querySelector(`#output`).appendChild(p).textContent = `*`;
//     } else {
//       document.querySelector(`#output`).appendChild(p).textContent = `.`;
//     }
//   }
// }
