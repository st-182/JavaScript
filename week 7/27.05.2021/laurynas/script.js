const form5 = document.querySelector(`#form5`);

form5.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const input8 = document.querySelector(`#input8`).value.trim();

  const fullName2 = input8.split(` `);
  console.log(fullName2);
  for (let i = 0; i < fullName2.length; i++) {
    if (i === 0) {
      document.body.appendChild(document.createElement(`h2`)).textContent =
        fullName2[i];
    } else if (i === 1) {
      document.body.appendChild(document.createElement(`h2`)).textContent =
        fullName2[1] + ` ` + fullName2[2];
    } else if (i === 2) {
      null;
    } else {
      null;
    }
  }
});
