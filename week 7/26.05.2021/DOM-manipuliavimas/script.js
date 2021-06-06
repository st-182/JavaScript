//! First way

const p = document.createElement(`p`);
const button = document.createElement(`button`);
console.log(p);
console.log(button);

const pText = document.createTextNode(`Lorem ipsum`);
const buttonText = document.createTextNode(`Click me`);
p.appendChild(pText);
button.appendChild(buttonText);
document.querySelector(`main`).appendChild(p);
document.querySelector(`main`).appendChild(button);

//! Second way
const div = document.createElement(`div`);
const h2 = `<h2>Hello World from h2<h2/>`;
const main = document.querySelector(`main`);
// main.innerHTML = h2;
div.innerHTML = h2;
main.appendChild(div);
// main.appendChild(h2);

//! Third way
let div2 = document.createElement(`div`);
let h1 = document.createElement(`h1`);
let anotherP = document.createElement(`p`);
let anotherButton = document.createElement(`button`);
// div2.innerHTML = `
// ${h1}
// ${anotherP}
// ${anotherButton}
// `;
h1.innerHTML = `something`;
anotherP.innerHTML = `something`;
anotherButton.innerHTML = `something`;

div2.appendChild(h1);
div2.appendChild(anotherP);
div2.appendChild(anotherButton);

main.appendChild(div2);

//! Fifth way
// var
const formContainer = document.querySelector(`.container-form`);
const form = document.querySelector(`form`);
const nameInput = document.querySelector(`#name-input`);

// functions
const showGreeting = (e) => {
  e.preventDefault();
  let name = nameInput.value;
  let messageTag = document.createElement(`p`);
  messageTag.innerHTML = `Hellow ${name}, how are you?`;
  formContainer.appendChild(messageTag);
  nameInput.value = ``;
};

// events
form.addEventListener(`submit`, showGreeting);

//! Another staff
console.log(form.getAttribute(`id`));
console.log(form.hasAttribute(`id`));
console.log(form.removeAttribute(`id`));
