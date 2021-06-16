const Base_URL = `https://golden-whispering-show.glitch.me`;
const outputElement = document.querySelector(`#output`);
const formElement = document.querySelector(`form`);
let dataArray = [];
let output = ``;
console.log(`world`);

if (outputElement) {
  document.addEventListener(`DOMContentLoaded`, () => {
    fetch(Base_URL)
      .then((response) => response.json())
      .then((data) => {
        dataArray = data;
        data.forEach((item) => {
          output += `
            <div class="item">
            <img src="${item.image}" alt="">
                <p>${item.title}</p>
                <h3>${item.price}</h3>
                <button class="delete" id="${item.id}">Ištrinti</button>
                </div>
                `;
        });
        outputElement.innerHTML = output;
      });
  });
}

const addItem = (e) => {
  e.preventDefault();
  let id = 100;
  image = e.target[0].value;
  title = e.target[1].value;
  price = e.target[2].value;
  console.log(id, image, title, price);
  fetch(Base_URL, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({ image, title, price }),
  }).then((response) => {
    console.log(response);
    if (response) {
      document.body.appendChild(
        document.createElement(`p`)
      ).textContent = `REDIRECTION initialised`;
      setTimeout(() => {
        window.location.href = "./index.html";
      }, 3000);
    }
  });
};

const deleteItem = (e) => {
  console.log(e.target.id);
  fetch(Base_URL + `/${e.target.id}`, {
    method: `DELETE`,
  }).then((response) => {
    console.log(response);
    if (response) {
      location.reload();
    }
  });
};

if (formElement) {
  formElement.addEventListener(`submit`, addItem);
}
setTimeout(() => {
  const deleteElements = document.querySelectorAll(`.delete`);
  console.log(deleteElements);
  if (deleteElements) {
    deleteElements.forEach((item) =>
      item.addEventListener(`click`, deleteItem)
    );
  }
}, 500);
