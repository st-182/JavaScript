//? Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.
//? Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
// Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja :)
// const autoURL = `https://fourth-judicious-titanosaurus.glitch.me/cao`; // My first trial
// const autoURL = `https://olive-bead-glazer.glitch.me`; // Petro
const autoURL = `https://motley-wave-freighter.glitch.me/`; // Copy of Petro
let carsArray = [];
let output = ``;

const myPromise = new Promise((resolve, reject) => {
  // have to be changed to addEventListner -> DOMContetntLoaded
  fetch(autoURL)
    .then((response) => response.json())
    .then((data) => {
      carsArray.push(...data);
      console.log(`fetch`);
      resolve(carsArray);
    });

  setTimeout(() => {
    reject("ahhahah, no no no, your Server Is Too SLOW");
  }, 7000);
})
  .then((response) => {
    response.forEach((item) => {
      // console.log(item);
      output += `
    <tr>
    <td> ${item.brand}</td>
    <td> ${item.model}</td>
    <td> ${item.year}</td>
    </tr>
    `;
      document.querySelector(`tbody`)
        ? (document.querySelector(`tbody`).innerHTML = output)
        : null;
    });
    console.log(`done`);
  })
  .catch((error) => console.error(error));

//! #2
const modelValue = document.querySelector(`#model`);
const brandValue = document.querySelector(`#brand`);
const yearValue = document.querySelector(`#year`);
const form = document.querySelector(`form`);
let newCarObject;

const message = document.querySelector(`#message`); //! #3 1 line
class NewCar {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  static addNewCar() {
    console.log(`static method`);
    newCarObject = new NewCar(
      brandValue.value,
      modelValue.value,
      yearValue.value
    );
    console.log(newCarObject);
    fetch(autoURL, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(newCarObject),
    }) //!                                              #3 from here
      .then((response) => {
        console.log(response.status);
        if (response.status >= 200 && response.status < 300) {
          message.textContent = `Success!`;
          message.style.color = `green`;
          setTimeout(() => {
            message.textContent = ``;
          }, 3000);
        } else {
          message.style.color = `red`;
          message.textContent = `ERROR!`;
          setTimeout(() => {
            message.textContent = ``;
          }, 3000);
        }
        return response;
      })
      .catch((error) => error); //!                     #3 to here
  }
}

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  message.classList.add(`animate`);
  setTimeout(() => {
    message.classList.remove(`animate`);
  }, 3000);
  NewCar.addNewCar();
});
