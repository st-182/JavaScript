//Var
const dino = document.querySelector(`#dino`);
const cactus = document.querySelector(`#cactus`);
//Events
document.addEventListener(`keydown`, (e) => {
  jump();
});
// Functions
function jump() {
  //   dino.classList.toggle(`jump`);
  // dino.classList.add(`jump`)
  if (dino.classList != `jump`) {
    dino.classList.add(`jump`);
    setTimeout(() => dino.classList.remove(`jump`), 300);
  }
}
const isAlive = setInterval(() => {
  const dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue(`top`)
  );
  const cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue(`left`)
  );
  if (cactusLeft < 50 && cactusLeft >= 0 && dinoTop >= 140) {
    dino.classList.add(`fire`);
    setTimeout(() => dino.classList.remove(`fire`), 500);
    // alert(`Game Over`);
  }
}, 10);
function doStuff() {
  console.log(window.getComputedStyle(dino).getPropertyValue(`top`));
}
setInterval(doStuff, 1000);
