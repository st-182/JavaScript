// JS Formos Pratimai
// task 1
document.querySelector(`form`).addEventListener(`submit`, myFunction);
function myFunction(e) {
  e.preventDefault();
  const myAge = e.target[0].value;
  let price = 6;
  // let textH1 = (document.querySelector(`h1`).textContent = `${price}`);
  myAge <= 16
    ? (price = price * 0.5)
    : myAge >= 60
    ? (price = Math.floor(price * (2 / 3)))
    : null;
  document.querySelector(`h1`).textContent = `The price is ${price} EUR`;
}
