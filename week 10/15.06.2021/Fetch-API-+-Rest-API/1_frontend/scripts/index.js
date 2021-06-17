//API end points
const ALL_ADVERTS = `http://localhost:5000/adverts`;

// Variables
const advertsListElement = document.querySelector(`#adverts-list`);
const formElement = document.querySelector(`form`);
const messageElement = document.querySelector(`#message`);
let id;
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
            <div id="${advert.id}">
            <h3>Name: ${advert.name}</h3>
            <p>Price: ${advert.price}</p>
            <p>Phone: ${advert.phone}</p>
            <button class="update-btn" data-id="${advert.id}">Update</button>
            <button class="delete-btn" data-id="${advert.id}">Delete</button>
            </div>
            `;
      }
      advertsListElement.innerHTML = output;

      const updateBtn = document.querySelectorAll(`.update-btn`);
      const deleteBtn = document.querySelectorAll(`.delete-btn`);
      console.log(updateBtn);
      updateBtn.forEach((item) => item.addEventListener(`click`, updateAdvert));
      deleteBtn.forEach((item) => item.addEventListener(`click`, deleteAdvert));
    });
}

function sendAdvert(e) {
  e.preventDefault();
  //checking for POST or UPDATE
  console.log(`form works`);
  let name = e.target.name.value;
  let price = e.target.price.value;
  let phone = e.target.phone.value;

  if (!name || !price || !phone) {
    return (messageElement.textContent = `Please fill all fields`);
  } else {
    messageElement.textContent = ``;
  }
  return fetch(ALL_ADVERTS + (id ? `/${id}` : ``), {
    method: id ? `PUT` : `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(
      id ? { id, name, price, phone } : { name, price, phone }
    ),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      id = undefined;
      messageElement.innerText = data.message;
      getAndSHowAllAdverts();
      formElement.reset();
    });
}

//PUT (update data)
function updateAdvert(e) {
  const advertelements = e.target.parentElement.children;
  // console.log(advertelements);
  const [name, price, phone] = advertelements;
  //form inputs
  const nameInput = document.querySelector(`#name`);
  const priceInput = document.querySelector(`#price`);
  const phoneInput = document.querySelector(`#phone`);
  nameInput.value = name.innerText.slice(5);
  priceInput.value = price.innerText.slice(6);
  phoneInput.value = phone.innerText.slice(6);
  // console.log(e.target.dataset.id);
  // console.log(e.target.parentElement.children);
  id = e.target.dataset.id;
}

//DELETE data
function deleteAdvert(e) {
  return fetch(ALL_ADVERTS + `/ ${e.target.dataset.id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      messageElement.innerText = data.message;
      getAndSHowAllAdverts();
      setTimeout(() => {
        // location.reload();
      }, 1000);
    });
}

// Events
document.addEventListener(`DOMContentLoaded`, getAndSHowAllAdverts);
console.log(formElement);
formElement.addEventListener(`submit`, sendAdvert);
