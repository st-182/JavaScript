const button = document.getElementById(`btn`);
const body = document.querySelector(`body`);
button.addEventListener(`click`, changeBackground);
// let changeBackground = () =>
function changeBackground(color) {
  const colors = [`skyblue`, `red`, `blue`, `black`, `crimson`, `yellow`];
  const colorPicker = Math.floor(Math.random() * colors.length);
  console.log(colorPicker);
  body.style.backgroundColor = colors[colorPicker];
}
