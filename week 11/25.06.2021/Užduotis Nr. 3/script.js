document.querySelector(`a`).addEventListener(`click`, () => {
  if (document.querySelector(`nav`).classList.contains(`none`)) {
    document
      .querySelector(`nav`)
      .animate([{ opacity: 0 }, { opacity: 1 }], 500);
    document.querySelector(`nav`).classList.toggle(`none`);
  } else {
    document
      .querySelector(`nav`)
      .animate([{ opacity: 1 }, { opacity: 0 }], 500);
    setTimeout(() => {
      document.querySelector(`nav`).classList.toggle(`none`);
    }, 500);
  }
});
