// Sukuriame du puslapius (index.html ir add.html) - CSS frameworką naudoti galima, tačiau rekomenduotina daryti su custom CSS.
const API_ENDPOINT = `https://radial-reinvented-shoe.glitch.me`;

// ---------- index HTML -----------------
// variables
const outputElement = document.querySelector(`#output`);
let output;
//Events
document.addEventListener(`DOMContentLoaded`, () => {
  return fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((item) => {
        output += `
      <div class="item">
      <img class="image" src="${item.image}">
      <p class="price">${item.price}</p>
      <p class="city">${item.city}</p>
      <p class="description">${item.description}</p>      
      </div>
      `;
      });
      outputElement.innerHTML = output;
    });
});

