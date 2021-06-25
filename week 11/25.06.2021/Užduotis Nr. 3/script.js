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
const choseOperator = (e) => {
  operator += e.target.textContent;
};

const performCalculation = () =>{
  if (output) {
    let num1 = +output;
    
    console.log(operator, num1);
    showIt(operator);
  } else {
    outputElement.textContent = `Insert a number`;
  }
}

const showIt = (data) => {
  outputElement.textContent += data;
};

operatorElements.forEach((item) => {
  item.addEventListener(`click`, makeOperator);
});
numberElements.forEach((item) => {
  item.addEventListener(`click`, makeNumber);
});
