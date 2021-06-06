// Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

const bonus = 50;
document.querySelector(`form`).addEventListener(`submit`, (e) => {
  e.preventDefault();
  let checked = document.querySelector(`input[type="checkbox"]`).checked;
  email = e.target[0].value;
  console.log(checked);
  if (checked === true) {
    alert(`El. paštas ${email} sėkmingai užregistruotas`);
  } else {
    alert(`Registracija nesėkminga.`);
  }
});
