//API end points
const ALL_ADVERTS = `http://localhost:5000/adverts`;

// Variables
const advertsListElement = document.querySelector(`#adverts-list`);

// Functions

function getAndSHowAllAdverts() {
  return fetch(ALL_ADVERTS)
    .then((response) => response.json())
    .then((data) => {
      let adverts = data;
      let output = ``;
      for (let advert of adverts) {
        output += `
            <div>
            <h3>${advert.name}</h3>
            <p>${advert.price}</p>
            <p>${advert.phone}</p>
            </div>
            `;
      }
      advertsListElement.innerHTML = output;
    });
}

// Events
document.addEventListener(`DOMContentLoaded`, getAndSHowAllAdverts);
