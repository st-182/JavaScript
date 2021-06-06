// !CAO task 1

//* Susikuriame objektą "car". Duodame jam tris properties: "doors", "color", "brand". Reikšmes įrašykite patys, tik atminkite - doors bus skaičius, o color ir brand - string'ai. Pasiconsole'inkite ir patikrinkite ar matosi car objektas, ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors).
// let car = {
//   doors: 5,
//   color: `white`,
//   brand: `Audi`,
// };
// console.log(car);
// console.log(car.doors);
// console.log(car.color);
// console.log(car.brand);
// console.log(car[`doors`]);
// console.log(car[`color`]);
// console.log(car[`brand`]);

// !CAO task 2
// *Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'. Šis objektas turės du parametrus - name ir surname. Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje) - atsispausdink objektą ir pažiūrėk ar viskas gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto, nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja.

// // ?creation of html by using JS
// // Variables
// const div = document.createElement(`div`);
// const form = document.createElement(`form`);
// const createUserName = document.createElement(`input`); //type="text", name="name", id="name"
// const createUserSurname = document.createElement(`input`); //[type="text" name="surname" id="surname"]
// const createNameLabel = document.createElement(`label`); //[for="name"]
// const createSurnameLabel = document.createElement(`label`); //[for="surname"]
// const createSubmit = document.createElement(`input`); //[for="surname"]
// // const userName = document.querySelector(`input`);

// // Element creation
// document.body.appendChild(form).classList.add(`name-surname`);
// document
//   .querySelector(`form`)
//   .appendChild(createNameLabel)
//   .setAttribute(`for`, `name`);
// document
//   .querySelector(`form`)
//   .appendChild(createUserName)
//   .setAttribute(`id`, `name`);
// document
//   .querySelector(`form`)
//   .appendChild(createSurnameLabel)
//   .setAttribute(`for`, `surname`);
// document
//   .querySelector(`form`)
//   .appendChild(createUserSurname)
//   .setAttribute(`id`, `surname`);
// document
//   .querySelector(`form`)
//   .appendChild(createSubmit)
//   .setAttribute(`type`, `submit`);
// // The rest of the variables initialization
// const userName = document.querySelector(`#name`);
// const userSurame = document.querySelector(`#surname`);
// const nameLabel = document.querySelector(`label:first-of-type`);
// const surnameLabel = document.querySelector(`label:nth-of-type(2)`);
// const submit = document.querySelector(`input:nth-of-type(3)`);
// // Adding attributes to input and label
// userName.setAttribute(`type`, `text`);
// userSurame.setAttribute(`type`, `text`);
// userName.setAttribute(`name`, `name`);
// userSurame.setAttribute(`name`, `surname`);
// nameLabel.textContent = `Enter Your Name`;
// surnameLabel.textContent = `Enter Your Surname`;
// document.body.appendChild(div).classList.add(`something`);
// console.log(userName);
// console.log(userSurame);
// // Function
// submit.addEventListener(`click`, (e) => {
//   e.preventDefault();
//   let person = {
//     name: `${userName.value}`,
//     surname: `${userSurame.value}`,
//   };
//   console.log(person);
// });

// !CAO task 3
//*Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. Pateikus duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. Name - string, o isLegalAge - boolean.

// ?creation of html by using JS
// Variables
const div = document.createElement(`div`);
const form = document.createElement(`form`);
const createUserName = document.createElement(`input`); //type="text", name="name", id="name"
const createUserAge = document.createElement(`input`); //[type="text" name="surname" id="surname"]
const createNameLabel = document.createElement(`label`); //[for="name"]
const createAgeLabel = document.createElement(`label`); //[for="surname"]
const createSubmit = document.createElement(`input`); //[for="surname"]
// const userName = document.querySelector(`input`);

// Element creation
document.body.appendChild(form).classList.add(`name-surname`);
document
  .querySelector(`form`)
  .appendChild(createNameLabel)
  .setAttribute(`for`, `name`);
document
  .querySelector(`form`)
  .appendChild(createUserName)
  .setAttribute(`id`, `name`);
document
  .querySelector(`form`)
  .appendChild(createAgeLabel)
  .setAttribute(`for`, `surname`);
document
  .querySelector(`form`)
  .appendChild(createUserAge)
  .setAttribute(`id`, `surname`);
document
  .querySelector(`form`)
  .appendChild(createSubmit)
  .setAttribute(`type`, `submit`);
// The rest of the variables initialization
const userName = document.querySelector(`#name`);
const userAge = document.querySelector(`#surname`);
const nameLabel = document.querySelector(`label:first-of-type`);
const ageLabel = document.querySelector(`label:nth-of-type(2)`);
const submit = document.querySelector(`input:nth-of-type(3)`);
// Adding attributes to input and label
userName.setAttribute(`type`, `text`);
userAge.setAttribute(`type`, `number`);
userName.setAttribute(`name`, `name`);
userAge.setAttribute(`name`, `surname`);
nameLabel.textContent = `Enter Your Name`;
ageLabel.textContent = `Enter Your Surname`;
document.body.appendChild(div).classList.add(`something`);
console.log(userName);
console.log(userAge);
// Function
submit.addEventListener(`click`, (e) => {
  e.preventDefault();
  let person = {
    name: `${userName.value}`,
    isLegalAge: `${userAge.value >= 18 ? true : false}`,
  };
  console.log(person);
});
