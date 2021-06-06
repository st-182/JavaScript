// Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
// Pvz:
// Įvesta: 2
// Rezultatas:
// *
// **

// Įvesta: 5
// Rezultatas:
// *
// **
// ***
// ****
// *****

document.querySelector(`form`).addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(`.mydiv`).innerHTML = ``;
  let as = `*`;
  let ass = ``;
  const times = Number(e.target[0].value);
  for (i = 0; i < times; i++) {
    ass = ass + as;
    document
      .querySelector(`.mydiv`)
      .appendChild(document.createElement(`p`)).textContent = ass;
  }
});
