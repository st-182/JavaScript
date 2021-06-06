// VARIABLES

const menuToggler = document.querySelector(`.navigation-toggler i`);
const menu = document.querySelector(`.navigation`);
let showingMenu = false;
// FUNCTIONS

// const togglerMenu = () => {
//   menu.classList.add(`active`);  //prides klase
// if (menu.classList.contains(`active`)) { // ar yra class 'active'
//     menu.classList.remove(`active`);
//   } else {
//     menu.classList.add(`active`);
//   }
// };

const togglerMenu = () => menu.classList.toggle(`active`);

// const togglerMenu = () => {
//   if (showingMenu) {
//     menu.style.display = `none`;
//     showingMenu = false;
//   } else {
//     menu.style.display = `block`;
//     showingMenu = true;
//   }
// };
// EVENTS

menuToggler.addEventListener(`click`, togglerMenu);
