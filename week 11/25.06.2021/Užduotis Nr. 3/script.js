// var
const itemElements = document.querySelectorAll(`.item`);
const numberElements = document.querySelectorAll(`.number`);
const operatorElements = document.querySelectorAll(`.operator`);
const outputElement = document.querySelector(`.output__main`);
const inputElement = document.querySelector(`input`);
let numsRegEx = RegExp(/\d+/gi);
let operatorsRegEx = RegExp(/\+|\*|\-|\//gi);
let numsAndOperators = RegExp(/\d+|\+|\*|\-|\//gi);
let output = ``;
let nums;
let operators;
let numsOperators;

// func
const showIt = (e) => {
  output += e.target.textContent;
  console.log(output);
  nums = output.match(numsRegEx);
  operators = output.match(operatorsRegEx);
  numsOperators = output.match(numsAndOperators);
  console.log(nums);
  console.log(operators);
  console.log(numsOperators);

  inputElement.value = output;
};

// events
itemElements.forEach((item) => {
  item.addEventListener(`click`, showIt);
});
