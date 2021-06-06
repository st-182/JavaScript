const legalAge = 20;
let clientAge = Number(prompt(`What is your age?`));
if (clientAge > legalAge) {
  alert(`You are legal 20+`);
} else if (clientAge === legalAge) {
  alert(`You are legal - 20 years`);
} else if (clientAge < legalAge) {
  alert(`You are illegal less then 20 years`);
}
const myName = `Aristidas`;
if (myName.length > 6) {
  alert(`Ilgas vardas`);
}
if (clientAge >= 100 || clientAge <= 0) {
  alert(`Invalid age`);
} else if (1 <= clientAge && clientAge <= 18) {
  alert(`Child`);
} else if (19 <= clientAge && clientAge <= 99) {
  alert(`Adult`);
}

let car = `Mini`;
if (
  car === `VW` ||
  car === `Audi` ||
  car === `Bentley` ||
  car === `Bugatti` ||
  car === `Lamborghini` ||
  car === `Porsche`
) {
  alert(`VW Group`);
} else if (car === `BMW` || car === `Mini` || car === `Rolls-Royce`) {
  alert(`BMW Group`);
} else {
  alert(`nei vienam`);
}
