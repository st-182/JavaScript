// JS Formos Pratimai
// task 1
document.querySelector(`form`).addEventListener(`submit`, myFunction);
function myFunction(e) {
  e.preventDefault();
  const myAge = document.querySelector(`input[type="number"]`).value;
  console.log(myAge);
  let haveTo = `don't have to`;
  if (myAge > 18 && myAge < 30) {
    if (document.querySelector(`input[id="no"]:checked`)) {
      haveTo = `have to`;
    }
  }
  document.querySelector(`h1`).textContent = `You ${haveTo} to go to Army now!`;
}
