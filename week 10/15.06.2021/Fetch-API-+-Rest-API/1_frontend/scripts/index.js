//API end points
const ALL_ADVERTS = `http://localhost:5000/adverts`;

// Variables
const advertsListElement = document.querySelector(`#adverts-list`);
const formElement = document.querySelector(`form`);
const messageElement = document.querySelector(`#message`);
// Functions

function getAndSHowAllAdverts() {
  return fetch(ALL_ADVERTS)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let adverts = data;
      let output = ``;
      for (let advert of adverts) {
        output += `
            <div>
            <h3>Name: ${advert.name}</h3>
            <p>Price: ${advert.price}</p>
            <p>Phone: ${advert.phone}</p>
            </div>
            `;
      }
      advertsListElement.innerHTML = output;
    });
}

function sendAdvert(e) {
  console.log(`form works`);
  e.preventDefault();
  let name = e.target.name.value;
  let price = e.target.price.value;
  let phone = e.target.phone.value;

  if (!name || !price || !phone) {
    return (messageElement.textContent = `Please fill all fields`);
  } else {
    messageElement.textContent = ``;
  }
  return fetch(ALL_ADVERTS, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({ name, price, phone }),
  })
    .then((response) => response)
    .then((data) => {
      console.log(data);
      getAndSHowAllAdverts();
    });
}

// Events
document.addEventListener(`DOMContentLoaded`, getAndSHowAllAdverts);
console.log(formElement);
formElement.addEventListener(`submit`, sendAdvert);
