// Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

document.querySelector(`form`).addEventListener(`submit`, (e) => {
  e.preventDefault();
  let yearNow = document.querySelector(`input:first-child`).value;
  if (yearNow % 100 === 0) {
    yearNow % 400 === 0
      ? (document.querySelector(
          `h1`
        ).textContent = `${yearNow} is a leap year (keliamieji metai)`)
      : (document.querySelector(
          `h1`
        ).textContent = `${yearNow} is not a leap year (ne keliamieji metai)`);
  } else {
    yearNow % 4 === 0
      ? (document.querySelector(
          `h1`
        ).textContent = `${yearNow} is a leap year (keliamieji metai)`)
      : (document.querySelector(
          `h1`
        ).textContent = `${yearNow} is not a leap year (ne keliamieji metai)`);
  }
});
