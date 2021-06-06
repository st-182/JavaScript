// Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

document.querySelector(`form`).addEventListener(`submit`, (e) => {
  e.preventDefault();
  let temperature = document.querySelector(`input:first-child`).value;
  document.querySelector(`h1`).textContent = `Temperature is ${Math.floor(
    (temperature - 32) * (5 / 9)
  )}°C`;
});
