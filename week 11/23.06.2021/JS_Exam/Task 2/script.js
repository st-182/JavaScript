/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
// Variables
// - DOM
const btnElement = document.querySelector(`#btn__element`);
const stateElement = document.querySelector(`#btn__state`);
// - logic
let numberOfClicks = 0;
// Functions

const howManyClicks = () => {
  numberOfClicks++;
  stateElement.textContent = numberOfClicks;
};

// Events
btnElement.addEventListener(`click`, howManyClicks);
