// Padaryti, kad rezultate rodytų ir gyventojų skaičių;
// Padaryti papildomą filtravimą su radio kurio esmė bus gyventojų atvaizdavimas pagal didėjimą/mažėjimą;

// Variables
const searchInput = document.querySelector("#search");
const suggestions = document.querySelector("#suggestions");
const ascending = document.querySelector("#ascending");
const descending = document.querySelector("#descending");
const CITIES_ENDPOINT =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
fetch(CITIES_ENDPOINT)
  .then((response) => response.json())
  .then((data) => cities.push(...data));
// Functions
function findCities(word, citiesArray) {
  return citiesArray.filter((city) => {
    const rgxRule = new RegExp(word, "gi");
    return city.city.match(rgxRule) || city.state.match(rgxRule);
  });
}
function displayCities(e) {
  const matchedCities = findCities(e.target.value, cities);
  let output = "";
  if (ascending.checked) {
    matchedCities.sort((a, b) => +a.population > +b.population);
  } else {
    matchedCities.sort((a, b) => +a.population < +b.population);
  }

  for (let citie of matchedCities) {
    output += `
      <li>${(citie.population / 1000000).toFixed(3)} million, ${citie.city}, ${
      citie.state
    }.</li>
      `;
  }
  suggestions.innerHTML = output;
  if (e.target.value === ``) suggestions.innerHTML = ``;
}
// Events
searchInput.addEventListener("keyup", displayCities);
ascending.addEventListener("click", displayCities);
descending.addEventListener("click", displayCities);
