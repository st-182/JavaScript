// uzduotis su forma:
// input type url
// input type text
// input type number
// input type radio su keliais pasirinkimais
// select su keliais options
// textarea
// submit
// submitinus forma -> surenkama kliento informacija ir atspausdinama kortele
// kortele turi tureti konteineri
// img
// ir visi kiti pagal forma (elementai vardui, amziui, lyciai, statusui, ir tekstui)
document.querySelector(`form`).addEventListener(`submit`, myFunction);
let formUrl;
let formtext;
let formnumber;
let formRadioYes;
let formRadioNo;
let formRadioIdontknow;
let formRadioIdontwantToknow;
let selectValue;
let textAreavalue;
function myFunction(e) {
  e.preventDefault();
  formUrl = e.target[0].value;
  formtext = e.target[1].value;
  formnumber = e.target[2].value;
  // formRadioYes = e.target[3].value;
  // formRadioNo = e.target[4].value;
  // formRadioIdontknow = e.target[5].value;
  // formRadioIdontwantToknow = e.target[6].value;
  formRadioYes = e.target.elements.radio.value;
  formRadioYes === `men`
    ? (formRadioYes = "Men")
    : formRadioYes === `wom`
    ? (formRadioYes = "Women")
    : formRadioYes === `idk`
    ? (formRadioYes = "I dont know")
    : formRadioYes === `idwk`
    ? (formRadioYes = "I dont want to know")
    : null;
  selectValue = e.target[7].value;
  textAreavalue = e.target[8].value;
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  console.log(e.target[3].value);
  console.log(e.target[4].value);
  console.log(e.target[5].value);
  console.log(e.target[6].value);
  console.log(e.target[7].value);
  console.log(e.target[8].value);
  console.log(formRadioYes);
  document.querySelector(`img`).src = formUrl;
  document.querySelector(`p:nth-child(2)`).textContent = formtext;
  document.querySelector(`p:nth-child(3)`).textContent = formnumber;
  document.querySelector(`p:nth-child(4)`).textContent = formRadioYes;
  document.querySelector(`p:nth-child(5)`).textContent = selectValue;
  document.querySelector(`p:nth-child(6)`).textContent = textAreavalue;
}
console.log(formUrl);
myFunction;
