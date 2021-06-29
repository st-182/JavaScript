// imports
// js
import Buttons from "./module/greeting.js";
// css
import "../styles/1_resets.css";
import "../styles/index.css";
console.log(`hi`);
const btns = document.querySelectorAll(`.greeting__button`);
const message = document.querySelector(`#message`);
console.log(btns, message);
const buttons = new Buttons(btns, message);
console.log(buttons);

document.addEventListener(`DOMContentLoaded`, () => buttons.showMessage());
