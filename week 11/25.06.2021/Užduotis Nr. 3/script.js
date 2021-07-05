// var
const itemElements = document.querySelectorAll(`.item`);
const numberElements = document.querySelectorAll(`.number`);
const operatorElements = document.querySelectorAll(`.operator`);
const outputElement = document.querySelector(`.output__main`);
const inputElement = document.querySelector(`input`);
let numsRegEx = RegExp(/\d+/gi);
// let operatorsRegEx = RegExp(/\+|\*|\-|\//gi);
let numsAndOperators = RegExp(/\d+|\+|\*|\-|\/|\(|\)/gi);
let output = ``;
// let nums;
// let operators;
// let numsOperators;

// func
const inputUsingUI = (e) => {
  output += e.target.textContent;
  performingCalculation(output);
};

const inputUsingKeyboard = (e) => {
  output = e.target.value;
  performingCalculation(output);
};

const performingCalculation = (dataArr) => {
  numsOperators = dataArr.match(numsAndOperators);
  // console.log(numsOperators);
  let result = numsOperators.map((item) =>
    item.match(numsRegEx) ? +item : item
  );
  // console.log(result);

  outputElement.innerHTML = result.reduce(
    (accumulator, currentValue, index) => {
      // console.log(`working`);
      // switch (currentValue) {
      //   case `+`:
      //     console.log(currentValue);
      //     console.log(result[index - 1] + result[index + 1]);
      //     if (currentValue.length === 3)
      //       outputElement.textContent = result[index - 1] + result[index + 1];
      //     break;
      // }
      if (currentValue === `(`) {
      } else {
        if (typeof currentValue === `string`) {
          switch (currentValue) {
            case `+`:
              accumulator += result[index + 1];
              break;
            case `-`:
              console.log(`-`);
              accumulator -= result[index + 1];
              break;
            case `/`:
              console.log(`/`);
              accumulator /= result[index + 1];
              break;
            case `*`:
              console.log(`*`);
              accumulator *= result[index + 1];
              break;
            case `%`:
              console.log(`%`);
              accumulator += result[index + 1] * 0.01;
              break;
          }
        }
        return accumulator;
      }
    },
    result[0]
  );

  //visual output
  inputElement.value = output;
};

// events
itemElements.forEach((item) => {
  item.addEventListener(`click`, inputUsingUI);
});
inputElement.addEventListener(`keyup`, inputUsingKeyboard);
