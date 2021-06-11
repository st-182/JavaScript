// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

//*     Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
//*     Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
//*     Pridėkite prie lentelės (tarp id ir name) nuotrauką.
//*     Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
//     Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.
const URL = `https://magnetic-melon-yam.glitch.me`;
let showAll = true;
let filteredArray;
console.log(`hello`);
let searchName = ``;
let searchSurname = ``;
// const outputElement = document.querySelector(`#output`);
// const btn1Element = document.querySelector(`#btn1`);
// const btn2Element = document.querySelector(`#btn2`);
// const btn3Element = document.querySelector(`#btn3`);

document.body.appendChild(document.createElement(`label`));
document.body.appendChild(document.createElement(`input`));
const label = document.getElementsByTagName(`label`);
const input = document.getElementsByTagName(`input`);
const form = document.querySelector(`form`);

console.log(label);
console.log(input);
console.log(form);
input[2].setAttribute(`type`, `checkbox`);
input[2].id = `checkbox`;
label[1].setAttribute(`for`, `checkbox`);
label[1].textContent = `VIP`;

input[2].addEventListener(`click`, () => {
  console.log(`works`);
  showAll === true ? (showAll = false) : (showAll = true);
  // console.log(showAll);
  tableFromJSON();
});

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  searchName = input[0].value.split(` `)[0];
  searchSurname = input[0].value.split(` `)[1];
  searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
  searchSurname
    ? (searchSurname =
        searchSurname.charAt(0).toUpperCase() + searchSurname.slice(1))
    : (searchSurname = ``);
  console.log(searchName);
  console.log(searchSurname);
  tableFromJSON();
  // searchName = ``;
  // searchSurname = ``;
});

document.body.appendChild(document.createElement(`table`));

//A single function for all URLs
function tableFromJSON() {
  fetch(URL)
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
      if (showAll) {
        if (!searchName) {
          filteredArray = data;
          console.log(`true`);
        } else {
          filteredArray = data.filter(
            (item) =>
              item.name.split(` `)[0] === searchName ||
              item.name.split(` `)[1] === searchName ||
              item.name.split(` `)[1] === searchSurname
          );
        }
      } else {
        if (!searchName) {
          filteredArray = data.filter((item) => item.vip);
          console.log(`false`);
        } else {
          filteredArray = data
            .filter((item) => item.vip)
            .filter(
              (item) =>
                item.name.split(` `)[0] === searchName ||
                item.name.split(` `)[1] === searchName ||
                item.name.split(` `)[1] === searchSurname
            );
        }
      }
      // document.body.appendChild(document.createElement(`table`));
      const table = document.querySelector(`table`);
      table.innerHTML = ``;
      table.appendChild(document.createElement(`thead`));
      const tableHead = document.querySelector(`thead`);
      const tableBody = document.querySelector(`tbody`);
      tableHead.appendChild(document.createElement(`td`)).textContent = `ID`;
      tableHead.appendChild(document.createElement(`td`)).textContent = `Photo`;
      tableHead.appendChild(document.createElement(`td`)).textContent = `Name`;
      tableHead.appendChild(
        document.createElement(`td`)
      ).textContent = `Surname`;
      tableHead.appendChild(document.createElement(`td`)).textContent = `City`;
      tableHead.appendChild(
        document.createElement(`td`)
      ).textContent = `Favourite Color`;
      // console.log(data[0].image);
      // tableBody.innerHTML = ``;
      for (item of filteredArray) {
        table.appendChild(document.createElement(`tr`));
        const takeLastTR = document.querySelector(`tr:last-of-type`);
        takeLastTR.appendChild(document.createElement(`td`)).textContent =
          item.id;
        takeLastTR.appendChild(
          document.createElement(`td`)
        ).innerHTML = `<img src="${item.image}" alt="">`;
        takeLastTR.appendChild(document.createElement(`td`)).textContent =
          item.name.split(` `)[0];
        takeLastTR.appendChild(document.createElement(`td`)).textContent =
          item.name.split(` `)[1];
        takeLastTR.appendChild(document.createElement(`td`)).textContent =
          item.city;
        takeLastTR.appendChild(document.createElement(`td`)).textContent =
          item.fav_color;
      }
    });
}
tableFromJSON();

// btn1Element.addEventListener(`click`, () => {
//   output(URL_comments);
// });
// btn2Element.addEventListener(`click`, () => {
//   output(URL_todos);
// });
// btn3Element.addEventListener(`click`, () => {
//   output(URL_posts);
// });
