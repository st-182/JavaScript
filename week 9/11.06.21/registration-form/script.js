//Variables
// --- DOM elements
// --- form
const formElement = document.querySelector(`form`);
const nameInput = document.querySelector(`#name`);
const surnameInput = document.querySelector(`#surname`);
const emailInput = document.querySelector(`#email`);
const birthdateInput = document.querySelector(`#birthdate`);
const errorMessage = document.querySelector(`#error-message`);
// --- table
const tableBody = document.querySelector(`#table-output`);
// --- button
const erase = document.querySelector(`#erase`);

// data
let users = [];

//Functions
// --- function registerUser adds user to:
// ---- table
// ---- localStorage
const registerUser = (e) => {
  e.preventDefault();
  // form validation
  // validation 1.0
  //   if (
  //     !nameInput.value ||
  //     !surnameInput.value ||
  //     !emailInput.value ||
  //     !birthdateInput.value
  //   ) {
  //     errorMessage.innerText = `You have to fill in all the information!, you
  //       ${!nameInput.value ? `dont have name ❌` : `have name ✔️`}
  //       ${!surnameInput.value ? `dont have surname ❌` : `have surname ✔️`}
  //       ${!emailInput.value ? `dont have email ❌` : `have email ✔️`}
  //       ${
  //         !birthdateInput.value ? `dont have birth date ❌` : `have birth date ✔️`
  //       }
  //       `;
  //     return;
  //   } else {
  //     errorMessage.innerText = ``;
  //   }

  // VALIDATION FROM ERNESTAS

  if (
    !nameInput.value ||
    !surnameInput.value ||
    !emailInput.value ||
    !birthdateInput.value
  ) {
    let errorMessageSTRNG = `Prasome nurodyti`;
    if (!nameInput.value) errorMessageSTRNG += ` varda, `;
    if (!surnameInput.value) errorMessageSTRNG += ` pavarde, `;
    if (!emailInput.value) errorMessageSTRNG += ` el. pasta, `;
    if (!birthdateInput.value) errorMessageSTRNG += ` gimimo data, `;
    return (errorMessage.innerText = `${errorMessageSTRNG.substring(
      0,
      errorMessageSTRNG.length - 2
    )}.`);
  } else {
    errorMessage.innerText = ``;
  }

  let user = {
    name: nameInput.value,
    surname: surnameInput.value,
    email: emailInput.value,
    birthdate: birthdateInput.value,
  };
  users.push(user);
  let usersJSON = JSON.stringify(users);
  localStorage.setItem(`users`, usersJSON);

  //!   valaidation 2.0
  //   let skip = ``;
  //   let stop = false;
  //   for (let i in user) {
  //     if (!user[i]) {
  //       skip += i + `, `;
  //       stop = true;
  //     }
  //   }
  //   if (stop) {
  //     errorMessage.innerText = `You dont have ${skip.slice(0, -2) + `.`}`;
  //     return;
  //   } else {
  //     errorMessage.innerText = ``;
  //   }

  // -- add new data from form to table
  //   let tr = document.createElement(`tr`);
  //   for (let i in user) {
  //     // console.log(user[i]);
  //     let td = document.createElement(`td`);
  //     td.innerText = user[i];
  //     tr.appendChild(td);
  //   }
  //   tableBody.appendChild(tr);
  displayUsers();
  // -- saves user input

  e.target.reset();
};
// --- function getDataFromLocalStorage get data from localstorage and saves it to users array
const getDataFromLocalStorage = () => {
  JSON.parse(localStorage.getItem(`users`))
    ? (users = JSON.parse(localStorage.getItem(`users`)))
    : null;
  console.log(users);
};
// --- function displayUsers shows users
const displayUsers = () => {
  tableBody.innerText = ``;
  if (users) {
    users.forEach((object) => {
      let tr = document.createElement(`tr`);
      for (property in object) {
        let td = document.createElement(`td`);
        td.innerText = object[property];
        tr.appendChild(td);
        // console.log(object[property]);
      }
      tableBody.appendChild(tr);
    });
  }
  return;
};
//Events

formElement.addEventListener(`submit`, registerUser);
document.addEventListener(`DOMContentLoaded`, getDataFromLocalStorage);
document.addEventListener(`DOMContentLoaded`, displayUsers);
erase.addEventListener(`click`, () => localStorage.clear());
