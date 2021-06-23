/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Variables
const formElement = document.querySelector(`form`);
const outputElement = document.querySelector(`#output`);

// Functions

const calculateWeight = (e) => {
  e.preventDefault();
  const kgWeight = e.target[0].value;
  lbWeight = kgWeight * 2.2046;
  gWeight = kgWeight / 0.001;
  ozWeight = kgWeight * 35.274;
  outputElement.innerHTML = `
    <ul>
      <li>Weight in pounds(lb) is <span>${lbWeight.toFixed(3)}</span> </li>
      <li>Weight in grams(g) is <span>${gWeight}</span></li>
      <li>Weight in ounces(oz) is <span>${ozWeight.toFixed(3)}</span></li>
    </ul>
  `;
};

// Events
formElement.addEventListener(`submit`, calculateWeight);
