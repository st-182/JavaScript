// Funkcinis
// -- variables
const funcHeadline = document.querySelector(`#functional-headline`);
const funcButton = document.querySelector(`#func-button`);
// -- functions
const toggleFuncHeadline = () => {
  if (!funcButton.classList.contains(`clicked`)) {
    funcHeadline.style.display = `none`;

    funcButton.innerText = `Show`;
    funcButton.classList.add(`clicked`);
  } else {
    funcHeadline.style.display = `block`;

    funcButton.innerText = `Hide`;
    funcButton.classList.remove(`clicked`);
  }
};

// -- events
funcButton.addEventListener(`click`, toggleFuncHeadline);
// Objektinis
const oopHeadline = document.querySelector(`#oop-headline`);
const oopButton = document.querySelector(`#oop-button`);

class ToggleHeadline {
  constructor(headline, button) {
    this.headline = headline;
    this.button = button;
  }
  toggleOOPHeadline() {
    if (!this.button.classList.contains(`clicked`)) {
      this.headline.style.display = `none`;

      this.button.innerText = `Show`;
      this.button.classList.add(`clicked`);
    } else {
      this.headline.style.display = `block`;

      this.button.innerText = `Hide`;
      this.button.classList.remove(`clicked`);
    }
  }
}
const toggleCompenent = new ToggleHeadline(oopHeadline, oopButton);
console.log(toggleCompenent);

oopButton.addEventListener(`click`, () => toggleCompenent.toggleOOPHeadline());
