// document.querySelector(`form`).addEventListener(`submit`, myFunction);
// function myFunction(e) {
//   e.preventDefault();
//   // console.log(e.target[0].value);
//   console.log(document.querySelector(`input[id="one"]`).value);
// }

// task 1
// document.querySelector(`form`).addEventListener(`submit`, myFunction);
// function myFunction(e) {
//   e.preventDefault();
//   alert(e.target[0].value);
// }

// task 2
document.querySelector(`form`).addEventListener(`submit`, myFunction);
function myFunction(e) {
  e.preventDefault();
  // console.log(e.target[1]);
  // alert(e.target[1].value);
  // alert(document.querySelector(`input[type="number"]`).value);
  // document.querySelector(`h1`).textContent = `${
  //   document.querySelector(`input[type="text"]`).value
  // }, your age is ${document.querySelector(`input[type="number"]`).value}`;
  document.querySelector(
    `h1`
  ).textContent = `${e.target[0].value}, your age is ${e.target[1].value}`;
}

// task 3
document.querySelector(`form`).addEventListener(`submit`, myFunction);
function myFunction(e) {
  e.preventDefault();
  const myName = e.target[0].value;
  const myAge = e.target[1].value;
  let answer = ``;
  let textH1 = (document.querySelector(`h1`).textContent = `${answer}`);
  myAge >= 18 && myAge < 100
    ? (answer = `Vairuoti gali, ${myName}, tau jau ${myAge}`)
    : (answer = `Dar mokysis vairuotis, ${myName}, tau dar ${myAge}`);
  document.querySelector(`h1`).textContent = `${answer}`;
}

// JS Formos Pratimai
