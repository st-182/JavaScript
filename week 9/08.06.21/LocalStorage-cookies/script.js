const btn1 = document.querySelector(`#btn1`);
const btn2 = document.querySelector(`#btn2`);
const btn3 = document.querySelector(`#btn3`);
const btn4 = document.querySelector(`#btn4`);
const btn5 = document.querySelector(`#btn5`);
const btn6 = document.querySelector(`#btn6`);
const btn7 = document.querySelector(`#btn7`);
const output = document.querySelector(`#p`);
const output2 = document.querySelector(`#p2`);

let i = 0;
let x = 0;
function addToLocalStorage() {
  let name = `Peter`;
  localStorage.setItem(`user[${i}]`, name);
  i++;
}
function addToLocalStorage2() {
  let name = `John`;
  localStorage.setItem(`user[0${x}]`, name);
  x++;
}
function getToLocalStorage() {
  let dataFromLocalStorage = localStorage.getItem(`user1`);
  console.log(dataFromLocalStorage);
  if (dataFromLocalStorage) {
    output.innerText = dataFromLocalStorage;
  } else {
    output.innerText = ``;
  }
}

function deleteFromLocalStorage() {
  let lastItem =
    Object.keys(localStorage)[Object.keys(localStorage).length - 1];
  localStorage.removeItem(lastItem);
}
function deleteAll() {
  localStorage.clear();
}

function addObjectToLocalStorage() {
  let user = {
    name: `John`,
    surname: `Smith`,
    age: 32,
  };
  localStorage.setItem(`user`, JSON.stringify(user));
}
function gettingObjectFromLocalStorage() {
  if (localStorage.getItem(`user`)) {
    let data = JSON.parse(localStorage.getItem(`user`));
    output2.innerHTML = `
    <ul>
        <li>Name: ${data.name}</li>
        <li>Surname: ${data.surname}</li>
        <li>Age: ${data.age}</li>
    </ul>
    `;
  } else {
    outputTwo.innerText = `User is not in local storage`;
  }
}
btn1.addEventListener(`click`, addToLocalStorage);
btn2.addEventListener(`click`, getToLocalStorage);
btn3.addEventListener(`click`, deleteFromLocalStorage);
btn4.addEventListener(`click`, addToLocalStorage2);
btn5.addEventListener(`click`, deleteAll);
btn6.addEventListener(`click`, addObjectToLocalStorage);
btn7.addEventListener(`click`, gettingObjectFromLocalStorage);

localStorage.getItem;
