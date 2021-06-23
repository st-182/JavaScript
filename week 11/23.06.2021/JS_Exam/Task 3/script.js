/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

//API ENDPOINT
const ENDPOINT = "https://api.github.com/users";

// Variables
// - DOM
const btnElement = document.querySelector(`#btn`);
const outputElement = document.querySelector(`#output`);
const messageElement = document.querySelector(`#message`);
// - logic
const dataArr = [];
// Functions

const getUsers = async () => {
  await fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => dataArr.push(...data))
    .catch((error) => console.log(error));
  showUsers(dataArr);
};

const showUsers = (arr) => {
  messageElement.style.display = `none`;
  arr.forEach((user) => {
    outputElement.innerHTML += `
    <div class="card">
      <img src="${user.avatar_url}" >
          <p>${user.login}</p> 
    </div>
    `;
  });
};

// Events
btnElement.addEventListener(`click`, getUsers);
