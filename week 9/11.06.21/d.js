//variables
//--dom elements
//---form
const formElement = document.querySelector("form");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
//---table
const birthdateInput = document.querySelector("#birthdate");
const tableBody = document.querySelector("#table-output");
const errorMessage = document.querySelector("#error-message");
let users = [];
// functions
//-- function registerUser adds user to:
//--- table
//--- localStorage
const registerUser = (e) => {
  e.preventDefault();
  const MAX_NAME_LENGTH = 50;
  let errorMessages = "";
  if (nameInput.value == "") errorMessages += "Prašome įvesti vardą<br>";
  if (surnameInput.value == "") errorMessages += "Prašome įvesti pavardę<br>";
  if (emailInput.value == "") errorMessages += "Prašome įvesti el.paštą<br>";
  if (birthdateInput.value == "")
    errorMessages += "Prašome įvesti gimimo datą<br>";
  const onlyLetters = /^[a-zA-Z]+$/;
  if (
    !onlyLetters.test(nameInput.value) ||
    !onlyLetters.test(surnameInput.value)
  )
    errorMessages += "Vardas ir pavardė gali būti sudaryta tik iš raidžių<br>";
  if (
    nameInput.value.length > MAX_NAME_LENGTH ||
    surnameInput.value.length > MAX_NAME_LENGTH
  )
    errorMessages += `Vardas ir pavardė negali būti ilgesni nei ${MAX_NAME_LENGTH} raidžių<br>`;
  if (!emailInput.value.includes("@"))
    errorMessages += "El. pašto adresas neteisingas<br>";
  //YYYY.MM.DD
  if (
    birthdateInput.value.length !== 10 ||
    birthdateInput.value[4] !== "." ||
    birthdateInput.value[7] !== "."
  )
    errorMessages +=
      "Gimimo data neteisingai nurodyta. Tinkamas formatas: YYYY.MM.DD<br>";
  else {
    let birthDayParts = birthdateInput.value.split(".");
    for (let part of birthDayParts) {
      if (isNaN(part)) {
        errorMessages +=
          "Gimimo data neteisingai nurodyta. Tinkamas formatas: YYYY.MM.DD<br>";
        break;
      }
    }
  }
  if (errorMessages != "") {
    errorMessage.innerHTML = errorMessages;
    return false;
  }
  errorMessage.innerText = "";
  let user = {
    name: nameInput.value,
    surname: surnameInput.value,
    email: emailInput.value,
    birthdate: birthdateInput.value,
  };
  let tr = document.createElement("tr");
  for (let i in user) {
    let td = document.createElement("td");
    td.innerText = user[i];
    tr.appendChild(td);
  }
  tableBody.appendChild(tr);
  users.push(user);
  window.localStorage.setItem("users", JSON.stringify(users));
  e.target.reset();
};
const getDataFromLocalStorage = () => {
  if (window.localStorage.getItem("users") !== null) {
    users = JSON.parse(window.localStorage.getItem("users"));
    displayUsers();
  }
};
const displayUsers = () => {
  users.forEach((user) => {
    let tr = document.createElement("tr");
    for (let i in user) {
      let td = document.createElement("td");
      td.innerText = user[i];
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  });
};
//events
formElement.addEventListener("submit", registerUser);
window.addEventListener("DOMContentLoaded", getDataFromLocalStorage());
