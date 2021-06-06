const form = document.querySelector(`form`);
// form.addEventListener(`submit`, (event) => {
//   event.preventDefault();
//   console.log(event.target);
//   console.log(event.target[0]);
//   console.log(event.target[0].value);
//   // document.querySelector(`h1`).textContent = event.target[0].value;
//   const h1 = document.querySelector(`main`).createElement(`h1`);

//   h1.createTextNode(event.target[0].value);

//   const newDiv = document.createElement("div");
//   const newContent = document.createTextNode("Hi there and greetings!");
//   newDiv.appendChild(newContent);
//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// });
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const firstName = document.querySelector(`#clientname`);
  const firstemail = document.querySelector(`#clientemail`);
  const firstnumber = document.querySelector(`#clientnumber`);
  console.log(firstName);
  firstName.addEventListener(`blur`, () => {
    firstName.style.backgroundColor = `green`;
    console.log(`hey`);
  });
  firstemail.addEventListener(`keyup`, () => {
    console.log(firstemail.value);
  });
  firstnumber.addEventListener(`focus`, () => {
    firstnumber.style.backgroundColor = `hotpink`;
    console.log(`kuku!`);
  });
});
