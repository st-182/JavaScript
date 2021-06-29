console.log(`greeting`);
export default class Buttons {
  constructor(buttons, message) {
    this.buttons = buttons;
    this.message = message;
  }
  showMessage() {
    this.buttons.forEach((btn) => {
      btn.addEventListener(`click`, (e) => {
        // if (e.target.id === `btn-good`) {
        //   this.message.innerHTML = `if good, then good`;
        // } else {
        //   this.message.innerHTML = `if ok, then ok`;
        // }
        switch (e.target.id) {
          case `btn-good`:
            this.message.innerHTML = `if good, then good`;
            break;
          case `btn-bad`:
            this.message.innerHTML = `if ok, then ok`;
            break;
        }
      });
    });
  }
}
