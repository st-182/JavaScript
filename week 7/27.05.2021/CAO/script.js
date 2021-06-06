//      Pasirašykite variable isLegalAge, kurį priskirkite true arba false. Console.log'e atvaizduokite šį variable.     Sukurkite antrą console.log, kuriame atvaizduokite šį variable su toString() metodu. Turėtų skirtis spalva teksto.

// // Viskas, rimtai, tie boolean paprasti.
let isLegalAge = false;
console.log(isLegalAge);
console.log(isLegalAge.toString());

//      Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).
//* let milkPrice = 1.01;
//* Number.isInteger(milkPrice)
//*   ? alert(`you don't need cents`)
//*   : alert(`you need cents, but you can use ACIU Kortele!`);

//      Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).
let milkPrice = 1.019999;
Number.isInteger(milkPrice)
  ? alert(`you don't need cents because the price is ${milkPrice.toFixed(2)}`)
  : alert(
      `you need cents because the price is ${milkPrice.toFixed(
        2
      )}, but you can use ACIU Kortele!`
    );

//      Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trim skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).
document.querySelector(`form`).addEventListener(`submit`, (e) => {
  e.preventDefault();
  document
    .querySelector(`form`)
    .appendChild(document.createElement(`h1`)).textContent = `${(
    e.target[0].value * e.target[1].value
  ).toFixed(2)} Eur`;
});

// Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
document
  .querySelector(`form:nth-of-type(2)`)
  .addEventListener(`submit`, (e) => {
    e.preventDefault();
    console.log(Number.isInteger(Number(e.target[1].value))); // .isInteger()
    console.log(e.target[0].value);
    alert(
      "number of simbols without space is " + e.target[0].value.trim().length
    ); //                                                         trim()
    let fullName = [];
    fullName = String(e.target[2].value.trim()).split(` `);
    console.log(e.target[2].value);
    console.log(fullName);
    for (let x = 0; x < fullName.length; x++) {
      document
        .querySelector(`form:nth-of-type(2)`)
        .appendChild(
          document.createElement(`h2`)
        ).textContent = `${fullName[x]}`;
    }

    let me = 4;
    console.log(me);

    if (Number.isInteger(Number(e.target[1].value))) {
      //       Number()
      for (let i = 0; i < e.target[1].value; i++) {
        document
          .querySelector(`form:nth-of-type(2)`)
          .appendChild(
            document.createElement(`h1`)
          ).textContent = `${e.target[0].value}`;
      }
    } else {
      alert(`No No No, ahahahahha`);
    }
  });
// Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

// Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.

// Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.
