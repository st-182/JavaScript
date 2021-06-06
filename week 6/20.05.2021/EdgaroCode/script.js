const record = document.querySelector(".record");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const age = document.querySelector(".age");
  const h1 = document.querySelector("h1");
  const criminal = record.checked;
  if (age.value >= 18 && age.value <= 30 && !criminal) {
    h1.textContent = `Esi saukiamas!`;
  } else {
    h1.textContent = `Taves nesaukia.`;
  }
});
