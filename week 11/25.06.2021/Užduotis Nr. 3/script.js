const itemElements = document.querySelectorAll(`.item`);
const numberElements = document.querySelectorAll(`.number`);
const operatorElements = document.querySelectorAll(`.operator`);
const outputElement = document.querySelector(`.output__main`);

let output = ``;
let operator = ``;

const makeNumber = (e) => {
  output += e.target.textContent;
  console.log(output);
  showIt(output);
};
const chooseOperator = (e) => {
  operator += e.target.textContent;
  console.log(operator, num1);
};

const performCalculation = () => {
  if (output) {
    let num1 = +output;

    showIt(operator);
  } else {
    outputElement.textContent = `Insert a number`;
  }
};

const showIt = (e) => {
  output += e.target.textContent;
  outputElement.textContent += output;
};

operatorElements.forEach((item) => {
  item.addEventListener(`click`, chooseOperator);
});
numberElements.forEach((item) => {
  item.addEventListener(`click`, makeNumber);
});
itemElements.forEach((item) => {
  item.addEventListener(`click`, showIt);
});
