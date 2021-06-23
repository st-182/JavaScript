/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

//API ENDPOINT
const ENDPOINT = "cars.json";

// Variables
// - DOM
const outputElement = document.querySelector(`#output`);
// - logic
const dataArr = [];

// Functions
const getCars = async () => {
  await fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => dataArr.push(...data))
    .catch((error) => console.log(error));
  showCars(dataArr);
};

const showCars = (arr) => {
  arr.forEach((user) => {
    outputElement.innerHTML += `
    <div class="card">
          <h2>${user.brand}</h2>
          <p>${user.models.join(`,  `)}</p>
    </div>
    `;
  });
};

// Events
document.addEventListener(`DOMContentLoaded`, getCars);
