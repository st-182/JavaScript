//Variables

// DOM Elements
// ---inputs
const inputWithoutPVM = document.querySelector(`#input-without-pvm`);
const inputWithPVM = document.querySelector(`#input-with-pvm`);
const selectOfPVM = document.querySelector(`#pvm`);
// ---outputs
const WithoutPVMoutput = document.querySelector(`#without-pvm-output`);
const withPVMoutput = document.querySelector(`#with-pvm-output`);
const PVMoutput = document.querySelector(`#pvm-output`);
// ---calculator logic elements
let currentPVM = 21;

//Functions
function calculateWithoutPVM() {
  console.log(`aaa`);
  //   Suma be PVM
  WithoutPVMoutput.innerText = (+inputWithoutPVM.value).toFixed(2) + `Eur`;
  //   Suma su PVM
  withPVMoutput.innerText =
    (
      +inputWithoutPVM.value +
      +inputWithoutPVM.value * (currentPVM / 100)
    ).toFixed(2) + `Eur`;
  PVMoutput.innerText =
    (+inputWithoutPVM.value * (currentPVM / 100)).toFixed(2) + `Eur`;
}
function changeCurrrentPVM(e) {
  console.log(e.target.value);
  currentPVM = +e.target.value;
  if (inputWithoutPVM.value) {
    calculateWithoutPVM();
  } else if (inputWithPVM.value) {
    calculateWithoutPVM();
  }
}
function calculateWithPVM(e) {
  console.log(e.target.value);
  currentPVM = +e.target.value;
  if (inputWithoutPVM.value) {
    calculateWithoutPVM();
  } else if (inputWithPVM.value) {
    calculateWithoutPVM();
  }
}
//Events
inputWithoutPVM.addEventListener(`keyup`, calculateWithoutPVM);

selectOfPVM.addEventListener(`change`, changeCurrrentPVM);
