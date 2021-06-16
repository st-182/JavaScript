// Sukuriame du puslapius (index.html ir add.html) - CSS frameworką naudoti galima, tačiau rekomenduotina daryti su custom CSS.
const API_ENDPOINT = `https://radial-reinvented-shoe.glitch.me`;

// ---------- index HTML -----------------
// variables
const outputElement = document.querySelector(`#output`);
const formElement = document.querySelector(`form`);
let output;
const s
//Events
if (outputElement) {
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
}

const addItem = (e) => {
  e.preventDefault();
  console.log({
    image: `${e.target[0].value}`,
    city: `${e.target[3].value}`,
    price: +e.target[1].value,
    description: `${e.target[2].value}`,
  });
  fetch(API_ENDPOINT, {
    method: `POST`,
    headers: { "Content-Type": `application/json` },
    body: JSON.stringify({
      image: `${e.target[0].value}`,
      city: `${e.target[3].value}`,
      price: +e.target[1].value,
      description: `${e.target[2].value}`,
    }),
  });
};

if (formElement) {
  formElement.addEventListener(`submit`, addItem);
}
